import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogs, getBlogImage, parseBlogDate } from "../../data/blogs";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";
import { getPaginationItems } from "../../utils/pagination";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://typehindi.in/blog",
  },
  title: "Hindi Typing Articles & Guides | TypeHindi Blog",
  description: "Read the latest articles on Hindi typing, SSC exam strategies, Stenography tips, and InScript keyboard guides.",
};



interface PageProps {
  searchParams: Promise<{ lang?: string; page?: string }>;
}

const POSTS_PER_PAGE = 13;

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang === "hi" ? "hi" : "en";
  
  const sortedBlogs = [...blogs].sort((a, b) => parseBlogDate(b).getTime() - parseBlogDate(a).getTime());
  
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
        <div className="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 text-[11px] font-bold self-end sm:self-auto border border-[#B8C7DA] dark:border-slate-700 shadow-sm">
          <Link
            href={getLangUrl("hi")}
            className={`px-3 py-1 rounded-md transition-all ${
              lang === "hi"
                ? "bg-white dark:bg-slate-900 text-[#17243A] dark:text-white shadow-sm"
                : "text-[#475569] hover:text-[#17243A] dark:text-gray-400 dark:hover:text-white font-medium"
            }`}
          >
            HI
          </Link>
          <Link
            href={getLangUrl("en")}
            className={`px-3 py-1 rounded-md transition-all ${
              lang === "en"
                ? "bg-white dark:bg-slate-900 text-[#17243A] dark:text-white shadow-sm"
                : "text-[#475569] hover:text-[#17243A] dark:text-gray-400 dark:hover:text-white font-medium"
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
        <p className="text-lg text-[#475569] dark:text-gray-300 max-w-2xl mx-auto font-medium">
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
              className="group flex flex-col h-full bg-white dark:bg-gray-900 border border-[#CBD5E1] hover:border-[#8FA6C5] dark:border-gray-700 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 dark:hover:border-primary-600"
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
                  <span className="text-xs font-semibold text-[#64748B] dark:text-gray-400">{blog.author} · {date}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-[#17243A] dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight line-clamp-2">
                  {title}
                </h2>
                
                <p className="text-[#475569] dark:text-gray-300 text-sm font-medium line-clamp-3 mb-6 flex-grow leading-relaxed">
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
        <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
          {/* Previous Button */}
          {currentPage > 1 ? (
            <Link
              href={getPageUrl(currentPage - 1)}
              className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-[#B8C7DA] hover:border-[#8FA6C5] dark:border-gray-800 dark:hover:border-primary-600 shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>←</span>
              <span>{lang === "en" ? "Previous" : "पिछला"}</span>
            </Link>
          ) : (
            <span className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#64748B] opacity-50 dark:text-gray-600 bg-slate-100 dark:bg-gray-800/40 border border-[#CBD5E1] dark:border-gray-800/60 cursor-not-allowed flex items-center gap-1.5">
              <span>←</span>
              <span>{lang === "en" ? "Previous" : "पिछला"}</span>
            </span>
          )}

          {/* Page Numbers */}
          <div className="flex items-center gap-1 sm:gap-1.5 mx-1">
            {getPaginationItems(currentPage, totalPages).map((item, idx) => {
              if (item === "...") {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="w-7 h-9 sm:w-9 sm:h-10 flex items-center justify-center font-bold text-[#64748B] dark:text-gray-400 select-none text-xs sm:text-sm"
                  >
                    …
                  </span>
                );
              }

              const isActive = item === currentPage;
              return (
                <Link
                  key={item}
                  href={getPageUrl(item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-8 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-primary-600 text-white shadow-md shadow-primary-500/25 pointer-events-none"
                      : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-[#B8C7DA] hover:border-[#8FA6C5] dark:border-gray-800 dark:hover:border-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Next Button */}
          {currentPage < totalPages ? (
            <Link
              href={getPageUrl(currentPage + 1)}
              className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-[#B8C7DA] hover:border-[#8FA6C5] dark:border-gray-800 dark:hover:border-primary-600 shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>{lang === "en" ? "Next" : "अगला"}</span>
              <span>→</span>
            </Link>
          ) : (
            <span className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#64748B] opacity-50 dark:text-gray-600 bg-slate-100 dark:bg-gray-800/40 border border-[#CBD5E1] dark:border-gray-800/60 cursor-not-allowed flex items-center gap-1.5">
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
