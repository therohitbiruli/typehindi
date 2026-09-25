import { BackButton } from "../../../../../components/BackButton";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPaperBySlug, getShiftBySlug, getQuestionsForShift } from "../../../../../data/pyqApi";
import { Breadcrumb } from "../../../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../../../components/AdPlaceholder";
import { PYQQuestionCard } from "../../../../../components/pyq/PYQQuestionCard";

interface Props {
  params: Promise<{ slug: string; shiftSlug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug, shiftSlug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) return { title: "Not Found" };
  const shift = getShiftBySlug(paper, shiftSlug);
  if (!shift) return { title: "Not Found" };

  return {
    title: `${paper.examId.toUpperCase()} ${paper.year} ${shift.date} Shift ${shift.shift} Questions & Answers | TypeHindi`,
    description: `View all questions, answers, and explanations for ${paper.title} ${shift.date} Shift ${shift.shift}.`,
  };
}

export default async function PYQQuestionsPage({ params }: Props) {
  const { slug, shiftSlug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) notFound();

  const shift = getShiftBySlug(paper, shiftSlug);
  if (!shift) notFound();

  const questions = getQuestionsForShift(paper.examId, paper.year, shift.date, shift.shift);

  return (
    <div className="container-main py-8 min-h-[70vh]">
      <BackButton />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "PYQs", href: "/pyq" },
          { label: paper.examId.toUpperCase(), href: `/pyq/${paper.slug}` },
          { label: "Questions" },
        ]}
      />

      <header className="mt-8 mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
          {paper.examId.toUpperCase()} {paper.year} Questions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
          {shift.date} • Shift {shift.shift}
        </p>
      </header>

      <AdPlaceholder position="top" />

      {questions.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl mx-auto mt-8">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Questions Being Digitized</h2>
          <p className="text-slate-500 max-w-md mx-auto mb-8">
            The questions for this shift are currently being extracted and verified. Check back soon.
          </p>
          <div className="flex justify-center gap-4">
            {shift.englishPdfUrl && (
              <a href={shift.englishPdfUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-2.5 rounded-xl font-bold border border-slate-200 dark:border-slate-700">View English PDF</a>
            )}
            {shift.hindiPdfUrl && (
              <a href={shift.hindiPdfUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-2.5 rounded-xl font-bold border border-slate-200 dark:border-slate-700">View Hindi PDF</a>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8 mt-8">
          <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="font-bold text-slate-700 dark:text-slate-300">{questions.length} Questions Available</span>
            <Link href={`/pyq/${paper.slug}/${shift.slug}/test`} className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-2 rounded-xl transition-colors">
              Take as Test
            </Link>
          </div>
          
          <div className="space-y-8">
            {questions.map((q, idx) => (
              <PYQQuestionCard key={q.id} question={q} index={idx} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
