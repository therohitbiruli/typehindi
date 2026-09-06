"use client";

import { pitmanStrokes } from "../../data/shorthand/strokes";

export function PrintablePracticeSheet() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Web Controls */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 print:hidden">
        <div>
          <h4 className="text-xs font-bold text-slate-100">Printable Pitman Practice Sheets</h4>
          <p className="text-[11px] text-slate-400">
            Generate clean double-ruled stenography sheets for pen and pencil drills.
          </p>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
        >
          <span>🖨️</span> Print / Save PDF
        </button>
      </div>

      {/* Printable Sheet View */}
      <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl space-y-6 print:shadow-none print:p-0 print:m-0">
        <div className="border-b-2 border-slate-900 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black uppercase tracking-wider">TYPEHINDI.IN • PITMAN SHORTHAND PRACTICE SHEET</h2>
            <p className="text-xs text-slate-600">Daily Consonant & Vowel Ruled Drill Sheet</p>
          </div>
          <div className="text-right text-xs text-slate-500">
            Date: _______________ | Target Speed: ________ WPM
          </div>
        </div>

        {/* Practice Grid */}
        <div className="space-y-6">
          {pitmanStrokes.slice(0, 10).map((stroke) => (
            <div key={stroke.id} className="border-b border-slate-300 pb-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                <span>Stroke: {stroke.name} ({stroke.sound}) — Weight: {stroke.weight.toUpperCase()}</span>
                <span className="text-[11px] font-normal text-slate-600">{stroke.angleDescription}</span>
              </div>
              {/* Ruled lines for offline writing */}
              <div className="relative h-12 border-t border-sky-400/80 border-b border-sky-600 bg-sky-50/20">
                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-slate-300" />
                <span className="absolute left-2 top-2 text-[10px] text-slate-400">Trace:</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-400 text-center text-[10px] text-slate-500">
          Pitman Shorthand Exercise Material • Free educational resource from TypeHindi.in
        </div>
      </div>
    </div>
  );
}
