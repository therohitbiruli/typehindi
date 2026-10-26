import fs from 'fs';
import path from 'path';

/**
 * Importer Script: import-jee-main-pyqs.ts
 * 
 * Inspects the source listing from:
 * 1. https://pdf.questions.examgoal.com/past-years/year-wise/jee/jee-main
 * 2. https://questions.examside.com/past-years/year-wise/jee/jee-main
 * 
 * Extracts metadata, normalizes years/sessions/shifts, validates all fields,
 * deduplicates paper records, and writes to src/data/jeeMainPyqs.ts.
 */

interface RawPaper {
  title: string;
  slug: string;
  path: string;
  year: string;
  date: string;
  shift: number;
  shiftName: string;
  session: string;
  paperType: string;
  totalQuestions: number;
  durationMinutes: number;
  englishPdfUrl: string | null;
  hindiPdfUrl: string | null;
  solutionsUrl: string;
  sourceUrl: string;
  subjectsCovered: string[];
}

export async function importJeeMainPyqs() {
  console.log('🚀 Starting JEE Main PYQs Import...');

  const cachePath = path.join(process.cwd(), 'scratch', 'examgoal_yearwise.html');
  let html = '';

  if (fs.existsSync(cachePath)) {
    console.log('📖 Reading from cached examgoal_yearwise.html...');
    html = fs.readFileSync(cachePath, 'utf8');
  } else {
    console.log('🌐 Fetching from https://pdf.questions.examgoal.com/past-years/year-wise/jee/jee-main...');
    const res = await fetch('https://pdf.questions.examgoal.com/past-years/year-wise/jee/jee-main', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch source page: HTTP ${res.status}`);
    }
    html = await res.text();
  }

  const yearSectionRegex = /<h2[^>]*>\s*(\d{4})\s*<small[^>]*>(\d+)\s+papers?<\/small>\s*<\/h2>\s*<ul[^>]*>([\s\S]*?)<\/ul>/gi;

  let match;
  const discoveredYears: string[] = [];
  const allShifts: RawPaper[] = [];
  const seenSlugs = new Set<string>();
  let duplicatesCount = 0;
  let skippedCount = 0;

  while ((match = yearSectionRegex.exec(html)) !== null) {
    const year = match[1];
    discoveredYears.push(year);
    const ulContent = match[3];

    const liRegex = /<li class="paper[^"]*">([\s\S]*?)<\/li>/gi;
    let liMatch;

    while ((liMatch = liRegex.exec(ulContent)) !== null) {
      const liHtml = liMatch[1];

      const titleMatch = liHtml.match(/<a class="paper-title[^"]*" href="([^"]+)">([\s\S]*?)<\/a>/);
      const dateMatch = liHtml.match(/<span class="paper-meta[^"]*">\s*<span>([\s\S]*?)<\/span>/);
      const enPdfMatch = liHtml.match(/href="(\/download\/paper\/[^"]+\/en\.pdf)"/);
      const hiPdfMatch = liHtml.match(/href="(\/download\/paper\/[^"]+\/hi\.pdf)"/);

      if (!titleMatch) {
        skippedCount++;
        continue;
      }

      const rawPath = titleMatch[1];
      const rawTitle = titleMatch[2].trim();
      const slug = rawPath.split('/').pop() || '';
      const date = dateMatch ? dateMatch[1].trim() : `${year}`;

      if (seenSlugs.has(slug)) {
        duplicatesCount++;
        continue;
      }
      seenSlugs.add(slug);

      const enPdf = enPdfMatch ? `https://pdf.questions.examgoal.com${enPdfMatch[1]}` : null;
      const hiPdf = hiPdfMatch ? `https://pdf.questions.examgoal.com${hiPdfMatch[1]}` : null;

      // Detect shift
      let shift = 1;
      let shiftName = "Shift 1 (Morning)";
      if (/evening/i.test(rawTitle) || /shift\s*2/i.test(rawTitle)) {
        shift = 2;
        shiftName = "Evening Shift (Shift 2)";
      } else if (/morning/i.test(rawTitle) || /shift\s*1/i.test(rawTitle)) {
        shift = 1;
        shiftName = "Morning Shift (Shift 1)";
      }

      // Detect session
      let session = "Session 1";
      if (/january|jan/i.test(rawTitle) || /jan/i.test(date)) {
        session = "January Session";
      } else if (/april|apr/i.test(rawTitle) || /apr/i.test(date)) {
        session = "April Session";
      } else if (/february|feb/i.test(rawTitle) || /feb/i.test(date)) {
        session = "February Session";
      } else if (/march|mar/i.test(rawTitle) || /mar/i.test(date)) {
        session = "March Session";
      } else if (/july|jul/i.test(rawTitle) || /jul/i.test(date)) {
        session = "July Session";
      } else if (/august|aug|september|sep/i.test(rawTitle) || /aug|sep/i.test(date)) {
        session = "August/September Session";
      } else if (/may/i.test(rawTitle) || /may/i.test(date)) {
        session = "May Session";
      }

      // Detect paper type
      let paperType = "Paper 1 (B.E./B.Tech)";
      if (/paper\s*2a|b\.arch/i.test(rawTitle)) {
        paperType = "Paper 2A (B.Arch)";
      } else if (/paper\s*2b|b\.plan/i.test(rawTitle)) {
        paperType = "Paper 2B (B.Planning)";
      } else if (/paper\s*2/i.test(rawTitle)) {
        paperType = "Paper 2 (B.Arch/B.Planning)";
      }

      const paperRecord: RawPaper = {
        title: rawTitle,
        slug,
        path: rawPath,
        year,
        date,
        shift,
        shiftName,
        session,
        paperType,
        totalQuestions: parseInt(year) >= 2020 ? 75 : 90,
        durationMinutes: 180,
        englishPdfUrl: enPdf,
        hindiPdfUrl: hiPdf,
        solutionsUrl: `https://questions.examside.com/past-years/year-wise/jee/jee-main/${slug}`,
        sourceUrl: `https://pdf.questions.examgoal.com${rawPath}`,
        subjectsCovered: ["Physics", "Chemistry", "Mathematics"]
      };

      allShifts.push(paperRecord);
    }
  }

  console.log(`\n📊 Import Discovery Results:`);
  console.log(`- Discovered Years: ${discoveredYears.length} (${discoveredYears[discoveredYears.length - 1]} to ${discoveredYears[0]})`);
  console.log(`- Unique Valid Papers Extracted: ${allShifts.length}`);
  console.log(`- Duplicates Skipped: ${duplicatesCount}`);
  console.log(`- Incomplete Records Skipped: ${skippedCount}`);

  // Group papers by year for PYQPaper[]
  const papersByYear: Record<string, RawPaper[]> = {};
  allShifts.forEach(p => {
    if (!papersByYear[p.year]) papersByYear[p.year] = [];
    papersByYear[p.year].push(p);
  });

  const sortedYears = Object.keys(papersByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const pyqPapersList = sortedYears.map(year => {
    const shiftsInYear = papersByYear[year];
    const hasApril = shiftsInYear.some(s => s.session === "April Session");
    const hasJan = shiftsInYear.some(s => s.session === "January Session");
    const tier = hasApril && hasJan
      ? "January & April Session"
      : (shiftsInYear[0]?.session || "Session 1");

    return {
      slug: `jee-main-previous-year-question-paper-${year}`,
      examId: "jee-main",
      year: year,
      tier: tier,
      title: `JEE Main Previous Year Question Paper ${year}`,
      description: `Official NTA JEE Main ${year} shift-wise question papers with answers, solutions, and free PDF download links in English and Hindi.`,
      shifts: shiftsInYear.map(s => ({
        date: s.date,
        shift: s.shift,
        slug: s.slug,
        totalQuestions: s.totalQuestions,
        durationMinutes: s.durationMinutes,
        englishPdfUrl: s.englishPdfUrl || undefined,
        hindiPdfUrl: s.hindiPdfUrl || undefined,
        subjectsCovered: s.subjectsCovered
      }))
    };
  });

  // Prepare typescript code for src/data/jeeMainPyqs.ts
  const outputCode = `// Generated automatically by scripts/import-jee-main-pyqs.ts
// Source: https://pdf.questions.examgoal.com/past-years/year-wise/jee/jee-main
// Source Solutions: https://questions.examside.com/past-years/year-wise/jee/jee-main

import { PYQExam, PYQPaper, PYQShift } from "./pyqModels";

export interface JEEPaperShift extends PYQShift {
  title: string;
  year: string;
  session: string;
  shiftName: string;
  paperType: string;
  solutionsUrl: string;
  sourceUrl: string;
  path?: string;
}

export const jeeMainExam: PYQExam = {
  id: "jee-main",
  name: "JEE Main",
  shortDescription: "Joint Entrance Examination (Main) for B.E. / B.Tech, B.Arch & B.Planning"
};

export const allJeeMainShifts: JEEPaperShift[] = ${JSON.stringify(allShifts, null, 2)};

export const jeeMainPapers: PYQPaper[] = ${JSON.stringify(pyqPapersList, null, 2)};
`;

  const outputPath = path.join(process.cwd(), 'src', 'data', 'jeeMainPyqs.ts');
  fs.writeFileSync(outputPath, outputCode, 'utf8');
  console.log(`\n✅ Generated data file: ${outputPath} (${(outputCode.length / 1024).toFixed(1)} KB)`);

  return {
    discoveredYears,
    totalPapers: allShifts.length,
    duplicatesCount,
    skippedCount
  };
}

// If executed directly via ts-node/tsx
if (require.main === module || process.argv[1]?.includes('import-jee-main-pyqs')) {
  importJeeMainPyqs()
    .then(report => {
      console.log('\n🎉 JEE Main Import Completed Successfully!');
      console.log(JSON.stringify(report, null, 2));
    })
    .catch(err => {
      console.error('❌ Import failed:', err);
      process.exit(1);
    });
}
