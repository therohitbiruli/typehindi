"use client";

import { useState, useEffect, useCallback } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { GameCanvas } from "../../components/GameCanvas";
import { TankGameCanvas } from "../../components/TankGameCanvas";
import { TypingTargetGame } from "../../components/games/TypingTargetGame";
import { WordRunnerGame } from "../../components/games/WordRunnerGame";
import { WordBuilderGame } from "../../components/games/WordBuilderGame";
import { MatraChallengeGame } from "../../components/games/MatraChallengeGame";
import { UnifiedGameResults } from "../../components/games/UnifiedGameResults";
import { GAME_CATALOG, GameInfo } from "../../data/gameData";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";
type GameScreen = "hub" | "difficulty" | "playing" | "results";

interface HubStats {
  gamesPlayed: number;
  highestScore: number;
  bestAccuracy: number;
  bestSpeed: number;
}

interface GameResult {
  score: number;
  accuracy: number;
  wpm?: number;
  correct: number;
  incorrect: number;
  streak: number;
}

const CATEGORIES: { key: string; label: string; icon: string; ids: string[] }[] = [
  { key: "action", label: "ACTION & REFLEX GAMES", icon: "⚡", ids: ["tank", "target"] },
  { key: "speed",  label: "SPEED GAMES",           icon: "🏃", ids: ["classic", "runner"] },
  { key: "learn",  label: "LEARNING GAMES",         icon: "🎓", ids: ["builder", "matra"] },
];

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Beginner:     "text-emerald-400 border-emerald-500/50 bg-emerald-500/10",
  Intermediate: "text-amber-400 border-amber-500/50 bg-amber-500/10",
  Advanced:     "text-rose-400 border-rose-500/50 bg-rose-500/10",
};

