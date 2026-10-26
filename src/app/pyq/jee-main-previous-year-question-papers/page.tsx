import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";
import { JEEMainHubClient } from "../../../components/pyq/JEEMainHubClient";
import { allJeeMainShifts, jeeMainPapers } from "../../../data/jeeMainPyqs";

export const metadata: Metadata = {
  title: "JEE Main Previous Year Question Papers with Solutions (2002-2026) | Download PYQ PDF - TypeHindi",
  description: "Download and practice official JEE Main previous year question papers year-wise and shift-wise (2002 to 2026) with detailed solutions, answer keys, English & Hindi PDFs. Take online mock tests for Physics, Chemistry & Mathematics.",
  keywords: [
    "JEE Main Previous Year Question Papers",
    "JEE Main PYQ PDF",
    "JEE Main Previous Year Papers with Solutions",
    "JEE Main Question Papers Year Wise",
    "JEE Main January Session Question Papers",
    "JEE Main April Session Question Papers",
    "JEE Main Shift Wise Question Papers",
    "JEE Main Online PYQ Practice",
    "JEE Main 2026 PYQ",
    "JEE Main 2025 PYQ",
    "JEE Main 2024 PYQ",
    "TypeHindi PYQ"
  ],
  alternates: {
    canonical: "https://typehindi.in/pyq/jee-main-previous-year-question-papers",
  },
  openGraph: {
    title: "JEE Main Previous Year Question Papers with Solutions (2002-2026) | TypeHindi",
    description: "Browse 202 verified JEE Main question papers across 25 years. Shift-wise question papers with official answer keys, solutions, and free PDF downloads.",
    url: "https://typehindi.in/pyq/jee-main-previous-year-question-papers",
    type: "article",
  }
};

