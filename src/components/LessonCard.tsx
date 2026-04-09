"use client";

import { useState, memo } from "react";
import type { Lesson } from "../data/lessons";

interface LessonCardProps {
  lesson: Lesson;
}

export const LessonCard = memo(function LessonCard({ lesson }: LessonCardProps) {
  const [selectedChar, setSelectedChar] = useState<string | null>(null);

  return (
    <div className="card" id={`lesson-${lesson.id}`}>
      <h3 className="heading-3 mb-2">
        पाठ {lesson.id}: {lesson.title}
      </h3>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        {lesson.description}
      </p>

      {/* Characters grid */}
      {lesson.characters.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            अक्षर (Characters):
          </h4>
          <div className="flex flex-wrap gap-2">
            {lesson.characters.map((char, i) => (
              <button
                key={i}
                onClick={() => setSelectedChar(char)}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 font-hindi text-lg font-semibold transition-all ${
                  selectedChar === char
                    ? "border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                    : "border-gray-200 bg-white text-gray-800 hover:border-primary-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                }`}
              >
                {char}
              </button>
            ))}
          </div>
          {selectedChar && (
            <div className="mt-3 rounded-lg bg-primary-50 p-3 dark:bg-primary-900/20">
              <span className="font-hindi text-3xl font-bold text-primary-700 dark:text-primary-300">
                {selectedChar}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Practice words */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          अभ्यास शब्द (Practice Words):
        </h4>
        <div className="flex flex-wrap gap-2">
          {lesson.practiceWords.map((word, i) => (
            <span
              key={i}
              className="rounded-lg bg-gray-100 px-3 py-1.5 font-hindi text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
