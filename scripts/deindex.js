const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const KEY_FILE_PATH = path.join(__dirname, 'google-service-account.json');
const BASE_URL = 'https://www.typehindi.in';

const shortSlugs = [
  'english-to-any-indian-language-typing',
  'ranchi-civil-court-peon-recruitment-form-guide'
];

async function deindexUrls() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  for (const slug of shortSlugs) {
    const targetUrl = `${BASE_URL}/blog/${slug}`;
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: targetUrl,
          type: 'URL_DELETED',
        },
      });
      console.log(`✅ SUCCESSFULLY DEINDEXED: ${targetUrl}`);
    } catch (error) {
      console.error(`❌ FAILED TO DEINDEX: ${targetUrl}`);
      console.error(`   Reason: ${error.message}`);
    }
  }
}

deindexUrls().catch(console.error);
