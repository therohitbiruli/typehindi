"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { PracticeTool } from "../../components/PracticeTool";
import { SEOContent } from "../../components/SEOContent";

export default function MangalFontTestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary-700 pt-4 pb-12 border-b border-primary-800">
        <div className="container-main">
          {/* We need to override the Breadcrumb text color to be visible on dark blue */}
          <div className="text-primary-100">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Mangal Font Typing Test" }]} />
          </div>
          <div className="text-center mt-4 mb-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Mangal Font Hindi Typing Test (मंगल फॉन्ट)</h1>
            <p className="text-primary-100">
              Practice online Hindi typing in Mangal Font (InScript Layout) for SSC, CPCT, and Govt Exams.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 border-4 border-primary-500/30 rounded-xl p-2 sm:p-4 shadow-2xl">
            <PracticeTool />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900 flex-grow">
        <div className="container-main max-w-5xl">
          <AdPlaceholder position="top" />

          {/* Dedicated Mangal Font SEO Section */}
          <div className="mt-8 mb-8 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded shadow-sm overflow-hidden">
            <div className="bg-primary-700 text-white px-5 py-3 border-b border-primary-800">
              <h2 className="text-xl font-bold">मंगल फॉन्ट (Mangal Font) टाइपिंग क्या है?</h2>
            </div>
            <div className="p-5 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">यूनिकोड और मंगल फॉन्ट</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  मंगल फॉन्ट (Mangal Font) हिंदी के लिए एक डिफ़ॉल्ट यूनिकोड फॉन्ट है। भारत सरकार की लगभग सभी परीक्षाओं (जैसे SSC, CPCT, High Court) में टाइपिंग टेस्ट के लिए मंगल फॉन्ट का ही उपयोग किया जाता है। मंगल फॉन्ट पर टाइप करने के लिए सबसे वैज्ञानिक और अनुशंसित लेआउट <strong>इनस्क्रिप्ट (InScript)</strong> है। हमारा टूल पूरी तरह से इसी मानक पर आधारित है।
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">ऑनलाइन टेस्ट की तैयारी</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  इस <strong>Online Hindi Typing Test Mangal Font</strong> पेज का उद्देश्य आपको परीक्षा जैसा माहौल प्रदान करना है। यहाँ आप अपनी टाइपिंग स्पीड (WPM) और सटीकता की जांच कर सकते हैं। निरंतर अभ्यास से आप आसानी से मंगल फॉन्ट में 40+ WPM की गति प्राप्त कर सकते हैं।
                </p>
              </div>
            </div>
          </div>

          <AdPlaceholder position="bottom" />
          <div className="mt-8">
            <SEOContent />
          </div>
        </div>
      </section>
    </div>
  );
}
