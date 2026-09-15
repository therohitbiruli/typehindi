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

      <div className="mb-8">
        <h1 className="heading-1 mb-2">Contact Us</h1>
        <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">
          Have feedback, questions, or suggestions? We would love to hear from you.
        </p>
      </div>

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
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
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
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
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
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
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
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
                placeholder="Your Message..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500 dark:text-slate-400">
            * Marked fields are mandatory. We typically respond to emails within 24-48 hours.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="heading-3 mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="rounded-lg bg-primary-50 p-2 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <a href="mailto:typehindi@support.com" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline underline-offset-2 transition-colors">
                      typehindi@support.com
                    </a>
                  </p>
                </div>
              </div>

              <hr className="border-gray-100 dark:border-slate-800/80" />

              <div className="flex items-start gap-3.5">
                <div className="rounded-lg bg-primary-50 p-2 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Response Time</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">24-48 hours (during business days)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="heading-3 mb-4">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4 divide-y divide-gray-100 dark:divide-slate-800/80">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Is TypeHindi free to use?
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, TypeHindi is completely free and no registration or sign-up is required to use the tools.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Can I use it on a mobile device?
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, TypeHindi is mobile-responsive. However, for the best learning experience, using a computer/laptop and a physical keyboard is highly recommended.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Is my data secure?
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
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
