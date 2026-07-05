import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "हमारे बारे में" },
  { href: "/resources", label: "संसाधन" },
  { href: "/blog", label: "ब्लॉग" },
  { href: "/contact", label: "संपर्क करें" },
  { href: "/privacy-policy", label: "गोपनीयता नीति" },
  { href: "/disclaimer", label: "अस्वीकरण" },
  { href: "/terms", label: "शर्तें" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 dark:border-slate-900 dark:bg-black">
      <div className="container-main py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-600">
            © {new Date().getFullYear()} TypeHindi. सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
}
