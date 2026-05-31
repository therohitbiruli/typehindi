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
  const targetHindiName = langObj ? langObj.hindiName : targetName;

  return {
    title: `${sourceName} to ${targetName} (${targetHindiName}) Typing & Translator Tool | TypeHindi.in`,
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
  const sourceHindiName = isHindiSource ? "हिंदी" : "अंग्रेजी";
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/translators" className="text-blue-600 dark:text-blue-400 hover:underline">Translators</Link> &gt; {sourceName} to {langObj.name}
      </div>

      <TranslatorTool 
        language={langObj.name} 
        hindiLanguageName={langObj.hindiName}
        sourceLanguage={sourceName} 
      />

      {/* Language Specific SEO Text translated to Hindi */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-normal text-red-600 dark:text-red-400 border-b border-gray-100 dark:border-gray-800 pb-2">
          {sourceHindiName} से {langObj.hindiName} टाइपिंग टूल का उपयोग कैसे करें
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
          <p>यह एक मुफ्त ऑनलाइन {sourceHindiName} से {langObj.hindiName} लिप्यंतरण (transliteration) टूल है। इस टूल का उपयोग करके, आप {sourceHindiName} अक्षरों को तुरंत {langObj.hindiName} लिपि में बदल सकते हैं। उदाहरण के लिए, {sourceHindiName} में <strong className="text-gray-800 dark:text-gray-200">"नमस्ते"</strong> टाइप करने पर यह स्वचालित रूप से संबंधित {langObj.hindiName} लिपि में परिवर्तित हो जाएगा।</p>
          <p>यह ध्वन्यात्मक (phonetic) अनुवाद का उपयोग करता है, जिसका अर्थ है कि आप शब्दों को वैसे ही टाइप करते हैं जैसे वे सुनाई देते हैं। यह टूल उन उपयोगकर्ताओं के लिए अविश्वसनीय रूप से सरल बनाता है जो जटिल {langObj.hindiName} कीबोर्ड लेआउट को नहीं जानते हैं, ताकि वे दस्तावेज़ों, ईमेल और सोशल मीडिया के लिए सटीक टेक्स्ट उत्पन्न कर सकें।</p>
        </div>

        <h3 className="text-xl font-normal text-blue-800 dark:text-blue-400 border-b border-gray-100 dark:border-gray-800 pb-2">मुख्य विशेषताएं (Key Features)</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
          <li><strong className="text-gray-800 dark:text-gray-200">त्वरित रूपांतरण (Instant Conversion):</strong> जैसे ही आप स्पेसबार दबाते हैं, टेक्स्ट तुरंत बदल जाता है।</li>
          <li><strong className="text-gray-800 dark:text-gray-200">उपयोग में आसान:</strong> किसी जटिल फॉन्ट या सॉफ़्टवेयर को डाउनलोड या इंस्टॉल करने की आवश्यकता नहीं है।</li>
          <li><strong className="text-gray-800 dark:text-gray-200">ध्वन्यात्मक टाइपिंग:</strong> शब्द जैसा सुनाई देता है, ठीक वैसा ही टाइप करें।</li>
          <li><strong className="text-gray-800 dark:text-gray-200">एक-क्लिक कॉपी:</strong> एक क्लिक से अपने परिवर्तित {langObj.hindiName} टेक्स्ट को क्लिपबोर्ड पर कॉपी करें।</li>
        </ul>
      </div>
    </div>
  );
}
