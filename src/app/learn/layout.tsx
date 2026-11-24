import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Typing Online - Multilingual Touch Typing Lessons | TypeHindi",
  description: "Learn touch typing step by step in English, Hindi, Marathi, Punjabi, Tamil, Bengali, Kannada, and Gujarati with interactive lessons, keyboard maps, and typing drills.",
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
