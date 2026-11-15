"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/practice", label: "Practice" },
  { href: "/learn", label: "Learn" },
  { href: "/shorthand", label: "Shorthand" },
  { href: "/game", label: "Game" },
  { href: "/test", label: "Test" },
  { href: "/keyboard-layout", label: "Keyboard Layout" },
  { href: "/translators", label: "Translators" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Strip any existing hash from the URL so "#practice" or similar never lingers
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B8C7DA] bg-white/95 backdrop-blur-md shadow-sm transition-colors duration-200 dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-lg">
      <div className="container-main">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            {pathname !== "/" && (
              <button
                onClick={() => router.back()}
                className="mr-2 sm:mr-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#B8C7DA] bg-[#F4F7FC] text-[#17243A] hover:bg-[#EAF1FB] hover:text-[#102B5C] hover:border-[#8FA6C5] transition-all shadow-sm dark:border-transparent dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
                aria-label="Go back"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
            )}
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={closeMenu}
            >
              <Image 
                src="/logo.png" 
                alt="TypeHindi Logo" 
                width={200} 
                height={60} 
                className="h-12 w-auto object-contain transition-all hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <nav className="flex items-center gap-1.5">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : item.href === "/translators"
                    ? pathname.startsWith("/translators") || pathname.startsWith("/english-to-")
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                if (item.href === "/translators") {
                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                          isActive
                            ? "bg-[#102B5C] text-white shadow-sm shadow-[#102B5C]/25 dark:bg-primary-600 dark:text-white dark:shadow-primary-500/25"
                            : "text-[#17243A] hover:bg-[#F4F7FC] hover:text-[#102B5C] dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>

                      <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-[#CBD5E1] dark:border-slate-800 shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                        <Link
                          href="/translators"
                          className="block px-4 py-2 text-xs font-semibold text-[#17243A] hover:bg-[#F4F7FC] hover:text-[#102B5C] dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          All Translators Hub
                        </Link>
                        <Link
                          href="/english-to-indian-language-typing"
                          className="block px-4 py-2 text-xs font-semibold text-[#102B5C] dark:text-primary-300 hover:bg-[#EAF1FB] dark:hover:bg-slate-800"
                        >
                          🇮🇳 English to Indian Languages
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-[#102B5C] text-white shadow-sm shadow-[#102B5C]/25 dark:bg-primary-600 dark:text-white dark:shadow-primary-500/25"
                        : "text-[#17243A] hover:bg-[#F4F7FC] hover:text-[#102B5C] dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-l border-[#E2E8F0] pl-3 dark:border-slate-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Actions (ThemeToggle + Menu Button) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-[#17243A] hover:bg-[#F4F7FC] hover:text-[#102B5C] transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              aria-label="Toggle menu"
              id="mobile-menu-button"
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="border-t border-[#E2E8F0] pb-3 pt-2 md:hidden dark:border-slate-800 space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.href === "/translators") {
                const isSubActive = pathname === "/english-to-indian-language-typing" || pathname.startsWith("/english-to-");
                return (
                  <div key={item.href} className="space-y-1">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive && !isSubActive
                          ? "bg-[#EAF1FB] text-[#102B5C] font-semibold dark:bg-primary-900/40 dark:text-primary-300"
                          : "text-[#17243A] hover:bg-[#F4F7FC] hover:text-[#102B5C] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <Link
                      href="/english-to-indian-language-typing"
                      onClick={closeMenu}
                      className={`block rounded-lg pl-6 pr-3 py-1.5 text-xs font-medium transition-colors ${
                        isSubActive
                          ? "bg-[#EAF1FB] text-[#102B5C] font-semibold dark:bg-primary-900/40 dark:text-primary-300"
                          : "text-[#475569] hover:bg-[#F4F7FC] hover:text-[#102B5C] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                      }`}
                    >
                      ↳ 🇮🇳 English to Indian Languages
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#EAF1FB] text-[#102B5C] font-semibold dark:bg-primary-900/40 dark:text-primary-300"
                      : "text-[#17243A] hover:bg-[#F4F7FC] hover:text-[#102B5C] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
