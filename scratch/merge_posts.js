const fs = require('fs');
const path = require('path');

const scratchDir = 'd:/TypeHindi.in/scratch';
const blogsPath = 'd:/TypeHindi.in/src/data/blogs.ts';

let allPosts = [];

for (let i = 1; i <= 10; i++) {
    const postFile = path.join(scratchDir, `post_${i}.json`);
    if (fs.existsSync(postFile)) {
        try {
            let raw = fs.readFileSync(postFile, 'utf8');
            if (raw.charCodeAt(0) === 0xFEFF) {
                raw = raw.slice(1);
            }
            const data = JSON.parse(raw);
            allPosts.push(data);
        } catch (e) {
            console.error(`Error parsing post_${i}.json:`, e);
        }
    }
}

console.log(`Found ${allPosts.length} posts to merge.`);

if (allPosts.length === 10) {
    let blogsContent = fs.readFileSync(blogsPath, 'utf8');
    
    // Convert to TS object syntax
    let injectedStr = '';
    for (const post of allPosts) {
        // We will just stringify and adjust the keys slightly, or format it properly.
        const stringified = JSON.stringify(post, null, 2);
        // We need to match the format of the TS array.
        // It's in `export const blogs: BlogPost[] = [`
        injectedStr += `  ${stringified},\n`;
    }

    // Insert right after `export const blogs: BlogPost[] = [`
    // Or `export const blogs: BlogPost[] = [\n` or `\r\n`
    const insertMatch = blogsContent.match(/export const blogs:\s*BlogPost\[\]\s*=\s*\[\r?\n/);
    if (insertMatch) {
        const index = insertMatch.index + insertMatch[0].length;
        blogsContent = blogsContent.substring(0, index) + injectedStr + blogsContent.substring(index);
        fs.writeFileSync(blogsPath, blogsContent);
        console.log("Successfully injected 10 posts into blogs.ts");
    } else {
        console.error("Could not find the insertion point in blogs.ts");
    }
} else {
    console.error("Not all posts found. Wait for all.");
}
