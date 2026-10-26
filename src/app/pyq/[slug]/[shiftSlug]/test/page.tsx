import { BackButton } from "../../../../../components/BackButton";
import { notFound } from "next/navigation";
import { getPaperBySlug, getShiftBySlug, getQuestionsForShift } from "../../../../../data/pyqApi";
import { PYQTestEngine } from "../../../../../components/pyq/PYQTestEngine";
import { Breadcrumb } from "../../../../../components/Breadcrumb";

interface Props {
  params: Promise<{ slug: string; shiftSlug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props) {
  const { slug, shiftSlug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) return { title: "Not Found" };
  const shift = getShiftBySlug(paper, shiftSlug);
  if (!shift) return { title: "Not Found" };

  const examLabel = paper.examId === 'jee-main' ? 'JEE Main' : paper.examId.toUpperCase();
  return {
    title: `${examLabel} ${paper.year} ${shift.date} Shift ${shift.shift} Test | TypeHindi`,
    description: `Take the official ${paper.title} online test for ${shift.date} Shift ${shift.shift}.`,
  };
}

export default async function PYQTestPage({ params }: Props) {
  const { slug, shiftSlug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) notFound();

  const shift = getShiftBySlug(paper, shiftSlug);
  if (!shift) notFound();

  const questions = getQuestionsForShift(paper.examId, paper.year, shift.date, shift.shift);
  const examLabel = paper.examId === 'jee-main' ? 'JEE Main' : paper.examId.toUpperCase();

  // Shuffle the questions dynamically on every load
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

  return (
    <div className="container-main py-4 min-h-screen flex flex-col">
      <div className="mb-4">
        <BackButton />
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "PYQs", href: "/pyq" },
            { label: examLabel, href: `/pyq/${paper.slug}` },
            { label: "Test" },
          ]}
        />
      </div>
      
      {questions.length === 0 ? (
        <div className="max-w-2xl mx-auto my-auto text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm mt-8">
          <div className="w-16 h-16 bg-amber-50 dark:bg-amber-950/40 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Online CBT Test Being Digitized
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm max-w-md mx-auto">
            The interactive test engine for this specific shift is currently being indexed. In the meantime, you can solve the official question paper PDF or practice full solutions online.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {shift.englishPdfUrl && (
              <a href={shift.englishPdfUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">
                Question Paper PDF (EN)
              </a>
            )}
            {shift.hindiPdfUrl && (
              <a href={shift.hindiPdfUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">
                Question Paper PDF (HI)
              </a>
            )}
            {shift.solutionsUrl && (
              <a href={shift.solutionsUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                Full Solutions on Examside
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-grow">
          <PYQTestEngine 
            examName={`${examLabel} ${paper.year}`} 
            shiftName={`${shift.date} | Shift ${shift.shift}`}
            questions={shuffledQuestions}
          />
        </div>
      )}
    </div>
  );
}
