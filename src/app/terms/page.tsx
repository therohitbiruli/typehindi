import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms & Conditions | TypeHindi",
  description:
    "Terms and conditions for using TypeHindi.in educational typing platform, tests, learning lessons, and tools.",
  alternates: {
    canonical: "https://typehindi.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions | TypeHindi",
    description:
      "Terms and conditions for using TypeHindi.in educational typing platform, tests, learning lessons, and tools.",
    url: "https://typehindi.in/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />

      <div className="mb-8">
        <h1 className="heading-1 mb-2">Terms &amp; Conditions</h1>
        <div className="inline-block rounded-md bg-gray-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-slate-300">
          Last Updated: November 24, 2026
        </div>
      </div>

      <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        {/* Intro */}
        <section className="space-y-3">
          <p>
            Welcome to TypeHindi (
            <a
              href="https://www.typehindi.in/"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              https://www.typehindi.in/
            </a>
            ). By accessing or using our website, you agree to these Terms &amp; Conditions. Please read them carefully before using our services.
          </p>
          <p>
            If you do not agree with any part of these terms, please discontinue using the website.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 1. About TypeHindi */}
        <section className="space-y-4">
          <h2 className="heading-2">1. About TypeHindi</h2>
          <p>
            TypeHindi is an online educational platform that provides free typing and language-learning tools.
          </p>
          <p>Our services include:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>English and Indian-language typing practice.</li>
            <li>Hindi, Marathi, Punjabi, Tamil, Bengali, Kannada and Gujarati typing tools.</li>
            <li>English-to-Indian-language transliteration.</li>
            <li>Online typing speed tests.</li>
            <li>Keyboard layout guides.</li>
            <li>Step-by-step typing lessons.</li>
            <li>Typing games and interactive exercises.</li>
            <li>Shorthand learning and dictation practice.</li>
            <li>Educational articles and typing guides.</li>
          </ul>
          <p>
            These services are provided for educational, personal and practice purposes.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 2. Acceptance of Terms */}
        <section className="space-y-3">
          <h2 className="heading-2">2. Acceptance of Terms</h2>
          <p>
            By visiting or using TypeHindi, you confirm that you have read and understood these Terms &amp; Conditions.
          </p>
          <p>
            We may update these terms from time to time. Continued use of the website after changes are published means that you accept the updated terms.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 3. Use of Our Services */}
        <section className="space-y-4">
          <h2 className="heading-2">3. Use of Our Services</h2>
          <p>
            You may use TypeHindi for personal learning, typing practice, educational activities and other lawful purposes.
          </p>
          <p>When using our website, you agree:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Not to use the website for illegal activities.</li>
            <li>Not to attempt to damage, disrupt or interfere with website functionality.</li>
            <li>Not to attempt unauthorised access to our systems or services.</li>
            <li>Not to misuse our tools or attempt to exploit technical vulnerabilities.</li>
            <li>Not to copy, distribute or commercially exploit website content without appropriate permission.</li>
            <li>Not to use automated methods that cause unreasonable disruption to our services.</li>
          </ul>
          <p>
            We reserve the right to restrict access to users who misuse the website or violate these terms.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 4. Typing Tools and Test Results */}
        <section className="space-y-4">
          <h2 className="heading-2">4. Typing Tools and Test Results</h2>
          <p>
            TypeHindi provides typing simulators, speed calculations, accuracy measurements, practice passages and other interactive tools.
          </p>
          <p>Although we make reasonable efforts to maintain accuracy:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Typing speed and accuracy results are provided for practice and reference.</li>
            <li>Results may vary depending on the keyboard, browser, input method and device.</li>
            <li>Our practice tests are not official government examinations.</li>
            <li>Our typing scores and performance reports are not guaranteed to match every recruitment examination&apos;s evaluation system.</li>
          </ul>
          <p>
            Users should always refer to the official recruitment notification and examination instructions for actual typing requirements, speed criteria, error limits and keyboard layouts.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 5. Educational Content and Information */}
        <section className="space-y-3">
          <h2 className="heading-2">5. Educational Content and Information</h2>
          <p>
            The tutorials, typing guides, keyboard instructions, examination information and other educational materials published on TypeHindi are provided for general informational and learning purposes.
          </p>
          <p>
            We make reasonable efforts to keep information accurate and updated. However, we do not guarantee that all information will always be complete, accurate or current.
          </p>
          <p>
            Government recruitment rules, examination patterns and typing requirements may change. Users should verify important information through the relevant official authorities before making decisions.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 6. Intellectual Property */}
        <section className="space-y-4">
          <h2 className="heading-2">6. Intellectual Property</h2>
          <p>
            All original website content, including text, graphics, logos, illustrations, designs, educational materials and original software components, belongs to TypeHindi or its respective rights holders unless otherwise stated.
          </p>
          <p>You may:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Use our free tools for personal educational purposes.</li>
            <li>Practise typing using the available exercises.</li>
            <li>Share links to publicly accessible pages.</li>
          </ul>
          <p>
            You may not reproduce, redistribute, republish or commercially exploit our original website content or software without prior permission, except where permitted by applicable law.
          </p>
          <p>
            Third-party trademarks, names and materials belong to their respective owners.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 7. User-Entered Content */}
        <section className="space-y-3">
          <h2 className="heading-2">7. User-Entered Content</h2>
          <p>
            TypeHindi allows visitors to enter text into typing tools, practice exercises and other interactive features.
          </p>
          <p>
            Users are responsible for the text and information they enter.
          </p>
          <p>
            You agree not to use our services to enter or process unlawful, harmful or unauthorised material.
          </p>
          <p>
            Depending on the particular feature, entered text and performance information may be processed in your browser or through the relevant service provider. Please refer to our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Privacy Policy
            </Link>{" "}
            for further information.
          </p>
          <p>
            We do not claim ownership of the original text you enter into our typing practice tools.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 8. Third-Party Websites and Services */}
        <section className="space-y-3">
          <h2 className="heading-2">8. Third-Party Websites and Services</h2>
          <p>
            Our website may contain links to external websites, tools and services for additional information or functionality.
          </p>
          <p>These external services are not controlled by TypeHindi.</p>
          <p>We are not responsible for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>The content of external websites.</li>
            <li>Their accuracy or availability.</li>
            <li>Their security practices.</li>
            <li>Their privacy policies.</li>
            <li>Any loss or damage resulting from their use.</li>
          </ul>
          <p>
            Visitors should review the terms and privacy policies of external services before using them.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 9. Website Availability */}
        <section className="space-y-3">
          <h2 className="heading-2">9. Website Availability</h2>
          <p>
            We aim to keep TypeHindi accessible and functional. However, we do not guarantee uninterrupted or error-free availability.
          </p>
          <p>
            We may temporarily suspend, modify, update or discontinue any feature or part of the website for maintenance, technical improvements or other operational reasons.
          </p>
          <p>
            We are not responsible for temporary service interruptions caused by hosting providers, network problems, browser compatibility or circumstances beyond our reasonable control.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 10. Disclaimer of Warranties */}
        <section className="space-y-3">
          <h2 className="heading-2">10. Disclaimer of Warranties</h2>
          <p>
            TypeHindi is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
          </p>
          <p>We make no guarantee that:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Every tool will work perfectly on every device or browser.</li>
            <li>All typing calculations will match every external examination system.</li>
            <li>Every keyboard mapping will be supported by all operating systems.</li>
            <li>Website content will always be free from errors.</li>
            <li>Services will remain available without interruption.</li>
          </ul>
          <p>
            Users are responsible for checking that a tool or keyboard configuration is suitable for their intended purpose.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 11. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="heading-2">11. Limitation of Liability</h2>
          <p>
            To the extent permitted by applicable law, TypeHindi and its operators shall not be liable for indirect, incidental or consequential losses arising from the use or inability to use the website.
          </p>
          <p>This includes losses resulting from:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Incorrect or outdated information.</li>
            <li>Typing or test results.</li>
            <li>Temporary website interruptions.</li>
            <li>Third-party services.</li>
            <li>Device or browser compatibility issues.</li>
            <li>Unauthorised access beyond our reasonable control.</li>
          </ul>
          <p>
            Nothing in these terms excludes liability where such exclusion is not permitted under applicable law.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 12. Privacy */}
        <section className="space-y-3">
          <h2 className="heading-2">12. Privacy</h2>
          <p>
            Your use of TypeHindi is also governed by our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            Please read our Privacy Policy to understand how information may be collected, stored and processed when you use our website.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Privacy Policy:</strong>{" "}
            <a
              href="https://www.typehindi.in/privacy-policy"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              https://www.typehindi.in/privacy-policy
            </a>
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 13. Changes to Our Services and Terms */}
        <section className="space-y-3">
          <h2 className="heading-2">13. Changes to Our Services and Terms</h2>
          <p>
            We reserve the right to update, modify or discontinue website features, tools, lessons and other services at any time.
          </p>
          <p>
            We may also revise these Terms &amp; Conditions when our services or applicable requirements change.
          </p>
          <p>
            Updated terms will be published on this page along with a revised Last Updated date.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 14. Governing Law */}
        <section className="space-y-3">
          <h2 className="heading-2">14. Governing Law</h2>
          <p>
            These Terms &amp; Conditions shall be governed by the applicable laws of India.
          </p>
          <p>
            Any disputes arising from the use of TypeHindi shall be subject to the jurisdiction of the competent courts in India.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 15. Contact Us */}
        <section className="space-y-3">
          <h2 className="heading-2">15. Contact Us</h2>
          <p>
            For questions, concerns or clarifications regarding these Terms &amp; Conditions, please contact us through our website.
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
        </section>
      </div>
    </div>
  );
}
