import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitman Shorthand Curriculum - 13-Level Stenography Program | TypeHindi",
  description:
    "Master English Pitman shorthand progressively with a structured 13-level course. Consonant strokes, 12-vowel scheme, position writing, phraseography, and stenography exam drills.",
  keywords: [
    "Pitman shorthand curriculum",
    "shorthand learning program",
    "learn stenography online",
    "shorthand course",
    "Pitman shorthand lessons",
  ],
  alternates: {
    canonical: "https://typehindi.in/shorthand/learn",
  },
  openGraph: {
    title: "Pitman Shorthand Curriculum - 13-Level Stenography Program | TypeHindi",
    description:
      "Structured self-paced Pitman shorthand curriculum for SSC and High Court stenographer exams.",
    url: "https://typehindi.in/shorthand/learn",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