export default function GamePage() {
  const [screen, setScreen] = useState<GameScreen>("hub");
  const [selectedGame, setSelectedGame] = useState<GameInfo | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("Intermediate");
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [hubStats, setHubStats] = useState<HubStats>({ gamesPlayed: 0, highestScore: 0, bestAccuracy: 0, bestSpeed: 0 });

  // Load stats from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("typehindi_game_hub_stats");
      if (saved) setHubStats(JSON.parse(saved));
    } catch (_) {}
  }, []);

  const openDifficultyPicker = (game: GameInfo) => {
    setSelectedGame(game);
    setScreen("difficulty");
  };

  const startGame = (diff: Difficulty) => {
    setDifficulty(diff);
    setScreen("playing");
    setGameResult(null);
  };

  const handleGameOver = useCallback((stats: GameResult) => {
    setGameResult(stats);
    setScreen("results");
    // Update hub stats
    try {
      const saved = localStorage.getItem("typehindi_game_hub_stats");
      const cur = saved ? JSON.parse(saved) : { gamesPlayed: 0, highestScore: 0, bestAccuracy: 0, bestSpeed: 0 };
      const updated = {
        gamesPlayed: cur.gamesPlayed + 1,
        highestScore: Math.max(cur.highestScore, stats.score),
        bestAccuracy: Math.max(cur.bestAccuracy, Math.round(stats.accuracy)),
        bestSpeed: Math.max(cur.bestSpeed, Math.round(stats.wpm ?? 0)),
      };
      localStorage.setItem("typehindi_game_hub_stats", JSON.stringify(updated));
      setHubStats(updated);
    } catch (_) {}
  }, []);

  const backToHub = () => {
    setScreen("hub");
    setSelectedGame(null);
    setGameResult(null);
  };

  // ── Hub Screen ──────────────────────────────────────────────────────────
  if (screen === "hub") {
    return (
      <div className="container-main py-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Games" }]} />
        <AdPlaceholder position="top" />

        {/* Hero */}
        <div className="text-center mb-10 mt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-4">
            🎮 Typing Game Hub
          </div>
          <h1 className="heading-1 mb-3 text-4xl md:text-5xl">Play and Learn</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Play, practice, and improve your Hindi typing skills through 6 interactive games.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { label: "Games Played", value: hubStats.gamesPlayed, icon: "🎮", color: "text-primary-400" },
            { label: "Highest Score", value: hubStats.highestScore.toLocaleString(), icon: "⭐", color: "text-amber-400" },
            { label: "Best Accuracy", value: `${hubStats.bestAccuracy}%`, icon: "🎯", color: "text-emerald-400" },
            { label: "Best WPM", value: hubStats.bestSpeed, icon: "⚡", color: "text-cyan-400" },
          ].map(s => (
            <div key={s.label} className="card p-4 text-center border border-slate-800 rounded-2xl bg-slate-900/60">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Game Categories */}
        {CATEGORIES.map(cat => {
          const games = GAME_CATALOG.filter(g => cat.ids.includes(g.id));
          return (
            <section key={cat.key} className="mb-12">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{cat.icon}</span>
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">{cat.label}</h2>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Game cards - equal 2-col */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {games.map(game => (
                  <GameCard key={game.id} game={game} onPlay={() => openDifficultyPicker(game)} />
                ))}
              </div>
            </section>
          );
        })}

        <AdPlaceholder position="bottom" />
      </div>
    );
  }

  // ── Difficulty Picker ───────────────────────────────────────────────────
  if (screen === "difficulty" && selectedGame) {
    return (
      <div className="container-main py-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Games", href: "/game" }, { label: selectedGame.title }]} />
        <div className="max-w-xl mx-auto mt-10 text-center">
          <div className="text-5xl mb-4">{selectedGame.icon}</div>
          <h2 className="text-3xl font-extrabold text-white mb-2">{selectedGame.title}</h2>
          <p className="text-slate-400 mb-10">{selectedGame.description}</p>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {(["Beginner", "Intermediate", "Advanced"] as Difficulty[]).map(d => (
              <button
                key={d}
                onClick={() => startGame(d)}
                className={`flex items-center justify-between w-full p-5 rounded-2xl border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${DIFFICULTY_COLORS[d]}`}
              >
                <div className="text-left">
                  <div className="font-black text-lg">{d}</div>
                  <div className="text-xs opacity-70 mt-0.5">
                    {d === "Beginner" ? "Simple words, more time" : d === "Intermediate" ? "Balanced challenge" : "Fast & complex words"}
                  </div>
                </div>
                <span className="text-2xl">→</span>
              </button>
            ))}
          </div>

          <button
            onClick={backToHub}
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
          >
            ← Back to Game Hub
          </button>
        </div>
      </div>
    );
  }

  // ── Playing / Results ───────────────────────────────────────────────────
  if ((screen === "playing" || screen === "results") && selectedGame) {
    return (
      <div className="container-main py-6">
        <div className="max-w-4xl mx-auto">
          {/* Game container */}
          <div className="rounded-[2rem] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50 min-h-[600px] flex flex-col">
            {/* Header strip */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-950/80 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-lg">{selectedGame.icon}</span>
                <span className="text-sm font-bold text-white">{selectedGame.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[difficulty]}`}>{difficulty}</span>
              </div>
              {screen === "playing" && (
                <button onClick={backToHub} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">← Hub</button>
              )}
            </div>

            {/* Game content */}
            <div className="flex-1 flex flex-col">
              {screen === "results" && gameResult ? (
                <UnifiedGameResults
                  gameTitle={selectedGame.title}
                  gameId={selectedGame.id}
                  score={gameResult.score}
                  accuracy={gameResult.accuracy}
                  wpm={gameResult.wpm}
                  correctCount={gameResult.correct}
                  incorrectCount={gameResult.incorrect}
                  bestStreak={gameResult.streak}
                  difficulty={difficulty}
                  onPlayAgain={() => startGame(difficulty)}
                  onChangeDifficulty={() => setScreen("difficulty")}
                  onBackToHub={backToHub}
                />
              ) : selectedGame.id === "classic" ? (
                <GameCanvas />
              ) : selectedGame.id === "tank" ? (
                <TankGameCanvas />
              ) : selectedGame.id === "target" ? (
                <TypingTargetGame
                  difficulty={difficulty}
                  onGameOver={handleGameOver}
                  onBackToHub={backToHub}
                />
              ) : selectedGame.id === "runner" ? (
                <WordRunnerGame
                  difficulty={difficulty}
                  onGameOver={handleGameOver}
                  onBackToHub={backToHub}
                />
              ) : selectedGame.id === "builder" ? (
                <WordBuilderGame
                  difficulty={difficulty}
                  onGameOver={handleGameOver}
                  onBackToHub={backToHub}
                />
              ) : selectedGame.id === "matra" ? (
                <MatraChallengeGame
                  difficulty={difficulty}
                  onGameOver={handleGameOver}
                  onBackToHub={backToHub}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── GameCard component ────────────────────────────────────────────────────
function GameCard({ game, onPlay }: { game: GameInfo; onPlay: () => void }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5">
      {/* Visual preview area */}
      <div className={`relative h-40 bg-gradient-to-br ${game.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Background glow blob */}
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 60% 40%, rgba(99,102,241,0.3), transparent 70%)" }} />

        {/* Thumbnail image if exists */}
        {game.thumbImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={game.thumbImage}
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
          />
        ) : null}

        {/* Game icon */}
        <div className="relative z-10 text-6xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          {game.icon}
        </div>

        {/* Badge */}
        <span className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${game.badgeColor} shadow-sm`}>
          {game.badge}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col p-5 gap-3">
        <div>
          <h3 className="text-lg font-extrabold text-white leading-tight">{game.title}</h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>{game.hindiTitle}</p>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed flex-1">{game.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {game.skills.map(s => (
            <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">
              {s}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DIFFICULTY_COLORS[game.difficulty]}`}>
            {game.difficulty}
          </span>

          <button
            onClick={onPlay}
            className="flex items-center gap-2 text-sm font-bold text-primary-300 hover:text-primary-200 transition-colors group-hover:gap-3 duration-300"
          >
            Play Now <span className="text-base">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
