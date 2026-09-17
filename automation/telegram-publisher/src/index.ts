export interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_ALLOWED_USER_ID: string;
  GEMINI_API_KEY: string;
  GITHUB_TOKEN: string;
  GITHUB_REPO?: string; // Default: therohitbiruli/typehindi
  GOOGLE_SERVICE_ACCOUNT_JSON?: string; // Optional for instant Google Indexing
}

interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  dateEn: string;
  author: string;
  category: "Basics" | "Exam Guide";
  contentEn: string;
  content: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("TypeHindi Telegram Publisher Worker is Running.", { status: 200 });
    }

    try {
      const update = await request.json() as any;
      if (!update.message || !update.message.text) {
        return new Response("OK", { status: 200 });
      }

      const chatId = update.message.chat.id;
      const userId = String(update.message.from?.id || "");
      const userMessage = update.message.text.trim();

      // Security check: Only allow authorized user
      if (env.TELEGRAM_ALLOWED_USER_ID && userId !== env.TELEGRAM_ALLOWED_USER_ID) {
        await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, "⛔ Unauthorized. You do not have permission to publish articles on TypeHindi.");
        return new Response("OK", { status: 200 });
      }

      if (userMessage === "/start" || userMessage === "/help") {
        const welcome = `👋 *Welcome to TypeHindi Article Publisher!*\n\nSimply send me any article topic or prompt, for example:\n\n_\`Write an article about Rajasthan High Court LDC Typing & Efficiency Test 2026: KrutiDev vs InScript, speed criteria, error calculations, and practical preparation strategy.\`_\n\nI will:\n1. 🤖 Generate a comprehensive bilingual article with Gemini.\n2. 📦 Commit & push it directly to TypeHindi master repo.\n3. 🚀 Submit the live URL to Google Search Console for instant indexing.`;
        await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, welcome, "Markdown");
        return new Response("OK", { status: 200 });
      }

      // Step 1: Notify user that generation has started
      const progressMsg = await sendTelegramMessage(
        env.TELEGRAM_BOT_TOKEN,
        chatId,
        `⏳ *Generating article with Gemini...*\n\nTopic: _${escapeMarkdown(userMessage)}_`,
        "Markdown"
      );

      // Step 2: Call Gemini API
      const blogPost = await generateArticleWithGemini(env.GEMINI_API_KEY, userMessage);

      // Step 3: Commit to GitHub
      const repo = env.GITHUB_REPO || "therohitbiruli/typehindi";
      await editTelegramMessage(
        env.TELEGRAM_BOT_TOKEN,
        chatId,
        progressMsg.result.message_id,
        `✍️ *Article Generated:*\n"${escapeMarkdown(blogPost.titleEn)}"\n\n📦 *Pushing commit to GitHub master...*`,
        "Markdown"
      );

      const commitResult = await commitBlogToGitHub(env.GITHUB_TOKEN, repo, blogPost);

      // Step 4: Submit to Google Indexing API
      const liveUrl = `https://typehindi.in/blog/${blogPost.slug}`;
      let indexingResult = "Skipped (No Service Account Key configured)";

      if (env.GOOGLE_SERVICE_ACCOUNT_JSON) {
        try {
          await editTelegramMessage(
            env.TELEGRAM_BOT_TOKEN,
            chatId,
            progressMsg.result.message_id,
            `📦 *Pushed to GitHub: \`${commitResult.sha.slice(0, 7)}\`*\n\n🚀 *Notifying Google Search Console for indexing...*`,
            "Markdown"
          );
          await requestGoogleIndexing(env.GOOGLE_SERVICE_ACCOUNT_JSON, liveUrl);
          indexingResult = "✅ Successfully queued for Google Indexing (HTTP 200)";
        } catch (err: any) {
          indexingResult = `⚠️ Indexing request error: ${err.message}`;
        }
      }

      // Step 5: Send final celebration report
      const report = `🎉 *Article Published & Deployed!*\n\n` +
        `📰 *English Title:* ${escapeMarkdown(blogPost.titleEn)}\n` +
        `🇮🇳 *Hindi Title:* ${escapeMarkdown(blogPost.title)}\n` +
        `📂 *Category:* ${blogPost.category}\n` +
        `🔗 *Live URL:* [${liveUrl}](${liveUrl})\n` +
        `📦 *GitHub Commit:* \`${commitResult.sha.slice(0, 7)}\`\n` +
        `🔍 *Google Indexing:* ${indexingResult}\n\n` +
        `_Auto-deployment is in progress on your hosting provider._`;

      await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, report, "Markdown");

      return new Response("OK", { status: 200 });
    } catch (error: any) {
      console.error("Publisher error:", error);
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  },
};

