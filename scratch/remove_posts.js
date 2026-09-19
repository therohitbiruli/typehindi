const fs = require('fs');

let content = fs.readFileSync('src/data/blogs.ts', 'utf8');

const slugsToRemove = [
  'english-to-any-indian-language-typing',
  'ranchi-civil-court-peon-recruitment-form-guide'
];

for (const slug of slugsToRemove) {
    const blockRegex = new RegExp(`{\\s*(?:"slug"|slug)\\s*:\\s*"${slug}"[\\s\\S]*?(?=,\\n\\s*{|\\n\\])`, 'g');
    content = content.replace(blockRegex, '');
    // Clean up trailing commas if necessary, but typically replace with empty string leaves `, \n\n {`.
    // Let's also clean up double commas or empty objects.
    content = content.replace(/,\s*,/g, ',');
}

fs.writeFileSync('src/data/blogs.ts', content);
console.log('Removed from blogs.ts');
