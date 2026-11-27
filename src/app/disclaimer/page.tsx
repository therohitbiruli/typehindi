import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer | TypeHindi",
  description:
    "Disclaimer for TypeHindi.in explaining limitations, responsibilities, and conditions associated with using our educational typing tools and resources.",
  alternates: {
    canonical: "https://www.typehindi.in/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | TypeHindi",
    description:
      "Disclaimer for TypeHindi.in explaining limitations, responsibilities, and conditions associated with using our educational typing tools and resources.",
    url: "https://www.typehindi.in/disclaimer",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />

      <div className="mb-8">
        <h1 className="heading-1 mb-2">Disclaimer</h1>
        <div className="inline-block rounded-md bg-gray-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-slate-300">
          Last Updated: November 24, 2026
        </div>
      </div>

      <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        {/* Intro */}
        <section className="space-y-3">
          <p>
            Welcome to TypeHindi.in. This Disclaimer explains the limitations, responsibilities, and conditions associated with using our website, tools, educational resources, and services. By accessing or using TypeHindi.in, you acknowledge and agree to this Disclaimer.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 1. General Disclaimer */}
        <section className="space-y-3">
          <h2 className="heading-2">1. General Disclaimer</h2>
          <p>
            All information, content, tools, software, and services available on TypeHindi.in are provided for general informational, educational, and practice purposes.
          </p>
          <p>
            While we make reasonable efforts to maintain accurate, useful, and updated information, we do not guarantee that all content is complete, accurate, reliable, current, or error-free.
          </p>
          <p>
            Your use of the website and its resources is entirely at your own discretion and risk.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 2. Educational and Practice Purposes */}
        <section className="space-y-4">
          <h2 className="heading-2">2. Educational and Practice Purposes</h2>
          <p>
            TypeHindi.in is an independent educational platform designed to help users learn and practice Hindi typing.
          </p>
          <p>Our website provides resources and features such as:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Hindi typing practice and speed tests.</li>
            <li>InScript and Remington Gail keyboard layouts.</li>
            <li>Hindi typing tutorials and learning materials.</li>
            <li>Typing games and interactive exercises.</li>
            <li>Shorthand practice and dictation resources.</li>
            <li>Transliteration and other typing-related tools.</li>
          </ul>
          <p>
            These resources are intended to support learning and skill development. They should not be considered a substitute for official examination materials, professional instruction, or guidance from relevant authorities.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 3. No Guarantee of Results */}
        <section className="space-y-3">
          <h2 className="heading-2">3. No Guarantee of Results</h2>
          <p>
            Typing speed, accuracy, and overall improvement depend on individual practice, consistency, familiarity with keyboard layouts, and other personal factors.
          </p>
          <p>
            TypeHindi.in does not guarantee any specific typing speed, accuracy level, examination result, selection, or employment opportunity.
          </p>
          <p>
            Any typing scores, speed calculations, or performance results displayed on our website should be treated as practice indicators rather than official certifications or guaranteed examination results.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 4. Government Affiliation Disclaimer */}
        <section className="space-y-3">
          <h2 className="heading-2">4. Government Affiliation Disclaimer</h2>
          <p>
            TypeHindi.in is an independent educational and informational website. We are not affiliated with, associated with, authorized by, sponsored by, or officially connected to any government department, ministry, recruitment board, examination authority, or public institution.
          </p>
          <p>
            Any references to government examinations, recruitment processes, typing tests, or official requirements are provided for informational and educational purposes only.
          </p>
          <p>
            Users are strongly advised to verify examination notifications, eligibility requirements, typing standards, application procedures, and other official information directly through the respective government or examination authority websites.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 5. Accuracy of Information and Tools */}
        <section className="space-y-3">
          <h2 className="heading-2">5. Accuracy of Information and Tools</h2>
          <p>
            We make reasonable efforts to ensure that the information and functionality provided through our website are useful and reliable.
          </p>
          <p>However, we do not guarantee that:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>All educational content is completely free from errors.</li>
            <li>Typing tools and calculators will always produce perfectly accurate results.</li>
            <li>Keyboard layouts and typing methods will work identically across all devices and operating systems.</li>
            <li>Website content will always reflect the latest examination patterns or requirements.</li>
          </ul>
          <p>
            Users should independently verify important information before relying on it.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 6. Third-Party Links and External Websites */}
        <section className="space-y-3">
          <h2 className="heading-2">6. Third-Party Links and External Websites</h2>
          <p>
            Our website may contain links to external websites, services, or resources for additional information and convenience.
          </p>
          <p>
            These third-party websites operate independently and are not controlled by TypeHindi.in.
          </p>
          <p>
            We are not responsible for their content, accuracy, availability, privacy practices, security, or services. Visiting external websites is entirely at your own discretion.
          </p>
          <p>
            We recommend reviewing the applicable terms and privacy policies of any third-party website you visit.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 7. Intellectual Property */}
        <section className="space-y-3">
          <h2 className="heading-2">7. Intellectual Property</h2>
          <p>
            Unless otherwise stated, the original content, website design, branding, and materials published on TypeHindi.in are protected by applicable intellectual property laws.
          </p>
          <p>
            Users may access and use our resources for personal learning and practice purposes.
          </p>
          <p>
            Unauthorized reproduction, redistribution, commercial exploitation, or copying of website content without appropriate permission is not permitted, except where allowed by applicable law.
          </p>
          <p>
            Third-party trademarks, names, and materials remain the property of their respective owners.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 8. Technical Availability and Data Storage */}
        <section className="space-y-3">
          <h2 className="heading-2">8. Technical Availability and Data Storage</h2>
          <p>
            We strive to keep TypeHindi.in accessible and functioning properly. However, we do not guarantee uninterrupted, secure, or error-free website operation.
          </p>
          <p>
            The website may occasionally experience maintenance periods, technical problems, server interruptions, or compatibility issues.
          </p>
          <p>
            Certain website features may use browser storage technologies, including localStorage, to save typing progress or user preferences. Such information may be lost if you clear your browser data, change devices, or use a different browser.
          </p>
          <p>
            Users are responsible for maintaining any records or information they wish to preserve.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 9. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="heading-2">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, TypeHindi.in, its owners, operators, and contributors shall not be held liable for any direct, indirect, incidental, consequential, or other damages arising from:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>The use or inability to use our website.</li>
            <li>Errors, omissions, or inaccuracies in published information.</li>
            <li>Reliance on educational content or typing test results.</li>
            <li>Temporary website interruptions or technical failures.</li>
            <li>Loss of browser-stored data or user progress.</li>
            <li>The use of third-party websites or external services.</li>
          </ul>
          <p>
            Nothing in this Disclaimer excludes liability that cannot legally be excluded under applicable law.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 10. Changes to This Disclaimer */}
        <section className="space-y-3">
          <h2 className="heading-2">10. Changes to This Disclaimer</h2>
          <p>
            We reserve the right to modify, update, or revise this Disclaimer at any time without prior notice.
          </p>
          <p>
            Any changes will be published on this page along with the revised update date. Users are encouraged to review this page periodically to remain informed of any changes.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 11. Contact Us */}
        <section className="space-y-3">
          <h2 className="heading-2">11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Disclaimer, please visit our{" "}
            <Link
              href="/contact"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Contact Us page
            </Link>{" "}
            through the website.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5 text-sm">
            <p>
              <strong className="text-gray-900 dark:text-white">Website:</strong>{" "}
              <a
                href="https://www.typehindi.in/"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                https://www.typehindi.in/
              </a>
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Contact Page:</strong>{" "}
              <Link
                href="/contact"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                https://www.typehindi.in/contact
              </Link>
            </p>
          </div>
          <p className="font-semibold text-gray-900 dark:text-white pt-2">
            By continuing to use TypeHindi.in, you acknowledge that you have read and understood this Disclaimer.
          </p>
        </section>
      </div>
    </div>
  );
}