// ─────────────────────────────────────────────────────────────
// 1. GEMINI CONTENT GENERATION
// ─────────────────────────────────────────────────────────────
async function generateArticleWithGemini(apiKey: string, prompt: string): Promise<BlogPost> {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const monthEn = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const dateEnStr = `${day} ${monthEn}, ${year}`;

  const HINDI_MONTHS = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
  const dateHiStr = `${day} ${HINDI_MONTHS[currentDate.getMonth()]}, ${year}`;

  const systemInstruction = `You are the lead SEO content strategist and bilingual typing expert for TypeHindi.in, India's leading portal for typing practice, examinations, and Hindi typing preparation.
Your task is to generate a comprehensive, highly structured, in-depth, and authoritative bilingual blog post in pure JSON matching the exact TypeScript schema:

{
  "slug": "kebab-case-descriptive-slug",
  "title": "हिंदी शीर्षक (आकर्षक, कीवर्ड समृद्ध, 60-90 अक्षर)",
  "titleEn": "English Title (Clear, engaging, 50-70 characters)",
  "excerpt": "हिंदी सारांश (2-3 वाक्य, मुख्य बिंदुओं को समेटे हुए)",
  "excerptEn": "English Excerpt (2-3 sentences covering speed, exam, font, and syllabus)",
  "date": "${dateHiStr}",
  "dateEn": "${dateEnStr}",
  "author": "TypeHindi Team",
  "category": "Exam Guide", // or "Basics"
  "contentEn": "In-depth markdown content in English (1,500 - 3,000 words)",
  "content": "In-depth markdown content in Hindi (1,500 - 3,000 words)"
}

IMPORTANT GUIDELINES FOR BOTH CONTENT FIELDS:
1. Markdown Format: Use # for main sections, ## for subsections, ### for details, and bullet points.
2. Tables: Include comprehensive comparison/specification markdown tables.
3. Internal Links (MUST use these exact paths wherever relevant):
   - [Typing Practice](/practice)
   - [10-Minute Typing Test Simulator](/test)
   - [Mangal Font Typing Test](/mangal-font-typing-test)
   - [Touch Typing Lessons](/learn)
   - [Hindi InScript Keyboard Layout Guide](/keyboard-layout)
   - [Pitman Shorthand & Dictation](/shorthand)
   - [Typing Games](/game)
4. Thoroughness: Provide detailed explanations of exam criteria (WPM, key depressions, accuracy requirements, permissible error margins, font specifications like Mangal / InScript / KrutiDev, keyboard shortcuts, and 30-day practice routine).
5. Output ONLY raw valid JSON. Do not wrap in backticks or markdown fences.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: `Topic / Instructions:\n${prompt}` }],
      },
    ],
    systemInstruction: {
      parts: [{ text: systemInstruction }],
    },
    generationConfig: {
      temperature: 0.4,
      responseMimeType: "application/json",
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API error (${res.status}): ${errText}`);
  }

  const data = await res.json() as any;
  const rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawJson) {
    throw new Error("Gemini returned empty response");
  }

  return JSON.parse(rawJson) as BlogPost;
}

