"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getShorthandProgress } from "../../data/shorthand/storage";

export function ShorthandHero() {
  const [completedCount, setCompletedCount] = useState(0);
  const [streak, setStreak] = useState(1);
  const [bestWpm, setBestWpm] = useState(0);

  useEffect(() => {
    const progress = getShorthandProgress();
    setCompletedCount(progress.completedLessons?.length || 0);
    setStreak(progress.currentStreak || 1);
    setBestWpm(progress.bestDictationWpm || 0);
  }, []);

  const completionPercent = Math.min(100, Math.round((completedCount / 13) * 100));

  return (
    <section className="relative overflow-hidden pt-12 pb-14 border-b border-slate-800/80 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B1120]">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Title, Subtitle, 3 Primary CTAs */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              English Pitman Shorthand Platform
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Learn Shorthand <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Step by Step</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Learn shorthand from the basics, practice dictation and transcription, build speed, and prepare for stenographer examinations including Delhi High Court and SSC.
            </p>

            {/* Three Primary Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/shorthand/learn"
                className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-900/30 transition-all duration-150 flex items-center gap-1.5"
              >
                Start Learning →
              </Link>

              <Link
                href="/shorthand/practice"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs border border-slate-700/80 transition-all duration-150 flex items-center gap-1.5"
              >
                Practice Shorthand →
              </Link>

              <Link
                href="/shorthand/tests"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-sky-900/20 transition-all duration-150 flex items-center gap-1.5"
              >
                Take a Dictation Test →
              </Link>
            </div>
          </div>

          {/* Right Column: Local Progress Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Your Progress
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                  ⚡ {streak} Day Streak
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-200">
                    {completedCount === 0 ? "Beginner" : completedCount < 6 ? "Intermediate" : "Advanced"}
                  </span>
                  <span className="font-bold text-purple-400">{completionPercent}% Complete</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-sky-400 transition-all duration-500"
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  {completedCount} of 13 Curriculum levels completed
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-center">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 uppercase">Best Speed</span>
                  <div className="text-sm font-bold text-slate-100 mt-0.5">
                    {bestWpm > 0 ? `${bestWpm} WPM` : "Not tested"}
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 uppercase">Account Status</span>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">100% Free</div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center italic">
                Progress is saved locally in your browser. No account required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
