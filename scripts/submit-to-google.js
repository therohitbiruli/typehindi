const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// 1. Path to your Service Account JSON key file
const KEY_FILE_PATH = path.join(__dirname, 'google-service-account.json');

// 2. Base URL (Note: www.typehindi.in is verified in Google Search Console for this service account)
const BASE_URL = 'https://www.typehindi.in';

async function submitUrls() {
  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error(`\n❌ ERROR: Service account key not found at:\n${KEY_FILE_PATH}`);
    console.error(`Please save your Google Cloud JSON key as 'google-service-account.json' in this folder.\n`);
    process.exit(1);
  }

  console.log('🔑 Authenticating with Google Indexing API...');
  
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  const args = process.argv.slice(2);
  let urlsToSubmit = [];

  const blogsFilePath = path.join(__dirname, '../src/data/blogs.ts');
  const pyqFilePath = path.join(__dirname, '../src/data/pyqStore.ts');

  function getBlogUrls() {
    const content = fs.readFileSync(blogsFilePath, 'utf8');
    const regex = /(?:slug|"slug")\s*:\s*["']([^"']+)["']/g;
    const slugs = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (!slugs.includes(match[1])) slugs.push(match[1]);
    }
    return slugs.map(slug => `${BASE_URL}/blog/${slug}`);
  }

  function getPyqUrls() {
    const content = fs.readFileSync(pyqFilePath, 'utf8');
    const regex = /slug:\s*["']([^"']+)["']/g;
    const slugs = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (match[1].includes('previous-year-question-paper') && !slugs.includes(match[1])) {
        slugs.push(match[1]);
      }
    }
    return slugs.map(slug => `${BASE_URL}/pyq/${slug}`);
  }

  const mainPages = [
    `${BASE_URL}/`,
    `${BASE_URL}/practice`,
    `${BASE_URL}/learn`,
    `${BASE_URL}/mock-tests`,
    `${BASE_URL}/pyq`,
    `${BASE_URL}/keyboard-layout`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/shorthand`,
    `${BASE_URL}/translators`
  ];

  if (args.length === 0 || args.includes('--blogs')) {
    urlsToSubmit = getBlogUrls();
    console.log(`📝 Loaded ${urlsToSubmit.length} blog articles.`);
  } else if (args.includes('--pyq')) {
    urlsToSubmit = getPyqUrls();
    console.log(`📝 Loaded ${urlsToSubmit.length} PYQ papers.`);
  } else if (args.includes('--all')) {
    urlsToSubmit = [...mainPages, ...getBlogUrls(), ...getPyqUrls()];
    // Deduplicate
    urlsToSubmit = Array.from(new Set(urlsToSubmit));
    console.log(`📝 Loaded ${urlsToSubmit.length} total URLs (main pages, blogs, and PYQs).`);
  } else if (fs.existsSync(args[0])) {
    const fileContent = fs.readFileSync(args[0], 'utf8');
    urlsToSubmit = fileContent
      .split('\n')
      .map(u => u.trim())
      .filter(u => u.startsWith('http'));
    console.log(`📄 Loaded ${urlsToSubmit.length} URLs from file: ${args[0]}`);
  } else {
    urlsToSubmit = args.filter(u => u.startsWith('http'));
    console.log(`🎯 Received ${urlsToSubmit.length} direct URL(s) from arguments.`);
  }

  if (urlsToSubmit.length === 0) {
    console.log('⚠️ No valid URLs found to submit.');
    console.log('Usage:');
    console.log('  node scripts/submit-to-google.js                 (submits all blogs)');
    console.log('  node scripts/submit-to-google.js --pyq           (submits all PYQ papers)');
    console.log('  node scripts/submit-to-google.js --all           (submits main pages + blogs + PYQs)');
    console.log('  node scripts/submit-to-google.js <url1> <url2>   (submits specific URLs)');
    console.log('  node scripts/submit-to-google.js urls.txt        (submits URLs listed in a text file)');
    return;
  }

  console.log(`🚀 Sending ${urlsToSubmit.length} requests to Google Search Indexing API...\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urlsToSubmit.length; i++) {
    const targetUrl = urlsToSubmit[i];
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: targetUrl,
          type: 'URL_UPDATED',
        },
      });
      console.log(`[${i + 1}/${urlsToSubmit.length}] ✅ SUCCESS: ${targetUrl}`);
      successCount++;
    } catch (error) {
      const msg = error.response?.data?.error?.message || error.message;
      console.error(`[${i + 1}/${urlsToSubmit.length}] ❌ FAILED: ${targetUrl}`);
      console.error(`       Reason: ${msg}`);
      failCount++;
    }
    
    if (i < urlsToSubmit.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 350));
    }
  }

  console.log(`\n🎉 Completed!`);
  console.log(`   ✅ Successful: ${successCount}`);
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount}`);
  }
}

submitUrls().catch(console.error);
