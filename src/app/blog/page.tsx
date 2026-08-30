import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "../../data/blogs";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Hindi Typing Articles & Guides | TypeHindi Blog",
  description: "Read the latest articles on Hindi typing, SSC exam strategies, Stenography tips, and InScript keyboard guides.",
};

const HINDI_MONTHS: Record<string, number> = {
  "जनवरी": 0, "फरवरी": 1, "मार्च": 2, "अप्रैल": 3, "मई": 4, "जून": 5,
  "जुलाई": 6, "अगस्त": 7, "सितंबर": 8, "अक्टूबर": 9, "नवंबर": 10, "दिसंबर": 11
};

function parseHindiDate(dateStr: string): Date {
  const clean = dateStr.replace(",", "");
  const parts = clean.split(/\s+/);
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = HINDI_MONTHS[parts[1]] ?? 0;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  return new Date(0);
}

interface PageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang === "hi" ? "hi" : "en";
  
  const sortedBlogs = [...blogs].sort((a, b) => parseHindiDate(b.date).getTime() - parseHindiDate(a.date).getTime());

  return (
    <div className="container-main py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <Breadcrumb items={[{ label: lang === "en" ? "Home" : "होम", href: "/" }, { label: lang === "en" ? "Blog" : "ब्लॉग" }]} />
        
        {/* Toggle on the far right */}
        <div className="flex rounded-lg bg-slate-150 dark:bg-slate-800 p-1 text-[11px] font-bold self-end sm:self-auto border border-slate-200 dark:border-slate-700 shadow-sm">
          <Link
            href="/blog?lang=hi"
            className={`px-3 py-1 rounded-md transition-all ${
              lang === "hi"
                ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            HI
          </Link>
          <Link
            href="/blog"
            className={`px-3 py-1 rounded-md transition-all ${
              lang === "en"
                ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            EN
          </Link>
        </div>
      </div>

      <AdPlaceholder position="top" />

      <div className="mb-10 text-center">
        <h1 className="heading-1 mb-3">
          {lang === "en" ? "Hindi Typing Articles and Guides" : "हिंदी टाइपिंग लेख और मार्गदर्शिकाएँ"}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {lang === "en" 
            ? "Read detailed articles written by our experts to improve your typing speed and crack government exams."
            : "अपनी टाइपिंग गति सुधारने और सरकारी परीक्षाओं में सफल होने के लिए हमारे विशेषज्ञों द्वारा लिखे गए विस्तृत लेख पढ़ें।"}
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.map((blog) => {
          const title = lang === "en" && blog.titleEn ? blog.titleEn : blog.title;
          const excerpt = lang === "en" && blog.excerptEn ? blog.excerptEn : blog.excerpt;
          const date = lang === "en" && blog.dateEn ? blog.dateEn : blog.date;
          const buttonText = lang === "en" ? "Read full article" : "पूरा लेख पढ़ें";

          return (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}${lang === "hi" ? "?lang=hi" : ""}`}
              className="group flex flex-col h-full bg-white dark:bg-gray-900 border border-[#D9E1EC] dark:border-gray-700 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:border-primary-400/60 hover:-translate-y-1 dark:hover:border-primary-600"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400">{date}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors leading-tight line-clamp-3">
                  {title}
                </h2>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                  {excerpt}
                </p>
                
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm">
                  {buttonText} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
