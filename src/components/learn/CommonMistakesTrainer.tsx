"use client";

import { useState, useRef, useEffect } from "react";
import { commonMistakesLessons, CommonMistakeLesson } from "../../data/learn-data";
import { getInscriptCharFromEvent } from "../../utils/inscriptInputHelper";

export function CommonMistakesTrainer() {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"learn" | "quiz">("learn");

  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnsweredCount, setQuizAnsweredCount] = useState(0);

  // Drill practice state
  const [typedText, setTypedText] = useState("");
  const [isDrillFinished, setIsDrillFinished] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const currentLesson = commonMistakesLessons[selectedLessonIndex] || commonMistakesLessons[0];
  const targetDrill = currentLesson.practiceDrill;

  const resetDrill = () => {
    setTypedText("");
    setIsDrillFinished(false);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  useEffect(() => {
    resetDrill();
  }, [currentLesson.id, activeTab]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isDrillFinished) return;

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
    if (nextIndex >= targetDrill.length) return;

    const newTyped = typedText + char;
    setTypedText(newTyped);

    if (newTyped.length >= targetDrill.length) {
      setIsDrillFinished(true);
    }
  };

  const handleQuizSubmit = (optIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(optIndex);
    setIsAnswerSubmitted(true);
    setQuizAnsweredCount(prev => prev + 1);

    if (optIndex === currentLesson.quiz.correctIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  return (
    <section id="common-mistakes" className="mb-14 scroll-mt-20">
      <div className="border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-50/70 via-red-50/40 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 p-6 md:p-8 border-b border-gray-150 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-semibold mb-2">
                <span>⚠️ Error Elimination Trainer</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Common Hindi Typing Mistakes
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
                Master the 7 most common InScript typing traps — Matra placement order, Halant conjuncts, Shift key mixups, and Nuqta rules.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-800 self-start md:self-auto">
              <button
                onClick={() => setActiveTab("learn")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "learn"
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Lesson & Drill
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "quiz"
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Quiz Challenge ({quizScore}/{quizAnsweredCount})
              </button>
            </div>
          </div>

          {/* Lesson Selector Strip */}
          <div className="flex gap-2 overflow-x-auto pt-6 scrollbar-none">
            {commonMistakesLessons.map((les, idx) => (
              <button
                key={les.id}
                onClick={() => setSelectedLessonIndex(idx)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedLessonIndex === idx
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-[1.02]"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {les.title.split(". ")[1] || les.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {activeTab === "learn" ? (
            <div className="space-y-8">
              {/* Comparison Boxes: Incorrect vs Correct */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Incorrect Box */}
                <div className="p-6 rounded-3xl bg-red-50/50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 space-y-3">
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-sm">
                    <span>❌ Common Mistake (गलत तरीका)</span>
                  </div>
                  <div className="font-hindi text-xl font-bold text-red-600 dark:text-red-300">
                    {currentLesson.incorrectResult}
                  </div>
                  <p className="text-xs text-red-600/80 dark:text-red-400/80 leading-relaxed">
                    Most new typists make this mistake due to habits from handwritten Hindi or English phonetic typing.
                  </p>
                </div>

                {/* Correct Box */}
                <div className="p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-900/50 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                    <span>✓ InScript Standard Rule (सही तरीका)</span>
                  </div>
                  <div className="font-hindi text-xl font-bold text-emerald-700 dark:text-emerald-300">
                    {currentLesson.correctResult}
                  </div>
                  <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80 leading-relaxed">
                    Follow the standard Bureau of Indian Standards (BIS) InScript layout keystrokes.
                  </p>
                </div>
              </div>

              {/* Explanation & Keystroke Recipe */}
              <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Detailed Explanation (विस्तृत व्याख्या)
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {currentLesson.explanation}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                    Keyboard Recipe:
                  </span>
                  <div className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-hindi font-bold text-base text-gray-900 dark:text-white">
                    {currentLesson.keySequence}
                  </div>
                </div>
              </div>

              {/* Interactive Mini Practice Drill */}
              <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Muscle Memory Correction Drill
                  </h4>
                  <span className="text-xs text-gray-400">Type the correct pattern below:</span>
                </div>

                {/* Target Drill Box */}
                <div
                  onClick={() => inputRef.current?.focus()}
                  className="cursor-text p-5 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 min-h-[80px] font-hindi text-2xl leading-relaxed flex flex-wrap items-center gap-1 shadow-inner"
                >
                  {targetDrill.split("").map((char, i) => {
                    let status = "text-gray-400 dark:text-gray-600";
                    if (i < typedText.length) {
                      status = typedText[i] === char
                        ? "text-emerald-600 dark:text-emerald-400 font-bold"
                        : "text-red-500 bg-red-100 dark:bg-red-950/60 rounded px-0.5 font-bold";
                    } else if (i === typedText.length) {
                      status = "border-b-4 border-rose-500 text-gray-900 dark:text-white font-bold animate-pulse";
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
                    disabled={isDrillFinished}
                    placeholder={typedText.length === 0 ? "Type here to practice..." : ""}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-hindi text-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:opacity-60 shadow-sm"
                    autoFocus
                  />
                  {typedText.length > 0 && !isDrillFinished && (
                    <button
                      onClick={resetDrill}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 px-2 py-1"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {isDrillFinished && (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h5 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                          Drill Completed Successfully!
                        </h5>
                        <p className="text-xs text-emerald-700 dark:text-emerald-300">
                          Your muscle memory is now calibrated for this rule.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (selectedLessonIndex + 1 < commonMistakesLessons.length) {
                          setSelectedLessonIndex(selectedLessonIndex + 1);
                        } else {
                          setSelectedLessonIndex(0);
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex-shrink-0"
                    >
                      Next Lesson →
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Mode */
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="p-6 md:p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    Question {selectedLessonIndex + 1} of {commonMistakesLessons.length}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    Topic: {currentLesson.topic}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  {currentLesson.quiz.question}
                </h3>

                {/* Options List */}
                <div className="space-y-3">
                  {currentLesson.quiz.options.map((opt, oIdx) => {
                    let btnStyle = "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-rose-400";
                    if (isAnswerSubmitted) {
                      if (oIdx === currentLesson.quiz.correctIndex) {
                        btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-bold";
                      } else if (selectedOption === oIdx) {
                        btnStyle = "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200";
                      } else {
                        btnStyle = "opacity-50 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-gray-400";
                      }
                    }
                    return (
                      <button
                        key={oIdx}
                        disabled={isAnswerSubmitted}
                        onClick={() => handleQuizSubmit(oIdx)}
                        className={`w-full p-4 rounded-2xl border text-left font-hindi text-base transition-all flex items-center justify-between shadow-sm ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isAnswerSubmitted && oIdx === currentLesson.quiz.correctIndex && (
                          <span className="text-emerald-600 font-bold">✓ Correct</span>
                        )}
                        {isAnswerSubmitted && selectedOption === oIdx && oIdx !== currentLesson.quiz.correctIndex && (
                          <span className="text-red-500 font-bold">✗ Incorrect</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card after Answer */}
                {isAnswerSubmitted && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2 animate-fade-in">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Explanation:
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                      {currentLesson.quiz.explanation}
                    </p>

                    <div className="pt-3 flex justify-end">
                      <button
                        onClick={() => {
                          if (selectedLessonIndex + 1 < commonMistakesLessons.length) {
                            setSelectedLessonIndex(selectedLessonIndex + 1);
                          } else {
                            setSelectedLessonIndex(0);
                          }
                          setSelectedOption(null);
                          setIsAnswerSubmitted(false);
                        }}
                        className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-all"
                      >
                        Next Question →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
