import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "../../../data/blogs";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { AdPlaceholder } from "../../../components/AdPlaceholder";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} | TypeHindi`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container-main py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: blog.title },
        ]}
      />

      <article className="mt-8 max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4">
            {blog.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{blog.author}</span>
            <span>•</span>
            <time>{blog.date}</time>
          </div>
        </header>

        <AdPlaceholder position="top" />

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
          />
        </div>

        <AdPlaceholder position="bottom" />
      </article>
    </div>
  );
}

// Simple helper to convert basic markdown/text to HTML for the blog
function formatContent(content: string) {
  return content
    .replace(/### (.*)/g, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>')
    .replace(/## (.*)/g, '<h2 class="text-3xl font-bold mt-10 mb-6">$1</h2>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/- \*\*(.*?)\*\*(.*)/g, '<li class="mb-2"><strong>$1</strong>$2</li>')
    .replace(/\* \*\*(.*?)\*\*(.*)/g, '<li class="mb-2"><strong>$1</strong>$2</li>')
    .replace(/<\/p><p class="mb-4">- /g, '<ul><li class="mb-2">')
    .replace(/<\/p><p class="mb-4">\* /g, '<ul><li class="mb-2">')
    .trim();
}
