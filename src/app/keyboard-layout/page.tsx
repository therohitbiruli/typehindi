"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { InteractiveKeyboardMaster } from "../../components/InteractiveKeyboardMaster";
import { KeyboardQuizWidget } from "../../components/KeyboardQuizWidget";
import { INSCRIPT_KEY_DETAILS } from "../../data/keyboardEncyclopedia";

const CONFUSED_CHAR_GROUPS = [
  {
    pair: "क & ख",
    desc: "Unaspirated vs Aspirated Velar Consonant",
    char1: { char: "क", key: "K", mode: "Normal Press", word: "कमल, कलम, किताब" },
    char2: { char: "ख", key: "Shift + K", mode: "Shift Key", word: "खाना, खेल, खजाना" },
  },
  {
    pair: "त & थ",
    desc: "Dental Consonant Pair",
    char1: { char: "त", key: "L", mode: "Normal Press", word: "तारा, तालाब, तीर" },
    char2: { char: "थ", key: "Shift + L", mode: "Shift Key", word: "थाली, थैला, थोड़ा" },
  },
  {
    pair: "द & ध",
    desc: "Voiced Dental Consonant Pair",
    char1: { char: "द", key: "O", mode: "Normal Press", word: "दीपक, दिन, दरवाजा" },
    char2: { char: "ध", key: "Shift + O", mode: "Shift Key", word: "धन, धनुष, धरती" },
  },
  {
    pair: "ब & भ",
    desc: "Labial Consonant Pair",
    char1: { char: "ब", key: "Y", mode: "Normal Press", word: "बस, बालक, बगीचा" },
    char2: { char: "भ", key: "Shift + Y", mode: "Shift Key", word: "भारत, भवन, भाई" },
  },
  {
    pair: "न & ण",
    desc: "Dental vs Retroflex Nasal",
    char1: { char: "न", key: "V", mode: "Normal Press", word: "नल, नदी, नगर" },
    char2: { char: "ण", key: "Shift + C", mode: "Shift Key", word: "बाण, चरण, प्रणाम" },
  },
  {
    pair: "स, श & ष",
    desc: "Three Sibilants (दन्त्य, तालव्य, मूर्धन्य)",
    char1: { char: "स", key: "M", mode: "Normal (दन्त्य)", word: "सूरज, सपना, सड़क" },
    char2: { char: "श", key: "Shift + M", mode: "Shift (तालव्य)", word: "शिक्षा, शहर, शांति" },
    char3: { char: "ष", key: "Shift + ,", mode: "Shift (मूर्धन्य)", word: "भाषा, धनुष, विशेष" },
  },
];

