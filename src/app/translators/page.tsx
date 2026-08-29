import Link from "next/link";

export const LANGUAGES = [
  { name: "Punjabi", nativeChar: "ਅ" },
  { name: "Marathi", nativeChar: "अ" },
  { name: "Gujarati", nativeChar: "અ" },
  { name: "Tamil", nativeChar: "அ" },
  { name: "Telugu", nativeChar: "అ" },
  { name: "Bengali", nativeChar: "অ" },
  { name: "Malayalam", nativeChar: "അ" },
  { name: "Kannada", nativeChar: "అ" },
  { name: "Odia", nativeChar: "ଅ" },
  { name: "Urdu", nativeChar: "ا" },
  { name: "Santhali", nativeChar: "ᱚ" }
];

export default function TranslatorsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* English to Native Section */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6">
        <h2 className="text-xl font-normal text-red-600 dark:text-red-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-6">English to Indian Languages (English to Native)</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => (
            <Link
              key={`en-${lang.name}`}
              href={`/translators/english-to-${lang.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
            >
              <span className="text-2xl mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">A→{lang.nativeChar}</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">English to<br/>{lang.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hindi to Native Section */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6">
        <h2 className="text-xl font-normal text-blue-800 dark:text-blue-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-6">Hindi to Indian Languages (Hindi to Native)</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => (
            <Link
              key={`hi-${lang.name}`}
              href={`/translators/hindi-to-${lang.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-800 hover:border-red-400 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group"
            >
              <span className="text-2xl mb-2 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400">अ→{lang.nativeChar}</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">Hindi to<br/>{lang.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Explanation & FAQs */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-8 space-y-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
          How this Translator Tool Works
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          This tool instantly transliterates typed English or Roman script words into your chosen native script. It operates fully client-side inside your browser, meaning your typed text is never sent to a server. This guarantees both speed and absolute privacy.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-5">
            <h4 className="font-semibold text-blue-800 dark:text-blue-400 text-lg mb-2">When to Use</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              This tool is useful if you are not familiar with the native keyboard layout but need to quickly draft text in regional scripts — such as WhatsApp messages, emails, or online application forms. Note that this is not a substitute for learning touch typing. For official government typing tests (like SSC, Stenographer, etc.), you must learn the standard keyboard layout in our Learn section, as translation tools are not permitted in test centers.
            </p>
          </div>

          <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-5">
            <h4 className="font-semibold text-blue-800 dark:text-blue-400 text-lg mb-2">Accuracy and Limits</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Transliteration tools convert text phonetically based on sound. Therefore, some complex or rarely used words might not have a perfect match in the initial output. In such cases, you can select the correct option from the suggestions drop-down list.
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h4>
          
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800/40 rounded-lg p-5">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                Will this tool help me prepare for official government typing tests?
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Not directly. In exams, you are required to type using the standard InScript layout. This tool is designed only for day-to-day translation and drafting tasks.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/40 rounded-lg p-5">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is my typed text saved or stored?
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                No, we do not save or send any typed text to our servers. Everything is processed locally in your browser.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
