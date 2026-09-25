import { BackButton } from "../../../../../components/BackButton";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPaperBySlug, getQuestionsBySubject, getUniqueSubjectsForPaper } from "../../../../../data/pyqApi";
import { Breadcrumb } from "../../../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../../../components/AdPlaceholder";
import { PYQQuestionCard } from "../../../../../components/pyq/PYQQuestionCard";

interface Props {
  params: Promise<{ slug: string; subjectSlug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug, subjectSlug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) return { title: "Not Found" };
  
  // Parse subjectSlug to handle "english-2", "math-3" etc.
  const match = subjectSlug.match(/^([a-z0-9-]+?)(?:-(\d+))?$/);
  if (!match) return { title: "Not Found" };
  
  const baseSubjectSlug = match[1];
  const pageNum = match[2] ? parseInt(match[2], 10) : 1;
  
  const subjects = getUniqueSubjectsForPaper(paper);
  const subjectName = subjects.find(s => s.toLowerCase().replace(/ /g, '-') === baseSubjectSlug);
  if (!subjectName) return { title: "Not Found" };

  return {
    title: `${subjectName} Questions (Part ${pageNum}) for ${paper.title} | TypeHindi`,
    description: `Practice all ${subjectName} questions from ${paper.year} ${paper.examId.toUpperCase()} exams online. Page ${pageNum}.`,
  };
}

export default async function PYQSubjectPage({ params }: Props) {
  const { slug, subjectSlug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) notFound();

  // Parse subjectSlug to handle "english-2", "math-3" etc.
  const match = subjectSlug.match(/^([a-z0-9-]+?)(?:-(\d+))?$/);
  if (!match) notFound();
  
  const baseSubjectSlug = match[1];
  const currentPage = match[2] ? parseInt(match[2], 10) : 1;
  const itemsPerPage = 25;

  const subjects = getUniqueSubjectsForPaper(paper);
  const subjectName = subjects.find(s => s.toLowerCase().replace(/ /g, '-') === baseSubjectSlug);
  if (!subjectName) notFound();

  const allQuestions = getQuestionsBySubject(paper.examId, paper.year, subjectName);
  const totalPages = Math.max(1, Math.ceil(allQuestions.length / itemsPerPage));
  
  if (currentPage > totalPages && allQuestions.length > 0) {
    notFound();
  }

  // Pagination slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const questions = allQuestions.slice(startIndex, endIndex);

  return (
    <div className="container-main py-8 min-h-[70vh]">
      <BackButton />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "PYQs", href: "/pyq" },
          { label: paper.examId.toUpperCase(), href: `/pyq/${paper.slug}` },
          { label: `${subjectName}${currentPage > 1 ? ` (Part ${currentPage})` : ''}` },
        ]}
      />

      <header className="mt-8 mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
          {paper.examId.toUpperCase()} {paper.year} <span className="text-emerald-600 dark:text-emerald-400">{subjectName}</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
          Practice subject-wise previous year questions
        </p>
      </header>

      <AdPlaceholder position="top" />

      {allQuestions.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl mx-auto mt-8">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Questions Being Digitized</h2>
          <p className="text-slate-500 max-w-md mx-auto mb-8">
            The {subjectName} questions are currently being extracted and verified. Check back soon.
          </p>
          <Link href={`/pyq/${paper.slug}`} className="btn-primary px-6 py-2.5 rounded-xl font-bold border border-slate-200 dark:border-slate-700">Go Back to Exam</Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8 mt-8">
          <div className="space-y-8">
            {questions.map((q, idx) => (
              <PYQQuestionCard key={q.id} question={q} index={startIndex + idx} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              {currentPage > 1 && (
                <Link href={`/pyq/${paper.slug}/subject/${baseSubjectSlug}${currentPage - 1 > 1 ? `-${currentPage - 1}` : ''}`} className="px-4 py-2 rounded-xl font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  Previous
                </Link>
              )}
              
              <div className="flex gap-1 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Link 
                    key={page} 
                    href={`/pyq/${paper.slug}/subject/${baseSubjectSlug}${page > 1 ? `-${page}` : ''}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-colors ${page === currentPage ? 'bg-primary-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages && (
                <Link href={`/pyq/${paper.slug}/subject/${baseSubjectSlug}-${currentPage + 1}`} className="px-4 py-2 rounded-xl font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
