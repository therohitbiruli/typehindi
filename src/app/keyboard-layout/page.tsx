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

      <h1 className="heading-1 mb-2">InScript Keyboard Layout</h1>
      <p className="text-muted mb-6">
        Complete layout of the Hindi InScript keyboard. Press any key to see its corresponding Hindi character, or hold Shift to see secondary characters.
      </p>

      {/* Interactive keyboard */}
      <Keyboard activeKey={activeKey} isShift={isShift} visible={true} />

      {/* Key reference table */}
      <div className="mt-8">
        <h2 className="heading-2 mb-4">Key Reference Table</h2>
        <div className="card overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">English Key</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Normal</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Shift</th>
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
            What is the InScript Keyboard Layout and how does it work?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            InScript (Indian Script) is the standard keyboard layout developed by C-DAC for the Government of India. It comes pre-installed on Windows, macOS, and Linux systems. Its main highlight is its scientific layout structure — all vowels are mapped on the left side of the keyboard, and all consonants are mapped on the right. This distributes the typing load equally between both hands and naturally increases typing speed.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            How to Type Matras (Diacritics) and Conjunct Characters
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hindi matras (ा, ि, ी, ु, ू etc.) are typed immediately after typing the consonant. For example, typing "क" followed by "ी" produces "की". Conjunct characters (like "क्ष", "त्र") are formed by inserting the halant (Halkey) character, which removes the inherent vowel from the preceding consonant to bind them together. Hovering over any key on the interactive keyboard above shows you its exact layout and assignments.
          </p>
        </div>

        <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
            Tips for Practice
          </h3>
          <ul className="space-y-2 text-blue-950 dark:text-blue-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Start by practicing vowels and simple consonants, and learn conjunct characters later.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Avoid looking down at the keyboard too often; practice touch typing instead.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Practicing for just 15-20 minutes daily will help you memorize the layout within 2 to 3 weeks.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-5">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Do I need to install any software to learn InScript?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                No, it is built directly into every modern operating system. You just need to enable it in your system language settings.
              </p>
            </div>
            
            <div className="card p-5">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is this layout only for Hindi?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                No, since it is unicode-based, you can use the same layout to type Marathi, Sanskrit, Konkani, and other Indian script languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
