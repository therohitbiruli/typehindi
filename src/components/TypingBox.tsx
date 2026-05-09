"use client";

import { useRef, useCallback, useEffect, memo } from "react";

import { keyMap } from "../data/keyboard-layout";

interface TypingBoxProps {
  targetText: string;
  typedText: string;
  onInput: (text: string) => void;
  isFinished: boolean;
  isStarted: boolean;
}

export const TypingBox = memo(function TypingBox({
  targetText,
  typedText,
  onInput,
  isFinished,
  isStarted,
}: TypingBoxProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (isFinished) return;

      // Handle Backspace
      if (e.key === "Backspace") {
        e.preventDefault();
        onInput(typedText.slice(0, -1));
        return;
      }

      // Check for mapped keys (InScript mapping)
      const mapping = keyMap[e.code];
      if (mapping) {
        e.preventDefault();
        const char = e.shiftKey ? mapping.shift : mapping.normal;
        
        // Only append if it's not a modifier key by itself (though mapping only has actual keys)
        if (char) {
          onInput(typedText + char);
        }
      }
    },
    [onInput, typedText, isFinished]
  );

  // Prevent copy/paste
  const preventCopyPaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
  }, []);

  const handleFocus = useCallback(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="relative w-full rounded-2xl md:px-4 py-8 min-h-[200px]" onClick={handleFocus}>
      {/* Target text display (Monkeytype style) */}
      <div
        className="font-hindi text-2xl md:text-4xl leading-relaxed tracking-wide pointer-events-none select-none z-10 relative text-center"
        id="typing-target"
      >
        {targetText.split("").map((char, index) => {
          let className = "text-slate-400 dark:text-slate-600";
          if (index < typedText.length) {
            className = typedText[index] === char ? "text-slate-800 dark:text-slate-200 font-bold" : "text-red-500 bg-red-100/50 dark:bg-red-900/30 rounded-sm";
          } else if (index === typedText.length) {
            className = "border-b-4 border-primary-500 animate-pulse text-slate-800 dark:text-slate-200 font-bold";
          }
          return (
            <span key={index} className={`transition-colors duration-75 ${className}`}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Hidden textarea for input capture */}
      <textarea
        ref={textareaRef}
        value={typedText}
        onKeyDown={handleKeyDown}
        onChange={() => {}}
        onCopy={preventCopyPaste}
        onPaste={preventCopyPaste}
        onCut={preventCopyPaste}
        disabled={isFinished}
        className="absolute inset-0 w-full h-full opacity-0 resize-none cursor-text z-0"
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        id="typing-input"
      />
      
      {isFinished && (
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur-md dark:bg-gray-900/60">
          <p className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">
            ✓ पूर्ण! (Completed)
          </p>
        </div>
      )}
    </div>
  );
});
