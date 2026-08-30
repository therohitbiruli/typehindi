"use client";

import { useState, useEffect, useRef, Suspense, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Keyboard } from "../../components/Keyboard";
import { LessonCard } from "../../components/LessonCard";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { useKeyPress } from "../../hooks/useKeyPress";
import { lessons } from "../../data/lessons";
import { wordTypingGuides } from "../../data/word-typing-guide";
import {
  getInscriptKeysForWord,
  getRemingtonKeysForWord,
  phoneticTransliterationMap
} from "../../utils/keyboardMapper";

// Learning Expansion Modules & Data
import { keyPracticeItems, matraMasteryList, dailyJourneyDays, finalChallengesList } from "../../data/learn-data";
import { LearningProgressDashboard } from "../../components/learn/LearningProgressDashboard";
import { DailyTypingJourney } from "../../components/learn/DailyTypingJourney";
import { KeyByKeyPractice } from "../../components/learn/KeyByKeyPractice";
import { FingerPlacementGuide } from "../../components/learn/FingerPlacementGuide";
import { MatraMastery } from "../../components/learn/MatraMastery";
import { DifficultWordsPractice } from "../../components/learn/DifficultWordsPractice";
import { CommonMistakesTrainer } from "../../components/learn/CommonMistakesTrainer";
import { FinalChallenges } from "../../components/learn/FinalChallenges";

