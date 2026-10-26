"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PYQPaper } from "../../data/pyqModels";
import { JEEPaperShift } from "../../data/jeeMainPyqs";

interface Props {
  papers: PYQPaper[];
  allShifts: JEEPaperShift[];
}

export function JEEMainHubClient({ papers, allShifts }: Props) {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedSession, setSelectedSession] = useState<string>("all");
  const [selectedShift, setSelectedShift] = useState<string>("all");
  const [selectedPaperType, setSelectedPaperType] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grouped" | "grid">("grouped");

  // Available unique years in descending order
  const availableYears = useMemo(() => {
    return Array.from(new Set(allShifts.map((s) => s.year))).sort(
      (a, b) => parseInt(b, 10) - parseInt(a, 10)
    );
  }, [allShifts]);

  // Available sessions
  const availableSessions = useMemo(() => {
    return Array.from(new Set(allShifts.map((s) => s.session))).sort();
  }, [allShifts]);

  // Filtered shifts
  const filteredShifts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allShifts.filter((shift) => {
      // Year filter
      if (selectedYear !== "all" && shift.year !== selectedYear) return false;

      // Session filter
      if (selectedSession !== "all" && shift.session !== selectedSession) return false;

      // Shift filter
      if (selectedShift !== "all" && String(shift.shift) !== selectedShift) return false;

      // Paper type filter
      if (selectedPaperType !== "all" && shift.paperType !== selectedPaperType) return false;

      // Language filter
      if (selectedLanguage === "en" && !shift.englishPdfUrl) return false;
      if (selectedLanguage === "hi" && !shift.hindiPdfUrl) return false;

      // Search query filter
      if (query) {
        const matchesTitle = shift.title.toLowerCase().includes(query);
        const matchesDate = shift.date.toLowerCase().includes(query);
        const matchesYear = shift.year.includes(query);
        const matchesSession = shift.session.toLowerCase().includes(query);
        const matchesShiftName = shift.shiftName.toLowerCase().includes(query);
        const matchesPaperType = shift.paperType.toLowerCase().includes(query);

        if (
          !matchesTitle &&
          !matchesDate &&
          !matchesYear &&
          !matchesSession &&
          !matchesShiftName &&
          !matchesPaperType
        ) {
          return false;
        }
      }

      return true;
    });
  }, [
    allShifts,
    selectedYear,
    selectedSession,
    selectedShift,
    selectedPaperType,
    selectedLanguage,
    searchQuery,
  ]);

  // Group filtered shifts by year
  const groupedByYear = useMemo(() => {
    const groups: Record<string, JEEPaperShift[]> = {};
    for (const shift of filteredShifts) {
      if (!groups[shift.year]) groups[shift.year] = [];
      groups[shift.year].push(shift);
    }
    return Object.entries(groups).sort(
      ([a], [b]) => parseInt(b, 10) - parseInt(a, 10)
    );
  }, [filteredShifts]);

  const clearAllFilters = () => {
    setSelectedYear("all");
    setSelectedSession("all");
    setSelectedShift("all");
    setSelectedPaperType("all");
    setSelectedLanguage("all");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedYear !== "all" ||
    selectedSession !== "all" ||
    selectedShift !== "all" ||
    selectedPaperType !== "all" ||
    selectedLanguage !== "all" ||
    searchQuery.trim().length > 0;

  return (
    <div className="space-y-8">
      {/* Search and Filter Panel */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers by date (e.g. 8 April, 28 Jan), shift, or year..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm md:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-3 flex items-center pr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Quick Year Selection Carousel / Pills */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick Select Year</span>
            <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold">25 Years Available (2002–2026)</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedYear === "all"
                  ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All Years ({allShifts.length})
            </button>
            {availableYears.map((yr) => {
              const count = allShifts.filter((s) => s.year === yr).length;
              return (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
                    selectedYear === yr
                      ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <span>{yr}</span>
                  <span className="text-[10px] opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dropdown Filters Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
          {/* Session */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">Session</label>
            <select
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="all">All Sessions</option>
              {availableSessions.map((sess) => (
                <option key={sess} value={sess}>{sess}</option>
              ))}
            </select>
          </div>

          {/* Shift */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">Shift</label>
            <select
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="all">All Shifts</option>
              <option value="1">Shift 1 (Morning)</option>
              <option value="2">Shift 2 (Evening)</option>
            </select>
          </div>

          {/* Paper Type */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">Paper Type</label>
            <select
              value={selectedPaperType}
              onChange={(e) => setSelectedPaperType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="all">All Paper Types</option>
              <option value="Paper 1 (B.E./B.Tech)">Paper 1 (B.E./B.Tech)</option>
              <option value="Paper 2 (B.Arch/B.Planning)">Paper 2 (B.Arch/Plan)</option>
            </select>
          </div>

          {/* Language / PDFs */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">PDF Language</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="all">All Languages</option>
              <option value="en">English PDF</option>
              <option value="hi">Hindi PDF</option>
            </select>
          </div>
        </div>

        {/* Active Filters & View Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredShifts.length}</strong> of {allShifts.length} verified papers
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-red-500 hover:text-red-700 dark:hover:text-red-400 ml-2"
              >
                Reset Filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">View:</span>
            <button
              onClick={() => setViewMode("grouped")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "grouped"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              By Year
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === "grid"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              All Grid
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {filteredShifts.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Question Papers Found</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any JEE Main question papers matching your selected criteria. Try resetting your search or filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="btn-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-md"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === "grouped" ? (
        /* Grouped by Year View */
        <div className="space-y-10">
          {groupedByYear.map(([year, yearShifts]) => {
            const yearPaper = papers.find((p) => p.year === year);
            const yearSlug = yearPaper ? yearPaper.slug : `jee-main-previous-year-question-paper-${year}`;

            return (
              <section key={year} className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                      JEE Main {year}
                    </h2>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/50">
                      {yearShifts.length} {yearShifts.length === 1 ? "Paper" : "Papers"}
                    </span>
                  </div>

                  <Link
                    href={`/pyq/${yearSlug}`}
                    className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                  >
                    View All {year} Shifts & Subject Guide
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {yearShifts.map((shift) => (
                    <PaperCard key={shift.slug} shift={shift} yearSlug={yearSlug} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Flat Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredShifts.map((shift) => {
            const yearPaper = papers.find((p) => p.year === shift.year);
            const yearSlug = yearPaper ? yearPaper.slug : `jee-main-previous-year-question-paper-${shift.year}`;
            return <PaperCard key={shift.slug} shift={shift} yearSlug={yearSlug} />;
          })}
        </div>
      )}
    </div>
  );
}

interface PaperCardProps {
  shift: JEEPaperShift;
  yearSlug: string;
}

function PaperCard({ shift, yearSlug }: PaperCardProps) {
  // Check if this shift has digitized questions (currently shift 2 of 8 Apr 2026)
  const isDigitized = shift.slug === "jee-main-2026-online-8th-april-evening-shift";

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {shift.year}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
            {shift.session}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300">
            {shift.shiftName}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800/60 text-slate-500">
            {shift.paperType}
          </span>
        </div>

        {/* Paper Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
          {shift.title}
        </h3>

        {/* Date and Exam Specs */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {shift.date}
          </span>
          <span>•</span>
          <span>{shift.totalQuestions} Questions</span>
          <span>•</span>
          <span>{shift.durationMinutes} Mins (3 Hrs)</span>
        </div>

        {/* Subjects Covered */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {shift.subjectsCovered.map((sub, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {sub}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
        <div className="flex flex-wrap items-center gap-2">
          {isDigitized ? (
            <>
              <Link
                href={`/pyq/${yearSlug}/${shift.slug}/test`}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Attempt Mock Test
              </Link>
              <Link
                href={`/pyq/${yearSlug}/${shift.slug}/questions`}
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs px-3 py-2 rounded-xl transition-colors"
              >
                View Questions
              </Link>
            </>
          ) : (
            <Link
              href={`/pyq/${yearSlug}/${shift.slug}/questions`}
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs px-3.5 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Shift Details
            </Link>
          )}

          {/* Solutions Link to Examside */}
          <a
            href={shift.solutionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 ml-auto"
          >
            View Solutions
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* PDF Download Links */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
          <span className="text-[11px] font-semibold text-slate-400">Download Paper:</span>
          {shift.englishPdfUrl && (
            <a
              href={shift.englishPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
            >
              <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              English PDF
            </a>
          )}
          {shift.hindiPdfUrl && (
            <a
              href={shift.hindiPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
            >
              <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Hindi PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
