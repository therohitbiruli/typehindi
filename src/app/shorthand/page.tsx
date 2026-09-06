import { Metadata } from "next";
import Link from "next/link";
import { ShorthandHero } from "../../components/shorthand/ShorthandHero";
import { ShorthandNav } from "../../components/shorthand/ShorthandNav";
import { ShorthandWorkflow } from "../../components/shorthand/ShorthandWorkflow";
import { StrokeExplorer } from "../../components/shorthand/StrokeExplorer";
import { shorthandLessons } from "../../data/shorthand/lessons";
import { officialExamPresets } from "../../data/shorthand/exams";

export const metadata: Metadata = {
  title: "Learn Shorthand Online: English Pitman Stenography Practice & Dictation | TypeHindi",
  description: "Learn English Pitman shorthand from beginner basics to 120 WPM stenographer level. Free interactive stroke canvas, audio dictation, transcription evaluation, and Delhi High Court / SSC exam tests.",
  keywords: [
    "shorthand",
    "learn shorthand",
    "pitman shorthand",
    "english shorthand",
    "shorthand dictation",
    "stenography practice",
    "stenographer exam",
    "delhi high court pa shorthand",
    "delhi high court spa shorthand",
    "ssc stenographer skill test"
  ]
};

export default function ShorthandLandingPage() {
  const faqs = [
    {
      q: "What is Pitman English Shorthand?",
      a: "Pitman Shorthand is a phonetic transcription system invented by Sir Isaac Pitman in 1837. Words are written exactly as they sound rather than how they are spelled in English. Consonants are represented by geometric straight and curved strokes, while vowels are represented by dots and dashes positioned relative to the strokes."
    },
    {
      q: "How long does it take to learn shorthand?",
      a: "A learner practicing 1 to 2 hours daily can typically master the basic strokes, vowel rules, and grammalogues in 4 to 8 weeks. Achieving exam-standard speeds (80 to 100+ WPM for SSC or Delhi High Court) usually takes 6 to 12 months of disciplined daily dictation and computer transcription practice."
    },
    {
      q: "What is the difference between Shorthand and Typing?",
      a: "Shorthand is an ultra-fast handwritten phonetic script designed to capture human speech live at 80 to 120+ WPM in a stenographer notepad. Typing is the transcription process where those handwritten shorthand outlines are converted into formal digital documents on a computer keyboard. Both skills are required in stenography examinations."
    },
    {
      q: "How does audio dictation practice work on TypeHindi?",
      a: "Our dictation studio plays natural English passages at customizable speeds ranging from 40 WPM to 120 WPM with a 3-second countdown timer. The passage text is kept hidden while you write notes in your steno pad. Once finished, you can transcribe your notes directly on the computer to evaluate your word accuracy."
    },
    {
      q: "Do I need to pay or create an account to use the shorthand tools?",
      a: "No. The entire TypeHindi Shorthand platform is 100% free and open. All your progress, daily streaks, test results, and notebook entries are stored locally and privately in your browser."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <ShorthandNav />
      <ShorthandHero />

      <main className="container-main py-12 space-y-16">
        {/* Section 1: What is Shorthand? */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Fundamental Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              What is Shorthand & How Does Stenography Work?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              In normal longhand writing, recording spoken English at conversational speed (120 to 150 words per minute) is humanly impossible because alphabet characters are cumbersome. Shorthand solves this by replacing complex letters with simplified geometric strokes, loops, and hooks that represent <strong>sounds</strong> rather than spelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold">
                1
              </div>
              <h3 className="font-bold text-slate-100 text-base">Phonetic Sound System</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Silent letters are discarded. You write only what the ear hears. For example, "debt" is written simply as "d-t", and "rough" as "r-f".
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 font-bold">
                2
              </div>
              <h3 className="font-bold text-slate-100 text-base">Light vs. Heavy Strokes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Voiceless sounds (P, T, CH, K) are drawn light and thin; voiced sounds (B, D, J, G) are drawn thick and heavy, allowing intuitive pairing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 font-bold">
                3
              </div>
              <h3 className="font-bold text-slate-100 text-base">Word-Signs & Phraseography</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-frequency words ("the", "of", "and", "should") and phrases ("in accordance with") are condensed into swift single pen motions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Visual Workflow */}
        <section className="space-y-4">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              The Professional Cycle
            </span>
            <h2 className="text-2xl font-black text-slate-100">
              The 4-Step Stenography Workflow
            </h2>
            <p className="text-xs text-slate-400">
              From the spoken word to the certified typed legal document.
            </p>
          </div>
          <ShorthandWorkflow />
        </section>

        {/* Section 3: Beginner 13-Level Learning Path Overview */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Curriculum Structure
              </span>
              <h2 className="text-2xl font-black text-slate-100">
                13-Level Pitman Shorthand Path
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                A methodical progression from pen holding to official 120 WPM exam readiness.
              </p>
            </div>

            <Link
              href="/shorthand/learn"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors self-start sm:self-auto"
            >
              View Full Curriculum (13 Levels) →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shorthandLessons.map((l) => (
              <Link
                key={l.id}
                href={`/shorthand/lessons/${l.slug}`}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-1 flex flex-col justify-between group space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-purple-400 uppercase tracking-wider">
                      Level {l.level}
                    </span>
                    <span className="text-[11px] text-slate-400">⏱ {l.estimatedMinutes} mins</span>
                  </div>
                  <h3 className="font-bold text-slate-100 text-base group-hover:text-purple-300 transition-colors">
                    {l.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {l.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{l.difficulty}</span>
                  <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Start Lesson →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 4: Interactive Character Explorer Preview */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Interactive Catalog
              </span>
              <h2 className="text-2xl font-black text-slate-100">
                Pitman Shorthand Sign Explorer
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Browse verified consonant strokes, 12-vowel scheme, diphthongs, and word-signs.
              </p>
            </div>
            <Link
              href="/shorthand/practice"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors self-start sm:self-auto"
            >
              Open Drawing Canvas →
            </Link>
          </div>
          <StrokeExplorer />
        </section>

        {/* Section 5: Official Exam Preparation Highlights */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Recruitment Preparation
            </span>
            <h2 className="text-2xl font-black text-slate-100">
              Government Stenography Exam Simulators
            </h2>
            <p className="text-xs text-slate-400">
              Configured strictly against current official recruitment parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {officialExamPresets.map((exam) => (
              <div
                key={exam.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                      {exam.organization}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold">
                      {exam.dictationSpeedWpm} WPM
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{exam.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{exam.description}</p>

                  <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Dictation</span>
                      <strong className="text-slate-200">{exam.dictationDurationMinutes} Mins</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Transcription</span>
                      <strong className="text-slate-200">{exam.transcriptionTimeMinutes} Mins</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Max Error</span>
                      <strong className="text-amber-400">≤ {exam.allowedErrorPercentage}%</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/shorthand/tests?exam=${exam.id}`}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                  >
                    Take Exam Test →
                  </Link>
                  <Link
                    href="/shorthand/guides"
                    className="text-xs text-slate-400 hover:text-purple-300"
                  >
                    Read Exam Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="space-y-6 pt-6 border-t border-slate-800">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Common Queries
            </span>
            <h2 className="text-2xl font-black text-slate-100">
              Frequently Asked Questions About Shorthand
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span className="text-purple-400 font-black">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
