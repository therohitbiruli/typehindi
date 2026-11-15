import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { TransliterationEditor } from "./TransliterationEditor";
import {
  IndianLanguageTypingConfig,
  SUPPORTED_TYPING_LANGUAGES,
} from "@/data/indianLanguageTypingData";

interface Props {
  config: IndianLanguageTypingConfig;
}

export function IndianLanguageTypingPage({ config }: Props) {
  const otherLanguages = SUPPORTED_TYPING_LANGUAGES.filter(
    (l) => l.id !== config.id
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="container-main py-6">
      {/* FAQ Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "English to Indian Languages",
            href: "/english-to-indian-language-typing",
          },
          { label: `English to ${config.name}` },
        ]}
      />

      <AdPlaceholder position="top" />

      {/* Hero Header */}
      <div className="text-center mt-4 mb-8">
        <div className="badge-blue mb-3 inline-flex items-center gap-2">
          <span>🇮🇳</span>
          <span>English to Indian Languages Typing</span>
        </div>
        <h1 className="heading-1 mb-3 text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight text-[#17243A] dark:text-white">
          {config.h1}
        </h1>
        <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto font-medium">
          {config.tagline}
        </p>
      </div>

      {/* Main Interactive Tool */}
      <TransliterationEditor
        languageName={config.name}
        nativeName={config.nativeName}
        itcCode={config.itcCode}
        isRtl={config.id === "urdu"}
        examples={config.verifiedExamples}
        supported={config.supported}
      />

      <AdPlaceholder position="bottom" />

      {/* Language-Specific Content Sections */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* 1. Introduction */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-4 flex items-center gap-2">
            <span>📖</span>
            <span>About {config.name} ({config.nativeName}) Typing</span>
          </h2>
          <div className="space-y-4 text-sm md:text-base text-[#334155] dark:text-slate-300 leading-relaxed font-normal">
            {config.introParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* 2. How it works */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-4 flex items-center gap-2">
            <span>⚙️</span>
            <span>How English to {config.name} Transliteration Works</span>
          </h2>
          <ul className="space-y-3 text-sm md:text-base text-[#334155] dark:text-slate-300 leading-relaxed list-disc pl-5">
            {config.howItWorks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 3. Verified Examples Table */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-4 flex items-center gap-2">
            <span>✨</span>
            <span>Verified English to {config.name} Examples</span>
          </h2>
          <p className="text-sm text-[#475569] dark:text-slate-400 mb-6 font-medium">
            Test these verified words in the editor above to experience how natural English phonetic spelling transforms into accurate {config.name} script:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#CBD5E1] dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F4F7FC] dark:bg-slate-800/80 text-[#17243A] dark:text-white uppercase text-xs font-bold border-b border-[#CBD5E1] dark:border-slate-800">
                <tr>
                  <th className="px-5 py-3.5">English / Roman Input</th>
                  <th className="px-5 py-3.5">{config.name} Output</th>
                  <th className="px-5 py-3.5">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] dark:divide-slate-800 text-[#27364B] dark:text-slate-200">
                {config.verifiedExamples.map((ex, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-5 py-3 font-mono text-sm text-[#102B5C] dark:text-primary-400 font-semibold">
                      {ex.roman}
                    </td>
                    <td className="px-5 py-3 text-lg font-bold">
                      {ex.native}
                    </td>
                    <td className="px-5 py-3 text-[#475569] dark:text-slate-400">
                      {ex.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Typing Instructions */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-4 flex items-center gap-2">
            <span>⌨️</span>
            <span>Step-by-Step Typing Instructions</span>
          </h2>
          <ol className="space-y-3 text-sm md:text-base text-[#334155] dark:text-slate-300 leading-relaxed list-decimal pl-5">
            {config.typingInstructions.map((ins, i) => (
              <li key={i}>{ins}</li>
            ))}
          </ol>
        </section>

        {/* 5. Common Words & Phrases */}
        {config.commonWordsAndPhrases.length > 0 && (
          <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-6 flex items-center gap-2">
              <span>💬</span>
              <span>Common Words & Daily Phrases in {config.name}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.commonWordsAndPhrases.map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#CBD5E1] dark:border-slate-800 p-5 bg-[#F8FAFC]/50 dark:bg-slate-950/40"
                >
                  <h3 className="text-base font-bold text-[#102B5C] dark:text-primary-300 mb-3 pb-2 border-b border-[#E2E8F0] dark:border-slate-800">
                    {group.category}
                  </h3>
                  <div className="space-y-2.5">
                    {group.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs sm:text-sm"
                      >
                        <span className="text-[#64748B] dark:text-slate-400">
                          {item.english} ({item.roman}):
                        </span>
                        <strong className="text-sm font-bold text-[#17243A] dark:text-white">
                          {item.native}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Script Information */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-4 flex items-center gap-2">
            <span>🔡</span>
            <span>{config.script} Character Information</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-[#E2E8F0] dark:border-slate-800 bg-[#F4F7FC]/60 dark:bg-slate-950/40">
              <span className="font-bold text-[#102B5C] dark:text-primary-300 block mb-1">
                Vowels ({config.name}):
              </span>
              <p className="text-[#334155] dark:text-slate-300 font-medium">
                {config.characterInfo.vowels}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2E8F0] dark:border-slate-800 bg-[#F4F7FC]/60 dark:bg-slate-950/40">
              <span className="font-bold text-[#102B5C] dark:text-primary-300 block mb-1">
                Dependent Vowel Signs (Matras):
              </span>
              <p className="text-[#334155] dark:text-slate-300 font-medium">
                {config.characterInfo.matras}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2E8F0] dark:border-slate-800 bg-[#F4F7FC]/60 dark:bg-slate-950/40 md:col-span-2">
              <span className="font-bold text-[#102B5C] dark:text-primary-300 block mb-1">
                Consonants:
              </span>
              <p className="text-[#334155] dark:text-slate-300 font-medium">
                {config.characterInfo.consonants}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2E8F0] dark:border-slate-800 bg-[#F4F7FC]/60 dark:bg-slate-950/40 md:col-span-2">
              <span className="font-bold text-[#102B5C] dark:text-primary-300 block mb-1">
                Special Signs:
              </span>
              <p className="text-[#334155] dark:text-slate-300 font-medium">
                {config.characterInfo.specialSigns}
              </p>
            </div>
          </div>
        </section>

        {/* 7. Common Transliteration Issues */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-4 flex items-center gap-2">
            <span>⚠️</span>
            <span>Common Transliteration Pitfalls</span>
          </h2>
          <ul className="space-y-3 text-sm md:text-base text-[#334155] dark:text-slate-300 leading-relaxed list-disc pl-5">
            {config.commonIssues.map((issue, i) => (
              <li key={i}>{issue}</li>
            ))}
          </ul>
        </section>

        {/* 8. FAQs */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-[#17243A] dark:text-white mb-6 flex items-center gap-2">
            <span>❓</span>
            <span>Frequently Asked Questions</span>
          </h2>

          <div className="space-y-4">
            {config.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-[#CBD5E1] dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50"
              >
                <h3 className="text-base font-bold text-[#17243A] dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Cross-Linking to other languages */}
        <section className="card p-6 md:p-8 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#17243A] dark:text-white">
                Explore Other Indian Language Typing Tools
              </h2>
              <p className="text-xs text-[#475569] dark:text-slate-400 font-medium">
                Type in any major Indian regional script using your English keyboard:
              </p>
            </div>
            <Link
              href="/english-to-indian-language-typing"
              className="text-xs font-bold text-[#174EA6] dark:text-primary-400 hover:underline"
            >
              View All Languages →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {otherLanguages.map((l) => (
              <Link
                key={l.id}
                href={l.route}
                className="p-3.5 rounded-2xl border border-[#CBD5E1] hover:border-[#8FA6C5] dark:border-slate-800 bg-[#F8FAFC] dark:bg-slate-950/40 hover:bg-blue-50/40 dark:hover:bg-slate-800/80 transition-all text-center group flex flex-col items-center"
              >
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform font-bold text-[#102B5C] dark:text-primary-300">
                  {l.nativeChar}
                </span>
                <span className="text-xs font-bold text-[#17243A] dark:text-slate-200">
                  {l.name}
                </span>
                <span className="text-[10px] text-muted">{l.nativeName}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
