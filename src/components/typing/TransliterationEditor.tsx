"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { TransliterationExample } from "@/data/indianLanguageTypingData";

interface TransliterationEditorProps {
  languageName: string;
  nativeName: string;
  itcCode: string;
  isRtl?: boolean;
  examples?: TransliterationExample[];
  supported?: boolean;
}

function transliterateToOlChiki(text: string): string {
  if (!text) return "";

  const multiMap: { eng: string; ol: string }[] = [
    { eng: "santhali", ol: "ᱥᱟᱱᱛᱟᱲᱤ" },
    { eng: "santali", ol: "ᱥᱟᱱᱛᱟᱲᱤ" },
    { eng: "ol chiki", ol: "ᱚᱞ ᱪᱤᱠᱤ" },
    { eng: "olchiki", ol: "ᱚᱞᱪᱤᱠᱤ" },
    { eng: "johar", ol: "ᱡᱚᱦᱟᱨ" },
    { eng: "marang", ol: "ᱢᱟᱨᱟᱝ" },
    { eng: "burum", ol: "ᱵᱩᱨᱩᱢ" },
    { eng: "ch", ol: "ᱪ" },
    { eng: "kh", ol: "ᱠᱷ" },
    { eng: "gh", ol: "ᱜᱷ" },
    { eng: "th", ol: "ᱛᱷ" },
    { eng: "dh", ol: "ᱫᱷ" },
    { eng: "ph", ol: "ᱯᱷ" },
    { eng: "bh", ol: "ᱵᱷ" },
    { eng: "jh", ol: "ᱡᱷ" },
    { eng: "ng", ol: "ᱝ" },
    { eng: "ny", ol: "ᱧ" },
    { eng: "tt", ol: "ᱴ" },
    { eng: "dd", ol: "ᱰ" },
    { eng: "rr", ol: "ᱲ" },
    { eng: "nn", ol: "ᱬ" },
    { eng: "aa", ol: "ᱟ" },
    { eng: "ee", ol: "ᱤ" },
    { eng: "ii", ol: "ᱤ" },
    { eng: "oo", ol: "ᱩ" },
    { eng: "uu", ol: "ᱩ" },
    { eng: "ai", ol: "ᱟᱭ" },
    { eng: "au", ol: "ᱟᱣ" },
    { eng: "ou", ol: "ᱳ" },
  ];

  const singleMap: Record<string, string> = {
    a: "ᱟ",
    b: "ᱵ",
    c: "ᱪ",
    d: "ᱫ",
    e: "ᱮ",
    f: "ᱯᱷ",
    g: "ᱜ",
    h: "ᱦ",
    i: "ᱤ",
    j: "ᱡ",
    k: "ᱠ",
    l: "ᱞ",
    m: "ᱢ",
    n: "ᱱ",
    o: "ᱚ",
    p: "ᱯ",
    q: "ᱠ",
    r: "ᱨ",
    s: "ᱥ",
    t: "ᱛ",
    u: "ᱩ",
    v: "ᱶ",
    w: "ᱣ",
    x: "ᱠᱥ",
    y: "ᱭ",
    z: "ᱡ",
    "0": "᱐",
    "1": "᱑",
    "2": "᱒",
    "3": "᱓",
    "4": "᱔",
    "5": "᱕",
    "6": "᱖",
    "7": "᱗",
    "8": "᱘",
    "9": "᱙",
  };

  const words = text.split(/(\s+|[.,!?;:()])/);
  return words
    .map((word) => {
      if (!word || /^\s+$/.test(word) || /^[.,!?;:()]$/.test(word)) return word;

      const lower = word.toLowerCase();
      for (const item of multiMap) {
        if (lower === item.eng) return item.ol;
      }

      let res = "";
      let i = 0;
      while (i < lower.length) {
        if (i + 2 <= lower.length) {
          const sub2 = lower.substring(i, i + 2);
          const found2 = multiMap.find((m) => m.eng === sub2);
          if (found2) {
            res += found2.ol;
            i += 2;
            continue;
          }
        }
        const ch = lower[i];
        if (singleMap[ch]) {
          res += singleMap[ch];
        } else {
          res += word[i];
        }
        i++;
      }
      return res;
    })
    .join("");
}

