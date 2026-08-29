import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - TypeHindi",
  description: "Privacy policy for TypeHindi.in. Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <h1 className="heading-1 mb-6">Privacy Policy</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <p><strong>Last Updated:</strong> April 2026</p>

        <h2 className="heading-2">Introduction</h2>
        <p>
          TypeHindi.in ("we", "us", "our", "website") respects your privacy. This Privacy Policy outlines what information we collect, how we use it, and how we protect it when you use our website.
        </p>

        <h2 className="heading-2">Information We Collect</h2>
        <h3 className="heading-3">Local Storage</h3>
        <p>
          TypeHindi.in stores the following data in your browser's localStorage:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your best typing speed (Best WPM)</li>
          <li>Last test scores</li>
          <li>Theme preferences (Light/Dark Mode)</li>
        </ul>
        <p>
          This data remains strictly inside your browser and is never transmitted to our servers. You can clear this data at any time through your browser settings.
        </p>

        <h3 className="heading-3">Contact Form</h3>
        <p>
          When you fill out our contact form, your name, email address, and message are securely transmitted to us via the Formspree.io service. We use this information solely to respond to your inquiry.
        </p>

        <h3 className="heading-3">Cookies & Advertising</h3>
        <p>
          We use third-party advertising companies like Google AdSense to serve ads on TypeHindi.in. Google, as a third-party vendor, uses cookies to serve ads on our site.
        </p>
        <p>
          Google's use of the DoubleClick DART cookie enables it and its partners to serve ads to our users based on their visits to our site and other sites on the internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:outline-none underline">Google Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:outline-none underline">www.aboutads.info</a>.
        </p>

        <h2 className="heading-2">Data Security</h2>
        <p>
          We implement reasonable technical and organizational security measures to safeguard your information. Since most data is stored locally in your browser, its security depends on the security of your own device.
        </p>

        <h2 className="heading-2">Third-Party Services</h2>
        <p>We use the following third-party services on our platform:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Google AdSense:</strong> for serving advertisements</li>
          <li><strong>Formspree:</strong> for processing contact form messages</li>
          <li><strong>Google Fonts:</strong> for loading website typography</li>
        </ul>

        <h2 className="heading-2">Children&apos;s Privacy</h2>
        <p>
          Our website is suitable for all age groups. We do not knowingly collect personal information from children under the age of 13.
        </p>

        <h2 className="heading-2">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted directly on this page. We encourage you to review this page periodically.
        </p>

        <h2 className="heading-2">Contact</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please visit our <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
