import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
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
  const lang = resolvedSearchParams.lang === "en" ? "en" : "hi";

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const title = lang === "en" && blog.titleEn ? blog.titleEn : blog.title;
  const date = lang === "en" && blog.dateEn ? blog.dateEn : blog.date;
  const content = lang === "en" && blog.contentEn ? blog.contentEn : blog.content;
  const showTranslateWidget = lang === "en" && !blog.contentEn;

  return (
    <div className="container-main py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: title },
        ]}
      />

      <article className="mt-8 mx-auto w-full">
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

        {/* Language Selection Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <Link
            href={`/blog/${slug}`}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              lang === "hi"
                ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            हिन्दी (Original)
          </Link>
          <Link
            href={`/blog/${slug}?lang=en`}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              lang === "en"
                ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            English
          </Link>
        </div>

        <AdPlaceholder position="top" />

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-12 shadow-sm border border-gray-300 dark:border-gray-700">
          {showTranslateWidget && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-xs text-amber-700 dark:text-amber-300 text-center md:text-left leading-relaxed">
                <strong className="block text-sm font-extrabold mb-0.5">English Translation In Progress ⏳</strong>
                Our editors are currently translating this article. You can use the Google Translate widget to translate it instantly.
              </div>
              <div id="google_translate_element" className="translate-widget border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-slate-950 p-1"></div>
              
              <Script
                id="google-translate-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.googleTranslateElementInit = function() {
                      new google.translate.TranslateElement({
                        pageLanguage: 'hi',
                        includedLanguages: 'en',
                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                      }, 'google_translate_element');
                    }
                  `
                }}
              />
              <Script
                id="google-translate-script"
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
              />
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert !max-w-none w-full prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: formatContent(content) }}
          />
        </div>

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
