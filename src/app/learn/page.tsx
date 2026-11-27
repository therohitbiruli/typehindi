import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { ALL_LANGUAGES } from "../../data/languages";

export const metadata: Metadata = {
  title: "Learn Typing in Multiple Languages – Step-by-Step Lessons | TypeHindi",
  description:
    "Learn typing step by step with interactive lessons, keyboard guidance and practical exercises in English, Hindi, Marathi, Punjabi, Tamil, Bengali, Kannada, and Gujarati.",
  keywords: [
    "learn typing online",
    "touch typing lessons",
    "learn Hindi typing",
    "learn English typing",
    "learn Marathi typing",
    "learn Punjabi typing",
    "learn Tamil typing",
    "learn Bengali typing",
    "learn Kannada typing",
    "learn Gujarati typing",
    "typing tutor free",
  ],
  alternates: {
    canonical: "https://www.typehindi.in/learn",
  },
  openGraph: {
    title: "Learn Typing in Multiple Languages – Step-by-Step Lessons | TypeHindi",
    description:
      "Structured typing curriculum with interactive lessons, key-by-key drills, and exam preparation in 8 major Indian and English languages.",
    url: "https://www.typehindi.in/learn",
    type: "website",
  },
};

const LANGUAGE_LEARN_DESCRIPTIONS: Record<string, string> = {
  english: "Master standard QWERTY touch typing from home row fundamentals to high-speed clerical and corporate typing with 10 structured lessons.",
  hindi: "Master the official InScript and Mangal font layout, vowel matras, halant conjunct characters, and government recruitment speed drills.",
  marathi: "Learn Marathi typing on the verified InScript layout. Master retroflex 'ळ', anusvara rules, joḍākṣare, and MPSC clerk exam exercises.",
  punjabi: "Master Gurmukhi script typing step by step. Learn vowel carriers, laga matra, tippi, bindi, addak, and PSSSB clerk exam preparation.",
  tamil: "Step-by-step Tamil typing course covering uyir, mei, pulli diacritics, uyirmei combinations, grantha letters, and TNPSC speed tests.",
  bengali: "Learn Bengali touch typing with interactive drills on swarabarna, byanjanbarna, kar signs, hasanta, and juktakkhara conjuncts.",
  kannada: "Complete Kannada typing lessons covering swaragalu, vyanjanagalu, gunitaakshara vowel signs, ottakshara, and KPSC exam benchmarks.",
  gujarati: "Learn Gujarati typing on official InScript layout. Master vowels, consonants, matras, sanyukt akshar, and GSSSB clerical test drills.",
};

export default function LearnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Multilingual Touch Typing Course",
    "description": "Learn typing step by step with interactive lessons, keyboard guidance and practical exercises in your preferred language.",
    "provider": {
      "@type": "Organization",
      "name": "TypeHindi",
      "url": "https://www.typehindi.in"
    }
  };

  return (
    <div className="container-main py-6">
      <script
        type="application/ld+json" suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn" },
        ]}
      />

      <AdPlaceholder position="top" />

      {/* Main Hub Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-3">
          <span>🎓</span>
          <span>Comprehensive Typing Academy</span>
        </div>
        <h1 className="heading-1 mb-3">
          Choose Your Language to Learn Typing
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Learn typing step by step with interactive lessons, keyboard guidance and practical exercises in your preferred language.
        </p>
      </div>

      {/* 8 Language Selection Cards */}
      <section className="mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ALL_LANGUAGES.map((lang) => (
          <div
            key={lang.id}
            className="group rounded-3xl bg-white dark:bg-slate-900 border border-[#CBD5E1] dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary-400 dark:hover:border-primary-500/50 transition-all duration-300"
          >
            <div>
              {/* Header with symbol and native script */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold text-xl border border-primary-100 dark:border-primary-900/50 group-hover:scale-105 transition-transform">
                  {lang.symbol}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {lang.layoutName}
                </span>
              </div>

              {/* Language Name & Native Name */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {lang.name} Typing
              </h3>
              <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mt-0.5">
                {lang.nativeName}
              </p>

              {/* Description */}
              <p className="text-xs text-[#475569] dark:text-gray-300 font-medium leading-relaxed mt-3">
                {LANGUAGE_LEARN_DESCRIPTIONS[lang.id] || lang.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800 space-y-2">
              <Link
                href={`/learn/${lang.slug}`}
                className="w-full py-2.5 px-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm font-bold transition-all shadow-sm shadow-primary-500/25 flex items-center justify-center gap-1.5 group-hover:translate-x-0.5"
              >
                <span>Explore Lessons</span>
                <span>→</span>
              </Link>
              <div className="flex justify-between text-[11px] px-1 text-slate-500 dark:text-slate-400">
                <Link
                  href={`/practice/${lang.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  Practice Passages
                </Link>
                <span>•</span>
                <Link
                  href={`/keyboard-layout/${lang.keyboardSlug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  Layout Map
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Shorthand Learning Section Callout (Preserved & Separate) */}
      <section className="mb-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-bold mb-2">
              <span>✍️ Stenography Track</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              English Pitman Shorthand Learning Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
              Looking for court and parliamentary stenographer preparation? Access structured Pitman shorthand lessons covering basic consonants, vowels, grammalogues, phraseography, and audio speed dictation.
            </p>
          </div>
          <Link
            href="/shorthand/learn"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-600/20 whitespace-nowrap transition-all"
          >
            Start Shorthand Lessons →
          </Link>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
