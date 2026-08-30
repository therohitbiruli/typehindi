"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { keyPracticeItems, KeyPracticeItem, inscriptKeyDetails } from "../../data/learn-data";
import { getInscriptCharFromEvent } from "../../utils/inscriptInputHelper";

interface KeyByKeyPracticeProps {
  completedKeys: string[];
  onKeyComplete: (keyId: string) => void;
}

export function KeyByKeyPractice({
  completedKeys,
  onKeyComplete,
}: KeyByKeyPracticeProps) {
  const [selectedGroup, setSelectedGroup] = useState<KeyPracticeItem["group"]>("vowels");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = keyPracticeItems.filter(item => item.group === selectedGroup);
  const currentItem = filteredItems[selectedItemIndex] || filteredItems[0] || keyPracticeItems[0];
  const isCurrentCompleted = completedKeys.includes(currentItem.id);

  const targetText = currentItem.drillSequence;

  const resetDrill = useCallback(() => {
    setTypedText("");
    setIsFinished(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }, []);

  useEffect(() => {
    resetDrill();
  }, [currentItem.id, resetDrill]);

  const handleGroupChange = (group: KeyPracticeItem["group"]) => {
    setSelectedGroup(group);
    setSelectedItemIndex(0);
  };

  const handlePrev = () => {
    if (selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    } else {
      setSelectedItemIndex(filteredItems.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedItemIndex < filteredItems.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    } else {
      setSelectedItemIndex(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFinished) return;

    if (e.key === "Backspace") {
      e.preventDefault();
      if (typedText.length > 0) {
        setTypedText(prev => prev.slice(0, -1));
      }
      return;
    }

    const char = getInscriptCharFromEvent(e);
    if (!char) return;

    e.preventDefault();
    const nextIndex = typedText.length;
    if (nextIndex >= targetText.length) return;

    const expectedChar = targetText[nextIndex];
    const isCorrect = char === expectedChar;

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }

    const newTyped = typedText + char;
    setTypedText(newTyped);

    if (newTyped.length >= targetText.length) {
      setIsFinished(true);
      setAttempts(prev => prev + 1);
      const finalCorrect = correctCount + (isCorrect ? 1 : 0);
      const acc = Math.round((finalCorrect / targetText.length) * 100);

      if (acc >= 80) {
        onKeyComplete(currentItem.id);
      }
    }
  };

  const totalCharsTyped = correctCount + incorrectCount;
  const currentAccuracy = totalCharsTyped > 0 ? Math.round((correctCount / totalCharsTyped) * 100) : 100;

  const keyDetail = inscriptKeyDetails[currentItem.code];

  const groupTabs: { id: KeyPracticeItem["group"]; label: string }[] = [
    { id: "vowels", label: "Basic Vowels (स्वर)" },
    { id: "consonants-1", label: "Consonants 1 (क & च वर्ग)" },
    { id: "consonants-2", label: "Consonants 2 (ट, त, प, य)" },
    { id: "matras", label: "Matras (मात्राएं)" },
  ];

  return (
    <section id="key-practice" className="mb-14 scroll-mt-20">
      <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-2">
                <span>⌨️ Step-by-Step Training</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Key-by-Key Practice
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Learn each Hindi InScript key individually. Understand finger placement, practice typing it repeatedly, and build solid muscle memory.
              </p>
            </div>

            {/* Completion Counter Badge */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 self-start md:self-auto text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm">
              <span>Mastered:</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold text-xs">
                {keyPracticeItems.filter(k => completedKeys.includes(k.id)).length} / {keyPracticeItems.length}
              </span>
            </div>
          </div>

          {/* Group Tabs */}
          <div className="flex gap-2 overflow-x-auto pt-6 scrollbar-none">
            {groupTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleGroupChange(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedGroup === tab.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Character Selector Strip */}
        <div className="p-4 md:px-8 border-b border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {filteredItems.map((item, idx) => {
              const isCompleted = completedKeys.includes(item.id);
              const isCurrent = idx === selectedItemIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedItemIndex(idx)}
                  className={`relative flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl font-hindi text-xl font-bold transition-all border ${
                    isCurrent
                      ? "border-emerald-500 bg-emerald-500 text-white shadow-md shadow-emerald-500/25 scale-105"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:border-emerald-300 dark:hover:border-emerald-700"
                  }`}
                >
                  {item.char}
                  {isCompleted && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold border-2 border-white dark:border-gray-900">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Key Workspace */}
        <div className="p-6 md:p-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Key Presentation & Finger Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 border border-gray-150 dark:border-gray-800 text-center relative overflow-hidden">
              {isCurrentCompleted && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                  <span>✓ Mastered</span>
                </div>
              )}

              {/* Big Character Display */}
              <div className="text-7xl md:text-8xl font-hindi font-bold text-gray-900 dark:text-white my-2 tracking-wide">
                {currentItem.char}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {currentItem.description}
              </p>

              {/* Physical Key & Finger Card */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-left">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Physical Key
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <kbd className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 font-mono text-sm font-bold text-gray-900 dark:text-white shadow-sm">
                      {currentItem.keyLabel}
                    </kbd>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Finger To Use
                  </div>
                  <div className="mt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 truncate">
                    {currentItem.fingerLabel}
                  </div>
                </div>
              </div>

              {/* Example Words */}
              <div className="mt-4 text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                  Example Words with {currentItem.char}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentItem.exampleWords.map(w => (
                    <span
                      key={w}
                      className="px-2.5 py-1 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-hindi text-xs font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Key Typing Drill */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Interactive Practice Drill
                </h3>
                <span className="text-xs text-gray-400">
                  Type the prompt below using your physical keyboard
                </span>
              </div>

              {/* Target Text Visualization */}
              <div
                onClick={() => inputRef.current?.focus()}
                className="cursor-text p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 min-h-[90px] font-hindi text-2xl md:text-3xl leading-relaxed flex flex-wrap items-center gap-1 shadow-inner"
              >
                {targetText.split("").map((char, i) => {
                  let status = "text-gray-400 dark:text-gray-600";
                  if (i < typedText.length) {
                    status = typedText[i] === char
                      ? "text-emerald-600 dark:text-emerald-400 font-bold"
                      : "text-red-500 bg-red-100 dark:bg-red-950/60 rounded px-0.5 font-bold";
                  } else if (i === typedText.length) {
                    status = "border-b-4 border-emerald-500 text-gray-900 dark:text-white font-bold animate-pulse";
                  }
                  return (
                    <span key={i} className={status}>
                      {char === " " ? " " : char}
                    </span>
                  );
                })}
              </div>

              {/* Input */}
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={typedText}
                  onKeyDown={handleKeyDown}
                  onChange={() => {}}
                  disabled={isFinished}
                  placeholder={typedText.length === 0 ? "Click here and start typing..." : ""}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-hindi text-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60 shadow-sm"
                  autoFocus
                />
                {typedText.length > 0 && !isFinished && (
                  <button
                    onClick={resetDrill}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Real-time Accuracy & Score Bar */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 text-xs">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-gray-400">Accuracy: </span>
                    <span className="font-bold text-gray-900 dark:text-white">{currentAccuracy}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Correct: </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{correctCount}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Errors: </span>
                    <span className="font-bold text-red-500">{incorrectCount}</span>
                  </div>
                </div>

                <div className="text-gray-400">
                  Target: <span className="font-semibold text-gray-700 dark:text-gray-300">80%+</span>
                </div>
              </div>

              {/* Completion Banner */}
              {isFinished && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between animate-fade-in">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                        {currentAccuracy >= 80 ? "Key Completed Successfully!" : "Drill Complete!"}
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">
                        {currentAccuracy >= 80
                          ? "Great job! This key has been marked as mastered in your progress."
                          : "Accuracy was under 80%. Try again to lock in muscle memory!"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex-shrink-0"
                  >
                    Next Key →
                  </button>
                </div>
              )}
            </div>

            {/* Navigation & Controls Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-150 dark:border-gray-800">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
              >
                <span>←</span>
                <span>Previous Key</span>
              </button>

              <button
                onClick={resetDrill}
                className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
              >
                <span>🔄</span>
                <span>Practice Again</span>
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Next Key</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
