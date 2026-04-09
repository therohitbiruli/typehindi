"use client";

import { memo } from "react";

interface TimerDisplayProps {
  formattedTime: string;
  isRunning: boolean;
}

export const TimerDisplay = memo(function TimerDisplay({ formattedTime, isRunning }: TimerDisplayProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-2xl font-bold ${
        isRunning
          ? "border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
          : "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
      }`}
      id="timer-display"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
      {formattedTime}
    </div>
  );
});
