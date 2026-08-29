import Link from "next/link";
import { PracticeTool } from "../components/PracticeTool";

export default function Homepage() {
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
              All Typing Tools <br/>
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

          <Link href="/test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⏱️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">Typing Test</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Evaluate your typing proficiency with realistic exam conditions</p>
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
        <div className="container-main max-w-6xl px-4 space-y-10">
          
          {/* Main Hindi Typing Practice Container */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border-2 border-slate-250 dark:border-slate-800">
             <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
               <span className="w-2.5 h-6 rounded-full bg-primary-600"></span>
               Hindi Typing Test & Practice
             </h2>
             <PracticeTool />
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
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50">
                    <p className="italic">"The progress tracking features helped me immensely during my preparation for the government typing exam. I passed with great scores!"</p>
                    <span className="block text-[11px] font-semibold text-gray-900 dark:text-white mt-1 text-right">— Rakesh T., Job Seeker</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50">
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
