import Link from "next/link";
import Image from "next/image";
import { PracticeTool } from "../components/PracticeTool";
import { blogs, getBlogImage } from "../data/blogs";
import { LANGUAGES } from "./translators/page";
import { HomepageGame } from "../components/HomepageGame";
import { HomepageKeyboard } from "../components/HomepageKeyboard";

export default function Homepage() {
  // Get first 4 blogs for preview (sorted latest to oldest)
  const HINDI_MONTHS: Record<string, number> = {
    "जनवरी": 0, "फरवरी": 1, "मार्च": 2, "अप्रैल": 3, "मई": 4, "जून": 5,
    "जुलाई": 6, "अगस्त": 7, "सितंबर": 8, "अक्टूबर": 9, "नवंबर": 10, "दिसंबर": 11
  };
  const sortedBlogs = [...blogs].sort((a, b) => {
    const parse = (d: string) => {
      const clean = d.replace(",", "");
      const parts = clean.split(/\s+/);
      if (parts.length === 3) {
        return new Date(parseInt(parts[2], 10), HINDI_MONTHS[parts[1]] ?? 0, parseInt(parts[0], 10)).getTime();
      }
      return 0;
    };
    return parse(b.date) - parse(a.date);
  });
  const previewBlogs = sortedBlogs.slice(0, 4);

  // Get first 8 languages for preview (2 rows of 4)
  const previewLanguages = LANGUAGES.slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* 🌟 Premium Hero Section */}
      <section className="bg-slate-950 text-white pt-20 pb-32 border-b border-slate-900 relative overflow-hidden">
        {/* Blurred background image blended directly with the dark bg */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 blur-[6px] scale-105 pointer-events-none"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Glow element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container-main px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Glowing top badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold mb-6 animate-pulse">
              ✨ The Best Hindi Typing Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] text-white">
              For Your Typing Jobs Preparation <br/>
              <span className="text-primary-400">in One Place</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              A comprehensive catalog of free and easy-to-use Hindi typing tools. Improve your speed with a 100% accurate WPM tracker, live keyboard guides, and engaging typing games.
            </p>

            {/* Hero CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/practice" className="px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-sm transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/35 hover:-translate-y-0.5">
                Start Practice
              </Link>
              <Link href="/game" className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all border border-slate-800 hover:-translate-y-0.5">
                Play Games
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Tools Floating Grid */}
      <div className="container-main max-w-6xl px-4 -mt-20 relative z-10 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Link href="/practice" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-primary-500/50 dark:hover:border-primary-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⌨️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Practice</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">InScript Layout speed building practice with keystroke indicators</p>
          </Link>

          <Link href="/learn" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Tutor (Learn)</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Step-by-step interactive lessons to master the InScript layout</p>
          </Link>

          <Link href="/game" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🎮
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Games</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Fun and addictive typing games to build speed and muscle memory</p>
          </Link>

          <Link href="/test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⏱️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Test</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Evaluate your typing proficiency with realistic exam conditions</p>
          </Link>

          <Link href="/mangal-font-typing-test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-rose-500/50 dark:hover:border-rose-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🅰️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Mangal Font</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Practice Mangal font typing specifically formatted for exams</p>
          </Link>

          <Link href="/test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📜
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">CPCT Test</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Simulate the Computer Proficiency Certification Test pattern</p>
          </Link>

          <Link href="/learn" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🔍
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Keyboard Layout</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Visual layouts and guides for InScript and Remington layouts</p>
          </Link>

          <Link href="/translators" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-violet-500/50 dark:hover:border-violet-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🌐
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Translators</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Instantly translate English or other regional texts into Hindi</p>
          </Link>

          <Link href="/blog" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-[#D9E1EC] dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-slate-500/50 dark:hover:border-slate-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📰
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Blog (Articles)</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Latest news, government exam patterns, and typing tips</p>
          </Link>

        </div>
      </div>

      <section className="pb-20">
        <div className="container-main max-w-6xl px-4 space-y-16">
          
          {/* 1. ⌨️ SECTION: PRACTICE */}
          <div id="practice" className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] border border-[#D9E1EC] dark:border-slate-800 relative overflow-hidden">
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none dark:hidden" />
             <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
               <span className="w-2.5 h-6 rounded-full bg-primary-600"></span>
               Hindi Typing Practice
             </h2>
             <PracticeTool />
             <div className="mt-6 flex justify-end">
               <Link href="/practice" className="btn-secondary rounded-xl px-6 py-2.5 border border-[#D9E1EC] dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                 Launch Practice Hub ➔
               </Link>
             </div>
          </div>

          {/* 2. 📚 SECTION: LEARN (Step by Step Hindi Typing Learning System) */}
          <div id="learn" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-[#D9E1EC] dark:border-slate-800/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-10 space-y-8 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none dark:hidden" />
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3">
                📚 Complete Learning System
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-2.5 h-7 rounded-full bg-emerald-500"></span>
                Learn Hindi Typing Step by Step
              </h2>
              <p className="text-slate-600 dark:text-gray-300 text-sm mt-2 max-w-3xl leading-relaxed">
                Master Hindi typing with structured lessons, interactive practice, keyboard guidance, and progressive challenges.
              </p>
            </div>

            {/* 6 Feature Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Card 1: Interactive Lessons */}
              <Link
                href="/learn#existing-lessons"
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-950/50 border border-[#D9E1EC] dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
                    📚
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    Interactive Lessons
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    Learn Hindi typing step by step, starting with vowels and progressing through consonants, matras, conjunct characters, words, and sentences.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Lessons</span>
                  <span className="ml-1">→</span>
                </div>
              </Link>

              {/* Card 2: Key-by-Key Learning */}
              <Link
                href="/learn#key-practice"
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-950/50 border border-[#D9E1EC] dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
                    ⌨️
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    Key-by-Key Learning
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    Understand individual Hindi characters, their keyboard positions, and practice each key progressively.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Practice Keys</span>
                  <span className="ml-1">→</span>
                </div>
              </Link>

              {/* Card 3: Finger Placement */}
              <Link
                href="/learn#finger-guide"
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-950/50 border border-[#D9E1EC] dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
                    🖐️
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    Finger Placement
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    Learn proper finger placement and discover which fingers should be used for different keys on the Hindi InScript keyboard.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>View Finger Guide</span>
                  <span className="ml-1">→</span>
                </div>
              </Link>

              {/* Card 4: Matra Mastery */}
              <Link
                href="/learn#matra-mastery"
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-950/50 border border-[#D9E1EC] dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
                    ✨
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    Matra Mastery
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    Practice Hindi matras through interactive exercises, word practice, and progressively more difficult challenges.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Master Matras</span>
                  <span className="ml-1">→</span>
                </div>
              </Link>

              {/* Card 5: Difficult Words & Mistakes */}
              <Link
                href="/learn#difficult-words"
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-950/50 border border-[#D9E1EC] dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
                    🎯
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    Difficult Words & Mistakes
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    Practice difficult Hindi words, conjunct characters, and improve common typing mistakes.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Train Difficult Words</span>
                  <span className="ml-1">→</span>
                </div>
              </Link>

              {/* Card 6: Typing Challenges */}
              <Link
                href="/learn#final-challenges"
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-950/50 border border-[#D9E1EC] dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
                    🏆
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    Typing Challenges
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    Test your skills with timed challenges focused on speed, accuracy, matras, difficult words, and mixed Hindi typing.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Take Challenges</span>
                  <span className="ml-1">→</span>
                </div>
              </Link>

            </div>

            {/* Compact Learning Journey Visualization & Progression Indicator */}
            <div className="rounded-2xl bg-[#EEF2F7] dark:bg-slate-950/60 border border-[#D9E1EC] dark:border-slate-800/80 p-5">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Progressive Learning Journey
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200/50 dark:border-emerald-800/50">
                      Beginner ➔ Confident
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-medium text-slate-700 dark:text-gray-300">
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 shadow-sm">Learn Characters</span>
                    <span className="text-slate-400 text-xs">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 shadow-sm">Practice Keys</span>
                    <span className="text-slate-400 text-xs">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 shadow-sm">Master Matras</span>
                    <span className="text-slate-400 text-xs">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 shadow-sm">Type Words</span>
                    <span className="text-slate-400 text-xs">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#D9E1EC] dark:border-slate-800 shadow-sm">Build Speed</span>
                    <span className="text-slate-400 text-xs">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow-sm">Take Challenges</span>
                  </div>
                </div>

                {/* Small progression meter badge */}
                <div className="flex items-center gap-3 self-start lg:self-auto bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-[#D9E1EC] dark:border-slate-800 shadow-sm">
                  <span className="text-lg">📈</span>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Skill Level</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-gray-200">Zero to 40+ WPM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-500 dark:text-gray-400 text-center sm:text-left">
                Start from scratch or jump directly to your level. 100% free, saved in your browser.
              </p>
              <Link
                href="/learn"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group flex-shrink-0"
              >
                <span>Start Learning Hindi Typing</span>
                <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
              </Link>
            </div>
          </div>

          {/* 🌟 SECTION: SHORTHAND FEATURE BANNER */}
          <div id="shorthand" className="bg-gradient-to-r from-purple-950/30 via-slate-900 to-[#0F172A] rounded-[2rem] border border-purple-500/30 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-8 space-y-5 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] font-bold text-purple-400 uppercase tracking-wider">
                  <span>✍️</span> New Section: English Pitman Stenography
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Learn Shorthand on TypeHindi
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Learn shorthand from the basics, practice dictation, improve transcription and prepare for stenography exams.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/shorthand"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-900/30 transition-all flex items-center gap-1.5"
                >
                  <span>Learn Shorthand</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/shorthand/dictation"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <span>Practice Dictation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. 🎮 SECTION: GAME */}
          <div id="game" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-[#D9E1EC] dark:border-slate-800/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-10 space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none dark:hidden" />
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-purple-500"></span>
              Typing Word Games
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              Make learning fun! Build rapid reflexes and muscle memory by typing falling letters and words correctly before they crash onto the ground. Play our tank defender game directly below or head to the game hub to explore other modes.
            </p>

            {/* Mobile-only Keyboard Notice Banner */}
            <div className="flex md:hidden items-start sm:items-center gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs">
              <span className="text-lg flex-shrink-0">💻</span>
              <p className="leading-relaxed">
                <strong>Device Notice:</strong> Typing games are designed to build touch-typing muscle memory and are best experienced on a <strong>Desktop or Laptop device with a physical keyboard</strong>.
              </p>
            </div>
            
            <HomepageGame />

            <div className="flex justify-end pt-2">
              <Link href="/game" className="btn-secondary rounded-xl px-6 py-2.5 border border-[#D9E1EC] dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Play More Games ➔
              </Link>
            </div>
          </div>

          {/* 4. ⏱️ SECTION: TEST */}
          <div id="test" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-[#D9E1EC] dark:border-slate-800/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-10 space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none dark:hidden" />
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-amber-500"></span>
              Typing Test (Timed Exams Simulator)
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              Evaluate your typing speed in both <strong>Hindi and English</strong> under realistic competitive exam environments. Learn how key recruitment tests evaluate candidates:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
              <div className="border border-[#D9E1EC] dark:border-slate-800 p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/50 shadow-sm">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-1">SSC Typing Exams</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  Conducted on-screen for 10 minutes. Requires 35 WPM in English or 30 WPM in Hindi. Strict category-wise error threshold limits (5% to 7%) are evaluated dynamically.
                </p>
              </div>
              <div className="border border-[#D9E1EC] dark:border-slate-800 p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/50 shadow-sm">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-1">LDC & Clerk Jobs</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  Requires a typing speed of 30-35 WPM. Depending on state boards (like CPCT, High Courts), backspace edits might be fully disabled or carry high speed penalties.
                </p>
              </div>
              <div className="border border-[#D9E1EC] dark:border-slate-800 p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/50 shadow-sm">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-1">Stenographer Grade C & D</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  Focuses on Shorthand transcription on computer. English transcription time is 50/40 mins and Hindi transcription time is 65/55 mins.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end pt-2">
              <Link href="/test" className="btn-secondary rounded-xl px-6 py-2.5 border border-[#D9E1EC] dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Launch Typing Test ➔
              </Link>
            </div>
          </div>

          {/* 5. 🔍 SECTION: KEYBOARD */}
          <div id="keyboard" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-[#D9E1EC] dark:border-slate-800/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-10 space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -z-10 pointer-events-none dark:hidden" />
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-sky-500"></span>
              InScript Keyboard Layout
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              Standardized by the Government of India, the InScript keyboard layout maps all Indic scripts symmetrically based on phonetics. Vowels are positioned on the left side, and consonants on the right.
            </p>
            
            <HomepageKeyboard />

            <div className="flex justify-end pt-2">
              <Link href="/keyboard-layout" className="btn-secondary rounded-xl px-6 py-2.5 border border-[#D9E1EC] dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Full Layout Reference ➔
              </Link>
            </div>
          </div>

          {/* 6. 🌐 SECTION: TRANSLATORS */}
          <div id="translators" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-[#D9E1EC] dark:border-slate-800/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-10 space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl -z-10 pointer-events-none dark:hidden" />
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-violet-500"></span>
              Regional Language Translators
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              Convert and transliterate words across various Indian languages instantly into Hindi or English. Perfect for regional administrative tasks, exam forms, and daily communication.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
              {previewLanguages.map((lang) => (
                <Link
                  key={`home-trans-${lang.name}`}
                  href={`/translators/english-to-${lang.name.toLowerCase()}`}
                  className="flex flex-col items-center justify-center p-5 border border-[#D9E1EC] dark:border-slate-800 hover:border-violet-500 dark:hover:border-violet-500 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-all text-center group"
                >
                  <span className="text-xl mb-1 text-slate-500 group-hover:text-violet-600 transition-colors">A→{lang.nativeChar}</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-gray-200">English to {lang.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex justify-end pt-2">
              <Link href="/translators" className="btn-secondary rounded-xl px-6 py-2.5 border border-[#D9E1EC] dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                View All Languages ➔
              </Link>
            </div>
          </div>

          {/* 7. 📰 SECTION: BLOG */}
          <div id="blog" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-[#D9E1EC] dark:border-slate-800/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-10 space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -z-10 pointer-events-none dark:hidden" />
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-slate-500"></span>
              Latest Typing & Exam Guides
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              Stay updated with typing requirements for government jobs, recruitment syllabus updates, keyboard layout setup tutorials, and typing improvement tips.
            </p>
            <div className="grid gap-6 md:grid-cols-2 py-2">
              {previewBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group border border-[#D9E1EC] dark:border-slate-800 p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/50 shadow-sm hover:shadow-md hover:border-primary-400 dark:hover:border-primary-600 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Featured Image Thumbnail */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800">
                      <Image
                        src={getBlogImage(blog)}
                        alt={blog.titleEn || blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 tracking-wide block mb-1.5">
                      {blog.author} · {blog.dateEn || blog.date}
                    </span>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {blog.titleEn || blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {blog.excerptEn || blog.excerpt}
                    </p>
                  </div>

                  <div className="text-xs font-bold text-primary-600 dark:text-primary-400 group-hover:underline flex items-center gap-1 mt-auto">
                    <span>Read Full Article</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-end pt-2">
              <Link href="/blog" className="btn-secondary rounded-xl px-6 py-2.5 border border-[#D9E1EC] dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Browse All Articles ➔
              </Link>
            </div>
          </div>



          {/* Text Dense Content mimicking TypingBaba */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-[#D9E1EC] dark:border-slate-800/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6 md:p-10 space-y-10">
            
            <div className="border-b border-blue-200 dark:border-gray-800 pb-2 mb-4">
               <h2 className="text-2xl font-normal text-red-600 inline-block">TypeHindi</h2><span className="text-2xl font-normal text-blue-800 dark:text-blue-400">.in</span>
            </div>

            <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed space-y-3">
              <p className="text-red-600 dark:text-red-400 font-medium">Dear Users,</p>
              <p>Welcome to TypeHindi.in, where we have carefully compiled and collected various typing-related tools for your daily tasks. In this digital era, fast and accurate typing skills are highly essential. Whether you are a student, a government officer, or an individual looking to refine your typing skills, you will find exactly what you need. What makes TypeHindi stand out is our approach. We designed this website with a simple interface and clean navigation, making every typing tool accessible from any page.</p>
            </div>

            <div>
               <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">Why Typing Skills Matter?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                In today's modern age, no matter what you do, you will likely need to work on a keyboard. If you do not know how to type, you will waste valuable time searching for keys. Developing proper typing skills significantly enhances productivity, improves focus, reduces errors, and saves your precious time.
              </p>
            </div>

            <div>
               <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">Why Learn Typing Online?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Learning typing from an instructor in an academy can consume a lot of time and energy that could be spent on other tasks. Learning typing online from the comfort of your home gives you the flexibility to practice anytime and learn at your own pace, which is a great advantage in today's competitive world.
              </p>
            </div>

            <div>
               <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">Tools Provided by TypeHindi.in</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">These are the primary tools offered by TypeHindi.in.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">Typing Tools</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    Our typing tools are among the most advanced compared to other typing websites. We provide all the necessary features in one place so you don't have to look elsewhere. Easily track and improve your Hindi typing speed using our speed tracking tools.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">Online Keyboard</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    These tools are designed for users who are not familiar with the local keyboard layout. For example, if you don't know the Hindi keyboard layout but want to type directly in Devanagari script, this is for you. We provide an online Hindi keyboard layout guide to help you type efficiently.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">Typing Tutor (Learn)</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    Our typing tutor is one of the most comprehensive learning programs available online. Designed for learners of all levels—from beginners to advanced—it makes understanding the basic rules of touch typing simple and engaging.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">Typing Test</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    Our typing tests are designed for users who want to assess their typing proficiency. We offer both Hindi Typing Tests and Mangal Font Typing Tests. Both Practice Mode and realistic Exam Mode are available.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">Typing Games</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    We offer a popular word-falling typing game for both Hindi and English learners. It is a fun way to improve typing speed and build muscle memory. The goal is to type and destroy the falling words before they hit the ground.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">Font Converters</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    We provide multiple font converters for Hindi users, such as KrutiDev to Unicode, Chanakya to Unicode, and vice versa. Easily convert your legacy documents into modern unicode font format.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlighted Guide / Article Section */}
            <div className="border border-slate-200 dark:border-slate-800/80 rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white dark:from-slate-900/30 dark:to-slate-900/90 grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[250px] md:min-h-[350px]">
                <img 
                  src="/images/setting-up-hindi-inscript-windows-mac.webp" 
                  alt="How to Set Up Hindi InScript Keyboard on Windows 10/11 and macOS" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center space-y-4">
                <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold w-fit uppercase tracking-wider">
                  Detailed Guide
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-snug">
                  How to Set Up Hindi InScript Keyboard on Windows 10/11 and macOS?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Start typing in Hindi on your computer without installing any third-party software. By reading this step-by-step guide, you can enable the default InScript keyboard in your operating system settings in just a few minutes.
                </p>
                <Link 
                  href="/blog/setting-up-hindi-inscript-windows-mac" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm hover:underline w-fit"
                >
                  Read the Full Step-by-Step Guide <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">Frequently Asked Questions (FAQ)</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">Is TypeHindi free to use?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">Absolutely. The platform is 100% free and we do not charge for any of our services.</span>
                </div>
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">How long does it take to learn touch typing?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">It depends on your daily practice. If you practice for 15-30 minutes every day, you should see significant speed and accuracy improvements within 2 to 4 weeks.</span>
                </div>
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">Can I use this site to prepare for official government typing tests?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">Yes, this platform provides dedicated typing test simulations for exams like SSC, Railways, High Courts, etc. Our calculation methods for WPM and accuracy match the standards used in real exams.</span>
                </div>
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">Can children practice on this website?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">Definitely. The simple and clean design makes it accessible and easy to use for learners of all age groups.</span>
                </div>
              </div>
            </div>

            {/* Split layout testimonial section with classroom image */}
            <div className="border border-slate-200 dark:border-slate-800/80 rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-slate-900/50 grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-5 rounded-full bg-primary-600"></span>
                    What Our Users Say
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50">
                    <p className="italic">"My typing speed went from 30 WPM to 70 WPM in just two months. This platform made learning Hindi typing easy and fun!"</p>
                    <span className="block text-[11px] font-semibold text-gray-900 dark:text-white mt-1 text-right">— Neha K., College Student</span>
                  </div>
                  <div className="bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50">
                    <p className="italic">"The progress tracking features helped me immensely during my preparation for the government typing exam. I passed with great scores!"</p>
                    <span className="block text-[11px] font-semibold text-gray-900 dark:text-white mt-1 text-right">— Rakesh T., Job Seeker</span>
                  </div>
                  <div className="bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50">
                    <p className="italic">"Our entire class uses this platform. It is user-friendly and keeps the students highly engaged during lessons."</p>
                    <span className="block text-[11px] font-semibold text-gray-900 dark:text-white mt-1 text-right">— Priya D., School Teacher</span>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[250px] md:min-h-full bg-slate-900">
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="TypeHindi Classroom Training" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-50 dark:from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              Thank you for visiting our website! 🎯
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
