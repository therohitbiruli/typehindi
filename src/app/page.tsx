import Link from "next/link";
import { PracticeTool } from "../components/PracticeTool";
import { lessons } from "../data/lessons";
import { blogs } from "../data/blogs";
import { LANGUAGES } from "./translators/page";
import { GameCanvas } from "../components/GameCanvas";

export default function Homepage() {
  // Get first 2 lessons for preview
  const previewLessons = lessons.slice(0, 2);
  
  // Get first 2 blogs for preview
  const previewBlogs = blogs.slice(0, 2);

  // Get first 4 languages for preview
  const previewLanguages = LANGUAGES.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
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
          
          <Link href="/practice" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⌨️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Practice</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">InScript Layout speed building practice with keystroke indicators</p>
          </Link>

          <Link href="/learn" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Tutor (Learn)</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Step-by-step interactive lessons to master the InScript layout</p>
          </Link>

          <Link href="/game" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🎮
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Games</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Fun and addictive typing games to build speed and muscle memory</p>
          </Link>

          <Link href="/test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⏱️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Test</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Evaluate your typing proficiency with realistic exam conditions</p>
          </Link>

          <Link href="/mangal-font-typing-test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-rose-500/40 dark:hover:border-rose-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🅰️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Mangal Font</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Practice Mangal font typing specifically formatted for exams</p>
          </Link>

          <Link href="/test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📜
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">CPCT Test</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Simulate the Computer Proficiency Certification Test pattern</p>
          </Link>

          <Link href="/learn" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🔍
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Keyboard Layout</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Visual layouts and guides for InScript and Remington layouts</p>
          </Link>

          <Link href="/translators" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🌐
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Translators</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Instantly translate English or other regional texts into Hindi</p>
          </Link>

          <Link href="/blog" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-slate-500/40 dark:hover:border-slate-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
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
          <div id="practice" className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border-2 border-slate-250 dark:border-slate-800">
             <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
               <span className="w-2.5 h-6 rounded-full bg-primary-600"></span>
               Hindi Typing Practice
             </h2>
             <PracticeTool />
             <div className="mt-6 flex justify-end">
               <Link href="/practice" className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                 Launch Practice Hub ➔
               </Link>
             </div>
          </div>

          {/* 2. 📚 SECTION: LEARN */}
          <div id="learn" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-emerald-500"></span>
              Typing Tutor & Lessons
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Master touch typing with our structured curriculum. Start with the home row vowels and slowly advance to complex conjunct consonants.
            </p>
            <div className="grid gap-6 md:grid-cols-2 py-2">
              {previewLessons.map((lesson) => (
                <div key={lesson.id} className="border border-slate-200 dark:border-slate-850 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">
                    Lesson {lesson.id}: {lesson.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {lesson.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {lesson.characters.slice(0, 8).map((char, index) => (
                      <span key={index} className="px-2 py-1 rounded bg-white dark:bg-slate-800 text-xs border border-slate-200 dark:border-slate-700 font-hindi">
                        {char}
                      </span>
                    ))}
                    {lesson.characters.length > 8 && <span className="text-xs text-gray-400 px-1 py-1">+{lesson.characters.length - 8} more</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end pt-2">
              <Link href="/learn" className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Browse All Lessons ➔
              </Link>
            </div>
          </div>

          {/* 3. 🎮 SECTION: GAME */}
          <div id="game" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-purple-500"></span>
              Typing Word Games
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Make learning fun! Build rapid reflexes and muscle memory by typing falling letters and words correctly before they crash onto the ground. Play the classic falling words game directly below or head to the game hub to explore other modes.
            </p>
            
            {/* Embedded Active Game Canvas */}
            <div className="border border-slate-250 dark:border-slate-800 rounded-3xl p-4 bg-slate-50/50 dark:bg-slate-900/50 shadow-inner">
              <GameCanvas />
            </div>

            <div className="flex justify-end pt-2">
              <Link href="/game" className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Play More Games ➔
              </Link>
            </div>
          </div>

          {/* 4. ⏱️ SECTION: TEST */}
          <div id="test" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-amber-500"></span>
              Typing Test (Timed Exams Simulator)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Evaluate your typing speed in both <strong>Hindi and English</strong> under realistic competitive exam environments. Learn how key recruitment tests evaluate candidates:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
              <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
                <h4 className="font-extrabold text-gray-950 dark:text-white text-sm mb-1">SSC Typing Exams</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Conducted on-screen for 10 minutes. Requires 35 WPM in English or 30 WPM in Hindi. Strict category-wise error threshold limits (5% to 7%) are evaluated dynamically.
                </p>
              </div>
              <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
                <h4 className="font-extrabold text-gray-950 dark:text-white text-sm mb-1">LDC & Clerk Jobs</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Requires a typing speed of 30-35 WPM. Depending on state boards (like CPCT, High Courts), backspace edits might be fully disabled or carry high speed penalties.
                </p>
              </div>
              <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
                <h4 className="font-extrabold text-gray-950 dark:text-white text-sm mb-1">Stenography Skill Tests</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Focuses on typing out stenography shorthand voice dictations. Grade C candidates target 100 WPM, while Grade D candidates target 80 WPM with high transcription accuracy.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/test" className="flex flex-col items-center justify-center p-5 border border-dashed border-gray-250 dark:border-gray-800 rounded-xl hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500/5 transition-all text-center">
                <span className="text-2xl mb-1">⏱️</span>
                <span className="font-bold text-gray-950 dark:text-white text-sm">1 Minute Test</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Quick speed benchmark</span>
              </Link>
              <Link href="/test" className="flex flex-col items-center justify-center p-5 border border-dashed border-gray-250 dark:border-gray-800 rounded-xl hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500/5 transition-all text-center">
                <span className="text-2xl mb-1">⏱️</span>
                <span className="font-bold text-gray-950 dark:text-white text-sm">5 Minutes Test</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Stamina building trial</span>
              </Link>
              <Link href="/test" className="flex flex-col items-center justify-center p-5 border border-dashed border-gray-250 dark:border-gray-800 rounded-xl hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500/5 transition-all text-center">
                <span className="text-2xl mb-1">⏱️</span>
                <span className="font-bold text-gray-950 dark:text-white text-sm">10 Minutes Test</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Standard exam duration</span>
              </Link>
            </div>
            <div className="flex justify-end pt-2">
              <Link href="/test" className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Know More & Take Test ➔
              </Link>
            </div>
          </div>

          {/* 5. 🔍 SECTION: KEYBOARD LAYOUT */}
          <div id="keyboard-layout" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-sky-500"></span>
              Interactive Keyboard Layout Guide
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Explore the scientific key layouts of standard Hindi input structures. Learn the exact placement of vowels on the left side and consonants on the right side.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 dark:text-white text-base">InScript vs Remington GAIL</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  InScript is standard for official government typing jobs and is supported natively by Windows and macOS. Remington GAIL is heavily favored in high court exams. Toggle between layouts, view shifting key map results, and master modifiers.
                </p>
              </div>
              <div className="relative aspect-[16/9] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-inner bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                <span className="text-xs font-mono text-gray-400">Interactive Map Preview</span>
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                  <Link href="/keyboard-layout" className="px-4 py-2 bg-white dark:bg-gray-800 text-xs font-bold rounded-lg border border-gray-300 dark:border-gray-700 shadow hover:shadow-md transition-all">
                    Open Layout Map 🔍
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 6. 🌐 SECTION: TRANSLATORS */}
          <div id="translators" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-violet-500"></span>
              Indian Language Transliterators
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Convert phonetic English/Hindi letters into native Indian scripts instantly. Our translation tool operates fully client-side for rapid response and security.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
              {previewLanguages.map((lang) => (
                <Link
                  key={`home-trans-${lang.name}`}
                  href={`/translators/english-to-${lang.name.toLowerCase()}`}
                  className="flex flex-col items-center justify-center p-5 border border-gray-200 dark:border-gray-800 hover:border-violet-500 dark:hover:border-violet-500 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 transition-all text-center group"
                >
                  <span className="text-xl mb-1 text-gray-500 group-hover:text-violet-600">A→{lang.nativeChar}</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">English to {lang.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex justify-end pt-2">
              <Link href="/translators" className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Browse All Translators ➔
              </Link>
            </div>
          </div>

          {/* 7. 📰 SECTION: BLOG */}
          <div id="blog" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-slate-500"></span>
              Latest Typing & Exam Guides
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Stay updated with typing requirements for government jobs, recruitment syllabus updates, keyboard layout setup tutorials, and typing improvement tips.
            </p>
            <div className="grid gap-6 md:grid-cols-2 py-2">
              {previewBlogs.map((blog) => (
                <div key={blog.slug} className="border border-slate-200 dark:border-slate-850 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider block mb-1">
                      {blog.date} | {blog.category}
                    </span>
                    <h3 className="font-extrabold text-gray-900 dark:text-white text-base leading-snug mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                  <Link href={`/blog/${blog.slug}`} className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline w-fit">
                    Read Full Article ➔
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-end pt-2">
              <Link href="/blog" className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                Browse All Articles ➔
              </Link>
            </div>
          </div>

          {/* 8. ℹ️ SECTION: ABOUT */}
          <div id="about" className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-md p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="w-2.5 h-6 rounded-full bg-slate-700"></span>
              About Our Platform
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-4 flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  TypeHindi.in is a free online Hindi typing practice platform designed to help students and office professionals learn and master Hindi typing on the InScript keyboard layout. Our platform provides high-quality timed tests modeled after official government exams, complete touch typing tutor lessons, and useful guides.
                </p>
                <div className="flex justify-start">
                  <Link href="/about" className="btn-secondary rounded-xl px-6 py-2.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-bold flex items-center gap-2">
                    Learn More About Us ➔
                  </Link>
                </div>
              </div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl space-y-3">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">Key Features</h4>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1.5 pl-4 list-disc">
                  <li><strong>100% Client-Side:</strong> Everything runs safely in your browser.</li>
                  <li><strong>No Registration Needed:</strong> Start practicing immediately.</li>
                  <li><strong>Private Data:</strong> Scores are stored locally on your device.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Text Dense Content mimicking TypingBaba */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-sm p-6 md:p-10 space-y-10">
            
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
