"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { keyboardRows, physicalKeyLabels } from "../data/keyboard-layout";
import { INSCRIPT_KEY_DETAILS, InScriptKeyDetail } from "../data/keyboardEncyclopedia";
import { useKeyPress } from "../hooks/useKeyPress";

type CategoryFilter =
  | "all"
  | "vowel"
  | "consonant"
  | "matra"
  | "shift"
  | "number"
  | "symbol"
  | "special";

const CATEGORIES: { id: CategoryFilter; label: string; icon: string; desc: string }[] = [
  { id: "all", label: "All Keys", icon: "⌨️", desc: "Complete InScript layout with all standard and shift characters." },
  { id: "vowel", label: "Independent Vowels", icon: "🗣️", desc: "Standalone vowels (स्वर - अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ, ऋ) typed without consonants." },
  { id: "consonant", label: "Consonants", icon: "🔤", desc: "Primary Hindi consonants (व्यंजन - क, ख, ग, घ, च, छ, ज, त, प, म, र, ल, व, स...)." },
  { id: "matra", label: "Matras (मात्राएँ)", icon: "✨", desc: "Vowel diacritic signs (ा, ि, ी, ु, ू, े, ै, ो, ौ, ं, ँ, ः) attached to consonants." },
  { id: "shift", label: "Shift Characters", icon: "⇧", desc: "Aspirated consonants (महाप्राण) and full vowels accessed by holding the Shift key." },
  { id: "number", label: "Numbers (अंक)", icon: "🔢", desc: "Devanagari numerals (१, २, ३, ४, ५, ६, ७, ८, ९, ०) on the top number row." },
  { id: "symbol", label: "Symbols & Punctuation", icon: "🔣", desc: "Hindi full stop Purna Viram (।), comma, exclamation, and punctuation marks." },
  { id: "special", label: "Special Keys (हलंत/नुक़्ता)", icon: "⚙️", desc: "Halant (्) for half-letters and Nukta (़) for Urdu/Persian loan sounds." },
];

const POPULAR_SEARCH_CHARS = ["क", "भ", "अ", "ि", "ा", "्", "श", "ष", "श्र", "ध", "ऋ", "।"];

