import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translators & Native Indian Typing Tools | TypeHindi.in",
  description: "Free English to native Indian languages transliteration tools. Type in Punjabi, Marathi, Gujarati, Tamil, Telugu, Bengali, Santhali, and more.",
  keywords: "english to punjabi typing, english to marathi typing, english to santhali typing, transliteration, font converter, indian language typing",
};

export default function TranslatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] dark:bg-gray-950">
      <section className="bg-gradient-to-r from-[#4A8D9B] to-[#D59850] pt-12 pb-16 border-b border-gray-300">
        <div className="container-main px-4 text-center text-white">
          <h1 className="text-3xl font-light tracking-wide mb-2">Native Indian Language Translators</h1>
          <p className="text-sm font-light opacity-90 max-w-2xl mx-auto">
            Easily type in your native regional language. Convert English text to native Indian fonts instantly.
          </p>
        </div>
      </section>
      
      <div className="container-main px-4 py-8">
        {children}
      </div>
    </div>
  );
}
