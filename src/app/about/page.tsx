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

      <h1 className="heading-1 mb-6">About TypeHindi</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <h2 className="heading-2">Our Mission</h2>
        <p>
          TypeHindi.in is a free online Hindi typing practice platform designed to help students and office professionals learn and master Hindi typing on the InScript keyboard layout. Our mission is to make Hindi typing simple, accessible, and highly effective for everyone.
        </p>

        <h2 className="heading-2 mt-6">What We Offer</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Practice Mode:</strong> Typing practice with multiple Hindi paragraphs categorized by difficulty levels (Easy, Medium, Hard). Includes real-time WPM, accuracy, and error tracking.</li>
          <li><strong>Learning Mode:</strong> Step-by-step interactive lessons covering vowels, consonants, matras, and conjunct characters. Features a live virtual keyboard with visual guidance for each key.</li>
          <li><strong>Test Mode:</strong> Timed test simulations patterned after SSC and other government typing tests, complete with detailed performance reports.</li>
          <li><strong>Game Mode:</strong> Engaging typing games that help build finger muscle memory while making learning fun.</li>
          <li><strong>Daily Challenge:</strong> Track your daily progress and challenge yourself with new typing prompts every day.</li>
        </ul>

        <h2 className="heading-2 mt-6">Who Is This For?</h2>
        <p>TypeHindi.in is especially useful for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Candidates preparing for SSC CGL, CHSL, and MTS exams.</li>
          <li>Aspirants preparing for Railway Recruitment Board (RRB) exams.</li>
          <li>Government office employees who work in Hindi.</li>
          <li>Hindi journalists, content writers, and bloggers.</li>
          <li>Anyone wishing to learn touch typing in Hindi.</li>
        </ul>

        <h2 className="heading-2 mt-6">Technical Features</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>100% Client-Side:</strong> Everything runs directly inside your browser with no remote server calls.</li>
          <li><strong>No Registration Needed:</strong> Start typing instantly without creating an account.</li>
          <li><strong>Private Data:</strong> Your typing history and settings are stored locally on your device (localStorage).</li>
          <li><strong>Fast & Responsive:</strong> Light build for rapid loading and compatibility across devices.</li>
          <li><strong>Cross-Device Support:</strong> Fully optimized for mobile phones, tablets, and desktops.</li>
          <li><strong>Dark Mode Support:</strong> Switch between light and dark themes at any time.</li>
        </ul>

        <h2 className="heading-2 mt-6">Contact Us</h2>
        <p>
          If you have any feedback, questions, or suggestions, please visit our <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">Contact Page</a>. We appreciate your input and constantly strive to improve our platform.
        </p>
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
