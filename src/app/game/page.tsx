"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { GAME_CATALOG, GameInfo } from "../../data/gameData";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface HubStats {
  gamesPlayed: number;
  highestScore: number;
  bestAccuracy: number;
  bestSpeed: number;
}

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Beginner: "text-emerald-400 border-emerald-500/50 bg-emerald-500/10",
  Intermediate: "text-amber-400 border-amber-500/50 bg-amber-500/10",
  Advanced: "text-rose-400 border-rose-500/50 bg-rose-500/10",
};

export default function GameHubPage() {
  const [hubStats, setHubStats] = useState<HubStats>({
    gamesPlayed: 0,
    highestScore: 0,
    bestAccuracy: 0,
    bestSpeed: 0,
  });

  // Load stats from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("typehindi_game_hub_stats");
      if (saved) setHubStats(JSON.parse(saved));
    } catch (_) {}
  }, []);

  const scrollToGames = () => {
    const el = document.getElementById("choose-games");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Game Hub" }]} />
      <AdPlaceholder position="top" />

      {/* ========================================================================= */}
      {/* 1. HERO / INTRODUCTION */}
      {/* ========================================================================= */}
      <section className="text-center mt-4 mb-12 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-4">
          🎮 Interactive Typing Games
        </div>
        <h1 className="heading-1 mb-4 text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-tight">
          Learn Hindi Typing Through Games
        </h1>
        <p className="text-muted text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
          Make typing practice more engaging by playing interactive Hindi typing games designed to
          improve speed, accuracy, reflexes, character recognition, matras, and difficult Hindi
          words.
        </p>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-8">
          Repetitive typing drills can often feel monotonous. Our gamified challenges turn everyday
          keystroke practice into fast-paced reflex drills, spelling quests, and dynamic obstacle runs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToGames}
            className="btn-primary rounded-xl px-7 py-3.5 text-base font-bold shadow-lg shadow-primary-500/25 flex items-center gap-2"
          >
            <span>Explore Games</span>
            <span>↓</span>
          </button>
          <Link
            href="/practice"
            className="btn-secondary rounded-xl px-6 py-3.5 text-base font-semibold border border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
          >
            Standard Practice →
          </Link>
        </div>
      </section>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
        {[
          { label: "Games Played", value: hubStats.gamesPlayed, icon: "🎮", color: "text-primary-400" },
          {
            label: "Highest Score",
            value: hubStats.highestScore.toLocaleString(),
            icon: "⭐",
            color: "text-amber-400",
          },
          { label: "Best Accuracy", value: `${hubStats.bestAccuracy}%`, icon: "🎯", color: "text-emerald-400" },
          { label: "Best Speed", value: `${hubStats.bestSpeed} WPM`, icon: "⚡", color: "text-cyan-400" },
        ].map((s) => (
          <div
            key={s.label}
            className="card p-5 text-center border border-slate-800 rounded-2xl bg-slate-900/70 shadow-lg"
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className={`text-2xl sm:text-3xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 2. BENEFITS OF LEARNING HINDI TYPING THROUGH GAMES */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Why Gamified Learning Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Why Learn Hindi Typing Through Games?
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Typing games bridge the gap between mechanical repetition and intuitive muscle memory by
            rewarding accuracy, timing, and cognitive recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-4">
              🚀
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Improve Typing Speed</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Games encourage users to type repeatedly and respond quickly. As challenges gradually
              become faster, users practice recognizing Hindi characters and typing them more
              efficiently without hesitation.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-2xl mb-4">
              🎯
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Build Better Accuracy</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Typing games reward correct answers and streak combos. Users learn to focus on precision
              instead of blindly hammering keys, building true muscle memory for Remington and InScript
              layouts.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Improve Reflexes</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fast-paced game mechanics require users to spot words instantly and react. This
              sharpens neuromuscular reflexes between visual text perception and finger keystrokes.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-2xl mb-4">
              ✨
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Make Practice Engaging</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Traditional typing exercises can sometimes feel monotonous. Games introduce dynamic
              objectives, scoreboards, streaks, and progressive difficulty tiers that make daily
              practice fun and rewarding.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl mb-4">
              📚
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Learn Difficult Hindi Words</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Games systematically introduce complex vocabulary: common nouns, matra combinations,
              vowel modifiers, half-letters (हलंत), and challenging conjunct characters (संयुक्त अक्षर).
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-4">
              🔄
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Practice Without Boredom</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Switching between target aiming, obstacle running, falling words, and spelling puzzles
              keeps learning fresh and tests different cognitive typing dimensions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GAME HUB - CHOOSE YOUR TYPING GAME (DEDICATED URL LINKS) */}
      {/* ========================================================================= */}
      <section id="choose-games" className="mb-20 scroll-mt-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            6 Dedicated Games
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Choose Your Typing Game
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Click any game below to open its dedicated interactive gaming arena with custom difficulty
            modes.
          </p>
        </div>

        {/* 6 Game Cards in 3-col Desktop / 2-col Tablet / 1-col Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAME_CATALOG.map((game) => (
            <Link
              key={game.slug}
              href={`/game/${game.slug}`}
              className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col transition-all duration-300 hover:border-primary-500/60 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1"
            >
              {/* Visual preview banner */}
              <div
                className={`relative h-48 bg-gradient-to-br ${game.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 60% 40%, rgba(99,102,241,0.35), transparent 70%)",
                  }}
                />

                {/* Thumbnail image */}
                {game.thumbImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={game.thumbImage}
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-65 transition-opacity duration-500"
                  />
                ) : null}

                {/* Game icon */}
                <div className="relative z-10 text-6xl filter drop-shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  {game.icon}
                </div>

                {/* Badge */}
                <span
                  className={`absolute top-3.5 left-3.5 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${game.badgeColor} shadow-md`}
                >
                  {game.badge}
                </span>
              </div>

              {/* Info Container */}
              <div className="flex-1 flex flex-col p-6 gap-3">
                <div>
                  <h3 className="text-xl font-extrabold text-white leading-tight group-hover:text-primary-300 transition-colors">
                    {game.title}
                  </h3>
                  <p
                    className="text-xs text-slate-400 font-medium mt-0.5"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {game.hindiTitle}
                  </p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed flex-1">{game.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 my-1">
                  {game.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DIFFICULTY_COLORS[game.difficulty]}`}
                  >
                    {game.difficulty}
                  </span>

                  <span className="btn-primary rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-1.5 shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
                    Play Now <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdPlaceholder position="bottom" />

      {/* ========================================================================= */}
      {/* 4. DETAILED GAME GUIDES (WITH DIRECT LINKS TO EACH GAME ROUTE) */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Comprehensive Handbook
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Detailed Game Guides & Tutorials
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Learn the mechanics, rules, scoring tips, and educational benefits of each individual
            typing game.
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Classic Falling Words Guide */}
          <div className="card p-8 md:p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/70 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🌧️</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                    Speed & Gravity Run
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Classic Falling Words (क्लासिक फॉलिंग वर्ड्स)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  <strong>Overview:</strong> Practice Hindi typing by typing characters, words, and
                  sentences before gravity pulls them to the bottom of the screen.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ⚙️ How It Works
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Hindi words spawn at random horizontal positions at the top of the canvas and
                      cascade downward. You must type the matching word in the input box and press
                      Enter or Space before it hits the baseline.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      🎮 How to Play
                    </h4>
                    <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                      <li>Start the game and watch descending words.</li>
                      <li>Type the active Hindi word in the input field.</li>
                      <li>Destroy words before they touch the bottom ground.</li>
                      <li>Maintain your 3 lives and build high accuracy streaks.</li>
                    </ol>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-400 mr-2">Skills Improved:</span>
                  {["Typing speed", "Accuracy", "Character recognition", "Reaction time"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-rose-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 mb-6 text-xs text-slate-400">
                  <strong className="text-amber-400">💡 Pro Tips:</strong> Focus on accuracy first.
                  Rushing causes spelling mistakes that lose precious seconds. Learn key positions
                  for common vowels and consonants on your keyboard layout to build rapid reflexes.
                </div>

                <Link
                  href="/game/falling-words"
                  className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm font-bold items-center gap-2 shadow-md"
                >
                  Play Classic Falling Words →
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Tank Defender Guide */}
          <div className="card p-8 md:p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/70 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🛡️</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Base Defense & Combat
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Tank Defender (टैंक डिफेंडर)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  <strong>Overview:</strong> Defend your base by typing Hindi characters or words
                  shown on incoming enemy tanks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ⚙️ How It Works
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Hostile tanks advance toward your base defense perimeter. Each tank displays a
                      unique Hindi glyph. Typing the exact character aims your turret and fires a
                      laser shell to destroy the enemy.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      🎮 How to Play
                    </h4>
                    <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                      <li>Select your language mode (Hindi / Devanagari).</li>
                      <li>Observe approaching enemy armored tanks.</li>
                      <li>Type the displayed character instantly.</li>
                      <li>Build multi-kill streaks for exponential score multipliers.</li>
                    </ol>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-400 mr-2">Skills Improved:</span>
                  {["Reaction time", "Fast Hindi typing", "Pressure management", "Perception"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 mb-6 text-xs text-slate-400">
                  <strong className="text-emerald-400">💡 Pro Tips:</strong> Stay calm when multiple
                  tanks swarm the perimeter. Prioritize the closest tank to your base first before
                  targeting distant vehicles.
                </div>

                <Link
                  href="/game/tank-defender"
                  className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm font-bold items-center gap-2 shadow-md"
                >
                  Play Tank Defender →
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Typing Target Guide */}
          <div className="card p-8 md:p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/70 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎯</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Arcade Precision & Radar
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Typing Target (टाइपिंग टार्गेट)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  <strong>Overview:</strong> Lock onto radar targets scattered across the arena and
                  destroy them by typing the displayed Hindi words before their countdown rings
                  expire.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ⚙️ How It Works
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Glowing radar rings appear across the screen with Hindi words. A circular
                      countdown timer ticks down. Typing the word triggers a particle explosion and
                      awards time & streak bonuses.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      🎮 How to Play
                    </h4>
                    <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                      <li>Scan the radar screen for active glowing targets.</li>
                      <li>Type the word on the target with the least time remaining.</li>
                      <li>Earn combo multipliers (2x, 3x, 4x, 5x) for unbroken hits.</li>
                      <li>Clear the screen within the 60-second round limit.</li>
                    </ol>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-400 mr-2">Skills Improved:</span>
                  {["Target acquisition", "Speed", "Reflexes", "Word recognition"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 mb-6 text-xs text-slate-400">
                  <strong className="text-amber-400">💡 Pro Tips:</strong> Focus on one target at a
                  time. Do not look away from your active word until you finish typing it.
                </div>

                <Link
                  href="/game/typing-target"
                  className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm font-bold items-center gap-2 shadow-md"
                >
                  Play Typing Target →
                </Link>
              </div>
            </div>
          </div>

          {/* 4. Word Runner Guide */}
          <div className="card p-8 md:p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/70 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🏃</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    High-Speed Obstacle Dash
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Word Runner (वर्ड रनर)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  <strong>Overview:</strong> Sprint down a neon cyber-track by typing Hindi words to
                  activate nitro speed boosts and leap over incoming barrier blocks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ⚙️ How It Works
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Your cyber runner advances along the track. Obstacle blocks imprinted with
                      Devanagari characters move toward you. Typing the target word triggers a speed
                      surge and demolishes oncoming blocks.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      🎮 How to Play
                    </h4>
                    <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                      <li>Read the prompt word displayed on screen.</li>
                      <li>Type it accurately in the input box.</li>
                      <li>Trigger the continuous Nitro Sprint trail.</li>
                      <li>Survive the entire 60-second endurance sprint.</li>
                    </ol>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-400 mr-2">Skills Improved:</span>
                  {["Continuous typing", "Sustained speed", "Endurance", "Rhythm"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 mb-6 text-xs text-slate-400">
                  <strong className="text-cyan-400">💡 Pro Tips:</strong> Establish a smooth typing
                  cadence. Pausing abruptly interrupts your speed multiplier.
                </div>

                <Link
                  href="/game/word-runner"
                  className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm font-bold items-center gap-2 shadow-md"
                >
                  Play Word Runner →
                </Link>
              </div>
            </div>
          </div>

          {/* 5. Hindi Word Builder Guide */}
          <div className="card p-8 md:p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/70 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔤</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    Spelling & Vocabulary Quest
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Hindi Word Builder (हिंदी वर्ड बिल्डर)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  <strong>Overview:</strong> Master Hindi spelling, vocabulary, and conjunct characters
                  by solving incomplete word puzzles with context clues.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ⚙️ How It Works
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      A word is shown with a missing letter or matra (e.g., क _ म). You are provided
                      with a helpful definition hint and 4 candidate letter tiles to complete the word
                      correctly.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      🎮 Game Modes & Categories
                    </h4>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                      <li>Basic Characters (मूल वर्ण)</li>
                      <li>Vowel Matras (मात्रा अभ्यास)</li>
                      <li>Common Daily Words (दैनिक शब्द)</li>
                      <li>Difficult Conjuncts (संयुक्त अक्षर जैसे विद्या, पुस्तक)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-400 mr-2">Skills Improved:</span>
                  {["Hindi spelling", "Word construction", "Vocabulary", "Grammar"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 mb-6 text-xs text-slate-400">
                  <strong className="text-indigo-400">💡 Pro Tips:</strong> Read the Hindi meaning clue
                  carefully before choosing. Notice how different matras transform the entire meaning of
                  the word.
                </div>

                <Link
                  href="/game/hindi-word-builder"
                  className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm font-bold items-center gap-2 shadow-md"
                >
                  Play Hindi Word Builder →
                </Link>
              </div>
            </div>
          </div>

          {/* 6. Matra Challenge Guide */}
          <div className="card p-8 md:p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/70 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🪄</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full border border-fuchsia-500/20">
                    Vowel Sign & Phonetics Mastery
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Matra Challenge (मात्रा चैलेंज)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  <strong>Overview:</strong> Master all 12 Hindi vowel signs (ा, ि, ी, ु, ू, ृ, े, ै,
                  ो, ौ, ं, ँ) through rapid interactive typing drills and keyboard layout hints.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ⚙️ How It Works
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Each round spotlights a specific Hindi matra with phonetic breakdown and InScript
                      keyboard key bindings (e.g., E for ा, F for ि, R for ी). You type practice words
                      containing the highlighted matra.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      🎮 How to Play
                    </h4>
                    <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                      <li>Review the active matra rule and keyboard shortcut.</li>
                      <li>Type the full practice word accurately in the box.</li>
                      <li>Complete all 12 rounds before time runs out.</li>
                      <li>Attain a 100% accuracy score to achieve Matra Mastery.</li>
                    </ol>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-400 mr-2">Skills Improved:</span>
                  {["Matra recognition", "Typing accuracy", "Phonetics", "Keyboard mapping"].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-fuchsia-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 mb-6 text-xs text-slate-400">
                  <strong className="text-fuchsia-400">💡 Pro Tips:</strong> In Devanagari Unicode
                  typing, always type the consonant first followed by the matra (e.g. क + ि = कि),
                  even if the short vowel visual sign appears on the left side!
                </div>

                <Link
                  href="/game/matra-challenge"
                  className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm font-bold items-center gap-2 shadow-md"
                >
                  Play Matra Challenge →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DIFFICULTY LEVELS */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Progressive Learning
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Choose Your Challenge Level
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Every game features three carefully calibrated difficulty tiers. Begin at your comfort
            zone and gradually climb the ranks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Beginner */}
          <div className="card p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/10 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Level 1
              </span>
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Beginner (शुरुआती)</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
              Focuses on simple 2–3 letter words without complex conjuncts (e.g., कम, जल, घर, कलम)
              and primary vowel signs. Features generous countdown timers and slower enemy speeds.
            </p>
            <div className="text-xs text-emerald-400 font-semibold pt-3 border-t border-slate-800">
              Ideal for: First-time Hindi typists & keyboard layout learners.
            </div>
          </div>

          {/* Intermediate */}
          <div className="card p-6 rounded-3xl border border-amber-500/30 bg-amber-950/10 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Level 2
              </span>
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Intermediate (मध्यम)</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
              Introduces full vowel matras, punctuation, common vocabulary (e.g., भारत, शिक्षा, पुस्तक),
              and balanced pace to build speed and rhythm.
            </p>
            <div className="text-xs text-amber-400 font-semibold pt-3 border-t border-slate-800">
              Ideal for: Users with basic keyboard familiarity aiming for 25–35 WPM.
            </div>
          </div>

          {/* Advanced */}
          <div className="card p-6 rounded-3xl border border-rose-500/30 bg-rose-950/10 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                Level 3
              </span>
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Advanced (उन्नत)</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
              Features complex multisyllabic terms, conjuncts (संयुक्त अक्षर जैसे दृष्टिकोण,
              विश्वविद्यालय, आत्मनिर्भर), fast spawn frequencies, and intense reflex challenges.
            </p>
            <div className="text-xs text-rose-400 font-semibold pt-3 border-t border-slate-800">
              Ideal for: Competitive speed typists & Government typing exam candidates (SSC/LDC/High Court).
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SKILLS YOU CAN IMPROVE */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Holistic Skill Building
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            What Can You Improve Through Typing Games?
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Gamified practice targets 9 essential cognitive and physical typing capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Hindi Typing Speed",
              desc: "Train your fingers to move fluidly across rows, achieving 40+ WPM through rhythm and speed boosts.",
              icon: "⚡",
              bar: "bg-cyan-400",
            },
            {
              title: "Typing Accuracy",
              desc: "Reinforce precision keystrokes and reduce backspace reliance with score multipliers for clean streaks.",
              icon: "🎯",
              bar: "bg-emerald-400",
            },
            {
              title: "Character Recognition",
              desc: "Quickly identify individual Hindi vowels (स्वर), consonants (व्यंजन), and nukta letters at a glance.",
              icon: "👁️",
              bar: "bg-primary-400",
            },
            {
              title: "Keyboard Familiarity",
              desc: "Master key positions for InScript, Remington GAIL, and CBI layouts through spatial muscle memory.",
              icon: "⌨️",
              bar: "bg-indigo-400",
            },
            {
              title: "Matra Recognition",
              desc: "Develop intuitive fluency in attaching vowel signs (मात्राएँ) without pausing to verify key locations.",
              icon: "✨",
              bar: "bg-fuchsia-400",
            },
            {
              title: "Difficult Hindi Words",
              desc: "Gain confidence typing compound words, Sanskrit origin roots, and half-character conjuncts.",
              icon: "📚",
              bar: "bg-amber-400",
            },
            {
              title: "Rapid Reflexes",
              desc: "Drastically reduce reaction latency between on-screen visual triggers and finger keystroke execution.",
              icon: "⚡",
              bar: "bg-rose-400",
            },
            {
              title: "Continuous Typing",
              desc: "Maintain sustained focus and typing momentum over extended multi-minute sessions without fatigue.",
              icon: "🏃",
              bar: "bg-teal-400",
            },
            {
              title: "Word Recognition",
              desc: "Read whole Hindi word chunks automatically rather than processing letters individually one by one.",
              icon: "🧠",
              bar: "bg-violet-400",
            },
          ].map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{skill.desc}</p>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${skill.bar} w-full rounded-full`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="mb-12">
        <div className="card p-10 md:p-14 rounded-[3rem] border border-primary-500/30 bg-gradient-to-br from-primary-950/40 via-slate-900 to-slate-900 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3 block">
              Level Up Your Skills Today
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Ready to Practice Hindi Typing Differently?
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
              Choose a game, start typing, and practice your Hindi typing skills through interactive
              challenges designed for real speed and accuracy gains.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToGames}
                className="btn-primary rounded-2xl px-8 py-4 text-base font-bold shadow-xl shadow-primary-500/30 flex items-center gap-2"
              >
                <span>Play a Typing Game</span>
                <span>→</span>
              </button>
              <Link
                href="/practice"
                className="btn-secondary rounded-2xl px-7 py-4 text-base font-semibold border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 transition-all"
              >
                Practice Hindi Typing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
