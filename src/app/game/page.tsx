"use client";

import { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { GameCanvas } from "../../components/GameCanvas";
import { TankGameCanvas } from "../../components/TankGameCanvas";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export default function GamePage() {
  const [activeGame, setActiveGame] = useState<"classic" | "tank">("classic");

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Game" }]} />

      <AdPlaceholder position="top" />

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="heading-1 mb-2">टाइपिंग गेम्स (Typing Games)</h1>
          <p className="text-muted">
            अपनी टाइपिंग गति और सटीकता को मज़ेदार तरीके से सुधारें!
          </p>
        </div>

        {/* Game Selector Tabs */}
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg shrink-0">
          <button
            onClick={() => setActiveGame("classic")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeGame === "classic"
                ? "bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Classic Falling Words
          </button>
          <button
            onClick={() => setActiveGame("tank")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeGame === "tank"
                ? "bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Tank Defender
          </button>
        </div>
      </div>

      {activeGame === "classic" ? <GameCanvas /> : <TankGameCanvas />}

      <AdPlaceholder position="bottom" />

      {/* Instructions */}
      <section className="mt-8">
        <div className="card bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <h2 className="heading-2 mb-4">खेल के बारे में</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {activeGame === "classic" 
              ? "यह अत्यधिक अनुकूलित टाइपिंग गेम दबाव में आपकी प्रतिक्रिया समय और टाइपिंग गति का परीक्षण करने के लिए डिज़ाइन किया गया है। शब्द, प्रतीक या वाक्य कैनवास के ऊपर से गिरना शुरू हो जाएंगे। आपको उन्हें इनपुट बॉक्स में सही ढंग से टाइप करना होगा और जमीन की रेखा को छूने से पहले Enter दबाना होगा।"
              : "टैंक डिफेंडर गेम में, दुश्मन के टैंक स्क्रीन के चारों ओर से आते हैं। प्रत्येक टैंक पर एक अंग्रेजी अक्षर लिखा होता है। टैंक को नष्ट करने के लिए आपको बस अपने कीबोर्ड पर उस अक्षर को दबाना है। आधार तक पहुँचने से पहले उन्हें नष्ट करें!"}
          </p>
          
          <h3 className="text-lg font-bold mb-3">नियम</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">❤️</span>
              <span>प्रत्येक खेल में आपके पास <strong>3 जीवन</strong> होते हैं।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">⚠️</span>
              <span>यदि कोई भी वस्तु पूरी तरह से निचली रेखा को पार कर जाती है या आधार (Base) तक पहुँच जाती है, तो आप 1 जीवन खो देंगे।</span>
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
