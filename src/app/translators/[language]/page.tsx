import { TranslatorTool } from "@/components/TranslatorTool";
import { LANGUAGES } from "../page";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  const params: { language: string }[] = [];
  LANGUAGES.forEach((lang) => {
    params.push({ language: `english-to-${lang.name.toLowerCase()}` });
    params.push({ language: `hindi-to-${lang.name.toLowerCase()}` });
  });
  return params;
}

export async function generateMetadata(props: { params: Promise<{ language: string }> }): Promise<Metadata> {
  const params = await props.params;
  const isHindiSource = params.language.startsWith("hindi-to-");
  const sourceName = isHindiSource ? "Hindi" : "English";
  const prefix = isHindiSource ? "hindi-to-" : "english-to-";
  
  const targetLangStr = params.language.replace(prefix, "");
  const langObj = LANGUAGES.find(l => l.name.toLowerCase() === targetLangStr);
  const targetName = langObj ? langObj.name : targetLangStr.charAt(0).toUpperCase() + targetLangStr.slice(1);

  return {
    title: `${sourceName} to ${targetName} Typing & Translator Tool | TypeHindi.in`,
    description: `Free online ${sourceName} to ${targetName} typing tool. Convert your ${sourceName} text into ${targetName} script instantly.`,
  };
}

export default async function LanguageTranslatorPage(props: { params: Promise<{ language: string }> }) {
  const params = await props.params;
  
  const isEnglishSource = params.language.startsWith("english-to-");
  const isHindiSource = params.language.startsWith("hindi-to-");
  
  if (!isEnglishSource && !isHindiSource) {
    notFound();
  }

  const prefix = isHindiSource ? "hindi-to-" : "english-to-";
  const targetLangStr = params.language.replace(prefix, "");
  
  const langObj = LANGUAGES.find(l => l.name.toLowerCase() === targetLangStr);
  if (!langObj) {
    notFound();
  }

  const sourceName = isHindiSource ? "Hindi" : "English";
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/translators" className="text-blue-600 dark:text-blue-400 hover:underline">Translators</Link> &gt; {sourceName} to {langObj.name}
      </div>

      <TranslatorTool 
        language={langObj.name} 
        hindiLanguageName={langObj.name}
        sourceLanguage={sourceName} 
      />

      {/* Language Specific SEO Text */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-normal text-red-600 dark:text-red-400 border-b border-gray-100 dark:border-gray-800 pb-2">
          How to Use the {sourceName} to {langObj.name} Transliteration Tool
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
          <p>This is a free online {sourceName} to {langObj.name} transliteration tool. By using this tool, you can instantly convert {sourceName} letters into {langObj.name} script. For example, typing phonetically in {sourceName} will automatically convert the text into the corresponding {langObj.name} script.</p>
          <p>It uses phonetic transliteration, meaning you type words just as they sound. This tool makes it incredibly simple for users who do not know the complex native {langObj.name} keyboard layouts to generate accurate text for documents, emails, and social media.</p>
        </div>

        <h3 className="text-xl font-normal text-blue-800 dark:text-blue-400 border-b border-gray-100 dark:border-gray-800 pb-2">Key Features</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
          <li><strong className="text-gray-800 dark:text-gray-200">Instant Conversion:</strong> Text is converted instantly as soon as you press the spacebar.</li>
          <li><strong className="text-gray-800 dark:text-gray-200">Easy to Use:</strong> No need to download or install complex fonts or external software.</li>
          <li><strong className="text-gray-800 dark:text-gray-200">Phonetic Typing:</strong> Type words phonetically, exactly as they sound.</li>
          <li><strong className="text-gray-800 dark:text-gray-200">One-Click Copy:</strong> Copy your converted {langObj.name} text to the clipboard with a single click.</li>
        </ul>
      </div>
    </div>
  );
}
