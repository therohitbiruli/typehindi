"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MATRA_CHALLENGE_LIST, MatraQuizItem } from "../../data/gameData";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

const ROUNDS_TOTAL = 12;
const TIME_PER_ROUND = { Beginner: 18, Intermediate: 12, Advanced: 8 };

// For beginner: first 6 matras (simple AA, I, II, U, UU, E)
// Intermediate: all 9 main matras
// Advanced: all 12 including chandrabindu, anusvara, ri
const DIFF_MATRAS = {
  Beginner:     [1, 2, 3, 4, 5, 6],       // ids
  Intermediate: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  Advanced:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

interface Props {
  difficulty: Difficulty;
  onGameOver: (stats: { score: number; accuracy: number; correct: number; incorrect: number; streak: number }) => void;
  onBackToHub: () => void;
}

export function MatraChallengeGame({ difficulty, onGameOver, onBackToHub }: Props) {
  const [round, setRound] = useState(1);
  const [matra, setMatra] = useState<MatraQuizItem | null>(null);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_ROUND[difficulty]);
  const [roundQueue, setRoundQueue] = useState<{ matra: MatraQuizItem; word: string }[]>([]);
  const [done, setDone] = useState(false);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const bestStreakRef = useRef(0);
  const correctRef = useRef(0);
  const incorrectRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const allowedIds = DIFF_MATRAS[difficulty];
  const availableMatras = MATRA_CHALLENGE_LIST.filter(m => allowedIds.includes(m.id));

  // Build round queue on mount
  useEffect(() => {
    const queue: { matra: MatraQuizItem; word: string }[] = [];
    const shuffled = [...availableMatras].sort(() => Math.random() - 0.5);
    for (let i = 0; i < ROUNDS_TOTAL; i++) {
      const m = shuffled[i % shuffled.length];
      const word = m.practiceWords[Math.floor(Math.random() * m.practiceWords.length)];
      queue.push({ matra: m, word });
    }
    setRoundQueue(queue);
    if (queue[0]) {
      setMatra(queue[0].matra);
      setCurrentWord(queue[0].word);
    }
    setTimeLeft(TIME_PER_ROUND[difficulty]);
  }, [difficulty]);

  const goNext = useCallback(() => {
    const nextRound = round + 1;
    if (nextRound > ROUNDS_TOTAL) {
      setDone(true);
      onGameOver({
        score: scoreRef.current,
        accuracy: correctRef.current + incorrectRef.current > 0
          ? (correctRef.current / (correctRef.current + incorrectRef.current)) * 100
          : 0,
        correct: correctRef.current,
        incorrect: incorrectRef.current,
        streak: bestStreakRef.current
      });
      return;
    }
    const next = roundQueue[nextRound - 1];
    if (!next) return;
    setRound(nextRound);
    setMatra(next.matra);
    setCurrentWord(next.word);
    setInput("");
    setResult(null);
    setTimeLeft(TIME_PER_ROUND[difficulty]);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [round, roundQueue, difficulty, onGameOver]);

  // Timer
  useEffect(() => {
    if (result || done || !matra) return;
    const tick = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(tick);
          incorrectRef.current += 1;
          streakRef.current = 0;
          setIncorrect(i => i + 1);
          setStreak(0);
          setResult("wrong");
          setTimeout(goNext, 1600);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [result, done, matra, goNext]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);

    if (val === currentWord) {
      const bonus = timeLeft * 8;
      const streakBonus = Math.min(streakRef.current * 15, 150);
      const points = 100 + bonus + streakBonus;
      scoreRef.current += points;
      correctRef.current += 1;
      streakRef.current += 1;
      bestStreakRef.current = Math.max(bestStreakRef.current, streakRef.current);
      setScore(scoreRef.current);
      setCorrect(c => c + 1);
      setStreak(streakRef.current);
      setBestStreak(bestStreakRef.current);
      setResult("correct");
      setTimeout(goNext, 1200);
    }
  };

  if (!matra || done) {
    return <div className="flex items-center justify-center h-full text-white text-xl">Loading...</div>;
  }

  const timeMax = TIME_PER_ROUND[difficulty];
  const timePct = (timeLeft / timeMax) * 100;

  return (
    <div className="flex flex-col h-full">
      {/* HUD */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 gap-4 flex-shrink-0">
        <div className="flex items-center gap-5 text-sm font-bold">
          <span className="text-slate-400 font-medium">Round {round}/{ROUNDS_TOTAL}</span>
          <span className="text-amber-400">⭐ {score.toLocaleString()}</span>
          <span className="text-emerald-400">✅ {correct}</span>
          <span className="text-rose-400">❌ {incorrect}</span>
          <span className="text-orange-400">🔥 {streak}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${timePct > 50 ? "bg-fuchsia-500" : timePct > 25 ? "bg-amber-500" : "bg-rose-500"}`}
              style={{ width: `${timePct}%` }}
            />
          </div>
          <span className={`text-xs font-black tabular-nums ${timePct < 25 ? "text-rose-400" : "text-slate-300"}`}>{timeLeft}s</span>
        </div>
        <button onClick={onBackToHub} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">✕ Exit</button>
      </div>

      {/* Game area */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-8 overflow-y-auto">
        {/* Matra info card */}
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 shadow-lg">
          <div className="text-5xl font-black text-fuchsia-300" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            {matra.matraSymbol}
          </div>
          <div className="text-left">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Current Matra</div>
            <div className="text-sm font-bold text-white">{matra.matraName}</div>
            <div className="text-xs text-fuchsia-300 mt-0.5">
              {matra.exampleBase} + {matra.matraSymbol} = {matra.exampleTarget} &nbsp;&bull;&nbsp; InScript: <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono">{matra.inscriptKey}</kbd>
            </div>
          </div>
        </div>

        {/* Target word */}
        <div className="text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Type this word</p>
          <div
            className={`text-5xl md:text-6xl font-black tracking-wider transition-all duration-300 ${result === "correct" ? "text-emerald-400 scale-105" : result === "wrong" ? "text-rose-400" : "text-white"}`}
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            {currentWord}
          </div>

          {result && (
            <div className={`mt-3 text-sm font-semibold ${result === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
              {result === "correct" ? "✅ बिल्कुल सही! (Perfect!)" : `❌ समय समाप्त! (Time up!) The word was: ${currentWord}`}
            </div>
          )}
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          value={input}
          onChange={handleInput}
          autoFocus
          disabled={!!result}
          placeholder="यहाँ टाइप करें..."
          className={`w-full max-w-sm rounded-2xl px-5 py-4 text-2xl font-bold text-center transition-all duration-200 focus:outline-none ${
            result === "correct"
              ? "bg-emerald-950 border-2 border-emerald-500 text-emerald-300"
              : result === "wrong"
              ? "bg-rose-950 border-2 border-rose-500 text-rose-300"
              : "bg-slate-800 border border-slate-700 text-white focus:border-fuchsia-500/60 focus:ring-1 focus:ring-fuchsia-500/30"
          }`}
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          lang="hi"
        />

        {/* Practice words reminder */}
        <div className="flex flex-wrap gap-2 justify-center max-w-sm">
          {matra.practiceWords.map(w => (
            <span
              key={w}
              className={`text-sm px-3 py-1 rounded-full border ${w === currentWord ? "bg-fuchsia-500/20 border-fuchsia-500/50 text-fuchsia-300 font-bold" : "bg-slate-900 border-slate-800 text-slate-500"}`}
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              {w}
            </span>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {Array.from({ length: ROUNDS_TOTAL }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i < round - 1 ? "bg-fuchsia-400" : i === round - 1 ? "bg-fuchsia-200 scale-125" : "bg-slate-700"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
