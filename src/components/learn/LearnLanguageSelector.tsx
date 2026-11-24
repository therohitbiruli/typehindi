"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ALL_LANGUAGES, LanguageConfig } from "../../data/languages";

interface LearnLanguageSelectorProps {
  currentLang: LanguageConfig;
}

export function LearnLanguageSelector({ currentLang }: LearnLanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-[#B8C7DA] dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-lg">🌐</span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-slate-300 font-medium">
          Choose Learning Language:
        </span>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div ref={dropdownRef} className="relative flex-1 sm:flex-initial">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full sm:w-auto flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-[#B8C7DA] dark:border-slate-700 hover:border-[#8FA6C5] dark:hover:border-slate-600 shadow-xs text-xs font-bold text-gray-800 dark:text-gray-100 transition-all min-w-[220px] sm:min-w-[260px] cursor-pointer"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                {currentLang.symbol}
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                {currentLang.name}
              </span>
              <span className="text-[11px] font-normal text-gray-500 dark:text-gray-400">
                ({currentLang.nativeName})
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full mt-1.5 z-40 w-full sm:w-72 bg-white dark:bg-slate-900 border border-[#B8C7DA] dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden py-1.5 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500 tracking-wider border-b border-gray-100 dark:border-slate-800">
                All Languages ({ALL_LANGUAGES.length})
              </div>
              <div className="max-h-72 overflow-y-auto py-1">
                {ALL_LANGUAGES.map((lang) => {
                  const isActive = lang.id === currentLang.id;
                  return (
                    <Link
                      key={lang.id}
                      href={`/learn/${lang.slug}`}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                        isActive
                          ? "bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 font-bold"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isActive
                              ? "bg-primary-600 text-white"
                              : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700"
                          }`}
                        >
                          {lang.symbol}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-900 dark:text-white font-semibold">
                          {lang.name}
                        </span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400">
                          ({lang.nativeName})
                        </span>
                      </div>
                      {isActive && (
                        <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                          ✓
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <Link
          href={`/practice/${currentLang.slug}`}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 text-xs font-bold hover:bg-primary-100 dark:hover:bg-primary-950/80 transition-colors border border-primary-200 dark:border-primary-900/50"
        >
          <span>Practice {currentLang.name} →</span>
        </Link>
      </div>
    </div>
  );
}
