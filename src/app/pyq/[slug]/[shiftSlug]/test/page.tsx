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

  return {
    title: `${paper.examId.toUpperCase()} ${paper.year} ${shift.date} Shift ${shift.shift} Test | TypeHindi`,
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
            { label: paper.examId.toUpperCase(), href: `/pyq/${paper.slug}` },
            { label: "Test" },
          ]}
        />
      </div>
      
      <div className="flex-grow">
        <PYQTestEngine 
          examName={`${paper.examId.toUpperCase()} ${paper.year}`} 
          shiftName={`${shift.date} | Shift ${shift.shift}`}
          questions={shuffledQuestions}
        />
      </div>
    </div>
  );
}
