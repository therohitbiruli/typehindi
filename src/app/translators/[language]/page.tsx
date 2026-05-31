import { TranslatorTool } from "@/components/TranslatorTool";
import { LANGUAGES } from "../page";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({
    language: `english-to-${lang.toLowerCase()}`,
  }));
}

export async function generateMetadata(props: { params: Promise<{ language: string }> }): Promise<Metadata> {
  const params = await props.params;
  const languageName = params.language.replace("english-to-", "").replace(/^\w/, (c) => c.toUpperCase());
  return {
    title: `English to ${languageName} Typing & Translator Tool | TypeHindi.in`,
    description: `Free online English to ${languageName} typing tool. Convert your English text into ${languageName} script instantly.`,
  };
}

export default async function LanguageTranslatorPage(props: { params: Promise<{ language: string }> }) {
  const params = await props.params;
  const isMatch = params.language.startsWith("english-to-");
  const langName = params.language.replace("english-to-", "");
  const formattedLangName = langName.charAt(0).toUpperCase() + langName.slice(1);

  if (!isMatch || !LANGUAGES.some(l => l.toLowerCase() === langName)) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-4 text-sm text-gray-500">
        <Link href="/translators" className="text-blue-600 hover:underline">Translators</Link> &gt; English to {formattedLangName}
      </div>

      <TranslatorTool language={formattedLangName} />

      {/* Language Specific SEO Text mimicking TypingBaba layout density */}
      <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-normal text-red-600 border-b border-gray-100 pb-2">How to use English to {formattedLangName} Typing Tool</h3>
        <div className="text-sm text-gray-600 leading-relaxed space-y-3">
          <p>This is a free online English to {formattedLangName} transliteration tool. By using this tool, you can convert English letters into {formattedLangName} script instantly. For example, typing <strong>"namaste"</strong> in English will automatically be converted to the corresponding {formattedLangName} script.</p>
          <p>It utilizes phonetic translation, meaning you just type the words as they sound. This tool makes it incredibly simple for users who do not know the complex {formattedLangName} keyboard layouts to generate accurate text for documents, emails, and social media.</p>
        </div>

        <h3 className="text-xl font-normal text-blue-800 border-b border-gray-100 pb-2">Key Features</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
          <li><strong>Instant Conversion:</strong> The text is converted as soon as you press the spacebar.</li>
          <li><strong>Easy to Use:</strong> No need to download or install complex fonts or software.</li>
          <li><strong>Phonetic Typing:</strong> Type exactly how the word sounds in English.</li>
          <li><strong>One-Click Copy:</strong> Copy your converted {formattedLangName} text to the clipboard with a single click.</li>
        </ul>
      </div>
    </div>
  );
}
