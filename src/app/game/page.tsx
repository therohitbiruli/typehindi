"use client";

import { useState } from "react";
import Image from "next/image";
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

      <div className="text-center mb-8 mt-4">
        <h1 className="heading-1 mb-3 text-4xl">टाइपिंग गेम्स (Typing Games)</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          अपनी टाइपिंग गति और सटीकता को मज़ेदार तरीके से सुधारें! अपने पसंदीदा गेम मोड का चयन करें और खेलना शुरू करें।
        </p>
      </div>

      {/* Game Selector Thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
        <button
          onClick={() => setActiveGame("classic")}
          className={`relative group rounded-2xl overflow-hidden aspect-[16/9] transition-all duration-300 ${
            activeGame === "classic"
              ? "ring-4 ring-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] transform scale-[1.02]"
              : "ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-primary-400 opacity-80 hover:opacity-100"
          }`}
        >
          <Image
            src="/images/game_thumb_classic.png"
            alt="Classic Falling Words"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Classic Falling Words</h3>
            <p className="text-gray-300 text-sm">Test your speed against gravity!</p>
          </div>
        </button>

        <button
          onClick={() => setActiveGame("tank")}
          className={`relative group rounded-2xl overflow-hidden aspect-[16/9] transition-all duration-300 ${
            activeGame === "tank"
              ? "ring-4 ring-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] transform scale-[1.02]"
              : "ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-primary-400 opacity-80 hover:opacity-100"
          }`}
        >
          <Image
            src="/images/game_thumb_tank.png"
            alt="Tank Defender"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Tank Defender</h3>
            <p className="text-gray-300 text-sm">Defend your base from incoming attacks!</p>
          </div>
        </button>
      </div>

      {activeGame === "classic" ? <GameCanvas /> : <TankGameCanvas />}

      <AdPlaceholder position="bottom" />

      {/* Instructions */}
      <section className="mt-12">
        <div className="card bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
            खेल के बारे में (About the Game)
          </h2>
          
          {activeGame === "classic" ? (
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <strong>Classic Falling Words</strong> एक अत्यधिक अनुकूलित टाइपिंग गेम है जो दबाव में आपकी प्रतिक्रिया समय और टाइपिंग गति का परीक्षण करने के लिए डिज़ाइन किया गया है। 
                इस खेल में शब्द, प्रतीक या पूरे वाक्य कैनवास के ऊपर से नीचे की ओर गिरना शुरू हो जाते हैं। 
              </p>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">कैसे खेलें (How to Play)</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-2">
                  <li>स्क्रीन पर गिरते हुए शब्दों को ध्यान से देखें।</li>
                  <li>नीचे दिए गए इनपुट बॉक्स में उस शब्द को बिल्कुल सही टाइप करें।</li>
                  <li>शब्द टाइप करने के बाद <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">Enter (⏎)</kbd> दबाएँ।</li>
                  <li>शब्द के जमीन (निचली रेखा) को छूने से पहले उसे नष्ट करें!</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">मोड और नियम (Modes & Rules)</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎮</span>
                    <span><strong>गेम मोड:</strong> आप 'शब्द', 'प्रतीक', या 'वाक्य' मोड में से किसी एक को चुन सकते हैं। शुरुआत के लिए 'शब्द' मोड सबसे अच्छा है!</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❤️</span>
                    <span><strong>जीवन (Lives):</strong> आपके पास कुल 3 जीवन होते हैं।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <span><strong>खतरा:</strong> यदि कोई भी शब्द पूरी तरह से निचली रेखा को पार कर जाता है, तो आप 1 जीवन खो देंगे।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📈</span>
                    <span><strong>कठिनाई:</strong> जैसे-जैसे आपका स्कोर बढ़ता है, शब्दों के गिरने की गति भी बढ़ती जाती है।</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <strong>Tank Defender</strong> एक तेज़-तर्रार एक्शन टाइपिंग गेम है। दुश्मनों के टैंक चारों दिशाओं से आपके मुख्य आधार (Base) की ओर बढ़ रहे हैं। आपको अपनी तेज़ टाइपिंग स्किल्स का उपयोग करके उन्हें आधार तक पहुँचने से रोकना होगा!
              </p>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">कैसे खेलें (How to Play)</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-2">
                  <li>स्क्रीन के चारों ओर से दुश्मन के टैंक आपके बेस की तरफ आएंगे।</li>
                  <li>प्रत्येक टैंक के ऊपर एक विशिष्ट अक्षर (Letter) लिखा होगा।</li>
                  <li>अपने कीबोर्ड पर सीधे उस अक्षर को दबाएँ। <span className="text-sm italic">(Enter दबाने की कोई आवश्यकता नहीं है)</span></li>
                  <li>जैसे ही आप सही अक्षर दबाएंगे, आपका बेस उस टैंक पर फायर करेगा और उसे नष्ट कर देगा!</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">विशेषताएँ और नियम (Features & Rules)</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌍</span>
                    <span><strong>भाषा समर्थन:</strong> आप खेल शुरू करने से पहले हिंदी, अंग्रेजी, तमिल, मराठी या बंगाली भाषा चुन सकते हैं!</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⏸️</span>
                    <span><strong>विराम (Pause):</strong> जरूरत पड़ने पर आप कभी भी गेम को रोक (Pause) सकते हैं।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❤️</span>
                    <span><strong>आधार सुरक्षा:</strong> आपके बेस की 3 हेल्थ (Lives) है। यदि कोई टैंक बेस से टकरा जाता है, तो हेल्थ कम हो जाएगी।</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
