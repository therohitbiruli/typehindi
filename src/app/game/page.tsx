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
              : "border-[#D9E1EC] dark:border-slate-800/80 hover:border-primary-400 hover:scale-[1.01]"
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
              : "border-[#D9E1EC] dark:border-slate-800/80 hover:border-primary-400 hover:scale-[1.01]"
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
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] border border-[#D9E1EC] dark:border-slate-800 mb-12">
        {activeGame === "classic" ? <GameCanvas /> : <TankGameCanvas />}
      </div>

      <AdPlaceholder position="bottom" />

      {/* Instructions */}
      <section className="mt-12">
        <div className="card bg-[#EEF2F7] dark:bg-gray-900 border border-[#D9E1EC] dark:border-gray-800 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white border-b border-[#D9E1EC] dark:border-gray-700 pb-4">
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

      {/* SEO & Guide Content: How Typing Games Improve Your Typing Speed */}
      <section className="mt-12 mb-8">
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 sm:p-10 space-y-10">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-3">
              🎮 Scientific Skill Building
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-2.5 h-7 rounded-full bg-purple-500"></span>
              How Typing Games Improve Your Typing Speed (Complete Guide)
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Discover how interactive arcade mechanics, gamified drills, and real-time challenges train your cognitive reflexes and muscle memory much faster than conventional typing exercises.
            </p>
          </div>

          <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              In today&apos;s digital era, fast and accurate typing is not merely a technical skill—it is an indispensable career asset. Whether you are preparing for government competitive examinations such as SSC CGL DEST, CHSL, High Court clerkships, CPCT, or looking to maximize your daily professional productivity, typing efficiency directly dictates your performance. While traditional typing tutors and repetitive paragraph drills have their place, hundreds of thousands of learners plateau after reaching 25 to 30 Words Per Minute (WPM).
            </p>
            <p>
              The solution to breaking through typing speed plateaus lies in <strong>gamification</strong>. By turning typing practice into an interactive, time-sensitive game—such as our <em>Classic Falling Words</em> or <em>Tank Defender</em>—learners engage completely different neurological and cognitive pathways. Below is an in-depth breakdown of how and why typing games accelerate typing mastery, backed by principles of cognitive psychology and motor skill acquisition.
            </p>
          </div>

          <div className="space-y-8">
            {/* Point 1 */}
            <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-mono">01.</span>
                Accelerated Development of Involuntary Muscle Memory
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Touch typing operates on procedural memory (muscle memory)—the subconscious motor system that allows a pianist to strike piano keys without staring at their fingers. When you practice standard static passages, your conscious mind frequently interferes with your finger movements. You read a letter, look at the screen, deliberate where that key is positioned, and then instruct your finger to press it. This conscious feedback loop produces hesitation and caps your typing velocity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                In contrast, typing games strip away the luxury of hesitation. When words or enemy targets descend rapidly down the screen, your conscious analytical brain cannot keep up with individual keystroke decisions. Your subconscious motor reflexes are forced to take control. With regular game sessions, your fingers develop instant geometric associations with key positions on the keyboard, drastically reducing latency and locking key positions into procedural memory permanently.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-mono">02.</span>
                Mastering &quot;Word Chunking&quot; and Optical Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Beginner and intermediate typists typically process text letter-by-letter. To type the word <em>&quot;typing&quot;</em>, their brain registers T, then Y, then P, then I, then N, then G. Advanced typists, on the other hand, employ a cognitive phenomenon known as <strong>lexical chunking</strong>. They perceive entire words, prefixes, and suffixes as single motor units. A 6-letter word is triggered as one fluid multi-finger cascade rather than six independent choices.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Arcade typing games specifically stimulate word chunking. Because target words fall continuously, your visual cortex learns to recognize the general shape and phonetic structure of words instantaneously. Your hands instinctively fire off common trigrams (like <em>-ing</em>, <em>-tion</em>, <em>-ment</em>, or Devanagari conjuncts) in a single burst. This transition from character-by-character input to holistic word chunking is the single biggest catalyst for jumping from 30 WPM to 60+ WPM.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-mono">03.</span>
                Simulating Exam-Day Urgency and Eliminating Pressure Anxiety
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                One of the most frequent complaints from government exam aspirants (such as those taking the SSC CGL DEST or state high court typing tests) is exam-room anxiety. Candidates who easily hit 40 WPM at home often panic during official examinations due to countdown timers, the cacophony of hundreds of clicking keyboards, and the fear of disqualification due to errors.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Typing games serve as a natural stress-inoculation tool. Because your in-game lives or base health are directly on the line as words drop or enemies advance, your nervous system experiences a safe, controlled spike in adrenaline. By conditioning your fingers to maintain pinpoint precision while your heart rate is elevated, you develop mental resilience. When exam day arrives, high-pressure environments feel familiar rather than paralyzing.
              </p>
            </div>

            {/* Point 4 */}
            <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-mono">04.</span>
                Immediate Error Feedback and Finger Discipline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                When typing long unguided text paragraphs, it is easy to develop sloppy habits: pressing keys with the wrong fingers, looking down at the keyboard, or relying excessively on the backspace key to fix mistyped words. Because paragraph drills don&apos;t penalize micro-pauses, bad technique goes unnoticed until speed stagnates.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                In gaming modes, feedback is instantaneous. If you hesitate, look down at your keyboard, or make multiple typographical mistakes, the falling word reaches the boundary or the enemy tank breaches your perimeter. This instant consequence mechanism immediately enforces ergonomic finger discipline. You quickly realize that correct home-row posture and blind touch typing are the only viable strategies to advance to higher game stages.
              </p>
            </div>

            {/* Point 5 */}
            <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-mono">05.</span>
                Mastering Hindi InScript and Regional Layouts Rapidly
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Learning Hindi typing—especially on standardized layouts like InScript or Remington GAIL—presents a steep initial learning curve. Unlike English QWERTY, where most learners have casual familiarity through mobile texting and web browsing, Hindi layouts place vowels on the left hand, consonants on the right hand, and complex matras or halant ligatures on upper shifts. Memorizing these configurations by staring at charts can feel overwhelming.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                By selecting Hindi or other regional Indian languages (Marathi, Bengali, Punjabi, Tamil) in our <em>Tank Defender</em> arcade, the process transforms from memorization into active stimulus-response conditioning. Each incoming letter prompts an instant motor reflex. Within 15 to 20 rounds of gameplay, Devanagari character locations become second nature, giving you an unfair advantage when transitioning to our structured <a href="/mangal-font-typing-test" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Mangal Font Typing Test</a> modules.
              </p>
            </div>

            {/* Point 6 */}
            <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-mono">06.</span>
                High Dopamine Engagement: Defeating Boredom and Fatigue
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                The number one barrier to typing excellence is inconsistency. Most learners start with immense motivation, practice boring paragraphs for three days, get fatigued, and abandon their routine before permanent motor pathways solidify. Human brains are wired to seek rewarding feedback loops; repetitive text typing lacks the novelty and dopamine triggers required for long-term adherence.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Typing games harness intrinsic reward mechanisms. Beating your personal best high score, surviving an intense wave of falling words, or advancing to an uncharted difficulty tier triggers dopamine release. This turns typing from a tedious chore into an addictive, rewarding habit. When you genuinely look forward to your daily practice sessions, putting in 20 to 30 minutes of keyboard training every single day becomes completely effortless.
              </p>
            </div>

            {/* Point 7 */}
            <div className="bg-slate-50/70 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-mono">07.</span>
                The 30-Minute Daily Hybrid Routine for Rapid Speed Gains
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                To maximize your typing speed and accuracy improvements, top speed typists and exam toppers recommend combining games with structured tests in a balanced daily hybrid regimen:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">Step 1: Warm-Up (10 Mins)</span>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">Interactive Typing Games</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Play 3 to 4 rounds of Classic Falling Words or Tank Defender. This loosens stiff finger tendons, sparks mental alertness, and primes muscle reflexes under pressure.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">Step 2: Technique (10 Mins)</span>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">Deliberate Practice</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Head over to our <a href="/practice" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Hindi Typing Practice Tool</a>. Focus purely on 98%+ accuracy, eliminating backspace dependence and maintaining strict home-row finger placement.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">Step 3: Benchmark (10 Mins)</span>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">Timed Exam Simulation</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Conclude your session on the <a href="/test" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Typing Test Simulator</a>. Take a formal 5 or 10-minute test to record your true net WPM, error rates, and monitor your weekly growth trajectory.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="border-t border-slate-100 dark:border-slate-800 pt-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Summary: Why You Should Play Typing Games Today</h3>
            <p>
              Typing is an athletic motor discipline of the fingers and mind. Just as athletes use high-speed agility drills and reaction training rather than simple long-distance jogging alone, typists must challenge their nervous system with speed-demanding, gamified stimuli. By introducing gamification into your daily keyboard regimen, you bypass cognitive friction, foster subconscious muscle memory, master word chunking, and build genuine confidence under pressure.
            </p>
            <p>
              Select either <strong>Classic Falling Words</strong> or <strong>Tank Defender</strong> above, choose your preferred language, and experience firsthand how entertaining and effective game-powered typing can be!
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
