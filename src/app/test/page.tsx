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
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 p-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        {/* Language Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-500">
            Language Mode
          </label>
          <div className="flex gap-2 bg-[#EEF2F7] dark:bg-slate-800 p-1 rounded-xl">
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

      {/* Test Guide & Criteria - Replaced with the complete guide */}
      <section className="mt-12 border-t border-gray-100 dark:border-gray-900 pt-12 pb-8">
        <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-400 dark:prose-invert space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white mb-6">
            Typing Test Job Preparation in India: A Complete Guide for SSC UDC, LDC, Clerk, Stenography and Assistant Jobs
          </h2>
          
          <p>
            Typing skills have become an essential requirement for many government and private-sector jobs in India. While competitive examinations often focus heavily on subjects such as General Knowledge, Reasoning, Mathematics and English, candidates sometimes underestimate the importance of the typing test. As a result, many candidates successfully clear written examinations but struggle during the typing or skill test.
          </p>

          <p>
            Jobs such as Lower Division Clerk (LDC), Upper Division Clerk (UDC), Junior Clerk, Data Entry Operator (DEO), Stenographer, Assistant and several other clerical and administrative positions require candidates to possess good typing skills. Depending on the recruitment organization and post, candidates may need to type in English, Hindi or both. They may also be tested on typing speed, accuracy, formatting and computer proficiency.
          </p>

          <p>
            This guide explains everything candidates need to know about preparing for typing tests in India, including typing speed requirements, practice methods, accuracy improvement, keyboard familiarity, common mistakes and strategies for government job typing examinations.
          </p>

          <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl mx-auto">
            <img 
              src="/images/government-job-typing-prep.jpg" 
              alt="A candidate practicing typing at a desk for Indian government clerical job exams such as SSC, LDC, UDC, and Stenographer"
              className="w-full h-auto object-cover"
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Understanding Typing Tests for Government Jobs
          </h3>
          <p>
            A typing test is designed to evaluate how efficiently a candidate can enter information using a computer keyboard. Unlike a written examination, a typing test measures practical skills. The candidate is usually given a passage or text and asked to type it within a specified time.
          </p>
          <p>
            The final evaluation may depend on several factors, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Typing speed</li>
            <li>Typing accuracy</li>
            <li>Number of mistakes</li>
            <li>Words typed correctly</li>
            <li>Characters typed per minute</li>
            <li>Formatting accuracy</li>
            <li>Completion of the required passage</li>
            <li>Ability to type under time pressure</li>
          </ul>
          <p>
            Different government organizations follow different rules. Therefore, candidates should always carefully read the official notification for the specific recruitment they are preparing for.
          </p>
          <p>
            In many cases, the typing test is qualifying in nature. This means the marks obtained may not be added to the final merit score, but candidates must meet the minimum required typing standard to remain eligible for selection.
          </p>
          <p>
            However, candidates should never assume that a qualifying typing test is unimportant. Failing the typing test can result in disqualification even after successfully clearing multiple stages of a competitive examination.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Jobs in India That Require Typing Skills
          </h3>
          <p>
            Typing skills are required for a wide variety of jobs in India. Some of the most common positions include clerical, administrative and data-entry roles.
          </p>

          <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl mx-auto">
            <img 
              src="/images/typing-jobs-in-india.jpg" 
              alt="Visual table explaining various typing jobs in India, speed requirements and responsibilities for SSC LDC, UDC, Clerks, Data Entry Operators, Assistants and Stenographers"
              className="w-full h-auto object-cover"
            />
          </div>

          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-4">
            SSC LDC and Clerical Posts
          </h4>
          <p>
            Lower Division Clerk positions generally involve office administration, document preparation, data entry, maintaining records and official correspondence.
          </p>
          <p>
            Candidates may need to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Type official letters</li>
            <li>Prepare documents</li>
            <li>Enter data</li>
            <li>Maintain digital records</li>
            <li>Draft reports</li>
            <li>Handle office correspondence</li>
          </ul>
          <p>
            Good typing speed and accuracy can therefore be essential for performing the job effectively.
          </p>

          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-4">
            UDC and Upper Division Clerk Jobs
          </h4>
          <p>
            Upper Division Clerk positions generally involve more administrative responsibility compared with entry-level clerical jobs. Depending on the organization, candidates may be required to work extensively with documents, files and computer systems.
          </p>
          <p>
            Strong keyboard skills help candidates perform tasks such as preparing official correspondence, entering information into databases and maintaining records.
          </p>

          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-4">
            Junior Clerk and Clerk Jobs
          </h4>
          <p>
            Many state government departments, courts, banks and other organizations recruit Junior Clerks or Clerks. Typing tests are common during recruitment for these positions.
          </p>
          <p>
            Candidates may be tested in English, Hindi or the language specified by the recruitment authority.
          </p>

          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-4">
            Data Entry Operator Jobs
          </h4>
          <p>
            Data Entry Operator positions naturally require strong keyboard skills. Candidates may be required to enter large amounts of information accurately and quickly.
          </p>
          <p>
            These tests may focus on:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Speed</li>
            <li>Accuracy</li>
            <li>Data-entry efficiency</li>
            <li>Characters per hour</li>
            <li>Key depressions</li>
            <li>Numerical data entry</li>
          </ul>
          <p>
            A candidate who types quickly but makes frequent mistakes may struggle to qualify.
          </p>

          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-4">
            Assistant and Administrative Jobs
          </h4>
          <p>
            Several government departments recruit Assistants, Junior Assistants and administrative personnel. Computer proficiency and typing ability may be included in the selection process.
          </p>
          <p>
            These jobs often involve preparing official documents, emails, reports and digital records.
          </p>

          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-4">
            Stenographer Jobs
          </h4>
          <p>
            Stenography jobs require a different set of skills. Candidates must first transcribe spoken content using shorthand and may then need to type or transcribe the dictated material using a computer.
          </p>
          <p>
            Stenographer examinations can therefore require:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Shorthand speed</li>
            <li>Dictation ability</li>
            <li>Transcription speed</li>
            <li>Typing accuracy</li>
            <li>Strong language knowledge</li>
          </ul>
          <p>
            Stenography requires dedicated practice because candidates must listen, understand, record and transcribe information efficiently.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Why Typing Accuracy Is More Important Than Candidates Think
          </h3>
          <p>
            Many beginners focus entirely on increasing typing speed. They constantly check their words-per-minute score and try to type faster.
          </p>
          <p>
            However, speed without accuracy can become a serious problem.
          </p>
          <p>
            For example, imagine two candidates:
          </p>
          <p>
            Candidate A types at 50 words per minute but makes many mistakes.
          </p>
          <p>
            Candidate B types at 40 words per minute with excellent accuracy.
          </p>
          <p>
            Depending on the examination rules, Candidate B may perform significantly better because incorrect words can reduce the effective typing speed.
          </p>
          <p>
            A good typing test strategy should therefore focus on both speed and accuracy.
          </p>
          <p>
            Candidates should initially aim for approximately 95% or higher accuracy. As keyboard familiarity improves, speed will naturally increase.
          </p>
          <p>
            Trying to type extremely fast before developing proper technique often creates bad habits. Candidates may repeatedly press incorrect keys, depend excessively on the Backspace key or constantly look at the keyboard.
          </p>
          <p>
            The best approach is to first develop accuracy and proper finger placement and then gradually increase speed.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Understanding Typing Speed
          </h3>
          <p>
            Typing speed is usually measured in words per minute, commonly known as WPM.
          </p>
          <p>
            A standard word for typing calculations may be based on a fixed number of characters depending on the examination or typing platform. Therefore, candidates should always understand the exact evaluation method used for their particular recruitment examination.
          </p>
          <p>
            Typing speed requirements vary significantly between examinations.
          </p>
          <p>
            Candidates should carefully check:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Required words per minute</li>
            <li>Required key depressions per hour</li>
            <li>Duration of the typing test</li>
            <li>Language of the test</li>
            <li>Keyboard layout</li>
            <li>Error limits</li>
            <li>Whether the test is qualifying</li>
            <li>Whether marks are included in the merit list</li>
          </ul>
          <p>
            Never prepare solely based on information from another examination. Recruitment rules can change, and different organizations may follow completely different standards.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Learning Proper Keyboard Position
          </h3>
          <p>
            One of the most important steps in improving typing ability is learning proper keyboard positioning.
          </p>
          <p>
            Touch typing means typing without continuously looking at the keyboard.
          </p>
          <p>
            The basic starting point is usually known as the home row.
          </p>
          <p>
            For English typing, the fingers are generally placed around the central keyboard keys so that each finger develops responsibility for particular keys.
          </p>
          <p>
            Proper finger positioning helps create muscle memory. Over time, the brain begins to remember where keys are located, allowing candidates to type faster without searching for each letter.
          </p>
          <p>
            Beginners should avoid typing with only two fingers.
          </p>
          <p>
            Two-finger typing may initially feel comfortable, especially for candidates who frequently use smartphones or computers casually. However, it can limit speed and create difficulties during longer typing tests.
          </p>
          <p>
            Learning proper finger placement may initially reduce speed, but it provides significant long-term benefits.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            The Importance of Touch Typing
          </h3>
          <p>
            Touch typing is one of the best skills a competitive exam candidate can develop.
          </p>
          <p>
            A touch typist does not need to repeatedly look at the keyboard. Instead, the candidate looks primarily at the screen or source text.
          </p>
          <p>
            This provides several advantages.
          </p>
          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-2">Better Speed</h4>
          <p>
            Candidates can type continuously without spending time searching for keys.
          </p>
          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-2">Better Accuracy</h4>
          <p>
            When the candidate focuses on the text rather than constantly moving their eyes between the keyboard and screen, errors can become easier to identify.
          </p>
          <h4 className="text-base font-bold text-gray-900 dark:text-white mt-2">Less Fatigue</h4>
          <p>
            Proper typing technique reduces unnecessary hand movement.
          </p>
          <h4 className="text-base font-bold text-gray-950 dark:text-white mt-2">Better Performance Under Pressure</h4>
          <p>
            During an examination, nervousness can make candidates forget keyboard positions. Strong muscle memory helps maintain consistent performance.
          </p>
          <p>
            Developing touch typing takes time, so candidates should begin practicing well before their examination.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            English Typing Preparation
          </h3>
          <p>
            English typing tests usually require candidates to type passages containing ordinary words, punctuation and numbers.
          </p>
          <p>
            Candidates should practice different types of material, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>News articles</li>
            <li>Government-related passages</li>
            <li>Formal English</li>
            <li>General paragraphs</li>
            <li>Official-style letters</li>
            <li>Difficult vocabulary</li>
            <li>Numbers and dates</li>
            <li>Punctuation-heavy text</li>
          </ul>
          <p>
            Practicing only simple sentences can create problems during the actual examination.
          </p>
          <p>
            A real typing test may contain:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Long words</li>
            <li>Capital letters</li>
            <li>Commas</li>
            <li>Full stops</li>
            <li>Quotation marks</li>
            <li>Parentheses</li>
            <li>Numbers</li>
            <li>Special symbols</li>
          </ul>
          <p>
            Candidates should therefore become comfortable using the Shift key and punctuation keys.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Hindi Typing Preparation
          </h3>
          <p>
            Hindi typing requires additional preparation because candidates may need to use specific keyboard layouts or typing methods.
          </p>
          <p>
            Depending on the examination, candidates should confirm whether the required method involves a particular layout.
          </p>
          <p>
            Hindi typing candidates should focus on:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keyboard layout familiarity</li>
            <li>Matras</li>
            <li>संयुक्त अक्षर</li>
            <li>Correct spelling</li>
            <li>Proper spacing</li>
            <li>Special Hindi characters</li>
          </ul>
          <p>
            Hindi typing speed can initially feel slower because candidates need to become familiar with the location of characters and symbols.
          </p>
          <p>
            Regular practice is essential.
          </p>
          <p>
            Candidates should avoid switching between multiple typing methods unnecessarily while preparing for a specific examination. They should practice using the exact method and layout required by the recruitment authority.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Stenography Preparation
          </h3>
          <p>
            Stenography is different from ordinary typing because it involves converting spoken language into written text.
          </p>
          <p>
            A stenographer must develop several abilities simultaneously.
          </p>
          <p>
            First, the candidate listens carefully to dictation.
          </p>
          <p>
            Second, the candidate records the dictated material using shorthand.
          </p>
          <p>
            Finally, the shorthand notes are transcribed accurately.
          </p>
          <p>
            Stenography preparation should focus on:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Shorthand fundamentals</li>
            <li>Speed-building exercises</li>
            <li>Dictation practice</li>
            <li>Listening ability</li>
            <li>Transcription practice</li>
            <li>Grammar</li>
            <li>Spelling</li>
            <li>Punctuation</li>
          </ul>
          <p>
            Candidates should gradually increase dictation speed rather than immediately attempting extremely high speeds.
          </p>
          <p>
            For example, beginners can start with slower dictation and focus on accuracy. Once they become comfortable, they can gradually increase speed.
          </p>
          <p>
            Regular dictation practice is extremely important.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            A Daily Typing Practice Routine
          </h3>
          <p>
            Candidates preparing for typing tests should maintain a regular practice schedule.
          </p>
          <p>
            A beginner may start with approximately 30 to 60 minutes of daily practice. More experienced candidates can divide practice into multiple sessions.
          </p>
          <p>
            A useful practice routine can include the following stages:
          </p>
          
          <h4 className="text-base font-bold text-gray-905 dark:text-white mt-3">Warm-Up Practice</h4>
          <p>
            Spend a few minutes typing simple words and sentences. The purpose is to relax the fingers and develop rhythm.
          </p>

          <h4 className="text-base font-bold text-gray-905 dark:text-white mt-3">Accuracy Practice</h4>
          <p>
            Practice slowly while focusing on typing every word correctly. Do not worry excessively about speed.
          </p>

          <h4 className="text-base font-bold text-gray-905 dark:text-white mt-3">Speed Practice</h4>
          <p>
            Attempt timed typing tests. For example: 5-minute tests, 10-minute tests, or longer tests depending on examination requirements.
          </p>

          <h4 className="text-base font-bold text-gray-905 dark:text-white mt-3">Error Analysis</h4>
          <p>
            Review mistakes carefully. Identify whether mistakes occur because of incorrect finger placement, difficult letters, capital letters, punctuation, numbers, or lack of concentration.
          </p>

          <h4 className="text-base font-bold text-gray-905 dark:text-white mt-3">Final Timed Test</h4>
          <p>
            End the session with one realistic typing test. This helps candidates track progress.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            How to Increase Typing Speed
          </h3>
          <p>
            Typing speed generally improves gradually through repetition and consistency. Candidates should avoid expecting dramatic improvement overnight.
          </p>
          <p>
            The following methods can help increase speed:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Practice Regularly:</strong> Typing for a short period every day is generally more effective than practicing for several hours only once a week.</li>
            <li><strong>Avoid Looking at the Keyboard:</strong> This may initially feel difficult, but it is essential for developing touch typing.</li>
            <li><strong>Learn Correct Finger Placement:</strong> Each finger should gradually become familiar with its assigned keys.</li>
            <li><strong>Focus on Common Word Patterns:</strong> Frequently used words eventually become automatic.</li>
            <li><strong>Practice Difficult Combinations:</strong> If certain key combinations repeatedly cause mistakes, practice them separately.</li>
            <li><strong>Use Timed Tests:</strong> Timed tests help develop speed under examination conditions.</li>
            <li><strong>Maintain a Comfortable Rhythm:</strong> Typing too aggressively can increase mistakes. A smooth and consistent rhythm is generally better than irregular bursts of speed.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            How to Improve Typing Accuracy
          </h3>
          <p>
            Accuracy requires concentration and controlled movement. Candidates can improve accuracy by:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Typing slightly slower during practice</li>
            <li>Maintaining proper posture</li>
            <li>Looking at the source text carefully</li>
            <li>Avoiding unnecessary rushing</li>
            <li>Practicing difficult words</li>
            <li>Reviewing repeated mistakes</li>
            <li>Taking short breaks when tired</li>
          </ul>
          <p>
            Candidates should identify patterns in their mistakes. For example, if they frequently type &quot;teh&quot; instead of &quot;the&quot; or repeatedly miss punctuation, they should specifically practice those weaknesses. Targeted practice is often more effective than simply taking random typing tests repeatedly.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Common Typing Mistakes
          </h3>
          <p>
            Several mistakes commonly affect typing test performance:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Looking at the Keyboard:</strong> Constantly looking down slows typing and makes it difficult to maintain concentration.</li>
            <li><strong>Typing Too Fast:</strong> Trying to achieve maximum speed can result in excessive mistakes.</li>
            <li><strong>Overusing Backspace:</strong> Frequent corrections interrupt typing rhythm. Candidates should understand the examination rules regarding corrections and errors.</li>
            <li><strong>Poor Posture:</strong> Incorrect sitting position can cause discomfort and fatigue.</li>
            <li><strong>Ignoring Punctuation:</strong> Candidates sometimes practice only letters and words but struggle with punctuation during actual tests.</li>
            <li><strong>Practicing Only Easy Text:</strong> Real examinations may contain difficult vocabulary and formal language.</li>
            <li><strong>Not Taking Full-Length Tests:</strong> Candidates may perform well during short practice sessions but struggle during longer examinations. Full-length practice is therefore essential.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Preparing Under Examination Conditions
          </h3>
          <p>
            As the typing test approaches, candidates should begin practicing under realistic conditions. Use the same or similar time duration, keyboard type, language settings, sitting posture, and examination environment.
          </p>
          <p>
            Avoid pausing the timer unnecessarily. The goal is to train the mind to perform continuously under pressure. Candidates should also practice when slightly tired or distracted because examination conditions may not always feel comfortable. However, proper rest before the actual examination remains important.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Choosing the Right Keyboard
          </h3>
          <p>
            Candidates should become comfortable using a standard computer keyboard. Different keyboards may have slightly different key spacing, key height, key pressure, and layout design.
          </p>
          <p>
            If possible, candidates should practice on a desktop-style keyboard similar to the one likely to be used during the examination. Laptop typing can feel different because laptop keyboards are usually more compact. Candidates should not depend entirely on a specific keyboard. They should develop enough adaptability to type comfortably on standard keyboards.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Improving Finger Strength and Comfort
          </h3>
          <p>
            Long typing sessions can cause hand fatigue, particularly for beginners. Candidates should maintain relaxed hands, avoid excessive force, sit comfortably, keep wrists in a natural position, and take short breaks during practice. Typing does not require pressing keys extremely hard. A light and controlled touch generally improves speed and reduces fatigue.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Mental Preparation for Typing Tests
          </h3>
          <p>
            Typing tests are not only about keyboard skills. Confidence and concentration are equally important. During the examination, candidates may become nervous because of the countdown timer, the importance of the examination, noise in the examination centre, or fear of making mistakes.
          </p>
          <p>
            Candidates should avoid panicking after making a small error. One mistake does not mean the entire test is ruined. Continue typing calmly and maintain rhythm. A candidate who loses concentration after a mistake may make several additional mistakes. Practice should therefore include mental discipline.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            A 30-Day Typing Improvement Plan
          </h3>
          <ul className="space-y-3 list-none pl-0">
            <li><strong>Days 1 to 7:</strong> Focus primarily on keyboard familiarity, finger placement, accuracy, and basic words. Do not chase extremely high speed.</li>
            <li><strong>Days 8 to 15:</strong> Begin timed typing tests, difficult words, numbers, punctuation, and longer paragraphs. Track both speed and accuracy.</li>
            <li><strong>Days 16 to 23:</strong> Increase practice intensity. Attempt realistic examination-style typing tests. Focus specifically on repeated weaknesses.</li>
            <li><strong>Days 24 to 30:</strong> Take regular full-length mock typing tests. Avoid experimenting with completely new typing methods at the last moment. Focus on consistency, confidence, and accuracy.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Importance of Consistency
          </h3>
          <p>
            Typing is a skill based heavily on repetition. A candidate practicing every day for one month can make significant improvement. However, candidates should understand that improvement may not always appear immediately. Some days, typing speed may decrease because of fatigue, stress, lack of sleep, or difficult practice material. Instead of worrying about a single poor result, track long-term improvement. The goal should be consistent performance.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Final Tips for SSC, Clerk, LDC, UDC and Assistant Candidates
          </h3>
          <ol className="list-decimal pl-5 space-y-1.5 font-semibold">
            <li>Always read the official notification carefully.</li>
            <li>Know the exact typing requirement for your post.</li>
            <li>Practice both speed and accuracy.</li>
            <li>Learn touch typing if possible.</li>
            <li>Practice using realistic passages.</li>
            <li>Become comfortable with punctuation and numbers.</li>
            <li>Take timed typing tests regularly.</li>
            <li>Analyse repeated mistakes.</li>
            <li>Practice on a standard computer keyboard.</li>
            <li>Maintain proper posture.</li>
            <li>Do not panic after small mistakes.</li>
            <li>Practice consistently until the examination.</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 border-b pb-2">
            Conclusion
          </h3>
          <p>
            Typing tests are an important part of recruitment for many jobs in India, including positions such as SSC LDC, UDC, Clerk, Junior Assistant, Data Entry Operator, Assistant and Stenographer. Many candidates make the mistake of focusing entirely on the written examination and beginning typing preparation only after clearing earlier stages. This can create unnecessary pressure and may result in disqualification during the skill test.
          </p>
          <p>
            The best approach is to begin typing preparation early. Candidates should gradually develop keyboard familiarity, proper finger placement, touch typing ability, speed and accuracy. Instead of chasing extremely high typing speed from the beginning, candidates should first build a strong foundation. Regular practice, realistic mock tests and careful analysis of mistakes can significantly improve performance.
          </p>
          <p>
            Whether you are preparing for an SSC clerical position, a government clerk job, an LDC or UDC post, an assistant position or a stenography examination, strong typing skills can become an important advantage. Remember that typing is a skill. Like any other skill, it improves through consistent and focused practice.
          </p>
          <p>
            Start slowly, focus on accuracy, build speed gradually and practice under realistic examination conditions. With discipline and regular practice, candidates can significantly improve their typing performance and approach their typing test with confidence.
          </p>
        </div>
      </section>
    </div>
  );
}
