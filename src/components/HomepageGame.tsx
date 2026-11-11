"use client";

import { useState } from "react";
import Image from "next/image";
import { TankGameCanvas } from "./TankGameCanvas";

export function HomepageGame() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="border border-[#B8C7DA] dark:border-slate-800 rounded-[2rem] p-4 bg-white dark:bg-slate-900/50 shadow-inner relative max-w-4xl mx-auto overflow-hidden">
        <TankGameCanvas />
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden min-h-[340px] sm:aspect-[16/9] w-full max-w-4xl mx-auto border border-solid sm:border-[1.5px] border-[#B8C7DA] dark:border-slate-800/80 shadow-md group flex items-center justify-center bg-white dark:bg-slate-950">
      <Image
        src="/images/game_thumb_tank.png"
        alt="Tank Defender Game"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Overlay with responsive padding & clean layout */}
      <div className="absolute inset-0 bg-white/95 dark:bg-slate-950/80 sm:bg-white/95 dark:bg-slate-950/70 flex flex-col items-center justify-center p-4 sm:p-8 text-center z-10 backdrop-blur-[2px]">
        
        {/* Mode badge */}
        <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-[10px] uppercase tracking-widest shadow-sm mb-3">
          ⚡ Interactive Game Mode
        </span>

        <h3 className="text-xl sm:text-3xl font-black text-[#17243A] dark:text-white mb-2 tracking-wide">
          Tank Defender
        </h3>
        
        <p className="text-[#475569] dark:text-slate-200 text-xs sm:text-sm max-w-md mb-4 sm:mb-5 font-medium leading-relaxed px-2">
          Defend your base by typing the Hindi letters shown on incoming enemy tanks!
        </p>

        {/* Mobile-only Keyboard Instruction */}
        <div className="inline-flex md:hidden items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-[11px] font-semibold mb-5 shadow-sm">
          <span>⌨️</span>
          <span>Best played on Desktop / Laptop with Physical Keyboard</span>
        </div>

        <button
          onClick={() => setIsPlaying(true)}
          className="w-full sm:w-auto px-7 sm:px-9 py-3 sm:py-3.5 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-primary-500/25 hover:shadow-primary-500/35 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
        >
          <span>Play Typing Game</span>
          <span>🎮</span>
        </button>
      </div>
    </div>
  );
}
