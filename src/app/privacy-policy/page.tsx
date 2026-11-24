import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | TypeHindi",
  description:
    "Privacy Policy for TypeHindi.in. Learn what information may be collected when you use our website, how it is used and how it is protected.",
  alternates: {
    canonical: "https://typehindi.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | TypeHindi",
    description:
      "Privacy Policy for TypeHindi.in. Learn what information may be collected when you use our website, how it is used and how it is protected.",
    url: "https://typehindi.in/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <div className="mb-8">
        <h1 className="heading-1 mb-2">Privacy Policy</h1>
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
            ). Your privacy is important to us. This Privacy Policy explains what information may be collected when you use our website, how it is used and how it is protected.
          </p>
          <p>
            By using TypeHindi, you agree to the practices described in this policy.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 1. Information We Collect */}
        <section className="space-y-4">
          <h2 className="heading-2">1. Information We Collect</h2>
          <p>TypeHindi may collect the following information:</p>

          <div className="space-y-2">
            <h3 className="heading-3">Information You Provide</h3>
            <p>When you contact us through our contact form, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Your name.</li>
              <li>Your email address.</li>
              <li>The message or information you provide.</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="heading-3">Automatically Collected Information</h3>
            <p>When you visit our website, certain technical information may be collected, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Browser type and device information.</li>
              <li>IP address.</li>
              <li>Pages visited and general usage information.</li>
              <li>Cookies and similar technologies.</li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 2. Typing Tools and User Data */}
        <section className="space-y-4">
          <h2 className="heading-2">2. Typing Tools and User Data</h2>
          <p>
            TypeHindi provides English, Hindi and other Indian-language typing tools, typing tests, games, learning lessons, shorthand practice and transliteration services.
          </p>
          <p>
            Some features may store information locally in your browser, such as:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Typing speed and best WPM.</li>
            <li>Accuracy and test results.</li>
            <li>Learning progress.</li>
            <li>Game scores.</li>
            <li>Language preferences.</li>
            <li>Website display preferences, including Light Mode and Dark Mode.</li>
          </ul>
          <p>
            This information may be stored using browser technologies such as localStorage.
          </p>
          <p>
            Information stored locally remains in your browser unless a particular feature or external service transmits it elsewhere.
          </p>
          <p>
            Text entered into our typing tools is used to provide the requested functionality. We do not intentionally publish your practice text publicly.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 3. Cookies */}
        <section className="space-y-4">
          <h2 className="heading-2">3. Cookies</h2>
          <p>
            TypeHindi may use cookies and similar technologies to improve website functionality and user experience.
          </p>
          <p>These technologies may be used to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Remember user preferences.</li>
            <li>Maintain website functionality.</li>
            <li>Improve website performance.</li>
            <li>Understand general website usage.</li>
          </ul>
          <p>
            You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website features.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 4. Third-Party Services */}
        <section className="space-y-4">
          <h2 className="heading-2">4. Third-Party Services</h2>
          <p>
            TypeHindi may use third-party services to operate and maintain its website.
          </p>
          <p>These may include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-gray-900 dark:text-white">Formspree:</strong> For processing contact-form submissions.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Google Fonts:</strong> For website typography.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Hosting and security providers:</strong> To deliver and protect the website.
            </li>
          </ul>
          <p>
            These services may process information according to their own privacy policies. We encourage visitors to review the relevant third-party policies.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 5. How We Use Information */}
        <section className="space-y-4">
          <h2 className="heading-2">5. How We Use Information</h2>
          <p>Information collected through TypeHindi may be used to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Operate and maintain website features.</li>
            <li>Improve typing tools and learning experiences.</li>
            <li>Respond to contact requests.</li>
            <li>Understand general website usage.</li>
            <li>Improve website performance and security.</li>
            <li>Identify technical issues and prevent abuse.</li>
          </ul>
          <p>
            We do not sell visitors&apos; personal information as a business practice.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 6. Data Storage and Security */}
        <section className="space-y-3">
          <h2 className="heading-2">6. Data Storage and Security</h2>
          <p>
            We take reasonable measures to protect information associated with our website.
          </p>
          <p>
            Some preferences and typing-related progress may be stored locally in your browser. Contact-form information may be processed and retained by the relevant service provider.
          </p>
          <p>
            No method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 7. Data Retention and Your Choices */}
        <section className="space-y-3">
          <h2 className="heading-2">7. Data Retention and Your Choices</h2>
          <p>
            You can clear locally stored website information by clearing your browser&apos;s site data.
          </p>
          <p>
            If you have contacted us and wish to request access to, correction of or deletion of your personal information, you can contact us through our{" "}
            <Link
              href="/contact"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Contact page
            </Link>
            .
          </p>
          <p>
            We retain information only for as long as reasonably necessary for its intended purpose or applicable requirements.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 8. Children's Privacy */}
        <section className="space-y-3">
          <h2 className="heading-2">8. Children&apos;s Privacy</h2>
          <p>
            TypeHindi is intended for general audiences. We do not knowingly collect personal information from children without appropriate consent where required by applicable law.
          </p>
          <p>
            Parents or guardians who believe that a child has provided personal information through our website can contact us to request its review or deletion.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 9. External Links */}
        <section className="space-y-3">
          <h2 className="heading-2">9. External Links</h2>
          <p>
            Our website may contain links to external websites and services.
          </p>
          <p>
            We are not responsible for the privacy practices, content or security of third-party websites. Visitors should review the privacy policies of those websites before providing personal information.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 10. Your Privacy Rights */}
        <section className="space-y-3">
          <h2 className="heading-2">10. Your Privacy Rights</h2>
          <p>Depending on applicable law, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Request information about personal data associated with you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of eligible personal information.</li>
            <li>Raise concerns about how your information is processed.</li>
          </ul>
          <p>
            You can contact us through our{" "}
            <Link
              href="/contact"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Contact page
            </Link>{" "}
            to make a privacy-related request.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 11. Changes to This Privacy Policy */}
        <section className="space-y-3">
          <h2 className="heading-2">11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy when our website features, services or legal requirements change.
          </p>
          <p>
            Any updates will be published on this page along with a revised Last Updated date.
          </p>
          <p>We encourage visitors to review this page periodically.</p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        {/* 12. Contact Us */}
        <section className="space-y-3">
          <h2 className="heading-2">12. Contact Us</h2>
          <p>
            For questions, concerns or requests relating to this Privacy Policy, please visit:
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
          <p>We will review privacy-related enquiries and respond as appropriate.</p>
          <p className="font-semibold text-gray-900 dark:text-white pt-2">
            Thank you for using TypeHindi.
          </p>
        </section>
      </div>
    </div>
  );
}
