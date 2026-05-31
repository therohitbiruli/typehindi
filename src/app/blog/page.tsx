import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "../../data/blogs";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Hindi Typing Articles & Guides | TypeHindi Blog",
  description: "Read the latest articles on Hindi typing, SSC exam strategies, Stenography tips, and InScript keyboard guides.",
};

export default function BlogPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <AdPlaceholder position="top" />

      <div className="mb-10 text-center">
        <h1 className="heading-1 mb-3">हिंदी टाइपिंग लेख और मार्गदर्शिकाएँ</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          अपनी टाइपिंग गति सुधारने और सरकारी परीक्षाओं में सफल होने के लिए हमारे विशेषज्ञों द्वारा लिखे गए विस्तृत लेख पढ़ें।
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link 
            key={blog.slug} 
            href={`/learn/${blog.slug}`}
            className="group flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                  {blog.category}
                </span>
                <span className="text-xs text-gray-400">{blog.date}</span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors leading-tight">
                {blog.title}
              </h2>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm">
                पूरा लेख पढ़ें <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
