"use client";

import { useState, useMemo } from "react";
import { ShorthandStroke } from "../../data/shorthand/types";
import { pitmanStrokes } from "../../data/shorthand/strokes";

interface StrokeExplorerProps {
  onSelectForPractice?: (stroke: ShorthandStroke) => void;
}

export function StrokeExplorer({ onSelectForPractice }: StrokeExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalStroke, setActiveModalStroke] = useState<ShorthandStroke | null>(null);

  const categories = [
    { id: "all", label: "All Signs" },
    { id: "consonant-straight", label: "Straight Consonants" },
    { id: "consonant-curved", label: "Curved Consonants" },
    { id: "consonant-upward", label: "Upward Strokes" },
    { id: "vowel-first", label: "1st Place Vowels" },
    { id: "vowel-second", label: "2nd Place Vowels" },
    { id: "vowel-third", label: "3rd Place Vowels" },
    { id: "diphthong", label: "Diphthongs" },
    { id: "grammalogue", label: "Word-Signs" },
  ];

  const filteredStrokes = useMemo(() => {
    return pitmanStrokes.filter((stroke) => {
      const matchesCategory = selectedCategory === "all" || stroke.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        stroke.name.toLowerCase().includes(q) ||
        stroke.sound.toLowerCase().includes(q) ||
        stroke.description.toLowerCase().includes(q) ||
        stroke.examples.some((ex) => ex.word.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const speakSound = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search strokes, sounds, words (e.g. 'P', 'thin', 'May', 'Tie')..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          />
          <svg className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Total Badge */}
        <div className="text-xs text-slate-400 shrink-0">
          Showing <strong className="text-purple-300 font-semibold">{filteredStrokes.length}</strong> verified Pitman signs
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                : "bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Strokes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredStrokes.map((stroke) => (
          <div
            key={stroke.id}
            onClick={() => setActiveModalStroke(stroke)}
            className="group cursor-pointer rounded-xl bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/50 p-4 transition-all duration-150 flex flex-col items-center justify-between text-center space-y-3 relative hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-950/20"
          >
            {/* Stroke SVG Preview */}
            <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-center group-hover:border-purple-500/30 transition-colors">
              <svg viewBox="0 0 100 100" className="w-12 h-12 stroke-purple-400 group-hover:stroke-purple-300">
                <path
                  d={stroke.svgPath}
                  stroke="currentColor"
                  strokeWidth={stroke.weight === "heavy" ? 6 : 3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Meta */}
            <div>
              <div className="flex items-center justify-center gap-1.5">
                <h4 className="font-bold text-slate-100 text-sm">{stroke.name}</h4>
                <span className={`text-[9px] uppercase font-bold px-1.5 py-0.2 rounded ${
                  stroke.weight === "heavy"
                    ? "bg-sky-500/20 text-sky-300"
                    : "bg-purple-500/20 text-purple-300"
                }`}>
                  {stroke.weight}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{stroke.sound}</p>
            </div>

            {/* Quick Action */}
            <span className="text-[10px] text-purple-400 group-hover:text-purple-300 font-medium">
              View Rules & Audio →
            </span>
          </div>
        ))}
      </div>

      {filteredStrokes.length === 0 && (
        <div className="text-center py-12 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-sm text-slate-400">No shorthand strokes match "{searchQuery}".</p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
            className="mt-3 text-xs text-purple-400 hover:underline"
          >
            Reset search filters
          </button>
        </div>
      )}

      {/* Stroke Details Modal */}
      {activeModalStroke && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-9 h-9 stroke-purple-400">
                    <path
                      d={activeModalStroke.svgPath}
                      stroke="currentColor"
                      strokeWidth={activeModalStroke.weight === "heavy" ? 6 : 3}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-100">{activeModalStroke.name}</h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      activeModalStroke.weight === "heavy"
                        ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                        : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    }`}>
                      {activeModalStroke.weight}
                    </span>
                  </div>
                  <p className="text-xs text-purple-300">{activeModalStroke.sound}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalStroke(null)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Description & Pitman Rule */}
            <div className="space-y-3 text-xs">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 space-y-1.5">
                <div className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                  Formation & Angle
                </div>
                <p className="text-slate-200">{activeModalStroke.description}</p>
                <p className="text-slate-400">{activeModalStroke.angleDescription}</p>
              </div>

              <div className="bg-purple-950/20 p-3.5 rounded-xl border border-purple-500/30 space-y-1">
                <div className="text-purple-300 font-semibold uppercase text-[10px] tracking-wider">
                  Pitman Rule
                </div>
                <p className="text-purple-200">{activeModalStroke.pitmanRule}</p>
              </div>

              {/* Example Words */}
              <div>
                <div className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider mb-2">
                  Example Words & Transcriptions
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {activeModalStroke.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-slate-100 text-xs">{ex.word}</span>
                        <p className="text-[10px] text-slate-400">{ex.transcription}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => speakSound(ex.word)}
                        title="Listen to pronunciation"
                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px]"
                      >
                        🔊
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => speakSound(activeModalStroke.sound)}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>🔊</span> Listen Sound
              </button>
              {onSelectForPractice && (
                <button
                  type="button"
                  onClick={() => {
                    onSelectForPractice(activeModalStroke);
                    setActiveModalStroke(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                >
                  Practice on Canvas →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
