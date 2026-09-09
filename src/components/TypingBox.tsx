"use client";

import { useRef, useCallback, useEffect, memo } from "react";
import { LanguageId, LANGUAGES_CONFIG } from "../data/languages";

// Pre-build key maps for all supported languages
const languageKeyMaps: Partial<Record<LanguageId, Record<string, { normal: string; shift: string }>>> = {};

Object.entries(LANGUAGES_CONFIG).forEach(([langId, config]) => {
  const map: Record<string, { normal: string; shift: string }> = {};
  config.keyboardRows.forEach((row) => {
    row.forEach((key) => {
      map[key.code] = { normal: key.normal, shift: key.shift };
    });
  });
  languageKeyMaps[langId as LanguageId] = map;
});

interface TypingBoxProps {
  targetText: string;
  typedText: string;
  onInput: (text: string, insertedAtIndex?: number) => void;
  isFinished: boolean;
  isStarted: boolean;
  language?: LanguageId | "hindi" | "english";
  autoFocus?: boolean;
}

export const TypingBox = memo(function TypingBox({
  targetText,
  typedText,
  onInput,
  isFinished,
  isStarted,
  language = "hindi",
  autoFocus = false,
}: TypingBoxProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const nextCursorRef = useRef<number | null>(null);

  const isDevanagari = language === "hindi" || language === "marathi";
  const fontClass = isDevanagari ? "font-hindi" : "font-sans";

  // Auto-focus on mount if explicitly enabled without scrolling the window
  useEffect(() => {
    if (autoFocus) {
      textareaRef.current?.focus({ preventScroll: true });
    }
  }, [autoFocus]);

  // Restore cursor selection position after re-render
  useEffect(() => {
    if (textareaRef.current && nextCursorRef.current !== null) {
      textareaRef.current.setSelectionRange(nextCursorRef.current, nextCursorRef.current);
      nextCursorRef.current = null;
    }
  }, [typedText]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (isFinished) return;

      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Handle Backspace
      if (e.key === "Backspace") {
        e.preventDefault();
        let newText = typedText;
        let nextCursor = start;

        if (start !== end) {
          newText = typedText.substring(0, start) + typedText.substring(end);
          nextCursor = start;
        } else if (start > 0) {
          newText = typedText.substring(0, start - 1) + typedText.substring(start);
          nextCursor = start - 1;
        }

        nextCursorRef.current = nextCursor;
        onInput(newText);
        return;
      }

      // Handle Delete key
      if (e.key === "Delete") {
        e.preventDefault();
        let newText = typedText;
        let nextCursor = start;

        if (start !== end) {
          newText = typedText.substring(0, start) + typedText.substring(end);
          nextCursor = start;
        } else if (start < typedText.length) {
          newText = typedText.substring(0, start) + typedText.substring(start + 1);
          nextCursor = start;
        }

        nextCursorRef.current = nextCursor;
        onInput(newText);
        return;
      }

      // Handle English inputs natively (QWERTY direct entry)
      if (language === "english") {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          const char = e.key;
          const newText = typedText.substring(0, start) + char + typedText.substring(end);
          nextCursorRef.current = start + char.length;
          onInput(newText, start);
        }
        return;
      }

      // Check for mapped keys in the active language layout
      const activeMap = languageKeyMaps[language as LanguageId] || languageKeyMaps.hindi;
      const mapping = activeMap ? activeMap[e.code] : undefined;
      if (mapping) {
        e.preventDefault();
        const char = e.shiftKey ? mapping.shift : mapping.normal;
        
        if (char) {
          const newText = typedText.substring(0, start) + char + typedText.substring(end);
          nextCursorRef.current = start + char.length;
          onInput(newText, start);
        }
        return;
      }

      // Fallback for native IME input or non-mapped alphanumeric characters
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        const char = e.key;
        const newText = typedText.substring(0, start) + char + typedText.substring(end);
        nextCursorRef.current = start + char.length;
        onInput(newText, start);
      }
    },
    [onInput, typedText, isFinished, language]
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
        className={`card cursor-text select-none ${fontClass} text-lg md:text-xl leading-relaxed tracking-wide bg-gray-55 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 p-4 pr-12 rounded-2xl text-left shadow-sm`}
        onClick={handleFocus}
        id="typing-target"
      >
        {targetText.split("").map((char, index) => {
          let className = "text-gray-650 dark:text-gray-400";
          if (index < typedText.length) {
            className = typedText[index] === char ? "text-green-800 dark:text-green-400 font-bold" : "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-950/50";
          } else if (index === typedText.length) {
            className = "border-b-2 border-blue-600 text-black dark:text-white font-bold bg-blue-50 dark:bg-blue-950/30";
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
          className={`w-full resize-none rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 ${fontClass} text-lg leading-relaxed focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed text-gray-900 dark:text-gray-150 shadow-sm`}
          rows={4}
          placeholder={isStarted ? "" : "Start typing here..."}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          id="typing-input"
        />
        {isFinished && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/90 dark:bg-gray-950/90 border border-green-600/50">
            <p className="text-xl font-bold text-green-700 dark:text-green-400">
              ✓ Completed!
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
