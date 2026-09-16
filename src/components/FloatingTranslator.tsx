"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Target languages — Google Translate language codes
// Santhali (sat) has limited support on Google Translate; we include it but
// fall back gracefully if the API returns an error.
const TARGET_LANGUAGES = [
  { code: "hi", label: "हिन्दी", labelEn: "Hindi" },
  { code: "en", label: "English", labelEn: "English" },
  { code: "pa", label: "ਪੰਜਾਬੀ", labelEn: "Punjabi" },
  { code: "bn", label: "বাংলা", labelEn: "Bengali" },
  { code: "mr", label: "मराठी", labelEn: "Marathi" },
  { code: "ta", label: "தமிழ்", labelEn: "Tamil" },
  { code: "te", label: "తెలుగు", labelEn: "Telugu" },
  { code: "kn", label: "ಕನ್ನಡ", labelEn: "Kannada" },
  { code: "ml", label: "മലയാളം", labelEn: "Malayalam" },
  { code: "gu", label: "ગુજરાતી", labelEn: "Gujarati" },
  { code: "or", label: "ଓଡ଼ିଆ", labelEn: "Odia" },
  { code: "ur", label: "اردو", labelEn: "Urdu" },
  { code: "sat", label: "ᱥᱟᱱᱛᱟᱲᱤ", labelEn: "Santhali" },
] as const;

type LangCode = (typeof TARGET_LANGUAGES)[number]["code"];

export function FloatingTranslator() {
  const pathname = usePathname();
  const [isDismissed, setIsDismissed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [targetLang, setTargetLang] = useState<LangCode>("hi");

  // Read dismissed state + last selected language from localStorage on mount
  useEffect(() => {
    const dismissed = localStorage.getItem("translatorDismissed");
    if (dismissed !== "true") {
      setIsDismissed(false);
    }
    const savedLang = localStorage.getItem("translatorTargetLang");
    if (savedLang && TARGET_LANGUAGES.some((l) => l.code === savedLang)) {
      setTargetLang(savedLang as LangCode);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.setItem("translatorDismissed", "true");
    setIsDismissed(true);
    setIsOpen(false);
  };

  const handleResetDismiss = () => {
    localStorage.removeItem("translatorDismissed");
    setIsDismissed(false);
  };

  const selectLang = (code: LangCode) => {
    setTargetLang(code);
    localStorage.setItem("translatorTargetLang", code);
    // Clear previous output when switching target
    setTranslatedText("");
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(inputText)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Translation failed");
      const data = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const translated = data[0].map((item: any) => item[0]).join("");
      setTranslatedText(translated);
    } catch {
      const langName =
        TARGET_LANGUAGES.find((l) => l.code === targetLang)?.labelEn ?? targetLang;
      setTranslatedText(
        `Translation to ${langName} failed. Please try again.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoadToPractice = () => {
    if (!translatedText) return;
    const event = new CustomEvent("load-custom-text", { detail: translatedText });
    window.dispatchEvent(event);
    setIsOpen(false);
  };

  const isPracticePage = pathname === "/practice";
  const currentLangMeta = TARGET_LANGUAGES.find((l) => l.code === targetLang)!;

  // Font class based on target language script
  const outputFontClass =
    targetLang === "en"
      ? "font-sans"
      : targetLang === "ur"
        ? "font-sans"
        : targetLang === "sat"
          ? "font-sans"
          : "font-hindi";

  if (isDismissed) {
    return (
      <button
        onClick={handleResetDismiss}
        className="fixed bottom-4 left-4 z-40 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-900 dark:text-white px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all border border-gray-300 dark:border-gray-700 shadow-sm"
      >
        🌐 Restore Translator
      </button>
    );
  }

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center animate-fade-in">
          <div className="relative group">
            <button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-gray-900 dark:text-white shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 flex items-center justify-center text-2xl transition-all hover:scale-105"
              title="Quick Multilingual Translator"
            >
              🌐
            </button>
            <button
              onClick={handleDismiss}
              className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-gray-900 border border-white text-gray-900 dark:text-white hover:bg-red-600 flex items-center justify-center text-[9px] font-bold shadow-md transition-colors"
              title="Hide this translator permanently"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Slide-out Translator Card */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl p-5 animate-fade-in flex flex-col space-y-3">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-900 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌐</span>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                Quick Translator
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-800 dark:hover:text-gray-900 dark:text-white flex items-center justify-center text-xs font-bold"
            >
              ✕
            </button>
          </div>

          {/* Target Language Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Translate to
            </label>
            <div className="flex flex-wrap gap-1.5">
              {TARGET_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLang(lang.code)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition-all border ${
                    targetLang === lang.code
                      ? "bg-primary-600 text-white border-primary-600 shadow-sm shadow-primary-500/20"
                      : "bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                  title={lang.labelEn}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {/* Source Input */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex justify-between">
                <span>Type in any language</span>
                <span className="text-primary-500 lowercase">auto-detect</span>
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type or paste sentences here..."
                rows={3}
                className="w-full p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-xs text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none font-sans"
              />
            </div>

            {/* Translated Output */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {currentLangMeta.label} ({currentLangMeta.labelEn})
              </label>
              <textarea
                value={translatedText}
                readOnly
                placeholder="Translation will appear here..."
                rows={3}
                className={`w-full p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-xs ${outputFontClass} text-gray-800 dark:text-gray-100 focus:outline-none resize-none`}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 pt-2 border-t border-gray-100 dark:border-gray-900">
            <button
              onClick={handleTranslate}
              disabled={isLoading || !inputText.trim()}
              className="flex-1 py-2 px-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-semibold disabled:opacity-50 transition-all flex items-center justify-center gap-1.5"
            >
              {isLoading
                ? "Translating..."
                : `Translate → ${currentLangMeta.labelEn}`}
            </button>

            {translatedText && (
              <button
                onClick={handleCopy}
                className="py-2 px-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl text-xs font-semibold transition-all"
                title="Copy text"
              >
                {copied ? "Copied! ✓" : "Copy"}
              </button>
            )}
          </div>

          {/* Import to practice option */}
          {translatedText && isPracticePage && (
            <button
              onClick={handleLoadToPractice}
              className="w-full py-2 px-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-gray-900 dark:text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-orange-500/10 flex items-center justify-center gap-1.5"
            >
              ✍️ Load to Practice
            </button>
          )}

          <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center">
            Click ✕ on the floating button to hide permanently.
          </p>
        </div>
      )}
    </>
  );
}
