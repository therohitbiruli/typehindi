"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { matraMasteryList, MatraDetail } from "../../data/learn-data";
import { getInscriptCharFromEvent } from "../../utils/inscriptInputHelper";

interface MatraMasteryProps {
  completedMatras: string[];
  onMatraComplete: (matraId: string) => void;
}

type ExerciseMode = "char" | "word" | "fill" | "timed" | "challenge";

export function MatraMastery({
  completedMatras,
  onMatraComplete,
}: MatraMasteryProps) {
  const [selectedMatraIndex, setSelectedMatraIndex] = useState(0);
  const [activeMode, setActiveMode] = useState<ExerciseMode>("word");

  const currentMatra = matraMasteryList[selectedMatraIndex] || matraMasteryList[0];
  const isCurrentCompleted = completedMatras.includes(currentMatra.id);

  // Exercise states
  const [typedText, setTypedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [fillIndex, setFillIndex] = useState(0);
  const [fillScore, setFillScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Determine target text based on active mode
  let targetText = "";
  if (activeMode === "char") {
    targetText = `${currentMatra.char} ${currentMatra.char} ${currentMatra.char} ${currentMatra.char} ${currentMatra.char}`;
  } else if (activeMode === "word" || activeMode === "timed") {
    targetText = currentMatra.words.slice(0, 5).join(" ");
  } else if (activeMode === "challenge") {
    targetText = "किताब कीमत गुलाब सूरज केला कैसा कोयल मौसम गंगा";
  }

  const resetExercise = useCallback(() => {
    setTypedText("");
    setIsFinished(false);
    setFillIndex(0);
    setFillScore(0);
    setTimeLeft(30);
    setIsTimerRunning(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }, []);

  useEffect(() => {
    resetExercise();
  }, [currentMatra.id, activeMode, resetExercise]);

  // Timed mode countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0 && !isFinished) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
    return () => clearTimeout(timer);
  }, [isTimerRunning, timeLeft, isFinished]);

  // Typing event handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFinished) return;

    if (activeMode === "timed" && !isTimerRunning && typedText.length === 0) {
      setIsTimerRunning(true);
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

    if (activeMode === "fill") {
      const currentQ = currentMatra.fillBlanks[fillIndex];
      if (!currentQ) return;

      if (char === currentQ.missingChar) {
        setFillScore(prev => prev + 1);
        if (fillIndex + 1 < currentMatra.fillBlanks.length) {
          setFillIndex(prev => prev + 1);
        } else {
          setIsFinished(true);
          onMatraComplete(currentMatra.id);
        }
      }
      return;
    }

    const nextIndex = typedText.length;
    if (nextIndex >= targetText.length) return;

    const newTyped = typedText + char;
    setTypedText(newTyped);

    if (newTyped.length >= targetText.length) {
      setIsFinished(true);
      setIsTimerRunning(false);
      onMatraComplete(currentMatra.id);
    }
  };

  const exerciseTabs: { id: ExerciseMode; label: string; icon: string }[] = [
    { id: "word", label: "Word Practice", icon: "📖" },
    { id: "char", label: "Character Practice", icon: "⌨️" },
    { id: "fill", label: "Fill the Missing Matra", icon: "🧩" },
    { id: "timed", label: "30s Timed Practice", icon: "⏱️" },
    { id: "challenge", label: "Matra Challenge", icon: "✨" },
  ];

  return (
    <section id="matra-mastery" className="mb-14 scroll-mt-20">
      <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-50/70 via-orange-50/40 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-2">
                <span>🎯 Hindi Diacritics Master</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Matra Mastery (मात्रा अभ्यास)
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
                Master Hindi vowel signs (ा, ि, ी, ु, ू, etc.), learn consonant combination rules in InScript, and practice 5 interactive exercise types.
              </p>
            </div>

            {/* Matra Mastery Progress Indicator */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 self-start md:self-auto text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm">
              <span>Completed:</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white font-bold text-xs">
                {completedMatras.length} / {matraMasteryList.length}
              </span>
            </div>
          </div>

          {/* Matra Selector Grid */}
          <div className="flex gap-2 overflow-x-auto pt-6 pb-2 scrollbar-thin">
            {matraMasteryList.map((m, idx) => {
              const isComp = completedMatras.includes(m.id);
              const isCurr = idx === selectedMatraIndex;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMatraIndex(idx)}
                  className={`relative flex-shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-2xl transition-all border ${
                    isCurr
                      ? "border-amber-500 bg-amber-500 text-white shadow-md shadow-amber-500/30 scale-105"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:border-amber-300 dark:hover:border-amber-700"
                  }`}
                >
                  <span className="font-hindi text-2xl font-bold">{m.char}</span>
                  <span className={`text-[10px] font-mono mt-0.5 ${isCurr ? "text-amber-100" : "text-gray-400"}`}>
                    {m.englishKey}
                  </span>
                  {isComp && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold border-2 border-white dark:border-gray-900">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Matra Details */}
        <div className="p-6 md:p-8 grid gap-8 lg:grid-cols-12 border-b border-gray-150 dark:border-gray-800">
          {/* Left Column: Matra Info & Golden Rule */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 space-y-4 text-center">
              <div className="text-6xl font-hindi font-bold text-gray-900 dark:text-white">
                {currentMatra.char}
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {currentMatra.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Sound: {currentMatra.sound}
                </p>
              </div>

              {/* Physical Key & Finger */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-[10px] font-bold uppercase text-gray-400">Key to Press</div>
                  <kbd className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-900 font-mono text-sm font-bold text-gray-900 dark:text-white mt-1 inline-block">
                    {currentMatra.englishKey}
                  </kbd>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-[10px] font-bold uppercase text-gray-400">Finger</div>
                  <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-1 truncate">
                    {currentMatra.finger}
                  </div>
                </div>
              </div>

              {/* Explanation / Golden Rule */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-left text-xs text-amber-900 dark:text-amber-200">
                <span className="font-bold">💡 InScript Rule: </span>
                {currentMatra.explanation}
              </div>
            </div>
          </div>

          {/* Right Column: Consonant Combination Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Consonant Combinations (व्यंजन संयोजन)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {currentMatra.consonantCombos.map((combo, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-center space-y-1 shadow-sm"
                >
                  <div className="text-xs text-gray-400 font-hindi">
                    {combo.consonant} + {currentMatra.char} =
                  </div>
                  <div className="text-2xl font-hindi font-bold text-gray-900 dark:text-white">
                    {combo.result}
                  </div>
                </div>
              ))}
            </div>

            {/* Example Words Strip */}
            <div className="pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-2">
                Vocabulary Words:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentMatra.words.map(w => (
                  <span
                    key={w}
                    className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 font-hindi text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Interactive Exercise Modes */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Interactive Matra Exercises
            </h3>

            {/* Exercise Mode Pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {exerciseTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMode(tab.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeMode === tab.id
                      ? "bg-amber-500 text-white shadow-sm"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Fill the Missing Matra Mode */}
          {activeMode === "fill" ? (
            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-center space-y-6">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Question {fillIndex + 1} of {currentMatra.fillBlanks.length}
              </div>

              {currentMatra.fillBlanks[fillIndex] && (
                <div className="space-y-3">
                  <div className="text-4xl md:text-5xl font-hindi font-bold text-gray-900 dark:text-white tracking-widest">
                    {currentMatra.fillBlanks[fillIndex].question}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Press the missing matra key (<kbd className="px-2 py-0.5 bg-white dark:bg-gray-800 rounded font-mono font-bold">{currentMatra.englishKey}</kbd>) on your physical keyboard to complete: <span className="font-hindi font-bold text-amber-600">{currentMatra.fillBlanks[fillIndex].fullWord}</span>
                  </p>
                </div>
              )}

              <input
                ref={inputRef}
                type="text"
                value=""
                onKeyDown={handleKeyDown}
                onChange={() => {}}
                className="w-32 mx-auto text-center px-4 py-3 rounded-2xl border-2 border-amber-400 bg-white dark:bg-gray-800 text-2xl font-hindi focus:outline-none"
                placeholder="..."
                autoFocus
              />

              {isFinished && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                  🎉 Excellent! You completed all missing matra questions for {currentMatra.name}!
                </div>
              )}
            </div>
          ) : (
            /* Standard Target Typing for Char, Word, Timed, Challenge */
            <div className="space-y-4">
              {activeMode === "timed" && (
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs font-bold text-amber-900 dark:text-amber-200">
                  <span>⏱️ 30s Speed Sprint: Start typing to begin the clock!</span>
                  <span className="text-base font-mono">{timeLeft}s remaining</span>
                </div>
              )}

              {/* Target Text Box */}
              <div
                onClick={() => inputRef.current?.focus()}
                className="cursor-text p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 min-h-[90px] font-hindi text-2xl md:text-3xl leading-relaxed flex flex-wrap items-center gap-1 shadow-inner"
              >
                {targetText.split("").map((char, i) => {
                  let status = "text-gray-400 dark:text-gray-600";
                  if (i < typedText.length) {
                    status = typedText[i] === char
                      ? "text-amber-600 dark:text-amber-400 font-bold"
                      : "text-red-500 bg-red-100 dark:bg-red-950/60 rounded px-0.5 font-bold";
                  } else if (i === typedText.length) {
                    status = "border-b-4 border-amber-500 text-gray-900 dark:text-white font-bold animate-pulse";
                  }
                  return (
                    <span key={i} className={status}>
                      {char === " " ? " " : char}
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
                  placeholder={typedText.length === 0 ? "Click here and start typing..." : ""}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-hindi text-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-60 shadow-sm"
                  autoFocus
                />
                {typedText.length > 0 && !isFinished && (
                  <button
                    onClick={resetExercise}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {isFinished && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                        Matra Exercise Completed!
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">
                        Great work! You have mastered {currentMatra.name}.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={resetExercise}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex-shrink-0"
                  >
                    Practice Again 🔄
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
