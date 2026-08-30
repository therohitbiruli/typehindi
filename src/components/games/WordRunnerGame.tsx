"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { RUNNER_WORDS } from "../../data/gameData";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

const TRACK_HEIGHT = 220;
const GAME_DURATION = 60; // seconds

const DIFF_CONFIG = {
  Beginner:     { baseSpeed: 2, maxObstacles: 3, boostAmount: 60, obstacleInterval: 3000 },
  Intermediate: { baseSpeed: 3, maxObstacles: 4, boostAmount: 80, obstacleInterval: 2200 },
  Advanced:     { baseSpeed: 4.5, maxObstacles: 5, boostAmount: 100, obstacleInterval: 1600 },
};

interface Obstacle {
  id: number;
  x: number;
  width: number;
  color: string;
  word: string;
  destroyed: boolean;
  animating: boolean;
}

const OBSTACLE_COLORS = ["#ef4444", "#f59e0b", "#8b5cf6", "#06b6d4", "#ec4899"];

interface Props {
  difficulty: Difficulty;
  onGameOver: (stats: { score: number; accuracy: number; wpm: number; correct: number; incorrect: number; streak: number }) => void;
  onBackToHub: () => void;
}

export function WordRunnerGame({ difficulty, onGameOver, onBackToHub }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [boost, setBoost] = useState(0); // speed boost remaining frames
  const [isPlaying, setIsPlaying] = useState(true);

  const config = DIFF_CONFIG[difficulty];
  const wordBank = RUNNER_WORDS[difficulty === "Beginner" ? "beginner" : difficulty === "Intermediate" ? "intermediate" : "advanced"];

  // Refs for animation loop
  const obstaclesRef = useRef<Obstacle[]>([]);
  const runnerXRef = useRef(80);
  const boostRef = useRef(0);
  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const bestStreakRef = useRef(0);
  const correctRef = useRef(0);
  const incorrectRef = useRef(0);
  const nextIdRef = useRef(0);
  const animRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);
  const currentWordRef = useRef("");
  const inputRef = useRef<HTMLInputElement>(null);
  const isPlayingRef = useRef(true);

  const pickWord = useCallback(() => wordBank[Math.floor(Math.random() * wordBank.length)], [wordBank]);

  const setNextWord = useCallback(() => {
    const w = pickWord();
    currentWordRef.current = w;
    setCurrentWord(w);
  }, [pickWord]);

  useEffect(() => {
    setNextWord();
  }, [setNextWord]);

  // Game timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          isPlayingRef.current = false;
          setIsPlaying(false);
          clearInterval(timer);
          cancelAnimationFrame(animRef.current);
          onGameOver({
            score: scoreRef.current,
            accuracy: correctRef.current + incorrectRef.current > 0
              ? (correctRef.current / (correctRef.current + incorrectRef.current)) * 100
              : 0,
            wpm: Math.round((correctRef.current / GAME_DURATION) * 60),
            correct: correctRef.current,
            incorrect: incorrectRef.current,
            streak: bestStreakRef.current
          });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onGameOver]);

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = TRACK_HEIGHT;
    const groundY = H - 40;
    const runnerY = groundY - 44;
    let bgOffset = 0;

    const spawn = (now: number) => {
      if (!isPlayingRef.current) return;
      if (obstaclesRef.current.length >= config.maxObstacles) return;
      if (now - lastSpawnRef.current < config.obstacleInterval) return;
      lastSpawnRef.current = now;

      obstaclesRef.current.push({
        id: nextIdRef.current++,
        x: W + 60,
        width: 64,
        color: OBSTACLE_COLORS[Math.floor(Math.random() * OBSTACLE_COLORS.length)],
        word: currentWordRef.current,
        destroyed: false,
        animating: false
      });
    };

    const loop = (now: number) => {
      if (!isPlayingRef.current) return;

      // Speed
      const speed = config.baseSpeed + (boostRef.current > 0 ? 4 : 0);
      if (boostRef.current > 0) boostRef.current -= 1;

      bgOffset = (bgOffset + speed * 0.5) % 80;

      // Move obstacles
      obstaclesRef.current = obstaclesRef.current.map(o => ({
        ...o,
        x: o.x - speed
      })).filter(o => o.x > -100);

      // Draw
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = "#0A0F1D";
      ctx.fillRect(0, 0, W, H);

      // Scrolling ground dots
      ctx.fillStyle = "rgba(99,102,241,0.08)";
      for (let gx = -bgOffset; gx < W; gx += 80) {
        ctx.fillRect(gx, groundY + 2, 60, 2);
      }

      // Ground line
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(W, groundY);
      ctx.stroke();

      // Boost trail
      if (boostRef.current > 0) {
        const grad = ctx.createLinearGradient(runnerXRef.current - 60, 0, runnerXRef.current, 0);
        grad.addColorStop(0, "rgba(99,102,241,0)");
        grad.addColorStop(1, "rgba(99,102,241,0.3)");
        ctx.fillStyle = grad;
        ctx.fillRect(runnerXRef.current - 60, runnerY, 60, 40);
      }

      // Runner (simple pixel character)
      const rx = runnerXRef.current;
      ctx.fillStyle = boostRef.current > 0 ? "#a5b4fc" : "#818cf8";
      // Body
      ctx.fillRect(rx - 12, runnerY + 10, 24, 26);
      // Head
      ctx.fillStyle = "#c7d2fe";
      ctx.beginPath();
      ctx.arc(rx, runnerY + 6, 10, 0, Math.PI * 2);
      ctx.fill();
      // Legs (animated)
      const legAnim = Math.floor(now / 100) % 2;
      ctx.fillStyle = "#6366f1";
      ctx.fillRect(rx - 10, runnerY + 36, 8, 14 + (legAnim ? 4 : 0));
      ctx.fillRect(rx + 2, runnerY + 36, 8, 14 + (legAnim ? 0 : 4));

      // Obstacles
      obstaclesRef.current.forEach(obs => {
        if (obs.destroyed) return;
        const oy = groundY - 56;
        // Block
        ctx.fillStyle = obs.color + "33";
        ctx.strokeStyle = obs.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(obs.x - obs.width / 2, oy, obs.width, 56, 6);
        ctx.fill();
        ctx.stroke();
        // Word
        ctx.fillStyle = "#fff";
        ctx.font = `bold 14px "Noto Sans Devanagari", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(obs.word.length > 6 ? obs.word.slice(0, 5) + "…" : obs.word, obs.x, oy + 28);

        // Collision check
        const hit = obs.x - obs.width / 2 < rx + 12 && obs.x + obs.width / 2 > rx - 12;
        if (hit && !obs.animating) {
          obs.animating = true;
          incorrectRef.current += 1;
          streakRef.current = 0;
          setIncorrect(i => i + 1);
          setStreak(0);
          obs.destroyed = true;
        }
      });

      spawn(now);
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [config]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);

    if (val.trim() === currentWordRef.current) {
      const points = 80 + Math.min(streakRef.current * 15, 120);
      scoreRef.current += points;
      correctRef.current += 1;
      streakRef.current += 1;
      bestStreakRef.current = Math.max(bestStreakRef.current, streakRef.current);
      boostRef.current = config.boostAmount;
      setScore(scoreRef.current);
      setCorrect(c => c + 1);
      setStreak(streakRef.current);
      setBestStreak(bestStreakRef.current);
      setBoost(config.boostAmount);
      // Destroy next obstacle with matching word
      obstaclesRef.current = obstaclesRef.current.map(o =>
        o.word === currentWordRef.current && !o.destroyed ? { ...o, destroyed: true } : o
      );
      setNextWord();
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
          {boost > 0 && <span className="text-cyan-400 animate-pulse">⚡ BOOST!</span>}
        </div>
        <div className="flex items-center gap-3 flex-1 max-w-xs">
          <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${timerPct > 40 ? "bg-cyan-500" : timerPct > 20 ? "bg-amber-500" : "bg-rose-500"}`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
          <span className={`text-xs font-black tabular-nums ${timerPct < 20 ? "text-rose-400" : "text-slate-300"}`}>{timeLeft}s</span>
        </div>
        <button onClick={onBackToHub} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">✕ Exit</button>
      </div>

      {/* Track */}
      <div className="flex-1 flex flex-col items-stretch bg-slate-950 overflow-hidden">
        <canvas ref={canvasRef} width={800} height={TRACK_HEIGHT} className="w-full" style={{ maxHeight: TRACK_HEIGHT }} />

        {/* Current word prompt */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3 py-4 px-6 bg-slate-950">
          <p className="text-xs text-slate-500 uppercase tracking-widest">Type to boost</p>
          <div className="text-3xl md:text-4xl font-black text-white tracking-wide" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            {currentWord}
          </div>
          <input
            ref={inputRef}
            value={input}
            onChange={handleInput}
            autoFocus
            disabled={!isPlaying}
            placeholder="Type here..."
            className="w-full max-w-sm bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-white text-xl font-bold placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-center"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            lang="hi"
          />
          <p className="text-xs text-slate-600">Type each word to speed boost and smash obstacles!</p>
        </div>
      </div>
    </div>
  );
}
