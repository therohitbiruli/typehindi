"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { shorthandLessons } from "../../../data/shorthand/lessons";
import { getShorthandProgress } from "../../../data/shorthand/storage";

export default function ShorthandCurriculumPage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("All");

  useEffect(() => {
    const progress = getShorthandProgress();
    setCompletedSlugs(progress.completedLessons || []);
  }, []);

  const filteredLessons = shorthandLessons.filter((l) => {
    if (difficultyFilter === "All") return true;
    return l.difficulty === difficultyFilter;
  });

  const completionPercent = Math.round((completedSlugs.length / shorthandLessons.length) * 100);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />

      <main className="container-main py-10 space-y-8">
        {/* Header Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-[#0F172A] border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Pitman Shorthand Curriculum
            </span>
            <h1 className="text-3xl font-black text-slate-100">
              Structured 13-Level Learning Program
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Master English Pitman shorthand progressively: from pen holding and consonant angles to the 12-vowel scheme, continuous outline joining, phraseography, and timed stenography dictations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 shrink-0 text-center sm:text-left min-w-[200px]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-400">Curriculum Progress</span>
              <span className="font-bold text-purple-400">{completionPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-sky-400"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-400">
              {completedSlugs.length} of {shorthandLessons.length} lessons mastered
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {["All", "Beginner", "Intermediate", "Advanced"].map((dif) => (
              <button
                key={dif}
                type="button"
                onClick={() => setDifficultyFilter(dif)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  difficultyFilter === dif
                    ? "bg-purple-600 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800"
                }`}
              >
                {dif}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400">
            Showing {filteredLessons.length} lessons
          </span>
        </div>

        {/* Lessons Cards */}
        <div className="space-y-4">
          {filteredLessons.map((lesson) => {
            const isCompleted = completedSlugs.includes(lesson.slug);
            return (
              <div
                key={lesson.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  isCompleted
                    ? "bg-slate-900/60 border-emerald-500/40"
                    : "bg-slate-900 border-slate-800 hover:border-purple-500/40"
                }`}
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-black text-purple-400 uppercase tracking-wider">
                      Level {lesson.level}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      ⏱ {lesson.estimatedMinutes} mins
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      {lesson.difficulty}
                    </span>
                    {isCompleted && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                        ✓ Completed
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-100">{lesson.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    {lesson.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Concepts:</span>
                    {lesson.learnContent.keyPoints.slice(0, 2).map((kp, idx) => (
                      <span key={idx} className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {kp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <Link
                    href={`/shorthand/lessons/${lesson.slug}`}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 ${
                      isCompleted
                        ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                        : "bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-900/30"
                    }`}
                  >
                    {isCompleted ? "Review Lesson ↻" : "Start Lesson →"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
