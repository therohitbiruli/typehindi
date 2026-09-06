import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-[#090D14] text-slate-300">
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-sm font-extrabold tracking-widest text-slate-100 uppercase">
                TYPEHINDI.IN
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              A comprehensive and free Hindi typing platform for students, typists, and government exam aspirants. Practice InScript keyboard, Remington Gail, speed tests, and interactive typing games.
            </p>
          </div>

          {/* Column 2: Sections */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">
              SECTIONS
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/game" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Typing Games
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Typing Jobs & News
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Typing Practice
                </Link>
              </li>
              <li>
                <Link href="/test" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Typing Test
                </Link>
              </li>
              <li>
                <Link href="/keyboard-layout" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Keyboard Layout
                </Link>
              </li>
              <li>
                <Link href="/mangal-font-typing-test" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Mangal Font Test
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Learn Hindi Typing
                </Link>
              </li>
              <li>
                <Link href="/shorthand" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Shorthand Practice & Dictation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About This Site (Legal & Info) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">
              ABOUT THIS SITE
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 transition-colors hover:text-primary-400 hover:underline">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">
              FOLLOW
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-primary-400 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-primary-400 hover:underline"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-primary-400 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/feed.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-primary-400 hover:underline"
                >
                  RSS Feed (XML)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & tagline */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {currentYear} TypeHindi.in. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Empowering Hindi typists across India for SSC CGL, CHSL, High Court, Police & LDC exams.
          </p>
        </div>
      </div>
    </footer>
  );
}
