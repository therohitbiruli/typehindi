import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPapers, getUniqueSubjectsForPaper } from "../../../data/pyqApi";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const paper = getAllPapers().find((p) => p.slug === slug);
  if (!paper) return { title: "Not Found" };

  return {
    title: `${paper.title} Online Practice | TypeHindi`,
    description: paper.description,
  };
}

export async function generateStaticParams() {
  return getAllPapers().map((p) => ({
    slug: p.slug,
  }));
}

export default async function PyqDetailPage({ params }: Props) {
  const { slug } = await params;
  const paper = getAllPapers().find((p) => p.slug === slug);

  if (!paper) {
    notFound();
  }

  const subjects = getUniqueSubjectsForPaper(paper);

  return (
    <div className="container-main py-8 min-h-[70vh]">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "PYQs", href: "/pyq" },
          { label: paper.title },
        ]}
      />

      <article className="mt-8 mx-auto w-full max-w-5xl space-y-10">
        
        {/* Top Hero / Information Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-bold rounded-lg uppercase tracking-wider">
                {paper.examId.replace('-', ' ')}
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg uppercase tracking-wider">
                {paper.year}
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg uppercase tracking-wider">
                {paper.tier}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
              {paper.title}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {paper.description} Improve your speed and accuracy by practicing these real exam questions in our simulated test environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href={`/pyq/${paper.slug}/${paper.shifts[0]?.slug}/test`}
                className="btn-primary px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2 shadow-lg shadow-primary-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                Attempt Full PYQ
              </Link>
              <a 
                href="#shifts"
                className="px-8 py-3.5 rounded-xl font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2"
              >
                Browse Shifts
              </a>
            </div>
          </div>
        </section>

        <AdPlaceholder position="top" />

        {/* Subjects Section */}
        {subjects.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-emerald-500"></span>
              Practice by Subject
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjects.map(subject => (
                <Link 
                  key={subject}
                  href={`/pyq/${paper.slug}/subject/${subject.toLowerCase().replace(/ /g, '-')}`}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mb-1">
                    {subject}
                  </h3>
                  <p className="text-xs text-slate-500">Questions from {paper.shifts.length} shifts</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Shift-wise Papers */}
        <section id="shifts" className="space-y-6 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-amber-500"></span>
            Shift-wise Papers
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {paper.shifts.map((shift, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{shift.date}</h3>
                    <p className="text-amber-600 dark:text-amber-400 font-semibold text-sm">Shift {shift.shift}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-slate-700 dark:text-slate-300">{shift.totalQuestions} Qs</span>
                    <span className="block text-xs text-slate-500">{shift.durationMinutes} Mins</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {shift.subjectsCovered.map((sub, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                  <Link 
                    href={`/pyq/${paper.slug}/${shift.slug}/test`}
                    className="flex-grow sm:flex-grow-0 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm px-4 py-2 rounded-xl text-center transition-colors inline-flex justify-center items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                    Attempt
                  </Link>
                  <Link 
                    href={`/pyq/${paper.slug}/${shift.slug}/questions`}
                    className="flex-grow sm:flex-grow-0 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm px-4 py-2 rounded-xl text-center transition-colors"
                  >
                    View Qs
                  </Link>

                  {/* PDFs as secondary options */}
                  <div className="flex gap-2 ml-auto">
                    {shift.englishPdfUrl && (
                      <a href={shift.englishPdfUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline underline-offset-2">PDF(EN)</a>
                    )}
                    {shift.hindiPdfUrl && (
                      <a href={shift.hindiPdfUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline underline-offset-2">PDF(HI)</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 mt-12 mb-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            {paper.title}
          </h2>
          
          <div className="space-y-5 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              The <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.title}</strong> is an important resource for candidates preparing for the Staff Selection Commission Combined Graduate Level examination. SSC CGL is one of the major competitive examinations conducted for recruitment to various Group B and Group C posts in central government departments and offices. Solving the <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} {paper.year} Question Paper</strong> gives aspirants an opportunity to practice questions based on the actual examination pattern and understand the type of questions asked in different shifts.
            </p>
            
            <p>
              The <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} {paper.tier} Previous Year Paper</strong> covers four major sections: General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension. Practising these sections regularly can help candidates become familiar with different question formats and improve their ability to solve questions within a limited time. The <Link href="/pyq" className="text-primary-600 dark:text-primary-400 hover:underline">{paper.examId.toUpperCase().replace('-', ' ')} {paper.year} PYQ</Link> collection is particularly useful because the papers are available shift-wise, allowing candidates to attempt questions from different examination sessions.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
              Why Solve {paper.examId.toUpperCase().replace('-', ' ')} Previous Year Questions?
            </h3>
            
            <p>
              Practising <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} Previous Year Questions</strong> is useful for understanding the level and pattern of questions that candidates may encounter during preparation. Instead of preparing only from theory and study notes, aspirants can use PYQs to test whether they can actually apply the concepts they have learned.
            </p>
            
            <p>
              Previous year questions can also help identify important topics that require additional practice. For example, candidates preparing for Quantitative Aptitude can practise questions related to percentage, ratio, averages, algebra, geometry, profit and loss, time and work, and other topics. Similarly, Reasoning practice can include analogy, series, coding-decoding, classification, blood relations, directions and other question types.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
              Practice {paper.examId.toUpperCase().replace('-', ' ')} {paper.year} PYQs Online
            </h3>
            
            <p>
              On TypeHindi, candidates can use the <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} PYQ Online Practice</strong> system to solve previous year questions directly on the website instead of depending only on downloaded papers. The available questions can be organised according to exam date, shift, subject and topic, making preparation more convenient.
            </p>
            
            <p>
              Candidates can attempt a complete paper in an exam-style environment or practise selected questions according to their preparation needs. After attempting questions, reviewing incorrect answers is an important part of preparation because it helps identify mistakes and topics that need improvement.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
              Prepare Subject by Subject
            </h3>
            
            <p>
              The <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} {paper.year} Question Paper</strong> can also be used for subject-wise preparation. Candidates who want to focus on Reasoning can practise <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} Reasoning Questions</strong>, while those working on mathematics can concentrate on <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} Maths Questions</strong>. Separate practice for English and General Awareness can also help candidates focus on their weaker areas.
            </p>
            
            <p>
              Subject-wise and topic-wise PYQ practice is especially useful during revision. Instead of repeatedly solving an entire paper, candidates can select a particular topic and practise multiple questions related to it.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
              How to Use {paper.examId.toUpperCase().replace('-', ' ')} Previous Year Papers Effectively
            </h3>
            
            <p>
              Start by attempting a paper without checking the answers in advance. Maintain proper time discipline and try to solve the questions as you would during the actual examination. After completing the paper, check the answers and carefully review the questions you answered incorrectly or skipped.
            </p>
            
            <p>
              Candidates should maintain a record of repeated mistakes and revisit the relevant concepts before attempting another test. Regularly practising <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} previous year question paper with answers</strong> can improve speed, accuracy and familiarity with the examination format.
            </p>
            
            <p>
              The {paper.examId.toUpperCase().replace('-', ' ')} {paper.year} PYQs should therefore be used not only as question papers but also as a revision and self-assessment tool. By combining <strong className="font-semibold text-slate-800 dark:text-slate-200">{paper.examId.toUpperCase().replace('-', ' ')} shift-wise question paper</strong> practice with subject-wise revision, topic-wise questions and regular mock tests, aspirants can make their preparation more structured and consistent.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
              Prepare for the {paper.examId.toUpperCase().replace('-', ' ')} Typing Test
            </h3>
            
            <p>
              In addition to the written tiers, many posts require clearing a Data Entry Speed Test (DEST) or typing test. You can build your speed and accuracy using TypeHindi's <Link href="/practice" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">online typing practice</Link> and <Link href="/test" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">typing mock tests</Link> to ensure you are fully prepared for every stage of the exam.
            </p>
          </div>
        </section>

        {/* SEO / FAQ Content */}
        <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 mt-12">
          <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Can I practice {paper.title} online?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes! You can take the full {paper.year} PYQ test with a timer, or practice specific subjects like Reasoning and Quantitative Aptitude directly on our platform.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Are answers and explanations provided?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes, detailed solutions are available after you submit the test or when viewing individual questions.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Is this shift-wise data?</h3>
              <p className="text-slate-600 dark:text-slate-400">Absolutely. The questions are organized exactly as they appeared in the actual exam shifts.</p>
            </div>
          </div>
        </section>

        <AdPlaceholder position="bottom" />
      </article>
    </div>
  );
}