export default function JEEMainLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many years of JEE Main previous year question papers are available on TypeHindi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TypeHindi provides 202 verified JEE Main question papers spanning 25 years from 2002 up to 2026, organized by exam year, session (January and April), and shifts."
        }
      },
      {
        "@type": "Question",
        "name": "Are both English and Hindi medium JEE Main PYQ PDFs available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every shift includes direct download links for both English and Hindi language question papers with complete question diagrams and equations."
        }
      },
      {
        "@type": "Question",
        "name": "Can I practice JEE Main previous year questions as online mock tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can take timed mock tests in an exam-like Computer Based Test (CBT) environment on TypeHindi, complete with instant scoring, accuracy analysis, and verified step-by-step explanations."
        }
      },
      {
        "@type": "Question",
        "name": "Are detailed step-by-step solutions provided for every paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every paper card features a direct 'View Solutions' link to verified step-by-step explanations and official answer keys for Physics, Chemistry, and Mathematics."
        }
      },
      {
        "@type": "Question",
        "name": "How is the JEE Main exam structured for Paper 1 (B.E./B.Tech)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paper 1 consists of three subjects: Physics, Chemistry, and Mathematics. Under the current NTA pattern, each subject has 25 questions (20 Multiple Choice Questions and 5 Numerical Value Questions) for a total of 75 questions worth 300 marks over a duration of 3 hours (180 minutes)."
        }
      }
    ]
  };

  return (
    <div className="container-main py-8 min-h-[70vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "PYQs", href: "/pyq" },
          { label: "JEE Main Previous Year Question Papers" },
        ]}
      />

      {/* Hero Header */}
      <header className="mt-8 mb-10 text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-800/50 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          NTA Joint Entrance Examination (Main)
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          JEE Main Previous Year Question Papers with Solutions
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Browse official <strong>JEE Main question papers year-wise and shift-wise</strong> from 2002 to 2026. 
          Download verified English & Hindi PDFs, review step-by-step solutions, and practice in an interactive online test environment.
        </p>

        {/* Highlight Stats Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
            🎯 <span className="text-primary-600 dark:text-primary-400">202</span> Verified Papers
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
            📅 <span className="text-emerald-600 dark:text-emerald-400">25 Years</span> (2002–2026)
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
            ⚡ January & April Sessions
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
            🌐 English & Hindi PDFs
          </div>
        </div>
      </header>

      <AdPlaceholder position="top" />

      {/* Main Interactive Directory */}
      <section className="my-8">
        <JEEMainHubClient papers={jeeMainPapers} allShifts={allJeeMainShifts} />
      </section>

      <AdPlaceholder position="bottom" />

      {/* Comprehensive SEO Content & Practice Guide (500–700 words) */}
      <article className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 mt-12 mb-8 shadow-sm space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
            Master the Exam with JEE Main Previous Year Question Papers
          </h2>
          <p>
            The <strong className="font-semibold text-slate-800 dark:text-slate-200">Joint Entrance Examination (JEE Main)</strong>, conducted biannually by the National Testing Agency (NTA), is the premier national-level engineering entrance examination in India. It serves as the gateway to undergraduate admissions across National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs), Centrally Funded Technical Institutes (CFTIs), as well as the qualifying exam for JEE Advanced and the Indian Institutes of Technology (IITs).
          </p>
          <p className="mt-3">
            Solving <strong className="font-semibold text-slate-800 dark:text-slate-200">JEE Main Previous Year Question Papers</strong> is widely recognized by top educators and rankers as the single most effective preparation strategy. While textbooks and coaching modules teach conceptual theory, real exam papers teach aspirants how concepts are tested under strict time constraints, how multi-concept problems are structured across Physics, Chemistry, and Mathematics, and which high-yield topics carry maximum weightage.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Shift-Wise and Session-Wise Paper Organization
          </h3>
          <p>
            Since the transition to Computer Based Testing (CBT), the NTA conducts JEE Main across multiple sessions—typically the <strong className="font-semibold text-slate-800 dark:text-slate-200">January Session</strong> (Session 1) and the <strong className="font-semibold text-slate-800 dark:text-slate-200">April Session</strong> (Session 2). Each session is spread across several examination dates, featuring Morning Shifts (9:00 AM to 12:00 PM) and Evening Shifts (3:00 PM to 6:00 PM).
          </p>
          <p className="mt-3">
            On TypeHindi, our <strong className="font-semibold text-slate-800 dark:text-slate-200">JEE Main Shift Wise Question Papers</strong> archive catalogs all 202 genuine examination shifts from 2002 through 2026. This allows candidates to practice exact shift sets, compare difficulty levels between morning and evening slots, and simulate the exact conditions of their assigned exam slot.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Understanding JEE Main Paper Types: Paper 1 vs. Paper 2
          </h3>
          <p>
            When selecting question papers, candidates should ensure they choose the appropriate paper code corresponding to their target undergraduate program:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong className="font-semibold text-slate-800 dark:text-slate-200">Paper 1 (B.E. / B.Tech):</strong> Designed for engineering admissions. Consists of 75 questions divided equally among Physics (25 Qs), Chemistry (25 Qs), and Mathematics (25 Qs). Each section contains 20 Multiple Choice Questions (MCQs) and 5 Numerical Value Questions (NVQs), with a +4 marking for correct responses and -1 negative marking for incorrect attempts.
            </li>
            <li>
              <strong className="font-semibold text-slate-800 dark:text-slate-200">Paper 2A (B.Arch) & Paper 2B (B.Planning):</strong> Designed for architecture and planning aspirants, featuring Mathematics, Aptitude, and specialized Drawing or Planning sections.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Online PYQ Practice vs. PDF Downloads
          </h3>
          <p>
            TypeHindi offers a hybrid preparation platform combining <strong className="font-semibold text-slate-800 dark:text-slate-200">JEE Main PYQ PDF</strong> downloads with <strong className="font-semibold text-slate-800 dark:text-slate-200">JEE Main Online PYQ Practice</strong> mock tests. For offline self-study and revision away from screens, candidates can download official PDFs in both English and Hindi medium. For realistic exam rehearsal, users can launch the interactive test engine, experience countdown timers, mark questions for review, and evaluate their speed and accuracy per subject.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            How to Use JEE Main Previous Year Papers with Solutions Effectively
          </h3>
          <ol className="list-decimal pl-6 space-y-2.5">
            <li>
              <strong className="font-semibold text-slate-800 dark:text-slate-200">Simulate Real Exam Conditions:</strong> Sit in an uninterrupted environment for 180 continuous minutes without glancing at answer keys or formulas beforehand.
            </li>
            <li>
              <strong className="font-semibold text-slate-800 dark:text-slate-200">Review Verified Step-by-Step Solutions:</strong> Following each test, thoroughly inspect every incorrect answer and skipped question. Understand the underlying principles and shortcuts highlighted in the verified solutions.
            </li>
            <li>
              <strong className="font-semibold text-slate-800 dark:text-slate-200">Maintain an Error Log:</strong> Document calculation blunders, formula confusions, and conceptual gaps in a dedicated mistake book. Revisit these tricky questions before attempting the next shift.
            </li>
            <li>
              <strong className="font-semibold text-slate-800 dark:text-slate-200">Benchmark Your Score:</strong> Track your raw scores across multiple years (e.g. 2024, 2025, 2026) to estimate your percentile rank and pinpoint areas needing revision.
            </li>
          </ol>
        </div>

        {/* Back link to main hub */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <Link
            href="/pyq"
            className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1.5"
          >
            ← Back to All Exams PYQ Hub
          </Link>
          <span className="text-xs text-slate-400">
            Source Data Attributed to NTA, Examgoal & Examside
          </span>
        </div>
      </article>

      {/* Frequently Asked Questions */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800 mt-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="w-1.5 h-6 rounded-full bg-primary-600"></span>
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white">
              Where can I find JEE Main Question Papers Year Wise?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
              Right here on TypeHindi! Use our quick year-selector buttons above to browse all 25 years from 2002 through 2026, complete with session labels, shifts, and paper types.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white">
              How do I choose between January and April sessions?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
              Use the Session filter dropdown to select either January Session or April Session. Candidates aiming for the upcoming January attempt are strongly advised to practice the previous year&apos;s January and April shifts first.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white">
              Are verified solutions available for every question?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
              Yes, click the &ldquo;View Solutions&rdquo; button on any paper card to open the verified step-by-step solution breakdown with detailed equations and official NTA answer keys.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white">
              Can I download papers in Hindi medium?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
              Yes, all 202 papers feature direct download links for both Hindi Medium PDFs and English Medium PDFs, with fully preserved mathematical formulas and diagrams.
            </p>
          </div>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
