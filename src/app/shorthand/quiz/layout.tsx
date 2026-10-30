import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitman Shorthand Quiz & Theory Examination | TypeHindi",
  description:
    "Test your understanding of Pitman shorthand rules, consonant classifications, vowels, diphtongs, halving and doubling principles, and phraseography with interactive quizzes.",
  keywords: [
    "Pitman shorthand quiz",
    "stenography theory test",
    "shorthand rules quiz",
  ],
  alternates: {
    canonical: "https://typehindi.in/shorthand/quiz",
  },
  openGraph: {
    title: "Pitman Shorthand Quiz & Theory Examination | TypeHindi",
    description:
      "Interactive 10, 20, or 50 question multiple-choice quiz covering all Pitman shorthand theory.",
    url: "https://typehindi.in/shorthand/quiz",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
