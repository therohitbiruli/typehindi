"use client";

import { useState } from "react";

interface TranslatorToolProps {
  language: string;
}

export function TranslatorTool({ language }: TranslatorToolProps) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

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
    <div className="bg-white border border-gray-200 shadow-sm p-4 md:p-6 mb-8">
      <h2 className="text-xl font-normal text-blue-800 border-b border-gray-100 pb-2 mb-4 capitalize">
        English to {language} Typing Tool
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Text Area */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Type in English</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Type English words here (e.g., 'namaste')`}
            className="w-full h-64 p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans text-lg resize-none text-gray-800"
          />
        </div>

        {/* Output Text Area */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 capitalize">{language} Output</label>
          <textarea
            value={outputText}
            readOnly
            placeholder={`Your ${language} text will appear here...`}
            className="w-full h-64 p-3 border border-gray-300 bg-gray-50 focus:outline-none font-sans text-lg resize-none text-gray-800"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <button
          onClick={handleTranslate}
          className="px-6 py-2 bg-[#4A8D9B] hover:bg-[#3c7682] text-white transition-colors text-sm font-medium"
        >
          Translate
        </button>
        <button
          onClick={handleCopy}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors text-sm font-medium"
        >
          Copy Text
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-red-100 hover:bg-red-200 text-red-700 transition-colors text-sm font-medium"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-100 text-xs text-gray-600">
        <strong>Tip:</strong> Press Spacebar after typing a word to instantly convert it into {language} (API integration required).
      </div>
    </div>
  );
}
