import type { Metadata } from "next";
import { LearnClient } from "../../components/learn/LearnClient";

export const metadata: Metadata = {
  title: "Learn Hindi Typing Step by Step - InScript & Remington Gail Lessons | TypeHindi",
  description:
    "Master Hindi typing from scratch with step-by-step interactive lessons, InScript keyboard layout tutorials, Remington Gail keyboard maps, matra mastery, and daily typing journey.",
  keywords: [
    "learn Hindi typing",
    "Hindi typing tutor",
    "InScript typing lessons",
    "Remington Gail typing tutor",
    "Hindi typing practice lessons",
    "learn Hindi typing step by step",
    "Mangal font typing tutorial",
  ],
  alternates: {
    canonical: "https://typehindi.in/learn",
  },
  openGraph: {
    title: "Learn Hindi Typing Step by Step - InScript & Remington Gail Lessons | TypeHindi",
    description:
      "Structured Hindi typing course with 13 daily lessons, key-by-key drills, matra practice, and exam simulations.",
    url: "https://typehindi.in/learn",
    type: "website",
  },
};

export default function LearnPage() {
  return <LearnClient />;
}
