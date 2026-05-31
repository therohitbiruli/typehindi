import Link from "next/link";
import { PracticeTool } from "../components/PracticeTool";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      {/* Hero Section - Gradient similar to TypingBaba */}
      <section className="bg-gradient-to-r from-[#4A8D9B] to-[#D59850] pt-12 pb-24 border-b border-gray-300 relative">
        <div className="container-main px-4">
          <div className="text-center mb-12 text-white max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-4">Every tool related to all Typing needs in one place</h1>
            <p className="text-sm md:text-base font-light opacity-90 leading-relaxed">
              We offer you Comprehensive list of tools for typing in one place absolutely free and easy to use within one click away range. Besides this, we guarantee utmost accuracy and speed in the functioning of the website without any glitch in the software.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid (Overlapping the gradient just a bit or right below it) */}
      <div className="container-main max-w-6xl px-4 -mt-16 relative z-10 mb-8">
        <div className="bg-white shadow-md grid grid-cols-2 md:grid-cols-4 border border-gray-200">
          <Link href="/practice" className="flex flex-col items-center justify-center py-10 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">⌨️</span>
            <span className="text-gray-600 font-light text-lg">Typing Practice</span>
          </Link>
          <Link href="/test" className="flex flex-col items-center justify-center py-10 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">⏱️</span>
            <span className="text-gray-600 font-light text-lg">Typing Test</span>
          </Link>
          <Link href="/learn" className="flex flex-col items-center justify-center py-10 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">📚</span>
            <span className="text-gray-600 font-light text-lg">Typing Tutor</span>
          </Link>
          <Link href="/game" className="flex flex-col items-center justify-center py-10 border-b border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎮</span>
            <span className="text-gray-600 font-light text-lg">Games</span>
          </Link>
          <Link href="/mangal-font-typing-test" className="flex flex-col items-center justify-center py-10 border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">🅰️</span>
            <span className="text-gray-600 font-light text-lg">Mangal Font</span>
          </Link>
          <Link href="/test" className="flex flex-col items-center justify-center py-10 border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">📜</span>
            <span className="text-gray-600 font-light text-lg">CPCT Test</span>
          </Link>
          <Link href="/learn" className="flex flex-col items-center justify-center py-10 border-r border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔍</span>
            <span className="text-gray-600 font-light text-lg">Keyboard Layout</span>
          </Link>
          <Link href="/blog" className="flex flex-col items-center justify-center py-10 border-gray-200 hover:bg-gray-50 transition-colors group">
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">📰</span>
            <span className="text-gray-600 font-light text-lg">Blog</span>
          </Link>
        </div>
      </div>

      <section className="pb-16">
        <div className="container-main max-w-6xl px-4 space-y-8">
          
          {/* Main Hindi Typing Practice Container */}
          <div className="bg-white border border-gray-200 shadow-sm p-4 md:p-6">
             <h2 className="text-xl font-normal text-blue-800 border-b border-gray-100 pb-2 mb-4">Hindi Typing Practice Tool</h2>
             <PracticeTool />
          </div>

          {/* Text Dense Content mimicking TypingBaba */}
          <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-10 space-y-10">
            
            <div className="border-b border-blue-200 pb-2 mb-4">
               <h2 className="text-2xl font-normal text-red-600 inline-block">TypeHindi</h2><span className="text-2xl font-normal text-blue-800">.in</span>
            </div>

            <div className="text-gray-600 text-sm leading-relaxed space-y-3">
              <p className="text-red-600 font-medium">Dear Users,</p>
              <p>We welcome all of you to <Link href="/" className="text-blue-600 hover:underline">TypeHindi.in</Link>, where we carefully compiled and assembled various <i>Typing-related tools</i> for your day-to-day working requirements. In an era where everything is digital, the significance of fast and accurate typing skills matters. Whether you are a student or a working official in any Government facility or a free individual who wants to sharpen their typing skills, you won't be disappointed at all. What makes <strong>TypeHindi</strong> different from other websites is that our approach is different. We created this website with a simple design and a <i>simpler navigation</i> panel where every <strong>typing tool</strong> can be accessed from every website page.</p>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 mb-3 border-b border-gray-100 pb-2">Why Typing Skills Matter?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In this Modern world no matter what you are doing you have to work with the keyboard at any time. If you don't know typing a significant amount of time will be wasted on finding keys on the keyboard which you can utilize otherwise. Typing skills greatly improve your productivity at work or home, enhance your focus, minimize mistakes and save you valuable time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 mb-3 border-b border-gray-100 pb-2">Why Learn Typing Online?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <Link href="/learn" className="text-blue-600 hover:underline">Learning typing</Link> from a typing instructor in an academy wastes your valuable time and energy which you can use for other tasks. <Link href="/learn" className="text-blue-600 hover:underline">Learning typing</Link> online from the comfort of your home gives you the space to learn anytime and at any pace, which is a great advantage in this competitive world.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 mb-3 border-b border-gray-100 pb-2">Tools offered by TypeHindi.in</h3>
              <p className="text-gray-600 text-sm mb-4">These are the main tools provided by TypeHindi.in.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Typing Tools</h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    These Typing tools are the most developed in comparison to other typing websites. Here, We have provided so many features in one place that you don't need to go anywhere else for your work. By using this way you can convert the entire Roman script into Devnagari. Other than that it will open a window whenever you type where you can choose any appropriate Devnagari word from the list of similar words.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Online Keyboard</h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    These Keyboard tools are designed for those users who are not familiar with their language keyboard layout. For Example, if you don't know the <Link href="/learn" className="text-blue-600 hover:underline">Hindi Keyboard</Link> layout but want to type in Devanagari directly then this tool is for you. Here we have provided a <Link href="/mangal-font-typing-test" className="text-blue-600 hover:underline">Hindi Keyboard</Link> Layout by looking at it you can type very efficiently and fast without any bother.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Typing Tutor</h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    These Tutors are one of the most comprehensive Typing Tutors you will find anywhere. Every Type of learner whether novice or advanced everyone will satisfied by using this tool. It is designed in such a simple way that everything related to this tutor or typing in general is explained in the blog.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Typing Tests</h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    Typing tests are designed for those users who have become proficient in typing but want to put their skills to the test. There are four types of typing tests on the website <Link href="/test" className="text-blue-600 hover:underline">Hindi Typing Test</Link>, and <Link href="/mangal-font-typing-test" className="text-blue-600 hover:underline">Mangal Typing Test</Link>. We have provided two types of modes Exam Mode, and Practice Mode. Practice mode is created for all users whereas Exam Mode is for those who are preparing for a particular Government exam.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Game</h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    Here we have given popular <Link href="/game" className="text-blue-600 hover:underline">tank games for Hindi</Link> and English users. This game enhances your typing skills in a great way and gives entertainment also. The general Theme of this <Link href="/game" className="text-blue-600 hover:underline">tank game</Link> is that a single individual tank is standing in the middle then multiple tanks with different alphabet initials written on it forward towards it and you have to type the appropriate key to destroy incoming tanks.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">Font Converters</h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    There are many font converters given for Hindi users such as KrutiDev to Unicode, Chanakya to Unicode, and vice versa. There are also Unicode and more.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 mb-3 border-b border-gray-100 pb-2">Frequently Asked Questions (FAQ)</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-red-600 font-bold">Q:</span> <span className="text-gray-800">Is TypeHindi Free to use?</span><br />
                  <span className="text-blue-700 font-bold">A:</span> <span className="text-gray-600">Absolutely. We do not charge anything from you for anything. It is free of cost to use.</span>
                </div>
                <div>
                  <span className="text-red-600 font-bold">Q:</span> <span className="text-gray-800">How long does it take to learn touch typing?</span><br />
                  <span className="text-blue-700 font-bold">A:</span> <span className="text-gray-600">It depends on number of hours you practice. For example, if you practice for 15-30 minutes daily you will get considerable improvement in 2-4 weeks.</span>
                </div>
                <div>
                  <span className="text-red-600 font-bold">Q:</span> <span className="text-gray-800">Can I use this website for Official Typing Tests?</span><br />
                  <span className="text-blue-700 font-bold">A:</span> <span className="text-gray-600">Yes, this website has provided features for every government exam Typing Test like SSC, banks, AIIMS etc. We have provided the same calculation methods used in respective Exams.</span>
                </div>
                <div>
                  <span className="text-red-600 font-bold">Q:</span> <span className="text-gray-800">Can My kids practice on this Website?</span><br />
                  <span className="text-blue-700 font-bold">A:</span> <span className="text-gray-600">Definitely, This Typing website has a very simple design so that every type of user can benefit.</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-4 border-l-4 border-l-red-500 bg-gray-50">
              <h3 className="text-lg font-light text-gray-800 mb-2">Testimonials from Our Users</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>"Improved from 30 WPM to 70 WPM in just two months. This site made learning easy and fun!"</strong> — Neha K., College Student</p>
                <p><strong>"The progress tracking helped me prepare for my government typing exam. I passed with flying colors!"</strong> — Rakesh T., Job Seeker</p>
                <p><strong>"Our entire class uses this platform. It's intuitive, customizable, and keeps students engaged."</strong> — Priya D., School Teacher</p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4 text-center text-sm text-gray-500">
              Thanks For Visiting Our Website...... 🎯
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
