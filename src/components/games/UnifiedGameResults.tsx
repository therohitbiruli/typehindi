"use client";

import { useEffect } from "react";

export interface UnifiedGameResultsProps {
  gameTitle: string;
  gameId: string;
  score: number;
  accuracy: number;
  wpm?: number;
  correctCount: number;
  incorrectCount: number;
  bestStreak: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  onPlayAgain: () => void;
  onChangeDifficulty: () => void;
  onBackToHub: () => void;
}

export function UnifiedGameResults({
  gameTitle,
  gameId,
  score,
  accuracy,
  wpm = 0,
  correctCount,
  incorrectCount,
  bestStreak,
  difficulty,
  onPlayAgain,
  onChangeDifficulty,
  onBackToHub,
}: UnifiedGameResultsProps) {
  // Save game stats to localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("typehindi_game_hub_stats");
      const currentStats = saved
        ? JSON.parse(saved)
        : { gamesPlayed: 0, highestScore: 0, bestAccuracy: 0, bestSpeed: 0 };

      const updated = {
        gamesPlayed: currentStats.gamesPlayed + 1,
        highestScore: Math.max(currentStats.highestScore || 0, score),
        bestAccuracy: Math.max(currentStats.bestAccuracy || 0, Math.round(accuracy)),
        bestSpeed: Math.max(currentStats.bestSpeed || 0, Math.round(wpm)),
        lastPlayedGame: gameId,
        lastPlayedDate: new Date().toISOString()
      };

      localStorage.setItem("typehindi_game_hub_stats", JSON.stringify(updated));
    } catch (_) {}
  }, [gameId, score, accuracy, wpm]);

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 text-center animate-in fade-in zoom-in-95 duration-300">
      {/* Trophy & Title */}
      <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center text-4xl mb-4 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
        🏆
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-1">
        Game Completed • {difficulty}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
        {gameTitle}
      </h2>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        Great effort! Here is your performance breakdown for this session.
      </p>

      {/* Primary Score Banner */}
      <div className="w-full max-w-lg rounded-3xl bg-gradient-to-br from-primary-950/60 via-slate-900 to-slate-900 border border-primary-500/30 p-6 mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Final Score</div>
        <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary-300 to-emerald-400 tracking-tight">
          {score.toLocaleString()}
        </div>
      </div>

      {/* Detailed Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-8">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
          <span className="text-xs text-slate-400 mb-1">Accuracy</span>
          <span className="text-2xl font-bold text-emerald-400">{Math.round(accuracy)}%</span>
        </div>

        {wpm > 0 ? (
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
            <span className="text-xs text-slate-400 mb-1">Speed (WPM)</span>
            <span className="text-2xl font-bold text-cyan-400">{Math.round(wpm)}</span>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
            <span className="text-xs text-slate-400 mb-1">Correct</span>
            <span className="text-2xl font-bold text-emerald-400">{correctCount}</span>
          </div>
        )}

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
          <span className="text-xs text-slate-400 mb-1">Best Streak</span>
          <span className="text-2xl font-bold text-amber-400">🔥 {bestStreak}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center">
          <span className="text-xs text-slate-400 mb-1">Errors</span>
          <span className="text-2xl font-bold text-rose-400">{incorrectCount}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onPlayAgain}
          className="btn-primary rounded-xl px-6 py-3 text-sm font-bold shadow-lg shadow-primary-500/25 flex items-center gap-2"
        >
          <span>🔄</span> Play Again
        </button>

        <button
          onClick={onChangeDifficulty}
          className="btn-secondary rounded-xl px-5 py-3 text-sm font-semibold flex items-center gap-2 border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
        >
          <span>⚙️</span> Change Difficulty
        </button>

        <button
          onClick={onBackToHub}
          className="btn-secondary rounded-xl px-5 py-3 text-sm font-semibold flex items-center gap-2 border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
        >
          <span>🏠</span> Back to Game Hub
        </button>
      </div>
    </div>
  );
}
