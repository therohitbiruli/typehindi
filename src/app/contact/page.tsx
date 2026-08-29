import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Contact Us - TypeHindi",
  description: "Contact the TypeHindi team for feedback, suggestions, or queries about Hindi typing practice.",
};

export default function ContactPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-6">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="card">
          <h2 className="heading-3 mb-4">Send Us a Message</h2>
          <form
            action="https://formspree.io/f/xeepwagl"
            method="POST"
            className="space-y-4"
            id="contact-form"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-900"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-900"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-900"
                placeholder="Message Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-900"
                placeholder="Your Message..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
            * Marked fields are mandatory. We typically respond to emails within 24-48 hours.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="heading-3 mb-3">Other Ways to Reach Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-primary-500">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">contact.typehindi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-primary-500">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Response Time</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">24-48 hours (during business days)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="heading-3 mb-3">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Is TypeHindi free to use?
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Yes, TypeHindi is completely free and no registration or sign-up is required to use the tools.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Can I use it on a mobile device?
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Yes, TypeHindi is mobile-responsive. However, for the best learning experience, using a computer/laptop and a physical keyboard is highly recommended.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Is my data secure?
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Yes, TypeHindi is entirely client-side. Your progress and typing data are saved only on your local device (localStorage) and never transmitted to our servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
