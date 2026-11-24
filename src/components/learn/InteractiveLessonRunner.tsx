"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import type { Lesson } from "../../data/lessons";
import type { LanguageConfig } from "../../data/languages";

interface InteractiveLessonRunnerProps {
  languageConfig: LanguageConfig;
  lessons: Lesson[];
}

export const InteractiveLessonRunner = memo(function InteractiveLessonRunner({
  languageConfig,
  lessons,
}: InteractiveLessonRunnerProps) {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([]);
  const [selectedChar, setSelectedChar] = useState<string | null>(null);

  // Typing practice state for active lesson
  const [typedText, setTypedText] = useState("");
  const [isDrillFinished, setIsDrillFinished] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const storageKey = `typehindi_learn_completed_${languageConfig.id}`;

  const currentLesson = lessons[activeLessonIndex] || lessons[0];
  const targetDrill =
    currentLesson.drillText ||
    currentLesson.practiceWords.join(" ") ||
    currentLesson.characters.join(" ");

  // Load completed lessons from localStorage on mount or when language changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCompletedLessonIds(JSON.parse(saved));
      } else {
        setCompletedLessonIds([]);
      }
    } catch (_) {
      setCompletedLessonIds([]);
    }
  }, [storageKey]);

  // Reset drill when active lesson changes
  const resetDrill = useCallback(() => {
    setTypedText("");
    setIsDrillFinished(false);
    setStartTime(null);
    setWpm(0);
    setErrors(0);
    setSelectedChar(null);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }, []);

  useEffect(() => {
    resetDrill();
  }, [activeLessonIndex, resetDrill]);

  // Mark lesson as complete in localStorage
  const markLessonComplete = useCallback(
    (lessonId: number) => {
      setCompletedLessonIds((prev) => {
        if (!prev.includes(lessonId)) {
          const updated = [...prev, lessonId];
          try {
            localStorage.setItem(storageKey, JSON.stringify(updated));
          } catch (_) {}
          return updated;
        }
        return prev;
      });
    },
    [storageKey]
  );

  const resetAllProgress = useCallback(() => {
    if (confirm(`Reset your ${languageConfig.name} lesson progress?`)) {
      try {
        localStorage.removeItem(storageKey);
      } catch (_) {}
      setCompletedLessonIds([]);
      resetDrill();
    }
  }, [storageKey, languageConfig.name, resetDrill]);

  // Handle typing input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDrillFinished) return;
    const value = e.target.value;

    if (!startTime && value.length > 0) {
      setStartTime(Date.now());
    }

    setTypedText(value);

    // Calculate real-time errors
    let errCount = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== targetDrill[i]) {
        errCount++;
      }
    }
    setErrors(errCount);

    // Calculate gross WPM
    if (startTime && value.length > 3) {
      const elapsedMinutes = (Date.now() - startTime) / 60000;
      if (elapsedMinutes > 0.02) {
        const words = value.length / 5;
        setWpm(Math.round(words / elapsedMinutes));
      }
    }

    // Check completion
    if (value.length >= targetDrill.length) {
      setIsDrillFinished(true);
      markLessonComplete(currentLesson.id);
    }
  };

  const progressPercent = Math.round(
    (completedLessonIds.length / Math.max(1, lessons.length)) * 100
  );

  const isCurrentCompleted = completedLessonIds.includes(currentLesson.id);

  return (
    <section className="mb-14 scroll-mt-24">
      {/* Module Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <span>📚 Step-by-Step Curriculum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <span>🎯</span> {languageConfig.name} Interactive Typing Lessons
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Follow the systematic progression below. Read character rules, practise keys with live feedback, and track completion.
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div className="bg-white dark:bg-slate-900 border border-[#CBD5E1] dark:border-slate-800 rounded-2xl p-4 shadow-sm min-w-[240px]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-gray-700 dark:text-slate-200">
              {languageConfig.name} Progress
            </span>
            <span className="font-extrabold text-primary-600 dark:text-primary-400">
              {completedLessonIds.length} / {lessons.length} ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden mb-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={resetAllProgress}
              className="text-[10px] text-gray-400 hover:text-red-500 transition-colors"
            >
              Reset progress
            </button>
          </div>
        </div>
      </div>

      {/* Lesson Selector Stepper */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {lessons.map((lesson, idx) => {
          const isActive = idx === activeLessonIndex;
          const isDone = completedLessonIds.includes(lesson.id);

          return (
            <button
              key={lesson.id}
              onClick={() => setActiveLessonIndex(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                isActive
                  ? "bg-primary-600 text-white border-primary-600 shadow-sm shadow-primary-500/25"
                  : isDone
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                    : "bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 border-[#CBD5E1] dark:border-slate-800 hover:border-primary-400"
              }`}
            >
              <span>{isDone ? "✓" : `${lesson.id}.`}</span>
              <span>{lesson.title.split("(")[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Active Lesson Display & Interactive Drill */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-[#CBD5E1] dark:border-slate-800 shadow-md p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-100 dark:border-slate-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-500">
              Lesson {currentLesson.id} of {lessons.length}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">
              {currentLesson.title}
            </h3>
          </div>
          {isCurrentCompleted && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold self-start sm:self-auto">
              <span>✓</span> Completed
            </span>
          )}
        </div>

        {/* Explanation */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {currentLesson.description}
        </p>

        {/* Characters Grid (if present) */}
        {currentLesson.characters.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-gray-400 mb-3">
              Characters in this lesson (click any letter to inspect):
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentLesson.characters.map((char, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedChar(char === selectedChar ? null : char)}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 text-base font-bold transition-all ${
                    selectedChar === char
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-300 scale-105"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 hover:border-primary-300"
                  }`}
                >
                  {char}
                </button>
              ))}
            </div>
            {selectedChar && (
              <div className="mt-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-primary-200 dark:border-primary-900/50 flex items-center gap-3">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {selectedChar}
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Focus on smooth finger movement for <strong>{selectedChar}</strong>. Maintain correct home-row posture without tensing your wrists.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Example Practice Words */}
        {currentLesson.practiceWords.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-gray-400 mb-2">
              Practice Words & Patterns:
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentLesson.practiceWords.map((word, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-gray-800 dark:text-gray-200 border border-slate-200 dark:border-slate-700/60"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Typing Drill Card */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border-2 border-primary-200 dark:border-slate-800">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 flex items-center gap-1.5">
              <span>⌨️</span> Live Interactive Typing Drill
            </span>
            <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span>Speed: <strong className="text-primary-600 dark:text-primary-400 font-bold">{wpm} WPM</strong></span>
              <span>Errors: <strong className={errors > 0 ? "text-red-500 font-bold" : "text-emerald-500 font-bold"}>{errors}</strong></span>
            </div>
          </div>

          {/* Target Text with Character-by-Character Color Feedback */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-[#CBD5E1] dark:border-slate-800 font-mono text-base sm:text-lg leading-relaxed tracking-wide select-none mb-4 min-h-[70px]">
            {targetDrill.split("").map((targetChar, idx) => {
              const typedChar = typedText[idx];
              let charClass = "text-gray-400 dark:text-slate-600"; // not reached yet

              if (idx < typedText.length) {
                if (typedChar === targetChar) {
                  charClass = "text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 rounded";
                } else {
                  charClass = "text-red-600 dark:text-red-400 font-bold bg-red-100 dark:bg-red-950/60 rounded underline";
                }
              } else if (idx === typedText.length) {
                // Active cursor position
                charClass = "text-primary-600 dark:text-primary-400 font-bold bg-primary-100 dark:bg-primary-950 border-b-2 border-primary-500 animate-pulse";
              }

              return (
                <span key={idx} className={charClass}>
                  {targetChar === " " ? "␣" : targetChar}
                </span>
              );
            })}
          </div>

          {/* Typing Input */}
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={typedText}
              onChange={handleInputChange}
              disabled={isDrillFinished}
              placeholder={isDrillFinished ? "Lesson completed! Click Next Lesson below." : "Start typing the drill text above..."}
              className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base font-mono transition-all bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                isDrillFinished
                  ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20"
                  : errors > 0
                    ? "border-red-400 focus:ring-red-400"
                    : "border-[#CBD5E1] dark:border-slate-700 focus:ring-primary-500"
              }`}
            />
          </div>

          {/* Drill Status Bar / Completion Controls */}
          {isDrillFinished ? (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎉</span>
                <div>
                  <h5 className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                    Lesson {currentLesson.id} Mastered!
                  </h5>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    Score: {wpm} WPM with {errors} error{errors === 1 ? "" : "s"}. Lesson saved to your progress.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={resetDrill}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100"
                >
                  Retry Drill ↺
                </button>
                {activeLessonIndex < lessons.length - 1 && (
                  <button
                    onClick={() => setActiveLessonIndex((prev) => prev + 1)}
                    className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                  >
                    Next Lesson →
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-3 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
              <span>Type matching characters directly. Use standard keyboard input or your system IME.</span>
              <button
                onClick={resetDrill}
                className="hover:text-primary-500 underline"
              >
                Clear input
              </button>
            </div>
          )}
        </div>

        {/* Stepper Navigation Footers */}
        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={() => setActiveLessonIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeLessonIndex === 0}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-[#CBD5E1] dark:border-slate-800 text-gray-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            ← Previous Lesson
          </button>

          <span className="text-xs text-gray-400 dark:text-gray-500 hidden sm:inline">
            Lesson {activeLessonIndex + 1} of {lessons.length}
          </span>

          <button
            onClick={() => setActiveLessonIndex((prev) => Math.min(lessons.length - 1, prev + 1))}
            disabled={activeLessonIndex === lessons.length - 1}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          >
            Next Lesson →
          </button>
        </div>
      </div>
    </section>
  );
});
