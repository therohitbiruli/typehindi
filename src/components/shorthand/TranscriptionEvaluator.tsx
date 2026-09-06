"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { DictationPassage, ExamConfig } from "../../data/shorthand/types";
import { recordTestAttempt } from "../../data/shorthand/storage";

interface TranscriptionEvaluatorProps {
  passage: DictationPassage;
  examConfig?: ExamConfig;
  dictationSpeedWpm?: number;
}

export function TranscriptionEvaluator({
  passage,
  examConfig,
  dictationSpeedWpm = 80,
}: TranscriptionEvaluatorProps) {
  const [typedText, setTypedText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Transcription time limit (default: 45 minutes or from config)
  const allowedMinutes = examConfig?.transcriptionTimeMinutes || 45;
  const totalAllowedSeconds = allowedMinutes * 60;

  useEffect(() => {
    if (startTime && !isSubmitted) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, isSubmitted]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    setTypedText(e.target.value);
  };

  // Compute Word Diff
  const evaluation = useMemo(() => {
    const targetWords = passage.text
      .replace(/[^a-zA-Z0-9s]/g, "")
      .toLowerCase()
      .split(/s+/)
      .filter(Boolean);

    const typedWords = typedText
      .replace(/[^a-zA-Z0-9s]/g, "")
      .toLowerCase()
      .split(/s+/)
      .filter(Boolean);

    let correctCount = 0;
    let errorsCount = 0;

    const maxLen = Math.max(targetWords.length, typedWords.length);
    const diffTokens: Array<{ word: string; status: "correct" | "missing" | "extra" | "wrong" }> = [];

    for (let i = 0; i < maxLen; i++) {
      const target = targetWords[i];
      const typed = typedWords[i];

      if (target && typed) {
        if (target === typed) {
          correctCount++;
          diffTokens.push({ word: typed, status: "correct" });
        } else {
          errorsCount++;
          diffTokens.push({ word: typed, status: "wrong" });
        }
      } else if (target && !typed) {
        errorsCount++;
        diffTokens.push({ word: target, status: "missing" });
      } else if (!target && typed) {
        errorsCount++;
        diffTokens.push({ word: typed, status: "extra" });
      }
    }

    const accuracyPercentage =
      targetWords.length > 0
        ? Math.max(0, Math.round(((targetWords.length - errorsCount) / targetWords.length) * 100))
        : 0;

    const minutesTaken = Math.max(elapsedSeconds / 60, 0.1);
    const typingWpm = Math.round(typedWords.length / minutesTaken);

    const allowedErrorPct = examConfig?.allowedErrorPercentage || 5;
    const actualErrorPct = ((errorsCount / targetWords.length) * 100).toFixed(1);
    const passed = Number(actualErrorPct) <= allowedErrorPct;

    return {
      targetTotal: targetWords.length,
      typedTotal: typedWords.length,
      correctCount,
      errorsCount,
      accuracyPercentage,
      typingWpm,
      diffTokens,
      actualErrorPct,
      allowedErrorPct,
      passed,
    };
  }, [typedText, passage.text, elapsedSeconds, examConfig]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);

    recordTestAttempt({
      examId: examConfig?.id || "custom",
      examName: examConfig?.name || "Custom Transcription Practice",
      dictationWpm: dictationSpeedWpm,
      transcriptionWpm: evaluation.typingWpm,
      accuracyPercentage: evaluation.accuracyPercentage,
      errorsCount: evaluation.errorsCount,
      wordsCount: passage.wordCount,
      passed: evaluation.passed,
    });
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Bar: Timers & Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Allowed Time</span>
          <div className="text-base font-bold text-slate-200 mt-0.5">{allowedMinutes} Mins</div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Time Elapsed</span>
          <div className="text-base font-bold text-purple-400 mt-0.5">{formatTime(elapsedSeconds)}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Words Typed</span>
          <div className="text-base font-bold text-sky-400 mt-0.5">
            {evaluation.typedTotal} / {passage.wordCount}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Max Error Threshold</span>
          <div className="text-base font-bold text-amber-400 mt-0.5">{evaluation.allowedErrorPct}%</div>
        </div>
      </div>

      {!isSubmitted ? (
        /* Typing Area */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300">
              Type your shorthand transcription into the box below:
            </label>
            <span className="text-xs text-slate-400 font-mono">
              {typedText.split(/\s+/).filter(Boolean).length} words
            </span>
          </div>

          <textarea
            value={typedText}
            onChange={handleTextChange}
            placeholder="Read your handwritten shorthand notes and type the transcribed English words here..."
            rows={14}
            className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 font-sans text-sm leading-relaxed focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-y select-text"
          />

          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-slate-400">
              Double check your spelling and punctuation before final submission.
            </p>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!typedText.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-lg shadow-purple-900/30 transition-all"
            >
              Submit & Evaluate Transcription →
            </button>
          </div>
        </div>
      ) : (
        /* Detailed Result Screen */
        <div className="space-y-6">
          {/* Banner */}
          <div className={`p-6 rounded-2xl border ${
            evaluation.passed
              ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
              : "bg-red-950/30 border-red-500/40 text-red-300"
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider">Official Result</span>
                <h3 className="text-2xl font-black mt-1">
                  {evaluation.passed ? "CONGRATULATIONS — TEST QUALIFIED" : "TEST NOT QUALIFIED"}
                </h3>
                <p className="text-xs mt-1 text-slate-300">
                  {evaluation.passed
                    ? `Your error rate of ${evaluation.actualErrorPct}% is well within the permitted threshold of ${evaluation.allowedErrorPct}%.`
                    : `Your error rate of ${evaluation.actualErrorPct}% exceeds the permissible threshold of ${evaluation.allowedErrorPct}%.`}
                </p>
              </div>

              <div className="text-right shrink-0">
                <div className="text-3xl font-black">{evaluation.accuracyPercentage}%</div>
                <div className="text-[11px] text-slate-400">Word Accuracy</div>
              </div>
            </div>
          </div>

          {/* Detailed Score Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Typing Speed</span>
              <div className="text-xl font-bold text-slate-100 mt-1">{evaluation.typingWpm} WPM</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-semibold text-emerald-400">Correct Words</span>
              <div className="text-xl font-bold text-emerald-400 mt-1">{evaluation.correctCount}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-semibold text-red-400">Total Mistakes</span>
              <div className="text-xl font-bold text-red-400 mt-1">{evaluation.errorsCount}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Time Taken</span>
              <div className="text-xl font-bold text-slate-100 mt-1">{formatTime(elapsedSeconds)}</div>
            </div>
          </div>

          {/* Word Diff Visual Inspection */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-xs font-bold text-slate-200">Word Comparison & Error Breakdown</h4>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Correct
                </span>
                <span className="flex items-center gap-1 text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-400" /> Wrong
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Missing
                </span>
              </div>
            </div>

            <div className="max-h-64 overflow-y-auto p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs leading-relaxed flex flex-wrap gap-1.5 font-mono">
              {evaluation.diffTokens.map((t, idx) => (
                <span
                  key={idx}
                  className={`px-1.5 py-0.5 rounded ${
                    t.status === "correct"
                      ? "text-emerald-300 bg-emerald-950/40"
                      : t.status === "wrong"
                      ? "text-red-300 bg-red-950/60 line-through border border-red-500/30"
                      : "text-amber-300 bg-amber-950/40 border border-amber-500/30"
                  }`}
                >
                  {t.word}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setTypedText("");
                setStartTime(null);
                setElapsedSeconds(0);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              Try Again ↻
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
