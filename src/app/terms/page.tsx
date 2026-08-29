import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms and Conditions - TypeHindi",
  description: "Terms and conditions for using TypeHindi.in Hindi typing practice website.",
};

export default function TermsPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]} />

      <h1 className="heading-1 mb-6">Terms and Conditions</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <p><strong>Last Updated:</strong> April 2025</p>

        <h2 className="heading-2">Acceptance</h2>
        <p>
          By accessing and using the TypeHindi.in website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.
        </p>

        <h2 className="heading-2">Service Description</h2>
        <p>
          TypeHindi.in is a free online Hindi typing practice platform. We offer the following features:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hindi Typing Practice (Practice Mode)</li>
          <li>Learn InScript Keyboard Layout (Learning Mode)</li>
          <li>Hindi Typing Test (Test Mode)</li>
          <li>Typing Games (Game Mode)</li>
        </ul>

        <h2 className="heading-2">Rules of Use</h2>
        <p>You agree that:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You will use the website only for lawful purposes.</li>
          <li>You will not interfere with the normal operation of the website.</li>
          <li>You will not access or scrape the site using automated tools (bots, crawlers).</li>
          <li>You will not redistribute or modify any of the website&apos;s content without prior consent.</li>
        </ul>

        <h2 className="heading-2">Intellectual Property</h2>
        <p>
          All materials available on TypeHindi.in, including text, graphics, logos, software code, and design layout, are the intellectual property of TypeHindi.in or are used under license. Any reproduction, distribution, or modification of this content without prior written permission is strictly prohibited.
        </p>

        <h2 className="heading-2">Data Collection</h2>
        <p>
          For detailed information regarding how we handle, store, and process data, please refer to our <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Privacy Policy</a>.
        </p>

        <h2 className="heading-2">Advertising</h2>
        <p>
          TypeHindi.in may display advertisements provided by third-party networks (e.g., Google AdSense). We do not control or endorse the content of these ads or any linked products/services.
        </p>

        <h2 className="heading-2">Limitation of Liability</h2>
        <p>
          TypeHindi.in and its operators will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website.
        </p>

        <h2 className="heading-2">Changes to Service</h2>
        <p>
          We reserve the right to modify, suspend, or terminate any service, feature, or content on this website at any time without prior notice.
        </p>

        <h2 className="heading-2">Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India.
        </p>

        <h2 className="heading-2">Contact</h2>
        <p>
          If you have any questions regarding these Terms and Conditions, please visit our <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
