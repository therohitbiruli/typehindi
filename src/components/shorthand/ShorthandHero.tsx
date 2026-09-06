"use client";

import Link from "next/link";

export function ShorthandHero() {
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

          {/* Right Column: Self-Paced Learning Tools Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Self-Paced Learning Tools
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                  100% Free
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <Link
                  href="/shorthand/learn"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800/80 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📚</span>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover:text-purple-300">13 Pitman Levels</h4>
                      <p className="text-[11px] text-slate-400">Step-by-step curriculum & rules</p>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-purple-400">→</span>
                </Link>

                <Link
                  href="/shorthand/practice"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800/80 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">✍️</span>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover:text-purple-300">Drawing Canvas</h4>
                      <p className="text-[11px] text-slate-400">Touch & stylus practice board</p>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-purple-400">→</span>
                </Link>

                <Link
                  href="/shorthand/dictation"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800/80 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">🎙️</span>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover:text-purple-300">Audio Dictation</h4>
                      <p className="text-[11px] text-slate-400">40 to 120 WPM paced speech</p>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-purple-400">→</span>
                </Link>

                <Link
                  href="/shorthand/tests"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800/80 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">💻</span>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover:text-purple-300">Exam Simulator</h4>
                      <p className="text-[11px] text-slate-400">Delhi High Court & SSC tests</p>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-purple-400">→</span>
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-800 text-center">
                <span className="text-[11px] text-slate-400">
                  Open access for independent learners • No account required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
