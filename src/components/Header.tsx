"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

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

  // Smooth scroll handler for homepage navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemHref: string) => {
    if (pathname === "/") {
      if (itemHref === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("/");
        closeMenu();
        return;
      }
      const sectionId = itemHref.replace("/", "").replace("#", "");
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
        setActiveSection(`/${sectionId}`);
        window.history.pushState(null, "", `#${sectionId}`);
        closeMenu();
      }
    } else {
      closeMenu();
    }
  };

  // Scroll Spy logic for Homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      "practice",
      "learn",
      "shorthand",
      "game",
      "test",
      "keyboard-layout",
      "translators",
      "blog",
    ];

    const updateActiveSection = () => {
      // Top of page (Hero section)
      if (window.scrollY < 180) {
        setActiveSection("/");
        return;
      }

      // Bottom of page (Blog / Footer)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("/blog");
        return;
      }

      // Focal reference line positioned 35% down viewport (below sticky header)
      const targetY = window.innerHeight * 0.35;
      let currentSection = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetY) {
            currentSection = id;
          }
        }
      }

      if (currentSection) {
        setActiveSection(`/${currentSection}`);
      }
    };

    // Run on initial mount (e.g. if loaded with hash or scrolled)
    updateActiveSection();

    // IntersectionObserver to observe boundaries
    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        root: null,
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0, 0.1, 0.5],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    /* Header stays dark in both light and dark mode — editorial convention */
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md shadow-lg">
      <div className="container-main">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick(e, "/")}
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
            {navItems.map((item) => {
              const linkHref = pathname === "/" ? (item.href === "/" ? "/" : `#${item.href.replace("/", "")}`) : item.href;
              const isActive = activeSection === item.href || (activeSection === "/" && item.href === "/");

              return (
                <Link
                  key={item.href}
                  href={linkHref}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-primary-600 text-white shadow-sm shadow-primary-500/25"
                      : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
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
            {navItems.map((item) => {
              const linkHref = pathname === "/" ? (item.href === "/" ? "/" : `#${item.href.replace("/", "")}`) : item.href;
              const isActive = activeSection === item.href || (activeSection === "/" && item.href === "/");

              return (
                <Link
                  key={item.href}
                  href={linkHref}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-900/40 text-primary-300 font-semibold"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
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
