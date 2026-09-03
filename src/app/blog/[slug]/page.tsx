import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "../../../data/blogs";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang === "en" ? "en" : "hi";
  
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found" };

  const title = lang === "en" && blog.titleEn ? blog.titleEn : blog.title;
  const excerpt = lang === "en" && blog.excerptEn ? blog.excerptEn : blog.excerpt;

  return {
    title: `${title} | TypeHindi`,
    description: excerpt,
    openGraph: {
      title: title,
      description: excerpt,
      type: "article",
      publishedTime: lang === "en" && blog.dateEn ? blog.dateEn : blog.date,
      authors: [blog.author],
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang === "hi" ? "hi" : "en";

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const title = lang === "en" && blog.titleEn ? blog.titleEn : blog.title;
  const date = lang === "en" && blog.dateEn ? blog.dateEn : blog.date;
  const content = lang === "en" && blog.contentEn ? blog.contentEn : blog.content;
  const showTranslateWidget = lang === "en" && !blog.contentEn;

  // Filter out current blog and get 4 related posts (same category prioritized)
  const relatedBlogs = blogs
    .filter((b) => b.slug !== slug)
    .sort((a, b) => {
      if (a.category === blog.category && b.category !== blog.category) return -1;
      if (b.category === blog.category && a.category !== blog.category) return 1;
      return 0;
    })
    .slice(0, 4);

  return (
    <div className="container-main py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <Breadcrumb
          items={[
            { label: lang === "en" ? "Home" : "होम", href: "/" },
            { label: lang === "en" ? "Blog" : "ब्लॉग", href: "/blog" },
            { label: title },
          ]}
        />
        
        {/* Toggle on the far right */}
        <div className="flex rounded-lg bg-slate-155 dark:bg-slate-800 p-1 text-[11px] font-bold self-end sm:self-auto border border-slate-200 dark:border-slate-700 shadow-sm">
          <Link
            href={`/blog/${slug}?lang=hi`}
            className={`px-3 py-1 rounded-md transition-all ${
              lang === "hi"
                ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            HI
          </Link>
          <Link
            href={`/blog/${slug}`}
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

      <article className="mt-4 mx-auto w-full">
        <header className="mb-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4">
            {blog.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-normal">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span>{blog.author}</span>
            <span>•</span>
            <time>{date}</time>
          </div>
        </header>

        <AdPlaceholder position="top" />

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-12 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] border border-[#D9E1EC] dark:border-gray-700">
          {showTranslateWidget && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-800/30 text-center">
              <span className="text-xs text-amber-700 dark:text-amber-300 font-medium">
                ⏳ This article is currently only available in Hindi. Showing original version below.
              </span>
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert !max-w-none w-full prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: formatContent(content) }}
          />
        </div>

        {/* Related Articles & More Guides */}
        <section className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-1">
                {lang === "en" ? "Explore More" : "और अधिक पढ़ें"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {lang === "en" ? "Related Articles & Typing Guides" : "संबंधित लेख और टाइपिंग गाइड"}
              </h2>
            </div>
            <Link
              href={lang === "hi" ? "/blog?lang=hi" : "/blog"}
              className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-xl text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors border border-primary-200/60 dark:border-primary-800/40"
            >
              {lang === "en" ? "View All Articles" : "सभी लेख देखें"} →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedBlogs.map((item) => {
              const itemTitle = lang === "en" && item.titleEn ? item.titleEn : item.title;
              const itemExcerpt = lang === "en" && item.excerptEn ? item.excerptEn : item.excerpt;
              const itemDate = lang === "en" && item.dateEn ? item.dateEn : item.date;

              return (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}${lang === "hi" ? "?lang=hi" : ""}`}
                  className="group flex flex-col justify-between bg-white dark:bg-gray-900 border border-[#D9E1EC] dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary-400 dark:hover:border-primary-600 transition-all hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-primary-50 dark:bg-primary-900/30 text-[11px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-gray-400">{itemDate}</span>
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                      {itemTitle}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                      {itemExcerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:underline">
                    {lang === "en" ? "Read guide" : "लेख पढ़ें"} →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <AdPlaceholder position="bottom" />
      </article>
    </div>
  );
}

// Simple helper to convert basic markdown/text to HTML for the blog
function formatContent(content: string) {
  // First, parse Markdown tables
  const lines = content.split('\n');
  let inTable = false;
  let tableHtml = '';
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<div class="overflow-x-auto my-8"><table class="w-full border-collapse border border-gray-300 dark:border-gray-700 text-left text-sm md:text-base">';
        const cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
        tableHtml += '<thead><tr class="bg-gray-100 dark:bg-gray-800">';
        cells.forEach(cell => {
          tableHtml += `<th class="border border-gray-300 dark:border-gray-700 px-4 py-3 font-semibold">${cell}</th>`;
        });
        tableHtml += '</tr></thead><tbody>';
      } else {
        if (line.includes('---')) {
          continue;
        }
        const cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
        tableHtml += '<tr class="odd:bg-white even:bg-gray-50/50 dark:odd:bg-gray-900 dark:even:bg-gray-800/30">';
        cells.forEach(cell => {
          tableHtml += `<td class="border border-gray-300 dark:border-gray-700 px-4 py-3">${cell}</td>`;
        });
        tableHtml += '</tr>';
      }
    } else {
      if (inTable) {
        tableHtml += '</tbody></table></div>';
        processedLines.push(tableHtml);
        inTable = false;
        tableHtml = '';
      }
      processedLines.push(lines[i]);
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table></div>';
    processedLines.push(tableHtml);
  }
  content = processedLines.join('\n');

  let html = content
    .replace(/### (.*)/g, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>')
    .replace(/## (.*)/g, '<h2 class="text-3xl font-bold mt-10 mb-6">$1</h2>')
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<figure class="my-8"><img src="$2" alt="$1" class="w-full rounded-xl shadow-md border border-gray-200 dark:border-gray-800" /><figcaption class="text-center text-sm text-gray-500 mt-3">$1</figcaption></figure>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600 hover:underline">$1</a>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert markdown lists to styled <li> elements
  html = html.replace(/(?:^|\n)- (.*)/g, '<li class="ml-6 list-disc mb-1">$1</li>');
  html = html.replace(/(?:^|\n)\d+\. (.*)/g, '<li class="ml-6 list-decimal mb-1">$1</li>');

  // Convert double newlines to paragraphs
  html = html.replace(/\n\n/g, '</p><p class="mb-4">');

  // Clean up paragraph wrapping around block elements
  html = html.replace(/<\/p><p class="mb-4"><figure/g, '<figure');
  html = html.replace(/<\/figure><\/p>/g, '</figure>');
  html = html.replace(/<\/p><p class="mb-4"><h/g, '<h');
  html = html.replace(/<\/p><p class="mb-4"><div class="overflow-x-auto/g, '<div class="overflow-x-auto');
  html = html.replace(/<\/table><\/div><\/p>/g, '</table></div>');

  return html.trim();
}
