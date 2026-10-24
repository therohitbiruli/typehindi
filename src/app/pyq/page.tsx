import { getAllExams, getAllPapers } from "../../data/pyqApi";
import { Breadcrumb } from "../../components/Breadcrumb";
import { PYQHubClient } from "../../components/pyq/PYQHubClient";

export const metadata = {
  title: "SSC CGL, CPO, CHSL & RRB NTPC Previous Year Question Papers (PYQ) | TypeHindi",
  description: "Practice SSC CPO PYQ, SSC CGL PYQ, SSC CHSL PYQ, SSC GD PYQ and RRB NTPC previous year exam question papers online. Chapter-wise and full mock tests with solutions.",
  keywords: [
    "SSC CPO PYQ",
    "SSC CGL PYQ",
    "SSC CHSL PYQ",
    "SSC GD PYQ",
    "RRB NTPC PYQ",
    "SSC CPO Previous Year Question Paper",
    "Previous Year Question Papers Online",
    "TypeHindi PYQ"
  ],
  alternates: {
    canonical: "https://typehindi.in/pyq",
  }
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
      <div className="mt-10 mb-8 text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Previous Year Question Papers
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Practice previous year exam questions online with answers, explanations, subject-wise practice and performance analysis.
        </p>
      </div>

      {/* Interactive Search, Filter Sidebar & Results */}
      <PYQHubClient exams={exams} papers={papers} />
    </div>
  );
}
