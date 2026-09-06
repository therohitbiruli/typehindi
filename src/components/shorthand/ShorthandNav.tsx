"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/shorthand", label: "Overview" },
  { href: "/shorthand/learn", label: "Curriculum" },
  { href: "/shorthand/practice", label: "Canvas Practice" },
  { href: "/shorthand/dictation", label: "Audio Dictation" },
  { href: "/shorthand/tests", label: "Exam Simulator" },
  { href: "/shorthand/quiz", label: "Quiz" },
  { href: "/shorthand/progress", label: "My Progress" },
  { href: "/shorthand/guides", label: "Guides & Notebook" },
];

export function ShorthandNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[57px] z-30 border-b border-slate-800/80 bg-[#0B1120]/95 backdrop-blur-md">
      <div className="container-main">
        <div className="flex items-center justify-between gap-4 overflow-x-auto py-2.5 no-scrollbar">
          {/* Section Breadcrumb/Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300">
              <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              PITMAN SHORTHAND
            </span>
          </div>

          {/* Sub Navigation Links */}
          <nav className="flex items-center gap-1 shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/shorthand" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? "bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
