const fs = require('fs');

const content = fs.readFileSync('src/data/blogs.ts', 'utf8');

// The objects are exported in an array: export const blogs: BlogPost[] = [ { ... }, { ... } ];
// To reliably parse the whole file, since it's TS, it's easier to just strip the export and eval it.
// Let's do that.
let jsCode = content.replace('export interface BlogPost {', '/*').replace('category: "Basics" | "Exam Guide";\n}', '*/');
jsCode = jsCode.replace('export const blogs: BlogPost[] =', 'const blogs =');
jsCode = jsCode.replace(/export function getBlogImage.*/s, '');
jsCode += '\nconsole.log(JSON.stringify(blogs.map(b => { return { slug: b.slug, wordCount: (b.contentEn || b.content).split(/\\s+/).length } })));';

fs.writeFileSync('scratch/eval_blogs.js', jsCode);
