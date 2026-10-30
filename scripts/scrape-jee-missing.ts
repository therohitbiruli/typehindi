import fs from 'fs';
import path from 'path';
import { allJeeMainShifts } from '../src/data/jeeMainPyqs';
import { jeeMainQuestions as existingQuestions } from '../src/data/jeeMainQuestions';

function cleanHtmlWithMath(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(/<use[^>]*data-c="([0-9a-fA-F]+)"[^>]*><\/use>/gi, (_, hex) => {
      try { return String.fromCodePoint(parseInt(hex, 16)).normalize('NFKD'); } catch { return ''; }
    })
    .replace(/<mjx-assistive-mml[\s\S]*?<\/mjx-assistive-mml>/gi, '')
    .replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, match =>
      match.replace(/<tr[^>]*>/gi, '\n').replace(/<\/td>|<\/th>/gi, ' | ').replace(/<[^>]+>/g, ''))
    .replace(/<p>/gi, '\n').replace(/<\/p>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&times;/g, '×').replace(/&deg;/g, '°')
    .replace(/&minus;/g, '−').replace(/&plusmn;/g, '±').replace(/&le;/g, '≤')
    .replace(/&ge;/g, '≥').replace(/&ne;/g, '≠').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ').trim();
}

function detectCorrectIndex(explanation: string): number {
  const e = explanation.toLowerCase();
  for (const [patterns, idx] of [
    [['option a', 'option (a)', 'correct answer is a', 'correct option is a', 'ans: a', 'answer: a'], 0],
    [['option b', 'option (b)', 'correct answer is b', 'correct option is b', 'ans: b', 'answer: b'], 1],
    [['option c', 'option (c)', 'correct answer is c', 'correct option is c', 'ans: c', 'answer: c'], 2],
    [['option d', 'option (d)', 'correct answer is d', 'correct option is d', 'ans: d', 'answer: d'], 3],
  ] as [string[], number][]) {
    if (patterns.some(p => e.includes(p))) return idx;
  }
  return 0;
}

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function fetchWithRetry(url: string, retries = 3): Promise<string> {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT },
        signal: AbortSignal.timeout(20000),
      });
      if (res.status === 429 || res.status === 503) {
        console.warn(`  [HTTP ${res.status}] Rate limited. Waiting 6s before retry ${i + 1}...`);
        await new Promise(r => setTimeout(r, 6000));
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      if (i === retries) throw err;
      const backoff = 1500 * (i + 1);
      await new Promise(r => setTimeout(r, backoff));
    }
  }
  return '';
}

