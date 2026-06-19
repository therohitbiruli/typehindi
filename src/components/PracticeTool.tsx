"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
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
import { getInscriptKeysForWord } from "../utils/keyboardMapper";

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

// Helper to extract the word at the current cursor index
function getCurrentWord(targetText: string, cursorIndex: number): string {
  if (!targetText) return "";
  
  let start = cursorIndex;
  while (start > 0 && targetText[start - 1] !== " " && targetText[start - 1] !== "\n") {
    start--;
  }
  
  let end = cursorIndex;
  while (end < targetText.length && targetText[end] !== " " && targetText[end] !== "\n") {
    end++;
  }
  
  const word = targetText.slice(start, end);
  // Remove punctuation/symbols to get the clean word
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()।?"':]/g, "").trim();
}

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

  // Calculate current active word and its keys
  const activeWord = useMemo(() => {
    return getCurrentWord(paragraph.text, typedText.length);
  }, [paragraph.text, typedText.length]);

  const activeWordKeys = useMemo(() => {
    if (!activeWord) return [];
    return getInscriptKeysForWord(activeWord);
  }, [activeWord]);

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-700">
        <div className="flex gap-1">
          {DIFFICULTY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleDifficultyChange(opt.value)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                difficulty === opt.value
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex gap-1">
          {TIMER_OPTIONS.map((opt) => (
            <button
              key={opt.seconds}
              onClick={() => handleTimerChange(opt.seconds)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                timerSeconds === opt.seconds
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="px-4 py-1.5 rounded bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 flex items-center gap-2 text-gray-800 font-bold dark:text-white">
          <span>⏱</span>
          <TimerDisplay formattedTime={formattedTime} isRunning={isRunning} />
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <Stats stats={stats} bestWpm={bestWpm} />
      </div>

      {/* Typing area */}
      <div className="relative group mb-6">
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

      {/* Keystroke Clue Banner (connected to Learn page) */}
      {activeWord && !isFinished && (
        <div className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <span className="text-2xl mt-0.5 sm:mt-0">💡</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-0.5">
                कुंजी संकेत (Keystroke Hint)
              </span>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                शब्द <strong className="font-hindi text-base text-gray-900 dark:text-white">{activeWord}</strong> टाइप करने के लिए दबाएँ:
              </p>
              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                {activeWordKeys.map((stroke, i) => (
                  <div key={i} className="flex items-center">
                    {i > 0 && <span className="text-gray-400 text-xs mx-0.5">→</span>}
                    <kbd className={`px-1.5 py-0.5 text-xs rounded border ${
                      stroke.isShift
                        ? "bg-indigo-50 border-indigo-200 dark:bg-indigo-950/50 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold"
                        : "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold"
                    }`}>
                      {stroke.isShift && "Shift+"}
                      {stroke.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href={`/learn?word=${encodeURIComponent(activeWord)}&layout=inscript`}
              className="text-xs font-bold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1 hover:shadow"
            >
              रेमिंगटन / पूर्ण मार्गदर्शिका ➔
            </Link>
          </div>
        </div>
      )}

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
