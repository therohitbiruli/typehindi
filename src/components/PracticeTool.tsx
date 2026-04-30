"use client";

import { useState, useCallback, useMemo } from "react";
import { TypingBox } from "./TypingBox";
import { Stats } from "./Stats";
import { TimerDisplay } from "./Timer";
import { Keyboard } from "./Keyboard";
import { useTypingEngine } from "../hooks/useTypingEngine";
import { useTimer } from "../hooks/useTimer";
import { useKeyPress } from "../hooks/useKeyPress";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getRandomParagraph, getParagraphsByDifficulty } from "../data/paragraphs";
import type { Paragraph } from "../data/paragraphs";

const TIMER_OPTIONS = [
  { label: "1 मिनट", seconds: 60 },
  { label: "5 मिनट", seconds: 300 },
  { label: "10 मिनट", seconds: 600 },
];

const DIFFICULTY_OPTIONS: Array<{ label: string; value: "easy" | "medium" | "hard" }> = [
  { label: "सरल (Easy)", value: "easy" },
  { label: "मध्यम (Medium)", value: "medium" },
  { label: "कठिन (Hard)", value: "hard" },
];

export function PracticeTool({ showSEO = false }: { showSEO?: boolean }) {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [paragraph, setParagraph] = useState<Paragraph>(() => getParagraphsByDifficulty(difficulty)[0]);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [bestWpm, setBestWpm] = useLocalStorage<number>("bestWpm", 0);

  const { typedText, isStarted, isFinished, stats, handleInput, reset, forceFinish } =
    useTypingEngine(paragraph.text);

  const { formattedTime, isRunning, start: startTimer, reset: resetTimer } = useTimer(
    timerSeconds,
    forceFinish
  );

  const { activeKey, isShift } = useKeyPress();

  const handleFinish = useCallback(() => {
    if (stats.wpm > bestWpm) {
      setBestWpm(stats.wpm);
    }
  }, [stats.wpm, bestWpm, setBestWpm]);

  useMemo(() => {
    if (isFinished && stats.wpm > 0) {
      handleFinish();
    }
  }, [isFinished, stats.wpm, handleFinish]);

  const handleTypingInput = useCallback(
    (text: string) => {
      if (!isRunning && text.length === 1) {
        startTimer();
      }
      handleInput(text);
    },
    [isRunning, startTimer, handleInput]
  );

  const changeParagraph = useCallback(() => {
    const newP = getRandomParagraph(difficulty);
    setParagraph(newP);
    reset();
    resetTimer(timerSeconds);
  }, [difficulty, reset, resetTimer, timerSeconds]);

  const handleReset = useCallback(() => {
    reset();
    resetTimer(timerSeconds);
  }, [reset, resetTimer, timerSeconds]);

  const handleDifficultyChange = useCallback(
    (d: "easy" | "medium" | "hard") => {
      setDifficulty(d);
      const newP = getRandomParagraph(d);
      setParagraph(newP);
      reset();
      resetTimer(timerSeconds);
    },
    [reset, resetTimer, timerSeconds]
  );

  const handleTimerChange = useCallback(
    (seconds: number) => {
      setTimerSeconds(seconds);
      resetTimer(seconds);
      reset();
    },
    [resetTimer, reset]
  );

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
        <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
          {DIFFICULTY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleDifficultyChange(opt.value)}
              className={`px-4 py-2 text-sm font-bold transition-all ${
                difficulty === opt.value
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
          {TIMER_OPTIONS.map((opt) => (
            <button
              key={opt.seconds}
              onClick={() => handleTimerChange(opt.seconds)}
              className={`px-4 py-2 text-sm font-bold transition-all ${
                timerSeconds === opt.seconds
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-2">
          <span className="text-gray-400">⏱</span>
          <TimerDisplay formattedTime={formattedTime} isRunning={isRunning} />
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <Stats stats={stats} bestWpm={bestWpm} />
      </div>

      {/* Typing area */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <TypingBox
            targetText={paragraph.text}
            typedText={typedText}
            onInput={handleTypingInput}
            isFinished={isFinished}
            isStarted={isStarted}
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={handleReset} className="btn-secondary rounded-xl px-6 py-2.5">
          ↻ रीसेट
        </button>
        <button onClick={changeParagraph} className="btn-secondary rounded-xl px-6 py-2.5">
          ⟳ अनुच्छेद बदलें
        </button>
        <button
          onClick={() => setShowKeyboard(!showKeyboard)}
          className={`btn-secondary rounded-xl px-6 py-2.5 ${showKeyboard ? "!bg-primary-50 !text-primary-700 dark:!bg-primary-900/30 dark:!text-primary-300" : ""}`}
        >
          ⌨ कीबोर्ड {showKeyboard ? "छुपाएँ" : "दिखाएँ"}
        </button>
      </div>

      {/* Keyboard Guide */}
      <div className="mt-8">
        <Keyboard activeKey={activeKey} isShift={isShift} visible={showKeyboard} />
      </div>

      {/* Paragraph info */}
      <div className="mt-6 text-center text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
        कठिनाई: {paragraph.difficulty} | विषय: {paragraph.category} | शब्द: {paragraph.wordCount}
      </div>
    </div>
  );
}