function LearnPageContent() {
  const { activeKey, isShift } = useKeyPress();
  const searchParams = useSearchParams();
  const guideRef = useRef<HTMLDivElement>(null);

  // States for Word Typing Guide & Layouts
  const [selectedWord, setSelectedWord] = useState(wordTypingGuides[0].word);
  const [customInput, setCustomInput] = useState("");
  const [activeLayoutTab, setActiveLayoutTab] = useState<"inscript" | "remington">("inscript");
  const [keyboardViewTab, setKeyboardViewTab] = useState<"inscript" | "remington">("inscript");
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  // User Learning Progress States (stored in localStorage)
  const [completedKeys, setCompletedKeys] = useState<string[]>([]);
  const [completedMatras, setCompletedMatras] = useState<string[]>([]);
  const [completedDays, setCompletedDays] = useState<number[]>([1]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  // Load user progress from localStorage on mount
  useEffect(() => {
    try {
      const savedKeys = localStorage.getItem("typehindi_completed_keys");
      if (savedKeys) setCompletedKeys(JSON.parse(savedKeys));

      const savedMatras = localStorage.getItem("typehindi_completed_matras");
      if (savedMatras) setCompletedMatras(JSON.parse(savedMatras));

      const savedDays = localStorage.getItem("typehindi_journey_days");
      if (savedDays) {
        setCompletedDays(JSON.parse(savedDays));
      } else {
        localStorage.setItem("typehindi_journey_days", JSON.stringify([1]));
      }

      const savedChallenges = localStorage.getItem("typehindi_completed_challenges");
      if (savedChallenges) setCompletedChallenges(JSON.parse(savedChallenges));
    } catch (_) {}
  }, []);

  // Save callbacks
  const handleKeyComplete = useCallback((keyId: string) => {
    setCompletedKeys(prev => {
      if (!prev.includes(keyId)) {
        const updated = [...prev, keyId];
        try { localStorage.setItem("typehindi_completed_keys", JSON.stringify(updated)); } catch (_) {}
        return updated;
      }
      return prev;
    });
  }, []);

  const handleMatraComplete = useCallback((matraId: string) => {
    setCompletedMatras(prev => {
      if (!prev.includes(matraId)) {
        const updated = [...prev, matraId];
        try { localStorage.setItem("typehindi_completed_matras", JSON.stringify(updated)); } catch (_) {}
        return updated;
      }
      return prev;
    });
  }, []);

  const handleDayComplete = useCallback((dayNumber: number) => {
    setCompletedDays(prev => {
      if (!prev.includes(dayNumber)) {
        const updated = [...prev, dayNumber];
        try { localStorage.setItem("typehindi_journey_days", JSON.stringify(updated)); } catch (_) {}
        return updated;
      }
      return prev;
    });
  }, []);

  const handleChallengeComplete = useCallback((challengeId: string) => {
    setCompletedChallenges(prev => {
      if (!prev.includes(challengeId)) {
        const updated = [...prev, challengeId];
        try { localStorage.setItem("typehindi_completed_challenges", JSON.stringify(updated)); } catch (_) {}
        return updated;
      }
      return prev;
    });
  }, []);

  const handleResetProgress = useCallback(() => {
    try {
      localStorage.removeItem("typehindi_completed_keys");
      localStorage.removeItem("typehindi_completed_matras");
      localStorage.removeItem("typehindi_journey_days");
      localStorage.removeItem("typehindi_completed_challenges");
      localStorage.removeItem("typehindi_weak_words");
      setCompletedKeys([]);
      setCompletedMatras([]);
      setCompletedDays([1]);
      setCompletedChallenges([]);
    } catch (_) {}
  }, []);

  // Handle URL redirect query param for Word Guide
  useEffect(() => {
    const wordParam = searchParams.get("word");
    const layoutParam = searchParams.get("layout");
    if (wordParam) {
      setSelectedWord(wordParam);
      setCustomInput(wordParam);
      if (layoutParam === "remington" || layoutParam === "inscript") {
        setActiveLayoutTab(layoutParam);
      }
      setTimeout(() => {
        guideRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [searchParams]);

  // Handle input word change
  const handleInputChange = (val: string) => {
    setCustomInput(val);
    if (!val.trim()) return;

    const normalized = val.toLowerCase().trim();
    if (phoneticTransliterationMap[normalized]) {
      setSelectedWord(phoneticTransliterationMap[normalized]);
    } else {
      setSelectedWord(val.trim());
    }
  };

  const staticData = wordTypingGuides.find(w => w.word === selectedWord);
  const dynamicInscriptKeys = getInscriptKeysForWord(selectedWord);
  const dynamicRemingtonKeys = getRemingtonKeysForWord(selectedWord);

  const displayMeaning = staticData ? staticData.meaning : "User Search Word";
  const displayInscriptKeys = staticData ? staticData.inscript : dynamicInscriptKeys;
  const displayRemingtonKeys = staticData ? staticData.remington : dynamicRemingtonKeys;

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Learn" }]} />

      <AdPlaceholder position="top" />

      {/* Hero Heading & Overview */}
      <div className="mb-8">
        <h1 className="heading-1 mb-2">Learn Hindi Typing (हिंदी टाइपिंग सीखें)</h1>
        <p className="text-muted text-base max-w-3xl leading-relaxed">
          Welcome to the complete interactive Hindi typing learning system. Master the InScript keyboard layout step-by-step with finger placement guidance, matra drills, difficult word exercises, and daily progression.
        </p>
      </div>

      {/* 1. Overall Progress Dashboard */}
      <LearningProgressDashboard
        completedKeysCount={completedKeys.length}
        totalKeysCount={keyPracticeItems.length}
        completedMatrasCount={completedMatras.length}
        totalMatrasCount={matraMasteryList.length}
        completedDaysCount={completedDays.length}
        totalDaysCount={dailyJourneyDays.length}
        completedChallengesCount={completedChallenges.length}
        totalChallengesCount={finalChallengesList.length}
        onResetProgress={handleResetProgress}
      />

      {/* Quick Jump Section Navigation */}
      <div className="sticky top-16 z-30 mb-10 py-3 bg-[#F4F7FB]/90 dark:bg-slate-950/90 backdrop-blur-md border-y border-[#D9E1EC] dark:border-slate-800/80 -mx-4 px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1 flex items-center gap-1">
            🧭 Jump to:
          </span>
          {[
            { id: "interactive-keyboard", label: "1. Keyboard & Guide", icon: "⌨️" },
            { id: "existing-lessons", label: "2. Lessons & Drills", icon: "📚" },
            { id: "key-practice", label: "3. Key-by-Key", icon: "🔤" },
            { id: "finger-guide", label: "4. Finger Placement", icon: "🖐️" },
            { id: "matra-mastery", label: "5. Matra Mastery", icon: "✨" },
            { id: "difficult-words", label: "6. Difficult Words", icon: "🎯" },
            { id: "common-mistakes", label: "7. Common Mistakes", icon: "⚠️" },
            { id: "daily-journey", label: "8. Daily Journey", icon: "🗓️" },
            { id: "final-challenges", label: "9. Final Challenges", icon: "🏆" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-all shadow-sm"
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* 1. Interactive Virtual Keyboard & Word Typing Guide (Preserved) */}
      <div id="interactive-keyboard" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-semibold mb-2">
            <span>⌨️ Section 1</span>
          </div>
          <h2 className="heading-2 mb-2">Interactive Keyboard (इंटरैक्टिव कीबोर्ड)</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Press any key on your physical keyboard — the corresponding Hindi character will highlight on the map. Hold Shift to see secondary characters.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-8">
          <Keyboard activeKey={activeKey} isShift={isShift} visible={true} />
        </div>
      </div>

      {/* Word Typing Guide Section (Preserved) */}
      <section ref={guideRef} id="word-guide" className="mb-14 scroll-mt-24">
        <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
          <div className="bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              ⌨️ Word Typing Guide
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Learn which keys to press to type any specific Hindi word. You can search or type any word you want!
            </p>
          </div>

          <div className="p-6 md:p-8 grid gap-8 lg:grid-cols-12">
            {/* Left Column: Word selector & Keystroke guide */}
            <div className="lg:col-span-7 space-y-6">
              {/* Dynamic Word Search */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Search or Type Any Word
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="e.g., gyan, namaste, or type in Hindi..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {customInput && (
                    <button
                      onClick={() => {
                        setCustomInput("");
                        setSelectedWord(wordTypingGuides[0].word);
                      }}
                      className="px-3 text-xs font-semibold text-gray-400 hover:text-gray-600"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-gray-400">
                  Type in either English phonetics or Hindi directly. Example: typing <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">namaste</span> will display the typing guide for <span className="font-semibold text-primary-500">नमस्ते</span>.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                  Quick Practice Words
                </label>
                <div className="flex flex-wrap gap-2">
                  {wordTypingGuides.map((guide) => (
                    <button
                      key={guide.word}
                      onClick={() => {
                        setSelectedWord(guide.word);
                        setCustomInput(guide.word);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedWord === guide.word
                          ? "bg-primary-500 text-white shadow-md shadow-primary-500/20 scale-[1.03]"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      {guide.word}
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout Mode Selector */}
              <div className="border-b border-gray-200 dark:border-gray-800 flex gap-4">
                <button
                  onClick={() => setActiveLayoutTab("inscript")}
                  className={`pb-3 font-semibold text-sm transition-all border-b-2 ${
                    activeLayoutTab === "inscript"
                      ? "border-primary-500 text-primary-600 dark:text-primary-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  InScript Layout
                </button>
                <button
                  onClick={() => setActiveLayoutTab("remington")}
                  className={`pb-3 font-semibold text-sm transition-all border-b-2 ${
                    activeLayoutTab === "remington"
                      ? "border-primary-500 text-primary-600 dark:text-primary-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  Remington GAIL Layout
                </button>
              </div>

              {/* Display Word & Keystroke Sequence */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="mb-4">
                  <div className="text-5xl font-hindi font-bold text-gray-900 dark:text-white tracking-wide">
                    {selectedWord}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    Meaning / Category: {displayMeaning}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 text-left">
                    Key Sequence
                  </h4>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    {(activeLayoutTab === "inscript" ? displayInscriptKeys : displayRemingtonKeys).map((stroke, i) => (
                      <div key={i} className="flex items-center">
                        {i > 0 && <span className="text-gray-300 dark:text-gray-700 mx-2 text-xl font-light">→</span>}
                        <div className="flex flex-col items-center">
                          <kbd className={`px-3 py-2 rounded-lg border-b-4 font-mono text-sm font-bold shadow-sm transition-all ${
                            stroke.isShift
                              ? "bg-indigo-50 border-indigo-300 dark:bg-indigo-950 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300"
                              : "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                          }`}>
                            {stroke.isShift && <span className="text-[10px] text-indigo-500 block uppercase font-sans">Shift +</span>}
                            {stroke.key}
                          </kbd>
                          <span className="text-xs font-hindi font-semibold text-primary-600 dark:text-primary-400 mt-1.5">
                            {stroke.charProduced}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Keyboard layout images reference */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-150 dark:border-gray-800 pt-6 lg:pt-0 lg:pl-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  Layout Map
                </h3>
                <div className="flex gap-2 bg-gray-100 dark:bg-gray-855 p-0.5 rounded-lg text-xs">
                  <button
                    onClick={() => setKeyboardViewTab("inscript")}
                    className={`px-2 py-1 rounded-md font-semibold ${
                      keyboardViewTab === "inscript" ? "bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white" : "text-gray-500"
                    }`}
                  >
                    InScript
                  </button>
                  <button
                    onClick={() => setKeyboardViewTab("remington")}
                    className={`px-2 py-1 rounded-md font-semibold ${
                      keyboardViewTab === "remington" ? "bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white" : "text-gray-500"
                    }`}
                  >
                    Remington
                  </button>
                </div>
              </div>

              {/* Modal trigger container */}
              <div
                onClick={() => setModalImage({
                  src: keyboardViewTab === "inscript" ? "/images/inscript-keyboard-map.png" : "/images/remington-keyboard-map.png",
                  title: keyboardViewTab === "inscript" ? "InScript Keyboard Layout" : "Remington GAIL Layout"
                })}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 cursor-pointer group shadow-sm hover:shadow-md transition-all"
              >
                {keyboardViewTab === "inscript" ? (
                  <Image
                    src="/images/inscript-keyboard-map.png"
                    alt="InScript Keyboard Layout Map"
                    fill
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src="/images/remington-keyboard-map.png"
                    alt="Remington GAIL Keyboard Layout Map"
                    fill
                    className="object-contain"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200">
                  <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
                    🔍 Zoom Map
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                Click on the layout map to view in full screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Existing Lessons & Exercises (Preserved) */}
      <div id="existing-lessons" className="mb-14 scroll-mt-24">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <span>📚 Section 2</span>
          </div>
          <h2 className="heading-2 mb-2 flex items-center gap-2">
            <span>📚</span> Lessons & Exercises (पाठ एवं अभ्यास)
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Structured step-by-step touch typing curriculum covering home row, vowels, consonants, matras, conjuncts, and full sentences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>

      {/* 3. Key-by-Key Practice */}
      <KeyByKeyPractice
        completedKeys={completedKeys}
        onKeyComplete={handleKeyComplete}
      />

      {/* 4. Finger Placement Guide */}
      <FingerPlacementGuide />

      {/* 5. Matra Mastery */}
      <MatraMastery
        completedMatras={completedMatras}
        onMatraComplete={handleMatraComplete}
      />

      {/* 6. Difficult Hindi Words Practice */}
      <DifficultWordsPractice />

      {/* 7. Common Typing Mistakes Trainer */}
      <CommonMistakesTrainer />

      {/* 8. Daily Hindi Typing Journey (14 Stages) */}
      <DailyTypingJourney
        completedDays={completedDays}
        onDayComplete={handleDayComplete}
      />

      {/* 9. Final Typing Challenges */}
      <FinalChallenges
        completedChallenges={completedChallenges}
        onChallengeComplete={handleChallengeComplete}
      />

      {/* 12. Navigation Redirect Cards (Preserved) */}
      <section className="mt-8 mb-12 grid gap-6 md:grid-cols-2">
        {/* Game Redirect Card */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-gray-900 dark:to-purple-955/20 p-8 shadow-sm transition-all hover:shadow-md hover:border-primary-300 dark:hover:border-primary-800 flex flex-col justify-between group">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-9xl">🎮</span>
          </div>
          <div>
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xl font-bold mb-4">
              🎮
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Play Typing Games
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Tired of standard drills? Play our canvas-based typing games to sharpen your speed and accuracy in an engaging way.
            </p>
          </div>
          <Link
            href="/game"
            className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 max-w-xs"
          >
            Go to Game Zone
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Blog Redirect Card */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-gray-900 dark:to-teal-955/20 p-8 shadow-sm transition-all hover:shadow-md hover:border-primary-300 dark:hover:border-primary-800 flex flex-col justify-between group">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-9xl">📰</span>
          </div>
          <div>
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xl font-bold mb-4">
              📰
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Read Guides & Articles
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Read 20+ insightful articles by experts covering Mangal font, InScript vs Remington layouts, and official government exam criteria.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 max-w-xs"
          >
            View All Articles
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal (Preserved) */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in">
          <div className="relative max-w-5xl w-full bg-white dark:bg-gray-950 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {modalImage.title}
              </h4>
              <button
                onClick={() => setModalImage(null)}
                className="h-10 w-10 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full aspect-[4/3] max-h-[75vh] bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden">
              <Image
                src={modalImage.src}
                alt={modalImage.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <AdPlaceholder position="bottom" />
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={
      <div className="container-main py-12 text-center text-gray-500">
        Loading...
      </div>
    }>
      <LearnPageContent />
    </Suspense>
  );
}
