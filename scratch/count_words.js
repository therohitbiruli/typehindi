const fs = require('fs');

const content = fs.readFileSync('src/data/blogs.ts', 'utf8');

const regex = /{\s*"slug"\s*:\s*"([^"]+)"[\s\S]*?"contentEn"\s*:\s*"(.*?[^\\])"(?=\s*(?:,|\n|}))/g;
let match;
const shortPosts = [];

while ((match = regex.exec(content)) !== null) {
  const slug = match[1];
  const text = match[2];
  
  const cleanText = text.replace(/\\n/g, ' ').replace(/\\t/g, ' ').replace(/\\"/g, '"');
  const wordCount = cleanText.split(/\s+/).filter(w => w.trim().length > 0).length;
  console.log(`${slug}: ${wordCount} words`);
  
  if (wordCount < 1000) {
    shortPosts.push(slug);
  }
}

console.log('\nShort posts to remove:', shortPosts);
