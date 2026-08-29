"use client";

import { memo } from "react";
import { keyboardRows, physicalKeyLabels } from "../data/keyboard-layout";

interface KeyboardProps {
  activeKey: string;
  isShift: boolean;
  visible: boolean;
  highlightKey?: string;
  highlightShift?: boolean;
  language?: "hindi" | "english";
}

// Special QWERTY English key maps
const englishSpecMap: Record<string, { normal: string; shift: string }> = {
  Backquote: { normal: "`", shift: "~" },
  Digit1: { normal: "1", shift: "!" },
  Digit2: { normal: "2", shift: "@" },
  Digit3: { normal: "3", shift: "#" },
  Digit4: { normal: "4", shift: "$" },
  Digit5: { normal: "5", shift: "%" },
  Digit6: { normal: "6", shift: "^" },
  Digit7: { normal: "7", shift: "&" },
  Digit8: { normal: "8", shift: "*" },
  Digit9: { normal: "9", shift: "(" },
  Digit0: { normal: "0", shift: ")" },
  Minus: { normal: "-", shift: "_" },
  Equal: { normal: "=", shift: "+" },
  BracketLeft: { normal: "[", shift: "{" },
  BracketRight: { normal: "]", shift: "}" },
  Backslash: { normal: "\\", shift: "|" },
  Semicolon: { normal: ";", shift: ":" },
  Quote: { normal: "'", shift: "\"" },
  Comma: { normal: ",", shift: "<" },
  Period: { normal: ".", shift: ">" },
  Slash: { normal: "/", shift: "?" },
  Space: { normal: " ", shift: " " },
};

function getEnglishChar(code: string, isShift: boolean): string {
  if (code.startsWith("Key")) {
    const letter = code.replace("Key", "");
    return isShift ? letter : letter.toLowerCase();
  }
  if (englishSpecMap[code]) {
    return isShift ? englishSpecMap[code].shift : englishSpecMap[code].normal;
  }
  return "";
}

export const Keyboard = memo(function Keyboard({
  activeKey,
  isShift,
  visible,
  highlightKey,
  highlightShift,
  language = "hindi",
}: KeyboardProps) {
  if (!visible) return null;

  const isEnglish = language === "english";

  return (
    <div className="card mt-4 overflow-x-auto" id="keyboard-guide">
      <div className="min-w-[640px] space-y-1.5 p-2">
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.map((key) => {
              const isActive = activeKey === key.code;
              const isHighlighted = highlightKey === key.code;
              const showShiftForThis = !!(isHighlighted && highlightShift);
              const activeShiftState = isShift || showShiftForThis;

              // Determine character to render based on active layout language
              const displayChar = isEnglish 
                ? getEnglishChar(key.code, activeShiftState)
                : (activeShiftState ? key.shift : key.normal);

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
