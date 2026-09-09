"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Keyboard } from "./Keyboard";
import { physicalKeyLabels } from "../data/keyboard-layout";
import { ALL_LANGUAGES, LanguageConfig } from "../data/languages";

export function LanguageKeyboardClient({
  langConfig,
}: {
  langConfig: LanguageConfig;
}) {
  const [activeShift, setActiveShift] = useState(false);
  const [activeKey, setActiveKey] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Flattened key list for searchable character table
  const allKeys = useMemo(() => {
    const list: Array<{
      code: string;
      label: string;
      normal: string;
      shift: string;
    }> = [];
    langConfig.keyboardRows.forEach((row) => {
      row.forEach((k) => {
        if (k.code !== "Space") {
          list.push({
            code: k.code,
            label: physicalKeyLabels[k.code] || k.label || k.code,
            normal: k.normal,
            shift: k.shift,
          });
        }
      });
    });
    return list;
  }, [langConfig]);

  const filteredKeys = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return allKeys;
    return allKeys.filter(
      (k) =>
        k.label.toLowerCase().includes(q) ||
        k.normal.includes(q) ||
        k.shift.includes(q) ||
        k.code.toLowerCase().includes(q)
    );
  }, [allKeys, searchTerm]);

  return (
    <div>
      {/* Language Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {ALL_LANGUAGES.map((l) => (
          <Link
            key={l.id}
            href={`/keyboard-layout/${l.keyboardSlug}`}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              l.id === langConfig.id
                ? "bg-primary-600 text-white shadow-sm"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            <span>{l.symbol}</span>
            <span>{l.name}</span>
          </Link>
        ))}
      </div>

      {/* Interactive Keyboard Canvas Card */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-primary-500/5 mb-10">
        {/* Keyboard Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="font-bold text-sm text-gray-900 dark:text-white">
              Virtual {langConfig.name} Keyboard
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Click the Shift button below or use your physical keyboard to toggle character states
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveShift(!activeShift)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border shadow-sm ${
                activeShift
                  ? "bg-primary-600 text-white border-primary-500"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700"
              }`}
            >
              <span>⇧</span>
              <span>Shift Key: {activeShift ? "ON" : "OFF"}</span>
            </button>
            <Link
              href={`/practice/${langConfig.slug}`}
              className="btn-primary px-5 py-2 rounded-xl text-xs font-bold shadow-md"
            >
              Practice {langConfig.name} →
            </Link>
          </div>
        </div>

        {/* Virtual Keyboard */}
        <div className="overflow-x-auto pb-2">
          <Keyboard
            activeKey={activeKey}
            isShift={activeShift}
            visible={true}
            language={langConfig.id}
          />
        </div>
      </div>

      {/* Principles of the Layout */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span>🧠</span> How the {langConfig.layoutName} Works
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-xs uppercase text-primary-500 tracking-wider mb-1.5">
              1. Phonetic Symmetry
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Vowels and matras are placed on the left hand, while consonants are organized logically on the right hand.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-xs uppercase text-primary-500 tracking-wider mb-1.5">
              2. Shift Key Pairs
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Unaspirated consonants (e.g. क, त, प) are typed unshifted. Pressing Shift on the same key produces the aspirated form (ख, थ, फ).
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-xs uppercase text-primary-500 tracking-wider mb-1.5">
              3. Halant / Virama
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Pressing the D key inserts a Virama / Halant, removing the inherent vowel to create conjuncts and half-characters.
            </p>
          </div>
        </div>
      </section>

      {/* Searchable Key-by-Key Character Table */}
      <section className="mb-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span>📋</span> Complete {langConfig.name} Key Mapping Table
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Lookup which physical QWERTY key types each {langConfig.name} character
            </p>
          </div>
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search key or letter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto max-h-96 overflow-y-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="sticky top-0 bg-slate-100 dark:bg-slate-800">
              <tr className="border-b border-slate-200 dark:border-slate-700 text-gray-500 dark:text-gray-400">
                <th className="py-2.5 px-4 font-bold uppercase">Physical Key</th>
                <th className="py-2.5 px-4 font-bold uppercase">Normal Press</th>
                <th className="py-2.5 px-4 font-bold uppercase">Shift + Press</th>
                <th className="py-2.5 px-4 font-bold uppercase">Key Code</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-gray-800 dark:text-gray-200">
              {filteredKeys.map((k) => (
                <tr key={k.code} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-primary-500">
                    {k.label}
                  </td>
                  <td className="py-3 px-4 font-bold text-base text-gray-900 dark:text-white">
                    {k.normal || "—"}
                  </td>
                  <td className="py-3 px-4 font-bold text-base text-amber-600 dark:text-amber-400">
                    {k.shift || "—"}
                  </td>
                  <td className="py-3 px-4 font-mono text-[11px] text-gray-400 dark:text-gray-500">
                    {k.code}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Action Footer */}
      <div className="flex flex-wrap justify-center gap-4 py-6 border-t border-slate-200 dark:border-slate-800">
        <Link
          href={`/practice/${langConfig.slug}`}
          className="btn-primary px-8 py-3 rounded-xl font-bold text-sm shadow-md"
        >
          Practice {langConfig.name} Typing Now →
        </Link>
        <Link
          href={`/test/${langConfig.slug}`}
          className="btn-secondary px-8 py-3 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700"
        >
          Take 10-Minute {langConfig.name} Test
        </Link>
        <Link
          href={`/learn/${langConfig.slug}`}
          className="btn-secondary px-8 py-3 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700"
        >
          Read Learning Guide
        </Link>
      </div>
    </div>
  );
}
