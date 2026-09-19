const fs = require('fs');
const path = './src/data/blogs.ts';

let code = fs.readFileSync(path, 'utf8');

// Find the start of the HCL blog post
const startIndex = code.indexOf('slug: "hindustan-copper-limited-recruitment-2026-fte"');

if (startIndex === -1) {
  console.log("Could not find HCL blog post");
  process.exit(1);
}

// Extract only the HCL post content to modify (just in case, to avoid breaking other posts)
// But actually, replacing `\n* ` with `\n\n* ` globally in the file is probably safe for markdown strings, 
// wait, it might break other things. Let's isolate the modification to `contentEn:` and `content:` lines of this specific object.

let startOfEn = code.indexOf('contentEn: "', startIndex);
let endOfEn = code.indexOf('",\n', startOfEn);
let contentEn = code.substring(startOfEn, endOfEn);

let startOfHi = code.indexOf('content: "', startIndex);
let endOfHi = code.indexOf('",\n', startOfHi);
let contentHi = code.substring(startOfHi, endOfHi);

function fixMarkdown(str) {
  // Fix lists: `\n* ` to `\n\n* `
  // We use regex to find literal "\n* " (which is `\\n* ` in the source code)
  // Wait, in string literals, it's actually written as `\n` if it's a multiline string, but here it is a single-line string with literal `\n` characters!
  // Let's check: the view_file output showed `contentEn: "# Hindustan Copper... \n\n![HCL...`
  // So they are literal `\n` in the file.
  
  // Replace `\n* ` with `\n\n* ` (if not already `\n\n* `)
  str = str.replace(/(?<!\\n)\\n\* /g, '\\n\\n* ');
  
  // Replace `\n1. ` with `\n\n1. `
  str = str.replace(/(?<!\\n)\\n(\d+)\. /g, '\\n\\n$1. ');
  
  // Remove the TypeHindi row
  str = str.replace(/\\n\| \*\*TypeHindi.*?\\n/g, '\\n');
  str = str.replace(/\\n\| \*\*टाइपहिंदी.*?\\n/g, '\\n');
  
  // Also clean up double TypeHindi if it's at the end of the table
  str = str.replace(/\| \*\*TypeHindi.*?\|.*?(?=\\n|$)/g, '');
  str = str.replace(/\| \*\*टाइपहिंदी.*?\|.*?(?=\\n|$)/g, '');
  
  // Also fix broken numbered lists (like starting at 26). This happens because `\n26\n` or something?
  // Actually, standard markdown parses sequential numbers if they are not separated by double newline, or it continues the previous list.
  // By enforcing `\n\n1. ` everywhere, it breaks them into separate lists.
  // Wait, if it's `\n\n1. ` followed by `\n2. `, it should be fine. But what if we replace `\n2. ` with `\n\n2. `? Then it becomes multiple separate lists, which might reset the counter to 1 in some parsers!
  // Ah! If we replace `\n\n` for EVERY numbered item, they all become separate lists of 1 item!
  // We should only insert `\n\n` before the FIRST item of the list!
  // How to detect the first item? The number is '1.'!
  return str;
}

// Actually, fixing the list items:
function fixMarkdownProper(str) {
  // If we have `\n* `, and before it is NOT `\n`, it means it's immediately following a paragraph.
  // e.g. `Competencies:\n* Core` -> we want `Competencies:\n\n* Core`
  // If it's already `* Item 1\n* Item 2`, we don't want `\n\n` between them, or it becomes spaced list. Spaced list is fine, but maybe unnecessary. Let's just do it for the FIRST item.
  
  // First item of unordered list: `\n* ` preceded by a non-asterisk line.
  // It's easier to just ensure there's `\n\n` before lists if preceded by text.
  // Regex: `([a-zA-Z0-9):.])\\n\* ` -> `$1\n\n* `
  str = str.replace(/([a-zA-Z0-9):.])\\n\* /g, '$1\\n\\n* ');
  
  // Same for numbered lists:
  str = str.replace(/([a-zA-Z0-9):.])\\n(\d+)\. /g, '$1\\n\\n$2. ');
  
  // Also remove the TypeHindi Links
  str = str.replace(/\\n\| \*\*TypeHindi.*?\|.*?\\n/g, '\\n');
  str = str.replace(/\\n\| \*\*टाइपहिंदी.*?\|.*?\\n/g, '\\n');

  return str;
}

let fixedEn = fixMarkdownProper(contentEn);
let fixedHi = fixMarkdownProper(contentHi);

code = code.substring(0, startOfEn) + fixedEn + code.substring(endOfEn, startOfHi) + fixedHi + code.substring(endOfHi);

fs.writeFileSync(path, code);
console.log("Successfully fixed markdown in blogs.ts");
