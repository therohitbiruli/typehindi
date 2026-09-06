"use client";

import { useState } from "react";
import Link from "next/link";

export function ShorthandSpeedTrainer() {
  const [activeSpeed, setActiveSpeed] = useState(80);

  const speedMilestones = [
    {
      wpm: 60,
      title: "Foundation Speed",
      desc: "Master smooth consonant outlines, 1st/2nd/3rd place vowels, and elementary grammalogues without hesitation.",
      targetExam: "Beginner Benchmark",
      badge: "Level 1",
    },
    {
      wpm: 80,
      title: "Junior Stenographer",
      desc: "Required for SSC Stenographer Grade D and district courts. Focus on phraseography and fast page turning.",
      targetExam: "SSC Steno Grade D",
      badge: "Intermediate",
    },
    {
      wpm: 100,
      title: "Personal Assistant",
      desc: "Demanded by High Courts (DHC PA) and central ministries. Requires automated grammalogues and swift transcription.",
      targetExam: "Delhi High Court PA / SSC Grade C",
      badge: "Advanced",
    },
    {
      wpm: 110,
      title: "Senior Personal Assistant",
      desc: "Demanding high court speed benchmark (550 words in 5 minutes with ≤5% allowable error). Requires flawless legal phraseography.",
      targetExam: "Delhi High Court SPA",
      badge: "Expert",
    },
    {
      wpm: 120,
      title: "Parliamentary Reporter",
      desc: "Top echelon of verbatim stenography. Requires advanced intersections and specialized phrase contractions.",
      targetExam: "Parliament / Assembly Reporter",
      badge: "Master",
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {speedMilestones.map((m) => (
          <button
            key={m.wpm}
            type="button"
            onClick={() => setActiveSpeed(m.wpm)}
            className={`p-4 rounded-xl text-left border transition-all ${
              activeSpeed === m.wpm
                ? "bg-purple-900/40 border-purple-500 shadow-lg shadow-purple-950/30"
                : "bg-slate-900/80 hover:bg-slate-800 border-slate-800"
            }`}
          >
            <span className="text-[10px] uppercase font-bold text-purple-400">{m.badge}</span>
            <div className="text-xl font-black text-slate-100 mt-0.5">{m.wpm} WPM</div>
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{m.title}</p>
          </button>
        ))}
      </div>

      {/* Selected Speed Details */}
      {(() => {
        const item = speedMilestones.find((m) => m.wpm === activeSpeed) || speedMilestones[0];
        return (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Target Speed Milestone
                </span>
                <h3 className="text-xl font-black text-slate-100">
                  {item.wpm} WPM — {item.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold self-start sm:self-auto">
                Target: {item.targetExam}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`/shorthand/dictation?speed=${item.wpm}`}
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
              >
                Launch {item.wpm} WPM Dictation Drill →
              </Link>
              <Link
                href="/shorthand/tests"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                Simulate Full Examination
              </Link>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
