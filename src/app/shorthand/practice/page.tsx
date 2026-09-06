"use client";

import { useState } from "react";
import { ShorthandNav } from "../../../components/shorthand/ShorthandNav";
import { ShorthandCanvas } from "../../../components/shorthand/ShorthandCanvas";
import { StrokeExplorer } from "../../../components/shorthand/StrokeExplorer";
import { ShorthandStroke } from "../../../data/shorthand/types";
import { pitmanStrokes } from "../../../data/shorthand/strokes";

export default function ShorthandPracticePage() {
  const [activeStroke, setActiveStroke] = useState<ShorthandStroke>(pitmanStrokes[0]);

  const handleSelectForPractice = (stroke: ShorthandStroke) => {
    setActiveStroke(stroke);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />

      <main className="container-main py-10 space-y-10">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Interactive Drawing Board
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
            Practice Shorthand Strokes on Canvas
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Practice drawing Pitman consonant outlines, vowel signs, and grammalogues with your mouse, finger, or stylus pen on our double-ruled steno guidelines.
          </p>
        </div>

        {/* Practice Canvas */}
        <ShorthandCanvas
          key={activeStroke.id}
          initialStroke={activeStroke}
          onStrokeSelected={(s) => setActiveStroke(s)}
        />

        {/* Character Explorer underneath */}
        <div className="pt-6 border-t border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Browse & Select
            </span>
            <h2 className="text-xl font-bold text-slate-100">
              Choose any Pitman Stroke to Practice Above
            </h2>
            <p className="text-xs text-slate-400">
              Click "Practice on Canvas" on any character card below to load it into the ghost guide.
            </p>
          </div>

          <StrokeExplorer onSelectForPractice={handleSelectForPractice} />
        </div>
      </main>
    </div>
  );
}
