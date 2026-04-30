"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { PracticeTool } from "../../components/PracticeTool";
import { SEOContent } from "../../components/SEOContent";

export default function PracticePage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Practice" }]} />

      <AdPlaceholder position="top" />

      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="heading-1 mb-2">हिंदी टाइपिंग अभ्यास (Hindi Typing Practice)</h1>
        <p className="text-muted">
          InScript कीबोर्ड लेआउट पर हिंदी टाइपिंग का अभ्यास करें और अपनी गति सुधारें।
        </p>
      </div>

      {/* Practice Tool */}
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border border-gray-100 dark:border-gray-800">
        <PracticeTool />
      </div>

      <AdPlaceholder position="bottom" />

      {/* Practice Strategy Section */}
      <section className="mt-12 mb-12 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/30">
        <h2 className="text-2xl font-bold mb-4">स्टेनोग्राफी और एलडीसी अभ्यास रणनीति</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">शॉर्टहैंड के लिए टाइपिंग अभ्यास</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              स्टेनोग्राफर को केवल शॉर्टहैंड लिखना ही नहीं, बल्कि उसे तेजी से टाइप करना भी आना चाहिए। हमारा सुझाव है कि आप डिक्टेशन को कागज पर लिखने के बाद उसे यहाँ 'Practice' बॉक्स में टाइप करें। इससे आपकी ट्रांसक्रिप्शन स्पीड में सुधार होगा।
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">कीबोर्ड का सही चयन</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              सरकारी परीक्षाओं में अक्सर मैकेनिकल कीबोर्ड या कठोर बटन वाले कीबोर्ड मिलते हैं। घर पर अभ्यास के दौरान विभिन्न प्रकार के कीबोर्ड का उपयोग करने का प्रयास करें ताकि आपकी उंगलियाँ किसी भी स्थिति के लिए तैयार रहें।
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SEOContent />
    </div>
  );
}
