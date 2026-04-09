"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { Keyboard } from "../../components/Keyboard";
import { LessonCard } from "../../components/LessonCard";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { useKeyPress } from "../../hooks/useKeyPress";
import { lessons } from "../../data/lessons";

export default function LearnPage() {
  const { activeKey, isShift } = useKeyPress();

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Learn" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-2">हिंदी टाइपिंग सीखें (Learn Hindi Typing)</h1>
      <p className="text-muted mb-6">
        InScript कीबोर्ड लेआउट को चरणबद्ध तरीके से सीखें। किसी भी कुंजी को दबाकर उसका हिंदी अक्षर देखें।
      </p>

      {/* Interactive Keyboard */}
      <div className="mb-8">
        <h2 className="heading-2 mb-3">इंटरैक्टिव कीबोर्ड (Interactive Keyboard)</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          कोई भी कुंजी दबाएँ — कीबोर्ड पर संबंधित हिंदी अक्षर हाइलाइट होगा। Shift कुंजी दबाकर अतिरिक्त अक्षर देखें।
        </p>
        <Keyboard activeKey={activeKey} isShift={isShift} visible={true} />
      </div>

      {/* Lessons */}
      <h2 className="heading-2 mb-4">पाठ (Lessons)</h2>
      <div className="space-y-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      <AdPlaceholder position="bottom" />

      {/* SEO Content for Learn Page */}
      <section className="mt-10">
        <h2 className="heading-2 mb-4">InScript कीबोर्ड कैसे सीखें?</h2>
        <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-3">
          <p>
            InScript कीबोर्ड सीखने के लिए सबसे पहले कीबोर्ड की संरचना को समझना आवश्यक है। बाईं ओर स्वर (अ, आ, इ, ई आदि) और दाईं ओर व्यंजन (क, ख, ग, घ आदि) व्यवस्थित हैं। सबसे पहले होम रो की कुंजियों से शुरुआत करें। प्रतिदिन 30 मिनट का अभ्यास करें और धीरे-धीरे अन्य पंक्तियों की कुंजियाँ सीखें। मात्राओं का अभ्यास अलग से करें क्योंकि हिंदी में मात्राओं का सही प्रयोग अत्यंत महत्वपूर्ण है।
          </p>
          <p>
            TypeHindi.in पर उपलब्ध पाठ क्रमबद्ध तरीके से आपको स्वर, व्यंजन, मात्राएँ और संयुक्त अक्षर सिखाते हैं। प्रत्येक पाठ में अभ्यास शब्द दिए गए हैं जिन्हें बार-बार टाइप करके आप कीबोर्ड की कुंजियों को याद कर सकते हैं।
          </p>
        </div>
      </section>
    </div>
  );
}
