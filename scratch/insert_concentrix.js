const fs = require('fs');

const blogsPath = 'src/data/blogs.ts';
const contentEn = fs.readFileSync('scratch/concentrix.md', 'utf8');

const newPost = {
  slug: "concentrix-voice-vs-non-voice-process",
  title: "Concentrix Voice Process vs Non Voice Process: Complete Guide",
  titleEn: "Concentrix Voice Process vs Non Voice Process: Complete Guide",
  excerpt: "Everything about Concentrix voice and non-voice process jobs, including work profile, eligibility, salary, skills required, interview process, and work-from-home opportunities.",
  excerptEn: "Everything about Concentrix voice and non-voice process jobs, including work profile, eligibility, salary, skills required, interview process, and work-from-home opportunities.",
  content: contentEn,
  contentEn: contentEn,
  date: "19 September, 2026",
  dateEn: "19 September, 2026",
  author: "TypeHindi Team",
  category: "Exam Guide"
};

const newBlock = `  {
    "slug": "${newPost.slug}",
    "title": "${newPost.title}",
    "titleEn": "${newPost.titleEn}",
    "excerpt": "${newPost.excerpt}",
    "excerptEn": "${newPost.excerptEn}",
    "content": ${JSON.stringify(newPost.content)},
    "contentEn": ${JSON.stringify(newPost.contentEn)},
    "date": "${newPost.date}",
    "dateEn": "${newPost.dateEn}",
    "author": "${newPost.author}",
    "category": "${newPost.category}"
  },\n`;

let tsFile = fs.readFileSync(blogsPath, 'utf8');
tsFile = tsFile.replace('export const blogs: BlogPost[] = [', 'export const blogs: BlogPost[] = [\n' + newBlock);

fs.writeFileSync(blogsPath, tsFile);
console.log('Inserted new post.');
