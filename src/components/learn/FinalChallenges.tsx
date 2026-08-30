"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { finalChallengesList, FinalChallengeItem } from "../../data/learn-data";
import { getInscriptCharFromEvent } from "../../utils/inscriptInputHelper";

interface FinalChallengesProps {
  completedChallenges: string[];
  onChallengeComplete: (challengeId: string) => void;
}

export function FinalChallenges({
  completedChallenges,
  onChallengeComplete,
}: FinalChallengesProps) {
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [errors, setErrors] = useState(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const currentChallenge = finalChallengesList[selectedChallengeIndex] || finalChallengesList[0];
  const targetText = currentChallenge.testText;
  const isCurrentCompleted = completedChallenges.includes(currentChallenge.id);

  // Reset challenge
  const resetChallenge = useCallback(() => {
    setTypedText("");
    setIsStarted(false);
    setIsFinished(false);
    setTimeLeft(currentChallenge.durationSeconds);
    setStartTime(null);
    setErrors(0);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }, [currentChallenge.durationSeconds]);

  useEffect(() => {
    resetChallenge();
  }, [currentChallenge.id, resetChallenge]);

  // Countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isStarted && !isFinished && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isStarted, isFinished, timeLeft]);

  // Live WPM calculation
  const elapsedMinutes = startTime ? (Date.now() - startTime) / 60000 : 0;
  const correctChars = Math.max(0, typedText.length - errors);
  const liveWpm = elapsedMinutes > 0 ? Math.round((correctChars / 5) / elapsedMinutes) : 0;
  const liveAccuracy = typedText.length > 0 ? Math.max(0, Math.round((correctChars / typedText.length) * 100)) : 100;

  // Handle typing input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isFinished) return;

    if (!isStarted) {
      setIsStarted(true);
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
      const passed = liveWpm >= currentChallenge.targetWpm && liveAccuracy >= currentChallenge.targetAccuracy;
      if (passed || liveAccuracy >= 85) {
        onChallengeComplete(currentChallenge.id);
      }
    }
  };

  // Determine star rating
  let stars = 1;
  if (liveAccuracy >= currentChallenge.targetAccuracy && liveWpm >= currentChallenge.targetWpm) {
    stars = 3;
  } else if (liveAccuracy >= 85) {
    stars = 2;
  }

  return (
    <section id="final-challenges" className="mb-14 scroll-mt-20">
      <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-50/70 via-amber-50/40 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-2">
                <span>🏆 Master Evaluation</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Final Hindi Typing Challenges
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
                Test your skills under realistic exam conditions. Choose from 1-Minute Sprints, 3-Minute Exam Simulations, Strict Accuracy Drills, or the Grand Mixed Master Challenge.
              </p>
            </div>

            {/* Completed Badge */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 self-start md:self-auto text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm">
              <span>Completed:</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white font-bold text-xs">
                {completedChallenges.length} / {finalChallengesList.length}
              </span>
            </div>
          </div>

          {/* Challenge Selector Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
            {finalChallengesList.map((ch, idx) => {
              const isComp = completedChallenges.includes(ch.id);
              const isCurr = idx === selectedChallengeIndex;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChallengeIndex(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all border relative flex flex-col justify-between h-28 ${
                    isCurr
                      ? "border-amber-500 bg-amber-500 text-white shadow-md shadow-amber-500/25 scale-105"
                      : isComp
                      ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/30 text-gray-900 dark:text-white"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:border-amber-300"
                  }`}
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                      {ch.durationSeconds}s
                    </div>
                    <div className="text-xs font-bold line-clamp-2 mt-1">
                      {ch.title}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] opacity-90 mt-2">
                    <span>{ch.targetWpm} WPM</span>
                    {isComp && <span className="font-bold text-emerald-500">✓ Done</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Challenge Arena */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Challenge Meta Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>{currentChallenge.badge}</span>
                {isCurrentCompleted && <span className="text-emerald-500">✓ Cleared</span>}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                {currentChallenge.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {currentChallenge.description}
              </p>
            </div>

            {/* Timer & Target Stats */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center min-w-[70px]">
                <div className={`text-2xl font-mono font-bold ${timeLeft <= 10 && isStarted ? "text-red-500 animate-ping" : "text-gray-900 dark:text-white"}`}>
                  {timeLeft}s
                </div>
                <div className="text-[9px] uppercase font-bold text-gray-400">Time Left</div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center min-w-[70px]">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {liveWpm}
                </div>
                <div className="text-[9px] uppercase font-bold text-gray-400">Speed (WPM)</div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center min-w-[70px]">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {liveAccuracy}%
                </div>
                <div className="text-[9px] uppercase font-bold text-gray-400">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Target Text Box */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="cursor-text p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 min-h-[140px] font-hindi text-xl md:text-2xl leading-loose flex flex-wrap items-center gap-1 shadow-inner select-none"
          >
            {targetText.split("").map((char, i) => {
              let status = "text-gray-400 dark:text-gray-600";
              if (i < typedText.length) {
                status = typedText[i] === char
                  ? "text-emerald-600 dark:text-emerald-400 font-bold"
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

          {/* Typing Input */}
          <div className="relative">
            <textarea
              ref={inputRef}
              rows={3}
              value={typedText}
              onKeyDown={handleKeyDown}
              onChange={() => {}}
              disabled={isFinished}
              placeholder={isStarted ? "" : "Click here and start typing to begin the challenge..."}
              className="w-full resize-none p-5 rounded-3xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-hindi text-xl leading-relaxed text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-60 shadow-sm"
              autoFocus
            />
          </div>

          {/* Completion Modal / Card */}
          {isFinished && (
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 to-yellow-100/50 dark:from-gray-900 dark:to-amber-955/20 border-2 border-amber-300 dark:border-amber-700 space-y-6 animate-fade-in text-center">
              <div className="space-y-2">
                <div className="text-3xl">
                  {stars === 3 ? "⭐⭐⭐" : stars === 2 ? "⭐⭐" : "⭐"}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Challenge Completed!
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  {liveWpm >= currentChallenge.targetWpm && liveAccuracy >= currentChallenge.targetAccuracy
                    ? "Outstanding performance! You exceeded both speed and accuracy requirements."
                    : "Challenge finished! Review your statistics below and retry to achieve 3 stars."}
                </p>
              </div>

              {/* Final Score Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{liveWpm}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Final WPM</div>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{liveAccuracy}%</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Accuracy</div>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-red-500">{errors}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Mistakes</div>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{correctChars}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Characters</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={resetChallenge}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100"
                >
                  🔄 Try Again
                </button>
                <button
                  onClick={() => {
                    if (selectedChallengeIndex + 1 < finalChallengesList.length) {
                      setSelectedChallengeIndex(selectedChallengeIndex + 1);
                    } else {
                      setSelectedChallengeIndex(0);
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md"
                >
                  Next Challenge →
                </button>
              </div>
            </div>
          )}

          {/* Footer Controls */}
          {!isFinished && (
            <div className="flex items-center justify-between pt-4 border-t border-gray-150 dark:border-gray-800">
              <button
                onClick={resetChallenge}
                className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
              >
                <span>🔄</span>
                <span>Restart Challenge</span>
              </button>

              <button
                onClick={() => {
                  if (selectedChallengeIndex + 1 < finalChallengesList.length) {
                    setSelectedChallengeIndex(selectedChallengeIndex + 1);
                  } else {
                    setSelectedChallengeIndex(0);
                  }
                }}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Skip to Next</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
