import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
