"use client";

import { memo } from "react";
import { keyboardRows, physicalKeyLabels } from "../data/keyboard-layout";

interface KeyboardProps {
  activeKey: string;
  isShift: boolean;
  visible: boolean;
  highlightKey?: string;
  highlightShift?: boolean;
}

export const Keyboard = memo(function Keyboard({
  activeKey,
  isShift,
  visible,
  highlightKey,
  highlightShift,
}: KeyboardProps) {
  if (!visible) return null;

  return (
    <div className="card mt-4 overflow-x-auto" id="keyboard-guide">
      <div className="min-w-[640px] space-y-1.5 p-2">
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.map((key) => {
              const isActive = activeKey === key.code;
              const isHighlighted = highlightKey === key.code;
              const showShiftForThis = isHighlighted && highlightShift;
              const displayChar = (isShift || showShiftForThis) ? key.shift : key.normal;
              const physLabel = physicalKeyLabels[key.code] || key.label || "";

              return (
                <div
                  key={key.code + rowIndex}
                  className={`key ${isActive ? "key-active" : ""} ${
                    isHighlighted ? "key-highlight" : ""
                  } ${key.width ? `flex-shrink-0` : ""}`}
                  style={key.width ? { width: `${key.width * 2.5}rem` } : undefined}
                >
                  <div className="flex flex-col items-center leading-tight">
                    <span className="font-hindi text-xs font-semibold">
                      {showShiftForThis && <span className="text-[7px] text-amber-600 dark:text-amber-400 block -mb-0.5 uppercase">Shift+</span>}
                      {displayChar}
                    </span>
                    <span className="text-[8px] text-gray-400 dark:text-gray-500">{physLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
});
