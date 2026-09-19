const fs = require('fs');

const content = fs.readFileSync('src/data/blogs.ts', 'utf8');

const slugs = [];
let match;
const slugRegex = /"slug"\s*:\s*"([^"]+)"|slug\s*:\s*"([^"]+)"/g;
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1] || match[2]);
}

const shortPosts = [];
for (const slug of slugs) {
    const blockRegex = new RegExp(`{\\s*(?:"slug"|slug)\\s*:\\s*"${slug}"[\\s\\S]*?(?=,\\n\\s*{|\\n\\])`, 'g');
    const blockMatch = content.match(blockRegex);
    if (blockMatch) {
        const block = blockMatch[0];
        let text = '';
        const enMatch = block.match(/(?:"contentEn"|contentEn)\s*:\s*"(.*?[^\\])"(?=\s*(?:,|\n|}))/s);
        if (enMatch) {
            text = enMatch[1];
        } else {
            const hiMatch = block.match(/(?:"content"|content)\s*:\s*"(.*?[^\\])"(?=\s*(?:,|\n|}))/s);
            if (hiMatch) text = hiMatch[1];
        }
        
        if (text) {
            const cleanText = text.replace(/\\n/g, ' ').replace(/\\t/g, ' ').replace(/\\"/g, '"');
            const wordCount = cleanText.split(/\s+/).filter(w => w.trim().length > 0).length;
            console.log(`${slug}: ${wordCount} words`);
            if (wordCount < 1000) shortPosts.push(slug);
        } else {
            // Check for multiline backticks or single quotes if used in old posts
            const backtickMatch = block.match(/(?:"contentEn"|contentEn|content)\s*:\s*`([\s\S]*?)`/);
            if (backtickMatch) {
                const wordCount = backtickMatch[1].split(/\s+/).filter(w => w.trim().length > 0).length;
                console.log(`${slug}: ${wordCount} words (backtick format)`);
                if (wordCount < 1000) shortPosts.push(slug);
            } else {
                console.log(`${slug}: NO CONTENT FOUND`);
            }
        }
    }
}
console.log('\nShort posts to remove:', shortPosts);
