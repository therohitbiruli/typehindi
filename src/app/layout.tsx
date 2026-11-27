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
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.typehindi.in"),
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
    url: "https://www.typehindi.in",
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
    canonical: "https://www.typehindi.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.typehindi.in/#website",
      "name": "TypeHindi",
      "url": "https://www.typehindi.in",
      "description": "Free online Hindi and Indian-language typing platform with Mangal Font, InScript & Remington GAIL keyboard layouts, typing tests, and WPM tracking.",
      "publisher": {
        "@id": "https://www.typehindi.in/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.typehindi.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.typehindi.in/#organization",
      "name": "TypeHindi",
      "url": "https://www.typehindi.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.typehindi.in/logo.png"
      },
      "email": "contact@typehindi.in",
      "founder": {
        "@type": "Person",
        "name": "Rohit Biruli",
        "url": "https://www.typehindi.in/author/rohit-biruli"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "contact@typehindi.in",
        "url": "https://www.typehindi.in/contact"
      }
    }
  ]
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
          type="application/ld+json" suppressHydrationWarning
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
        </ThemeProvider>
      </body>
    </html>
  );
}
