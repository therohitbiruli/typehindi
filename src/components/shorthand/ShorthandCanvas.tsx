"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ShorthandStroke } from "../../data/shorthand/types";
import { pitmanStrokes } from "../../data/shorthand/strokes";

interface Point {
  x: number;
  y: number;
}

interface StrokePath {
  points: Point[];
  weight: "light" | "heavy";
  color: string;
}

interface ShorthandCanvasProps {
  initialStroke?: ShorthandStroke;
  onStrokeSelected?: (stroke: ShorthandStroke) => void;
  showSelector?: boolean;
}

export function ShorthandCanvas({
  initialStroke,
  onStrokeSelected,
  showSelector = true
}: ShorthandCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [paths, setPaths] = useState<StrokePath[]>([]);
  const [redoPaths, setRedoPaths] = useState<StrokePath[]>([]);
  const [activeWeight, setActiveWeight] = useState<"light" | "heavy">("light");
  const [showGuidelines, setShowGuidelines] = useState(true);
  const [showGhostGuide, setShowGhostGuide] = useState(true);
  const [selectedStroke, setSelectedStroke] = useState<ShorthandStroke>(
    initialStroke || pitmanStrokes[0]
  );
  const [comparisonModal, setComparisonModal] = useState(false);

  // Redraw canvas whenever paths, guidelines, or ghost guide updates
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background
    ctx.fillStyle = "#0F172A";
    ctx.fillRect(0, 0, width, height);

    // Steno Ruled Guidelines
    if (showGuidelines) {
      const centerY = height * 0.55; // main baseline
      const topY = centerY - 50; // top limit
      const bottomY = centerY + 50; // through-line limit

      // Baseline (solid steno blue line)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.moveTo(20, centerY);
      ctx.lineTo(width - 20, centerY);
      ctx.stroke();

      // Top guide (dashed)
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
      ctx.lineWidth = 1;
      ctx.moveTo(20, topY);
      ctx.lineTo(width - 20, topY);
      ctx.stroke();

      // Through-line guide (dashed)
      ctx.beginPath();
      ctx.moveTo(20, bottomY);
      ctx.lineTo(width - 20, bottomY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Position labels
      ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
      ctx.font = "10px sans-serif";
      ctx.fillText("1st Position (Above)", 24, topY - 4);
      ctx.fillText("2nd Position (Baseline)", 24, centerY - 4);
      ctx.fillText("3rd Position (Through)", 24, bottomY + 14);
    }

    // Ghost target stroke guide (drawn in faint purple)
    if (showGhostGuide && selectedStroke) {
      ctx.save();
      // Center SVG path into canvas
      const scale = 2.4;
      const offsetX = (width - 100 * scale) / 2;
      const offsetY = (height - 100 * scale) / 2 + 10;
      ctx.translate(offsetX, offsetY);
      ctx.scale(scale, scale);

      const path2D = new Path2D(selectedStroke.svgPath);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.25)";
      ctx.lineWidth = selectedStroke.weight === "heavy" ? 7 : 3.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke(path2D);
      ctx.restore();
    }

    // Render recorded user paths
    const allPaths = isDrawing && currentPath.length > 0
      ? [...paths, { points: currentPath, weight: activeWeight, color: "#E2E8F0" }]
      : paths;

    for (const p of allPaths) {
      if (p.points.length < 2) continue;
      ctx.beginPath();
      ctx.strokeStyle = p.weight === "heavy" ? "#38BDF8" : "#A855F7";
      ctx.lineWidth = p.weight === "heavy" ? 6 : 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.moveTo(p.points[0].x, p.points[0].y);
      for (let i = 1; i < p.points.length; i++) {
        ctx.lineTo(p.points[i].x, p.points[i].y);
      }
      ctx.stroke();
    }
  }, [paths, currentPath, isDrawing, activeWeight, showGuidelines, showGhostGuide, selectedStroke]);

  // Adjust canvas resolution for sharp retina display
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    redraw();
  }, [redraw]);

  // Pointer/Touch coordinates
  const getCoordinates = (e: React.MouseEvent | React.TouchEvent | React.PointerEvent): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      if (e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  // Drawing event handlers
  const handleStart = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const pt = getCoordinates(e);
    if (!pt) return;
    setIsDrawing(true);
    setCurrentPath([pt]);
  };

  const handleMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pt = getCoordinates(e);
    if (!pt) return;
    setCurrentPath((prev) => [...prev, pt]);
  };

  const handleEnd = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    setIsDrawing(false);
    if (currentPath.length > 1) {
      const newPath: StrokePath = {
        points: currentPath,
        weight: activeWeight,
        color: activeWeight === "heavy" ? "#38BDF8" : "#A855F7"
      };
      setPaths((prev) => [...prev, newPath]);
      setRedoPaths([]); // clear redo stack on new action
    }
    setCurrentPath([]);
  };

  const handleClear = () => {
    setPaths([]);
    setRedoPaths([]);
    setCurrentPath([]);
  };

  const handleUndo = () => {
    if (paths.length === 0) return;
    const last = paths[paths.length - 1];
    setPaths((prev) => prev.slice(0, prev.length - 1));
    setRedoPaths((prev) => [...prev, last]);
  };

  const handleRedo = () => {
    if (redoPaths.length === 0) return;
    const last = redoPaths[redoPaths.length - 1];
    setRedoPaths((prev) => prev.slice(0, prev.length - 1));
    setPaths((prev) => [...prev, last]);
  };

  const handleSelectStroke = (stroke: ShorthandStroke) => {
    setSelectedStroke(stroke);
    setActiveWeight(stroke.weight);
    if (onStrokeSelected) onStrokeSelected(stroke);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
      {/* Top Bar / Stroke Selector & Controls */}
      <div className="p-4 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        {/* Active Target Stroke Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-lg">
            {selectedStroke.name}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-100">
                Stroke {selectedStroke.name} ({selectedStroke.sound})
              </h3>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                selectedStroke.weight === "heavy"
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              }`}>
                {selectedStroke.weight} stroke
              </span>
            </div>
            <p className="text-xs text-slate-400">{selectedStroke.angleDescription}</p>
          </div>
        </div>

        {/* Quick Canvas Actions */}
        <div className="flex items-center gap-2">
          {/* Light / Heavy Weight Toggle */}
          <div className="flex items-center p-1 rounded-lg bg-slate-800 border border-slate-700/60 text-xs">
            <button
              type="button"
              onClick={() => setActiveWeight("light")}
              className={`px-2.5 py-1 rounded transition-colors font-medium ${
                activeWeight === "light"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Light (Thin)
            </button>
            <button
              type="button"
              onClick={() => setActiveWeight("heavy")}
              className={`px-2.5 py-1 rounded transition-colors font-medium ${
                activeWeight === "heavy"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Heavy (Thick)
            </button>
          </div>

          {/* Toggle Guides */}
          <button
            type="button"
            onClick={() => setShowGuidelines((prev) => !prev)}
            title="Toggle Ruled Steno Guidelines"
            className={`p-2 rounded-lg border text-xs transition-colors ${
              showGuidelines
                ? "bg-slate-800 text-sky-400 border-sky-500/40"
                : "bg-slate-900 text-slate-400 border-slate-800"
            }`}
          >
            Guidelines
          </button>

          {/* Toggle Ghost Reference */}
          <button
            type="button"
            onClick={() => setShowGhostGuide((prev) => !prev)}
            title="Toggle Ghost Stroke Outline"
            className={`p-2 rounded-lg border text-xs transition-colors ${
              showGhostGuide
                ? "bg-slate-800 text-purple-400 border-purple-500/40"
                : "bg-slate-900 text-slate-400 border-slate-800"
            }`}
          >
            Ghost Guide
          </button>

          {/* Undo */}
          <button
            type="button"
            onClick={handleUndo}
            disabled={paths.length === 0}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 transition-colors"
            title="Undo"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a5 5 0 015 5v2m-15-7l4-4m-4 4l4 4" />
            </svg>
          </button>

          {/* Redo */}
          <button
            type="button"
            onClick={handleRedo}
            disabled={redoPaths.length === 0}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 transition-colors"
            title="Redo"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a5 5 0 00-5 5v2m15-7l-4-4m4 4l-4 4" />
            </svg>
          </button>

          {/* Clear */}
          <button
            type="button"
            onClick={handleClear}
            className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Target Stroke Quick Carousel (if enabled) */}
      {showSelector && (
        <div className="px-4 py-2 bg-slate-950/40 border-b border-slate-800/60 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-2 shrink-0">
            Select Stroke:
          </span>
          {pitmanStrokes.slice(0, 16).map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleSelectStroke(s)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all shrink-0 ${
                selectedStroke.id === s.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                  : "bg-slate-800/70 hover:bg-slate-800 text-slate-300 border border-slate-700/50"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}

      {/* Interactive HTML5 Canvas */}
      <div className="relative w-full h-[320px] sm:h-[380px] bg-[#0F172A] touch-none cursor-crosshair select-none">
        <canvas
          ref={canvasRef}
          onPointerDown={handleStart}
          onPointerMove={handleMove}
          onPointerUp={handleEnd}
          onPointerCancel={handleEnd}
          className="w-full h-full block"
        />

        {/* Practice Tip overlay on initial empty canvas */}
        {paths.length === 0 && !isDrawing && (
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center p-4">
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 px-4 py-3 rounded-xl max-w-sm">
              <p className="text-xs text-slate-300 font-medium">
                Draw with your mouse, finger, or stylus pen.
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Notice the ghost guide for <strong className="text-purple-300">{selectedStroke.name}</strong>. Aim for uniform slant and consistent stroke pressure!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Assistive Verification Bar */}
      <div className="p-4 bg-slate-950/70 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            Pitman Rule: <strong className="text-slate-200">{selectedStroke.pitmanRule}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setComparisonModal(true)}
            className="px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 font-medium transition-colors"
          >
            Compare My Stroke →
          </button>
        </div>
      </div>

      {/* Manual Assistive Comparison Modal */}
      {comparisonModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100">
                Self-Assessment: Stroke {selectedStroke.name}
              </h3>
              <button
                type="button"
                onClick={() => setComparisonModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              {/* Reference */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                  Official Standard
                </span>
                <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-purple-400">
                  <path
                    d={selectedStroke.svgPath}
                    stroke="currentColor"
                    strokeWidth={selectedStroke.weight === "heavy" ? 6 : 3}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="text-[11px] text-slate-400 mt-2">
                  Angle: {selectedStroke.angleDescription}
                </span>
              </div>

              {/* Your Strokes */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                  Your Drawn Strokes
                </span>
                <div className="text-2xl font-bold text-slate-200">
                  {paths.length} {paths.length === 1 ? "stroke" : "strokes"}
                </div>
                <span className="text-[11px] text-slate-400 mt-2">
                  Weight: {activeWeight}
                </span>
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="space-y-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300">
              <h4 className="font-semibold text-slate-200 mb-1">Check your drawing against these 3 rules:</h4>
              <p>✓ <strong>Direction:</strong> Did you pull strictly {selectedStroke.direction} without reversing?</p>
              <p>✓ <strong>Weight:</strong> Is the line {selectedStroke.weight === "heavy" ? "firm and thickened" : "light and thin"}?</p>
              <p>✓ <strong>Termination:</strong> Does the stroke stop exactly on the line of writing?</p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setComparisonModal(false)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
              >
                Continue Practice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
