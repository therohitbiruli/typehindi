"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { DictationPlayer } from "../../../components/shorthand/DictationPlayer";
import { ShorthandSpeedTrainer } from "../../../components/shorthand/ShorthandSpeedTrainer";
import { dictationPassages } from "../../../data/shorthand/dictations";

function DictationPlayerWrapper() {
  const searchParams = useSearchParams();
  const passageId = searchParams.get("passage");
  const initialPassage = dictationPassages.find((p) => p.id === passageId) || dictationPassages[0];

  return <DictationPlayer initialPassage={initialPassage} />;
}

export default function ShorthandDictationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070B14] text-[#17243A] dark:text-slate-100">
      <ShorthandNav />
      <main className="container-main py-10 space-y-12">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Audio Dictation Studio
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#17243A] dark:text-slate-100">
            Shorthand Audio Dictation Practice
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 font-medium leading-relaxed">
            Listen to spoken English passages at 40 to 120 WPM. Write your shorthand outlines on paper, and then test your transcription on computer.
          </p>
        </div>

        {/* Dictation Player inside Suspense */}
        <Suspense fallback={<div className="text-center py-12 text-[#475569] dark:text-slate-400 font-medium">Loading audio player...</div>}>
          <DictationPlayerWrapper />
        </Suspense>

        {/* Speed Milestones Ladder directly server-rendered */}
        <div className="pt-6 border-t border-[#E2E8F0] dark:border-slate-800 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Speed Ladder
            </span>
            <h2 className="text-xl font-bold text-[#17243A] dark:text-slate-100">
              Progressive Speed Training Benchmarks
            </h2>
            <p className="text-xs text-[#475569] dark:text-slate-300 font-medium">
              Target speed milestones required by government stenography recruiting bodies.
            </p>
          </div>
          <ShorthandSpeedTrainer />
        </div>
      </main>
    </div>
  );
}
