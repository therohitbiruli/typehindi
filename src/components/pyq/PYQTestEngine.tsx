"use client";

import { useState, useEffect, useRef } from "react";
import { PYQQuestion } from "../../data/pyqModels";

interface Props {
  examName: string;
  shiftName: string;
  questions: PYQQuestion[];
}

type QuestionStatus = "unvisited" | "answered" | "not_answered" | "marked" | "answered_marked";

interface QuestionState {
  selectedOption: number | null;
  status: QuestionStatus;
}

export function PYQTestEngine({ examName, shiftName, questions }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [states, setStates] = useState<Record<string, QuestionState>>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes default
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Initialize states
  useEffect(() => {
    if (questions.length > 0 && Object.keys(states).length === 0) {
      const initial: Record<string, QuestionState> = {};
      questions.forEach((q, i) => {
        initial[q.id] = {
          selectedOption: null,
          status: i === 0 ? "not_answered" : "unvisited"
        };
      });
      setStates(initial);
    }
  }, [questions]);

  // Timer
  useEffect(() => {
    if (submitted || questions.length === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted, questions]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err.message);
        });
      }
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optIdx: number) => {
    const qId = questions[currentIdx].id;
    setStates(prev => {
      const curr = prev[qId];
      return {
        ...prev,
        [qId]: {
          ...curr,
          selectedOption: optIdx,
          status: curr.status === "marked" || curr.status === "answered_marked" ? "answered_marked" : "answered"
        }
      };
    });
  };

  const handleClear = () => {
    const qId = questions[currentIdx].id;
    setStates(prev => {
      const curr = prev[qId];
      return {
        ...prev,
        [qId]: {
          ...curr,
          selectedOption: null,
          status: curr.status === "answered_marked" || curr.status === "marked" ? "marked" : "not_answered"
        }
      };
    });
  };

  const handleMark = () => {
    const qId = questions[currentIdx].id;
    setStates(prev => {
      const curr = prev[qId];
      let newStatus: QuestionStatus = "marked";
      if (curr.selectedOption !== null) newStatus = "answered_marked";
      if (curr.status === "marked" || curr.status === "answered_marked") {
        newStatus = curr.selectedOption !== null ? "answered" : "not_answered";
      }
      return {
        ...prev,
        [qId]: {
          ...curr,
          status: newStatus
        }
      };
    });
  };

  const goToNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      const nextId = questions[currentIdx + 1].id;
      setStates(prev => {
        if (prev[nextId].status === "unvisited") {
          return { ...prev, [nextId]: { ...prev[nextId], status: "not_answered" } };
        }
        return prev;
      });
    }
  };

  const goToPrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const handleSubmit = () => {
    let finalScore = 0;
    questions.forEach(q => {
      const st = states[q.id];
      if (st && st.selectedOption === q.correctOptionIndex) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setSubmitted(true);
  };

  if (questions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Questions Being Digitized</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-6">
          We are currently processing the official question paper for {examName} ({shiftName}) into our interactive database. Please check back soon or use the PDF version in the meantime.
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Test Submitted!</h2>
        <div className="text-6xl font-black text-primary-600 dark:text-primary-400 mb-6">
          {score} / {questions.length}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <div className="text-slate-500 text-xs font-bold uppercase">Accuracy</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">{Math.round((score / Object.values(states).filter(s => s.selectedOption !== null).length || 1) * 100)}%</div>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
            <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">Correct</div>
            <div className="text-xl font-bold text-emerald-700 dark:text-emerald-300">{score}</div>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
            <div className="text-red-600 dark:text-red-400 text-xs font-bold uppercase">Wrong</div>
            <div className="text-xl font-bold text-red-700 dark:text-red-300">{Object.values(states).filter(s => s.selectedOption !== null).length - score}</div>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <div className="text-slate-500 text-xs font-bold uppercase">Skipped</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">{questions.length - Object.values(states).filter(s => s.selectedOption !== null).length}</div>
          </div>
        </div>
        <button onClick={() => window.location.reload()} className="btn-primary px-8 py-3 rounded-xl font-bold">
          Retake Test
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const currentState = states[currentQ.id] || { selectedOption: null, status: "unvisited" };

  return (
    <div ref={containerRef} className={`flex flex-col lg:flex-row gap-6 ${isFullscreen ? 'p-6 bg-slate-50 dark:bg-[#0f172a] h-screen w-screen overflow-y-auto' : ''}`}>
      {/* Main Question Area */}
      <div className="flex-grow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white">{examName}</h2>
            <p className="text-xs text-slate-500">{shiftName}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleFullscreen} className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700" title={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}>
              {isFullscreen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              )}
            </button>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 font-mono font-bold text-slate-700 dark:text-slate-200 shadow-sm">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="p-6 md:p-10 flex-grow">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-md">
              Question {currentIdx + 1} of {questions.length}
            </span>
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
              {currentQ.subject}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-8 leading-relaxed">
            {currentQ.questionEn}
          </h3>

          <div className="space-y-3">
            {currentQ.optionsEn.map((opt, idx) => (
              <label 
                key={idx} 
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${currentState.selectedOption === idx ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800/50'}`}
              >
                <input 
                  type="radio" 
                  name={`q-${currentQ.id}`}
                  checked={currentState.selectedOption === idx}
                  onChange={() => handleSelectOption(idx)}
                  className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-slate-300"
                />
                <span className={`text-base ${currentState.selectedOption === idx ? 'text-primary-900 dark:text-primary-100 font-medium' : 'text-slate-700 dark:text-slate-300'}`}>
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-2">
            <button onClick={handleMark} className="px-4 py-2 text-sm font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors">
              Mark for Review
            </button>
            <button onClick={handleClear} className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-200 dark:bg-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
              Clear
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={goToPrev} disabled={currentIdx === 0} className="px-5 py-2 text-sm font-bold text-slate-700 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button onClick={goToNext} disabled={currentIdx === questions.length - 1} className="px-8 py-2 text-sm font-bold text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Palette Sidebar */}
      <div className="w-full lg:w-80 shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col">
        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Question Palette</h3>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-emerald-500"></div> Answered</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-red-500"></div> Not Answered</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></div> Unvisited</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-amber-500"></div> Marked</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-2 overflow-y-auto max-h-[300px] lg:max-h-[500px] pr-2 pb-4">
          {questions.map((q, idx) => {
            const st = states[q.id]?.status || "unvisited";
            let bg = "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700";
            if (st === "answered") bg = "bg-emerald-500 text-white border-emerald-600";
            else if (st === "not_answered") bg = "bg-red-500 text-white border-red-600";
            else if (st === "marked") bg = "bg-amber-500 text-white border-amber-600";
            else if (st === "answered_marked") bg = "bg-primary-500 text-white border-primary-600";

            // If current question, add a ring
            const isCurrent = currentIdx === idx;
            const ring = isCurrent ? "ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-slate-900" : "";

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentIdx(idx);
                  setStates(prev => {
                    if (prev[q.id].status === "unvisited") {
                      return { ...prev, [q.id]: { ...prev[q.id], status: "not_answered" } };
                    }
                    return prev;
                  });
                }}
                className={`w-full aspect-square rounded-lg flex items-center justify-center font-bold text-sm border shadow-sm transition-all ${bg} ${ring}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <button onClick={handleSubmit} className="mt-auto w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-sm transition-colors">
          Submit Test
        </button>
      </div>
    </div>
  );
}
