import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";
import { Keyboard } from "../../../components/Keyboard";
import { blogs } from "../../../data/blogs";
import { ALL_LANGUAGES, getLanguageConfig } from "../../../data/languages";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const langParams = ALL_LANGUAGES.map((lang) => ({
    slug: lang.slug,
  }));
  const blogParams = blogs.map((blog) => ({
    slug: blog.slug,
  }));
  return [...langParams, ...blogParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = ALL_LANGUAGES.find((l) => l.slug === slug);
  if (!lang) return {};

  const url = `https://typehindi.in/learn/${lang.slug}`;
  const title = `How to Learn ${lang.name} Typing – Complete Step-by-Step Guide | TypeHindi`;
  const description = `Learn ${lang.name} touch typing step-by-step. Master the ${lang.layoutName} keyboard, finger positions, vowels, consonants, and government exam typing tips on TypeHindi.`;

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
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LearnSlugPage({ params }: Props) {
  const { slug } = await params;

  // Check if it's one of the 6 language learning guides
  const langConfig = ALL_LANGUAGES.find((l) => l.slug === slug);

  // If not a language, redirect to blog post as per legacy behavior
  if (!langConfig) {
    redirect(`/blog/${slug}`);
  }

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": langConfig.learning.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `How to Learn ${langConfig.name} Typing: Complete Beginner Guide`,
    "description": langConfig.metaDescription,
    "inLanguage": langConfig.name,
    "url": `https://typehindi.in/learn/${langConfig.slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "TypeHindi",
      "url": "https://typehindi.in",
    },
  };

  return (
    <div className="container-main py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: `Learn ${langConfig.name} Typing` },
        ]}
      />

      <AdPlaceholder position="top" />

      {/* Hero Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-semibold mb-3">
          <span>📖</span>
          <span>{langConfig.nativeName} Typing Curriculum</span>
        </div>
        <h1 className="heading-1 mb-3">
          How to Learn {langConfig.name} Typing
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          A complete, step-by-step masterclass on {langConfig.name} touch typing using the verified {langConfig.layoutName} layout. Master finger positioning, key combinations, and exam preparation.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link
            href={`/practice/${langConfig.slug}`}
            className="btn-primary px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-primary-500/20"
          >
            Practice {langConfig.name} Typing →
          </Link>
          <Link
            href={`/test/${langConfig.slug}`}
            className="btn-secondary px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-700"
          >
            Take 10-Min Speed Test ⏱️
          </Link>
          <Link
            href={`/keyboard-layout/${langConfig.keyboardSlug}`}
            className="btn-secondary px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-700"
          >
            View Keyboard Map ⌨️
          </Link>
        </div>
      </div>

      {/* 1. What is [Language] Typing? */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <span>💡</span> What is {langConfig.name} Typing?
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {langConfig.learning.introduction}
        </p>
      </section>

      {/* 2. Interactive Keyboard Preview */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span>⌨️</span> {langConfig.name} Keyboard Layout: {langConfig.layoutName}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Official Bureau of Indian Standards (BIS) phonetic mapping. Vowels are on the left, consonants on the right.
            </p>
          </div>
          <Link
            href={`/keyboard-layout/${langConfig.keyboardSlug}`}
            className="text-xs font-bold text-primary-500 hover:underline"
          >
            Full Interactive Layout Guide →
          </Link>
        </div>

        <div className="overflow-x-auto pb-2">
          <Keyboard
            activeKey=""
            isShift={false}
            visible={true}
            language={langConfig.id}
          />
        </div>
      </section>

      {/* 3. Computer Setup Guide (Windows, Mac, Linux) */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span>⚙️</span> How to Enable {langConfig.name} Typing on Your Computer
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <h3 className="font-bold text-xs uppercase text-primary-500 tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>🪟</span> Windows 10 & 11
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {langConfig.learning.inputSetup.windows}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <h3 className="font-bold text-xs uppercase text-primary-500 tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>🍎</span> macOS (Apple)
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {langConfig.learning.inputSetup.mac}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <h3 className="font-bold text-xs uppercase text-primary-500 tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>🐧</span> Linux (Ubuntu/Debian)
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {langConfig.learning.inputSetup.linux}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Finger Placement & Home Row Technique */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <span>🖐️</span> Correct Finger Placement & Home Row Guide
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {langConfig.learning.homeRowGuide}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span>👈</span> Left Hand Finger Assignments
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {langConfig.learning.fingerPlacement.leftHand}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span>👉</span> Right Hand Finger Assignments
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {langConfig.learning.fingerPlacement.rightHand}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Common Characters & Keystroke Combinations */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span>🔤</span> Essential {langConfig.name} Characters & Keystroke Map
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {langConfig.learning.commonCharacters.map((c, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-center"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {c.char}
              </div>
              <div className="text-[11px] font-mono font-semibold text-primary-500">
                {c.keyCombo}
              </div>
              <div className="text-[9px] uppercase font-bold text-gray-400 dark:text-gray-500 mt-1">
                {c.type}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Common Vocabulary & Sentences */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span>📝</span> Frequent {langConfig.name} Words
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Practice typing these common vocabulary patterns to develop sub-conscious finger memory.
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

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span>💬</span> Practice Sentences
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Constructed with natural grammar to train transitions between vowels, matras, and consonants.
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

      {/* 7. How to Improve Speed & Accuracy */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span>🚀</span> 5 Golden Rules to Double Your {langConfig.name} Typing Speed
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <span className="text-xl font-bold text-primary-500">01</span>
            <h3 className="font-bold text-xs text-gray-900 dark:text-white mt-1 mb-1">Prioritize Accuracy Over Speed</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Never rush key presses. Aim for 98% accuracy first. When your fingers learn the exact key coordinates, speed follows automatically.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <span className="text-xl font-bold text-primary-500">02</span>
            <h3 className="font-bold text-xs text-gray-900 dark:text-white mt-1 mb-1">Never Look at the Keyboard</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Cover your hands with a small sheet of paper if necessary. Looking down prevents muscle memory from forming in the cerebral cortex.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <span className="text-xl font-bold text-primary-500">03</span>
            <h3 className="font-bold text-xs text-gray-900 dark:text-white mt-1 mb-1">Practice Full 10-Minute Tests</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              One-minute sprint drills do not build exam stamina. Take at least one complete 10-minute test daily on TypeHindi.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <span className="text-xl font-bold text-primary-500">04</span>
            <h3 className="font-bold text-xs text-gray-900 dark:text-white mt-1 mb-1">Master Halant & Conjunct Keys</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              In Indic InScript, the Virama / Halant key (D) forms half-letters and conjuncts. Practice typing conjunct words fluidly.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <span className="text-xl font-bold text-primary-500">05</span>
            <h3 className="font-bold text-xs text-gray-900 dark:text-white mt-1 mb-1">Use an Ergonomic Desktop Keyboard</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Avoid practicing exclusively on flat laptop keyboards. Most government exam centers provide standard membrane desktop keyboards.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
            <span className="text-xl font-bold text-primary-500">06</span>
            <h3 className="font-bold text-xs text-gray-900 dark:text-white mt-1 mb-1">Build a 10 WPM Safety Buffer</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              If an exam requires 30 WPM, train yourself to type at 40 WPM at home to absorb exam-day nervousness easily.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span>❓</span> Frequently Asked Questions ({langConfig.name} Typing)
        </h2>
        <div className="space-y-4">
          {langConfig.learning.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750"
            >
              <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1.5">
                {faq.question}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-3xl p-8 text-center text-white shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Ready to Start {langConfig.name} Typing Practice?
        </h2>
        <p className="text-sm text-white/80 max-w-xl mx-auto mb-6">
          Access hundreds of free passages in {langConfig.name}, track your daily WPM progress, and qualify your exam with confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/practice/${langConfig.slug}`}
            className="px-8 py-3 bg-white text-primary-600 font-bold text-sm rounded-xl hover:bg-slate-100 transition-all shadow-md hover:-translate-y-0.5"
          >
            Start Practice Now →
          </Link>
          <Link
            href={`/test/${langConfig.slug}`}
            className="px-8 py-3 bg-black/30 hover:bg-black/40 text-white font-bold text-sm rounded-xl transition-all border border-white/20"
          >
            Take 10-Minute Test
          </Link>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
