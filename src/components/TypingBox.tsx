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
    <div className="space-y-4">
      {/* Target text display */}
      <div
        className="card cursor-text select-none font-hindi text-lg leading-relaxed tracking-wide"
        onClick={handleFocus}
        id="typing-target"
      >
        {targetText.split("").map((char, index) => {
          let className = "char-upcoming";
          if (index < typedText.length) {
            className = typedText[index] === char ? "char-correct" : "char-incorrect";
          } else if (index === typedText.length) {
            className = "char-current";
          }
          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Hidden textarea for input */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={typedText}
          onKeyDown={handleKeyDown}
          onChange={() => {}}
          onCopy={preventCopyPaste}
          onPaste={preventCopyPaste}
          onCut={preventCopyPaste}
          disabled={isFinished}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white p-4 font-hindi text-lg leading-relaxed focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-primary-400"
          rows={3}
          placeholder={isStarted ? "" : "यहाँ टाइप करना शुरू करें..."}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          id="typing-input"
        />
        {isFinished && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white/80 dark:bg-gray-900/80">
            <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
              ✓ पूर्ण! (Completed!)
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
