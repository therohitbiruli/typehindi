import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindi Typing Game - Practice Hindi Typing with Fun",
  description: "Play a fun Hindi typing game. Words fall from the top - type them correctly to destroy them! Improve your Hindi typing speed while having fun.",
};

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return children;
}
