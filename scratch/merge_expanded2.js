const fs = require('fs');
const path = require('path');

const scratchDir = 'd:/TypeHindi.in/scratch';
const blogsPath = 'd:/TypeHindi.in/src/data/blogs.ts';

let blogsContent = fs.readFileSync(blogsPath, 'utf8');

for (let i = 1; i <= 10; i++) {
    const postFile = path.join(scratchDir, `expanded_${i}.json`);
    if (fs.existsSync(postFile)) {
        try {
            let raw = fs.readFileSync(postFile, 'utf8');
            if (raw.charCodeAt(0) === 0xFEFF) {
                raw = raw.slice(1);
            }
            const data = JSON.parse(raw);
            const slug = data.slug;
            let regexSlug = slug;
            if (slug === 'bihar-stet-2026') regexSlug = 'bihar-stet-online-form-2026';
            
            const regex = new RegExp(`{\\s*"slug"\\s*:\\s*"${regexSlug}"[\\s\\S]*?(?=,\\n\\s*{|\\n\\])`, 'g');
            const match = blogsContent.match(regex);
            
            if (match) {
                let block = match[0];
                
                // Instead of parsing, we can just replace the contentEn and content fields using regex.
                // Or simply re-build the JSON block. But wait, if we stringify `data.contentEn`, it will be properly JSON escaped.
                const newContentEn = JSON.stringify(data.contentEn);
                const newContent = JSON.stringify(data.content);
                
                // Replace contentEn
                block = block.replace(/"contentEn"\s*:\s*".*?[^\\]"(?=\s*(?:,|\\n|}))/s, `"contentEn": ${newContentEn}`);
                // Replace content
                block = block.replace(/"content"\s*:\s*".*?[^\\]"(?=\s*(?:,|\\n|}))/s, `"content": ${newContent}`);
                
                blogsContent = blogsContent.replace(match[0], block);
                console.log(`Updated post ${slug} securely`);
            } else {
                console.error(`Could not find ${slug} in blogs.ts`);
            }
        } catch (e) {
            console.error(`Error processing expanded_${i}.json:`, e);
        }
    }
}

fs.writeFileSync(blogsPath, blogsContent);
console.log("Merge complete.");
