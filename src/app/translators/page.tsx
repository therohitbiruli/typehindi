import Link from "next/link";

export const LANGUAGES = [
  { name: "Punjabi", nativeChar: "ਅ", hindiName: "पंजाबी" },
  { name: "Marathi", nativeChar: "अ", hindiName: "मराठी" },
  { name: "Gujarati", nativeChar: "અ", hindiName: "गुजराती" },
  { name: "Tamil", nativeChar: "அ", hindiName: "तमिल" },
  { name: "Telugu", nativeChar: "అ", hindiName: "तेलुगु" },
  { name: "Bengali", nativeChar: "অ", hindiName: "बंगाली" },
  { name: "Malayalam", nativeChar: "അ", hindiName: "मलयालम" },
  { name: "Kannada", nativeChar: "ಅ", hindiName: "कन्नड़" },
  { name: "Odia", nativeChar: "ଅ", hindiName: "उड़िया" },
  { name: "Urdu", nativeChar: "ا", hindiName: "उर्दू" },
  { name: "Santhali", nativeChar: "ᱚ", hindiName: "संथाली" }
];

export default function TranslatorsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* English to Native Section */}
      <div className="bg-white border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-normal text-red-600 border-b border-gray-100 pb-2 mb-6">अंग्रेजी से भारतीय भाषाएं (English to Native)</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => (
            <Link
              key={`en-${lang.name}`}
              href={`/translators/english-to-${lang.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-2xl mb-2 text-gray-500 group-hover:text-blue-600">A→{lang.nativeChar}</span>
              <span className="text-gray-700 text-sm font-medium text-center">English to<br/>{lang.hindiName}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hindi to Native Section */}
      <div className="bg-white border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-normal text-blue-800 border-b border-gray-100 pb-2 mb-6">हिंदी से भारतीय भाषाएं (Hindi to Native)</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => (
            <Link
              key={`hi-${lang.name}`}
              href={`/translators/hindi-to-${lang.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-red-400 hover:bg-red-50 transition-colors group"
            >
              <span className="text-2xl mb-2 text-gray-500 group-hover:text-red-600">अ→{lang.nativeChar}</span>
              <span className="text-gray-700 text-sm font-medium text-center">Hindi to<br/>{lang.hindiName}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Text */}
      <div className="bg-white border border-gray-200 shadow-sm p-6 space-y-4">
        <h3 className="text-lg font-normal text-blue-800 border-b border-gray-100 pb-2">हमारे नेटिव भारतीय अनुवादकों (Translators) के बारे में</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          क्षेत्रीय भारतीय भाषाओं में टाइप करने के लिए पहले जटिल कीबोर्ड लेआउट सीखने की आवश्यकता होती थी। हमारे अंग्रेजी/हिंदी से नेटिव ट्रांसलिटरेशन (लिप्यंतरण) टूल के साथ, आप आसानी से मानक अंग्रेजी (QWERTY) या हिंदी कीबोर्ड का उपयोग करके पंजाबी, मराठी, संथाली और गुजराती जैसी भाषाओं में टाइप कर सकते हैं। बस शब्द को वैसे ही टाइप करें जैसे वह अंग्रेजी या हिंदी में लगता है, और टूल स्वचालित रूप से इसे संबंधित मूल लिपि में बदल देगा।
        </p>
      </div>
      
    </div>
  );
}
