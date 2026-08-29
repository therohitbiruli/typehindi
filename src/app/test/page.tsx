"use client";

import { useState, useCallback, useMemo } from "react";
import { TypingBox } from "../../components/TypingBox";
import { Stats } from "../../components/Stats";
import { TimerDisplay } from "../../components/Timer";
import { Keyboard } from "../../components/Keyboard";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { useTypingEngine } from "../../hooks/useTypingEngine";
import { useTimer } from "../../hooks/useTimer";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getRandomParagraph, getParagraphsByDifficulty } from "../../data/paragraphs";
import type { Paragraph } from "../../data/paragraphs";

const TEST_DURATIONS = [
  { label: "1 Minute", seconds: 60 },
  { label: "5 Minutes", seconds: 300 },
  { label: "10 Minutes", seconds: 600 },
];

export default function TestPage() {
  const [testDuration, setTestDuration] = useState(60);
  const [paragraph, setParagraph] = useState<Paragraph>(() => getParagraphsByDifficulty("medium")[0]);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [bestTestWpm, setBestTestWpm] = useLocalStorage<number>("bestTestWpm", 0);

  const { typedText, isStarted, isFinished, stats, handleInput, reset, forceFinish } =
    useTypingEngine(paragraph.text);

  // Store forceFinish in a ref so the timer callback can access it
  const forceFinishRef = { current: forceFinish };

  const { formattedTime, isRunning, start: startTimer, reset: resetTimer } = useTimer(
    testDuration,
    () => {
      forceFinishRef.current?.();
      setShowResults(true);
    }
  );

  const { activeKey, isShift } = useKeyPress();

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
    setParagraph(getRandomParagraph("medium"));
    reset();
    resetTimer(testDuration);
    setShowResults(false);
  }, [reset, resetTimer, testDuration]);

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
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Test" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-2">Hindi Typing Test</h1>
      <p className="text-muted mb-6">
        Take a timed typing test to evaluate your WPM speed, accuracy, and error counts.
      </p>

      {/* Results Modal */}
      {showResults && (
        <div className="mb-6 rounded-lg border-2 border-primary-200 bg-primary-50 p-6 dark:border-primary-800 dark:bg-primary-900/20">
          <h2 className="heading-2 mb-4 text-center">📊 Test Results</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Speed (WPM)</p>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stats.wpm}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Accuracy</p>
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{stats.accuracy}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Errors</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">{stats.totalErrors}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Best WPM</p>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{bestTestWpm}</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button onClick={startNewTest} className="btn-primary px-8">
              New Test
            </button>
          </div>
        </div>
      )}

      {/* Duration selector */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex rounded-lg border border-gray-200 dark:border-gray-700">
          {TEST_DURATIONS.map((opt) => (
            <button
              key={opt.seconds}
              onClick={() => handleDurationChange(opt.seconds)}
              disabled={isStarted && !showResults}
              className={`px-3 py-1.5 text-sm font-medium transition-colors first:rounded-l-lg last:rounded-r-lg disabled:opacity-50 ${
                testDuration === opt.seconds
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <TimerDisplay formattedTime={formattedTime} isRunning={isRunning} />
      </div>

      {/* Stats */}
      <div className="mb-4">
        <Stats stats={stats} bestWpm={bestTestWpm} />
      </div>

      {/* Typing area */}
      <TypingBox
        targetText={paragraph.text}
        typedText={typedText}
        onInput={handleTypingInput}
        isFinished={isFinished || showResults}
        isStarted={isStarted}
      />

      {/* Controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={startNewTest} className="btn-secondary">
          ↻ New Test
        </button>
        <button
          onClick={() => setShowKeyboard(!showKeyboard)}
          className={`btn-secondary ${showKeyboard ? "!bg-primary-50 !text-primary-700 dark:!bg-primary-900/30" : ""}`}
        >
          ⌨ {showKeyboard ? "Hide" : "Show"} Keyboard
        </button>
      </div>

      <Keyboard activeKey={activeKey} isShift={isShift} visible={showKeyboard} />

      <AdPlaceholder position="bottom" />

      {/* Test Guide & Criteria */}
      <section className="mt-12 border-t border-gray-100 dark:border-gray-900 pt-12 pb-8">
        <h2 className="text-2xl font-bold mb-6">Passing Criteria for SSC Stenographer & LDC</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold mb-3 text-lg">Stenographer (Grade C & D)</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Dictation speed of 100 WPM for Grade C.</li>
              <li>• Dictation speed of 80 WPM for Grade D.</li>
              <li>• 95-97% transcription accuracy is mandatory.</li>
              <li>• Transcription time for Hindi Stenographer: 65 minutes (Grade D).</li>
            </ul>
          </div>
          <div className="card bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold mb-3 text-lg">LDC / JSA / Clerk</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• 30-35 WPM Hindi typing speed is required for SSC CHSL.</li>
              <li>• Typing test duration is typically 10 minutes.</li>
              <li>• 1750 Key Depressions (KDPH) in 10 minutes.</li>
              <li>• 7% error limit for UR category and 10% for other categories.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 prose prose-sm max-w-none text-gray-600 dark:text-gray-400">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Important things to keep in mind during the test:</h3>
          <p>
            When taking a test on TypeHindi, keep an eye on both your typing speed and errors. In the actual exam, using the backspace key excessively can slow you down. Our test mode simulates the exact interface layout, timer pressure, and scoring system used in government typing centers.
          </p>
          <p>
            Taking a 10-minute test regularly builds concentration, builds muscle memory, and trains your fingers to type for longer durations without fatigue.
          </p>
        </div>
      </section>
    </div>
  );
}
