"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { getShorthandProgress } from "../../../data/shorthand/storage";
import { UserShorthandProgress } from "../../../data/shorthand/types";

export default function ShorthandProgressPage() {
  const [progress, setProgress] = useState<UserShorthandProgress | null>(null);

  useEffect(() => {
    setProgress(getShorthandProgress());
  }, []);

  if (!progress) {
    return <div className="min-h-screen bg-[#070B14] text-slate-100 flex items-center justify-center">Loading progress...</div>;
  }

  const completedCount = progress.completedLessons.length;
  const completionPercent = Math.round((completedCount / 13) * 100);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />

      <main className="container-main py-10 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Analytics & Activity
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
            My Shorthand Learning Dashboard
          </h1>
          <p className="text-xs text-slate-400">
            All statistics come directly from your browser activity. Zero login required.
          </p>
        </div>

        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-bold text-amber-400">Current Streak</span>
            <div className="text-2xl sm:text-3xl font-black text-slate-100 mt-1">
              ⚡ {progress.currentStreak} Days
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Longest: {progress.longestStreak} days
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-bold text-purple-400">Curriculum</span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 mt-1">
              {completedCount} / 13
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              {completionPercent}% Completed
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-bold text-sky-400">Best Dictation Speed</span>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 mt-1">
              {progress.bestDictationWpm > 0 ? `${progress.bestDictationWpm} WPM` : "—"}
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Target: 100+ WPM
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-400">Best Transcription</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
              {progress.bestAccuracy > 0 ? `${progress.bestAccuracy}%` : "—"}
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Accuracy Benchmark
            </span>
          </div>
        </div>

        {/* Words Dictated & Transcribed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Audio Experience</span>
            <div className="text-2xl font-black text-slate-100">{progress.totalWordsDictated} Words</div>
            <p className="text-xs text-slate-400">Total volume of spoken English dictation words practiced.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Keyboard Transcription</span>
            <div className="text-2xl font-black text-slate-100">{progress.totalWordsTranscribed} Words</div>
            <p className="text-xs text-slate-400">Total words typed and evaluated on computer keyboard.</p>
          </div>
        </div>

        {/* Recent Test History Table */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-slate-100">Recent Stenography Exam Attempts</h3>
            <Link href="/shorthand/tests" className="text-xs text-purple-400 hover:underline">
              Take New Test →
            </Link>
          </div>

          {progress.testHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-300">
                <thead className="text-[10px] uppercase tracking-wider text-slate-400 bg-slate-950 border-b border-slate-800">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Exam / Passage</th>
                    <th className="p-3">Dictation</th>
                    <th className="p-3">Typing</th>
                    <th className="p-3">Accuracy</th>
                    <th className="p-3">Errors</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {progress.testHistory.map((t) => (
                    <tr key={t.id} className="hover:bg-slate-800/40">
                      <td className="p-3 text-slate-400">{new Date(t.date).toLocaleDateString()}</td>
                      <td className="p-3 font-semibold text-slate-200">{t.examName}</td>
                      <td className="p-3 text-purple-300 font-medium">{t.dictationWpm} WPM</td>
                      <td className="p-3 text-sky-300 font-medium">{t.transcriptionWpm} WPM</td>
                      <td className="p-3 font-bold text-slate-100">{t.accuracyPercentage}%</td>
                      <td className="p-3 text-red-400">{t.errorsCount}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          t.passed
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                            : "bg-red-500/10 text-red-400 border border-red-500/30"
                        }`}>
                          {t.passed ? "PASSED" : "FAILED"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-10 text-slate-400 text-xs">
              No test attempts recorded yet. Head over to the Exam Simulator to take your first timed dictation!
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
