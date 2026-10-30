import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stenographer Skill Test Simulator - SSC, RRB & High Court | TypeHindi",
  description:
    "Simulate official stenographer skill tests with realistic dictation audio and timed computer transcription evaluation. Official error-calculation rules for SSC Grade C & D, RRB, and High Court exams.",
  keywords: [
    "stenographer skill test simulator",
    "SSC stenographer mock test",
    "shorthand transcription test",
  ],
  alternates: {
    canonical: "https://typehindi.in/shorthand/tests",
  },
  openGraph: {
    title: "Stenographer Skill Test Simulator - SSC, RRB & High Court | TypeHindi",
    description:
      "Official stenography exam presets, audio dictations, and automatic error deduction calculations.",
    url: "https://typehindi.in/shorthand/tests",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
