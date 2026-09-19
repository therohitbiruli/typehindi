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
            if (slug === 'upessc-prt-assistant-teacher-2026') regexSlug = 'upessc-prt-assistant-teacher-2026'; // checking others if needed
            
            const regex = new RegExp(`{\\s*"slug"\\s*:\\s*"${regexSlug}"[\\s\\S]*?(?=,\\n\\s*{|\\n\\])`, 'g');
            const match = blogsContent.match(regex);
            
            if (match) {
                // Stringify the new data to replace the old object block
                // Keep date, author etc. if they are missing in the new data, or just use the new data entirely if it's complete.
                // Our subagent instructions said: "The JSON object must contain EXACTLY these keys: slug, titleEn, excerptEn, contentEn, content". It missed date, author, category.
                // Let's parse the OLD object to keep missing fields.
                const oldObj = JSON.parse(match[0]);
                const mergedObj = { ...oldObj, ...data };
                const replacement = JSON.stringify(mergedObj, null, 2).replace(/^/gm, '  '); // indent
                
                blogsContent = blogsContent.replace(match[0], replacement.trim());
                console.log(`Updated post ${slug}`);
            } else {
                console.error(`Could not find ${slug} in blogs.ts`);
            }
        } catch (e) {
            console.error(`Error parsing expanded_${i}.json:`, e);
        }
    }
}

fs.writeFileSync(blogsPath, blogsContent);
console.log("Merge complete.");
