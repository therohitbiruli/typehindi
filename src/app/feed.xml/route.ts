import { blogs, parseBlogDate } from "@/data/blogs";



function escapeXml(unsafe: string): string {
  return (unsafe || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = "https://typehindi.in";

  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = parseBlogDate(a.dateEn || a.date);
    const dateB = parseBlogDate(b.dateEn || b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const rssItems = sortedBlogs
    .map((blog) => {
      const title = blog.titleEn || blog.title;
      const description = blog.excerptEn || blog.excerpt;
      const link = `${siteUrl}/blog/${blog.slug}`;
      const pubDate = parseBlogDate(blog.dateEn || blog.date).toUTCString();

      return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TypeHindi - Hindi Typing News, Guides &amp; Exam Updates</title>
    <link>${siteUrl}</link>
    <description>Latest Hindi typing guides, exam strategies, InScript keyboard layouts, and government recruitment updates.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
    },
  });
}
