"use client";

import { useState, useCallback, useMemo } from "react";
import { TypingBox } from "../../components/TypingBox";
import { Stats } from "../../components/Stats";
import { TimerDisplay } from "../../components/Timer";
import { Keyboard } from "../../components/Keyboard";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { Breadcrumb } from "../../components/Breadcrumb";
import { SEOContent } from "../../components/SEOContent";
import { useTypingEngine } from "../../hooks/useTypingEngine";
import { useTimer } from "../../hooks/useTimer";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getRandomParagraph, getParagraphsByDifficulty } from "../../data/paragraphs";
import type { Paragraph } from "../../data/paragraphs";

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

export default function HomePage() {
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

  // Save best WPM when finished
  const handleFinish = useCallback(() => {
    if (stats.wpm > bestWpm) {
      setBestWpm(stats.wpm);
    }
  }, [stats.wpm, bestWpm, setBestWpm]);

  // Check when test finishes
  useMemo(() => {
    if (isFinished && stats.wpm > 0) {
      handleFinish();
    }
  }, [isFinished, stats.wpm, handleFinish]);

  // Start timer on first input
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
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Practice" }]} />

      <AdPlaceholder position="top" />

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="heading-1 mb-2">हिंदी टाइपिंग अभ्यास (Hindi Typing Practice)</h1>
        <p className="text-muted">
          InScript कीबोर्ड लेआउट पर हिंदी टाइपिंग का अभ्यास करें।
        </p>
      </div>

      {/* Controls */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {/* Difficulty selector */}
        <div className="flex rounded-lg border border-gray-200 dark:border-gray-700">
          {DIFFICULTY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleDifficultyChange(opt.value)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors first:rounded-l-lg last:rounded-r-lg ${
                difficulty === opt.value
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
              id={`difficulty-${opt.value}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Timer selector */}
        <div className="flex rounded-lg border border-gray-200 dark:border-gray-700">
          {TIMER_OPTIONS.map((opt) => (
            <button
              key={opt.seconds}
              onClick={() => handleTimerChange(opt.seconds)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors first:rounded-l-lg last:rounded-r-lg ${
                timerSeconds === opt.seconds
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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
        <Stats stats={stats} bestWpm={bestWpm} />
      </div>

      {/* Typing area */}
      <TypingBox
        targetText={paragraph.text}
        typedText={typedText}
        onInput={handleTypingInput}
        isFinished={isFinished}
        isStarted={isStarted}
      />

      {/* Action buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={handleReset} className="btn-secondary" id="btn-reset">
          ↻ रीसेट (Reset)
        </button>
        <button onClick={changeParagraph} className="btn-secondary" id="btn-change">
          ⟳ अनुच्छेद बदलें (Change)
        </button>
        <button
          onClick={() => setShowKeyboard(!showKeyboard)}
          className={`btn-secondary ${showKeyboard ? "!bg-primary-50 !text-primary-700 dark:!bg-primary-900/30 dark:!text-primary-300" : ""}`}
          id="btn-keyboard"
        >
          ⌨ कीबोर्ड {showKeyboard ? "छुपाएँ" : "दिखाएँ"}
        </button>
      </div>

      {/* Keyboard Guide */}
      <Keyboard activeKey={activeKey} isShift={isShift} visible={showKeyboard} />

      {/* Paragraph info */}
      <div className="mt-4 text-sm text-gray-400 dark:text-gray-500">
        कठिनाई: {paragraph.difficulty === "easy" ? "सरल" : paragraph.difficulty === "medium" ? "मध्यम" : "कठिन"} |{" "}
        विषय: {paragraph.category} | शब्द: {paragraph.wordCount}
      </div>

      <AdPlaceholder position="bottom" />

      {/* Practice Strategy Section */}
      <section className="mt-12 mb-12 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/30">
        <h2 className="text-2xl font-bold mb-4">स्टेनोग्राफी और एलडीसी अभ्यास रणनीति</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">शॉर्टहैंड के लिए टाइपिंग अभ्यास</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              स्टेनोग्राफर को केवल शॉर्टहैंड लिखना ही नहीं, बल्कि उसे तेजी से टाइप करना भी आना चाहिए। हमारा सुझाव है कि आप डिक्टेशन को कागज पर लिखने के बाद उसे यहाँ 'Practice' बॉक्स में टाइप करें। इससे आपकी ट्रांसक्रिप्शन स्पीड में सुधार होगा।
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">कीबोर्ड का सही चयन</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              सरकारी परीक्षाओं में अक्सर मैकेनिकल कीबोर्ड या कठोर बटन वाले कीबोर्ड मिलते हैं। घर पर अभ्यास के दौरान विभिन्न प्रकार के कीबोर्ड का उपयोग करने का प्रयास करें ताकि आपकी उंगलियाँ किसी भी स्थिति के लिए तैयार रहें।
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SEOContent />
    </div>
  );
}
