import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://typehindi.in"),
  title: {
    default: "TypeHindi - Free Hindi Typing Practice | InScript Keyboard",
    template: "%s | TypeHindi",
  },
  description:
    "Free online Hindi typing practice with InScript keyboard layout. Improve your Hindi typing speed for SSC, CGL, CHSL exams. Real-time WPM tracking, lessons, and typing games.",
  keywords: [
    "Hindi typing practice",
    "InScript keyboard",
    "Hindi typing test",
    "SSC typing test",
    "Hindi typing speed",
    "free Hindi typing",
    "हिंदी टाइपिंग अभ्यास",
    "इंस्क्रिप्ट कीबोर्ड",
  ],
  openGraph: {
    title: "TypeHindi - Free Hindi Typing Practice",
    description: "Practice Hindi typing with InScript keyboard layout. Track WPM, accuracy, and improve your typing speed.",
    url: "https://typehindi.in",
    siteName: "TypeHindi",
    locale: "hi_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://typehindi.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TypeHindi",
  "url": "https://typehindi.in",
  "description": "The ultimate Hindi typing platform with InScript keyboard layout, games, and WPM tracking.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://typehindi.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansDevanagari.variable}`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4896208582090133"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
