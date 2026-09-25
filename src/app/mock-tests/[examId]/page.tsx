import Link from "next/link";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ examId: string }>;
}

const EXAM_NAMES: Record<string, string> = {
  "ssc-cgl": "SSC CGL",
  "ssc-chsl": "SSC CHSL",
  "ssc-cpo": "SSC CPO",
  "ssc-gd": "SSC GD",
  "rrb-ntpc": "RRB NTPC",
};

export async function generateMetadata({ params }: Props) {
  const { examId } = await params;
  const name = EXAM_NAMES[examId];
  if (!name) return { title: "Not Found" };
  return {
    title: `${name} Mock Tests | TypeHindi`,
    description: `Practice free full-length mock tests for ${name}.`,
  };
}

export default async function ExamMockTestsPage({ params }: Props) {
  const { examId } = await params;
  const name = EXAM_NAMES[examId];
  if (!name) notFound();

  // Generate 10 standard mock tests
  const tests = Array.from({ length: 10 }).map((_, i) => i + 1);

  return (
    <div className="container-main py-8 min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Mock Tests", href: "/mock-tests" },
          { label: name },
        ]}
      />
      
      <div className="mt-8 mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
          {name} Mock Tests
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Select a mock test below to begin your full-length CBT practice session.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tests.map((testNum) => (
          <Link
            key={testNum}
            href={`/mock-tests/${examId}/test-${testNum}`}
            className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-primary-500 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {testNum}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Mock Test {testNum}</h3>
                <p className="text-sm text-slate-500">100 Questions • 60 Mins</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
