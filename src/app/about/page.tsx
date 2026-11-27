import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.typehindi.in/about",
  },
  title: "About TypeHindi - Free Hindi & Multilingual Typing Platform",
  description:
    "Learn about TypeHindi.in — an independent, free online Hindi and Indian-language typing platform built and maintained by Rohit Biruli for students and government exam aspirants.",
  robots: {
    index: true,
    follow: true,
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About TypeHindi",
  url: "https://www.typehindi.in/about",
  description:
    "About TypeHindi.in, its educational typing tools, and its founder and maintainer Rohit Biruli.",
  mainEntity: {
    "@type": "Organization",
    name: "TypeHindi",
    url: "https://www.typehindi.in",
    email: "contact@typehindi.in",
    founder: {
      "@type": "Person",
      name: "Rohit Biruli",
      url: "https://www.typehindi.in/author/rohit-biruli",
    },
  },
};

export default function AboutPage() {
  return (
    <div className="container-main py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <AdPlaceholder position="top" />

      <div className="mb-8">
        <h1 className="heading-1 mb-2">About TypeHindi</h1>
        <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">
          An independent educational platform for Hindi typing, keyboard mastery, and government exam speed preparation.
        </p>
      </div>

      <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300">
        <section className="space-y-3">
          <h2 className="heading-2">Our Mission</h2>
          <p className="leading-relaxed">
            TypeHindi.in (<a href="https://www.typehindi.in/" className="text-primary-600 dark:text-primary-400 hover:underline">https://www.typehindi.in/</a>) is a free, browser-based educational platform built to help students, office professionals, and competitive exam aspirants learn and practice Hindi and Indian-language typing without barriers or paid subscriptions.
          </p>
          <p className="leading-relaxed">
            Whether you are learning the standard InScript layout from scratch, preparing for a Mangal Unicode or Remington GAIL skill test, or building accuracy across regional Indian scripts, TypeHindi gives you instant, distraction-free practice tools right in your browser.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Typing Tools &amp; Learning Resources</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-gray-900 dark:text-white">Interactive Learning Hub:</strong>{" "}
              Step-by-step guided lessons across 8 languages (English, Hindi, Marathi, Punjabi, Tamil, Bengali, Kannada, and Gujarati) covering home-row basics, vowels, consonants, matras, and conjuncts with live keyboard visual guidance.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Practice Mode:</strong>{" "}
              Paragraph-based typing practice categorized by difficulty with real-time WPM, accuracy percentage, and error tracking.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Exam Speed Tests &amp; Mangal Font Simulator:</strong>{" "}
              Timed typing test simulations supporting InScript and Remington GAIL workflows patterned after SSC, High Court, and state clerical skill tests.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Keyboard Layout Guides:</strong>{" "}
              Interactive visual maps for normal and Shift key combinations across supported languages.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">English-to-Indian Language Transliteration:</strong>{" "}
              Phonetic typing tools to write Indian scripts using a standard English QWERTY keyboard.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Shorthand Practice &amp; Typing Games:</strong>{" "}
              Dictation drills, shorthand lessons, and interactive typing games to strengthen muscle memory.
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Who Maintains TypeHindi.in?</h2>
          <p className="leading-relaxed">
            TypeHindi.in is independently created, developed, and maintained by{" "}
            <Link
              href="/author/rohit-biruli"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium underline underline-offset-2"
            >
              Rohit Biruli
            </Link>
            . All educational guides and keyboard references follow our{" "}
            <Link
              href="/editorial-policy"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium underline underline-offset-2"
            >
              Editorial Policy
            </Link>{" "}
            for verification against keyboard standards and hands-on testing in the typing engine.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Technical Privacy &amp; Accessibility</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-gray-900 dark:text-white">Client-Side Execution:</strong> Typing exercises, WPM calculations, and transliteration run directly in your browser.</li>
            <li><strong className="text-gray-900 dark:text-white">No Registration Required:</strong> Start practicing immediately without creating an account.</li>
            <li><strong className="text-gray-900 dark:text-white">Local Progress Storage:</strong> Lesson progress, best WPM, and theme preferences are stored locally in your browser via localStorage.</li>
            <li><strong className="text-gray-900 dark:text-white">Cross-Device &amp; Theme Support:</strong> Responsive across desktop, tablet, and mobile devices with Light and Dark modes.</li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Contact Us</h2>
          <p className="leading-relaxed">
            For feedback, bug reports, content corrections, or general enquiries, email us at{" "}
            <a
              href="mailto:contact@typehindi.in"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium underline underline-offset-2"
            >
              contact@typehindi.in
            </a>{" "}
            or send a message through our{" "}
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium underline underline-offset-2"
            >
              Contact Page
            </Link>
            .
          </p>
        </section>
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
