import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDIAN_LANGUAGES_TYPING } from "@/data/indianLanguageTypingData";
import { IndianLanguageTypingPage } from "@/components/typing/IndianLanguageTypingPage";

const config = INDIAN_LANGUAGES_TYPING.find((l) => l.id === "santhali")!;

export const metadata: Metadata = {
  title: config?.seoTitle || "English to Santhali Typing Online | TypeHindi",
  description: config?.metaDescription || "Type in Santhali Ol Chiki script using English keyboard.",
  alternates: {
    canonical: `https://www.typehindi.in${config?.route || "/english-to-santhali-typing"}`,
  },
  keywords: [
    `English to ${config?.name || "Santhali"} typing`,
    `English to ${config?.name || "Santhali"} typing online`,
    `Type ${config?.name || "Santhali"} using English keyboard`,
    `${config?.name || "Santhali"} typing online`,
    `${config?.name || "Santhali"} phonetic typing`,
    `convert English to ${config?.name || "Santhali"}`,
    `Ol Chiki typing online`,
    `Santhali Ol Chiki typing`,
  ],
  openGraph: {
    title: config?.seoTitle || "English to Santhali Typing Online | TypeHindi",
    description: config?.metaDescription || "Type in Santhali Ol Chiki script using English keyboard.",
    url: `https://www.typehindi.in${config?.route || "/english-to-santhali-typing"}`,
    type: "website",
  },
};

export default function Page() {
  if (!config) notFound();
  return <IndianLanguageTypingPage config={config} />;
}
