"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { KEYBOARD_QUIZ_QUESTIONS, KeyboardQuizQuestion } from "../data/keyboardEncyclopedia";

export function KeyboardQuizWidget() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [missedChars, setMissedChars] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ: KeyboardQuizQuestion = KEYBOARD_QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;

    setSelectedOption(opt);
    setIsAnswered(true);

    const correct = opt === currentQ.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 1);
    } else {
      setMissedChars((prev) =>
        prev.includes(currentQ.charTarget) ? prev : [...prev, currentQ.charTarget]
      );
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < KEYBOARD_QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setMissedChars([]);
    setIsFinished(false);
  };

  const scrollToKeyboard = () => {
    const el = document.getElementById("interactive-keyboard-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (isFinished) {
    const accuracyPct = Math.round((score / KEYBOARD_QUIZ_QUESTIONS.length) * 100);

    return (
      <div className="card p-8 md:p-12 rounded-[2.5rem] border border-primary-500/30 bg-slate-900 shadow-2xl text-center max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
        <div className="w-20 h-20 rounded-3xl bg-primary-500/20 border-2 border-primary-500/40 flex items-center justify-center text-4xl mx-auto mb-4">
          🏆
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-1 block">
          Quiz Completed
        </span>
        <h3 className="text-3xl font-black text-white mb-2">Keyboard Knowledge Score</h3>
        <p className="text-sm text-slate-400 mb-8">
          Here is how well you know the Hindi InScript keyboard mappings.
        </p>

        {/* Score Ring / Box */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 mb-8">
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary-300 to-amber-400">
            {score} / {KEYBOARD_QUIZ_QUESTIONS.length}
          </div>
          <span className="text-xs text-slate-400 font-semibold mt-1 block">
            Accuracy: {accuracyPct}%
          </span>
        </div>

        {/* Characters to Practice */}
        {missedChars.length > 0 ? (
          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 mb-8 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2">
              ⚠️ Characters to Practice:
            </span>
            <div className="flex flex-wrap gap-2">
              {missedChars.map((ch) => (
                <span
                  key={ch}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold flex items-center justify-center text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {ch}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Review these characters on the interactive keyboard above before starting your speed
              practice.
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 mb-8 text-emerald-300 text-sm font-semibold">
            🎉 Flawless Score! You have fully mastered Hindi InScript keyboard positions!
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="btn-primary rounded-xl px-6 py-3 text-sm font-bold shadow-md shadow-primary-500/20 flex items-center gap-2"
          >
            <span>🔄</span>
            <span>Try Again</span>
          </button>

          <Link
            href="/practice"
            className="btn-secondary rounded-xl px-5 py-3 text-sm font-semibold border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 transition-all"
          >
            Practice Hindi Typing →
          </Link>

          <button
            onClick={scrollToKeyboard}
            className="text-xs font-semibold text-slate-400 hover:text-white px-4 py-3"
          >
            ↑ Back to Keyboard
          </button>
        </div>
      </div>
    );
  }

  const progressPct = ((currentIdx + 1) / KEYBOARD_QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="card p-6 md:p-8 rounded-[2.5rem] border border-slate-800 bg-slate-900/90 shadow-xl max-w-2xl mx-auto">
      {/* Header & Progress Bar */}
      <div className="flex items-center justify-between mb-4 text-xs font-bold text-slate-400">
        <span className="uppercase tracking-widest text-primary-400">
          Question {currentIdx + 1} of {KEYBOARD_QUIZ_QUESTIONS.length}
        </span>
        <span className="text-amber-400">Score: {score}</span>
      </div>

      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-primary-500 transition-all duration-300 rounded-full"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Target Character Callout */}
      <div className="text-center my-6">
        <div
          className="w-20 h-20 rounded-3xl bg-slate-950 border-2 border-primary-500/40 flex items-center justify-center text-4xl font-black text-white mx-auto mb-3 shadow-lg shadow-primary-500/10"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          {currentQ.charTarget}
        </div>
        <h4 className="text-xl md:text-2xl font-black text-white">{currentQ.question}</h4>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {currentQ.options.map((opt) => {
          let btnClass = "bg-slate-800/90 border-slate-700 text-slate-100 hover:border-primary-400 hover:bg-slate-750";

          if (isAnswered) {
            if (opt === currentQ.correctAnswer) {
              btnClass = "bg-emerald-950 border-emerald-500 text-emerald-300 font-black ring-2 ring-emerald-500/40";
            } else if (opt === selectedOption) {
              btnClass = "bg-rose-950 border-rose-500 text-rose-300 font-black";
            } else {
              btnClass = "bg-slate-900 border-slate-800 text-slate-600 opacity-40";
            }
          }

          return (
            <button
              key={opt}
              onClick={() => handleSelectOption(opt)}
              disabled={isAnswered}
              className={`p-4 rounded-2xl border-2 font-bold text-base md:text-lg transition-all flex items-center justify-center shadow-sm ${btnClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback & Explanation */}
      {isAnswered && (
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{isCorrect ? "✅" : "❌"}</span>
            <span className={`text-sm font-black ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
              {isCorrect ? "Correct!" : "Incorrect!"}
            </span>
          </div>
          <p className="text-xs text-slate-300">{currentQ.explanation}</p>
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <button
          onClick={handleNext}
          className="btn-primary w-full rounded-2xl py-3.5 text-sm font-bold shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2"
        >
          <span>
            {currentIdx + 1 === KEYBOARD_QUIZ_QUESTIONS.length ? "View Final Results →" : "Next Question →"}
          </span>
        </button>
      )}
    </div>
  );
}
