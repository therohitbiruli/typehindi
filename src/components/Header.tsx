"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(pathname);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Update activeSection when pathname changes (subpage navigation)
  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  // Scroll Spy logic for Homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["practice", "learn", "game", "test", "keyboard-layout", "translators", "blog"];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the first intersecting entry
      const visibleSection = entries.find(entry => entry.isIntersecting);
      if (visibleSection) {
        setActiveSection(`/${visibleSection.target.id}`);
      } else {
        // If we scrolled back to top
        if (window.scrollY < 200) {
          setActiveSection("/");
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section dominates the viewport center
      threshold: 0,
    });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("/");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md shadow-lg">
      <div className="container-main">
        <div className="flex h-14 items-center justify-between">
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeSection === item.href
                    ? "bg-primary-600 text-white shadow-sm shadow-primary-500/25"
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
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
          <nav className="border-t border-slate-800 pb-3 pt-2 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href
                    ? "bg-primary-900/40 text-primary-300 font-semibold"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
