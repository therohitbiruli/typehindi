let html = 'Test\n\n* Item 1\n\n* Item 2\n\nSome text\n1. Num 1\n\n2. Num 2\n\n## Next\n1. Num fresh';
html = html.replace(/(?:^|\n)[*-] (.*)/g, '\n<li class="ml-6 list-disc mb-1" data-list="ul">$1</li>');
html = html.replace(/(?:^|\n)\d+\. (.*)/g, '\n<li class="ml-6 list-decimal mb-1" data-list="ol">$1</li>');
html = html.replace(/(<li [^>]*data-list="ul"[^>]*>.*?<\/li>(?:\n)*)+/g, (match) => { return '\n<ul class="mb-4 space-y-1">\n' + match.replace(/data-list="ul"/g, '') + '</ul>\n'; });
html = html.replace(/(<li [^>]*data-list="ol"[^>]*>.*?<\/li>(?:\n)*)+/g, (match) => { return '\n<ol class="mb-4 space-y-1">\n' + match.replace(/data-list="ol"/g, '') + '</ol>\n'; });
html = html.replace(/\n\n/g, '</p><p class="mb-4">');
console.log(html);
