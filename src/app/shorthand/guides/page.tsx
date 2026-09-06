"use client";

import { useState } from "react";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { ShorthandNotebook } from "../../../components/shorthand/ShorthandNotebook";
import { PrintablePracticeSheet } from "../../../components/shorthand/PrintablePracticeSheet";

export default function ShorthandGuidesPage() {
  const [activeTab, setActiveTab] = useState<"notebook" | "mistakes" | "printable">("notebook");

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
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />

      <main className="container-main py-10 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Resources & Tools
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
            Shorthand Reference Library & Personal Notebook
          </h1>
          <p className="text-xs text-slate-400">
            Study common pitfalls, manage your personal practice notebook, and generate printable ruled drill sheets.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          {[
            { id: "notebook", label: "Personal Notebook", icon: "📓" },
            { id: "mistakes", label: "Common Mistakes Guide", icon: "⚠️" },
            { id: "printable", label: "Printable Practice Sheets", icon: "🖨️" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === t.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {activeTab === "notebook" && <ShorthandNotebook />}

        {activeTab === "mistakes" && (
          <div className="space-y-4">
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-slate-100">5 Most Common Pitman Shorthand Mistakes</h2>
              <p className="text-xs text-slate-400">Avoid these fundamental beginner habits to build genuine speed.</p>
            </div>

            <div className="space-y-3">
              {commonMistakes.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-purple-300">{m.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "printable" && <PrintablePracticeSheet />}
      </main>
    </div>
  );
}
