"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { TARGET_WORDS } from "../../data/gameData";
import { UnifiedGameResults } from "./UnifiedGameResults";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface Target {
  id: number;
  word: string;
  x: number;
  y: number;
  timeLeft: number;
  totalTime: number;
  exploding: boolean;
  explosionFrame: number;
}

const DIFF_CONFIG = {
  Beginner:     { spawnInterval: 3000, maxTargets: 4, totalTime: 6000, speedMultiplier: 1 },
  Intermediate: { spawnInterval: 2200, maxTargets: 5, totalTime: 4500, speedMultiplier: 1.2 },
  Advanced:     { spawnInterval: 1600, maxTargets: 6, totalTime: 3200, speedMultiplier: 1.5 },
};

const GAME_DURATION = 60; // seconds

interface Props {
  difficulty: Difficulty;
  onGameOver: (stats: { score: number; accuracy: number; correct: number; incorrect: number; streak: number }) => void;
  onBackToHub: () => void;
}

export function TypingTargetGame({ difficulty, onGameOver, onBackToHub }: Props) {
  const [targets, setTargets] = useState<Target[]>([]);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const bestStreakRef = useRef(0);
  const correctRef = useRef(0);
  const incorrectRef = useRef(0);
  const nextIdRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const wordBank = TARGET_WORDS[difficulty === "Beginner" ? "beginner" : difficulty === "Intermediate" ? "intermediate" : "advanced"];
  const config = DIFF_CONFIG[difficulty];

  const spawnTarget = useCallback(() => {
    setTargets(prev => {
      if (prev.length >= config.maxTargets) return prev;
      const word = wordBank[Math.floor(Math.random() * wordBank.length)];
      const x = Math.random() * 70 + 5; // 5% to 75%
      const y = Math.random() * 60 + 10; // 10% to 70%
      return [
        ...prev,
        { id: nextIdRef.current++, word, x, y, timeLeft: config.totalTime, totalTime: config.totalTime, exploding: false, explosionFrame: 0 }
      ];
    });
  }, [wordBank, config]);

  // Game timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setIsPlaying(false);
          clearInterval(timer);
          onGameOver({ score: scoreRef.current, accuracy: correctRef.current + incorrectRef.current > 0 ? (correctRef.current / (correctRef.current + incorrectRef.current)) * 100 : 0, correct: correctRef.current, incorrect: incorrectRef.current, streak: bestStreakRef.current });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, onGameOver]);

  // Target countdown
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setTargets(prev => {
        const next = prev.map(t => {
          if (t.exploding) {
            const ef = t.explosionFrame + 1;
            return ef > 6 ? null : { ...t, explosionFrame: ef };
          }
          const tl = t.timeLeft - 50;
          if (tl <= 0) {
            // Missed
            incorrectRef.current += 1;
            setIncorrect(i => i + 1);
            streakRef.current = 0;
            setStreak(0);
            return null;
          }
          return { ...t, timeLeft: tl };
        }).filter(Boolean) as Target[];
        return next;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Spawn timer
  useEffect(() => {
    if (!isPlaying) return;
    spawnTarget();
    const timer = setInterval(spawnTarget, config.spawnInterval);
    return () => clearInterval(timer);
  }, [isPlaying, spawnTarget, config.spawnInterval]);

  // Handle input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);

    const matched = targets.find(t => !t.exploding && t.word === val.trim());
    if (matched) {
      const timeBonus = Math.floor((matched.timeLeft / matched.totalTime) * 50);
      const streakBonus = Math.min(streakRef.current * 10, 100);
      const points = 100 + timeBonus + streakBonus;
      scoreRef.current += points;
      correctRef.current += 1;
      streakRef.current += 1;
      bestStreakRef.current = Math.max(bestStreakRef.current, streakRef.current);
      setScore(scoreRef.current);
      setCorrect(c => c + 1);
      setStreak(streakRef.current);
      setBestStreak(bestStreakRef.current);
      setTargets(prev => prev.map(t => t.id === matched.id ? { ...t, exploding: true, explosionFrame: 0 } : t));
      setInput("");
    }
  };

  const timerPct = (timeLeft / GAME_DURATION) * 100;

  return (
    <div className="flex flex-col h-full">
      {/* HUD */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 gap-4 flex-shrink-0">
        <div className="flex items-center gap-6 text-sm font-bold">
          <span className="text-amber-400">⭐ {score.toLocaleString()}</span>
          <span className="text-emerald-400">✅ {correct}</span>
          <span className="text-rose-400">❌ {incorrect}</span>
          <span className="text-orange-400">🔥 {streak}</span>
        </div>
        <div className="flex items-center gap-3 flex-1 max-w-xs">
          <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${timerPct > 40 ? "bg-emerald-500" : timerPct > 20 ? "bg-amber-500" : "bg-rose-500"}`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
          <span className={`text-xs font-black tabular-nums ${timerPct < 20 ? "text-rose-400" : "text-slate-300"}`}>{timeLeft}s</span>
        </div>
        <button onClick={onBackToHub} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">✕ Exit</button>
      </div>

      {/* Arena */}
      <div className="relative flex-1 bg-gradient-to-br from-slate-950 via-amber-950/10 to-slate-950 overflow-hidden min-h-[380px]">
        {/* Radar grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        {targets.map(target => {
          const pct = target.timeLeft / target.totalTime;
          return (
            <div
              key={target.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ${target.exploding ? "animate-ping scale-150 opacity-0" : ""}`}
              style={{ left: `${target.x}%`, top: `${target.y}%` }}
            >
              {!target.exploding && (
                <>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-ping scale-150" style={{ animationDuration: "1.5s" }} />
                  {/* Target circle */}
                  <div
                    className="relative flex items-center justify-center rounded-full border-2 border-amber-400/60 bg-slate-900/80 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    style={{ width: 90, height: 90 }}
                  >
                    {/* Progress ring (SVG) */}
                    <svg className="absolute inset-0" width="90" height="90">
                      <circle cx="45" cy="45" r="42" fill="none" stroke="#1e293b" strokeWidth="3" />
                      <circle
                        cx="45" cy="45" r="42"
                        fill="none"
                        stroke={pct > 0.5 ? "#10b981" : pct > 0.25 ? "#f59e0b" : "#ef4444"}
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct)}`}
                        strokeLinecap="round"
                        transform="rotate(-90 45 45)"
                        style={{ transition: "stroke-dashoffset 0.05s linear, stroke 0.3s" }}
                      />
                    </svg>
                    <span className="relative text-white text-base font-bold text-center px-1 leading-tight" style={{ fontSize: target.word.length > 4 ? "0.7rem" : "0.9rem" }}>
                      {target.word}
                    </span>
                  </div>
                </>
              )}
              {target.exploding && (
                <div className="w-20 h-20 rounded-full bg-amber-400/30 flex items-center justify-center text-2xl animate-pulse">
                  💥
                </div>
              )}
            </div>
          );
        })}

        {targets.length === 0 && isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-sm animate-pulse">
            Targets incoming...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 py-3 bg-slate-900/80 border-t border-slate-800 flex-shrink-0">
        <input
          ref={inputRef}
          value={input}
          onChange={handleInput}
          autoFocus
          disabled={!isPlaying}
          placeholder="Type the target word..."
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg font-bold placeholder:text-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 text-center"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          lang="hi"
        />
        <p className="text-xs text-slate-600 text-center mt-1.5">Click inside the box and type the Hindi word shown on any target</p>
      </div>
    </div>
  );
}
