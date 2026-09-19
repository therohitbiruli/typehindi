const fs = require('fs');
let ts = fs.readFileSync('src/data/blogs.ts', 'utf8');
ts = ts.replace(/"date": "19 September, 2026"/, '"date": "19 सितम्बर, 2026"');
fs.writeFileSync('src/data/blogs.ts', ts);
console.log('Fixed date');
