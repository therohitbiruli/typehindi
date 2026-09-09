"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import { TypingBox } from "./TypingBox";
import { Stats } from "./Stats";
import { TimerDisplay } from "./Timer";
import { Keyboard } from "./Keyboard";
import { useTypingEngine } from "../hooks/useTypingEngine";
import { useTimer } from "../hooks/useTimer";
import { useKeyPress } from "../hooks/useKeyPress";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getRandomParagraph } from "../data/paragraphs";
import type { Paragraph } from "../data/paragraphs";
import {
  LanguageId,
  LANGUAGES_CONFIG,
  ALL_LANGUAGES,
  getRandomPassage,
} from "../data/languages";

const TEST_DURATIONS = [
  { label: "1 Min", seconds: 60 },
  { label: "5 Min", seconds: 300 },
  { label: "10 Min", seconds: 600 },
];

export function TypingTestTool({
  initialLanguageId = "hindi",
  showLanguageSwitcher = true,
}: {
  initialLanguageId?: LanguageId;
  showLanguageSwitcher?: boolean;
}) {
  const [activeLang, setActiveLang] = useState<LanguageId>(initialLanguageId);
  const langConfig = LANGUAGES_CONFIG[activeLang] || LANGUAGES_CONFIG.hindi;

  const [testDuration, setTestDuration] = useState(600); // Default to official 10-min format
  const [paragraph, setParagraph] = useState<Paragraph>(() => {
    if (activeLang === "hindi") {
      return getRandomParagraph("medium", "hindi");
    }
    return getRandomPassage(activeLang, "medium");
  });

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Language-specific best test score storage
  const storageKey =
    activeLang === "hindi" ? "bestTestWpm" : `typehindi_best_test_wpm_${activeLang}`;
  const [bestTestWpm, setBestTestWpm] = useLocalStorage<number>(storageKey, 0);

  const { typedText, isStarted, isFinished, stats, handleInput, reset, forceFinish } =
    useTypingEngine(paragraph.text);

  const forceFinishRef = { current: forceFinish };

  const { formattedTime, isRunning, start: startTimer, reset: resetTimer } = useTimer(
    testDuration,
    () => {
      forceFinishRef.current?.();
      setShowResults(true);
    }
  );

  const { activeKey, isShift } = useKeyPress();

  // Sync when initialLanguageId changes
  useEffect(() => {
    setActiveLang(initialLanguageId);
    if (initialLanguageId === "hindi") {
      setParagraph(getRandomParagraph("medium", "hindi"));
    } else {
      setParagraph(getRandomPassage(initialLanguageId, "medium"));
    }
    reset();
    resetTimer(testDuration);
    setShowResults(false);
  }, [initialLanguageId]);

  // Save best WPM
  useMemo(() => {
    if ((isFinished || showResults) && stats.wpm > bestTestWpm) {
      setBestTestWpm(stats.wpm);
    }
  }, [isFinished, showResults, stats.wpm, bestTestWpm, setBestTestWpm]);

  const handleTypingInput = useCallback(
    (text: string) => {
      if (!isRunning && text.length === 1) {
        startTimer();
      }
      handleInput(text);
    },
    [isRunning, startTimer, handleInput]
  );

  const startNewTest = useCallback(() => {
    if (activeLang === "hindi") {
      setParagraph(getRandomParagraph("medium", "hindi"));
    } else {
      setParagraph(getRandomPassage(activeLang, "medium"));
    }
    reset();
    resetTimer(testDuration);
    setShowResults(false);
  }, [reset, resetTimer, testDuration, activeLang]);

  const handleDurationChange = useCallback(
    (seconds: number) => {
      setTestDuration(seconds);
      resetTimer(seconds);
      reset();
      setShowResults(false);
    },
    [resetTimer, reset]
  );

  return (
    <div className="w-full">
      {/* 🌐 Language Switcher Bar */}
      {showLanguageSwitcher && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌐</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Select Test Language:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {ALL_LANGUAGES.map((lang) => {
              const isActive = lang.id === activeLang;
              return (
                <Link
                  key={lang.id}
                  href={`/test/${lang.slug}`}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary-600 text-white shadow-sm"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <span className="text-[11px] opacity-80">{lang.symbol}</span>
                  <span>{lang.name}</span>
                  <span className="text-[10px] font-normal opacity-70">({lang.nativeName})</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Settings Grid with Timer & Duration */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 p-4 rounded-2xl shadow-sm">
        {/* Language & Layout Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center font-bold text-lg">
            {langConfig.symbol}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                {langConfig.name} ({langConfig.nativeName})
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold">
                {langConfig.layoutName}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Live timed test simulator with accurate Net WPM and error tracking
            </p>
          </div>
        </div>

        {/* Duration Selector */}
        <div className="flex items-center justify-end gap-3">
          <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-1">
            {TEST_DURATIONS.map((opt) => (
              <button
                key={opt.seconds}
                onClick={() => handleDurationChange(opt.seconds)}
                disabled={isStarted && !showResults}
                className={`py-1.5 px-3 text-xs font-bold transition-all rounded-lg ${
                  testDuration === opt.seconds
                    ? "bg-white dark:bg-slate-950 text-primary-600 dark:text-primary-400 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="flex items-center pl-2">
            <TimerDisplay formattedTime={formattedTime} isRunning={isRunning} />
          </div>
        </div>
      </div>

      {/* Exam Standards Callout */}
      {langConfig.exams.length > 0 && (
        <div className="mb-6 p-4 bg-primary-500/5 dark:bg-slate-900/50 border border-primary-500/20 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-primary-600 dark:text-primary-400 tracking-wider">
              Official Benchmark Target
            </span>
            <h4 className="font-bold text-sm text-gray-900 dark:text-white mt-0.5">
              {langConfig.exams[0].examName}: {langConfig.exams[0].targetWpm} WPM ({langConfig.exams[0].durationMinutes} Minutes)
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
              {langConfig.exams[0].notes}
            </p>
          </div>
          <span className="text-xs font-semibold text-primary-500 whitespace-nowrap">
            Max Error: {langConfig.exams[0].maxErrorPercent}%
          </span>
        </div>
      )}

      {/* Results Box */}
      {showResults && (
        <div className="mb-6 rounded-2xl border-2 border-primary-300 dark:border-primary-800 bg-primary-50/70 dark:bg-primary-950/30 p-6 sm:p-8 animate-fade-in shadow-md">
          <h2 className="heading-2 mb-6 text-center">📊 Test Results Summary</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-6">
            <div className="text-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Speed (Gross WPM)</p>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 mt-1">{stats.wpm}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Accuracy</p>
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{stats.accuracy}%</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Total Errors</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-1">{stats.totalErrors}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Best Record</p>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mt-1">{bestTestWpm} WPM</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={startNewTest} className="btn-primary px-8 py-2.5 rounded-xl text-sm font-bold shadow-md">
              Start Another Test ↺
            </button>
            <Link
              href={`/practice/${langConfig.slug}`}
              className="btn-secondary px-6 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700"
            >
              Practice Untimed Passages →
            </Link>
          </div>
        </div>
      )}

      {/* Stats Display */}
      <div className="mb-4">
        <Stats stats={stats} bestWpm={bestTestWpm} />
      </div>

      {/* Typing area */}
      <div className="relative group mb-6">
        <TypingBox
          targetText={paragraph.text}
          typedText={typedText}
          onInput={handleTypingInput}
          isFinished={isFinished || showResults}
          isStarted={isStarted}
          autoFocus={true}
        />
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={startNewTest}
          className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm"
        >
          ↻ Reset Test
        </button>
        <button
          onClick={() => setShowKeyboard(!showKeyboard)}
          className={`btn-secondary rounded-xl px-6 py-2.5 border shadow-sm ${
            showKeyboard
              ? "!bg-primary-50 !text-primary-700 dark:!bg-primary-900/30 dark:!text-primary-300 border-primary-300"
              : "border-gray-300 dark:border-gray-700"
          }`}
        >
          ⌨ {showKeyboard ? "Hide" : "Show"} Keyboard
        </button>
      </div>

      {/* Guided Virtual Keyboard */}
      <div className="mt-8">
        <Keyboard
          activeKey={activeKey}
          isShift={isShift}
          visible={showKeyboard}
          language={activeLang}
        />
      </div>
    </div>
  );
}
