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
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6">
        <h2 className="text-xl font-normal text-red-600 dark:text-red-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-6">अंग्रेजी से भारतीय भाषाएं (English to Native)</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => (
            <Link
              key={`en-${lang.name}`}
              href={`/translators/english-to-${lang.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
            >
              <span className="text-2xl mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">A→{lang.nativeChar}</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">English to<br/>{lang.hindiName}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hindi to Native Section */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6">
        <h2 className="text-xl font-normal text-blue-800 dark:text-blue-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-6">हिंदी से भारतीय भाषाएं (Hindi to Native)</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => (
            <Link
              key={`hi-${lang.name}`}
              href={`/translators/hindi-to-${lang.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-800 hover:border-red-400 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group"
            >
              <span className="text-2xl mb-2 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400">अ→{lang.nativeChar}</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">Hindi to<br/>{lang.hindiName}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Explanation & FAQs */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-8 space-y-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
          यह ट्रांसलेटर टूल कैसे काम करता है
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          यह टूल आपके द्वारा टाइप किए गए अंग्रेज़ी या रोमन लिपि के शब्दों को तुरंत देवनागरी हिंदी में बदल देता है। यह पूरी तरह ब्राउज़र में काम करता है, इसलिए आपका टाइप किया हुआ टेक्स्ट कहीं सर्वर पर नहीं भेजा जाता — गति तेज़ रहती है और प्राइवेसी भी बनी रहती है।
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-5">
            <h4 className="font-semibold text-blue-800 dark:text-blue-400 text-lg mb-2">कब इस्तेमाल करें</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              अगर आपको हिंदी कीबोर्ड लेआउट याद नहीं है लेकिन जल्दी में देवनागरी में कुछ टाइप करना है — जैसे व्हाट्सऐप मैसेज, ईमेल, या कोई फॉर्म — तो यह टूल उपयोगी है। यह इनस्क्रिप्ट सीखने का विकल्प नहीं है; सरकारी टाइपिंग परीक्षाओं (SSC, स्टेनोग्राफर आदि) के लिए आपको असली कीबोर्ड लेआउट (Learn सेक्शन) ही सीखना होगा, क्योंकि परीक्षा केंद्रों में ट्रांसलेटर टूल की सुविधा नहीं मिलती।
            </p>
          </div>

          <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-5">
            <h4 className="font-semibold text-blue-800 dark:text-blue-400 text-lg mb-2">सटीकता और सीमाएँ</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              ट्रांसलिटरेशन टूल ध्वनि के आधार पर शब्द बदलते हैं, इसलिए कुछ जटिल या कम इस्तेमाल होने वाले शब्दों में सुझाव सटीक नहीं भी हो सकता — ऐसे में आप सुझाव सूची से सही विकल्प चुन सकते हैं।
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">अक्सर पूछे जाने वाले प्रश्न</h4>
          
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800/40 rounded-lg p-5">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                क्या यह टूल सरकारी टाइपिंग टेस्ट की तैयारी के लिए काम आएगा?
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                सीधे तौर पर नहीं — परीक्षा में आपको इनस्क्रिप्ट कीबोर्ड से ही टाइप करना होता है। यह टूल केवल रोज़मर्रा के हिंदी टाइपिंग कार्यों के लिए है।
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/40 rounded-lg p-5">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                क्या डेटा सेव होता है?
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                नहीं, कुछ भी सर्वर पर सेव या भेजा नहीं जाता।
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
