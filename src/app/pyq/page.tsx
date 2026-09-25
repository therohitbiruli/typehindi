import Link from "next/link";
import { getAllExams, getAllPapers } from "../../data/pyqApi";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata = {
  title: "Previous Year Question Papers (PYQs) Online Practice | TypeHindi",
  description: "Practice previous year exam questions online with answers, explanations, subject-wise practice and performance analysis.",
};

export default function PyqHubPage() {
  const exams = getAllExams();
  const papers = getAllPapers();

  return (
    <div className="container-main py-8 min-h-[70vh]">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "PYQs" },
        ]}
      />
      
      {/* Hero Section */}
      <div className="mt-10 mb-12 text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Previous Year Question Papers
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Practice previous year exam questions online with answers, explanations, subject-wise practice and performance analysis.
        </p>

        {/* Search Box - Visual Only for now */}
        <div className="relative max-w-xl mx-auto mt-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input 
            type="text" 
            placeholder="Search exams, subjects, topics or questions..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Filters</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Exams</h4>
                <div className="space-y-2">
                  {exams.map(exam => {
                    const hasPapers = papers.some(p => p.examId === exam.id);
                    return (
                      <label key={exam.id} className={`flex items-center gap-2 text-sm ${!hasPapers ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                        <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" disabled={!hasPapers} />
                        <span className="text-slate-700 dark:text-slate-300">{exam.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              
            </div>
          </div>
        </aside>

        {/* Exam Cards */}
        <div className="flex-grow space-y-6">
          {exams.map(exam => {
            const examPapers = papers
            .filter(p => p.examId === exam.id)
            .sort((a, b) => parseInt(b.year) - parseInt(a.year));
            if (examPapers.length === 0) return null;

            return (
              <div key={exam.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{exam.name}</h2>
                    <p className="text-slate-500 text-sm mt-1">{exam.shortDescription}</p>
                  </div>
                  <div className="text-xs font-semibold bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full border border-primary-100 dark:border-primary-800/30">
                    {examPapers.length} Papers Available
                  </div>
                </div>

                {/* Years Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                  {examPapers.map(paper => (
                    <Link 
                      key={paper.slug}
                      href={`/pyq/${paper.slug}`}
                      className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-white dark:hover:bg-slate-800 transition-all group"
                    >
                      <span className="text-2xl font-black text-slate-800 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">{paper.year}</span>
                      <span className="text-xs text-slate-500 mt-1">{paper.tier}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link 
                    href={`/pyq/${examPapers[0].slug}`}
                    className="btn-primary w-full sm:w-auto text-center px-6 py-2.5 rounded-xl font-bold inline-flex justify-center items-center gap-2"
                  >
                    Practice {exam.name} PYQs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
