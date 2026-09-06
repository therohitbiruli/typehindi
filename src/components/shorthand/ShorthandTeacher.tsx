"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ShorthandStroke, StrokeAnalysisResult, StrokeMasteryRecord } from "../../data/shorthand/types";
import { pitmanStrokes } from "../../data/shorthand/strokes";
import { WordPracticeSection } from "./WordPracticeSection";

interface Point {
  x: number;
  y: number;
}

interface StrokePath {
  points: Point[];
  weight: "light" | "heavy";
}

interface ShorthandTeacherProps {
  initialStrokeId?: string;
  onStrokeChange?: (stroke: ShorthandStroke) => void;
  showWordBuilding?: boolean;
}

export function ShorthandTeacher({
  initialStrokeId = "stroke-p",
  onStrokeChange,
  showWordBuilding = true,
}: ShorthandTeacherProps) {
  // Current Stroke Selection & Index
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = pitmanStrokes.findIndex((s) => s.id === initialStrokeId);
    return idx >= 0 ? idx : 0;
  });

  const stroke = pitmanStrokes[currentIndex] || pitmanStrokes[0];

  // Learning Pipeline Step: 'learn' | 'watch' | 'try' | 'compare' | 'words'
  const [activeStep, setActiveStep] = useState<"learn" | "watch" | "try" | "compare" | "words">("learn");

  // Practice Modes: 'guided' | 'assisted' | 'free' | 'test'
  const [practiceMode, setPracticeMode] = useState<"guided" | "assisted" | "free" | "test">("guided");

  // Canvas States
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [paths, setPaths] = useState<StrokePath[]>([]);
  const [redoPaths, setRedoPaths] = useState<StrokePath[]>([]);
  const [userWeight, setUserWeight] = useState<"light" | "heavy">(stroke.weight);

  // Animation States for "Show Me"
  const [isAnimating, setIsAnimating] = useState(false);
  const animProgressRef = useRef<number>(0);
  const animFrameId = useRef<number | null>(null);

  // Analysis & Mastery
  const [analysisResult, setAnalysisResult] = useState<StrokeAnalysisResult | null>(null);
  const [mastery, setMastery] = useState<StrokeMasteryRecord>({
    strokeId: stroke.id,
    attemptsCount: 0,
    bestScore: 0,
    lastPracticed: "",
  });

  // Sync stroke change
  useEffect(() => {
    setUserWeight(stroke.weight);
    setPaths([]);
    setRedoPaths([]);
    setCurrentPath([]);
    setAnalysisResult(null);
    setIsAnimating(false);
    if (animFrameId.current) cancelAnimationFrame(animFrameId.current);

    // Load mastery from localStorage
    try {
      const raw = localStorage.getItem(`typehindi_mastery_${stroke.id}`);
      if (raw) {
        setMastery(JSON.parse(raw));
      } else {
        setMastery({
          strokeId: stroke.id,
          attemptsCount: 0,
          bestScore: 0,
          lastPracticed: "",
        });
      }
    } catch (_) {}

    if (onStrokeChange) onStrokeChange(stroke);
  }, [stroke, onStrokeChange]);

  // Redraw Canvas
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background
    ctx.fillStyle = "#0F172A";
    ctx.fillRect(0, 0, width, height);

    // Ruled Steno Baseline (Solid Cyan) & Guidelines (Dashed)
    const centerY = height * 0.55;
    const topY = centerY - 55;
    const bottomY = centerY + 55;

    // Top position guide (1st place)
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
    ctx.lineWidth = 1;
    ctx.moveTo(20, topY);
    ctx.lineTo(width - 20, topY);
    ctx.stroke();

    // Baseline (2nd place - Writing line)
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.moveTo(20, centerY);
    ctx.lineTo(width - 20, centerY);
    ctx.stroke();

    // Through-line guide (3rd place)
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
    ctx.lineWidth = 1;
    ctx.moveTo(20, bottomY);
    ctx.lineTo(width - 20, bottomY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Position Labels
    ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
    ctx.font = "10px sans-serif";
    ctx.fillText("1st Position (Above Line)", 25, topY - 4);
    ctx.fillText("2nd Position (Baseline)", 25, centerY - 4);
    ctx.fillText("3rd Position (Through Line)", 25, bottomY + 14);

    const scale = 2.4;
    const offsetX = (width - 100 * scale) / 2;
    const offsetY = (height - 100 * scale) / 2 + 10;

    // Ghost / Guided Overlays
    if ((practiceMode === "guided" || practiceMode === "assisted") && !isAnimating) {
      ctx.save();
      ctx.translate(offsetX, offsetY);
      ctx.scale(scale, scale);

      const path2D = new Path2D(stroke.svgPath);
      ctx.strokeStyle =
        practiceMode === "guided"
          ? "rgba(168, 85, 247, 0.35)"
          : "rgba(148, 163, 184, 0.2)";
      ctx.lineWidth = stroke.weight === "heavy" ? 7 : 3.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke(path2D);
      ctx.restore();

      // Guided Mode: Start Marker & Direction Arrow
      if (practiceMode === "guided" && stroke.startPoint && stroke.endPoint) {
        const startX = offsetX + stroke.startPoint.x * scale;
        const startY = offsetY + stroke.startPoint.y * scale;
        const endX = offsetX + stroke.endPoint.x * scale;
        const endY = offsetY + stroke.endPoint.y * scale;

        // Glowing Start Dot
        ctx.beginPath();
        ctx.arc(startX, startY, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#10B981"; // Emerald start
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = "#10B981";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("START", startX + 10, startY + 3);

        // Direction Arrow in middle
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        ctx.fillStyle = "#A855F7";
        ctx.font = "14px sans-serif";
        ctx.fillText(stroke.direction === "downward" ? "↓" : stroke.direction === "upward" ? "↑" : "→", midX + 12, midY + 4);
      }
    }

    // Animated Demonstration Drawing
    if (isAnimating && stroke.startPoint && stroke.endPoint) {
      const p = animProgressRef.current; // 0 to 1
      const startX = offsetX + stroke.startPoint.x * scale;
      const startY = offsetY + stroke.startPoint.y * scale;
      const endX = offsetX + stroke.endPoint.x * scale;
      const endY = offsetY + stroke.endPoint.y * scale;

      const currentX = startX + (endX - startX) * p;
      const currentY = startY + (endY - startY) * p;

      // Start Marker
      ctx.beginPath();
      ctx.arc(startX, startY, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#10B981";
      ctx.fill();

      // Progressive Line
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(currentX, currentY);
      ctx.strokeStyle = stroke.weight === "heavy" ? "#38BDF8" : "#A855F7";
      ctx.lineWidth = stroke.weight === "heavy" ? 7 : 3.5;
      ctx.lineCap = "round";
      ctx.stroke();

      // Moving Pen Tip Marker
      ctx.beginPath();
      ctx.arc(currentX, currentY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#F59E0B"; // Amber moving tip
      ctx.fill();
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Render User Paths
    const allPaths =
      isDrawing && currentPath.length > 0
        ? [...paths, { points: currentPath, weight: userWeight }]
        : paths;

    for (const p of allPaths) {
      if (p.points.length < 2) continue;
      ctx.beginPath();
      ctx.strokeStyle = p.weight === "heavy" ? "#38BDF8" : "#C084FC";
      ctx.lineWidth = p.weight === "heavy" ? 6.5 : 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.moveTo(p.points[0].x, p.points[0].y);
      for (let i = 1; i < p.points.length; i++) {
        ctx.lineTo(p.points[i].x, p.points[i].y);
      }
      ctx.stroke();
    }
  }, [stroke, practiceMode, paths, currentPath, isDrawing, userWeight, isAnimating]);

  // Adjust canvas resolution on mount & resize
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
    redrawCanvas();
  }, [redrawCanvas]);

  // Animate "Show Me"
  const startShowMeAnimation = () => {
    setActiveStep("watch");
    setIsAnimating(true);
    animProgressRef.current = 0;

    let startTimestamp: number | null = null;
    const duration = 1200; // ms for full stroke

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(1, elapsed / duration);
      animProgressRef.current = progress;
      redrawCanvas();

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(step);
      } else {
        setIsAnimating(false);
        setActiveStep("try");
      }
    };

    animFrameId.current = requestAnimationFrame(step);
  };

  // Audio Pronunciation
  const speakSound = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  // Touch / Pointer Coordinates
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const pt = getCoordinates(e);
    if (!pt) return;
    setIsDrawing(true);
    setCurrentPath([pt]);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pt = getCoordinates(e);
    if (!pt) return;
    setCurrentPath((prev) => [...prev, pt]);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    setIsDrawing(false);
    if (currentPath.length > 1) {
      const newPath: StrokePath = { points: currentPath, weight: userWeight };
      setPaths((prev) => [...prev, newPath]);
      setRedoPaths([]);
    }
    setCurrentPath([]);
  };

  // Canvas Actions
  const handleClear = () => {
    setPaths([]);
    setRedoPaths([]);
    setCurrentPath([]);
    setAnalysisResult(null);
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

  // Intelligent Stroke Analysis Engine
  const evaluateDrawnStroke = () => {
    if (paths.length === 0) {
      alert("Please draw the stroke on the canvas first before evaluating.");
      return;
    }

    const firstPath = paths[0].points;
    const startPt = firstPath[0];
    const endPt = firstPath[firstPath.length - 1];

    const dx = endPt.x - startPt.x;
    const dy = endPt.y - startPt.y;
    const length = Math.sqrt(dx * dx + dy * dy);

    // Calculate angle in degrees relative to horizontal baseline
    let angle = Math.atan2(-dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;

    // Normalizing downward angles (since screen y is inverted)
    const strokeAngle = Math.round(Math.atan2(Math.abs(dy), Math.abs(dx)) * (180 / Math.PI));

    // 1. Direction Check
    let directionStatus: StrokeAnalysisResult["directionStatus"] = "good";
    let directionMessage = "✓ Correct drawing direction";
    if (stroke.direction === "downward" && dy < -5) {
      directionStatus = "reversed";
      directionMessage = "⚠ Reversed! This stroke must be drawn DOWNWARD from top to bottom.";
    } else if (stroke.direction === "upward" && dy > 5) {
      directionStatus = "reversed";
      directionMessage = "⚠ Reversed! This stroke must be drawn UPWARD from the baseline.";
    } else if (stroke.direction === "horizontal" && dx < -5) {
      directionStatus = "reversed";
      directionMessage = "⚠ Reversed! Horizontal strokes must be drawn left-to-right.";
    }

    // 2. Angle Check
    let angleStatus: StrokeAnalysisResult["angleStatus"] = "good";
    let angleMessage = "✓ Good angle";
    const expected = stroke.targetAngle !== undefined ? stroke.targetAngle : 90;
    const angleDiff = Math.abs(strokeAngle - (expected === 120 ? 60 : expected));

    if (expected === 90 && (strokeAngle < 75 || strokeAngle > 105)) {
      angleStatus = strokeAngle < 75 ? "too-shallow" : "too-steep";
      angleMessage = `⚠ Angle is ${strokeAngle}°. Keep it vertical at 90°.`;
    } else if (angleDiff > 20) {
      angleStatus = strokeAngle < expected ? "too-shallow" : "too-steep";
      angleMessage = `⚠ Slant differs from standard (${stroke.angleDescription}).`;
    }

    // 3. Length Check (Standard steno stroke: ~50px to 110px on canvas)
    let lengthStatus: StrokeAnalysisResult["lengthStatus"] = "good";
    let lengthMessage = "✓ Standard steno proportion";
    if (length < 35) {
      lengthStatus = "too-short";
      lengthMessage = "⚠ Stroke is too short. Standard steno strokes are about 1/6 inch.";
    } else if (length > 130) {
      lengthStatus = "too-long";
      lengthMessage = "⚠ Stroke is too long. Keep outlines compact for fast execution.";
    }

    // 4. Weight Check
    let weightStatus: StrokeAnalysisResult["weightStatus"] = "good";
    let weightMessage = "✓ Correct line thickness";
    if (stroke.weight === "heavy" && userWeight === "light") {
      weightStatus = "too-light";
      weightMessage = "⚠ Too light. This is a voiced heavy stroke (B, D, J, G, V, etc.).";
    } else if (stroke.weight === "light" && userWeight === "heavy") {
      weightStatus = "too-heavy";
      weightMessage = "⚠ Too heavy. This is a voiceless light stroke (P, T, CH, K, etc.).";
    }

    // 5. Continuity Check
    let continuityStatus: StrokeAnalysisResult["continuityStatus"] = "good";
    let continuityMessage = "✓ 1 continuous stroke without lifting pen";
    if (paths.length > 1) {
      continuityStatus = "multiple-strokes";
      continuityMessage = "⚠ Multiple strokes detected. Draw in one single continuous gesture.";
    }

    // Compute Overall Score
    let score = 100;
    if (directionStatus !== "good") score -= 35;
    if (angleStatus !== "good") score -= 25;
    if (lengthStatus !== "good") score -= 15;
    if (weightStatus !== "good") score -= 15;
    if (continuityStatus !== "good") score -= 10;
    score = Math.max(20, Math.min(100, score));

    const result: StrokeAnalysisResult = {
      directionStatus,
      directionMessage,
      angleStatus,
      angleMessage,
      measuredAngle: strokeAngle,
      expectedAngle: expected,
      lengthStatus,
      lengthMessage,
      weightStatus,
      weightMessage,
      continuityStatus,
      continuityMessage,
      overallScore: score,
      feedbackSummary:
        score >= 85
          ? "Excellent stroke! Correct direction, weight, and angle."
          : score >= 65
          ? "Good attempt! Pay attention to the angle and line weight."
          : "Needs adjustment. Check the starting marker and follow the arrow.",
      ruleToRemember: stroke.pitmanRule,
    };

    setAnalysisResult(result);
    setActiveStep("compare");

    // Save Mastery Record
    const newMastery: StrokeMasteryRecord = {
      strokeId: stroke.id,
      attemptsCount: mastery.attemptsCount + 1,
      bestScore: Math.max(mastery.bestScore, score),
      lastPracticed: new Date().toISOString().split("T")[0],
    };
    setMastery(newMastery);
    try {
      localStorage.setItem(`typehindi_mastery_${stroke.id}`, JSON.stringify(newMastery));
    } catch (_) {}
  };

  // Next / Previous Stroke Navigation
  const handlePrevStroke = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextStroke = () => {
    if (currentIndex < pitmanStrokes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* 🧭 Pedagogical Sequence Step Tracker */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs overflow-x-auto no-scrollbar gap-2">
        <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] shrink-0 mr-1">
          Pedagogy:
        </span>
        {[
          { id: "learn", label: "1. LEARN", desc: "Sound & Rule" },
          { id: "watch", label: "2. WATCH", desc: "▶ Show Me" },
          { id: "try", label: "3. TRY", desc: "Canvas Practice" },
          { id: "compare", label: "4. COMPARE", desc: "Side-by-Side" },
          { id: "words", label: "5. IN WORDS", desc: "Word Building" },
        ].map((step) => (
          <button
            key={step.id}
            type="button"
            onClick={() => {
              setActiveStep(step.id as any);
              if (step.id === "words") {
                setTimeout(() => {
                  const el = document.getElementById("word-practice-area");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }
            }}
            className={`px-3 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeStep === step.id
                ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      {/* 1. LESSON-FIRST INTERFACE: Stroke Header, Sound & Verified Rule */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-[#0F172A] border border-purple-500/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 font-extrabold text-2xl">
              {stroke.name}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-slate-100">Stroke {stroke.name}</h2>
                <span
                  className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                    stroke.weight === "heavy"
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                      : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  }`}
                >
                  {stroke.weight} Line Weight
                </span>
              </div>
              <p className="text-xs text-purple-300 mt-0.5">{stroke.sound}</p>
            </div>
          </div>

          {/* Hear Sound & Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakSound(stroke.name + ". " + stroke.sound)}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>🔊</span> Hear Sound
            </button>

            <button
              type="button"
              onClick={handlePrevStroke}
              disabled={currentIndex === 0}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300"
              title="Previous Stroke"
            >
              ←
            </button>
            <span className="text-xs text-slate-400 font-mono px-1">
              {currentIndex + 1}/{pitmanStrokes.length}
            </span>
            <button
              type="button"
              onClick={handleNextStroke}
              disabled={currentIndex === pitmanStrokes.length - 1}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300"
              title="Next Stroke"
            >
              →
            </button>
          </div>
        </div>

        {/* Rule and Examples Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
          <div className="md:col-span-8 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Verified Pitman Rule
            </span>
            <p className="text-slate-200 leading-relaxed font-sans">{stroke.pitmanRule}</p>
            <p className="text-slate-400">
              <strong>Geometry:</strong> {stroke.description} ({stroke.angleDescription})
            </p>
          </div>

          <div className="md:col-span-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 block">
              Common Example Words
            </span>
            <div className="flex flex-wrap gap-1.5">
              {stroke.examples.map((ex, idx) => (
                <span
                  key={idx}
                  onClick={() => speakSound(ex.word)}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 cursor-pointer hover:text-white hover:border-purple-500/40 transition-colors"
                >
                  {ex.word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. & 3. ANIMATED DEMONSTRATION & GUIDED PRACTICE CANVAS */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Canvas Toolbar & Mode Selector */}
        <div className="p-4 bg-slate-950/70 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            {/* Show Me Animation Button */}
            <button
              type="button"
              onClick={startShowMeAnimation}
              disabled={isAnimating}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold shadow-md shadow-purple-900/30 transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              <span>{isAnimating ? "⏳ Animating..." : "▶ Show Me"}</span>
            </button>

            {/* 4 Practice Mode Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-slate-800 border border-slate-700/60">
              {[
                { id: "guided", label: "Guided" },
                { id: "assisted", label: "Assisted" },
                { id: "free", label: "Free Practice" },
                { id: "test", label: "Test" },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPracticeMode(m.id as any)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    practiceMode === m.id
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Tools: Weight Selector, Undo, Redo, Clear */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-xl bg-slate-800 border border-slate-700/60">
              <button
                type="button"
                onClick={() => setUserWeight("light")}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                  userWeight === "light" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setUserWeight("heavy")}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                  userWeight === "heavy" ? "bg-sky-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Heavy
              </button>
            </div>

            <button
              type="button"
              onClick={handleUndo}
              disabled={paths.length === 0}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300"
              title="Undo"
            >
              ↶
            </button>
            <button
              type="button"
              onClick={handleRedo}
              disabled={redoPaths.length === 0}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300"
              title="Redo"
            >
              ↷
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-semibold"
            >
              Clear
            </button>
          </div>
        </div>

        {/* The Steno Practice Canvas ("NOW YOU TRY") */}
        <div className="relative w-full h-[320px] sm:h-[360px] bg-[#0F172A] touch-none cursor-crosshair select-none">
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="w-full h-full block"
          />

          {/* Initial Prompt Overlay */}
          {paths.length === 0 && !isDrawing && !isAnimating && (
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center p-4">
              <div className="bg-slate-900/85 backdrop-blur-md border border-slate-800 px-5 py-3.5 rounded-2xl max-w-sm space-y-1">
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block">
                  NOW YOU TRY
                </span>
                <p className="text-xs text-slate-200">
                  {practiceMode === "guided"
                    ? "Start from the green dot and pull toward the arrow."
                    : practiceMode === "assisted"
                    ? "Trace the faint purple target outline."
                    : practiceMode === "free"
                    ? "Draw Stroke " + stroke.name + " cleanly on the baseline."
                    : "Test Mode: Draw stroke " + stroke.name + " from memory."}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Canvas Bottom Action Bar */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[11px]">
              Attempts: <strong className="text-slate-200">{mastery.attemptsCount}</strong> • Best Score:{" "}
              <strong className="text-purple-400">{mastery.bestScore}%</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={evaluateDrawnStroke}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-md shadow-emerald-900/20 transition-all flex items-center gap-1.5"
            >
              <span>🔍</span> Evaluate & Compare My Stroke
            </button>
          </div>
        </div>
      </div>

      {/* 5. & 6. STROKE ANALYSIS & SIDE-BY-SIDE COMPARISON */}
      {analysisResult && (
        <div className="p-6 rounded-3xl bg-slate-900 border border-purple-500/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Stroke Analysis & Evaluation
              </span>
              <h3 className="text-xl font-black text-slate-100 mt-0.5">
                Your Result: {analysisResult.overallScore}%
              </h3>
              <p className="text-xs text-slate-400">{analysisResult.feedbackSummary}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
              >
                Try Again ↻
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveStep("words");
                  setTimeout(() => {
                    const el = document.getElementById("word-practice-area");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-900/30 flex items-center gap-1.5"
              >
                <span>Practice in Words →</span>
              </button>
            </div>
          </div>

          {/* Side-by-Side Comparison Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Correct Standard Stroke */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-between text-center space-y-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                CORRECT STANDARD STROKE
              </span>
              <div className="w-28 h-28 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-purple-400">
                  <path
                    d={stroke.svgPath}
                    stroke="currentColor"
                    strokeWidth={stroke.weight === "heavy" ? 6 : 3}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-[11px] text-slate-400">
                Angle: {stroke.angleDescription} • Weight: {stroke.weight.toUpperCase()}
              </p>
            </div>

            {/* User's Drawn Stroke */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-between text-center space-y-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                YOUR STROKE ATTEMPT
              </span>
              <div className="w-28 h-28 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {paths.map((p, idx) => (
                    <polyline
                      key={idx}
                      points={p.points.map((pt) => `${pt.x / 3},${pt.y / 3}`).join(" ")}
                      stroke={p.weight === "heavy" ? "#38BDF8" : "#C084FC"}
                      strokeWidth={p.weight === "heavy" ? 5 : 2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  ))}
                </svg>
              </div>
              <p className="text-[11px] text-slate-400">
                Measured Angle: ~{analysisResult.measuredAngle}° • Weight: {userWeight.toUpperCase()}
              </p>
            </div>
          </div>

          {/* Measurable Diagnostic Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Direction</span>
              <p className={analysisResult.directionStatus === "good" ? "text-emerald-400 font-semibold" : "text-red-400 font-semibold"}>
                {analysisResult.directionMessage}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Slant & Angle</span>
              <p className={analysisResult.angleStatus === "good" ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                {analysisResult.angleMessage}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Length & Scale</span>
              <p className={analysisResult.lengthStatus === "good" ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                {analysisResult.lengthMessage}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Line Weight</span>
              <p className={analysisResult.weightStatus === "good" ? "text-emerald-400 font-semibold" : "text-red-400 font-semibold"}>
                {analysisResult.weightMessage}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Stroke Continuity</span>
              <p className={analysisResult.continuityStatus === "good" ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                {analysisResult.continuityMessage}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Evaluation Type</span>
              <p className="text-slate-300">Assistive learning aid</p>
            </div>
          </div>

          {/* Coaching Tip "REMEMBER" */}
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-purple-300 uppercase tracking-wider text-[11px] block">
              💡 REMEMBER
            </span>
            <p>{analysisResult.ruleToRemember}</p>
          </div>
        </div>
      )}

      {/* 8. & 9. PRACTICE IN WORDS & WORD BUILDING */}
      {showWordBuilding && (
        <WordPracticeSection
          key={stroke.id}
          stroke={stroke}
          onNextStroke={handleNextStroke}
          onBackToStroke={() => {
            setActiveStep("try");
            window.scrollTo({ top: 350, behavior: "smooth" });
          }}
        />
      )}
    </div>
  );
}
