"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { GameCanvas } from "../../components/GameCanvas";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export default function GamePage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Game" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-2">हिंदी टाइपिंग गेम (Hindi Typing Game)</h1>
      <p className="text-muted mb-6">
        गिरते हुए हिंदी शब्दों को सही टाइप करके हटाएँ। स्कोर बढ़ने के साथ गति भी बढ़ेगी!
      </p>

      <GameCanvas />

      <AdPlaceholder position="bottom" />

      {/* Instructions */}
      <section className="mt-8">
        <div className="card bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <h2 className="heading-2 mb-4">खेल के बारे में</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            यह अत्यधिक अनुकूलित टाइपिंग गेम दबाव में आपकी प्रतिक्रिया समय और टाइपिंग गति का परीक्षण करने के लिए डिज़ाइन किया गया है। 
            शब्द, प्रतीक या वाक्य कैनवास के ऊपर से गिरना शुरू हो जाएंगे। आपको उन्हें इनपुट बॉक्स में सही ढंग से टाइप करना होगा और जमीन की रेखा को छूने से पहले Enter दबाना होगा।
          </p>
          
          <h3 className="text-lg font-bold mb-3">गेम मोड</h3>
          <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-primary-500 font-bold">1. शब्द (Words)</span>
              <span>क्लासिक मोड। स्कोर बढ़ने के साथ सामान्य हिंदी शब्द बढ़ती गति से गिरते हैं।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-primary-500 font-bold flex-shrink-0">2. प्रतीक (Symbols)</span>
              <span>उन्नत मोड। शिफ्ट-संशोधित कुंजियों और शीर्ष-पंक्ति संख्यात्मक प्रतीकों तक पहुँचने का अभ्यास करें। पूर्ण कीबोर्ड महारत के लिए अत्यधिक अनुशंसित।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-primary-500 font-bold">3. वाक्य (Sentences)</span>
              <span>विशेषज्ञ मोड। लंबे समय तक आपके धैर्य और वास्तविक WPM का परीक्षण करते हुए, पूरे वाक्य धीरे-धीरे गिरते हैं।</span>
            </li>
          </ul>

          <h3 className="text-lg font-bold mb-3">नियम</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">❤️</span>
              <span>प्रत्येक खेल में आपके पास न्यूनतम <strong>3 जीवन</strong> होते हैं।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">⚠️</span>
              <span>यदि कोई भी वस्तु पूरी तरह से निचली रेखा को पार कर जाती है, तो आप 1 जीवन खो देंगे।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">❌</span>
              <span>जब आपके जीवन समाप्त हो जाते हैं (0 जीवन), तो खेल तुरंत समाप्त हो जाता है। अपने उच्चतम स्कोर को तोड़ने का प्रयास करें!</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
