import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { INDIAN_LANGUAGES_TYPING } from "@/data/indianLanguageTypingData";

export const metadata: Metadata = {
  title: "English to Indian Languages Typing Online | TypeHindi",
  description:
    "Type in your preferred Indian language using an English keyboard. Convert Roman letters into native Indian scripts with our free online typing tools.",
  alternates: {
    canonical: "https://typehindi.in/english-to-indian-language-typing",
  },
  keywords: [
    "English to Indian languages typing",
    "English to Kannada typing",
    "English to Gujarati typing",
    "English to Malayalam typing",
    "English to Tamil typing",
    "English to Telugu typing",
    "English to Bengali typing",
    "English to Punjabi typing",
    "English to Marathi typing",
    "English to Odia typing",
    "English to Urdu typing",
    "phonetic Indian language typing",
  ],
  openGraph: {
    title: "English to Indian Languages Typing Online | TypeHindi",
    description:
      "Type in your preferred Indian language using an English keyboard. Convert Roman letters into native Indian scripts with our online typing tools.",
    url: "https://typehindi.in/english-to-indian-language-typing",
    type: "website",
  },
};

export default function EnglishToIndianLanguagesTypingDirectory() {
  return (
    <div className="container-main py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "English to Indian Languages Typing" },
        ]}
      />

      <AdPlaceholder position="top" />

      {/* Header */}
      <section className="text-center mt-4 mb-10 max-w-4xl mx-auto">
        <div className="badge-blue mb-3 inline-flex items-center gap-2">
          <span>🇮🇳</span>
          <span>Phonetic Transliteration Hub</span>
        </div>
        <h1 className="heading-1 mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17243A] dark:text-white leading-tight">
          English to Indian Languages Typing Online
        </h1>
        <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Type in your preferred Indian language using an English keyboard. Convert Roman letters into native Indian scripts with our online typing tools.
        </p>
      </section>

      {/* Language Cards Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDIAN_LANGUAGES_TYPING.map((lang) => (
            <div
              key={lang.id}
              className="card p-6 rounded-3xl border border-[#CBD5E1] hover:border-[#8FA6C5] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Language Header with Native Character Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#102B5C] to-[#174EA6] text-white flex items-center justify-center font-bold text-2xl shadow-md group-hover:scale-105 transition-transform">
                    {lang.nativeChar}
                  </div>
                  {lang.supported ? (
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      Live Engine
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      In Development
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <h2 className="text-xl font-bold text-[#17243A] dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    English to {lang.name}
                  </h2>
                  <span className="text-xs font-semibold text-[#174EA6] dark:text-primary-400">
                    {lang.nativeName} ({lang.script})
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 leading-relaxed font-normal mb-5 line-clamp-3">
                  {lang.tagline}
                </p>

                {/* Example preview chips */}
                {lang.verifiedExamples.length > 0 && (
                  <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-slate-950/50 border border-[#E2E8F0] dark:border-slate-800 mb-6 text-xs text-[#334155] dark:text-slate-300">
                    <span className="text-muted block text-[10px] uppercase font-bold tracking-wider mb-1">
                      Example:
                    </span>
                    <span className="font-mono text-[#102B5C] dark:text-primary-400 font-semibold">
                      {lang.verifiedExamples[0].roman}
                    </span>{" "}
                    →{" "}
                    <strong className="text-sm font-bold text-[#17243A] dark:text-white">
                      {lang.verifiedExamples[0].native}
                    </strong>{" "}
                    <span className="text-muted text-[11px]">
                      ({lang.verifiedExamples[0].meaning})
                    </span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {lang.supported ? (
                <Link
                  href={lang.route}
                  className="btn-primary rounded-xl w-full py-3 text-xs font-bold text-center block shadow-md shadow-[#102B5C]/20 hover:shadow-lg transition-all"
                >
                  Start Typing in {lang.name} →
                </Link>
              ) : (
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 text-center text-xs text-gray-500 font-medium">
                  Ol Chiki Engine Integration in Progress
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <AdPlaceholder position="bottom" />

      {/* Educational Guide Section */}
      <section className="card p-8 md:p-10 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm max-w-5xl mx-auto space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-[#17243A] dark:text-white border-b border-[#E2E8F0] dark:border-slate-800 pb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Why Use English to Indian Languages Phonetic Typing?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-[#334155] dark:text-slate-300 leading-relaxed font-normal">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#102B5C] dark:text-primary-400">
              1. No Complex Keyboard Memorization
            </h3>
            <p>
              Traditional Indian language keyboard layouts like InScript, Remington, and typewriter keyboards require memorizing dozens of unfamiliar key positions. Phonetic typing allows you to write words just as they sound using your standard English QWERTY keyboard.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#102B5C] dark:text-primary-400">
              2. Pure Universal Unicode Output
            </h3>
            <p>
              Unlike legacy fonts that require proprietary software to read, our tools produce 100% universal Unicode text. You can copy the generated text and paste it seamlessly into WhatsApp, Word, emails, Facebook, Instagram, or online application portals.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#102B5C] dark:text-primary-400">
              3. Blazing Fast Client-Side Performance
            </h3>
            <p>
              Transliteration takes place in real time with high accuracy, auto-binding complex conjunct consonants, matras, and vowel signs as you type each word.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#102B5C] dark:text-primary-400">
              4. 100% Free & Unlimited
            </h3>
            <p>
              Type single words, complete emails, letters, articles, or exam assignments without character limits, watermarks, or subscription barriers.
            </p>
          </div>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