export function TransliterationEditor({
  languageName,
  nativeName,
  itcCode,
  isRtl = false,
  examples = [],
  supported = true,
}: TransliterationEditorProps) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const outputTextareaRef = useRef<HTMLTextAreaElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Perform transliteration via Google Input Tools API or built-in engines
  const performTransliteration = useCallback(
    async (text: string) => {
      if (!supported || !text.trim()) {
        setOutputText("");
        return;
      }

      setIsLoading(true);
      try {
        if (itcCode === "sat-t-i0-und" || languageName.toLowerCase() === "santhali") {
          const converted = transliterateToOlChiki(text);
          setOutputText(converted);
          return;
        }

        const url = `https://inputtools.google.com/request?text=${encodeURIComponent(
          text
        )}&itc=${itcCode}&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Transliteration request failed");

        const data = await res.json();
        if (data[0] === "SUCCESS" && data[1] && data[1].length > 0) {
          const resultWords = data[1].map(
            (item: [string, string[]]) => item[1]?.[0] || item[0]
          );
          setOutputText(resultWords.join(" "));
        }
      } catch (err) {
        console.error("Transliteration error:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [itcCode, supported, languageName]
  );

  // Auto-transliterate on typing with debounce
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!inputText.trim()) {
      setOutputText("");
      return;
    }

    // Debounce 300ms for smooth live typing
    debounceTimerRef.current = setTimeout(() => {
      performTransliteration(inputText);
    }, 300);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [inputText, performTransliteration]);

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectAll = () => {
    if (outputTextareaRef.current) {
      outputTextareaRef.current.focus();
      outputTextareaRef.current.select();
    }
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    setSelectedWordIndex(null);
  };

  const handleExampleClick = (example: TransliterationExample, idx: number) => {
    setSelectedWordIndex(idx);
    setInputText(example.roman);
    setOutputText(example.native);
  };

  const wordCount = (text: string) => {
    const trimmed = text.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  return (
    <div className="rounded-3xl border border-[#CBD5E1] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden mb-12">
      {/* Top Banner / Controls Header */}
      <div className="bg-[#F4F7FC] dark:bg-slate-950/80 px-6 py-4 border-b border-[#CBD5E1] dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-white flex items-center justify-center font-bold text-lg shadow-sm">
            Aa
          </div>
          <div>
            <h2 className="text-base font-bold text-[#17243A] dark:text-white leading-tight">
              English to {languageName} ({nativeName})
            </h2>
            <p className="text-xs text-[#475569] dark:text-slate-400 font-medium">
              Phonetic Typing Engine • Type in English & get {nativeName}
            </p>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2">
          {isLoading ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Transliterating...
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Ready
            </span>
          )}
        </div>
      </div>

      {/* Quick Example Words */}
      {examples.length > 0 && (
        <div className="px-6 py-3 bg-white dark:bg-slate-900 border-b border-[#E2E8F0] dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#64748B] dark:text-slate-400 mr-1">
            Try Examples:
          </span>
          {examples.slice(0, 6).map((ex, idx) => (
            <button
              key={ex.roman}
              onClick={() => handleExampleClick(ex, idx)}
              className={`text-xs px-3 py-1 rounded-full border transition-all font-medium ${
                selectedWordIndex === idx
                  ? "bg-[#102B5C] text-white border-[#102B5C] dark:bg-primary-600 dark:border-primary-500 shadow-sm"
                  : "bg-gray-50 dark:bg-slate-800 border-[#CBD5E1] dark:border-slate-700 text-[#27364B] dark:text-slate-200 hover:border-[#8FA6C5] hover:bg-gray-100"
              }`}
            >
              <span className="text-muted">{ex.roman}</span> →{" "}
              <strong className="text-primary-700 dark:text-primary-300">
                {ex.native}
              </strong>
            </button>
          ))}
        </div>
      )}

      {/* Dual Editor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#CBD5E1] dark:divide-slate-800">
        {/* Left: English / Roman Input */}
        <div className="p-6 flex flex-col bg-white dark:bg-slate-900">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="roman-input"
              className="text-xs font-bold uppercase tracking-wider text-[#102B5C] dark:text-primary-400"
            >
              English (Roman) Input
            </label>
            <span className="text-xs text-[#64748B] dark:text-slate-400">
              {inputText.length} chars • {wordCount(inputText)} words
            </span>
          </div>

          <textarea
            id="roman-input"
            value={inputText}
            onChange={(e) => {
              setSelectedWordIndex(null);
              setInputText(e.target.value);
            }}
            placeholder={`Type ${languageName} words in English letters (e.g. ${
              examples[0]?.roman || "namaste"
            })...`}
            className="w-full h-72 md:h-80 p-4 rounded-2xl border border-[#CBD5E1] dark:border-slate-700 bg-gray-50/50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-[#102B5C] dark:focus:ring-primary-500 font-sans text-lg resize-none text-[#17243A] dark:text-slate-100 placeholder:text-slate-400 leading-relaxed transition-all"
            autoFocus
          />

          <div className="mt-3 flex items-center justify-between text-xs text-[#64748B] dark:text-slate-400">
            <span>
              💡 <strong>Tip:</strong> Press Spacebar after each word to convert
              instantly.
            </span>
          </div>
        </div>

        {/* Right: Native Output */}
        <div className="p-6 flex flex-col bg-[#F8FAFC]/50 dark:bg-slate-900/60">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="native-output"
              className="text-xs font-bold uppercase tracking-wider text-[#102B5C] dark:text-primary-400 flex items-center gap-1.5"
            >
              <span>{nativeName} ({languageName}) Output</span>
              <span className="text-[10px] font-normal lowercase text-muted">
                (editable)
              </span>
            </label>
            <span className="text-xs text-[#64748B] dark:text-slate-400">
              {outputText.length} chars • {wordCount(outputText)} words
            </span>
          </div>

          <textarea
            id="native-output"
            ref={outputTextareaRef}
            value={outputText}
            onChange={(e) => setOutputText(e.target.value)}
            dir={isRtl ? "rtl" : "ltr"}
            placeholder={`Your converted ${nativeName} text will appear here...`}
            className={`w-full h-72 md:h-80 p-4 rounded-2xl border border-[#CBD5E1] dark:border-slate-700 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-[#102B5C] dark:focus:ring-primary-500 text-xl font-medium resize-none text-[#17243A] dark:text-slate-100 placeholder:text-slate-400 leading-relaxed transition-all ${
              isRtl ? "text-right font-serif" : "text-left"
            }`}
          />

          {/* Action Toolbar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2E8F0] dark:border-slate-800">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!outputText}
                className="btn-primary rounded-xl px-5 py-2.5 text-xs font-bold shadow-md shadow-[#102B5C]/20 flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{copied ? "✓ Copied!" : "📋 Copy Text"}</span>
              </button>

              <button
                type="button"
                onClick={handleSelectAll}
                disabled={!outputText}
                className="rounded-xl px-4 py-2.5 text-xs font-bold border border-[#CBD5E1] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#27364B] dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Select All
              </button>
            </div>

            <button
              type="button"
              onClick={handleClear}
              disabled={!inputText && !outputText}
              className="rounded-xl px-4 py-2.5 text-xs font-bold text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-transparent hover:border-rose-200 dark:hover:border-rose-900 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
