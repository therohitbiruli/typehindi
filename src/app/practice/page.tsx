"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { PracticeTool } from "../../components/PracticeTool";
import { SEOContent } from "../../components/SEOContent";

export default function PracticePage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Practice" }]} />

      <AdPlaceholder position="top" />

      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="heading-1 mb-2">Hindi Typing Practice</h1>
        <p className="text-muted">
          Practice Hindi typing on the InScript keyboard layout and improve your speed.
        </p>
      </div>

      {/* Practice Tool */}
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border-2 border-gray-300 dark:border-gray-700">
        <PracticeTool autoFocus={true} />
      </div>

      <AdPlaceholder position="bottom" />

      {/* Practice Strategy Section */}
      <section className="mt-12 mb-12 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/30">
        <h2 className="text-2xl font-bold mb-4">Stenography & LDC Practice Strategy</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">Typing Practice for Shorthand</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A stenographer must not only write shorthand but also type rapidly. We suggest that you type your written dictation into the "Practice" box here. This will significantly improve your transcription speed.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400">Choosing the Right Keyboard</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              In government exams, you often get mechanical keyboards or keyboards with stiffer keys. Try to practice on various types of keyboards at home so your fingers are adapted to any testing environment.
            </p>
          </div>
        </div>
      </section>

      {/* Multilingual Typing Practice Hub */}
      <section className="mt-12 mb-12 bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Practice Typing in Other Languages
          </h2>
          <p className="text-xs text-slate-400">
            Select your language below for dedicated passages, verified InScript keyboard layouts, and state exam test simulators.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: "English", native: "English", slug: "english-typing", symbol: "En" },
            { name: "Hindi", native: "हिंदी", slug: "hindi-typing", symbol: "अ" },
            { name: "Marathi", native: "मराठी", slug: "marathi-typing", symbol: "म" },
            { name: "Punjabi", native: "ਪੰਜਾਬੀ", slug: "punjabi-typing", symbol: "ਪ" },
            { name: "Tamil", native: "தமிழ்", slug: "tamil-typing", symbol: "த" },
            { name: "Bengali", native: "বাংলা", slug: "bengali-typing", symbol: "ব" },
          ].map((item) => (
            <a
              key={item.slug}
              href={`/practice/${item.slug}`}
              className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-primary-500/50 transition-all text-center flex flex-col items-center justify-center group hover:-translate-y-0.5 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-400 font-bold flex items-center justify-center text-base mb-2 group-hover:scale-110 transition-transform">
                {item.symbol}
              </div>
              <span className="font-bold text-xs text-slate-200 group-hover:text-primary-400 transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-500 font-normal">
                {item.native}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <SEOContent />
    </div>
  );
}
