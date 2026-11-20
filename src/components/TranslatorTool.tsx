"use client";

import { useState } from "react";

interface TranslatorToolProps {
  language: string;
  hindiLanguageName: string;
  sourceLanguage: "English" | "Hindi";
}

const itcMap: Record<string, string> = {
  kannada: "kn-t-i0-und",
  gujarati: "gu-t-i0-und",
  malayalam: "ml-t-i0-und",
  tamil: "ta-t-i0-und",
  telugu: "te-t-i0-und",
  bengali: "bn-t-i0-und",
  punjabi: "pa-t-i0-und",
  marathi: "mr-t-i0-und",
  odia: "or-t-i0-und",
  urdu: "ur-t-i0-und",
  hindi: "hi-t-i0-und",
};

export function TranslatorTool({ language, sourceLanguage }: TranslatorToolProps) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const itc = itcMap[language.toLowerCase()] || "";

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    if (!itc) {
      setOutputText(
        `Please use the dedicated typing tool or standard keyboard layout for ${language}.`
      );
      return;
    }

    setIsLoading(true);
    try {
      const url = `https://inputtools.google.com/request?text=${encodeURIComponent(
        inputText
      )}&itc=${itc}&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Transliteration failed");

      const data = await res.json();
      if (data[0] === "SUCCESS" && data[1] && data[1].length > 0) {
        const resultWords = data[1].map(
          (item: [string, string[]]) => item[1]?.[0] || item[0]
        );
        setOutputText(resultWords.join(" "));
      } else {
        setOutputText(inputText);
      }
    } catch {
      setOutputText("Transliteration request failed. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-[#CBD5E1] dark:border-gray-800 shadow-sm p-4 md:p-6 mb-8 rounded-2xl">
      <h2 className="text-xl font-bold text-[#102B5C] dark:text-primary-400 border-b border-[#E2E8F0] dark:border-gray-800 pb-2 mb-4 capitalize">
        {sourceLanguage} to {language} Transliteration Tool
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Text Area */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#17243A] dark:text-gray-300">
            Type in {sourceLanguage} (Phonetic)
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Type ${sourceLanguage} words here (e.g. namaste)...`}
            className="w-full h-64 p-3.5 rounded-xl border border-[#CBD5E1] dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-[#102B5C] dark:focus:ring-primary-500 font-sans text-base resize-none text-[#17243A] dark:text-gray-100"
          />
        </div>

        {/* Output Text Area */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#17243A] dark:text-gray-300 capitalize">
            {language} Output
          </label>
          <textarea
            value={outputText}
            onChange={(e) => setOutputText(e.target.value)}
            placeholder={`Your ${language} text will appear here...`}
            className="w-full h-64 p-3.5 rounded-xl border border-[#CBD5E1] dark:border-gray-700 bg-[#F8FAFC] dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#102B5C] text-lg resize-none text-[#17243A] dark:text-gray-100"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleTranslate}
            disabled={isLoading || !inputText}
            className="btn-primary rounded-xl px-6 py-2.5 text-xs font-bold shadow-md shadow-[#102B5C]/20 disabled:opacity-40"
          >
            {isLoading ? "Transliterating..." : "Transliterate"}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!outputText}
            className="px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-gray-800 transition-colors text-xs font-bold disabled:opacity-40"
          >
            {copied ? "✓ Copied!" : "Copy Text"}
          </button>
        </div>

        <button
          type="button"
          onClick={handleClear}
          disabled={!inputText && !outputText}
          className="px-5 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-400 transition-colors text-xs font-bold disabled:opacity-40"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-xl text-xs text-gray-600 dark:text-gray-400">
        <strong className="text-gray-800 dark:text-gray-300">Tip:</strong> Click Transliterate to instantly convert your English words into {language} script.
      </div>
    </div>
  );
}
