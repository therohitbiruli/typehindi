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
import { getRandomParagraph } from "../../data/paragraphs";
import type { Paragraph } from "../../data/paragraphs";

const TEST_DURATIONS = [
  { label: "1 Min", seconds: 60 },
  { label: "5 Min", seconds: 300 },
  { label: "10 Min", seconds: 600 },
];

export default function TestPage() {
  const [language, setLanguage] = useState<"hindi" | "english">("hindi");
  const [targetJob, setTargetJob] = useState<"ssc" | "rrb" | "ldc" | "udc" | "others">("ssc");
  const [testDuration, setTestDuration] = useState(60);
  const [paragraph, setParagraph] = useState<Paragraph>(() => getRandomParagraph("medium", "hindi"));
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [bestTestWpm, setBestTestWpm] = useLocalStorage<number>("bestTestWpm", 0);

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
    setParagraph(getRandomParagraph("medium", language));
    reset();
    resetTimer(testDuration);
    setShowResults(false);
  }, [reset, resetTimer, testDuration, language]);

  const handleDurationChange = useCallback(
    (seconds: number) => {
      setTestDuration(seconds);
      resetTimer(seconds);
      reset();
      setShowResults(false);
    },
    [resetTimer, reset]
  );

  const handleLanguageChange = useCallback(
    (lang: "hindi" | "english") => {
      setLanguage(lang);
      const newP = getRandomParagraph("medium", lang);
      setParagraph(newP);
      reset();
      resetTimer(testDuration);
      setShowResults(false);
    },
    [reset, resetTimer, testDuration]
  );

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Test" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-2">
        {language === "hindi" ? "Hindi Typing Test" : "English Typing Test"}
      </h1>
      <p className="text-muted mb-6">
        Take a timed typing test to evaluate your WPM speed, accuracy, and error counts.
      </p>

      {/* Settings Grid with Language and target typing Job selectors */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
        {/* Language Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Language Mode
          </label>
          <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => handleLanguageChange("hindi")}
              disabled={isStarted && !showResults}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                language === "hindi" ? "bg-white dark:bg-slate-950 text-primary-600 dark:text-primary-400 shadow-sm" : "text-gray-500"
              }`}
            >
              Hindi (Devanagari)
            </button>
            <button
              onClick={() => handleLanguageChange("english")}
              disabled={isStarted && !showResults}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                language === "english" ? "bg-white dark:bg-slate-950 text-primary-600 dark:text-primary-400 shadow-sm" : "text-gray-500"
              }`}
            >
              English (QWERTY)
            </button>
          </div>
        </div>

        {/* Target Job Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            What typing Job are you preparing for?
          </label>
          <select
            value={targetJob}
            onChange={(e) => setTargetJob(e.target.value as any)}
            disabled={isStarted && !showResults}
            className="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="ssc">SSC (Staff Selection Commission)</option>
            <option value="rrb">RRB (Railway Recruitment Board)</option>
            <option value="ldc">LDC (Lower Division Clerk) / JSA</option>
            <option value="udc">UDC (Upper Division Clerk)</option>
            <option value="others">Others / General</option>
          </select>
        </div>

        {/* Duration Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Test Duration
          </label>
          <div className="flex gap-2">
            <div className="flex flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-0.5">
              {TEST_DURATIONS.map((opt) => (
                <button
                  key={opt.seconds}
                  onClick={() => handleDurationChange(opt.seconds)}
                  disabled={isStarted && !showResults}
                  className={`flex-1 py-1 px-2 text-xs font-bold transition-all rounded-lg ${
                    testDuration === opt.seconds
                      ? "bg-white dark:bg-slate-950 text-primary-600 dark:text-primary-400 shadow-sm"
                      : "text-gray-500"
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
      </div>

      {/* Dynamic Job Profile Details Card */}
      <div className="mb-6 p-4 bg-primary-50/50 dark:bg-slate-900/50 border border-primary-100 dark:border-slate-800 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <span className="text-[10px] uppercase font-bold text-primary-600 dark:text-primary-400 tracking-wider">Active Exam Target Profile</span>
          <h4 className="font-extrabold text-gray-900 dark:text-white text-base leading-tight mt-0.5">
            {targetJob === "ssc" && "SSC Typing Test Guidelines"}
            {targetJob === "rrb" && "RRB Typing Exam Rules"}
            {targetJob === "ldc" && "LDC/JSA Clerk Exam Rules"}
            {targetJob === "udc" && "UDC Clerk Exam Guidelines"}
            {targetJob === "others" && "General Typing Exam Rules"}
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">
            {targetJob === "ssc" && (
              language === "hindi" 
                ? "SSC Hindi Typing requires 30 WPM (using InScript or Remington layouts) with up to 5-7% error tolerance depending on candidate category." 
                : "SSC English Typing requires 35 WPM (equivalent to 10500 key depressions per hour) in a 10-minute duration."
            )}
            {targetJob === "rrb" && (
              language === "hindi" 
                ? "RRB Hindi Typing requires 25 WPM. Note: Backspace may be fully disabled during the actual exam." 
                : "RRB English Typing requires 30 WPM. Typing speed is strictly calculated by deducting penalties for errors."
            )}
            {targetJob === "ldc" && (
              language === "hindi" 
                ? "LDC/JSA Hindi Typing requires 30 WPM on standard layouts. Maximum 5% error limit applies under state recruitment boards." 
                : "LDC/JSA English Typing requires 35 WPM. High accuracy is crucial for final rank listing."
            )}
            {targetJob === "udc" && (
              language === "hindi" 
                ? "UDC Hindi Typing requires 30 WPM. Accuracy threshold is set to 95% on official circular documents." 
                : "UDC English Typing requires 35 WPM on standard QWERTY keys."
            )}
            {targetJob === "others" && (
              language === "hindi" 
                ? "General Hindi typing speed: 30 WPM target. Keep practice regular to build muscle memory." 
                : "General English typing standards: 35-40 WPM target with 98% accuracy recommended."
            )}
          </p>
        </div>
      </div>

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
        language={language}
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

      <Keyboard activeKey={activeKey} isShift={isShift} visible={showKeyboard} language={language} />

      <AdPlaceholder position="bottom" />

      {/* Test Guide & Criteria */}
      <section className="mt-12 border-t border-gray-100 dark:border-gray-900 pt-12 pb-8">
        <h2 className="text-2xl font-bold mb-6">Official Job Typing Test Passing Criteria</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold mb-3 text-lg">SSC Stenographer & RRB Skill Tests</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• RRB NTPC: 30 WPM English or 25 WPM Hindi typing speed is required.</li>
              <li>• Dictation speed of 100 WPM for SSC Stenographer Grade C.</li>
              <li>• Dictation speed of 80 WPM for SSC Stenographer Grade D.</li>
              <li>• 95% to 97% transcription accuracy is mandatory to pass.</li>
            </ul>
          </div>
          <div className="card bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold mb-3 text-lg">LDC / UDC / JSA Clerical Jobs</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• 30 WPM Hindi or 35 WPM English typing speed is standard for LDC.</li>
              <li>• Typing test duration is strictly set to 10 minutes.</li>
              <li>• For English, 10500 key depressions (KDPH) are required.</li>
              <li>• Allowable error margin is usually 5% for General category candidates.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 prose prose-sm max-w-none text-gray-600 dark:text-gray-400">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tips for Job Exam Preparation:</h3>
          <p>
            When preparing for competitive exams like SSC CGL/CHSL or RRB NTPC, speed alone is not enough. Candidates must focus on minimizing errors. In standard tests, errors are categorized into full mistakes and half mistakes, which can significantly reduce your net typing speed.
          </p>
          <p>
            Practice regularly with our 10-minute simulator. Keep your backspace usage low to develop consistency, and maintain steady typing postures for best results.
          </p>
        </div>
      </section>
    </div>
  );
}
