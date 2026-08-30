"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { WORD_BUILDER_PUZZLES, WordBuilderPuzzle } from "../../data/gameData";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

const DIFF_FILTER = {
  Beginner:     ["basic", "matra"],
  Intermediate: ["basic", "matra", "common"],
  Advanced:     ["common", "conjunct", "difficult"],
};

const TOTAL_ROUNDS = 15;
const TIME_PER_ROUND = { Beginner: 20, Intermediate: 15, Advanced: 10 };

interface Props {
  difficulty: Difficulty;
  onGameOver: (stats: { score: number; accuracy: number; correct: number; incorrect: number; streak: number }) => void;
  onBackToHub: () => void;
}

export function WordBuilderGame({ difficulty, onGameOver, onBackToHub }: Props) {
  const [round, setRound] = useState(1);
  const [puzzle, setPuzzle] = useState<WordBuilderPuzzle | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_ROUND[difficulty]);
  const [shuffledPuzzles, setShuffledPuzzles] = useState<WordBuilderPuzzle[]>([]);
  const [done, setDone] = useState(false);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const bestStreakRef = useRef(0);
  const correctRef = useRef(0);
  const incorrectRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allowedCategories = DIFF_FILTER[difficulty];

  // Shuffle puzzles on mount
  useEffect(() => {
    const filtered = WORD_BUILDER_PUZZLES.filter(p => allowedCategories.includes(p.category));
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, TOTAL_ROUNDS);
    setShuffledPuzzles(shuffled);
    setPuzzle(shuffled[0] ?? null);
    setTimeLeft(TIME_PER_ROUND[difficulty]);
  }, [difficulty]);

  const goNext = useCallback(() => {
    const nextRound = round + 1;
    if (nextRound > TOTAL_ROUNDS || nextRound > shuffledPuzzles.length) {
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
    setRound(nextRound);
    setPuzzle(shuffledPuzzles[nextRound - 1]);
    setSelectedOption(null);
    setResult(null);
    setTimeLeft(TIME_PER_ROUND[difficulty]);
  }, [round, shuffledPuzzles, difficulty, onGameOver]);

  // Round timer
  useEffect(() => {
    if (result || done || !puzzle) return;
    const tick = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(tick);
          // Time out = wrong
          incorrectRef.current += 1;
          streakRef.current = 0;
          setIncorrect(i => i + 1);
          setStreak(0);
          setResult("wrong");
          setSelectedOption(null);
          setTimeout(goNext, 1500);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [result, done, puzzle, goNext]);

  const handleOption = (opt: string) => {
    if (result) return;
    setSelectedOption(opt);

    if (opt === puzzle?.missing) {
      const bonus = timeLeft * 5;
      const streakBonus = Math.min(streakRef.current * 10, 100);
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
    } else {
      incorrectRef.current += 1;
      streakRef.current = 0;
      setIncorrect(i => i + 1);
      setStreak(0);
      setResult("wrong");
    }

    setTimeout(goNext, 1600);
  };

  if (!puzzle || done) {
    return <div className="flex items-center justify-center h-full text-white text-xl">Loading...</div>;
  }

  const timeMax = TIME_PER_ROUND[difficulty];
  const timePct = (timeLeft / timeMax) * 100;

  // Shuffle options once per puzzle
  const options = puzzle.options;

  return (
    <div className="flex flex-col h-full">
      {/* HUD */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 gap-4 flex-shrink-0">
        <div className="flex items-center gap-5 text-sm font-bold">
          <span className="text-slate-400 font-medium">Round {round}/{Math.min(TOTAL_ROUNDS, shuffledPuzzles.length)}</span>
          <span className="text-amber-400">⭐ {score.toLocaleString()}</span>
          <span className="text-emerald-400">✅ {correct}</span>
          <span className="text-rose-400">❌ {incorrect}</span>
          <span className="text-orange-400">🔥 {streak}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${timePct > 50 ? "bg-emerald-500" : timePct > 25 ? "bg-amber-500" : "bg-rose-500"}`}
              style={{ width: `${timePct}%` }}
            />
          </div>
          <span className={`text-xs font-black tabular-nums ${timePct < 25 ? "text-rose-400" : "text-slate-300"}`}>{timeLeft}s</span>
        </div>
        <button onClick={onBackToHub} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">✕ Exit</button>
      </div>

      {/* Puzzle */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-8 overflow-y-auto">
        {/* Category badge */}
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
          {puzzle.category === "matra" ? "✨ मात्रा" : puzzle.category === "conjunct" ? "🔗 संयुक्त" : puzzle.category === "difficult" ? "💎 कठिन" : "📘 " + puzzle.category}
        </span>

        {/* Word display */}
        <div className="text-center">
          <div
            className={`text-5xl md:text-6xl font-black mb-3 transition-all duration-300 ${result === "correct" ? "text-emerald-400" : result === "wrong" ? "text-rose-400" : "text-white"}`}
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", letterSpacing: "0.1em" }}
          >
            {result === "correct" || (result === "wrong" && selectedOption !== null)
              ? puzzle.word
              : puzzle.display}
          </div>

          {result && (
            <div className={`text-sm font-semibold mt-2 ${result === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
              {result === "correct" ? `✅ सही! (Correct)` : `❌ गलत! Answer: ${puzzle.missing}`}
            </div>
          )}
        </div>

        {/* Hint */}
        <p className="text-sm text-slate-400 text-center italic max-w-xs">💡 {puzzle.hint}</p>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          {options.map(opt => {
            let btnClass = "border border-slate-700 bg-slate-800 text-white hover:border-indigo-400 hover:bg-indigo-950";
            if (result) {
              if (opt === puzzle.missing) btnClass = "border-2 border-emerald-500 bg-emerald-950 text-emerald-300 font-black";
              else if (opt === selectedOption && result === "wrong") btnClass = "border-2 border-rose-500 bg-rose-950 text-rose-300";
            }
            return (
              <button
                key={opt}
                onClick={() => handleOption(opt)}
                disabled={!!result}
                className={`rounded-2xl px-6 py-4 text-2xl md:text-3xl font-black transition-all duration-200 ${btnClass} ${!result ? "active:scale-95" : ""}`}
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-xs">
          {Array.from({ length: Math.min(TOTAL_ROUNDS, shuffledPuzzles.length) }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i < round - 1 ? "bg-indigo-400" : i === round - 1 ? "bg-indigo-200 scale-125" : "bg-slate-700"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
