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

      <h1 className="heading-1 mb-6">Disclaimer</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <p><strong>Last Updated:</strong> April 2025</p>

        <h2 className="heading-2">General Disclaimer</h2>
        <p>
          All content, information, software, products, and services available on TypeHindi.in are provided on an "as is" and "as available" basis without warranties or guarantees of any kind. We make no representations or warranties regarding the accuracy, completeness, reliability, or suitability of the information provided on this website.
        </p>

        <h2 className="heading-2">Educational Purpose</h2>
        <p>
          TypeHindi.in is intended solely for educational and practice purposes. The practice paragraphs provided here are based on general knowledge and government examination patterns, and they should be used exclusively for typing practice. We do not guarantee specific exam outcomes.
        </p>

        <h2 className="heading-2">No Guarantee of Results</h2>
        <p>
          While we strive to provide a high-quality practice experience, improvements in typing speed and accuracy depend entirely on individual practice, dedication, and effort. We make no guarantees about achieving a specific WPM speed or passing any typing exam.
        </p>

        <h2 className="heading-2">External Links</h2>
        <p>
          Our website may contain links to third-party websites. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any external sites.
        </p>

        <h2 className="heading-2">Technical Disclaimer</h2>
        <p>
          We cannot guarantee uninterrupted, error-free, or secure operation of the website. Technical issues, browser compatibility, or other factors may cause temporary service interruptions. This website uses localStorage to store your progress, which may be cleared if you delete your browser data.
        </p>

        <h2 className="heading-2">Limitation of Liability</h2>
        <p>
          In no event shall TypeHindi.in, its operators, or contributors be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.
        </p>

        <h2 className="heading-2">Contact</h2>
        <p>
          For any questions regarding this disclaimer, please visit our <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
