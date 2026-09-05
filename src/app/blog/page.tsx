import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogs, getBlogImage } from "../../data/blogs";
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
  searchParams: Promise<{ lang?: string; page?: string }>;
}

const POSTS_PER_PAGE = 13;

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang === "hi" ? "hi" : "en";
  
  const sortedBlogs = [...blogs].sort((a, b) => parseHindiDate(b.date).getTime() - parseHindiDate(a.date).getTime());
  
  const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE) || 1;
  const rawPage = parseInt(resolvedSearchParams.page || "1", 10);
  const currentPage = Math.max(1, Math.min(isNaN(rawPage) ? 1 : rawPage, totalPages));

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedBlogs = sortedBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const getPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (lang === "hi") params.set("lang", "hi");
    if (pageNum > 1) params.set("page", pageNum.toString());
    const query = params.toString();
    return `/blog${query ? `?${query}` : ""}`;
  };

  const getLangUrl = (targetLang: "en" | "hi") => {
    const params = new URLSearchParams();
    if (targetLang === "hi") params.set("lang", "hi");
    if (currentPage > 1) params.set("page", currentPage.toString());
    const query = params.toString();
    return `/blog${query ? `?${query}` : ""}`;
  };

  return (
    <div className="container-main py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <Breadcrumb items={[{ label: lang === "en" ? "Home" : "होम", href: "/" }, { label: lang === "en" ? "Blog" : "ब्लॉग" }]} />
        
        {/* Toggle on the far right */}
        <div className="flex rounded-lg bg-slate-150 dark:bg-slate-800 p-1 text-[11px] font-bold self-end sm:self-auto border border-slate-200 dark:border-slate-700 shadow-sm">
          <Link
            href={getLangUrl("hi")}
            className={`px-3 py-1 rounded-md transition-all ${
              lang === "hi"
                ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            HI
          </Link>
          <Link
            href={getLangUrl("en")}
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

      {/* Blog Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedBlogs.map((blog) => {
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
              {/* Featured Image Thumbnail */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <Image
                  src={getBlogImage(blog)}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{blog.author} · {date}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight line-clamp-2">
                  {title}
                </h2>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {excerpt}
                </p>
                
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm mt-auto">
                  <span>{buttonText}</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Numbered Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
          {/* Previous Button */}
          {currentPage > 1 ? (
            <Link
              href={getPageUrl(currentPage - 1)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-[#D9E1EC] dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>←</span>
              <span>{lang === "en" ? "Previous" : "पिछला"}</span>
            </Link>
          ) : (
            <span className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800/60 cursor-not-allowed flex items-center gap-1.5">
              <span>←</span>
              <span>{lang === "en" ? "Previous" : "पिछला"}</span>
            </span>
          )}

          {/* Page Numbers */}
          <div className="flex items-center gap-1.5 mx-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === currentPage;
              return (
                <Link
                  key={pageNum}
                  href={getPageUrl(pageNum)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-10 h-10 rounded-xl text-sm font-bold flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-primary-600 text-white shadow-md shadow-primary-500/25 pointer-events-none"
                      : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-[#D9E1EC] dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 shadow-sm"
                  }`}
                >
                  {pageNum}
                </Link>
              );
            })}
          </div>

          {/* Next Button */}
          {currentPage < totalPages ? (
            <Link
              href={getPageUrl(currentPage + 1)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-[#D9E1EC] dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>{lang === "en" ? "Next" : "अगला"}</span>
              <span>→</span>
            </Link>
          ) : (
            <span className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800/60 cursor-not-allowed flex items-center gap-1.5">
              <span>{lang === "en" ? "Next" : "अगला"}</span>
              <span>→</span>
            </span>
          )}
        </nav>
      )}

      <AdPlaceholder position="bottom" />
    </div>
  );
}
