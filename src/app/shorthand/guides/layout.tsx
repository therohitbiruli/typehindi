import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shorthand Reference Library & Personal Notebook | TypeHindi",
  description:
    "Master Pitman shorthand with our reference guide. Avoid common stroke errors, manage your custom stenography notebook, and generate printable ruled practice drill sheets.",
  keywords: [
    "shorthand reference library",
    "shorthand notebook",
    "printable shorthand sheets",
    "stenography mistakes",
    "Pitman shorthand guides",
  ],
  alternates: {
    canonical: "https://typehindi.in/shorthand/guides",
  },
  openGraph: {
    title: "Shorthand Reference Library & Personal Notebook | TypeHindi",
    description:
      "Avoid common stroke mistakes, manage your personal shorthand notebook, and download printable drill sheets.",
    url: "https://typehindi.in/shorthand/guides",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
