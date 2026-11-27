import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { blogs } from "../../../data/blogs";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.typehindi.in/author/rohit-biruli",
  },
  title: "Rohit Biruli - Founder & Maintainer | TypeHindi",
  description:
    "Author and maintainer profile for Rohit Biruli, founder and developer of TypeHindi.in — free Hindi and Indian-language typing tools and learning guides.",
  robots: {
    index: true,
    follow: true,
  },
};

const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://www.typehindi.in/author/rohit-biruli",
  mainEntity: {
    "@type": "Person",
    name: "Rohit Biruli",
    url: "https://www.typehindi.in/author/rohit-biruli",
    jobTitle: "Founder & Developer",
    email: "contact@typehindi.in",
    worksFor: {
      "@type": "Organization",
      name: "TypeHindi",
      url: "https://www.typehindi.in",
    },
    description:
      "Founder, developer, and maintainer of TypeHindi.in, building free client-side Hindi and Indian-language typing practice tools, keyboard guides, and exam simulators.",
  },
};

const CORE_TYPING_SLUGS = [
  "hindi-inscript-keyboard-layout",
  "hindi-matra-typing-practice",
  "mangal-typing-keyboard-layout",
  "ssc-cgl-typing-test-preparation-guide",
  "ssc-chsl-recruitment-2026-how-to-pass-typing-test",
  "mangal-font-kya-hai",
  "santhali-bhasha-ka-itihas-aur-kshetra",
];

export default function RohitBiruliAuthorPage() {
  const featuredGuides = blogs.filter((b) => CORE_TYPING_SLUGS.includes(b.slug));

  return (
    <div className="container-main py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Rohit Biruli" },
        ]}
      />

      <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300">
        {/* Profile Header */}
        <header className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-gray-200 dark:border-slate-800 pb-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#102B5C] text-white text-xl font-extrabold dark:bg-primary-600">
            RB
          </div>
          <div className="space-y-1.5">
            <h1 className="heading-1">Rohit Biruli</h1>
            <p className="text-sm font-medium text-primary-700 dark:text-primary-400">
              Founder, Developer &amp; Maintainer — TypeHindi.in
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              Contact:{" "}
              <a
                href="mailto:contact@typehindi.in"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                contact@typehindi.in
              </a>
            </p>
          </div>
        </header>

        {/* Bio */}
        <section className="space-y-3">
          <h2 className="heading-2">About</h2>
          <p className="leading-relaxed">
            Rohit Biruli is the creator and maintainer of{" "}
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
              TypeHindi.in
            </Link>
            , an independent, free online platform built to help students, typists, and competitive exam aspirants practise Hindi and Indian-language typing directly in the browser without registration.
          </p>
          <p className="leading-relaxed">
            He develops and maintains the site&apos;s interactive typing practice engines, InScript and Remington GAIL keyboard mapping tools, Mangal Unicode test simulator, shorthand learning modules, and typing tutorials. Every guide is reviewed against the site&apos;s{" "}
            <Link
              href="/editorial-policy"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Editorial Policy
            </Link>
            .
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* Core Guides */}
        <section className="space-y-4">
          <h2 className="heading-2">Core Typing &amp; Keyboard Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="block rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-400">
                  {guide.categoryEn || guide.category}
                </span>
                <h3 className="mt-1 text-sm font-bold text-gray-900 dark:text-white leading-snug">
                  {guide.titleEn || guide.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-500 dark:text-slate-400 line-clamp-2">
                  {guide.excerptEn || guide.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-2 text-sm">
          <p>
            To report an error or suggest a new typing guide, reach out via{" "}
            <a
              href="mailto:contact@typehindi.in"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              contact@typehindi.in
            </a>{" "}
            or our{" "}
            <Link
              href="/contact"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Contact Page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
