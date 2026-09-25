import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata = {
  title: "Free CBT Mock Tests for SSC & Railway Exams | TypeHindi",
  description: "Take full-length mock tests for SSC CGL, CHSL, CPO, GD, and RRB NTPC with a real CBT-like interface.",
};

const EXAMS = [
  { id: "ssc-cgl", name: "SSC CGL", desc: "Combined Graduate Level Examination", icon: "🎖️⭐⭐⭐" },
  { id: "ssc-chsl", name: "SSC CHSL", desc: "Combined Higher Secondary Level", icon: "🖥️💼" },
  { id: "ssc-cpo", name: "SSC CPO", desc: "Central Police Organization", icon: "👮‍♂️🚓" },
  { id: "ssc-gd", name: "SSC GD", desc: "Constable (General Duty)", icon: "🪖💂‍♂️" },
  { id: "rrb-ntpc", name: "RRB NTPC", desc: "Non-Technical Popular Categories", icon: "🚂🚉" },
];

export default function MockTestsPage() {
  return (
    <div className="container-main py-8 min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Mock Tests" },
        ]}
      />
      
      <div className="text-center max-w-2xl mx-auto mt-10 mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Free CBT Mock Tests
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Experience full-length mock tests exactly as they appear in the real Computer Based Test (CBT).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {EXAMS.map((exam) => (
          <Link
            key={exam.id}
            href={`/mock-tests/${exam.id}`}
            className="group flex flex-col items-center text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:shadow-xl hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {exam.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {exam.name}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {exam.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
