"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { PracticeTool } from "../../components/PracticeTool";
import { SEOContent } from "../../components/SEOContent";

export default function MangalFontTestPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Mangal Font Typing Test" }]} />

      <AdPlaceholder position="top" />

      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="heading-1 mb-2">Mangal Font Hindi Typing Test (मंगल फॉन्ट)</h1>
        <p className="text-muted">
          Practice online Hindi typing in Mangal Font (InScript Layout) for SSC, CPCT, and Govt Exams.
        </p>
      </div>

      {/* Practice Tool */}
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border border-gray-100 dark:border-gray-800">
        <PracticeTool />
      </div>

      <AdPlaceholder position="bottom" />

      {/* Dedicated Mangal Font SEO Section */}
      <section className="mt-12 mb-12 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/30">
        <h2 className="text-2xl font-bold mb-4">मंगल फॉन्ट (Mangal Font) टाइपिंग क्या है?</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">यूनिकोड और मंगल फॉन्ट</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              मंगल फॉन्ट (Mangal Font) हिंदी के लिए एक डिफ़ॉल्ट यूनिकोड फॉन्ट है। भारत सरकार की लगभग सभी परीक्षाओं (जैसे SSC, CPCT, High Court) में टाइपिंग टेस्ट के लिए मंगल फॉन्ट का ही उपयोग किया जाता है। मंगल फॉन्ट पर टाइप करने के लिए सबसे वैज्ञानिक और अनुशंसित लेआउट <strong>इनस्क्रिप्ट (InScript)</strong> है। हमारा टूल पूरी तरह से इसी मानक पर आधारित है।
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">ऑनलाइन टेस्ट की तैयारी</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              इस <strong>Online Hindi Typing Test Mangal Font</strong> पेज का उद्देश्य आपको परीक्षा जैसा माहौल प्रदान करना है। यहाँ आप अपनी टाइपिंग स्पीड (WPM) और सटीकता की जांच कर सकते हैं। निरंतर अभ्यास से आप आसानी से मंगल फॉन्ट में 40+ WPM की गति प्राप्त कर सकते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* General SEO Content */}
      <SEOContent />
    </div>
  );
}
