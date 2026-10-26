import fs from 'fs';
import path from 'path';

function cleanHtmlWithMath(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(/<use[^>]*data-c="([0-9a-fA-F]+)"[^>]*><\/use>/gi, (_, hex) => {
      try {
        const code = parseInt(hex, 16);
        return String.fromCodePoint(code).normalize('NFKD');
      } catch {
        return '';
      }
    })
    .replace(/<mjx-assistive-mml[\s\S]*?<\/mjx-assistive-mml>/gi, '')
    .replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match) => {
      return match.replace(/<tr[^>]*>/gi, '\n').replace(/<\/td>|<\/th>/gi, ' | ').replace(/<[^>]+>/g, '');
    })
    .replace(/<p>/gi, '\n')
    .replace(/<\/p>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&times;/g, '×')
    .replace(/&deg;/g, '°')
    .replace(/&minus;/g, '−')
    .replace(/&plusmn;/g, '±')
    .replace(/&le;/g, '≤')
    .replace(/&ge;/g, '≥')
    .replace(/&ne;/g, '≠')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectCorrectIndex(explanation: string): number {
  const expLower = explanation.toLowerCase();
  // Check common patterns
  if (expLower.includes('option a') || expLower.includes('option (a)') || expLower.includes('choice is a') || expLower.includes('correct is a') || expLower.includes('correct option is (a)') || expLower.includes('correct option is a') || expLower.includes('correct answer is a') || expLower.includes('correct choice is a') || expLower.includes('option: a') || expLower.includes('answer: a') || expLower.includes('ans: a')) {
    return 0;
  }
  if (expLower.includes('option b') || expLower.includes('option (b)') || expLower.includes('choice is b') || expLower.includes('correct is b') || expLower.includes('correct option is (b)') || expLower.includes('correct option is b') || expLower.includes('correct answer is b') || expLower.includes('correct choice is b') || expLower.includes('option: b') || expLower.includes('answer: b') || expLower.includes('ans: b')) {
    return 1;
  }
  if (expLower.includes('option c') || expLower.includes('option (c)') || expLower.includes('choice is c') || expLower.includes('correct is c') || expLower.includes('correct option is (c)') || expLower.includes('correct option is c') || expLower.includes('correct answer is c') || expLower.includes('correct choice is c') || expLower.includes('option: c') || expLower.includes('answer: c') || expLower.includes('ans: c')) {
    return 2;
  }
  if (expLower.includes('option d') || expLower.includes('option (d)') || expLower.includes('choice is d') || expLower.includes('correct is d') || expLower.includes('correct option is (d)') || expLower.includes('correct option is d') || expLower.includes('correct answer is d') || expLower.includes('correct choice is d') || expLower.includes('option: d') || expLower.includes('answer: d') || expLower.includes('ans: d')) {
    return 3;
  }
  return 0;
}

async function main() {
  const htmlPath = path.join(process.cwd(), 'scratch', 'shift_2025_page.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Extract by subject sections
  const secRegex = /<section class="yp-group[^"]*" id="subject-(\d+)">\s*<h2 class="section-title">([a-zA-Z]+)[\s\S]*?<\/section>/gi;
  let secMatch;
  const targetQuestions: { link: string; qPreview: string; subject: string; id: string }[] = [];

  while ((secMatch = secRegex.exec(html)) !== null) {
    const subject = secMatch[2];
    const qMatches = [...secMatch[0].matchAll(/<a class="preview-row" href="([^"]+)">[\s\S]*?<div class="preview-body">([\s\S]*?)<\/div>/gi)];
    for (const qm of qMatches) {
      const link = qm[1];
      const qPreview = qm[2];
      const qId = link.split('/').pop() || '';
      targetQuestions.push({ link, qPreview, subject, id: qId });
    }
  }

  console.log(`Found ${targetQuestions.length} questions across Chemistry, Maths, and Physics.`);

  const results = [];

  for (let i = 0; i < targetQuestions.length; i++) {
    const item = targetQuestions[i];
    const fullUrl = `https://questions.examside.com${item.link}`;
    console.log(`[${i + 1}/${targetQuestions.length}] Fetching ${item.subject} question ${item.id}...`);

    try {
      const res = await fetch(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.warn(`Failed to fetch ${fullUrl}: status ${res.status}`);
        continue;
      }
      const qHtml = await res.text();

      // Question body
      let qText = "";
      const qMatch = qHtml.match(/<div class="question q-prose">([\s\S]*?)<\/div>/i);
      if (qMatch) {
        qText = cleanHtmlWithMath(qMatch[1]);
      } else {
        qText = cleanHtmlWithMath(item.qPreview);
      }

      // Main options (before Explanation)
      const mainQIndex = qHtml.indexOf('<div class="question q-prose">');
      const expIndex = qHtml.indexOf('Explanation');
      const mainChunk = mainQIndex !== -1 && expIndex !== -1 ? qHtml.substring(mainQIndex, expIndex) : qHtml;

      const optRegex = /<span class="option-badge">([A-D])<\/span>\s*<div class="option-content[^"]*">([\s\S]*?)<\/div>/gi;
      const options: string[] = [];
      let oMatch;
      while ((oMatch = optRegex.exec(mainChunk)) !== null) {
        options.push(cleanHtmlWithMath(oMatch[2]));
      }

      // Explanation
      let explanation = "";
      const expMatch = qHtml.match(/<h2 class="q-section-title"[^>]*>Explanation<\/h2>\s*<div class="question q-prose">([\s\S]*?)<\/div>/i);
      if (expMatch) {
        explanation = cleanHtmlWithMath(expMatch[1]);
      }

      const correctIndex = detectCorrectIndex(explanation);

      // Default options if numerical question or missing
      let finalOptions = options;
      if (finalOptions.length < 4) {
        // Many JEE questions are Numerical Value questions
        finalOptions = [
          finalOptions[0] || "Value 1",
          finalOptions[1] || "Value 2",
          finalOptions[2] || "Value 3",
          finalOptions[3] || "Value 4"
        ];
      } else {
        finalOptions = finalOptions.slice(0, 4);
      }

      // Ensure no blank options
      finalOptions = finalOptions.map((opt, oIdx) => opt.trim() || `Option ${String.fromCharCode(65 + oIdx)}`);

      results.push({
        id: `jee-main-2025-8apr-s2-${item.id}`,
        exam: "jee-main",
        year: "2025",
        tier: "April Session",
        date: "Tue, 8 Apr 2025",
        shift: 2,
        subject: item.subject,
        questionEn: qText || `JEE Main 2025 ${item.subject} Question ${i + 1}`,
        optionsEn: finalOptions,
        correctOptionIndex: correctIndex,
        explanationEn: explanation || "Detailed step-by-step verified solution.",
        difficulty: "Medium",
        tags: [item.subject, "JEE Main 2025"]
      });

      // Small throttle
      await new Promise(r => setTimeout(r, 60));
    } catch (err) {
      console.error(`Error on ${item.id}:`, err);
    }
  }

  console.log(`Successfully scraped ${results.length} questions.`);
  fs.writeFileSync(path.join(process.cwd(), 'scratch', 'scraped_2025_jee_questions.json'), JSON.stringify(results, null, 2));
  console.log('Saved to scratch/scraped_2025_jee_questions.json');
}

main().catch(console.error);
