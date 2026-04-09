import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Hindi Typing - InScript Keyboard Lessons",
  description: "Learn Hindi typing step by step with InScript keyboard layout. Interactive keyboard, beginner lessons covering vowels, consonants, matras, and common words.",
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
