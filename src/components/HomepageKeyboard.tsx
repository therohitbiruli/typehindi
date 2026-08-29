"use client";

import { Keyboard } from "./Keyboard";
import { useKeyPress } from "../hooks/useKeyPress";

export function HomepageKeyboard() {
  const { activeKey, isShift } = useKeyPress();

  return (
    <div className="border border-slate-250 dark:border-slate-800 rounded-3xl p-4 bg-slate-55 dark:bg-slate-900/50 shadow-inner">
      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 text-center">
        💡 Type on your physical keyboard to see keys light up in real-time
      </p>
      <Keyboard activeKey={activeKey} isShift={isShift} visible={true} />
    </div>
  );
}
