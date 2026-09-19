/*
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string;
  contentEn?: string;
  date: string;
  dateEn?: string;
  author: string;
  category: "Basics" | "Exam Guide";
}


console.log(JSON.stringify(blogs.map(b => { return { slug: b.slug, wordCount: (b.contentEn || b.content).split(/\s+/).length } })));