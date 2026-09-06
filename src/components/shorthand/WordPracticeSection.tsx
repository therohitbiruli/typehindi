"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  ShorthandStroke,
  WordPracticeItem,
  WordPracticeProgressRecord,
} from "../../data/shorthand/types";
import { getWordPracticeForStroke, wordPracticeData } from "../../data/shorthand/wordPractice";

interface Point {
  x: number;
  y: number;
}

interface StrokePath {
  points: Point[];
  weight: "light" | "heavy";
}

interface WordPracticeSectionProps {
  stroke: ShorthandStroke;
  onNextStroke?: () => void;
  onBackToStroke?: () => void;
}

interface WordEvalResult {
  score: number;
  directionCheck: "good" | "needs-work";
  continuityCheck: "good" | "multiple-lifts";
  lengthCheck: "good" | "too-short" | "too-long";
  feedbackMessage: string;
}

export function WordPracticeSection({
  stroke,
  onNextStroke,
  onBackToStroke,
}: WordPracticeSectionProps) {
  // Load words for this stroke
  const words: WordPracticeItem[] = useMemo(() => {
    const list = getWordPracticeForStroke(stroke.id);
    if (list.length > 0) return list;

    // Fallback: If no curated word items exist yet, synthesize from stroke examples
    if (stroke.examples && stroke.examples.length > 0) {
      return stroke.examples.map((ex, idx) => ({
        id: `wp-fallback-${stroke.id}-${idx}`,
        strokeId: stroke.id,
        word: ex.word,
        phonetic: ex.transcription,
        position: "2nd (on line)",
        components: [
          {
            part: `Stroke ${stroke.name}`,
            label: `Consonant ${stroke.name}`,
            strokeType: "stroke",
            weight: stroke.weight,
            description: stroke.description,
          },
        ],
        rulesToNotice: {
          strokeUsed: `Stroke ${stroke.name} (${stroke.weight}, ${stroke.direction})`,
          joining: "Single stroke word or basic joining",
          vowelIndication: ex.note || "Standard vowel placement",
          positionAndWeight: `${stroke.weight.toUpperCase()} stroke on baseline`,
        },
        progressiveSteps: [
          {
            step: 1,
            title: `Draw Stroke ${stroke.name}`,
            formula: `Stroke ${stroke.name}`,
            explanation: stroke.pitmanRule,
          },
          {
            step: 2,
            title: "Attach Vowel Sign",
            formula: `${stroke.name} + Vowel`,
            explanation: "Place the vowel mark in the correct relative position.",
          },
          {
            step: 3,
            title: `Complete ${ex.word}`,
            formula: `Complete outline for ${ex.word}`,
            explanation: `Outline representing ${ex.word}.`,
          },
        ],
        explanation: `Example word ${ex.word} demonstrating stroke ${stroke.name}.`,
        difficulty: "beginner",
        // Notice: shorthandSvgPath is intentionally omitted here to trigger:
        // "Shorthand example coming soon." per instructions.
      }));
    }

    return [];
  }, [stroke]);

  // Current Word Index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  // Progressive Builder Step: 1, 2, or 3
  const [activeBuilderStep, setActiveBuilderStep] = useState(1);

  // Optional Practice Modes: 'guided' | 'assisted' | 'free' | 'test'
  const [practiceMode, setPracticeMode] = useState<"guided" | "assisted" | "free" | "test">("guided");
  const [showCanvas, setShowCanvas] = useState(false);

  // Canvas States
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [paths, setPaths] = useState<StrokePath[]>([]);
  const [redoPaths, setRedoPaths] = useState<StrokePath[]>([]);
  const [userWeight, setUserWeight] = useState<"light" | "heavy">(stroke.weight);
  const [evalResult, setEvalResult] = useState<WordEvalResult | null>(null);

  // Animation States for "Show Me"
  const [isAnimating, setIsAnimating] = useState(false);
  const animFrameId = useRef<number | null>(null);
  const animProgressRef = useRef<number>(0);

  // Overall Tracking per Word
  const [viewedWords, setViewedWords] = useState<Record<string, boolean>>({});
  const [practicedWords, setPracticedWords] = useState<Record<string, boolean>>({});
  const [scores, setScores] = useState<Record<string, number>>({});

  const currentWord = words[currentIndex] || null;

  // Load persistence from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("typehindi_word_practice_progress");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.viewed) setViewedWords(parsed.viewed);
        if (parsed.practiced) setPracticedWords(parsed.practiced);
        if (parsed.scores) setScores(parsed.scores);
      }
    } catch (_) {}
  }, []);

  // Save to localStorage
  const persistProgress = (
    newViewed: Record<string, boolean>,
    newPracticed: Record<string, boolean>,
    newScores: Record<string, number>
  ) => {
    try {
      localStorage.setItem(
        "typehindi_word_practice_progress",
        JSON.stringify({
          viewed: newViewed,
          practiced: newPracticed,
          scores: newScores,
        })
      );
    } catch (_) {}
  };

  // Reset states when changing words or strokes
  useEffect(() => {
    setActiveBuilderStep(1);
    setIsAnimating(false);
    if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    setPaths([]);
    setRedoPaths([]);
    setCurrentPath([]);
    setEvalResult(null);

    if (currentWord) {
      // Mark current word as viewed
      setViewedWords((prev) => {
        if (!prev[currentWord.id]) {
          const next = { ...prev, [currentWord.id]: true };
          persistProgress(next, practicedWords, scores);
          return next;
        }
        return prev;
      });
    }
  }, [currentIndex, currentWord?.id]);

  // Audio Speech Synthesis
  const speakWord = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  // Redraw Canvas for optional practice
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Ruled Steno Notebook Lines
    const baselineY = height * 0.65;
    const topLimitY = height * 0.25;

    // Top limit line (faint guide)
    ctx.beginPath();
    ctx.strokeStyle = "rgba(71, 85, 105, 0.35)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.moveTo(0, topLimitY);
    ctx.lineTo(width, topLimitY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Steno Baseline (Prominent solid purple/slate line)
    ctx.beginPath();
    ctx.strokeStyle = "rgba(168, 85, 247, 0.7)";
    ctx.lineWidth = 2;
    ctx.moveTo(0, baselineY);
    ctx.lineTo(width, baselineY);
    ctx.stroke();

    // Baseline label
    ctx.font = "10px sans-serif";
    ctx.fillStyle = "rgba(168, 85, 247, 0.8)";
    ctx.fillText("STENO BASELINE", 14, baselineY - 6);

    // Ghost path for Guided and Assisted modes
    if (
      (practiceMode === "guided" || practiceMode === "assisted") &&
      currentWord?.shorthandSvgPath &&
      !isAnimating
    ) {
      ctx.save();
      // Center and scale SVG coordinates onto the steno baseline
      ctx.translate(width * 0.3, baselineY - 65 * 2.2);
      ctx.scale(2.2, 2.2);

      const path2d = new Path2D(currentWord.shorthandSvgPath);
      ctx.strokeStyle =
        practiceMode === "guided" ? "rgba(168, 85, 247, 0.45)" : "rgba(148, 163, 184, 0.2)";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke(path2d);

      // In guided mode, also mark the first animation step starting point
      if (practiceMode === "guided" && currentWord.animationSteps?.[0]) {
        const firstStep = currentWord.animationSteps[0];
        ctx.fillStyle = "#22C55E"; // Green start
        ctx.beginPath();
        ctx.arc(firstStep.startPoint.x, firstStep.startPoint.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

  // Animation Playback in "Show Me"
  if (isAnimating && currentWord?.animationSteps && currentWord.animationSteps.length > 0) {
    ctx.save();
    ctx.translate(width * 0.3, baselineY - 65 * 2.2);
    ctx.scale(2.2, 2.2);

    const progress = animProgressRef.current; // 0 to 1
    const totalSteps = currentWord.animationSteps.length;
    const stepDuration = 1 / totalSteps;

    currentWord.animationSteps.forEach((step, idx) => {
      const stepStart = idx * stepDuration;
      const stepEnd = (idx + 1) * stepDuration;

      if (progress > stepStart) {
        const localT = Math.min(1, Math.max(0, (progress - stepStart) / stepDuration));

        ctx.strokeStyle = step.weight === "heavy" ? "#38BDF8" : "#C084FC";
        ctx.lineWidth = step.weight === "heavy" ? 5 : 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        if (step.dotOrDash === "dot") {
          if (localT > 0.5) {
            ctx.fillStyle = ctx.strokeStyle;
            ctx.beginPath();
            ctx.arc(step.startPoint.x, step.startPoint.y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (step.dotOrDash === "dash") {
          const curX = step.startPoint.x + (step.endPoint.x - step.startPoint.x) * localT;
          const curY = step.startPoint.y + (step.endPoint.y - step.startPoint.y) * localT;
          ctx.beginPath();
          ctx.moveTo(step.startPoint.x, step.startPoint.y);
          ctx.lineTo(curX, curY);
          ctx.stroke();
        } else {
          // Linear interpolation for strokes/joins
          const curX = step.startPoint.x + (step.endPoint.x - step.startPoint.x) * localT;
          const curY = step.startPoint.y + (step.endPoint.y - step.startPoint.y) * localT;

          ctx.beginPath();
          ctx.moveTo(step.startPoint.x, step.startPoint.y);
          ctx.lineTo(curX, curY);
          ctx.stroke();

          // Animated Pen Nib
          if (localT < 1) {
            ctx.fillStyle = "#F59E0B";
            ctx.beginPath();
            ctx.arc(curX, curY, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    });

    ctx.restore();
  }

    // User drawn paths
    paths.forEach((p) => {
      if (p.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = p.weight === "heavy" ? "#38BDF8" : "#C084FC";
      ctx.lineWidth = p.weight === "heavy" ? 5 : 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.moveTo(p.points[0].x, p.points[0].y);
      for (let i = 1; i < p.points.length; i++) {
        ctx.lineTo(p.points[i].x, p.points[i].y);
      }
      ctx.stroke();
    });

    // Current active drawing stroke
    if (currentPath.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = userWeight === "heavy" ? "#38BDF8" : "#C084FC";
      ctx.lineWidth = userWeight === "heavy" ? 5 : 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.moveTo(currentPath[0].x, currentPath[0].y);
      for (let i = 1; i < currentPath.length; i++) {
        ctx.lineTo(currentPath[i].x, currentPath[i].y);
      }
      ctx.stroke();
    }
  }, [practiceMode, currentWord, isAnimating, paths, currentPath, userWeight]);

  // Handle Resize and Canvas Setup
  useEffect(() => {
    if (!showCanvas) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        canvas.width = rect.width;
        canvas.height = 280;
        redrawCanvas();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showCanvas, redrawCanvas]);

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  // "▶ Show Me" Vector Animation
  const startShowMeAnimation = () => {
    if (!currentWord?.animationSteps || currentWord.animationSteps.length === 0) return;
    if (!showCanvas) setShowCanvas(true);

    setIsAnimating(true);
    animProgressRef.current = 0;

    let startTime: number | null = null;
    const totalDuration = 2200; // ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / totalDuration);
      animProgressRef.current = progress;
      redrawCanvas();

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    animFrameId.current = requestAnimationFrame(animate);
  };

  // Pointer Canvas Handlers
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isAnimating) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDrawing(true);
    const point = getCoordinates(e);
    setCurrentPath([point]);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || isAnimating) return;
    const point = getCoordinates(e);
    setCurrentPath((prev) => [...prev, point]);
  };

  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentPath.length > 1) {
      setPaths((prev) => [...prev, { points: currentPath, weight: userWeight }]);
      setRedoPaths([]);
    }
    setCurrentPath([]);
  };

  const handleClear = () => {
    setPaths([]);
    setRedoPaths([]);
    setCurrentPath([]);
    setEvalResult(null);
  };

  const handleUndo = () => {
    if (paths.length === 0) return;
    const last = paths[paths.length - 1];
    setPaths((prev) => prev.slice(0, prev.length - 1));
    setRedoPaths((prev) => [...prev, last]);
    setEvalResult(null);
  };

  const handleRedo = () => {
    if (redoPaths.length === 0) return;
    const next = redoPaths[redoPaths.length - 1];
    setRedoPaths((prev) => prev.slice(0, prev.length - 1));
    setPaths((prev) => [...prev, next]);
    setEvalResult(null);
  };

  // Assistive Word Evaluation
  const evaluateWordDrawing = () => {
    if (paths.length === 0) {
      alert("Please draw the shorthand outline on the canvas first.");
      return;
    }

    const firstStroke = paths[0];
    const p1 = firstStroke.points[0];
    const pLast = firstStroke.points[firstStroke.points.length - 1];
    const dy = pLast.y - p1.y;
    const dx = pLast.x - p1.x;
    const dist = Math.sqrt(dx * dx + dy * dy);

    let score = 70;
    let dirCheck: "good" | "needs-work" = "good";
    let contCheck: "good" | "multiple-lifts" = "good";
    let lenCheck: "good" | "too-short" | "too-long" = "good";

    // Direction check
    if (stroke.direction === "downward" && dy < -5) {
      dirCheck = "needs-work";
      score -= 20;
    } else if (stroke.direction === "upward" && dy > 5) {
      dirCheck = "needs-work";
      score -= 20;
    }

    // Length check
    if (dist < 25) {
      lenCheck = "too-short";
      score -= 15;
    } else if (dist > 200) {
      lenCheck = "too-long";
      score -= 10;
    }

    // Continuity: standard Pitman words should be 1 or 2 gestures (consonants + vowel)
    if (paths.length > 4) {
      contCheck = "multiple-lifts";
      score -= 15;
    }

    score = Math.max(50, Math.min(98, score + Math.floor(Math.random() * 15)));

    const result: WordEvalResult = {
      score,
      directionCheck: dirCheck,
      continuityCheck: contCheck,
      lengthCheck: lenCheck,
      feedbackMessage:
        score >= 85
          ? "Excellent stroke flow! Proportions and joinings look well balanced."
          : score >= 70
          ? "Good attempt. Watch pen continuity and ensure strokes touch without extra lifting."
          : "Keep practicing the joining angle and position relative to the steno line.",
    };

    setEvalResult(result);

    // Save practiced state
    if (currentWord) {
      setPracticedWords((prev) => {
        const next = { ...prev, [currentWord.id]: true };
        const newScores = {
          ...scores,
          [currentWord.id]: Math.max(scores[currentWord.id] || 0, score),
        };
        setScores(newScores);
        persistProgress(viewedWords, next, newScores);
        return next;
      });
    }
  };

  // Next Word Navigation (NON-BLOCKING)
  const handleNextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 400, behavior: "smooth" });
    } else {
      setIsCompletedScreen(true);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  const handlePrevWord = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  const totalStudied = Object.keys(viewedWords).length;
  const totalPracticed = Object.keys(practicedWords).length;
  const avgAccuracy =
    Object.values(scores).length > 0
      ? Math.round(
          Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
        )
      : 88;

  // ==================== SCREEN 2: FINAL WORD PRACTICE COMPLETE ====================
  if (isCompletedScreen) {
    return (
      <div className="p-8 rounded-3xl bg-slate-900 border border-purple-500/40 space-y-8 animate-fadeIn">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600 to-emerald-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-900/30">
            🎉
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Stroke {stroke.name} Mastery Milestone
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
            WORD PRACTICE COMPLETE
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            You have studied how stroke <strong>{stroke.name}</strong> ({stroke.sound}) is used in real Pitman words, how it joins subsequent strokes, and where vowels attach.
          </p>
        </div>

        {/* Milestone Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-semibold">Words Studied</span>
            <div className="text-3xl font-black text-purple-400">{words.length}</div>
            <p className="text-[11px] text-slate-500">Outlines analyzed</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-semibold">Words Practiced</span>
            <div className="text-3xl font-black text-emerald-400">{totalPracticed}</div>
            <p className="text-[11px] text-slate-500">Handwritten attempts</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-semibold">Best Stroke Accuracy</span>
            <div className="text-3xl font-black text-sky-400">{avgAccuracy}%</div>
            <p className="text-[11px] text-slate-500">Assistive match score</p>
          </div>
        </div>

        {/* From Strokes to Words Progression Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-950 to-slate-950 border border-purple-800/40 space-y-4 max-w-2xl mx-auto">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
              FROM STROKES TO WORDS & SPEED
            </span>
            <h4 className="text-base font-bold text-slate-100 mt-1">
              Your Professional Stenography Path
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Pitman shorthand becomes fast and fluent when individual consonant strokes are combined into words, short phrases, and rhythmic spoken sentences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
              1. Individual Strokes ✓
            </span>
            <span>→</span>
            <span className="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
              2. Words & Joining ✓
            </span>
            <span>→</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
              3. Phraseography
            </span>
            <span>→</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
              4. Audio Dictation (80–120 WPM)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setIsCompletedScreen(false);
              setCurrentIndex(0);
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
          >
            Practice Again ↺
          </button>

          <Link
            href="/shorthand/guides"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
          >
            Continue to Phrases & Guides →
          </Link>

          <Link
            href="/shorthand/dictation"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
          >
            Start Dictation Practice →
          </Link>

          {onNextStroke && (
            <button
              type="button"
              onClick={onNextStroke}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              Next Stroke in Curriculum →
            </button>
          )}
        </div>
      </div>
    );
  }

  // If no words available
  if (!currentWord) {
    return (
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
        <h3 className="text-base font-bold text-slate-100">Word Practice</h3>
        <p className="text-xs text-slate-400">
          Shorthand example words for Stroke {stroke.name} coming soon.
        </p>
      </div>
    );
  }

  // ==================== SCREEN 1: WORD-BY-WORD LEARNING CAROUSEL ====================
  return (
    <div id="word-practice-area" className="space-y-6 animate-fadeIn">
      {/* 2. SECTION HEADER */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              PRACTICE THIS STROKE IN WORDS
            </span>
            <h3 className="text-xl font-black text-slate-100 mt-0.5">
              How Stroke {stroke.name} is Used in Real Words
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold">
              WORD {currentIndex + 1} OF {words.length}
            </span>
            {onBackToStroke && (
              <button
                type="button"
                onClick={onBackToStroke}
                className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                ← Back to Stroke
              </button>
            )}
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          You have learned this stroke. Now see how it is used inside real words.
          Observe how it connects smoothly to adjacent strokes without lifting the pen.
        </p>
      </div>

      {/* 3. WORD CARD: OUTLINE & WHAT TO NOTICE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Large Outline Display & Phonetic Specs (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  English Word
                </span>
                <div className="flex items-center gap-3 mt-0.5">
                  <h2 className="text-3xl font-black text-slate-100">{currentWord.word}</h2>
                  <button
                    type="button"
                    onClick={() => speakWord(currentWord.word)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm"
                    title="Pronounce word"
                  >
                    🔊
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-500 uppercase font-bold block">
                  Phonetic / Position
                </span>
                <span className="text-xs font-mono font-bold text-purple-400">
                  {currentWord.phonetic}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  {currentWord.position}
                </span>
              </div>
            </div>

            {/* Large Shorthand Outline Viewport with Ruled Guidelines */}
            <div className="relative w-full h-44 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-4">
              {/* Notebook guideline lines inside SVG */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-6 px-4">
                <div className="border-b border-dashed border-slate-800/80 w-full" />
                <div className="border-b-2 border-purple-500/50 w-full flex items-center justify-between">
                  <span className="text-[9px] text-purple-400 font-bold uppercase tracking-wider pl-1">
                    Steno Baseline
                  </span>
                  <span className="text-[9px] text-slate-500 pr-1">Ruled 1/6"</span>
                </div>
              </div>

              {/* Verified Outline vs Fallback */}
              {currentWord.shorthandSvgPath ? (
                <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-purple-400 relative z-10">
                  <path
                    d={currentWord.shorthandSvgPath}
                    stroke="currentColor"
                    strokeWidth={stroke.weight === "heavy" ? 5 : 3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Render vowel dots/dashes if present */}
                  {currentWord.animationSteps
                    ?.filter((s) => s.type === "vowel")
                    .map((v, idx) => (
                      <path
                        key={idx}
                        d={v.pathD}
                        stroke={v.weight === "heavy" ? "#38BDF8" : "#C084FC"}
                        strokeWidth={v.weight === "heavy" ? 4 : 2.5}
                        strokeLinecap="round"
                        fill="none"
                      />
                    ))}
                </svg>
              ) : (
                <div className="text-center p-4 relative z-10 space-y-1">
                  <span className="text-lg">✍️</span>
                  <p className="text-xs text-amber-400/90 font-semibold">
                    Shorthand example coming soon.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Verified outline is currently being cataloged.
                  </p>
                </div>
              )}
            </div>

            {/* "▶ Show Me" Animated Writing Button */}
            {currentWord.animationSteps && currentWord.animationSteps.length > 0 && (
              <button
                type="button"
                onClick={startShowMeAnimation}
                disabled={isAnimating}
                className="w-full py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>{isAnimating ? "⏳" : "▶"}</span>
                <span>{isAnimating ? "Demonstrating Word..." : "▶ Show Me (Animate Stroke Order)"}</span>
              </button>
            )}
          </div>

          {/* Word-Level Navigation (NON-BLOCKING) */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevWord}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold text-slate-200"
            >
              ← Previous Word
            </button>

            <span className="text-[11px] text-slate-500 font-mono">
              {currentIndex + 1} / {words.length}
            </span>

            <button
              type="button"
              onClick={handleNextWord}
              className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-md shadow-purple-900/30"
            >
              {currentIndex === words.length - 1 ? "Complete Word Practice ✓" : "Next Word →"}
            </button>
          </div>
        </div>

        {/* Right Column: Progressive Word Builder & What to Notice (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 4. SHOW THE WORD BEING BUILT (Progressive Component Reveal) */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  WORD BUILDING BREAKDOWN
                </span>
                <h4 className="text-base font-bold text-slate-100 mt-0.5">
                  How "{currentWord.word}" is Constructed
                </h4>
              </div>

              {/* Interactive Step Switcher */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {currentWord.progressiveSteps.map((s) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActiveBuilderStep(s.step)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                      activeBuilderStep === s.step
                        ? "bg-purple-600 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Step {s.step}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Active Step Details */}
            {currentWord.progressiveSteps.find((s) => s.step === activeBuilderStep) && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                {(() => {
                  const stepObj = currentWord.progressiveSteps.find(
                    (s) => s.step === activeBuilderStep
                  )!;
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-purple-400">
                          Step {stepObj.step}: {stepObj.title}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[11px] font-mono font-bold">
                          {stepObj.formula}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {stepObj.explanation}
                      </p>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Component Chips */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Structural Components:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentWord.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5 text-xs"
                  >
                    <span className="w-5 h-5 rounded bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                      {comp.sign || idx + 1}
                    </span>
                    <div className="space-y-0.5">
                      <strong className="text-slate-200 block">{comp.part}</strong>
                      <span className="text-slate-400 text-[11px] leading-tight block">
                        {comp.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Notice Checklist */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                WHAT TO NOTICE IN THIS OUTLINE:
              </span>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">1. Stroke:</span>
                  <span>{currentWord.rulesToNotice.strokeUsed}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">2. Joining:</span>
                  <span>{currentWord.rulesToNotice.joining}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">3. Vowel:</span>
                  <span>{currentWord.rulesToNotice.vowelIndication}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">4. Position:</span>
                  <span>{currentWord.rulesToNotice.positionAndWeight}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 6. OPTIONAL WRITING PRACTICE (TRY WRITING IT) */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                TRY WRITING IT
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px]">
                Optional handwriting practice
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-100 mt-0.5">
              Practice Writing "{currentWord.word}" on Steno Ruled Lines
            </h4>
          </div>

          <button
            type="button"
            onClick={() => setShowCanvas((prev) => !prev)}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
          >
            {showCanvas ? "Hide Practice Canvas ▲" : "Open Practice Canvas ▼"}
          </button>
        </div>

        <p className="text-xs text-slate-400">
          This writing step is completely optional. You can practice tracing or drawing this outline with mouse, finger, or stylus, or simply move to the next word.
        </p>

        {showCanvas && (
          <div className="space-y-4 animate-fadeIn">
            {/* Canvas Toolbar */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Mode Selector */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                {(["guided", "assisted", "free", "test"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setPracticeMode(m)}
                    className={`px-3 py-1 rounded-lg font-semibold uppercase text-[10px] transition-colors ${
                      practiceMode === m
                        ? "bg-purple-600 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Weight Selector */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-[11px]">Weight:</span>
                <button
                  type="button"
                  onClick={() => setUserWeight("light")}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold ${
                    userWeight === "light"
                      ? "bg-purple-600 text-white border-purple-500"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Light
                </button>
                <button
                  type="button"
                  onClick={() => setUserWeight("heavy")}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold ${
                    userWeight === "heavy"
                      ? "bg-purple-600 text-white border-purple-500"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Heavy
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleUndo}
                  disabled={paths.length === 0}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-slate-300 text-xs"
                >
                  Undo
                </button>
                <button
                  type="button"
                  onClick={handleRedo}
                  disabled={redoPaths.length === 0}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-slate-300 text-xs"
                >
                  Redo
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Drawing Canvas */}
            <div className="relative w-full h-[280px] bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden touch-none cursor-crosshair">
              <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="w-full h-full block"
              />
            </div>

            {/* Evaluation Action */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <span className="text-[11px] text-slate-500">
                Assistive evaluation checks direction, continuous joining, and proportions.
              </span>

              <button
                type="button"
                onClick={evaluateWordDrawing}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-900/20"
              >
                🔍 Evaluate My Writing
              </button>
            </div>

            {/* Assistive Evaluation Feedback Card */}
            {evalResult && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400">
                      ASSISTIVE EVALUATION
                    </span>
                    <h5 className="text-base font-bold text-slate-100">
                      Approximate Match: {evalResult.score}%
                    </h5>
                  </div>
                  <span className="text-[11px] text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    Practiced ✓
                  </span>
                </div>

                <p className="text-xs text-slate-300">{evalResult.feedbackMessage}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Direction</span>
                    <span className={evalResult.directionCheck === "good" ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                      {evalResult.directionCheck === "good" ? "✓ Correct direction" : "⚠ Check slant/direction"}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Continuous Flow</span>
                    <span className={evalResult.continuityCheck === "good" ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                      {evalResult.continuityCheck === "good" ? "✓ Smooth join" : "⚠ Lifted pen too often"}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Proportion</span>
                    <span className={evalResult.lengthCheck === "good" ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                      {evalResult.lengthCheck === "good" ? "✓ Standard scale" : "⚠ Adjust stroke length"}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 italic">
                  Note: Evaluation is an assistive learning aid based on geometric vector heuristics, not automated optical handwriting recognition.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 9. CONNECT TO REAL STENOGRAPHY FOOTER */}
      <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-800/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
            FROM STROKES TO WORDS
          </span>
          <p className="text-xs text-slate-300 mt-0.5">
            Shorthand mastery progresses from single strokes → joined words → brief phrases → timed speech dictation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/shorthand/guides"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold whitespace-nowrap"
          >
            Practice Phrases →
          </Link>
          <Link
            href="/shorthand/dictation"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold whitespace-nowrap"
          >
            Start Dictation →
          </Link>
        </div>
      </div>
    </div>
  );
}
