"use client";

import { memo } from "react";
import type { TypingStats } from "../hooks/useTypingEngine";

interface StatsProps {
  stats: TypingStats;
  bestWpm?: number;
}

export const Stats = memo(function Stats({ stats, bestWpm }: StatsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" id="typing-stats">
      <StatCard
        label="गति (WPM)"
        value={stats.wpm.toString()}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        }
      />
      <StatCard
        label="सटीकता"
        value={`${stats.accuracy}%`}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l2 2" />
          </svg>
        }
      />
      <StatCard
        label="त्रुटियाँ"
        value={stats.totalErrors.toString()}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
        }
      />
      <StatCard
        label="सर्वश्रेष्ठ WPM"
        value={bestWpm?.toString() ?? "—"}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        }
      />
    </div>
  );
});

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card flex items-center gap-3">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
