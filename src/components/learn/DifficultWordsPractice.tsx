"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { difficultWordCategories, DifficultWordCategory } from "../../data/learn-data";
import { getInscriptCharFromEvent } from "../../utils/inscriptInputHelper";

export function DifficultWordsPractice() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [isWeakWordsMode, setIsWeakWordsMode] = useState(false);
  const [weakWordsList, setWeakWordsList] = useState<string[]>([]);
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);

  const [typedText, setTypedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // Load weak words from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("typehindi_weak_words");
      if (saved) {
        setWeakWordsList(JSON.parse(saved));
      }
    } catch (_) {}
  }, []);

  const saveWeakWord = (word: string) => {
    try {
      setWeakWordsList(prev => {
        if (!prev.includes(word)) {
          const updated = [...prev, word];
          localStorage.setItem("typehindi_weak_words", JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    } catch (_) {}
  };

  const removeWeakWord = (word: string) => {
    try {
      setWeakWordsList(prev => {
        const updated = prev.filter(w => w !== word);
        localStorage.setItem("typehindi_weak_words", JSON.stringify(updated));
        return updated;
      });
    } catch (_) {}
  };

  const currentCategory = difficultWordCategories[selectedCategoryIndex] || difficultWordCategories[0];

  // Active word list
  const activeWords = isWeakWordsMode
    ? weakWordsList.map(w => ({
        word: w,
        meaning: "Identified Problem Word from previous drills",
        keysSummary: "Type carefully with proper Halant & Matras",
        difficulty: "Hard" as const,
      }))
    : currentCategory.words;

  const currentWordObj = activeWords[selectedWordIndex] || activeWords[0] || {
    word: "प्रशासनिक",
    meaning: "Administrative",
    keysSummary: "प + ् + र + श + ा + स + न + ि + क",
    difficulty: "Hard" as const,
  };

  const targetText = currentWordObj.word;

  const resetPractice = useCallback(() => {
    setTypedText("");
    setIsFinished(false);
    setStartTime(null);
    setWpm(0);
    setErrors(0);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }, []);

  useEffect(() => {
    resetPractice();
  }, [currentWordObj.word, resetPractice]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFinished) return;

    if (!startTime) {
      setStartTime(Date.now());
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      if (typedText.length > 0) {
        setTypedText(prev => prev.slice(0, -1));
      }
      return;
    }

    const char = getInscriptCharFromEvent(e);
    if (!char) return;

    e.preventDefault();
    const nextIndex = typedText.length;
    if (nextIndex >= targetText.length) return;

    const isCorrect = char === targetText[nextIndex];
    if (!isCorrect) {
      setErrors(prev => prev + 1);
    }

    const newTyped = typedText + char;
    setTypedText(newTyped);

    if (newTyped.length >= targetText.length) {
      setIsFinished(true);
      const elapsedMinutes = startTime ? (Date.now() - startTime) / 60000 : 0.05;
      const speed = Math.round((targetText.length / 5) / (elapsedMinutes || 0.05));
      setWpm(Math.max(10, speed));

      // If user made mistakes, add to weak words
      if (errors > 0 || !isCorrect) {
        saveWeakWord(currentWordObj.word);
      } else if (isWeakWordsMode) {
        // Mastered this weak word!
        removeWeakWord(currentWordObj.word);
      }
    }
  };

  const nextWord = () => {
    if (selectedWordIndex + 1 < activeWords.length) {
      setSelectedWordIndex(selectedWordIndex + 1);
    } else {
      setSelectedWordIndex(0);
    }
  };

  const prevWord = () => {
    if (selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
    } else {
      setSelectedWordIndex(activeWords.length - 1);
    }
  };

  return (
    <section id="difficult-words" className="mb-14 scroll-mt-20">
      <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50/70 via-indigo-50/40 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-xs font-semibold mb-2">
                <span>📖 Vocabulary & Exam Drills</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Difficult Hindi Words Practice
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
                Tackle complex official words, government exam vocabulary (SSC, High Court, DSSSB), difficult matras, and track your weak words automatically.
              </p>
            </div>

            {/* Weak Words Badge / Switcher */}
            {weakWordsList.length > 0 && (
              <button
                onClick={() => {
                  setIsWeakWordsMode(!isWeakWordsMode);
                  setSelectedWordIndex(0);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all shadow-sm ${
                  isWeakWordsMode
                    ? "bg-rose-600 border-rose-600 text-white shadow-rose-600/30"
                    : "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100"
                }`}
              >
                <span>🎯 Practice Weak Words ({weakWordsList.length})</span>
              </button>
            )}
          </div>

          {/* Category Tabs */}
          {!isWeakWordsMode && (
            <div className="flex gap-2 overflow-x-auto pt-6 scrollbar-none">
              {difficultWordCategories.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategoryIndex(idx);
                    setSelectedWordIndex(0);
                  }}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategoryIndex === idx
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/20 scale-[1.02]"
                      : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Word Selection Ribbon */}
        <div className="p-4 md:px-8 border-b border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {activeWords.map((item, idx) => {
              const isCurr = idx === selectedWordIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedWordIndex(idx)}
                  className={`flex-shrink-0 px-4 py-2 rounded-2xl font-hindi text-base font-bold transition-all border ${
                    isCurr
                      ? "border-purple-500 bg-purple-500 text-white shadow-md shadow-purple-500/25 scale-105"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:border-purple-300"
                  }`}
                >
                  {item.word}
                </button>
              );
            })}
          </div>
        </div>

        {/* Word Workspace */}
        <div className="p-6 md:p-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Word & Keystroke Breakdown */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold">
                <span>{currentWordObj.difficulty} Difficulty</span>
              </div>

              {/* Big Word Display */}
              <div className="text-5xl md:text-6xl font-hindi font-bold text-gray-900 dark:text-white py-2">
                {currentWordObj.word}
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Meaning: <span className="font-semibold text-gray-700 dark:text-gray-300">{currentWordObj.meaning}</span>
              </p>

              {/* Keystroke Sequence Guide */}
              <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-left space-y-2">
                <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                  InScript Keystroke Sequence:
                </div>
                <div className="font-hindi text-sm font-semibold text-purple-700 dark:text-purple-300 break-words leading-relaxed">
                  {currentWordObj.keysSummary}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Word Typing Box */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Interactive Word Typing Drill
                </h3>
                <span className="text-xs text-gray-400">
                  Type each character accurately
                </span>
              </div>

              {/* Target Text Box */}
              <div
                onClick={() => inputRef.current?.focus()}
                className="cursor-text p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 min-h-[90px] font-hindi text-4xl md:text-5xl leading-relaxed flex flex-wrap items-center justify-center gap-1 shadow-inner tracking-wide"
              >
                {targetText.split("").map((char, i) => {
                  let status = "text-gray-400 dark:text-gray-600";
                  if (i < typedText.length) {
                    status = typedText[i] === char
                      ? "text-purple-600 dark:text-purple-400 font-bold"
                      : "text-red-500 bg-red-100 dark:bg-red-950/60 rounded px-1 font-bold";
                  } else if (i === typedText.length) {
                    status = "border-b-4 border-purple-500 text-gray-900 dark:text-white font-bold animate-pulse";
                  }
                  return (
                    <span key={i} className={status}>
                      {char}
                    </span>
                  );
                })}
              </div>

              {/* Input */}
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={typedText}
                  onKeyDown={handleKeyDown}
                  onChange={() => {}}
                  disabled={isFinished}
                  placeholder={typedText.length === 0 ? "Type here using InScript..." : ""}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-hindi text-2xl text-center text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60 shadow-sm"
                  autoFocus
                />
              </div>

              {/* Real-time stats */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-xs">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-gray-400">Errors: </span>
                    <span className="font-bold text-red-500">{errors}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Speed: </span>
                    <span className="font-bold text-gray-900 dark:text-white">{wpm} WPM</span>
                  </div>
                </div>
                <div className="text-gray-400">
                  Status: <span className="font-semibold text-gray-700 dark:text-gray-300">{isFinished ? "✓ Completed" : "In Progress"}</span>
                </div>
              </div>

              {/* Completion Banner */}
              {isFinished && (
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 flex items-center justify-between animate-fade-in">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h4 className="text-sm font-bold text-purple-900 dark:text-purple-200">
                        Word Typed! {errors === 0 ? "Flawless Execution!" : "Added to Weak Words for practice"}
                      </h4>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        Speed: {wpm} WPM | Mistakes: {errors}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={nextWord}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all flex-shrink-0"
                  >
                    Next Word →
                  </button>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-150 dark:border-gray-800">
              <button
                onClick={prevWord}
                className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
              >
                <span>←</span>
                <span>Previous Word</span>
              </button>

              <button
                onClick={resetPractice}
                className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
              >
                <span>🔄</span>
                <span>Practice Again</span>
              </button>

              <button
                onClick={nextWord}
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Next Word</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
