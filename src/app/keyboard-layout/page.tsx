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

      {/* Explanation */}
      <section className="mt-8 space-y-4">
        <h2 className="heading-2">InScript लेआउट की विशेषताएँ</h2>
        <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-3">
          <p>
            InScript (Indian Script) कीबोर्ड लेआउट भारत सरकार द्वारा विकसित मानकीकृत कीबोर्ड लेआउट है। इसमें स्वर कीबोर्ड के बाएँ भाग में और व्यंजन दाएँ भाग में व्यवस्थित होते हैं। यह ध्वन्यात्मक सिद्धांत पर आधारित है जिससे दोनों हाथों का समान उपयोग होता है।
          </p>
          <h3 className="heading-3">लेआउट की संरचना</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>बायाँ भाग:</strong> स्वर और मात्राएँ (ा, ि, ी, ु, ू, े, ै, ो, ौ)</li>
            <li><strong>दायाँ भाग:</strong> व्यंजन (क, ख, ग, घ, च, छ, ज, झ, आदि)</li>
            <li><strong>D कुंजी:</strong> हलंत (्) — संयुक्त अक्षर बनाने के लिए</li>
            <li><strong>Shift कुंजी:</strong> महाप्राण व्यंजन और स्वतंत्र स्वर</li>
          </ul>
          <h3 className="heading-3">अन्य लेआउट से तुलना</h3>
          <p>
            रेमिंगटन (Remington) लेआउट पुराने टाइपराइटर पर आधारित है जबकि InScript यूनिकोड मानक पर आधारित आधुनिक लेआउट है। InScript का सबसे बड़ा लाभ यह है कि एक बार सीखने के बाद आप सभी भारतीय भाषाओं (तमिल, तेलुगु, बंगाली, मराठी आदि) में टाइप कर सकते हैं क्योंकि सभी के लिए एक ही लेआउट पैटर्न है।
          </p>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