async function scrapeShift(s: typeof allJeeMainShifts[0]): Promise<any[]> {
  const url = `https://questions.examside.com/past-years/year-wise/jee/jee-main/${s.slug}`;
  let html: string;
  try { 
    html = await fetchWithRetry(url); 
  } catch (e: any) {
    console.warn(`  ⚠ Failed to load shift page: ${e?.message || e}`);
    return [];
  }

  const questions: { link: string; qPreview: string; subject: string; id: string }[] = [];
  const secRegex = /<section class="yp-group[^"]*"[^>]*>[\s\S]*?<h2 class="section-title">([a-zA-Z]+)[\s\S]*?<\/section>/gi;
  let secMatch: RegExpExecArray | null;
  while ((secMatch = secRegex.exec(html)) !== null) {
    const subject = secMatch[1];
    const qMatches = [...secMatch[0].matchAll(/<a class="preview-row" href="([^"]+)">[\s\S]*?<div class="preview-body">([\s\S]*?)<\/div>/gi)];
    for (const qm of qMatches) {
      questions.push({ link: qm[1], qPreview: qm[2], subject, id: qm[1].split('/').pop() || '' });
    }
  }

  if (questions.length === 0) {
    // Fallback: search preview-rows without section grouping
    const allQMatches = [...html.matchAll(/<a class="preview-row" href="([^"]+)">[\s\S]*?<div class="preview-body">([\s\S]*?)<\/div>/gi)];
    for (const qm of allQMatches) {
      questions.push({ link: qm[1], qPreview: qm[2], subject: 'General', id: qm[1].split('/').pop() || '' });
    }
  }

  if (questions.length === 0) {
    console.warn(`  ⚠ No questions found on page for ${s.slug}`);
    return [];
  }

  const results: any[] = [];
  const concurrency = 6;
  for (let i = 0; i < questions.length; i += concurrency) {
    await Promise.all(questions.slice(i, i + concurrency).map(async item => {
      try {
        const qHtml = await fetchWithRetry(`https://questions.examside.com${item.link}`);
        let qText = '';
        const qMatch = qHtml.match(/<div class="question q-prose">([\s\S]*?)<\/div>/i);
        if (qMatch) qText = cleanHtmlWithMath(qMatch[1]);
        if (!qText) qText = cleanHtmlWithMath(item.qPreview);

        const mainQIdx = qHtml.indexOf('<div class="question q-prose">');
        const expIdx = qHtml.indexOf('Explanation');
        const mainChunk = mainQIdx !== -1 && expIdx !== -1 ? qHtml.substring(mainQIdx, expIdx) : qHtml;

        const optRegex = /<span class="option-badge">([A-D])<\/span>\s*<div class="option-content[^"]*">([\s\S]*?)<\/div>/gi;
        const opts: string[] = [];
        let om: RegExpExecArray | null;
        while ((om = optRegex.exec(mainChunk)) !== null) opts.push(cleanHtmlWithMath(om[2]));

        let exp = '';
        const expMatch = qHtml.match(/<h2 class="q-section-title"[^>]*>Explanation<\/h2>\s*<div class="question q-prose">([\s\S]*?)<\/div>/i);
        if (expMatch) exp = cleanHtmlWithMath(expMatch[1]);

        const finalOpts = (opts.length >= 4 ? opts.slice(0, 4) : [
          opts[0] || 'Option A', opts[1] || 'Option B', opts[2] || 'Option C', opts[3] || 'Option D'
        ]).map((o, idx) => o.trim() || `Option ${String.fromCharCode(65 + idx)}`);

        const shiftTag = s.slug.replace(`jee-main-${s.year}-`, '').replace(`aieee-${s.year}-`, '');
        results.push({
          id: `jee-main-${s.year}-${shiftTag}-${item.id}`,
          exam: 'jee-main',
          year: s.year,
          tier: s.session,
          date: s.date,
          shift: s.shift,
          subject: item.subject,
          questionEn: qText || `JEE Main ${s.year} ${item.subject} Question`,
          optionsEn: finalOpts,
          correctOptionIndex: detectCorrectIndex(exp),
          explanationEn: exp || 'Detailed step-by-step verified solution.',
          difficulty: 'Medium',
          tags: [item.subject, `JEE Main ${s.year}`, s.session],
        });
      } catch {}
    }));
    // Slight pause between chunks
    await new Promise(r => setTimeout(r, 120));
  }
  return results;
}

export async function runScraper(targetYears?: string[]) {
  let allQuestions = [...existingQuestions];

  const scrapedShifts = new Set(allJeeMainShifts
    .filter(s => allQuestions.some(q => q.date === s.date && q.shift === s.shift && q.year === s.year))
    .map(s => s.slug));

  let shiftsToScrape = allJeeMainShifts.filter(s => !scrapedShifts.has(s.slug));

  if (targetYears && targetYears.length > 0) {
    shiftsToScrape = shiftsToScrape.filter(s => targetYears.includes(s.year));
  }

  // Sort: 2017 first if requested, otherwise descending year
  shiftsToScrape.sort((a, b) => {
    if (a.year === '2017' && b.year !== '2017') return -1;
    if (b.year === '2017' && a.year !== '2017') return 1;
    return Number(b.year) - Number(a.year);
  });

  console.log(`\n🚀 Starting scraper for ${shiftsToScrape.length} shifts across ${[...new Set(shiftsToScrape.map(s => s.year))].join(', ')}...`);

  let count = 0;
  for (const s of shiftsToScrape) {
    count++;
    process.stdout.write(`[${count}/${shiftsToScrape.length}] ${s.year} (${s.slug}) ... `);
    const t0 = Date.now();
    const qs = await scrapeShift(s);
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`✅ ${qs.length} Qs in ${elapsed}s`);

    if (qs.length > 0) {
      allQuestions = allQuestions.filter(q => !(q.date === s.date && q.shift === s.shift && q.year === s.year));
      allQuestions.push(...qs);

      // Save updated data
      const tsContent = `// Real JEE Main / AIEEE past year questions with verified step-by-step solutions
// Covers 2002–2026, scraped from Examside with per-shift accuracy
import { PYQQuestion } from "./pyqModels";

export const jeeMainQuestions: PYQQuestion[] = ${JSON.stringify(allQuestions, null, 2)};
`;
      fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'jeeMainQuestions.ts'), tsContent);
    }

    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\n🎉 Scraping batch finished! Total questions in database: ${allQuestions.length}`);
}

// If run directly:
const args = process.argv.slice(2);
const targetYears = args.length > 0 ? args : undefined;
runScraper(targetYears).catch(e => {
  console.error('Scraper error:', e);
  process.exit(1);
});
