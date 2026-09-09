import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";
import { LanguageKeyboardClient } from "../../../components/LanguageKeyboardClient";
import { ALL_LANGUAGES, getLanguageConfig } from "../../../data/languages";

interface Props {
  params: Promise<{ language: string }>;
}

export async function generateStaticParams() {
  return ALL_LANGUAGES.map((lang) => ({
    language: lang.keyboardSlug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language } = await params;
  const lang = ALL_LANGUAGES.find(
    (l) => l.keyboardSlug === language || l.id === language
  );
  if (!lang) return {};

  const url = `https://typehindi.in/keyboard-layout/${lang.keyboardSlug}`;
  const title = `${lang.name} Keyboard Layout – ${lang.layoutName} Key Map | TypeHindi`;
  const description = `Interactive ${lang.layoutName} keyboard layout map. Learn normal and shift key combinations for ${lang.name} vowels, consonants, and matras on TypeHindi.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LanguageKeyboardPage({ params }: Props) {
  const { language } = await params;
  const langConfig = ALL_LANGUAGES.find(
    (l) => l.keyboardSlug === language || l.id === language
  );

  if (!langConfig) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${langConfig.name} Keyboard Layout`,
    "description": `Interactive visual layout for ${langConfig.layoutName} with character mappings.`,
    "url": `https://typehindi.in/keyboard-layout/${langConfig.keyboardSlug}`,
    "publisher": {
      "@type": "Organization",
      "name": "TypeHindi",
      "url": "https://typehindi.in"
    }
  };

  return (
    <div className="container-main py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Keyboard Layout", href: "/keyboard-layout" },
          { label: `${langConfig.name} Keyboard` },
        ]}
      />

      <AdPlaceholder position="top" />

      {/* Header */}
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-semibold mb-3">
          <span>⌨️</span>
          <span>{langConfig.layoutName}</span>
        </div>
        <h1 className="heading-1 mb-3">
          {langConfig.name} Keyboard Layout & Character Map
        </h1>
        <p className="text-muted leading-relaxed text-sm sm:text-base">
          Interactive visual guide to the {langConfig.layoutName}. Practice pressing keys, explore normal and shift key combinations, and master {langConfig.name} typing.
        </p>
      </div>

      <LanguageKeyboardClient langConfig={langConfig} />

      <AdPlaceholder position="bottom" />
    </div>
  );
}
