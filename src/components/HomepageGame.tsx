"use client";

import { useState } from "react";
import Image from "next/image";
import { TankGameCanvas } from "./TankGameCanvas";

export function HomepageGame() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="border border-slate-250 dark:border-slate-800 rounded-[2rem] p-4 bg-slate-50/50 dark:bg-slate-900/50 shadow-inner relative max-w-4xl mx-auto overflow-hidden">
        <TankGameCanvas />
      </div>
    );
  }

  return (
    <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] max-w-4xl mx-auto border-3 border-slate-200 dark:border-slate-800/80 shadow-md group">
      <Image
        src="/images/game_thumb_tank.png"
        alt="Tank Defender Game"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/70 flex flex-col items-center justify-center p-6 text-center">
        <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest shadow-sm mb-4">
          ⚡ New Interactive Mode
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-wide">Tank Defender</h3>
        <p className="text-slate-200 text-sm max-w-md mb-6 font-light leading-relaxed">
          Defend your base by typing the letters shown on incoming enemy tanks!
        </p>
        <button
          onClick={() => setIsPlaying(true)}
          className="px-8 py-3.5 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Play Typing Game 🎮
        </button>
      </div>
    </div>
  );
}
