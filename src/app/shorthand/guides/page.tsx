"use client";

import { useState } from "react";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { ShorthandNotebook } from "../../../components/shorthand/ShorthandNotebook";
import { PrintablePracticeSheet } from "../../../components/shorthand/PrintablePracticeSheet";

export default function ShorthandGuidesPage() {
  const [activeTool, setActiveTool] = useState<"notebook" | "printable">("notebook");

  const commonMistakes = [
    {
      title: "1. Incorrect Stroke Proportion & Line Thickness",
      desc: "Pitman relies strictly on light/heavy line contrast. If a heavy stroke (B, D, J) looks identical to a light stroke (P, T, CH), reading your notes back will be nearly impossible. Use a flexible nib fountain pen or soft 2B pencil."
    },
    {
      title: "2. Reversing Downward & Upward Directions",
      desc: "Chay is drawn downwards at 60°; Ray is drawn upwards at 30°. Drawing Chay upwards alters the geometric relationship with following strokes and destroys legibility."
    },
    {
      title: "3. Lifting Pen Halfway Through Word Outlines",
      desc: "Never lift the pen to insert a vowel in the middle of writing consonants. Draft the complete consonant outline first without pausing; then insert vowels if required."
    },
    {
      title: "4. Neglecting Position Writing",
      desc: "Words with 1st-place vowels must be placed above the line; 2nd-place on the line; 3rd-place through the line. Position writing allows fast reading even when vowels are omitted."
    },
    {
      title: "5. Writing Every Single Word Individually",
      desc: "High speeds of 80 to 120 WPM cannot be achieved word-by-word. Stenographers master phraseography ('of the', 'I am', 'to be') to capture multiple words in a single fluid gesture."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#070B14] text-gray-900 dark:text-slate-100">
      <ShorthandNav />

      <main className="container-main py-10 space-y-12">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Resources & Tools
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-slate-100">
            Shorthand Reference Library & Personal Notebook
          </h1>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            Study common pitfalls, manage your personal practice notebook, and generate printable ruled drill sheets.
          </p>
        </div>

        {/* Permanent Common Mistakes SEO Guide */}
        <section className="space-y-6 pt-4 border-t border-gray-200 dark:border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Exam Preparation Guide
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-slate-100 mt-1">
              5 Most Common Pitman Shorthand Mistakes
            </h2>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
              Avoid these fundamental beginner habits to build genuine transcription speed and pass SSC/High Court skill tests.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {commonMistakes.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-purple-700 dark:text-purple-400">{m.title}</h3>
                <p className="text-xs text-gray-600 dark:text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Practice Tools Section */}
        <section className="space-y-6 pt-6 border-t border-gray-200 dark:border-slate-800">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">
                Interactive Notebook & Printable Sheets
              </h2>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                Save your custom word outlines locally or generate lined practice sheets for pen drills.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTool("notebook")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTool === "notebook"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                    : "bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-slate-400 hover:text-white border border-gray-200 dark:border-slate-800"
                }`}
              >
                <span>📓</span>
                <span>Personal Notebook</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTool("printable")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTool === "printable"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                    : "bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-slate-400 hover:text-white border border-gray-200 dark:border-slate-800"
                }`}
              >
                <span>🖨️</span>
                <span>Printable Practice Sheets</span>
              </button>
            </div>
          </div>

          {activeTool === "notebook" && <ShorthandNotebook />}
          {activeTool === "printable" && <PrintablePracticeSheet />}
        </section>
      </main>
    </div>
  );
}
