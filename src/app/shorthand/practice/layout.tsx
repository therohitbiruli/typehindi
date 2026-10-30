import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitman Shorthand Stroke Practice & Interactive Trainer | TypeHindi",
  description:
    "Interactive Pitman shorthand stroke tutor. Practice stroke direction, geometric angles, light vs heavy line weight, consonant joining, and angle verification on TypeHindi.",
  keywords: [
    "shorthand stroke practice",
    "Pitman shorthand trainer",
    "shorthand outlines practice",
    "stenography stroke drill",
  ],
  alternates: {
    canonical: "https://typehindi.in/shorthand/practice",
  },
  openGraph: {
    title: "Pitman Shorthand Stroke Practice & Interactive Trainer | TypeHindi",
    description:
      "Practice Pitman stroke angles, light/heavy line weights, and consonant outlines with instant feedback.",
    url: "https://typehindi.in/shorthand/practice",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
