import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";
import { PracticeTool } from "../../../components/PracticeTool";
import { ALL_LANGUAGES, getLanguageConfig, LanguageConfig } from "../../../data/languages";

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

  const url = `https://typehindi.in/practice/${lang.slug}`;

  return {
    title: lang.metaTitle,
    description: lang.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: lang.metaTitle,
      description: lang.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: lang.metaTitle,
      description: lang.metaDescription,
    },
  };
}

export default async function LanguagePracticePage({ params }: Props) {
  const { slug } = await params;
  const langConfig = ALL_LANGUAGES.find((l) => l.slug === slug);

  if (!langConfig) {
    notFound();
  }

  // Schema structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": `${langConfig.name} Typing Practice Online`,
    "description": langConfig.metaDescription,
    "educationalLevel": "Beginner to Advanced",
    "learningResourceType": "Interactive Typing Simulator",
    "inLanguage": langConfig.name,
    "url": `https://typehindi.in/practice/${langConfig.slug}`,
    "provider": {
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
          { label: "Practice", href: "/practice" },
          { label: `${langConfig.name} Typing` },
        ]}
      />

      <AdPlaceholder position="top" />

      {/* Page Header */}
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-semibold mb-3">
          <span>{langConfig.symbol}</span>
          <span>{langConfig.nativeName} Typing Simulator</span>
        </div>
        <h1 className="heading-1 mb-3">{langConfig.h1}</h1>
        <p className="text-muted leading-relaxed text-sm sm:text-base">
          {langConfig.description}
        </p>
      </div>

      {/* Practice Tool */}
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border-2 border-gray-300 dark:border-gray-700">
        <PracticeTool languageId={langConfig.id} autoFocus={true} />
      </div>

      <AdPlaceholder position="bottom" />

      {/* Quick Action Navigation Cards */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href={`/test/${langConfig.slug}`}
          className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
        >
          <div>
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-primary-400 transition-colors">
              {langConfig.name} Typing Test
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
              Take a timed 1, 5, or 10-minute speed test in {langConfig.name} and measure your accurate WPM and net score.
            </p>
          </div>
          <span className="text-xs font-semibold text-primary-500 mt-4 flex items-center gap-1 group-hover:underline">
            Start {langConfig.name} Test →
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
              Step-by-step beginner guide on finger placement, home row keys, input method setup, and accuracy rules.
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
              Visual keyboard map showing normal keys, shift combinations, vowels, consonants, and character placement.
            </p>
          </div>
          <span className="text-xs font-semibold text-primary-500 mt-4 flex items-center gap-1 group-hover:underline">
            View Keyboard Layout →
          </span>
        </Link>
      </section>

      {/* Verified Exam Guidelines Section */}
      {langConfig.exams.length > 0 && (
        <section className="mt-12 bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🏛️</span>
            <div>
              <h2 className="text-xl font-bold text-white">
                {langConfig.name} Typing Requirements for Government Exams
              </h2>
              <p className="text-xs text-slate-400">
                Verified criteria from official recruitment notifications
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {langConfig.exams.map((exam, i) => (
              <div
                key={i}
                className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <h3 className="font-bold text-sm text-slate-100 mb-1">{exam.examName}</h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary-400">
                    <span>Target: {exam.targetWpm} WPM</span>
                    <span>•</span>
                    <span>{exam.durationMinutes} Mins</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {exam.notes}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
                  Font/Layout: <span className="text-slate-300 font-medium">{exam.fontOrLayout}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common Words & Sentences Practice */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span>📝</span> Frequent {langConfig.name} Words
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Practice typing these common vocabulary words to build speed through repetition.
          </p>
          <div className="flex flex-wrap gap-2">
            {langConfig.commonWords.map((word, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span>💬</span> Practice Sentences
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Natural sentence structures to develop fluid finger transitions across keyboard rows.
          </p>
          <ul className="space-y-2.5 text-xs text-gray-700 dark:text-gray-300">
            {langConfig.sentences.map((sent, idx) => (
              <li
                key={idx}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex items-start gap-2"
              >
                <span className="text-primary-500 font-bold">•</span>
                <span>{sent}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
