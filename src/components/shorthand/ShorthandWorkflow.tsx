"use client";

import Link from "next/link";

export function ShorthandWorkflow() {
  const steps = [
    {
      num: "01",
      title: "SPEECH",
      subtitle: "Listening to live or dictated speech (40 to 120+ WPM)",
      icon: "🎙️",
      color: "from-purple-500 to-indigo-500",
    },
    {
      num: "02",
      title: "SHORTHAND NOTES",
      subtitle: "Capturing phonetic strokes, vowels & phrases in steno pad",
      icon: "✍️",
      color: "from-sky-500 to-blue-500",
    },
    {
      num: "03",
      title: "TRANSCRIPTION",
      subtitle: "Reading back handwritten shorthand outlines accurately",
      icon: "📖",
      color: "from-amber-500 to-orange-500",
    },
    {
      num: "04",
      title: "TYPED DOCUMENT",
      subtitle: "Producing flawless final computer document at 40+ WPM",
      icon: "💻",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Workflow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((s, idx) => (
          <div
            key={s.num}
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 relative space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-xs font-black text-slate-400 tracking-wider">STEP {s.num}</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-sm">{s.title}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.subtitle}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-purple-400 text-lg font-bold">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Shorthand + Typing Connection Section */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-sky-950/30 border border-purple-500/30 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            The Complete Stenography Ecosystem
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-100">
            Shorthand is Only Half the Battle — Typing Completes It
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In official recruitment examinations (such as Delhi High Court SPA/PA or SSC Stenographer), writing shorthand outlines gets you through the dictation room. But your final rank is determined entirely on the computer screen: <strong>transcribing your shorthand notes accurately and typing them under strict time limits</strong>.
          </p>
        </div>

        {/* The Equation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-200 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">Listening</span>
          <span className="text-slate-400">+</span>
          <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">Shorthand Speed</span>
          <span className="text-slate-400">+</span>
          <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300">Note Reading</span>
          <span className="text-slate-400">+</span>
          <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">Computer Typing</span>
          <span className="text-slate-400">=</span>
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300">Qualified Stenographer</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/practice"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-900/30 transition-colors"
          >
            Practice Typing on TypeHindi →
          </Link>
          <Link
            href="/test"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            Take 5-Min Typing Test
          </Link>
        </div>
      </div>
    </div>
  );
}
