"use client";

import { useState } from "react";
import { INSCRIPT_KEY_DETAILS } from "../data/keyboardEncyclopedia";

export function InscriptKeyTable() {
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
    <section className="mb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Full Key Reference Table
          </h2>
          <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
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
            className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 dark:text-slate-500 focus:outline-none focus:border-primary-500"
          />
          <select
            value={tableCategory}
            onChange={(e) => setTableCategory(e.target.value)}
            className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-primary-500"
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

      <div className="card overflow-x-auto p-0 rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
        <table className="w-full text-sm text-left">
          <thead className="bg-white dark:bg-slate-950/80 text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wider border-b border-gray-200 dark:border-slate-800">
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
                className="hover:bg-gray-100 dark:hover:bg-gray-100 dark:bg-slate-800/40 transition-colors"
              >
                <td className="px-6 py-3 font-mono font-bold text-primary-400">
                  {k.englishKey}
                </td>
                <td
                  className="px-6 py-3 text-xl font-bold text-gray-900 dark:text-white"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {k.normal}
                </td>
                <td className="px-6 py-3 text-xs text-gray-600 dark:text-slate-300">{k.normalName}</td>
                <td
                  className="px-6 py-3 text-xl font-bold text-amber-300"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {k.shift}
                </td>
                <td className="px-6 py-3 text-xs text-gray-600 dark:text-slate-300">{k.shiftName}</td>
                <td className="px-6 py-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-gray-300 dark:border-slate-700">
                    {k.normalCategory}
                  </span>
                </td>
                <td
                  className="px-6 py-3 text-xs text-gray-500 dark:text-slate-400"
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
  );
}
