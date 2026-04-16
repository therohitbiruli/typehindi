"use client";

import { Breadcrumb } from "../../components/Breadcrumb";
import { Keyboard } from "../../components/Keyboard";
import { LessonCard } from "../../components/LessonCard";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { useKeyPress } from "../../hooks/useKeyPress";
import Link from "next/link";
import { lessons } from "../../data/lessons";
import { blogs } from "../../data/blogs";

export default function LearnPage() {
  const { activeKey, isShift } = useKeyPress();

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Learn" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-2">हिंदी टाइपिंग सीखें (Learn Hindi Typing)</h1>
      <p className="text-muted mb-8">
        InScript कीबोर्ड लेआउट को चरणबद्ध तरीके से सीखें और अपनी टाइपिंग गति बढ़ाने के लिए हमारे विशेषज्ञों द्वारा लिखे गए लेख पढ़ें।
      </p>

      {/* Interactive Keyboard */}
      <div className="mb-12">
        <h2 className="heading-2 mb-3">इंटरैक्टिव कीबोर्ड (Interactive Keyboard)</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          कोई भी कुंजी दबाएँ — कीबोर्ड पर संबंधित हिंदी अक्षर हाइलाइट होगा। Shift कुंजी दबाकर अतिरिक्त अक्षर देखें।
        </p>
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <Keyboard activeKey={activeKey} isShift={isShift} visible={true} />
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Left Column: Lessons */}
        <div className="lg:col-span-2">
          <h2 className="heading-2 mb-6 flex items-center gap-2">
            <span>📚</span> पाठ और अभ्यास (Lessons)
          </h2>
          <div className="space-y-6">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>

        {/* Right Column: Blogs/Articles */}
        <div>
          <h2 className="heading-2 mb-6 flex items-center gap-2">
            <span>📰</span> लेख और मार्गदर्शिकाएँ (Guides)
          </h2>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Link 
                key={blog.slug} 
                href={`/learn/${blog.slug}`}
                className="block group"
              >
                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 transition-all hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 block">
                    {blog.category}
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
