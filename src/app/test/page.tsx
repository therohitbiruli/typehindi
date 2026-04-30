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

      {/* Test Guide & Criteria */}
      <section className="mt-12 border-t border-gray-100 dark:border-gray-900 pt-12 pb-8">
        <h2 className="text-2xl font-bold mb-6">SSC स्टेनोग्राफर और LDC के लिए पासिंग क्राइटेरिया</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold mb-3 text-lg">स्टेनोग्राफर (Grade C & D)</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• ग्रेड C के लिए 100 WPM की डिक्टेशन गति।</li>
              <li>• ग्रेड D के लिए 80 WPM की डिक्टेशन गति।</li>
              <li>• ट्रांसक्रिप्शन के दौरान 95-97% सटीकता (Accuracy) अनिवार्य है।</li>
              <li>• हिंदी स्टेनोग्राफर के लिए ट्रांसक्रिप्शन समय: 65 मिनट (Grade D)।</li>
            </ul>
          </div>
          <div className="card bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold mb-3 text-lg">LDC / JSA / क्लर्क</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• SSC CHSL के लिए 30-35 WPM की हिंदी टाइपिंग गति।</li>
              <li>• टाइपिंग टेस्ट आमतौर पर 10 मिनट का होता है।</li>
              <li>• 1750 की-डिप्रेशन (Key Depressions) 10 मिनट में।</li>
              <li>• UR कैटेगरी के लिए 7% और अन्य के लिए 10% त्रुटि मान्य।</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 prose prose-sm max-w-none text-gray-600 dark:text-gray-400">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">टेस्ट के दौरान इन बातों का ध्यान रखें:</h3>
          <p>
            जब आप TypeHindi पर टेस्ट दे रहे हों, तो अपनी गति के साथ-साथ त्रुटियों (Errors) पर भी नज़र रखें। वास्तविक परीक्षा में, बैकस्पेस का अधिक उपयोग आपकी गति को प्रभावित कर सकता है। हमारा टेस्ट मोड आपको वह सटीकता और दबाव प्रदान करता है जो वास्तविक सरकारी परीक्षा केंद्रों में महसूस होता है। 
          </p>
          <p>
            नियमित रूप से 10 मिनट का टेस्ट देने से आपकी एकाग्रता बढ़ती है और आप लंबी अवधि तक बिना थके टाइप करने में सक्षम होते हैं।
          </p>
        </div>
      </section>
    </div>
  );
}