export function InteractiveKeyboardMaster() {
  const { activeKey: physicalActiveKey, isShift: physicalIsShift } = useKeyPress();
  const [shiftToggled, setShiftToggled] = useState(false);
  const [selectedKey, setSelectedKey] = useState<InScriptKeyDetail | null>(
    INSCRIPT_KEY_DETAILS.find((k) => k.englishKey === "K") || null
  );
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{
    keyDetail: InScriptKeyDetail;
    matchType: "normal" | "shift";
    char: string;
  } | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Effective shift state (either physically holding Shift or UI toggle active)
  const isShiftActive = physicalIsShift || shiftToggled;

  // Track physical key press into selected key
  useEffect(() => {
    if (physicalActiveKey) {
      const match = INSCRIPT_KEY_DETAILS.find((k) => k.code === physicalActiveKey);
      if (match) {
        setSelectedKey(match);
      }
    }
  }, [physicalActiveKey]);

  // Handle search query
  useEffect(() => {
    const q = searchQuery.trim();
    if (!q) {
      setSearchResult(null);
      return;
    }

    // Direct match search
    const foundNormal = INSCRIPT_KEY_DETAILS.find((k) => k.normal === q);
    if (foundNormal) {
      setSearchResult({ keyDetail: foundNormal, matchType: "normal", char: q });
      setSelectedKey(foundNormal);
      return;
    }

    const foundShift = INSCRIPT_KEY_DETAILS.find((k) => k.shift === q);
    if (foundShift) {
      setSearchResult({ keyDetail: foundShift, matchType: "shift", char: q });
      setSelectedKey(foundShift);
      return;
    }

    // English key name search (e.g. user types "k" or "K")
    const foundEnglish = INSCRIPT_KEY_DETAILS.find(
      (k) => k.englishKey.toLowerCase() === q.toLowerCase()
    );
    if (foundEnglish) {
      setSearchResult({ keyDetail: foundEnglish, matchType: "normal", char: foundEnglish.normal });
      setSelectedKey(foundEnglish);
      return;
    }

    setSearchResult(null);
  }, [searchQuery]);

  // Check if a key belongs to active category
  const isKeyInCategory = (detail?: InScriptKeyDetail) => {
    if (!detail || activeCategory === "all") return true;
    if (activeCategory === "shift") return !!detail.shift && detail.shift !== detail.normal;
    return detail.normalCategory === activeCategory || detail.shiftCategory === activeCategory;
  };

  const keyDetailMap = useMemo(() => {
    const map = new Map<string, InScriptKeyDetail>();
    INSCRIPT_KEY_DETAILS.forEach((d) => map.set(d.code, d));
    return map;
  }, []);

  const activeCategoryInfo = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="space-y-12">
      {/* ========================================================================= */}
      {/* SEARCH TOOL: Find a Hindi Character */}
      {/* ========================================================================= */}
      <section className="card p-6 md:p-8 rounded-3xl border border-primary-500/30 bg-gradient-to-br from-primary-950/40 via-slate-900 to-slate-900 shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-3">
            🔍 Character Locator
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Find a Hindi Character
          </h2>
          <p className="text-slate-300 text-sm mb-6">
            Enter or select any Hindi letter, vowel, matra, or symbol to immediately locate its exact
            key on the InScript keyboard layout.
          </p>

          {/* Search Input Box */}
          <div className="relative max-w-md mx-auto mb-4">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Hindi Character (e.g. क, भ, अ, ि, ा, ्)..."
              className="w-full bg-slate-950/80 border-2 border-slate-700 focus:border-primary-500 rounded-2xl px-5 py-3.5 text-white text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-center font-bold"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Select Character Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="text-xs text-slate-400 mr-1 font-medium">Quick find:</span>
            {POPULAR_SEARCH_CHARS.map((char) => (
              <button
                key={char}
                onClick={() => setSearchQuery(char)}
                className={`w-9 h-9 rounded-xl border text-base font-bold transition-all flex items-center justify-center ${
                  searchQuery === char
                    ? "bg-primary-600 border-primary-400 text-white scale-110 shadow-md shadow-primary-500/30"
                    : "bg-slate-800/80 border-slate-700 text-slate-200 hover:border-primary-500/60 hover:text-white"
                }`}
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {char}
              </button>
            ))}
          </div>

          {/* Search Result Banner */}
          {searchResult ? (
            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 animate-in fade-in zoom-in-95 duration-200 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl font-black text-emerald-300"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {searchResult.char}
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                    How to Type
                  </div>
                  <div className="text-lg font-black text-white flex items-center gap-2">
                    <span>Press:</span>
                    <kbd className="px-2.5 py-1 rounded-lg bg-primary-600 text-white font-mono text-sm shadow-sm">
                      {searchResult.matchType === "shift"
                        ? `Shift + ${searchResult.keyDetail.englishKey}`
                        : searchResult.keyDetail.englishKey}
                    </kbd>
                  </div>
                  <span className="text-xs text-emerald-400">
                    Category:{" "}
                    {searchResult.matchType === "shift"
                      ? searchResult.keyDetail.shiftCategory
                      : searchResult.keyDetail.normalCategory}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById("interactive-keyboard-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs font-bold text-primary-400 hover:text-primary-300 flex items-center gap-1"
              >
                <span>View On Keyboard</span>
                <span>↓</span>
              </button>
            </div>
          ) : searchQuery ? (
            <p className="text-xs text-rose-400">
              Character not found directly on InScript layout. Complex conjuncts (e.g. क्ष, त्र, ज्ञ)
              are formed by combining letters with Halant (्).
            </p>
          ) : null}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CATEGORY EXPLORER FILTER TABS */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Explore Keyboard Characters by Category</h3>
            <p className="text-xs text-slate-400">
              Filter the interactive keyboard to isolate vowels, consonants, matras, and special keys.
            </p>
          </div>
          {/* Shift Toggle Button */}
          <button
            onClick={() => setShiftToggled((prev) => !prev)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl border-2 text-xs font-black uppercase tracking-wider transition-all shadow-md ${
              isShiftActive
                ? "bg-amber-500 border-amber-400 text-slate-950 shadow-amber-500/25 scale-105"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
            }`}
          >
            <span>⇧</span>
            <span>Shift Mode: {isShiftActive ? "ACTIVE (ON)" : "OFF"}</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat.id
                  ? "bg-primary-600 border-primary-400 text-white shadow-lg shadow-primary-500/20"
                  : "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {activeCategoryInfo && activeCategory !== "all" && (
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
            <span className="text-xl">{activeCategoryInfo.icon}</span>
            <div>
              <strong className="text-white block mb-0.5">{activeCategoryInfo.label}:</strong>
              <span>{activeCategoryInfo.desc}</span>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* MAIN INTERACTIVE VIRTUAL KEYBOARD */}
      {/* ========================================================================= */}
      <section id="interactive-keyboard-section" className="space-y-6 scroll-mt-6">
        <div className="card p-4 sm:p-6 md:p-8 rounded-[2.5rem] border border-slate-800 bg-slate-900/90 shadow-2xl overflow-x-auto">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Press any physical key or click virtual keys to inspect Hindi InScript characters.
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 font-semibold">
              <span className="text-slate-500">Normal: Bottom/Left</span>
              <span className="text-amber-400">Shift: Top/Orange</span>
            </div>
          </div>

          {/* Virtual Keyboard Grid */}
          <div className="min-w-[700px] space-y-2 select-none">
            {keyboardRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-1.5">
                {row.map((key) => {
                  const detail = keyDetailMap.get(key.code);
                  const isPhysActive = physicalActiveKey === key.code;
                  const isSelected = selectedKey?.code === key.code;
                  const isSearchMatch = searchResult?.keyDetail.code === key.code;
                  const inCategory = isKeyInCategory(detail);

                  const physLabel = physicalKeyLabels[key.code] || key.label || "";
                  const normalChar = key.normal;
                  const shiftChar = key.shift;

                  return (
                    <button
                      key={key.code + rowIndex}
                      onClick={() => {
                        if (detail) setSelectedKey(detail);
                      }}
                      className={`relative flex flex-col items-center justify-between p-2 rounded-xl transition-all duration-150 cursor-pointer min-h-[58px] ${
                        key.width ? "flex-shrink-0" : "flex-1 max-w-[58px]"
                      } ${
                        isPhysActive
                          ? "bg-primary-500 text-white ring-4 ring-primary-400/50 scale-105 z-20"
                          : isSearchMatch
                          ? "bg-emerald-600/30 border-2 border-emerald-400 text-white ring-2 ring-emerald-400/50 z-10"
                          : isSelected
                          ? "bg-primary-950 border-2 border-primary-400 text-white ring-2 ring-primary-500/30 z-10 shadow-lg shadow-primary-500/20"
                          : inCategory
                          ? "bg-slate-800/90 border border-slate-700/80 text-slate-100 hover:border-primary-400 hover:bg-slate-750"
                          : "bg-slate-900/40 border border-slate-800/50 text-slate-600 opacity-30 hover:opacity-80"
                      }`}
                      style={key.width ? { width: `${key.width * 3}rem` } : undefined}
                    >
                      {/* Shift character (top) */}
                      <span
                        className={`text-xs font-bold leading-none ${
                          isShiftActive
                            ? "text-amber-300 scale-110 font-black"
                            : "text-amber-500/70"
                        }`}
                        style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                      >
                        {shiftChar !== normalChar ? shiftChar : ""}
                      </span>

                      {/* Normal character (center) */}
                      <span
                        className={`text-lg font-bold leading-none ${
                          !isShiftActive ? "text-white scale-105" : "text-slate-400"
                        }`}
                        style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                      >
                        {normalChar}
                      </span>

                      {/* English Physical Key Label (bottom) */}
                      <span className="text-[9px] font-mono text-slate-400 opacity-80 leading-none">
                        {physLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SELECTED KEY CHARACTER EXPLORER PANEL */}
      {/* ========================================================================= */}
      {selectedKey && (
        <section className="card p-6 md:p-8 rounded-[2.5rem] border border-slate-800 bg-slate-900 shadow-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Key Preview Big Badge */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-3xl bg-slate-950 border-2 border-primary-500/40 flex flex-col items-center justify-center shadow-lg shadow-primary-500/10">
                <span className="text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  {isShiftActive ? selectedKey.shift : selectedKey.normal}
                </span>
                <span className="text-xs font-mono text-slate-400 mt-1">
                  Key: {selectedKey.englishKey}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400 block mb-1">
                  Key Explorer & Inspector
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Key [{selectedKey.englishKey}]
                </h3>
                <p className="text-sm text-slate-400 mt-0.5">
                  {isShiftActive ? selectedKey.shiftName : selectedKey.normalName}
                </p>
              </div>
            </div>

            {/* Quick Practice This Key Button */}
            <div className="flex items-center gap-3">
              <Link
                href="/practice"
                className="btn-primary rounded-xl px-5 py-3 text-xs font-bold shadow-md shadow-primary-500/20 flex items-center gap-2"
              >
                <span>Practice Key [{selectedKey.englishKey}]</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Normal vs Shift Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-800">
            {/* Normal State Card */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Normal Press (Default)
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {selectedKey.normalCategory}
                </span>
              </div>
              <div className="text-4xl font-black text-white mb-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                {selectedKey.normal}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-3">
                {selectedKey.normalName}
              </div>

              {selectedKey.examplesNormal.length > 0 && (
                <div>
                  <span className="text-xs text-slate-400 block mb-1.5 font-medium">
                    Practice Words:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedKey.examplesNormal.map((word) => (
                      <span
                        key={word}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-primary-300 font-semibold"
                        style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Shift State Card */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-amber-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Shift + [{selectedKey.englishKey}]
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedKey.shiftCategory}
                </span>
              </div>
              <div className="text-4xl font-black text-amber-300 mb-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                {selectedKey.shift}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-3">
                {selectedKey.shiftName}
              </div>

              {selectedKey.examplesShift.length > 0 && (
                <div>
                  <span className="text-xs text-slate-400 block mb-1.5 font-medium">
                    Practice Words:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedKey.examplesShift.map((word) => (
                      <span
                        key={word}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 font-semibold"
                        style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
