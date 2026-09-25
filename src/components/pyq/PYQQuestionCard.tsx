"use client";

import { useState } from "react";
import { PYQQuestion } from "../../data/pyqModels";

interface Props {
  question: PYQQuestion;
  index: number;
}

export function PYQQuestionCard({ question, index }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <span className="text-lg font-black text-slate-900 dark:text-white">Question {index + 1}</span>
        <div className="flex items-center gap-2">
          {question.topic && (
            <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg">
              {question.topic}
            </span>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-6 leading-relaxed whitespace-pre-wrap">
        {question.questionEn}
      </h3>

      <div className="space-y-3 mb-8">
        {question.optionsEn.map((opt, optIdx) => {
          const isCorrect = optIdx === question.correctOptionIndex;
          
          let optionClass = 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700';
          let letterBg = 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400';
          let textClass = 'text-slate-700 dark:text-slate-300';

          if (showAnswer && isCorrect) {
            optionClass = 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500 ring-1 ring-emerald-500';
            letterBg = 'bg-emerald-500 text-white';
            textClass = 'text-emerald-800 dark:text-emerald-300 font-semibold';
          } else if (showAnswer && !isCorrect) {
            optionClass = 'bg-slate-50 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 opacity-60';
          }

          return (
            <div key={optIdx} className={`p-4 rounded-xl border transition-all ${optionClass}`}>
              <div className="flex items-start gap-3">
                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${letterBg}`}>
                  {String.fromCharCode(65 + optIdx)}
                </div>
                <span className={`text-base ${textClass}`}>
                  {opt}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {!showAnswer ? (
        <button 
          onClick={() => setShowAnswer(true)}
          className="btn-secondary px-6 py-2.5 rounded-xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 w-full sm:w-auto"
        >
          View Answer
        </button>
      ) : (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <button 
            onClick={() => setShowAnswer(false)}
            className="mb-6 text-sm font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            Hide Answer
          </button>
          
          <div className="bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-2xl p-6">
            <h4 className="font-bold text-primary-800 dark:text-primary-300 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              Correct Answer: {String.fromCharCode(65 + question.correctOptionIndex)}
            </h4>
            
            {question.explanationEn ? (
              <p className="text-sm text-primary-900 dark:text-primary-200 leading-relaxed">
                <strong className="font-semibold block mb-1">Explanation:</strong>
                {question.explanationEn}
              </p>
            ) : (
              <p className="text-sm text-primary-900 dark:text-primary-200 italic opacity-80">
                No detailed explanation available for this question.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
