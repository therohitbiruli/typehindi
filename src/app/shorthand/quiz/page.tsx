"use client";

import { useState } from "react";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { shorthandQuizBank } from "../../../data/shorthand/quizzes";

export default function ShorthandQuizPage() {
  const [questionCount, setQuestionCount] = useState<10 | 20 | 50>(10);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeQuestions = shorthandQuizBank.slice(0, questionCount);

  const handleSelectOption = (qId: string, optIndex: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    for (const q of activeQuestions) {
      if (answers[q.id] === q.correctIndex) {
        score++;
      }
    }
    return score;
  };

  const handleRestart = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  const score = calculateScore();
  const accuracy = Math.round((score / activeQuestions.length) * 100);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />

      <main className="container-main py-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Interactive Examination
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
              Pitman Shorthand Knowledge Quiz
            </h1>
            <p className="text-xs text-slate-400">
              Test your mastery of shorthand consonant strokes, vowels, grammalogues, and phrasing rules.
            </p>
          </div>

          {/* Question Mode Selector */}
          {!isSubmitted && (
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
              {[10, 20, 50].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    setQuestionCount(num as any);
                    setAnswers({});
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    questionCount === num
                      ? "bg-purple-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {num} Qs
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Banner if submitted */}
        {isSubmitted && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-sky-950/30 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Quiz Complete
              </span>
              <h3 className="text-2xl font-black text-slate-100 mt-1">
                Your Score: {score} / {activeQuestions.length} ({accuracy}%)
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {accuracy >= 80
                  ? "Outstanding grasp of Pitman principles and strokes!"
                  : "Keep reviewing weak areas and vowel position rules."}
              </p>
            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors self-start sm:self-auto"
            >
              Try Again ↻
            </button>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-4">
          {activeQuestions.map((q, idx) => {
            const userChoice = answers[q.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = userChoice === q.correctIndex;

            return (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-purple-400 uppercase tracking-wider">
                    Question {idx + 1} of {activeQuestions.length}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">
                    Category: {q.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-100 leading-snug">{q.question}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userChoice === oIdx;
                    let style = "bg-slate-950 hover:bg-slate-800/80 text-slate-300 border-slate-800";

                    if (isSubmitted) {
                      if (oIdx === q.correctIndex) {
                        style = "bg-emerald-950/60 border-emerald-500/60 text-emerald-300 font-bold";
                      } else if (isSelected) {
                        style = "bg-red-950/60 border-red-500/60 text-red-300";
                      }
                    } else if (isSelected) {
                      style = "bg-purple-600/30 border-purple-500 text-purple-200 font-bold";
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelectOption(q.id, oIdx)}
                        className={`p-3 rounded-xl border text-xs text-left transition-all font-medium ${style}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {isSubmitted && (
                  <div className={`p-3 rounded-xl text-xs leading-relaxed border ${
                    isCorrect
                      ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-300"
                      : "bg-red-950/30 border-red-500/30 text-red-300"
                  }`}>
                    <strong>{isCorrect ? "Correct: " : "Rule: "}</strong>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!isSubmitted && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setIsSubmitted(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-900/30 transition-all"
            >
              Submit Quiz & See Score →
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
