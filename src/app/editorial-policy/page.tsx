import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.typehindi.in/editorial-policy",
  },
  title: "Editorial Policy - TypeHindi",
  description:
    "Learn about TypeHindi.in's editorial standards, content research and verification process, corrections policy, ownership, and advertising independence.",
  robots: {
    index: true,
    follow: true,
  },
};

const editorialJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Editorial Policy - TypeHindi",
  url: "https://www.typehindi.in/editorial-policy",
  description:
    "Editorial standards, content verification process, corrections policy, and publisher transparency for TypeHindi.in.",
  publisher: {
    "@type": "Organization",
    name: "TypeHindi",
    url: "https://www.typehindi.in",
    email: "contact@typehindi.in",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="container-main py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialJsonLd) }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Editorial Policy" }]} />

      <div className="mb-8">
        <h1 className="heading-1 mb-2">Editorial Policy</h1>
        <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">
          How educational guides, keyboard references, and practice materials are created, reviewed, and maintained on TypeHindi.in.
        </p>
      </div>

      <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300">
        <section className="space-y-3">
          <h2 className="heading-2">1. Publishing Organization &amp; Ownership</h2>
          <p className="leading-relaxed">
            TypeHindi.in (<a href="https://www.typehindi.in/" className="text-primary-600 dark:text-primary-400 hover:underline">https://www.typehindi.in/</a>) is an independent educational platform built and maintained by{" "}
            <Link
              href="/author/rohit-biruli"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Rohit Biruli
            </Link>
            . Our goal is to provide free, browser-based typing tools and accurate instructional resources for students, typists, and examination aspirants.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">2. Editorial Focus &amp; Scope</h2>
          <p className="leading-relaxed">
            Our primary editorial focus covers practical typing education and skill development:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Hindi typing fundamentals (InScript, Remington GAIL, and Mangal Unicode font workflows).</li>
            <li>Interactive keyboard layout guides, matra placement, and conjunct character formation.</li>
            <li>Typing speed test preparation for government clerical and stenography examinations.</li>
            <li>Multilingual Indian-language typing and transliteration practice.</li>
            <li>Shorthand learning and dictation guides.</li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">3. Content Research &amp; Verification</h2>
          <p className="leading-relaxed">
            Educational guides and tutorials published on TypeHindi.in are prepared using verifiable technical documentation and tested directly against our interactive typing tools:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-gray-900 dark:text-white">Keyboard &amp; Unicode Standards:</strong>{" "}
              InScript key mappings, character sequences, and Unicode behaviour are checked against Indian standard IS 16350:2016 and standard Windows/OS input implementations.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Practical Tool Testing:</strong>{" "}
              Key combinations, matra rules, and speed-calculation examples are verified within TypeHindi&apos;s own practice and test simulators.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Exam &amp; Recruitment References:</strong>{" "}
              When articles reference government examination typing speeds or official recruitment notices, we advise candidates to verify final dates, eligibility, and rules directly on the relevant authority&apos;s official website.
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">4. Author Attribution &amp; Updates</h2>
          <p className="leading-relaxed">
            Every guide displays clear attribution and a publication or update date. Articles maintained by the site creator link to his{" "}
            <Link
              href="/author/rohit-biruli"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              author profile
            </Link>
            . We review existing articles periodically to fix broken references, clarify confusing instructions, and retire or consolidate outdated posts.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">5. Corrections &amp; Reader Feedback</h2>
          <p className="leading-relaxed">
            If you spot a factual inaccuracy, a broken keyboard mapping example, or an outdated exam detail anywhere on TypeHindi.in, please report it so we can investigate and correct it promptly:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-gray-900 dark:text-white">Email:</strong>{" "}
              <a
                href="mailto:contact@typehindi.in"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                contact@typehindi.in
              </a>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Contact Form:</strong>{" "}
              <Link
                href="/contact"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                https://www.typehindi.in/contact
              </Link>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">6. Advertising &amp; Editorial Independence</h2>
          <p className="leading-relaxed">
            TypeHindi.in is free to use and is supported by display advertising (such as Google AdSense). Advertising partnerships do not influence our typing tutorials, keyboard layout recommendations, or tool behaviour.
          </p>
        </section>
      </div>
    </div>
  );
}