export default function KeyboardLayoutPage() {
  const [tableSearch, setTableSearch] = useState("");
  const [tableCategory, setTableCategory] = useState<string>("all");

  const filteredKeys = INSCRIPT_KEY_DETAILS.filter((k) => {
    const q = tableSearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      k.englishKey.toLowerCase().includes(q) ||
      k.normal.includes(q) ||
      k.shift.includes(q) ||
      k.normalName.toLowerCase().includes(q) ||
      k.shiftName.toLowerCase().includes(q);

    const matchesCategory =
      tableCategory === "all" ||
      k.normalCategory === tableCategory ||
      k.shiftCategory === tableCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Keyboard Layout" }]} />
      <AdPlaceholder position="top" />

      {/* ========================================================================= */}
      {/* 1. PAGE HERO */}
      {/* ========================================================================= */}
      <section className="text-center mt-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-4">
          ⌨️ Standard InScript Layout
        </div>
        <h1 className="heading-1 mb-4 text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-tight">
          Hindi InScript Keyboard Layout
        </h1>
        <p className="text-muted text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
          Explore the Hindi InScript keyboard, find characters, understand key combinations, and
          practice typing with an interactive keyboard layout.
        </p>

        {/* Compact Visual Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {[
            { label: "Interactive Keyboard", icon: "⌨️" },
            { label: "Hindi Characters", icon: "🔤" },
            { label: "Shift Keys", icon: "⇧" },
            { label: "Matras", icon: "✨" },
            { label: "Practice & Learn", icon: "🚀" },
          ].map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
            >
              <span>{tag.icon}</span>
              <span>{tag.label}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2 - 6. INTERACTIVE KEYBOARD MASTER */}
      {/* Includes Physical Key Tracking, Shift Mode, Finder Tool, Categories, Key Explorer */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <InteractiveKeyboardMaster />
      </section>

      <AdPlaceholder position="bottom" />

      {/* ========================================================================= */}
      {/* 7. IMPORTANT INSCRIPT KEYS (EDUCATIONAL CONCEPTS) */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Core Concepts
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Important Parts of the InScript Keyboard
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Understanding the scientific architecture of InScript makes Hindi typing natural and
            intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Matras Card */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-2xl mb-4">
                ✨
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Matras (मात्राएँ)</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Matras are vowel diacritics attached to consonants. On InScript, vowel matras are
                placed on the left hand (E, R, T, A, S, F, G, Q, W). Always type the consonant first,
                then press the matra key.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-fuchsia-300 font-mono">
              क [K] + ि [F] = कि
            </div>
          </div>

          {/* Halant Card */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-2xl mb-4">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Halant (हलंत - ्)</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                The Halant key (Key <strong>D</strong>) suppresses the inherent 'a' vowel of a
                consonant, creating half-letters and binding letters into conjuncts.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-primary-300 font-mono">
              स [M] + ् [D] + थ [Shift+L] = स्थ
            </div>
          </div>

          {/* Shift Characters Card */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-4">
                ⇧
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Shift Characters</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                InScript logically places aspirated consonants (महाप्राण) on the Shift state of their
                unaspirated counterparts on the same key.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-amber-300 font-mono">
              क [K] ➔ ख [Shift + K]
            </div>
          </div>

          {/* Independent Vowels Card */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-4">
                🗣️
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Independent Vowels</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                When a vowel starts a word or stands alone (e.g. आज, इमली, ऊपर), use the independent
                vowel keys accessed via Shift on the vowel keys.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-emerald-300 font-mono">
              Shift + E = आ (Vowel) vs E = ा (Matra)
            </div>
          </div>

          {/* Conjunct Characters Card */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-4">
                🔗
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conjunct Characters</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Compound characters are created automatically by your operating system when you type
                consonant + halant + consonant.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-cyan-300 font-mono">
              क [K] + ् [D] + ष [Shift+,] = क्ष
            </div>
          </div>

          {/* Nukta Card */}
          <div className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl mb-4">
                🔤
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nukta (नुक़्ता - ़)</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Pressing ']' applies the Nukta dot below letters like ड़ (ड + ]), ढ़ (ढ + ]), फ़ (फ +
                ]), and ज़ (ज + ]).
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-indigo-300 font-mono">
              ड [[] + ़ []] = ड़ (Road / पेड़)
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. COMMONLY CONFUSED CHARACTERS */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Pair Practice
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Commonly Confused Hindi Characters
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            These character pairs look or sound similar. Review their keyboard assignments and practice
            words carefully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFUSED_CHAR_GROUPS.map((group) => (
            <div
              key={group.pair}
              className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {group.pair}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    Pair
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">{group.desc}</p>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-white">{group.char1.char}</span>
                      <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                        {group.char1.key}
                      </kbd>
                    </div>
                    <span className="text-[11px] text-slate-400 block">{group.char1.word}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/20">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-amber-300">{group.char2.char}</span>
                      <kbd className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-mono text-[11px]">
                        {group.char2.key}
                      </kbd>
                    </div>
                    <span className="text-[11px] text-slate-400 block">{group.char2.word}</span>
                  </div>

                  {group.char3 && (
                    <div className="p-3 rounded-xl bg-slate-950 border border-indigo-500/20">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-indigo-300">{group.char3.char}</span>
                        <kbd className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-[11px]">
                          {group.char3.key}
                        </kbd>
                      </div>
                      <span className="text-[11px] text-slate-400 block">{group.char3.word}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
                <Link
                  href="/practice"
                  className="text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Practice Pair →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. KEYBOARD KNOWLEDGE CHALLENGE (INTERACTIVE QUIZ) */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Mini Quiz
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Test Your Keyboard Knowledge
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Take this quick 10-question challenge to verify how well you remember Hindi InScript key
            mappings.
          </p>
        </div>

        <KeyboardQuizWidget />
      </section>

      {/* ========================================================================= */}
      {/* 10. QUICK PRACTICE SECTION */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
            Hands-on Drills
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Practice What You Learned
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Put your keyboard memory to work with targeted typing exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/practice"
            className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-bold text-white mb-2">Beginner Practice</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Master home row keys (ASDF JKL;) and simple 2–3 letter Hindi words without complex
                conjuncts.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <span>Start Beginner Practice</span>
              <span>→</span>
            </span>
          </Link>

          <Link
            href="/game/matra-challenge"
            className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-fuchsia-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-white mb-2">Matra Practice</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Interactive drills for all 12 vowel matras: ा, ि, ी, ु, ू, े, ै, ो, ौ, ं, ँ.
              </p>
            </div>
            <span className="text-xs font-bold text-fuchsia-400 flex items-center gap-1">
              <span>Start Matra Challenge</span>
              <span>→</span>
            </span>
          </Link>

          <Link
            href="/learn"
            className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-primary-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-white mb-2">Consonant Practice</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Structured finger-by-finger exercises covering every consonant from क to ह.
              </p>
            </div>
            <span className="text-xs font-bold text-primary-400 flex items-center gap-1">
              <span>Explore Learn Lessons</span>
              <span>→</span>
            </span>
          </Link>

          <Link
            href="/practice"
            className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-3">⇧</div>
              <h3 className="text-xl font-bold text-white mb-2">Shift Key Practice</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Practice characters requiring the Shift key: ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ, श, ष.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
              <span>Start Shift Practice</span>
              <span>→</span>
            </span>
          </Link>

          <Link
            href="/practice"
            className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">Difficult Character Practice</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Train on complex conjuncts (संयुक्त अक्षर) and half-letters like विद्यालय, दृष्टिकोण,
                संस्कृति.
              </p>
            </div>
            <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
              <span>Practice Difficult Words</span>
              <span>→</span>
            </span>
          </Link>

          <Link
            href="/game"
            className="card p-6 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-rose-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">Typing Game Hub</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Play 6 interactive typing games to test your speed and accuracy under time pressure.
              </p>
            </div>
            <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
              <span>Play Typing Games</span>
              <span>→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FULL KEY REFERENCE TABLE */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Full Key Reference Table
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Complete searchable mapping of all keys on the InScript layout.
            </p>
          </div>

          {/* Search & Category Filter for Table */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={tableSearch}
              onChange={(e) => setTableSearch(e.target.value)}
              placeholder="Search table (key or char)..."
              className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500"
            />
            <select
              value={tableCategory}
              onChange={(e) => setTableCategory(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary-500"
            >
              <option value="all">All Categories</option>
              <option value="consonant">Consonants</option>
              <option value="vowel">Vowels</option>
              <option value="matra">Matras</option>
              <option value="number">Numbers</option>
              <option value="symbol">Symbols</option>
              <option value="special">Special</option>
            </select>
          </div>
        </div>

        <div className="card overflow-x-auto p-0 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-950/80 text-xs text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-bold">English Key</th>
                <th className="px-6 py-4 font-bold">Normal Char</th>
                <th className="px-6 py-4 font-bold">Normal Name</th>
                <th className="px-6 py-4 font-bold">Shift Char</th>
                <th className="px-6 py-4 font-bold">Shift Name</th>
                <th className="px-6 py-4 font-bold">Category</th>
                <th className="px-6 py-4 font-bold">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredKeys.map((k) => (
                <tr
                  key={k.code}
                  className="hover:bg-slate-800/40 transition-colors"
                >
                  <td className="px-6 py-3 font-mono font-bold text-primary-400">
                    {k.englishKey}
                  </td>
                  <td
                    className="px-6 py-3 text-xl font-bold text-white"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {k.normal}
                  </td>
                  <td className="px-6 py-3 text-xs text-slate-300">{k.normalName}</td>
                  <td
                    className="px-6 py-3 text-xl font-bold text-amber-300"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {k.shift}
                  </td>
                  <td className="px-6 py-3 text-xs text-slate-300">{k.shiftName}</td>
                  <td className="px-6 py-3 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {k.normalCategory}
                    </span>
                  </td>
                  <td
                    className="px-6 py-3 text-xs text-slate-400"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    {k.examplesNormal[0] || k.examplesShift[0] || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="mb-12">
        <div className="card p-10 md:p-14 rounded-[3rem] border border-primary-500/30 bg-gradient-to-br from-primary-950/40 via-slate-900 to-slate-900 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3 block">
              Ready to Type?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Now You Know the Keyboard. Start Typing.
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
              Put your keyboard knowledge into practice and improve your Hindi typing speed and
              accuracy through structured lessons and speed tests.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/practice"
                className="btn-primary rounded-2xl px-8 py-4 text-base font-bold shadow-xl shadow-primary-500/30 flex items-center gap-2"
              >
                <span>Start Typing Practice</span>
                <span>→</span>
              </Link>
              <Link
                href="/learn"
                className="btn-secondary rounded-2xl px-7 py-4 text-base font-semibold border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 transition-all"
              >
                Learn Hindi Step by Step →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
