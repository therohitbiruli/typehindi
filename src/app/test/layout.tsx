import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindi Typing Test - Check Your WPM & Accuracy",
  description: "Take a timed Hindi typing test. Check your words per minute (WPM), accuracy, and errors. Perfect for SSC, CGL, CHSL exam preparation.",
};

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
