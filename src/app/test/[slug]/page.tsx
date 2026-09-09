import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";
import { TypingTestTool } from "../../../components/TypingTestTool";
import { ALL_LANGUAGES, getLanguageConfig } from "../../../data/languages";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_LANGUAGES.map((lang) => ({
    slug: lang.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = ALL_LANGUAGES.find((l) => l.slug === slug);
  if (!lang) return {};

  const url = `https://typehindi.in/test/${lang.slug}`;
  const title = `${lang.name} Typing Test Online – 10 Min Exam Speed Simulator | TypeHindi`;
  const description = `Take a timed ${lang.name} typing test online with official 1, 5, and 10 minute formats. Check accurate WPM speed, accuracy percentage, and qualify state & central government exams with TypeHindi.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LanguageTestPage({ params }: Props) {
  const { slug } = await params;
  const langConfig = ALL_LANGUAGES.find((l) => l.slug === slug);

  if (!langConfig) {
    notFound();
  }

  // Structured Data Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${langConfig.name} Typing Test Online`,
    "description": `Free timed online typing test simulator for ${langConfig.name} on ${langConfig.layoutName}.`,
    "url": `https://typehindi.in/test/${langConfig.slug}`,
    "inLanguage": langConfig.name,
    "publisher": {
      "@type": "Organization",
      "name": "TypeHindi",
      "url": "https://typehindi.in"
    }
  };

  return (
    <div className="container-main py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Test", href: "/test" },
          { label: `${langConfig.name} Typing Test` },
        ]}
      />

      <AdPlaceholder position="top" />

      {/* Page Header */}
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-semibold mb-3">
          <span>⏱️</span>
          <span>{langConfig.nativeName} Speed Test Simulator</span>
        </div>
        <h1 className="heading-1 mb-2">{langConfig.name} Typing Test Online</h1>
        <p className="text-muted leading-relaxed text-sm sm:text-base">
          Test your {langConfig.name} typing speed under realistic exam conditions. Choose between 1, 5, or 10-minute timers, track real-time WPM, accuracy, and error counts.
        </p>
      </div>

      {/* Interactive Typing Test Tool */}
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border-2 border-gray-300 dark:border-gray-700">
        <TypingTestTool initialLanguageId={langConfig.id} showLanguageSwitcher={true} />
      </div>

      <AdPlaceholder position="bottom" />

      {/* Quick Navigation Cards */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href={`/practice/${langConfig.slug}`}
          className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
        >
          <div>
            <div className="text-2xl mb-2">📝</div>
            <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-primary-400 transition-colors">
              {langConfig.name} Practice Mode
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
              Practice untimed {langConfig.name} passages across Easy, Medium, and Hard difficulty levels without timer pressure.
            </p>
          </div>
          <span className="text-xs font-semibold text-primary-500 mt-4 flex items-center gap-1 group-hover:underline">
            Go to Practice →
          </span>
        </Link>

        <Link
          href={`/learn/${langConfig.slug}`}
          className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
        >
          <div>
            <div className="text-2xl mb-2">📖</div>
            <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-primary-400 transition-colors">
              Learn {langConfig.name} Typing
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
              Master the finger positions, input method setup on Windows/Mac, and touch typing rules for {langConfig.name}.
            </p>
          </div>
          <span className="text-xs font-semibold text-primary-500 mt-4 flex items-center gap-1 group-hover:underline">
            Read Learning Guide →
          </span>
        </Link>

        <Link
          href={`/keyboard-layout/${langConfig.keyboardSlug}`}
          className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
        >
          <div>
            <div className="text-2xl mb-2">⌨️</div>
            <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-primary-400 transition-colors">
              {langConfig.layoutName} Layout
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
              Explore the interactive virtual keyboard map with normal keys, shift combinations, and character placement.
            </p>
          </div>
          <span className="text-xs font-semibold text-primary-500 mt-4 flex items-center gap-1 group-hover:underline">
            View Keyboard Layout →
          </span>
        </Link>
      </section>

      {/* Verified Exam Guidelines */}
      {langConfig.exams.length > 0 && (
        <section className="mt-12 bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🏛️</span>
            <div>
              <h2 className="text-xl font-bold text-white">
                Official {langConfig.name} Typing Speed Standards
              </h2>
              <p className="text-xs text-slate-400">
                Mandatory benchmarks set by recruitment commissions for clerical and data entry posts
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-bold uppercase tracking-wider">Exam / Post</th>
                  <th className="pb-3 font-bold uppercase tracking-wider">Target Speed</th>
                  <th className="pb-3 font-bold uppercase tracking-wider">Duration</th>
                  <th className="pb-3 font-bold uppercase tracking-wider">Max Error Limit</th>
                  <th className="pb-3 font-bold uppercase tracking-wider">Font / Layout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {langConfig.exams.map((exam, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 font-bold text-slate-100">{exam.examName}</td>
                    <td className="py-3.5 text-primary-400 font-bold">{exam.targetWpm} WPM</td>
                    <td className="py-3.5">{exam.durationMinutes} Minutes</td>
                    <td className="py-3.5 text-emerald-400">{exam.maxErrorPercent}%</td>
                    <td className="py-3.5 text-slate-400">{exam.fontOrLayout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
