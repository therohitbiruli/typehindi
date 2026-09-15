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

      <div className="mb-8">
        <h1 className="heading-1 mb-2">Privacy Policy</h1>
        <div className="inline-block rounded-md bg-gray-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-slate-300">
          Last Updated: April 2026
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300">
        <section className="space-y-3">
          <h2 className="heading-2">Introduction</h2>
          <p className="leading-relaxed">
            TypeHindi.in (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, &quot;website&quot;) respects your privacy. This Privacy Policy outlines what information we collect, how we use it, and how we protect it when you use our website.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-4">
          <h2 className="heading-2">Information We Collect</h2>
          
          <div className="space-y-2">
            <h3 className="heading-3">Local Storage</h3>
            <p className="leading-relaxed">
              TypeHindi.in stores the following data in your browser&apos;s localStorage:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Your best typing speed (Best WPM)</li>
              <li>Last test scores</li>
              <li>Theme preferences (Light/Dark Mode)</li>
            </ul>
            <p className="leading-relaxed text-sm text-gray-500 dark:text-slate-400">
              This data remains strictly inside your browser and is never transmitted to our servers. You can clear this data at any time through your browser settings.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="heading-3">Contact Form</h3>
            <p className="leading-relaxed">
              When you fill out our contact form, your name, email address, and message are securely transmitted to us via the Formspree.io service. We use this information solely to respond to your inquiry.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="heading-3">Cookies & Advertising</h3>
            <p className="leading-relaxed">
              We use third-party advertising companies like Google AdSense to serve ads on TypeHindi.in. Google, as a third-party vendor, uses cookies to serve ads on our site.
            </p>
            <p className="leading-relaxed">
              Google&apos;s use of the DoubleClick DART cookie enables it and its partners to serve ads to our users based on their visits to our site and other sites on the internet.
            </p>
            <p className="leading-relaxed">
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com/authenticated"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline underline-offset-2 transition-colors font-medium"
              >
                Google Ad Settings
              </a>
              . Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline underline-offset-2 transition-colors font-medium"
              >
                www.aboutads.info
              </a>
              .
            </p>
          </div>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Data Security</h2>
          <p className="leading-relaxed">
            We implement reasonable technical and organizational security measures to safeguard your information. Since most data is stored locally in your browser, its security depends on the security of your own device.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Third-Party Services</h2>
          <p className="leading-relaxed">We use the following third-party services on our platform:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-gray-900 dark:text-white">Google AdSense:</strong> for serving advertisements</li>
            <li><strong className="text-gray-900 dark:text-white">Formspree:</strong> for processing contact form messages</li>
            <li><strong className="text-gray-900 dark:text-white">Google Fonts:</strong> for loading website typography</li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Children&apos;s Privacy</h2>
          <p className="leading-relaxed">
            Our website is suitable for all age groups. We do not knowingly collect personal information from children under the age of 13.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted directly on this page. We encourage you to review this page periodically.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Contact</h2>
          <p className="leading-relaxed">
            If you have any questions regarding this Privacy Policy, please visit our{" "}
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
