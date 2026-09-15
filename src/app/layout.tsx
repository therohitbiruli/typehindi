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
    "Free online Hindi typing practice with Mangal Font (InScript keyboard layout). Improve your Hindi typing speed for SSC, CGL, CHSL exams. Real-time WPM tracking, lessons, and typing games.",
  keywords: [
    "mangal font hindi typing test",
    "online hindi typing test mangal font",
    "hindi mangal typing test",
    "hindi typing tutor mangal font",
    "hindi typing test online mangal font",
    "Hindi typing practice",
    "InScript keyboard",
    "Hindi typing test",
    "SSC typing test",
    "Hindi typing speed",
    "free Hindi typing",
    "हिंदी टाइपिंग अभ्यास",
    "इंस्क्रिप्ट कीबोर्ड",
    "मंगल फॉन्ट टाइपिंग"
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

import { FloatingTranslator } from "../components/FloatingTranslator";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TypeHindi",
  "url": "https://typehindi.in",
  "description": "The ultimate Hindi typing platform with Mangal Font & InScript keyboard layout, typing tests, and WPM tracking.",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8194925511868451"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J3ZJWHC5EG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J3ZJWHC5EG');
          `}
        </Script>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingTranslator />
        </ThemeProvider>
      </body>
    </html>
  );
}
