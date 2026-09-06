"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { ShorthandNav } from "./ShorthandNav";
import { ShorthandTeacher } from "./ShorthandTeacher";
import { ShorthandStroke } from "../../data/shorthand/types";
import { ShorthandLesson } from "../../data/shorthand/types";
import { shorthandLessons } from "../../data/shorthand/lessons";
import { markLessonComplete, getShorthandProgress } from "../../data/shorthand/storage";

interface LessonRunnerProps {
  lesson: ShorthandLesson;
}

export function LessonRunner({ lesson }: LessonRunnerProps) {
  const slug = lesson.slug;

  const [activeTab, setActiveTab] = useState<"learn" | "see" | "practice" | "test">("learn");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const progress = getShorthandProgress();
    setIsCompleted(progress.completedLessons.includes(slug));
  }, [slug]);

  const handleSelectQuizOption = (questionId: string, optionIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleFinishLesson = () => {
    markLessonComplete(slug);
    setIsCompleted(true);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />

      <main className="container-main py-8 space-y-6">
        {/* Lesson Breadcrumb & Title Header */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Link href="/shorthand/learn" className="text-xs text-purple-400 hover:underline">
                ← All Lessons
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Level {lesson.level}
              </span>
            </div>

            {isCompleted && (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 rounded-full">
                ✓ Completed
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-100">{lesson.title}</h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {lesson.summary}
          </p>

          {/* Interactive Steps Pipeline Tabs: LEARN -> SEE -> PRACTICE -> TEST */}
          <div className="grid grid-cols-4 gap-1.5 pt-3 border-t border-slate-800">
            {[
              { id: "learn", label: "1. LEARN", icon: "📖" },
              { id: "see", label: "2. SEE", icon: "👁️" },
              { id: "practice", label: "3. PRACTICE", icon: "✍️" },
              { id: "test", label: "4. TEST", icon: "📝" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id as any)}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === t.id
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                    : "bg-slate-950/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: LEARN (Theory & Official Rules) */}
        {activeTab === "learn" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-base font-bold text-slate-100">Overview</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lesson.learnContent.overview}
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Key Rules to Remember
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {lesson.learnContent.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {lesson.learnContent.rules.length > 0 && (
                <div className="space-y-3 pt-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    Detailed Pitman Rules
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {lesson.learnContent.rules.map((rule, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                        <h4 className="text-xs font-bold text-slate-200">{rule.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{rule.detail}</p>
                        {rule.tip && (
                          <p className="text-[11px] text-amber-400/90 pt-1">💡 Tip: {rule.tip}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveTab("see")}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
              >
                Proceed to See Examples (Step 2) →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: SEE (Demonstration Strokes & Visual Vectors) */}
        {activeTab === "see" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-base font-bold text-slate-100">
                Visual Stroke Demonstrations for this Lesson
              </h2>
              <p className="text-xs text-slate-400">
                Study the exact direction, angle, light/heavy line thickness, and example words for each sign.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {lesson.demonstrationStrokes.map((s) => (
                  <div key={s.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-purple-400">
                        <path
                          d={s.svgPath}
                          stroke="currentColor"
                          strokeWidth={s.weight === "heavy" ? 6 : 3}
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </div>

                    <div>
                      <div className="flex items-center justify-center gap-1.5">
                        <h3 className="font-bold text-slate-100 text-sm">{s.name}</h3>
                        <span className={`text-[9px] uppercase font-bold px-1.5 py-0.2 rounded ${
                          s.weight === "heavy" ? "bg-sky-500/20 text-sky-400" : "bg-purple-500/20 text-purple-400"
                        }`}>
                          {s.weight}
                        </span>
                      </div>
                      <p className="text-[11px] text-purple-300 mt-0.5">{s.sound}</p>
                      <p className="text-[10px] text-slate-400 mt-1">{s.angleDescription}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                      <strong>Examples:</strong> {s.examples.map((ex) => ex.word).join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveTab("learn")}
                className="text-xs text-slate-400 hover:text-white"
              >
                ← Back to Learn
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("practice")}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
              >
                Practice Drawing on Canvas (Step 3) →
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: PRACTICE (Interactive HTML5 Canvas) */}
        {activeTab === "practice" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-100">Interactive Canvas Practice</h2>
                  <p className="text-xs text-slate-400">
                    Use your mouse, finger, or stylus to trace and draw the target strokes.
                  </p>
                </div>
              </div>

              {/* Shorthand Teacher (Guided Practice System) */}
              <ShorthandTeacher
                key={lesson.demonstrationStrokes[0]?.id}
                initialStrokeId={lesson.demonstrationStrokes[0]?.id}
                showWordBuilding={true}
              />

              {/* Practice Drills */}
              <div className="space-y-3 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Lesson Practice Exercises
                </h3>
                <div className="space-y-2">
                  {lesson.exercises.map((ex) => (
                    <div key={ex.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <p className="text-xs font-semibold text-slate-200">Exercise: {ex.prompt}</p>
                      <p className="text-[11px] text-slate-400">💡 Hint: {ex.hint}</p>
                      <p className="text-[11px] text-emerald-400/90 pt-1">Rule Note: {ex.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveTab("see")}
                className="text-xs text-slate-400 hover:text-white"
              >
                ← Back to See
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("test")}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
              >
                Take Mini Quiz (Step 4) →
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: TEST (Mini Quiz & Completion) */}
        {activeTab === "test" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <div>
                <h2 className="text-base font-bold text-slate-100">Lesson Mini Quiz</h2>
                <p className="text-xs text-slate-400">
                  Verify your understanding of this lesson's rules and stroke characteristics.
                </p>
              </div>

              <div className="space-y-4">
                {lesson.miniQuiz.map((q, qIdx) => {
                  const selected = quizAnswers[q.id];
                  const hasAnswered = selected !== undefined;
                  const isCorrect = selected === q.correctIndex;

                  return (
                    <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <h3 className="text-xs font-bold text-slate-200">
                        Q{qIdx + 1}: {q.question}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isThisSelected = selected === optIdx;
                          let btnStyle = "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800";
                          if (hasAnswered) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = "bg-emerald-950/60 border-emerald-500/60 text-emerald-300";
                            } else if (isThisSelected) {
                              btnStyle = "bg-red-950/60 border-red-500/60 text-red-300";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleSelectQuizOption(q.id, optIdx)}
                              className={`p-3 rounded-lg border text-xs text-left transition-colors font-medium ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div className={`p-3 rounded-lg text-xs leading-relaxed border ${
                          isCorrect ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-300" : "bg-red-950/30 border-red-500/30 text-red-300"
                        }`}>
                          <strong>{isCorrect ? "Correct!" : "Incorrect."}</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Completion CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Completed all steps? Mark this lesson as finished to update your local streak.
                </div>
                <button
                  type="button"
                  onClick={handleFinishLesson}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-900/20 transition-all shrink-0"
                >
                  {isCompleted ? "✓ Lesson Completed" : "Mark as Completed ✓"}
                </button>
              </div>
            </div>

            {/* Navigation Footer to Next / Prev Lessons */}
            <div className="flex items-center justify-between pt-2">
              {lesson.prevLessonSlug ? (
                <Link
                  href={`/shorthand/lessons/${lesson.prevLessonSlug}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  ← Previous Lesson
                </Link>
              ) : <div />}

              {lesson.nextLessonSlug ? (
                <Link
                  href={`/shorthand/lessons/${lesson.nextLessonSlug}`}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                >
                  Next Lesson →
                </Link>
              ) : (
                <Link
                  href="/shorthand/learn"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                >
                  Complete Curriculum Hub →
                </Link>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
