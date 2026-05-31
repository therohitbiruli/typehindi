import Link from "next/link";

export const LANGUAGES = [
  "Punjabi",
  "Marathi",
  "Gujarati",
  "Tamil",
  "Telugu",
  "Bengali",
  "Malayalam",
  "Kannada",
  "Odia",
  "Urdu",
  "Santhali"
];

export default function TranslatorsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      <div className="bg-white border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-normal text-red-600 border-b border-gray-100 pb-2 mb-6">Select a Language Translator</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => (
            <Link
              key={lang}
              href={`/translators/english-to-${lang.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-2xl mb-2 text-gray-500 group-hover:text-blue-600">A→अ</span>
              <span className="text-gray-700 text-sm font-medium text-center">English to<br/>{lang}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Text */}
      <div className="bg-white border border-gray-200 shadow-sm p-6 space-y-4">
        <h3 className="text-lg font-normal text-blue-800 border-b border-gray-100 pb-2">About Native Indian Translators</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Typing in regional Indian languages used to require learning complex keyboard layouts. With our English-to-Native transliteration tools, you can easily type in languages like Punjabi, Marathi, Santhali, and Gujarati using a standard English (QWERTY) keyboard. Just type the word as it sounds in English, and the tool will automatically convert it into the respective native script.
        </p>
      </div>
      
    </div>
  );
}
