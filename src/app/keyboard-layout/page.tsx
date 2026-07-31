"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { Keyboard } from "../../components/Keyboard";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { useKeyPress } from "../../hooks/useKeyPress";
import { keyboardRows } from "../../data/keyboard-layout";

export default function KeyboardLayoutPage() {
  const { activeKey, isShift } = useKeyPress();

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Keyboard Layout" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-2">InScript कीबोर्ड लेआउट (Keyboard Layout)</h1>
      <p className="text-muted mb-6">
        हिंदी InScript कीबोर्ड का संपूर्ण लेआउट। कोई भी कुंजी दबाएँ और उसका हिंदी अक्षर देखें। Shift दबाकर अतिरिक्त अक्षर देखें।
      </p>

      {/* Interactive keyboard */}
      <Keyboard activeKey={activeKey} isShift={isShift} visible={true} />

      {/* Key reference table */}
      <div className="mt-8">
        <h2 className="heading-2 mb-4">कुंजी संदर्भ तालिका (Key Reference Table)</h2>
        <div className="card overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">English Key</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Normal (सामान्य)</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Shift (शिफ्ट)</th>
              </tr>
            </thead>
            <tbody>
              {keyboardRows.slice(0, 4).flatMap((row, rowIdx) =>
                row.map((key, keyIdx) => (
                  <tr
                    key={`${rowIdx}-${keyIdx}`}
                    className="border-b border-gray-100 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
                  >
                    <td className="px-4 py-2 font-mono text-gray-600 dark:text-gray-400">
                      {key.label || key.code.replace("Key", "").replace("Digit", "")}
                    </td>
                    <td className="px-4 py-2 font-hindi text-lg">{key.normal}</td>
                    <td className="px-4 py-2 font-hindi text-lg">{key.shift}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanation & User Guide */}
      <section className="mt-12 border-t border-gray-100 dark:border-gray-800 pt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            इनस्क्रिप्ट कीबोर्ड लेआउट क्या है और यह कैसे काम करता है?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            इनस्क्रिप्ट (InScript) भारत सरकार के C-DAC द्वारा विकसित मानक कीबोर्ड लेआउट है, जो हर Windows, macOS और Linux सिस्टम में पहले से इंस्टॉल होता है। इसकी सबसे बड़ी खासियत इसकी वैज्ञानिक संरचना है — सभी स्वर (vowels) कीबोर्ड के बाईं ओर और व्यंजन (consonants) दाईं ओर व्यवस्थित होते हैं। इससे दोनों हाथों का समान उपयोग होता है और टाइपिंग की गति स्वाभाविक रूप से बढ़ती है।
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            मात्रा और संयुक्त अक्षर कैसे टाइप करें
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            हिंदी की मात्राएँ (ा, ि, ी, ु, ू आदि) व्यंजन के तुरंत बाद टाइप होती हैं — जैसे "क" टाइप करने के बाद "ी" दबाने से "की" बनता है। संयुक्त अक्षर (जैसे "क्ष", "त्र") बनाने के लिए हलंत (Halant) की का उपयोग होता है, जो दो व्यंजनों को बिना स्वर के जोड़ देता है। ऊपर दिया गया इंटरैक्टिव कीबोर्ड हर कुंजी पर होवर करने से आपको उसका ठीक स्थान दिखाता है, ताकि आप बिना रटे इसे व्यावहारिक रूप से याद कर सकें।
          </p>
        </div>

        <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
            अभ्यास के लिए सुझाव
          </h3>
          <ul className="space-y-2 text-blue-950 dark:text-blue-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>शुरुआत में केवल स्वर और सामान्य व्यंजनों पर ध्यान दें, संयुक्त अक्षर बाद में सीखें</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>कीबोर्ड को बार-बार देखने की बजाय याद से टाइप करने की कोशिश करें (टच टाइपिंग)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>रोज़ाना 15-20 मिनट अभ्यास से 2-3 हफ्तों में लेआउट याद हो जाता है</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
            अक्सर पूछे जाने वाले प्रश्न
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-5">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                क्या इनस्क्रिप्ट सीखने के लिए कोई सॉफ्टवेयर इंस्टॉल करना पड़ता है?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                नहीं, यह हर आधुनिक ऑपरेटिंग सिस्टम में पहले से मौजूद होता है। बस भाषा सेटिंग्स में इसे सक्षम करना होता है।
              </p>
            </div>
            
            <div className="card p-5">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                क्या यह लेआउट सिर्फ हिंदी के लिए है?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                नहीं, चूंकि यह यूनिकोड आधारित है, इसी लेआउट से आप मराठी, संस्कृत, कोंकणी जैसी अन्य भारतीय भाषाएँ भी टाइप कर सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
