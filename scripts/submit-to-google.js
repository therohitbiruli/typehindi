const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// 1. Path to your Service Account JSON key file
const KEY_FILE_PATH = path.join(__dirname, 'google-service-account.json');

// 2. Base URL of your website
const BASE_URL = 'https://www.typehindi.in';

async function submitUrls() {
  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error(`\n❌ ERROR: Service account key not found at:\n${KEY_FILE_PATH}`);
    console.error(`Please download the JSON key from Google Cloud Console and save it as 'google-service-account.json' in this folder.\n`);
    process.exit(1);
  }

  console.log('🔑 Authenticating with Google...');
  
  // Set up auth client
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  // 3. Extract all blog slugs directly from blogs.ts
  const blogsFilePath = path.join(__dirname, '../src/data/blogs.ts');
  const content = fs.readFileSync(blogsFilePath, 'utf8');
  
  // Simple regex to grab all slugs from the array
  const slugs = [];
  const regex = /"slug"\s*:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }

  if (slugs.length === 0) {
    console.error('❌ Could not find any blog slugs in src/data/blogs.ts');
    process.exit(1);
  }

  console.log(`📝 Found ${slugs.length} articles to submit for indexing.`);
  console.log('🚀 Sending requests to Google Search Indexing API...\n');

  let successCount = 0;
  
  for (const slug of slugs) {
    const targetUrl = `${BASE_URL}/blog/${slug}`;
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: targetUrl,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ SUCCESS: ${targetUrl}`);
      successCount++;
    } catch (error) {
      console.error(`❌ FAILED: ${targetUrl}`);
      console.error(`   Reason: ${error.message}`);
    }
    
    // Tiny delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\n🎉 Finished! Successfully submitted ${successCount} out of ${slugs.length} URLs to Google.`);
}

submitUrls().catch(console.error);
