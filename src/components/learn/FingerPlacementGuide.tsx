"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { fingerInfoList, FingerInfo, inscriptKeyDetails, InscriptKeyDetail } from "../../data/learn-data";
import { getInscriptCharFromEvent } from "../../utils/inscriptInputHelper";

export function FingerPlacementGuide() {
  const [selectedFinger, setSelectedFinger] = useState<FingerInfo["id"]>("right-middle");
  const [activePracticeMode, setActivePracticeMode] = useState(false);
  const [difficulty, setDifficulty] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  // Practice session state
  const [practicePrompt, setPracticePrompt] = useState<InscriptKeyDetail | null>(null);
  const [promptIsShift, setPromptIsShift] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const practiceContainerRef = useRef<HTMLDivElement>(null);

  // Group keys by finger
  const allKeys = Object.values(inscriptKeyDetails);
  const keysForSelectedFinger = allKeys.filter(k => k.finger === selectedFinger);

  // Generate next practice prompt based on difficulty
  const nextPrompt = useCallback(() => {
    let pool: { key: InscriptKeyDetail; isShift: boolean }[] = [];

    if (difficulty === "beginner") {
      const homeKeys = allKeys.filter(k => k.row === "home");
      homeKeys.forEach(k => {
        if (k.normal) pool.push({ key: k, isShift: false });
      });
    } else if (difficulty === "intermediate") {
      const mainKeys = allKeys.filter(k => k.row === "top" || k.row === "bottom" || k.row === "home");
      mainKeys.forEach(k => {
        if (k.normal) pool.push({ key: k, isShift: false });
      });
    } else {
      allKeys.forEach(k => {
        if (k.normal) pool.push({ key: k, isShift: false });
        if (k.shift && k.shift !== k.normal) pool.push({ key: k, isShift: true });
      });
    }

    if (pool.length > 0) {
      const rand = pool[Math.floor(Math.random() * pool.length)];
      setPracticePrompt(rand.key);
      setPromptIsShift(rand.isShift);
      setSelectedFinger(rand.key.finger);
      setFeedback(null);
      setFeedbackMessage("");
    }
  }, [difficulty, allKeys]);

  useEffect(() => {
    if (activePracticeMode) {
      nextPrompt();
    }
  }, [activePracticeMode, difficulty, nextPrompt]);

  // Handle physical keypress in practice mode
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!activePracticeMode || !practicePrompt) return;

    const typedChar = getInscriptCharFromEvent(e);
    if (!typedChar) return;

    e.preventDefault();
    const targetChar = promptIsShift ? practicePrompt.shift : practicePrompt.normal;

    if (typedChar === targetChar) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
      setFeedback("correct");
      setFeedbackMessage("✓ Correct! Perfect finger!");
      setTimeout(() => {
        nextPrompt();
      }, 600);
    } else {
      setStreak(0);
      setFeedback("incorrect");
      const fingerObj = fingerInfoList[practicePrompt.finger];
      setFeedbackMessage(`Press '${targetChar}' with your ${fingerObj.nameEn} (${practicePrompt.keyLabel})`);
    }
  };

  const currentFingerObj = fingerInfoList[selectedFinger];

  const fingersLeft: FingerInfo["id"][] = ["left-pinky", "left-ring", "left-middle", "left-index", "left-thumb"];
  const fingersRight: FingerInfo["id"][] = ["right-thumb", "right-index", "right-middle", "right-ring", "right-pinky"];

  return (
    <section id="finger-guide" className="mb-14 scroll-mt-20">
      <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
                <span>🖐️ Visual Typing Tutor</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Finger Placement Guide
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
                Proper finger positioning is the secret to 40+ WPM typing speed. Select any finger or test yourself in Interactive Practice Mode to build effortless touch typing habits.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-800 self-start md:self-auto">
              <button
                onClick={() => setActivePracticeMode(false)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  !activePracticeMode
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Explorer Mode
              </button>
              <button
                onClick={() => setActivePracticeMode(true)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activePracticeMode
                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/30"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                ⚡ Practice Mode
              </button>
            </div>
          </div>
        </div>

        {/* Practice Mode Banner */}
        {activePracticeMode && (
          <div
            ref={practiceContainerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="p-6 md:p-8 bg-indigo-50/40 dark:bg-indigo-950/20 border-b border-indigo-100 dark:border-indigo-900/40 focus:outline-none"
          >
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Difficulty:
                  </span>
                  <div className="flex gap-1.5">
                    {(["beginner", "intermediate", "advanced"] as const).map(d => (
                      <button
                        key={d}
                        onClick={() => setDifficulty(d)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                          difficulty === d
                            ? "bg-indigo-600 text-white shadow-sm"
                            : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Type the character shown with the highlighted finger:
                </h3>
              </div>

              {/* Live Target Card */}
              {practicePrompt && (
                <div className={`p-5 rounded-3xl border-2 flex items-center gap-5 transition-all ${
                  feedback === "correct"
                    ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 scale-105"
                    : feedback === "incorrect"
                    ? "bg-red-50 dark:bg-red-950/40 border-red-500 animate-shake"
                    : "bg-white dark:bg-gray-900 border-indigo-400 shadow-md"
                }`}>
                  <div className="text-center">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Character</span>
                    <div className="text-5xl font-hindi font-bold text-gray-900 dark:text-white">
                      {promptIsShift ? practicePrompt.shift : practicePrompt.normal}
                    </div>
                  </div>

                  <div className="border-l border-gray-200 dark:border-gray-700 pl-4 space-y-1 text-left">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Key: <kbd className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono font-bold text-gray-900 dark:text-white">{practicePrompt.keyLabel}</kbd>
                    </div>
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {fingerInfoList[practicePrompt.finger].nameEn}
                    </div>
                    {promptIsShift && (
                      <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                        Hold Shift Key!
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Score & Streak */}
              <div className="flex items-center gap-4 text-center">
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{score}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Score</div>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-amber-500">{streak} 🔥</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Streak</div>
                </div>
              </div>
            </div>

            {/* Instant Feedback Message */}
            {feedbackMessage && (
              <div className={`mt-3 text-center text-xs font-bold ${
                feedback === "correct" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
              }`}>
                {feedbackMessage}
              </div>
            )}
          </div>
        )}

        {/* Hands Visualization & Key Mapping */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Hands Selector */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Hand Card */}
            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl">🤚</span>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  Left Hand (बायां हाथ)
                </h4>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Controls ASDF home row, vowels on left side, and QWERT keys
              </p>

              {/* 5 Finger Buttons */}
              <div className="flex justify-center items-end gap-2.5 h-32 px-4">
                {fingersLeft.map((fid) => {
                  const info = fingerInfoList[fid];
                  const isSelected = selectedFinger === fid;
                  // Heights to simulate hand anatomy: pinky shorter, middle longest
                  const heights: Record<string, string> = {
                    "left-pinky": "h-20",
                    "left-ring": "h-26",
                    "left-middle": "h-28",
                    "left-index": "h-24",
                    "left-thumb": "h-16",
                  };
                  return (
                    <button
                      key={fid}
                      onClick={() => setSelectedFinger(fid)}
                      className={`group relative flex flex-col items-center justify-end w-12 rounded-2xl transition-all pb-2 border-2 ${
                        heights[fid] || "h-20"
                      } ${
                        isSelected
                          ? "border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105"
                          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-300"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase truncate px-1">
                        {info.nameEn.split(" ")[1] || info.nameEn.split(" ")[0]}
                      </span>
                      {isSelected && (
                        <span className="absolute -top-2 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-gray-900 animate-ping" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Hand Card */}
            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl">✋</span>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  Right Hand (दायां हाथ)
                </h4>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Controls JKL; home row, consonants, and right punctuation
              </p>

              {/* 5 Finger Buttons */}
              <div className="flex justify-center items-end gap-2.5 h-32 px-4">
                {fingersRight.map((fid) => {
                  const info = fingerInfoList[fid];
                  const isSelected = selectedFinger === fid;
                  const heights: Record<string, string> = {
                    "right-thumb": "h-16",
                    "right-index": "h-24",
                    "right-middle": "h-28",
                    "right-ring": "h-26",
                    "right-pinky": "h-20",
                  };
                  return (
                    <button
                      key={fid}
                      onClick={() => setSelectedFinger(fid)}
                      className={`group relative flex flex-col items-center justify-end w-12 rounded-2xl transition-all pb-2 border-2 ${
                        heights[fid] || "h-20"
                      } ${
                        isSelected
                          ? "border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105"
                          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-300"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase truncate px-1">
                        {info.nameEn.split(" ")[1] || info.nameEn.split(" ")[0]}
                      </span>
                      {isSelected && (
                        <span className="absolute -top-2 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-gray-900 animate-ping" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selected Finger Details & Assigned Keys Grid */}
          <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200 dark:border-gray-800">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                  Selected Finger
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {currentFingerObj.nameEn} ({currentFingerObj.nameHi})
                </h4>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400">
                Assigned Keys: <span className="font-bold text-primary-600 dark:text-primary-400">{keysForSelectedFinger.length}</span>
              </div>
            </div>

            {/* Keys assigned to this finger */}
            <div>
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Characters typed with this finger on the InScript layout:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {keysForSelectedFinger.map((key) => (
                  <div
                    key={key.code}
                    className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center text-center space-y-1 hover:border-primary-400 transition-all"
                  >
                    <kbd className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-900 font-mono text-xs font-bold text-gray-700 dark:text-gray-300">
                      {key.keyLabel}
                    </kbd>
                    <div className="flex items-center gap-2 pt-1">
                      {key.normal && (
                        <span className="font-hindi text-xl font-bold text-gray-900 dark:text-white">
                          {key.normal}
                        </span>
                      )}
                      {key.shift && key.shift !== key.normal && (
                        <span className="font-hindi text-sm font-semibold text-primary-600 dark:text-primary-400">
                          ({key.shift})
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400 capitalize">
                      {key.row} row
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
