"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Breadcrumb } from "../Breadcrumb";
import { AdPlaceholder } from "../AdPlaceholder";
import { GameCanvas } from "../GameCanvas";
import { TankGameCanvas } from "../TankGameCanvas";
import { TypingTargetGame } from "./TypingTargetGame";
import { WordRunnerGame } from "./WordRunnerGame";
import { WordBuilderGame } from "./WordBuilderGame";
import { MatraChallengeGame } from "./MatraChallengeGame";
import { UnifiedGameResults } from "./UnifiedGameResults";
import { GameInfo, GAME_CATALOG } from "../../data/gameData";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Beginner: "text-emerald-400 border-emerald-500/50 bg-emerald-500/10",
  Intermediate: "text-amber-400 border-amber-500/50 bg-amber-500/10",
  Advanced: "text-rose-400 border-rose-500/50 bg-rose-500/10",
};

interface GameResult {
  score: number;
  accuracy: number;
  wpm?: number;
  correct: number;
  incorrect: number;
  streak: number;
}

interface Props {
  game: GameInfo;
}

export function GameRunnerClient({ game }: Props) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>(game.difficulty);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [showDifficultyPicker, setShowDifficultyPicker] = useState(false);

  const handleGameOver = useCallback((stats: GameResult) => {
    setGameResult(stats);
    setIsPlaying(false);
  }, []);

  const handlePlayAgain = () => {
    setGameResult(null);
    setIsPlaying(true);
    setShowDifficultyPicker(false);
  };

  const handleSelectDifficulty = (d: Difficulty) => {
    setDifficulty(d);
    setGameResult(null);
    setIsPlaying(true);
    setShowDifficultyPicker(false);
  };

  const otherGames = GAME_CATALOG.filter((g) => g.slug !== game.slug);

  return (
    <div className="container-main py-6">
      {/* Breadcrumb Navigation: Game Hub / Current Game Name */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Game Hub", href: "/game" },
          { label: game.title },
        ]}
      />

      {/* Top Header & Back Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 mt-3">
        <Link
          href="/game"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors shadow-sm"
        >
          <span>←</span>
          <span>Back to Game Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDifficultyPicker((prev) => !prev)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>⚙️ Difficulty:</span>
            <span
              className={`px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[difficulty]}`}
            >
              {difficulty}
            </span>
          </button>
        </div>
      </div>

      <AdPlaceholder position="top" />

      {/* Difficulty Picker Dropdown Modal */}
      {showDifficultyPicker && (
        <div className="mb-6 p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl max-w-xl mx-auto text-center animate-in fade-in zoom-in-95 duration-200">
          <h3 className="text-lg font-bold text-white mb-2">Change Difficulty</h3>
          <p className="text-xs text-slate-400 mb-4">
            Select your preferred challenge tier for {game.title}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(["Beginner", "Intermediate", "Advanced"] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={() => handleSelectDifficulty(d)}
                className={`p-3 rounded-2xl border-2 text-sm font-bold transition-all ${
                  difficulty === d
                    ? "ring-2 ring-primary-500 scale-105"
                    : "opacity-80 hover:opacity-100"
                } ${DIFFICULTY_COLORS[d]}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🎮 Main Game Arena Container */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/70 min-h-[620px] flex flex-col relative">
          {/* Top Game Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{game.icon}</span>
              <div>
                <h1 className="text-base font-bold text-white leading-tight">
                  {game.title}
                </h1>
                <span
                  className="text-xs text-slate-400"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {game.hindiTitle}
                </span>
              </div>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full border ml-2 hidden sm:inline-block ${DIFFICULTY_COLORS[difficulty]}`}
              >
                {difficulty}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                {game.category}
              </span>
            </div>
          </div>

          {/* Active Game View */}
          <div className="flex-1 flex flex-col">
            {gameResult ? (
              <UnifiedGameResults
                gameTitle={game.title}
                gameId={game.id}
                score={gameResult.score}
                accuracy={gameResult.accuracy}
                wpm={gameResult.wpm}
                correctCount={gameResult.correct}
                incorrectCount={gameResult.incorrect}
                bestStreak={gameResult.streak}
                difficulty={difficulty}
                onPlayAgain={handlePlayAgain}
                onChangeDifficulty={() => setShowDifficultyPicker(true)}
                onBackToHub={() => {
                  window.location.href = "/game";
                }}
              />
            ) : game.id === "classic" ? (
              <GameCanvas />
            ) : game.id === "tank" ? (
              <TankGameCanvas />
            ) : game.id === "target" ? (
              <TypingTargetGame
                difficulty={difficulty}
                onGameOver={handleGameOver}
                onBackToHub={() => {
                  window.location.href = "/game";
                }}
              />
            ) : game.id === "runner" ? (
              <WordRunnerGame
                difficulty={difficulty}
                onGameOver={handleGameOver}
                onBackToHub={() => {
                  window.location.href = "/game";
                }}
              />
            ) : game.id === "builder" ? (
              <WordBuilderGame
                difficulty={difficulty}
                onGameOver={handleGameOver}
                onBackToHub={() => {
                  window.location.href = "/game";
                }}
              />
            ) : game.id === "matra" ? (
              <MatraChallengeGame
                difficulty={difficulty}
                onGameOver={handleGameOver}
                onBackToHub={() => {
                  window.location.href = "/game";
                }}
              />
            ) : null}
          </div>
        </div>
      </div>

      <AdPlaceholder position="bottom" />

      {/* ========================================================================= */}
      {/* Detailed Game Information & Guide */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="card p-8 md:p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/70">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{game.icon}</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                About {game.title}
              </h2>
              <p
                className="text-xs text-slate-400"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {game.hindiTitle} — संपूर्ण गेम गाइड और निर्देश
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
            {game.description} Playing <strong>{game.title}</strong> regularly helps develop natural
            finger positioning and rapid muscle memory for Devanagari Unicode, Remington GAIL, and
            InScript layouts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                🎯 Skills Trained
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {game.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-primary-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                ⚡ Recommended Difficulty
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Beginners should start with <strong className="text-emerald-400">Beginner</strong>{" "}
                to master key locations before switching to{" "}
                <strong className="text-amber-400">Intermediate</strong> or{" "}
                <strong className="text-rose-400">Advanced</strong> for reflex and speed testing.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <Link
              href="/game"
              className="text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1.5"
            >
              <span>←</span>
              <span>Back to All Games Hub</span>
            </Link>

            <Link
              href="/practice"
              className="text-sm font-bold text-slate-300 hover:text-white transition-colors"
            >
              Switch to Typing Practice →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Other Games Carousel / Grid */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto mb-12">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🎮</span>
          <span>More Hindi Typing Games</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {otherGames.slice(0, 3).map((g) => (
            <Link
              key={g.slug}
              href={`/game/${g.slug}`}
              className="card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:scale-[1.02] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-2">{g.icon}</div>
                <h4 className="text-base font-bold text-white mb-1">{g.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">{g.description}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-primary-400">
                <span>Play Game</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
