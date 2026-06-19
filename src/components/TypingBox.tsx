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
        className="card cursor-text select-none font-hindi text-lg md:text-xl leading-relaxed tracking-wide bg-gray-50 border border-gray-300 p-4 pr-12 rounded text-left"
        onClick={handleFocus}
        id="typing-target"
      >
        {targetText.split("").map((char, index) => {
          let className = "text-gray-500";
          if (index < typedText.length) {
            className = typedText[index] === char ? "text-green-700 font-bold" : "text-red-700 bg-red-100";
          } else if (index === typedText.length) {
            className = "border-b-2 border-blue-500 text-black";
          }
          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Visible textarea for input */}
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
          className="w-full resize-none rounded border border-gray-400 bg-white p-4 font-hindi text-lg leading-relaxed focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          rows={4}
          placeholder={isStarted ? "" : "यहाँ टाइप करना शुरू करें (Type here)..."}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          id="typing-input"
        />
        {isFinished && (
          <div className="absolute inset-0 flex items-center justify-center rounded bg-white/90 border border-gray-300">
            <p className="text-xl font-bold text-green-700">
              ✓ पूर्ण! (Completed)
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
