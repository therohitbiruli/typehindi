"use client";

import { Keyboard } from "./Keyboard";
import { useKeyPress } from "../hooks/useKeyPress";

export function HomepageKeyboard() {
  const { activeKey, isShift } = useKeyPress();

  return (
    <div className="border border-[#DCE4EF] dark:border-slate-800 rounded-3xl p-4 bg-white dark:bg-slate-900/50 shadow-inner">
      <p className="text-[10px] font-bold text-[#475569] dark:text-gray-500 uppercase tracking-wider mb-2 text-center">
        💡 Type on your physical keyboard to see keys light up in real-time
      </p>
      <Keyboard activeKey={activeKey} isShift={isShift} visible={true} />
    </div>
  );
}
