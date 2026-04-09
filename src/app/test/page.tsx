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
  { label: "1 मिनट", seconds: 60 },
  { label: "5 मिनट", seconds: 300 },
  { label: "10 मिनट", seconds: 600 },
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

      <h1 className="heading-1 mb-2">हिंदी टाइपिंग टेस्ट (Hindi Typing Test)</h1>
      <p className="text-muted mb-6">
        निर्धारित समय में टेस्ट दें और अपनी WPM, सटीकता और त्रुटियाँ जानें।
      </p>

      {/* Results Modal */}
      {showResults && (
        <div className="mb-6 rounded-lg border-2 border-primary-200 bg-primary-50 p-6 dark:border-primary-800 dark:bg-primary-900/20">
          <h2 className="heading-2 mb-4 text-center">📊 टेस्ट परिणाम (Test Results)</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">गति (WPM)</p>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stats.wpm}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">सटीकता</p>
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{stats.accuracy}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">कुल त्रुटियाँ</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">{stats.totalErrors}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">सर्वश्रेष्ठ WPM</p>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{bestTestWpm}</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button onClick={startNewTest} className="btn-primary px-8">
              नया टेस्ट दें (New Test)
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
          ↻ नया टेस्ट (New Test)
        </button>
        <button
          onClick={() => setShowKeyboard(!showKeyboard)}
          className={`btn-secondary ${showKeyboard ? "!bg-primary-50 !text-primary-700 dark:!bg-primary-900/30" : ""}`}
        >
          ⌨ कीबोर्ड {showKeyboard ? "छुपाएँ" : "दिखाएँ"}
        </button>
      </div>

      <Keyboard activeKey={activeKey} isShift={isShift} visible={showKeyboard} />

      <AdPlaceholder position="bottom" />
    </div>
  );
}
