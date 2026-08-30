"use client";

import { useState, useEffect } from "react";

interface LearningProgressDashboardProps {
  completedKeysCount: number;
  totalKeysCount: number;
  completedMatrasCount: number;
  totalMatrasCount: number;
  completedDaysCount: number;
  totalDaysCount: number;
  completedChallengesCount: number;
  totalChallengesCount: number;
  onResetProgress: () => void;
}

export function LearningProgressDashboard({
  completedKeysCount,
  totalKeysCount,
  completedMatrasCount,
  totalMatrasCount,
  completedDaysCount,
  totalDaysCount,
  completedChallengesCount,
  totalChallengesCount,
  onResetProgress,
}: LearningProgressDashboardProps) {
  const [streak, setStreak] = useState(1);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const lastVisit = localStorage.getItem("typehindi_learn_last_visit");
      const savedStreak = parseInt(localStorage.getItem("typehindi_learn_streak") || "1", 10);

      if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

        if (diffDays === 1) {
          const newStreak = savedStreak + 1;
          setStreak(newStreak);
          localStorage.setItem("typehindi_learn_streak", newStreak.toString());
          localStorage.setItem("typehindi_learn_last_visit", today);
        } else if (diffDays === 0) {
          setStreak(savedStreak);
        } else if (diffDays > 1) {
          setStreak(1);
          localStorage.setItem("typehindi_learn_streak", "1");
          localStorage.setItem("typehindi_learn_last_visit", today);
        }
      } else {
        localStorage.setItem("typehindi_learn_last_visit", today);
        localStorage.setItem("typehindi_learn_streak", "1");
        setStreak(1);
      }
    } catch (_) {}
  }, []);

  const daysPct = totalDaysCount > 0 ? (completedDaysCount / totalDaysCount) * 100 : 0;
  const keysPct = totalKeysCount > 0 ? (completedKeysCount / totalKeysCount) * 100 : 0;
  const matrasPct = totalMatrasCount > 0 ? (completedMatrasCount / totalMatrasCount) * 100 : 0;
  const challengesPct = totalChallengesCount > 0 ? (completedChallengesCount / totalChallengesCount) * 100 : 0;

  const overallProgress = Math.min(100, Math.round(
    daysPct * 0.3 + keysPct * 0.25 + matrasPct * 0.2 + challengesPct * 0.25
  ));

  const navSections = [
    { label: "Daily Journey", href: "#daily-journey", icon: "🗓️" },
    { label: "Key-by-Key", href: "#key-practice", icon: "⌨️" },
    { label: "Finger Guide", href: "#finger-guide", icon: "🖐️" },
    { label: "Matra Mastery", href: "#matra-mastery", icon: "🎯" },
    { label: "Difficult Words", href: "#difficult-words", icon: "📖" },
    { label: "Common Mistakes", href: "#common-mistakes", icon: "⚠️" },
    { label: "Lessons", href: "#lessons-exercises", icon: "📚" },
    { label: "Challenges", href: "#final-challenges", icon: "🏆" },
    { label: "Keyboard Map", href: "#interactive-keyboard", icon: "🗺️" },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mb-10 space-y-6">
      {/* Main Learning Journey Dashboard Card */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-955/20 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-150 dark:border-gray-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-semibold mb-2">
              <span>🚀 Complete Learning System</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Your Hindi Typing Journey
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-xl">
              Track your daily progress, master every key on the InScript layout, and level up from beginner to professional speed.
            </p>
          </div>

          {/* Overall Progress Gauge */}
          <div className="flex items-center gap-4 bg-white dark:bg-gray-800/80 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm self-start md:self-auto">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200 dark:text-gray-700"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-primary-600 dark:text-primary-400 transition-all duration-1000 ease-out"
                  strokeDasharray={overallProgress + ", 100"}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-sm font-bold text-gray-900 dark:text-white">
                {overallProgress}%
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Overall Mastery
              </div>
              <div className="text-base font-bold text-gray-900 dark:text-white">
                {overallProgress === 100 ? "🎉 Completed!" : overallProgress >= 50 ? "⚡ Intermediate" : "🌱 Learning"}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Overview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800/60 border border-[#D9E1EC] dark:border-gray-800 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 mb-1">
              <span>Daily Path</span>
              <span className="text-base">🗓️</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {completedDaysCount} <span className="text-sm font-normal text-slate-400">/ {totalDaysCount} Days</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: (completedDaysCount / totalDaysCount) * 100 + "%" }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800/60 border border-[#D9E1EC] dark:border-gray-800 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 mb-1">
              <span>Keys Mastered</span>
              <span className="text-base">⌨️</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {completedKeysCount} <span className="text-sm font-normal text-slate-400">/ {totalKeysCount}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: (completedKeysCount / totalKeysCount) * 100 + "%" }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800/60 border border-[#D9E1EC] dark:border-gray-800 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 mb-1">
              <span>Matra Mastery</span>
              <span className="text-base">🎯</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {completedMatrasCount} <span className="text-sm font-normal text-slate-400">/ {totalMatrasCount}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-500"
                style={{ width: (completedMatrasCount / totalMatrasCount) * 100 + "%" }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800/60 border border-[#D9E1EC] dark:border-gray-800 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 mb-1">
              <span>Challenges</span>
              <span className="text-base">🏆</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {completedChallengesCount} <span className="text-sm font-normal text-slate-400">/ {totalChallengesCount}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-rose-500 h-full rounded-full transition-all duration-500"
                style={{ width: (completedChallengesCount / totalChallengesCount) * 100 + "%" }}
              />
            </div>
          </div>
        </div>

        {/* Streak & Reset Row */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-800/60">
          <div className="flex items-center gap-2">
            <span className="text-base">🔥</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {streak} Day Practice Streak
            </span>
            <span>• No account needed, saved in browser</span>
          </div>

          <button
            onClick={() => setShowResetModal(true)}
            className="text-gray-400 hover:text-red-500 transition-colors font-medium"
          >
            Reset Progress
          </button>
        </div>
      </div>

      {/* Interactive Quick-Nav Jump Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex-shrink-0 mr-1">
          Jump to:
        </span>
        {navSections.map((sec) => (
          <button
            key={sec.href}
            onClick={() => scrollToSection(sec.href)}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all shadow-sm"
          >
            <span>{sec.icon}</span>
            <span>{sec.label}</span>
          </button>
        ))}
      </div>

      {/* Confirmation Modal for Reset */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 max-w-sm w-full shadow-2xl space-y-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              Reset Learning Progress?
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              This will clear your completed keys, matras, daily journey stages, and weak-word history stored in this browser.
            </p>
            <div className="flex gap-3 justify-end pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowResetModal(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700"
              >
                Yes, Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
