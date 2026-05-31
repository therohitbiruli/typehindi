"use client";

import { useState } from "react";

interface TranslatorToolProps {
  language: string;
  hindiLanguageName: string;
  sourceLanguage: "English" | "Hindi";
}

export function TranslatorTool({ language, hindiLanguageName, sourceLanguage }: TranslatorToolProps) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const isHindiSource = sourceLanguage === "Hindi";
  const sourceHindiName = isHindiSource ? "हिंदी" : "अंग्रेजी";

  const handleTranslate = () => {
    // Placeholder logic for future API integration
    // E.g., fetch from Google Input Tools API here
    setOutputText(`[This is a placeholder for ${language} translation. Please integrate the transliteration API to convert: "${inputText}"]`);
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    alert("Text copied to clipboard!");
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-4 md:p-6 mb-8">
      <h2 className="text-xl font-normal text-blue-800 dark:text-blue-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-4 capitalize">
        {sourceHindiName} से {hindiLanguageName} टाइपिंग टूल ({sourceLanguage} to {language})
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Text Area */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{sourceHindiName} में टाइप करें ({sourceLanguage})</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Type ${sourceLanguage} words here...`}
            className="w-full h-64 p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans text-lg resize-none text-gray-800 dark:text-gray-100"
          />
        </div>

        {/* Output Text Area */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{hindiLanguageName} आउटपुट ({language})</label>
          <textarea
            value={outputText}
            readOnly
            placeholder={`Your ${language} text will appear here...`}
            className="w-full h-64 p-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none font-sans text-lg resize-none text-gray-800 dark:text-gray-100"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <button
          onClick={handleTranslate}
          className="px-6 py-2 bg-[#4A8D9B] hover:bg-[#3c7682] dark:bg-[#3c7682] dark:hover:bg-[#4A8D9B] text-white transition-colors text-sm font-medium"
        >
          अनुवाद करें (Translate)
        </button>
        <button
          onClick={handleCopy}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-gray-800 transition-colors text-sm font-medium"
        >
          कॉपी करें (Copy)
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-400 transition-colors text-sm font-medium"
        >
          साफ़ करें (Clear)
        </button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 text-xs text-gray-600 dark:text-gray-400">
        <strong className="text-gray-800 dark:text-gray-300">सुझाव (Tip):</strong> कोई शब्द टाइप करने के बाद उसे तुरंत {hindiLanguageName} में बदलने के लिए स्पेसबार (Spacebar) दबाएं।
      </div>
    </div>
  );
}
