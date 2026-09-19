const fs = require('fs');
const content = fs.readFileSync('C:/Users/lenovo/.gemini/antigravity/brain/fa635d19-825c-42f1-a11a-aa0096b43135/.system_generated/steps/4512/content.md', 'utf8');
const latestIdx = content.indexOf('Latest Jobs');
const section = content.substring(latestIdx, latestIdx + 2500);
const urls = [...section.matchAll(/href="(https:\/\/sarkariresult.com.cm\/[^"]+)"/g)].map(m => m[1]);
console.log(urls.slice(0, 10).join('\n'));
