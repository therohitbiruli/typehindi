import { Breadcrumb } from "../../../../components/Breadcrumb";
import { notFound } from "next/navigation";
import { pyqQuestions } from "../../../../data/pyqStore";
import { PYQTestEngine } from "../../../../components/pyq/PYQTestEngine";

interface Props {
  params: Promise<{ examId: string; testId: string }>;
}

const EXAM_NAMES: Record<string, string> = {
  "ssc-cgl": "SSC CGL",
  "ssc-chsl": "SSC CHSL",
  "ssc-cpo": "SSC CPO",
  "ssc-gd": "SSC GD",
  "rrb-ntpc": "RRB NTPC",
};

// Use force-static or just dynamic depending on needs
export const dynamic = 'force-static';

export function generateStaticParams() {
  const params: { examId: string; testId: string }[] = [];
  for (const examId of Object.keys(EXAM_NAMES)) {
    for (let i = 1; i <= 10; i++) {
      params.push({ examId, testId: `test-${i}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { examId, testId } = await params;
  const name = EXAM_NAMES[examId];
  if (!name) return { title: "Not Found" };
  const testNum = testId.split('-')[1] || "1";
  
  return {
    title: `${name} Mock Test ${testNum} | TypeHindi`,
    description: `Take ${name} full-length Mock Test ${testNum} with real PYQs.`,
  };
}

export default async function MockTestExecutionPage({ params }: Props) {
  const { examId, testId } = await params;
  const name = EXAM_NAMES[examId];
  if (!name || !testId.startsWith("test-")) notFound();
  
  const testNum = parseInt(testId.split('-')[1]);
  if (isNaN(testNum) || testNum < 1 || testNum > 10) notFound();

  // Get questions for the exam
  const allExamQs = pyqQuestions.filter(q => q.exam === examId);
  
  // Deterministically take 100 questions for the specific test
  // We use testNum to pick a chunk of 100 questions
  const startIndex = (testNum - 1) * 100;
  const rawQuestions = allExamQs.slice(startIndex, startIndex + 100);
  
  // Shuffle them slightly based on some deterministic logic or just present them
  // For standard CBT mock tests, random shuffle on client load is fine, 
  // but since this is SSG, we shuffle it here
  const seededRandom = (seed: number) => {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  
  const questions = [...rawQuestions].sort((a, b) => seededRandom(a.id.length) - 0.5);

  return (
    <div className="container-main py-4 min-h-screen flex flex-col">
      <div className="mb-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Mock Tests", href: "/mock-tests" },
            { label: name, href: `/mock-tests/${examId}` },
            { label: `Test ${testNum}` },
          ]}
        />
      </div>
      
      <div className="flex-grow">
        <PYQTestEngine 
          examName={`${name} Mock Test ${testNum}`} 
          shiftName={`Full Length Test • 100 Questions`}
          questions={questions}
        />
      </div>
    </div>
  );
}