// ─────────────────────────────────────────────────────────────
// 2. GITHUB REPOSITORY COMMIT
// ─────────────────────────────────────────────────────────────
async function commitBlogToGitHub(token: string, repo: string, post: BlogPost): Promise<{ sha: string }> {
  const filePath = "src/data/blogs.ts";
  const getUrl = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=master`;

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "TypeHindi-Publisher-Worker",
  };

  const fileRes = await fetch(getUrl, { headers });
  if (!fileRes.ok) {
    throw new Error(`GitHub get file error (${fileRes.status}): ${await fileRes.text()}`);
  }

  const fileData = await fileRes.json() as any;
  const currentContent = decodeBase64Utf8(fileData.content.replace(/\n/g, ""));

  // Target: export const blogs: BlogPost[] = [
  const marker = "export const blogs: BlogPost[] = [";
  const markerIndex = currentContent.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error("Could not locate 'export const blogs: BlogPost[] = [' inside blogs.ts");
  }

  // Format new post code block
  const formattedPost = JSON.stringify(post, null, 2);
  const insertIndex = markerIndex + marker.length;

  const updatedContent =
    currentContent.slice(0, insertIndex) +
    "\n  " +
    formattedPost.replace(/\n/g, "\n  ") +
    "," +
    currentContent.slice(insertIndex);

  const putUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const putBody = {
    message: `feat(blog): add "${post.titleEn}" via Telegram Publisher`,
    content: encodeBase64Utf8(updatedContent),
    sha: fileData.sha,
    branch: "master",
  };

  const putRes = await fetch(putUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify(putBody),
  });

  if (!putRes.ok) {
    throw new Error(`GitHub commit failed (${putRes.status}): ${await putRes.text()}`);
  }

  const putData = await putRes.json() as any;
  return { sha: putData.commit.sha };
}

// ─────────────────────────────────────────────────────────────
// 3. GOOGLE SEARCH CONSOLE INDEXING API
// ─────────────────────────────────────────────────────────────
async function requestGoogleIndexing(serviceAccountJson: string, targetUrl: string): Promise<void> {
  const sa = JSON.parse(serviceAccountJson);

  // Generate OAuth 2.0 access token via RS256 JWT
  const now = Math.floor(Date.now() / 1000);
  const jwtHeader = { alg: "RS256", typ: "JWT" };
  const jwtClaimSet = {
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(jwtHeader));
  const encodedClaims = base64UrlEncode(JSON.stringify(jwtClaimSet));
  const unsignedToken = `${encodedHeader}.${encodedClaims}`;

  // Sign JWT using Web Crypto API
  const privateKey = sa.private_key;
  const signature = await signWithRsaKey(privateKey, unsignedToken);
  const signedJwt = `${unsignedToken}.${signature}`;

  // Exchange for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: signedJwt,
    }),
  });

  if (!tokenRes.ok) {
    throw new Error(`Google OAuth error (${tokenRes.status}): ${await tokenRes.text()}`);
  }

  const tokenData = await tokenRes.json() as any;
  const accessToken = tokenData.access_token;

  // Call Google Indexing API publish endpoint
  const indexingRes = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: targetUrl,
      type: "URL_UPDATED",
    }),
  });

  if (!indexingRes.ok) {
    throw new Error(`Google Indexing API error (${indexingRes.status}): ${await indexingRes.text()}`);
  }
}

// ─────────────────────────────────────────────────────────────
// 4. TELEGRAM API HELPERS
// ─────────────────────────────────────────────────────────────
async function sendTelegramMessage(token: string, chatId: number | string, text: string, parseMode?: string): Promise<any> {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const body: any = { chat_id: chatId, text };
  if (parseMode) body.parse_mode = parseMode;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

async function editTelegramMessage(token: string, chatId: number | string, messageId: number, text: string, parseMode?: string): Promise<any> {
  const url = `https://api.telegram.org/bot${token}/editMessageText`;
  const body: any = { chat_id: chatId, message_id: messageId, text };
  if (parseMode) body.parse_mode = parseMode;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}

// ─────────────────────────────────────────────────────────────
// 5. CRYPTO & BASE64 HELPERS
// ─────────────────────────────────────────────────────────────
function decodeBase64Utf8(str: string): string {
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64UrlEncode(str: string): string {
  const base64 = btoa(unescape(encodeURIComponent(str)));
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function signWithRsaKey(pemKey: string, data: string): Promise<string> {
  // Extract key contents from PEM
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = pemKey
    .substring(pemKey.indexOf(pemHeader) + pemHeader.length, pemKey.indexOf(pemFooter))
    .replace(/\s/g, "");

  const binaryDerString = atob(pemContents);
  const binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryDer.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(data)
  );

  let binary = "";
  const bytes = new Uint8Array(signature);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
