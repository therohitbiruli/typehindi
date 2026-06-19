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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
        <button
          onClick={() => setActiveGame("classic")}
          className={`relative group rounded-[2rem] overflow-hidden aspect-[16/9] transition-all duration-500 border-3 ${
            activeGame === "classic"
              ? "border-primary-500 shadow-[0_15px_30px_rgba(99,102,241,0.25)] dark:shadow-[0_15px_30px_rgba(99,102,241,0.12)] scale-[1.02]"
              : "border-slate-200 dark:border-slate-800/80 hover:border-primary-400 hover:scale-[1.01]"
          }`}
        >
          <Image
            src="/images/game_thumb_classic.png"
            alt="Classic Falling Words"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 text-left">
            <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-amber-500 text-white font-black text-[10px] uppercase tracking-widest shadow-sm">
              🔥 POPULAR
            </span>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-1.5 tracking-wide">Classic Falling Words</h3>
                <p className="text-slate-300 text-xs font-light">Test your speed against gravity!</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-primary-600 border border-white/20 flex items-center justify-center text-white text-lg transition-all transform group-hover:scale-110">
                ▶
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => setActiveGame("tank")}
          className={`relative group rounded-[2rem] overflow-hidden aspect-[16/9] transition-all duration-500 border-3 ${
            activeGame === "tank"
              ? "border-primary-500 shadow-[0_15px_30px_rgba(99,102,241,0.25)] dark:shadow-[0_15px_30px_rgba(99,102,241,0.12)] scale-[1.02]"
              : "border-slate-200 dark:border-slate-800/80 hover:border-primary-400 hover:scale-[1.01]"
          }`}
        >
          <Image
            src="/images/game_thumb_tank.png"
            alt="Tank Defender"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 text-left">
            <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest shadow-sm">
              ⚡ NEW
            </span>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-1.5 tracking-wide">Tank Defender</h3>
                <p className="text-slate-300 text-xs font-light">Defend your base from incoming attacks!</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-primary-600 border border-white/20 flex items-center justify-center text-white text-lg transition-all transform group-hover:scale-110">
                ▶
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* 🎮 Game Launcher Arena */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border-2 border-slate-250 dark:border-slate-800 mb-12">
        {activeGame === "classic" ? <GameCanvas /> : <TankGameCanvas />}
      </div>

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
