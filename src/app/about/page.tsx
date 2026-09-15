import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export const metadata: Metadata = {
  title: "About TypeHindi - Free Hindi Typing Practice Platform",
  description: "Learn about TypeHindi.in - a free online Hindi typing practice platform for students preparing for SSC, CGL, CHSL and other government exams.",
};

export default function AboutPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <AdPlaceholder position="top" />

      <div className="mb-8">
        <h1 className="heading-1 mb-2">About TypeHindi</h1>
        <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">
          Learn more about our mission, tools, and technical features for Hindi typing mastery.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-lg space-y-8 text-gray-600 dark:text-gray-300">
        <section className="space-y-3">
          <h2 className="heading-2">Our Mission</h2>
          <p className="leading-relaxed">
            TypeHindi.in is a free online Hindi typing practice platform designed to help students and office professionals learn and master Hindi typing on the InScript keyboard layout. Our mission is to make Hindi typing simple, accessible, and highly effective for everyone.
          </p>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">What We Offer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-gray-900 dark:text-white">Practice Mode:</strong> Typing practice with multiple Hindi paragraphs categorized by difficulty levels (Easy, Medium, Hard). Includes real-time WPM, accuracy, and error tracking.</li>
            <li><strong className="text-gray-900 dark:text-white">Learning Mode:</strong> Step-by-step interactive lessons covering vowels, consonants, matras, and conjunct characters. Features a live virtual keyboard with visual guidance for each key.</li>
            <li><strong className="text-gray-900 dark:text-white">Test Mode:</strong> Timed test simulations patterned after SSC and other government typing tests, complete with detailed performance reports.</li>
            <li><strong className="text-gray-900 dark:text-white">Game Mode:</strong> Engaging typing games that help build finger muscle memory while making learning fun.</li>
            <li><strong className="text-gray-900 dark:text-white">Daily Challenge:</strong> Track your daily progress and challenge yourself with new typing prompts every day.</li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Who Is This For?</h2>
          <p className="leading-relaxed">TypeHindi.in is especially useful for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Candidates preparing for SSC CGL, CHSL, and MTS exams.</li>
            <li>Aspirants preparing for Railway Recruitment Board (RRB) exams.</li>
            <li>Government office employees who work in Hindi.</li>
            <li>Hindi journalists, content writers, and bloggers.</li>
            <li>Anyone wishing to learn touch typing in Hindi.</li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Technical Features</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-gray-900 dark:text-white">100% Client-Side:</strong> Everything runs directly inside your browser with no remote server calls.</li>
            <li><strong className="text-gray-900 dark:text-white">No Registration Needed:</strong> Start typing instantly without creating an account.</li>
            <li><strong className="text-gray-900 dark:text-white">Private Data:</strong> Your typing history and settings are stored locally on your device (localStorage).</li>
            <li><strong className="text-gray-900 dark:text-white">Fast & Responsive:</strong> Light build for rapid loading and compatibility across devices.</li>
            <li><strong className="text-gray-900 dark:text-white">Cross-Device Support:</strong> Fully optimized for mobile phones, tablets, and desktops.</li>
            <li><strong className="text-gray-900 dark:text-white">Dark Mode Support:</strong> Switch between light and dark themes at any time.</li>
          </ul>
        </section>

        <hr className="border-gray-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="heading-2">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any feedback, questions, or suggestions, please visit our <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium underline underline-offset-2">Contact Page</a>. We appreciate your input and constantly strive to improve our platform.
          </p>
        </section>
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
