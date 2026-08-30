import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#D9E1EC] bg-[#EEF2F7] dark:border-gray-800 dark:bg-gray-950">
      <div className="container-main py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-gray-400">
            © {new Date().getFullYear()} TypeHindi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
