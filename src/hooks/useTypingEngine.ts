"use client";

import { useState, useCallback, useRef, useEffect } from "react";

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

  const reset = useCallback(() => {
    setTypedText("");
    setIsStarted(false);
    setIsFinished(false);
    startTimeRef.current = null;
  }, []);

  // Automatically reset whenever the target passage changes
  useEffect(() => {
    reset();
  }, [targetText, reset]);

  const getStats = useCallback((): TypingStats => {
    if (!typedText.length) {
      return {
        wpm: 0,
        accuracy: 100,
        correctChars: 0,
        incorrectChars: 0,
        totalChars: 0,
        totalErrors: 0,
      };
    }

    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < typedText.length; i++) {
      if (i < targetText.length && typedText[i] === targetText[i]) {
        correct++;
      } else {
        incorrect++;
      }
    }

    const elapsedMinutes = startTimeRef.current
      ? (Date.now() - startTimeRef.current) / 60000
      : 0;
    const wpm = elapsedMinutes > 0 ? Math.round((correct / 5) / elapsedMinutes) : 0;
    const accuracy = typedText.length > 0 ? Math.round((correct / typedText.length) * 100) : 100;

    return {
      wpm: Math.max(0, wpm),
      accuracy: Math.max(0, accuracy),
      correctChars: correct,
      incorrectChars: incorrect,
      totalChars: typedText.length,
      totalErrors: incorrect,
    };
  }, [typedText, targetText]);

  const handleInput = useCallback(
    (input: string, _insertedAtIndex?: number) => {
      if (isFinished) return;

      if (!isStarted && input.length > 0) {
        setIsStarted(true);
        startTimeRef.current = Date.now();
      }

      setTypedText(input);

      // Check if finished
      if (targetText.length > 0 && input.length >= targetText.length) {
        setIsFinished(true);
      }
    },
    [isStarted, isFinished, targetText.length]
  );

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
