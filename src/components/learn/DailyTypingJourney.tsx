"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { dailyJourneyDays, DailyJourneyDay } from "../../data/learn-data";
import { getInscriptCharFromEvent } from "../../utils/inscriptInputHelper";

interface DailyTypingJourneyProps {
  completedDays: number[];
  onDayComplete: (dayNumber: number) => void;
}

export function DailyTypingJourney({
  completedDays,
  onDayComplete,
}: DailyTypingJourneyProps) {
  const [selectedDayNumber, setSelectedDayNumber] = useState(1);
  const [typedText, setTypedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const currentDay = dailyJourneyDays.find(d => d.day === selectedDayNumber) || dailyJourneyDays[0];
  const isCurrentDayCompleted = completedDays.includes(currentDay.day);

  const targetText = currentDay.miniChallengeText;

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
  }, [currentDay.day, resetPractice]);

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
      const elapsedMinutes = startTime ? (Date.now() - startTime) / 60000 : 0.08;
      const speed = Math.round((targetText.length / 5) / (elapsedMinutes || 0.08));
      setWpm(Math.max(10, speed));
      onDayComplete(currentDay.day);
    }
  };

  const currentAccuracy = typedText.length > 0
    ? Math.max(0, Math.round(((typedText.length - errors) / typedText.length) * 100))
    : 100;

  return (
    <section id="daily-journey" className="mb-14 scroll-mt-20">
      <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-50/70 via-blue-50/40 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-semibold mb-2">
                <span>🗓️ 14-Stage Learning Path</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Daily Hindi Typing Journey
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
                A structured 14-stage progression from basic home row to 35+ WPM exam mastery. Progress at your own pace — complete each stage as you feel confident.
              </p>
            </div>

            {/* Progress Badge */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 self-start md:self-auto text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm">
              <span>Journey Status:</span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white font-bold text-xs">
                {completedDays.length} / 14 Completed
              </span>
            </div>
          </div>

          {/* 14-Day Timeline Bar */}
          <div className="flex gap-2 overflow-x-auto pt-6 pb-2 scrollbar-thin">
            {dailyJourneyDays.map((d) => {
              const isComp = completedDays.includes(d.day);
              const isCurr = d.day === selectedDayNumber;
              return (
                <button
                  key={d.day}
                  onClick={() => setSelectedDayNumber(d.day)}
                  className={`relative flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all border ${
                    isCurr
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105"
                      : isComp
                      ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 hover:border-emerald-400"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-indigo-300"
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                    Day
                  </span>
                  <span className="text-lg font-bold">
                    {d.day}
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

        {/* Active Day Workspace */}
        <div className="p-6 md:p-8 space-y-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Column: Objectives & Characters */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Stage {currentDay.day} of 14
                  </span>
                  {isCurrentDayCompleted && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                      ✓ Completed
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentDay.title}
                </h3>
                <div className="font-hindi text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {currentDay.subtitle}
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {currentDay.objective}
                </p>

                {/* Characters To Learn */}
                <div className="pt-2">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-2">
                    Characters to Practice:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentDay.charactersToLearn.map((char, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-hindi text-base font-bold text-gray-900 dark:text-white shadow-sm"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practice Words */}
                <div className="pt-2">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-2">
                    Sample Words:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentDay.practiceWords.map((word, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-xl bg-gray-100 dark:bg-gray-800 font-hindi text-xs font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 text-xs text-indigo-900 dark:text-indigo-200">
                  <span className="font-bold">💡 Tip: </span>
                  {currentDay.tips}
                </div>
              </div>
            </div>

            {/* Right Column: Mini Challenge */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Stage {currentDay.day} Completion Challenge
                  </h4>
                  <div className="text-xs text-gray-500 flex gap-3">
                    <span>Target Speed: <strong className="text-gray-800 dark:text-gray-200">{currentDay.targetWpm} WPM</strong></span>
                    <span>Target Acc: <strong className="text-gray-800 dark:text-gray-200">{currentDay.targetAccuracy}%</strong></span>
                  </div>
                </div>

                {/* Target Box */}
                <div
                  onClick={() => inputRef.current?.focus()}
                  className="cursor-text p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 min-h-[110px] font-hindi text-2xl md:text-3xl leading-relaxed flex flex-wrap items-center gap-1 shadow-inner"
                >
                  {targetText.split("").map((char, i) => {
                    let status = "text-gray-400 dark:text-gray-600";
                    if (i < typedText.length) {
                      status = typedText[i] === char
                        ? "text-emerald-600 dark:text-emerald-400 font-bold"
                        : "text-red-500 bg-red-100 dark:bg-red-950/60 rounded px-0.5 font-bold";
                    } else if (i === typedText.length) {
                      status = "border-b-4 border-indigo-500 text-gray-900 dark:text-white font-bold animate-pulse";
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
                    placeholder={typedText.length === 0 ? "Start typing to begin challenge..." : ""}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-hindi text-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 shadow-sm"
                    autoFocus
                  />
                  {typedText.length > 0 && !isFinished && (
                    <button
                      onClick={resetPractice}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 px-2 py-1"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Real-time stats */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-xs">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-gray-400">Accuracy: </span>
                      <span className="font-bold text-gray-900 dark:text-white">{currentAccuracy}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Speed: </span>
                      <span className="font-bold text-gray-900 dark:text-white">{wpm} WPM</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Errors: </span>
                      <span className="font-bold text-red-500">{errors}</span>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    Progress: <span className="font-bold text-indigo-600 dark:text-indigo-400">{Math.round((typedText.length / targetText.length) * 100)}%</span>
                  </div>
                </div>

                {/* Completion Banner */}
                {isFinished && (
                  <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between animate-fade-in">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🎉</span>
                      <div>
                        <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                          Stage {currentDay.day} Complete!
                        </h4>
                        <p className="text-xs text-emerald-700 dark:text-emerald-300">
                          Speed: {wpm} WPM | Accuracy: {currentAccuracy}% | Saved in your progress.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (selectedDayNumber < 14) {
                          setSelectedDayNumber(selectedDayNumber + 1);
                        }
                      }}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex-shrink-0"
                    >
                      Next Stage →
                    </button>
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-150 dark:border-gray-800">
                <button
                  onClick={() => {
                    if (selectedDayNumber > 1) {
                      setSelectedDayNumber(selectedDayNumber - 1);
                    }
                  }}
                  disabled={selectedDayNumber === 1}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 transition-all flex items-center gap-1.5"
                >
                  <span>←</span>
                  <span>Previous Stage</span>
                </button>

                <button
                  onClick={resetPractice}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
                >
                  <span>🔄</span>
                  <span>Practice Again</span>
                </button>

                <button
                  onClick={() => {
                    if (selectedDayNumber < 14) {
                      setSelectedDayNumber(selectedDayNumber + 1);
                    }
                  }}
                  disabled={selectedDayNumber === 14}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Next Stage</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
