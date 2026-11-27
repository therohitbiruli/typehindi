import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDIAN_LANGUAGES_TYPING } from "@/data/indianLanguageTypingData";
import { IndianLanguageTypingPage } from "@/components/typing/IndianLanguageTypingPage";

const config = INDIAN_LANGUAGES_TYPING.find((l) => l.id === "tamil")!;

export const metadata: Metadata = {
  title: config.seoTitle,
  description: config.metaDescription,
  alternates: {
    canonical: `https://www.typehindi.in${config.route}`,
  },
  keywords: [
    `English to ${config.name} typing`,
    `English to ${config.name} typing online`,
    `Type ${config.name} using English keyboard`,
    `${config.name} typing online`,
    `${config.name} phonetic typing`,
    `convert English to ${config.name}`,
  ],
  openGraph: {
    title: config.seoTitle,
    description: config.metaDescription,
    url: `https://www.typehindi.in${config.route}`,
    type: "website",
  },
};

export default function Page() {
  if (!config) notFound();
  return <IndianLanguageTypingPage config={config} />;
}
