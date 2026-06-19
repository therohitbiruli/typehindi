"use client";

import { useState, useCallback, useRef } from "react";

export interface TypingStats {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  totalErrors: number;
}

export interface TypingEngineState {
  typedText: string;
  isStarted: boolean;
  isFinished: boolean;
  stats: TypingStats;
  currentIndex: number;
}

export function useTypingEngine(targetText: string) {
  const [typedText, setTypedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const errorsRef = useRef(0);

  const getStats = useCallback((): TypingStats => {
    if (!typedText.length || !startTimeRef.current) {
      return { wpm: 0, accuracy: 100, correctChars: 0, incorrectChars: 0, totalChars: 0, totalErrors: 0 };
    }

    const elapsedMinutes = (Date.now() - startTimeRef.current) / 60000;
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < typedText.length; i++) {
      if (i < targetText.length && typedText[i] === targetText[i]) {
        correct++;
      } else {
        incorrect++;
      }
    }

    const wpm = elapsedMinutes > 0 ? Math.round((correct / 5) / elapsedMinutes) : 0;
    const accuracy = typedText.length > 0 ? Math.round((correct / typedText.length) * 100) : 100;

    return {
      wpm: Math.max(0, wpm),
      accuracy: Math.max(0, accuracy),
      correctChars: correct,
      incorrectChars: incorrect,
      totalChars: typedText.length,
      totalErrors: errorsRef.current,
    };
  }, [typedText, targetText]);

  const handleInput = useCallback(
    (input: string, insertedAtIndex?: number) => {
      if (isFinished) return;

      if (!isStarted) {
        setIsStarted(true);
        startTimeRef.current = Date.now();
      }

      // Track errors
      if (input.length > typedText.length) {
        const indexToCompare = insertedAtIndex !== undefined ? insertedAtIndex : input.length - 1;
        if (indexToCompare < targetText.length && input[indexToCompare] !== targetText[indexToCompare]) {
          errorsRef.current++;
        }
      }

      setTypedText(input);

      // Check if finished
      if (input.length >= targetText.length) {
        setIsFinished(true);
      }
    },
    [isStarted, isFinished, targetText, typedText.length]
  );

  const reset = useCallback(() => {
    setTypedText("");
    setIsStarted(false);
    setIsFinished(false);
    startTimeRef.current = null;
    errorsRef.current = 0;
  }, []);

  const forceFinish = useCallback(() => {
    setIsFinished(true);
  }, []);

  return {
    typedText,
    isStarted,
    isFinished,
    currentIndex: typedText.length,
    stats: getStats(),
    handleInput,
    reset,
    forceFinish,
  };
}
