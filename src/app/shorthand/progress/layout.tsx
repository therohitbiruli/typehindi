import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Shorthand Learning Dashboard & Activity Analytics | TypeHindi",
  description:
    "Track your stenography practice history, lesson completions, quiz scores, dictation speeds, and daily streak analytics directly in your browser with zero login required.",
  keywords: [
    "shorthand dashboard",
    "stenography progress tracker",
  ],
  alternates: {
    canonical: "https://typehindi.in/shorthand/progress",
  },
  openGraph: {
    title: "My Shorthand Learning Dashboard & Activity Analytics | TypeHindi",
    description:
      "Personal stenography practice analytics, speed milestones, and streak counter.",
    url: "https://typehindi.in/shorthand/progress",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
