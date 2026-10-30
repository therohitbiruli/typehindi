import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shorthand Audio Dictation Practice - 40 to 120 WPM | TypeHindi",
  description:
    "Practice Pitman shorthand with audio dictations from 40 to 120 WPM. Write outlines on paper and evaluate computer transcription for SSC Stenographer Grade C & D exams.",
  keywords: [
    "shorthand audio dictation",
    "stenography dictation 80 wpm",
    "shorthand dictation 100 wpm",
    "SSC stenographer dictation",
  ],
  alternates: {
    canonical: "https://typehindi.in/shorthand/dictation",
  },
  openGraph: {
    title: "Shorthand Audio Dictation Practice - 40 to 120 WPM | TypeHindi",
    description:
      "Listen to spoken English passages at customizable speeds and practice shorthand transcription.",
    url: "https://typehindi.in/shorthand/dictation",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
