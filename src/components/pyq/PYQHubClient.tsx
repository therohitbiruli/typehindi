"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PYQExam, PYQPaper } from "../../data/pyqModels";

interface Props {
  exams: PYQExam[];
  papers: PYQPaper[];
}

export function PYQHubClient({ exams, papers }: Props) {
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Precompute paper counts
  const examPaperCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of papers) {
      counts[p.examId] = (counts[p.examId] || 0) + 1;
    }
    return counts;
  }, [papers]);

  // Distinct available years
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(papers.map(p => p.year)));
    return years.sort((a, b) => parseInt(b) - parseInt(a));
  }, [papers]);

  const yearPaperCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of papers) {
      counts[p.year] = (counts[p.year] || 0) + 1;
    }
    return counts;
  }, [papers]);

  const toggleExam = (id: string) => {
    setSelectedExams(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleYear = (yr: string) => {
    setSelectedYears(prev =>
      prev.includes(yr) ? prev.filter(x => x !== yr) : [...prev, yr]
    );
  };

  const clearAllFilters = () => {
    setSelectedExams([]);
    setSelectedYears([]);
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedExams.length > 0 || selectedYears.length > 0 || searchQuery.trim().length > 0;

  // Filtered exams and their matching papers
  const filteredExams = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return exams
      .filter(exam => {
        // If exams are selected in filter, must match
        if (selectedExams.length > 0 && !selectedExams.includes(exam.id)) {
          return false;
        }
        return true;
      })
      .map(exam => {
        let examPapers = papers
          .filter(p => p.examId === exam.id)
          .sort((a, b) => parseInt(b.year) - parseInt(a.year));

        // Filter by selected years
        if (selectedYears.length > 0) {
          examPapers = examPapers.filter(p => selectedYears.includes(p.year));
        }

        // Filter by search query
        if (query) {
          const examMatches =
            exam.name.toLowerCase().includes(query) ||
            exam.shortDescription.toLowerCase().includes(query) ||
            exam.id.toLowerCase().includes(query);

          if (!examMatches) {
            // Filter papers individually by title, year, tier, or subjects covered
            examPapers = examPapers.filter(p =>
              p.title.toLowerCase().includes(query) ||
              p.year.includes(query) ||
              p.tier.toLowerCase().includes(query) ||
              p.shifts.some(s =>
                s.subjectsCovered.some(sub => sub.toLowerCase().includes(query))
              )
            );
          }
        }

        return {
          exam,
          papers: examPapers
        };
      })
      .filter(item => item.papers.length > 0);
  }, [exams, papers, selectedExams, selectedYears, searchQuery]);

  const totalMatchingPapers = useMemo(() => {
    return filteredExams.reduce((acc, curr) => acc + curr.papers.length, 0);
  }, [filteredExams]);

  return (
    <>
      {/* Search Box */}
      <div className="relative max-w-xl mx-auto mt-8 mb-10">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search exams, subjects, topics or years (e.g. CPO, 2024, Reasoning)..." 
          className="w-full pl-12 pr-10 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 dark:text-white placeholder:text-slate-400 text-sm md:text-base"
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

      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden mb-6 flex justify-between items-center">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="btn-secondary px-4 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
        >
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters {(selectedExams.length + selectedYears.length) > 0 && `(${selectedExams.length + selectedYears.length})`}
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <aside className={`w-full md:w-64 shrink-0 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm sticky top-24 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
            
            {/* Exam Filter */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                Exams
              </h4>
              <div className="space-y-2">
                {exams.map(exam => {
                  const count = examPaperCounts[exam.id] || 0;
                  const hasPapers = count > 0;
                  const isChecked = selectedExams.includes(exam.id);

                  return (
                    <label 
                      key={exam.id} 
                      className={`flex items-center justify-between text-sm p-1.5 rounded-lg transition-colors ${
                        !hasPapers 
                          ? 'opacity-40 cursor-not-allowed' 
                          : isChecked 
                            ? 'bg-primary-50 dark:bg-primary-950/40 text-primary-900 dark:text-primary-200 cursor-pointer font-medium' 
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input 
                          type="checkbox" 
                          checked={isChecked}
                          onChange={() => hasPapers && toggleExam(exam.id)}
                          className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 border-slate-300 dark:border-slate-700 cursor-pointer" 
                          disabled={!hasPapers} 
                        />
                        <span>{exam.name}</span>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Year Filter */}
            {availableYears.length > 0 && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                  Exam Year
                </h4>
                <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {availableYears.map(year => {
                    const count = yearPaperCounts[year] || 0;
                    const isChecked = selectedYears.includes(year);
                    return (
                      <button
                        key={year}
                        type="button"
                        onClick={() => toggleYear(year)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border text-center transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-primary-600 text-white border-primary-600 font-bold shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary-400 dark:hover:border-primary-600'
                        }`}
                      >
                        <span>{year}</span>
                        <span className={`text-[10px] opacity-75`}>({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </aside>

        {/* Exam Cards Area */}
        <div className="flex-grow space-y-6">

          {/* Active Filter Pills Bar */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs text-slate-500 font-medium">Active Filters:</span>

              {selectedExams.map(examId => {
                const exam = exams.find(e => e.id === examId);
                return (
                  <button
                    key={examId}
                    onClick={() => toggleExam(examId)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full hover:bg-primary-200 dark:hover:bg-primary-900/60 transition-colors"
                  >
                    <span>{exam?.name || examId}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                );
              })}

              {selectedYears.map(yr => (
                <button
                  key={yr}
                  onClick={() => toggleYear(yr)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded-full hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-colors"
                >
                  <span>Year: {yr}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ))}

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  <span>&quot;{searchQuery}&quot;</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-red-500 hover:text-red-700 dark:hover:text-red-400 ml-2"
              >
                Clear all
              </button>

              <span className="text-xs text-slate-400 ml-auto">
                Showing {totalMatchingPapers} {totalMatchingPapers === 1 ? 'paper' : 'papers'}
              </span>
            </div>
          )}

          {/* Results List */}
          {filteredExams.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Question Papers Found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                We couldn&apos;t find any papers matching your selected filter criteria. Try clearing some filters or searching with a different term.
              </p>
              <button
                onClick={clearAllFilters}
                className="btn-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredExams.map(({ exam, papers: examPapers }) => {
              const isJeeMain = exam.id === 'jee-main';
              const totalShifts = examPapers.reduce((sum, p) => sum + p.shifts.length, 0);

              return (
              <div 
                key={exam.id} 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {isJeeMain ? "JEE Main Previous Year Question Papers" : exam.name}
                      </h2>
                      {isJeeMain && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                          Engineering
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm mt-1">{exam.shortDescription}</p>
                    {isJeeMain && (
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Sessions:</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">January & April</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Paper 1 (B.E./B.Tech)</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Paper 2 (B.Arch/Plan)</span>
                      </div>
                    )}
                  </div>
                  <div className="text-xs font-semibold bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full border border-primary-100 dark:border-primary-800/30">
                    {isJeeMain ? `${totalShifts} Verified Papers (${examPapers.length} Years)` : `${examPapers.length} ${examPapers.length === 1 ? 'Paper' : 'Papers'} Available`}
                  </div>
                </div>

                {/* Years Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                  {examPapers.map(paper => (
                    <Link 
                      key={paper.slug}
                      href={`/pyq/${paper.slug}`}
                      className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-white dark:hover:bg-slate-800 transition-all group shadow-sm hover:shadow"
                    >
                      <span className="text-2xl font-black text-slate-800 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {paper.year}
                      </span>
                      <span className="text-xs text-slate-500 mt-1">{paper.tier}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <Link 
                    href={isJeeMain ? "/pyq/jee-main-previous-year-question-papers" : `/pyq/${examPapers[0].slug}`}
                    className="btn-primary w-full sm:w-auto text-center px-6 py-2.5 rounded-xl font-bold inline-flex justify-center items-center gap-2"
                  >
                    {isJeeMain ? "Explore All JEE Main Papers" : `Practice ${exam.name} PYQs`}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-slate-400">
                    Latest: {examPapers[0].year} {examPapers[0].tier}
                  </span>
                </div>
              </div>
              );
            })
          )}

        </div>

      </div>
    </>
  );
}
