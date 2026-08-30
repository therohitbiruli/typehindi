"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { PracticeTool } from "../../components/PracticeTool";
import { SEOContent } from "../../components/SEOContent";

export default function MangalFontTestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary-700 pt-4 pb-12 border-b border-primary-800">
        <div className="container-main">
          {/* We need to override the Breadcrumb text color to be visible on dark blue */}
          <div className="text-primary-100">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Mangal Font Typing Test" }]} />
          </div>
          <div className="text-center mt-4 mb-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Mangal Font Hindi Typing Test</h1>
            <p className="text-primary-100">
              Practice online Hindi typing in Mangal Font (InScript Layout) for SSC, CPCT, and Govt Exams.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 border-4 border-primary-500/30 rounded-xl p-2 sm:p-4 shadow-2xl">
            <PracticeTool />
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F4F7FB] dark:bg-gray-900 flex-grow">
        <div className="container-main max-w-5xl">
          <AdPlaceholder position="top" />

          {/* Dedicated Mangal Font SEO Section */}
          <div className="mt-8 mb-8 border border-[#D9E1EC] dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="bg-primary-700 text-white px-5 py-3 border-b border-primary-800">
              <h2 className="text-xl font-bold">What is Mangal Font Typing?</h2>
            </div>
            <div className="p-5 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Unicode and Mangal Font</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mangal is the default Unicode font for Hindi. Almost all official government examinations in India (such as SSC, CPCT, and various State High Court exams) utilize the Mangal font for their computer typing speed tests. The most scientific and recommended keyboard layout for typing in Mangal is the <strong>InScript layout</strong>, which is fully supported by our online tool.
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Preparing for the Online Exam</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This page is designed to simulate realistic exam conditions for Mangal font typing tests. Here, you can accurately track your words-per-minute (WPM) speed and accuracy. Consistent practice on our simulator will help you easily achieve a speed of 40+ WPM.
                </p>
              </div>
            </div>
          </div>

          <AdPlaceholder position="bottom" />
          <div className="mt-8">
            <SEOContent />
          </div>
        </div>
      </section>
    </div>
  );
}
