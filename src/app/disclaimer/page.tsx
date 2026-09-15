import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer - TypeHindi",
  description: "Disclaimer for TypeHindi.in Hindi typing practice website.",
};

export default function DisclaimerPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />

      <div className="mb-8">
        <h1 className="heading-1 mb-2">Disclaimer</h1>
        <div className="inline-block rounded-md bg-gray-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-slate-300">
          Last Updated: April 2025
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300">
        <section className="space-y-3">
          <h2 className="heading-2">General Disclaimer</h2>
          <p className="leading-relaxed">
            All content, information, software, products, and services available on TypeHindi.in are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties or guarantees of any kind. We make no representations or warranties regarding the accuracy, completeness, reliability, or suitability of the information provided on this website.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Educational Purpose</h2>
          <p className="leading-relaxed">
            TypeHindi.in is intended solely for educational and practice purposes. The practice paragraphs provided here are based on general knowledge and government examination patterns, and they should be used exclusively for typing practice. We do not guarantee specific exam outcomes.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">No Guarantee of Results</h2>
          <p className="leading-relaxed">
            While we strive to provide a high-quality practice experience, improvements in typing speed and accuracy depend entirely on individual practice, dedication, and effort. We make no guarantees about achieving a specific WPM speed or passing any typing exam.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">External Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to third-party websites. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any external sites.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Technical Disclaimer</h2>
          <p className="leading-relaxed">
            We cannot guarantee uninterrupted, error-free, or secure operation of the website. Technical issues, browser compatibility, or other factors may cause temporary service interruptions. This website uses localStorage to store your progress, which may be cleared if you delete your browser data.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Limitation of Liability</h2>
          <p className="leading-relaxed">
            In no event shall TypeHindi.in, its operators, or contributors be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Contact</h2>
          <p className="leading-relaxed">
            For any questions regarding this disclaimer, please visit our{" "}
            <a
              href="/contact"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline underline-offset-2 font-medium transition-colors"
            >
              Contact Page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
