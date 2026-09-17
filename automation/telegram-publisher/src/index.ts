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
  organization?: string;
  totalVacancies?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("TypeHindi Telegram Publisher Worker is Running.", { status: 200 });
    }

    try {
      const update = (await request.json()) as any;
      if (!update.message) {
        return new Response("OK", { status: 200 });
      }

      const chatId = update.message.chat.id;
      const userId = String(update.message.from?.id || "");

      // Security check: Only allow authorized user
      if (env.TELEGRAM_ALLOWED_USER_ID && userId !== env.TELEGRAM_ALLOWED_USER_ID) {
        await sendTelegramMessage(
          env.TELEGRAM_BOT_TOKEN,
          chatId,
          "⛔ Unauthorized. You do not have permission to publish articles on TypeHindi."
        );
        return new Response("OK", { status: 200 });
      }

      // Process in background with ctx.waitUntil so Telegram gets instant 200 OK
      if (ctx && typeof ctx.waitUntil === "function") {
        ctx.waitUntil(processTelegramUpdate(update, env));
      } else {
        await processTelegramUpdate(update, env);
      }

      // Return 200 OK immediately to prevent Telegram retries!
      return new Response("OK", { status: 200 });
    } catch (error: any) {
      console.error("Webhook error:", error);
      return new Response("OK", { status: 200 });
    }
  },
};

async function processTelegramUpdate(update: any, env: Env): Promise<void> {
  const chatId = update.message.chat.id;
  const messageText = (update.message.text || update.message.caption || "").trim();
  const document = update.message.document;

  if (messageText === "/start" || messageText === "/help") {
    const welcome =
      `👋 *Welcome to TypeHindi Article Publisher!*\n\n` +
      `You can send me any of the following:\n` +
      `1. 📄 *A PDF file* (Official notification document)\n` +
      `2. 🔗 *A Website link* (Official notification or news URL)\n` +
      `3. ✍️ *Text prompt / notes* (Exam details and instructions)\n\n` +
      `I will automatically:\n` +
      `• Extract all information from your source\n` +
      `• Write a complete 2,500+ word structured guide (Hindi + English)\n` +
      `• Generate a bold 1200x630 banner image\n` +
      `• Commit both to GitHub master to trigger live deployment\n` +
      `• Request Google Search Console indexing`;
    await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, welcome, "Markdown");
    return;
  }

  let progressMsg: any = null;
  try {
    // Step 1: Detect Source Type (PDF, URL, or Text)
    let sourcePrompt = messageText;
    let pdfBase64: string | null = null;

    progressMsg = await sendTelegramMessage(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      `📥 *Received your request!*\nAnalyzing source input...`,
      "Markdown"
    );

    if (document && (document.mime_type === "application/pdf" || document.file_name?.endsWith(".pdf"))) {
      await editTelegramMessage(
        env.TELEGRAM_BOT_TOKEN,
        chatId,
        progressMsg.result.message_id,
        `📄 *Downloading & reading PDF:* \`${escapeMarkdown(document.file_name || "Notification.pdf")}\`...`,
        "Markdown"
      );
      pdfBase64 = await downloadTelegramFileBase64(env.TELEGRAM_BOT_TOKEN, document.file_id);
      sourcePrompt = `[PDF Document Attached: ${document.file_name || "Notification"}]\nInstructions/Notes from user: ${messageText || "Generate full structured recruitment guide from this PDF."}`;
    } else {
      const urlMatch = messageText.match(/https?:\/\/[^\s]+/);
      if (urlMatch) {
        const targetUrl = urlMatch[0];
        await editTelegramMessage(
          env.TELEGRAM_BOT_TOKEN,
          chatId,
          progressMsg.result.message_id,
          `🔗 *Fetching website content from:* \`${escapeMarkdown(targetUrl)}\`...`,
          "Markdown"
        );
        try {
          const pageText = await fetchWebpageContent(targetUrl);
          sourcePrompt = `Source Webpage Content (${targetUrl}):\n${pageText.slice(0, 25000)}\n\nUser Instructions: ${messageText}`;
        } catch (e: any) {
          sourcePrompt = `Source URL: ${targetUrl} (Could not fetch directly: ${e.message}). Please generate based on: ${messageText}`;
        }
      }
    }

    // Step 2: Call Gemini API with strict Article Structure
    await editTelegramMessage(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      progressMsg.result.message_id,
      `⏳ *Generating comprehensive bilingual article with Gemini 3.6 Flash...*\nFollowing the official recruitment structure (~25-35s)...`,
      "Markdown"
    );

    const blogPost = await generateStructuredArticleWithGemini(env.GEMINI_API_KEY, sourcePrompt, pdfBase64);

    // Step 3: Generate Bold Banner Image (SVG)
    await editTelegramMessage(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      progressMsg.result.message_id,
      `🎨 *Creating bold featured banner image for:* \`${escapeMarkdown(blogPost.titleEn)}\`...`,
      "Markdown"
    );

    const bannerSvg = generateBannerSvg(
      blogPost.titleEn,
      blogPost.organization || "Official Recruitment 2026",
      blogPost.totalVacancies || "Check Notification"
    );

    // Prepend the image to content markdown
    const imageTag = `![${blogPost.titleEn}](/images/blogs/${blogPost.slug}.svg)\n\n`;
    blogPost.contentEn = imageTag + blogPost.contentEn;
    blogPost.content = imageTag + blogPost.content;

    // Step 4: Commit Image & Article to GitHub
    await editTelegramMessage(
      env.TELEGRAM_BOT_TOKEN,
      chatId,
      progressMsg.result.message_id,
      `📦 *Committing article & banner image to GitHub master...*`,
      "Markdown"
    );

    const repo = env.GITHUB_REPO || "therohitbiruli/typehindi";
    // 4a: Commit image
    await commitFileToGitHub(
      env.GITHUB_TOKEN,
      repo,
      `public/images/blogs/${blogPost.slug}.svg`,
      bannerSvg,
      `feat(blog): add banner image for ${blogPost.titleEn}`,
      false
    );

    // 4b: Commit blogs.ts
    const commitResult = await commitBlogToGitHub(env.GITHUB_TOKEN, repo, blogPost);

    // Step 5: Request Google Search Console Indexing
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

    // Step 6: Send Final Completion Card
    const report =
      `🎉 *Article Successfully Published!*\n\n` +
      `📰 *Title (EN):* ${escapeMarkdown(blogPost.titleEn)}\n` +
      `🇮🇳 *Title (HI):* ${escapeMarkdown(blogPost.title)}\n` +
      `📂 *Category:* ${blogPost.category}\n` +
      `🖼️ *Banner Image:* Generated with Bold Typography\n` +
      `🔗 *Live URL:* [${liveUrl}](${liveUrl})\n` +
      `📦 *GitHub Commit:* \`${commitResult.sha.slice(0, 7)}\`\n` +
      `🔍 *Google Indexing:* ${indexingResult}\n\n` +
      `_Auto-deployment is in progress on your hosting provider._`;

    await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, report, "Markdown");
  } catch (error: any) {
    console.error("Processing error:", error);
    const errText = `❌ *Publication Error:*\n${escapeMarkdown(error.message || "Unknown error")}`;
    if (progressMsg?.result?.message_id) {
      await editTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, progressMsg.result.message_id, errText, "Markdown");
    } else {
      await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, errText, "Markdown");
    }
  }
}

// ─────────────────────────────────────────────────────────────
// 1. GEMINI CONTENT GENERATION WITH USER'S EXACT STRUCTURE
// ─────────────────────────────────────────────────────────────
async function generateStructuredArticleWithGemini(
  apiKey: string,
  promptText: string,
  pdfBase64: string | null
): Promise<BlogPost> {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const monthEn = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const dateEnStr = `${day} ${monthEn}, ${year}`;

  const HINDI_MONTHS = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
  const dateHiStr = `${day} ${HINDI_MONTHS[currentDate.getMonth()]}, ${year}`;

  const systemInstruction = `You are the lead government exam editor and typing mentor at TypeHindi.in.
Your task is to write a comprehensive, authoritative, 2,500+ word bilingual article (English 'contentEn' and Hindi 'content') strictly following the required recruitment article structure.

OUTPUT MUST BE RAW VALID JSON MATCHING THIS EXACT SCHEMA:
{
  "slug": "kebab-case-descriptive-slug",
  "titleEn": "[Recruitment Name] 2026 – Notification, Vacancy, Eligibility, Salary, Selection Process & Apply Online",
  "title": "[भर्ती का नाम] 2026 – अधिसूचना, रिक्तियां, योग्यता, वेतन, चयन प्रक्रिया व ऑनलाइन आवेदन",
  "excerptEn": "Engaging 2-sentence English summary covering posts, eligibility, vacancies, and application dates.",
  "excerpt": "रोचक 2-पंक्ति का हिंदी सारांश जिसमें पद, योग्यता, पद संख्या व आवेदन की मुख्य तिथियां शामिल हों।",
  "dateEn": "${dateEnStr}",
  "date": "${dateHiStr}",
  "author": "TypeHindi Team",
  "category": "Exam Guide",
  "organization": "Short Name of Organization (e.g. SSC, DSSSB, Rajasthan HC)",
  "totalVacancies": "e.g. 3,500+ Posts",
  "contentEn": "FULL ENGLISH MARKDOWN",
  "content": "FULL HINDI MARKDOWN"
}

REQUIRED STRUCTURE FOR BOTH 'contentEn' AND 'content' (Translate section titles and tables appropriately for Hindi):

1. Introduction
A short introduction explaining the recruitment, organization, major posts, total vacancies, and why candidates should apply.

2. [Recruitment Name] 2026 Overview
Markdown Table with columns: Particular | Details
(Organization, Post Name, Total Vacancies, Job Location, Application Mode, Starting Date, Last Date, Qualification, Age Limit, Salary, Selection Process, Official Website).

3. [Recruitment Name] Vacancy 2026
Explain the vacancies. Provide a post-wise table (Post | Vacancies) and category-wise table (General, OBC, SC, ST, EWS, PwBD) if available.

4. Post-Wise Details
For each major post, detail:
- Duties & Responsibilities
- Qualification
- Salary / Pay level
- Age requirement
- Experience (if required)

5. Educational Qualification
Detail minimum qualification (10th / 12th / Graduate / Diploma / Engineering) and any subject-specific criteria.

6. Age Limit
Minimum age, maximum age, crucial cut-off date, and category-wise age relaxations (SC/ST, OBC, PwBD, Ex-Servicemen).

7. Application Fee
Table with: Category | Fee (General/OBC/EWS, SC/ST, Female, PwBD). Mention payment modes and refund policy.

8. Important Dates
Table with: Event | Date (Notification Release, Application Starts, Last Date to Apply, Fee Payment Last Date, Correction Window, Exam Date, Admit Card).

9. Selection Process
Sequential step-by-step journey: Written Examination → Skill/Typing Test → Document Verification → Medical Examination → Final Selection. (Do not assume every exam has typing test; only state what applies).

10. Exam Pattern
Table with: Subject | Questions | Marks | Total. Explain duration, negative marking scheme, exam language, and mode (CBT/OMR).

11. Typing Test / Skill Test (CRITICAL: Only include when applicable to this recruitment!)
Explain:
- Which posts require typing/skill test
- Typing language (English / Hindi)
- Required speed (WPM) and key depressions
- Test duration (e.g. 10 or 15 minutes)
- Font requirement (e.g. Mangal font, InScript layout, or KrutiDev)
- Evaluation criteria (qualifying nature vs merit, permissible error margins)
- NATURAL INTERNAL LINKS TO TYPEHINDI TOOLS:
  * [10-Minute Typing Test Simulator](/test)
  * [Mangal Font Typing Test](/mangal-font-typing-test)
  * [Touch Typing Lessons for Beginners](/learn)
  * [Hindi InScript Keyboard Layout Guide](/keyboard-layout)
  * [Typing Word Games](/game)
  * [Pitman Shorthand & Dictation Platform](/shorthand) (for Stenographer posts)

12. Syllabus
Detailed subject-wise breakdown:
- General Intelligence & Reasoning
- General Awareness & Current Affairs
- Quantitative Aptitude / Mathematics
- English Language & Comprehension
- Computer Knowledge

13. How to Apply Online
Detailed step-by-step instructions from Step 1 (Visit Official Website) to Step 10 (Submit and Print Application), along with common portal mistakes to avoid.

14. Documents Required
Checklist: Aadhaar/ID, Photo, Signature, Educational Certificates, Caste Certificate, EWS Certificate, PwBD Certificate, Experience (if any).

15. Salary / Pay Scale
Pay level, pay band (e.g. Pay Level 2 ₹19,900–₹63,200), in-hand salary, and allowances (DA, HRA, TA).

16. Job Profile
Daily routine, office duties, computer operations, typing responsibilities, public dealing, and working environment.

17. Probation / Training / Posting
Training period, probation rules, posting locations, transfer policy, working hours, and service bond.

18. How to Prepare
- Written Exam Preparation (mock tests, syllabus pacing)
- Typing Preparation (with TypeHindi practice links)
- Skill Test Preparation (for DEO, stenography)

19. Important Things to Check Before Applying
Checklist before submitting.

20. Common Mistakes While Applying
Pitfalls to avoid (wrong DOB, category, blurry photo/signature, last-day server rush).

21. [Recruitment Name] 2026 FAQs
Provide at least 10 direct, clear Q&A pairs addressing last date, vacancies, qualifications, age limit, salary, typing speed, negative marking, application link, and exam date.

22. Final Words
Inspiring, encouraging conclusion for aspirants.

IMPORTANT: Output ONLY raw valid JSON matching the schema. No markdown wrapping around the JSON.`;

  const contents: any[] = [];
  const parts: any[] = [];

  if (pdfBase64) {
    parts.push({
      inlineData: {
        mimeType: "application/pdf",
        data: pdfBase64,
      },
    });
  }

  parts.push({ text: `Source Information & Prompt:\n${promptText}` });
  contents.push({ role: "user", parts });

  const CANDIDATE_MODELS = [
    "gemini-3-flash-preview",
    "gemini-3.1-flash-lite",
    "gemini-flash-lite-latest",
    "gemini-3.5-flash-lite",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
  ];

  const body = {
    contents,
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: {
      temperature: 0.35,
      responseMimeType: "application/json",
    },
  };

  let lastError: Error | null = null;
  for (const model of CANDIDATE_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`Model ${model} returned HTTP ${res.status}: ${errText}`);
        if (res.status === 503 || res.status === 429 || res.status === 404) {
          lastError = new Error(`Model ${model} (${res.status}): ${errText}`);
          continue; // Try next fallback model automatically
        }
        throw new Error(`Gemini API error (${res.status}): ${errText}`);
      }

      const data = (await res.json()) as any;
      const rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawJson) {
        throw new Error(`Model ${model} returned empty content`);
      }

      let cleanJson = rawJson.trim();
      if (cleanJson.startsWith("```json")) {
        cleanJson = cleanJson.replace(/^```json\s*/i, "").replace(/\s*```$/, "");
      } else if (cleanJson.startsWith("```")) {
        cleanJson = cleanJson.replace(/^```\s*/, "").replace(/\s*```$/, "");
      }

      return JSON.parse(cleanJson) as BlogPost;
    } catch (e: any) {
      lastError = e;
      console.warn(`Model ${model} failed, trying next fallback model...`);
    }
  }

  throw lastError || new Error("All candidate Gemini models failed");
}

// ─────────────────────────────────────────────────────────────
// 2. BOLD BANNER IMAGE GENERATOR (HIGH-RES 1200x630 SVG)
// ─────────────────────────────────────────────────────────────
function generateBannerSvg(title: string, organization: string, vacancies: string): string {
  // Wrap title text into 2-3 lines
  const words = title.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if ((currentLine + " " + word).trim().length <= 32) {
      currentLine = (currentLine + " " + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
      if (lines.length >= 2) break; // Limit to 3 lines max
    }
  }
  if (currentLine && lines.length < 3) lines.push(currentLine);

  const escapeXml = (unsafe: string) =>
    unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "&": return "&amp;";
        case "'": return "&apos;";
        case '"': return "&quot;";
        default: return c;
      }
    });

  const lineElements = lines
    .map((l, i) => `<tspan x="80" dy="${i === 0 ? 0 : 64}">${escapeXml(l)}</tspan>`)
    .join("");

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070B14"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <radialGradient id="glowTopRight" cx="90%" cy="10%" r="50%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBottomLeft" cx="10%" cy="90%" r="50%">
      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  <rect width="1200" height="630" fill="url(#glowTopRight)"/>
  <rect width="1200" height="630" fill="url(#glowBottomLeft)"/>

  <!-- Subtle Grid Pattern -->
  <g opacity="0.08" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100"/>
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="300" x2="1200" y2="300"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="0" y1="500" x2="1200" y2="500"/>
    <line x1="200" y1="0" x2="200" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
    <line x1="1000" y1="0" x2="1000" y2="630"/>
  </g>

  <!-- Top Left Brand Badge -->
  <g transform="translate(80, 70)">
    <rect width="210" height="38" rx="19" fill="#1E293B" stroke="#3B82F6" stroke-width="1.5" stroke-opacity="0.4"/>
    <text x="105" y="24" fill="#60A5FA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5" text-anchor="middle">
      TYPEHINDI.IN
    </text>
  </g>

  <!-- Organization Category Pill -->
  <g transform="translate(305, 70)">
    <rect width="260" height="38" rx="19" fill="#1E1B4B" stroke="#818CF8" stroke-width="1.5" stroke-opacity="0.5"/>
    <text x="130" y="24" fill="#A5B4FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="1.2" text-anchor="middle">
      ${escapeXml(organization.toUpperCase().slice(0, 24))} 2026
    </text>
  </g>

  <!-- Main Bold Headline -->
  <text x="80" y="210" fill="url(#titleGradient)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="46" font-weight="900" letter-spacing="-0.5">
    ${lineElements}
  </text>

  <!-- Highlights Container Pill -->
  <g transform="translate(80, 470)">
    <rect width="1040" height="90" rx="20" fill="#0F172A" stroke="#334155" stroke-width="2"/>
    
    <!-- Item 1: Vacancies -->
    <g transform="translate(35, 22)">
      <text x="0" y="20" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">VACANCIES</text>
      <text x="0" y="50" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900">${escapeXml(vacancies.slice(0, 18))}</text>
    </g>

    <!-- Separator 1 -->
    <line x1="260" y1="20" x2="260" y2="70" stroke="#334155" stroke-width="2"/>

    <!-- Item 2: Eligibility -->
    <g transform="translate(295, 22)">
      <text x="0" y="20" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">QUALIFICATION</text>
      <text x="0" y="50" fill="#F1F5F9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">10th / 12th / Degree</text>
    </g>

    <!-- Separator 2 -->
    <line x1="560" y1="20" x2="560" y2="70" stroke="#334155" stroke-width="2"/>

    <!-- Item 3: Selection -->
    <g transform="translate(595, 22)">
      <text x="0" y="20" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">SELECTION</text>
      <text x="0" y="50" fill="#F1F5F9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">Exam + Typing Test</text>
    </g>

    <!-- Separator 3 -->
    <line x1="840" y1="20" x2="840" y2="70" stroke="#334155" stroke-width="2"/>

    <!-- Item 4: Status -->
    <g transform="translate(875, 22)">
      <text x="0" y="20" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">OFFICIAL GUIDE</text>
      <text x="0" y="50" fill="#4ADE80" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="900">Apply Online ➔</text>
    </g>
  </g>
</svg>`;
}

// ─────────────────────────────────────────────────────────────
// 3. GITHUB REPOSITORY COMMIT HELPERS
// ─────────────────────────────────────────────────────────────
async function commitFileToGitHub(
  token: string,
  repo: string,
  filePath: string,
  contentStr: string,
  commitMessage: string,
  isBase64 = false
): Promise<void> {
  const getUrl = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=master`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "TypeHindi-Publisher-Worker",
  };

  let sha: string | undefined;
  const checkRes = await fetch(getUrl, { headers });
  if (checkRes.ok) {
    const existing = (await checkRes.json()) as any;
    sha = existing.sha;
  }

  const putUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const body: any = {
    message: commitMessage,
    content: isBase64 ? contentStr : encodeBase64Utf8(contentStr),
    branch: "master",
  };
  if (sha) body.sha = sha;

  const res = await fetch(putUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to commit ${filePath}: ${await res.text()}`);
  }
}

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

  const fileData = (await fileRes.json()) as any;
  const currentContent = decodeBase64Utf8(fileData.content.replace(/\n/g, ""));

  const marker = "export const blogs: BlogPost[] = [";
  const markerIndex = currentContent.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error("Could not locate 'export const blogs: BlogPost[] = [' inside blogs.ts");
  }

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

  const putData = (await putRes.json()) as any;
  return { sha: putData.commit.sha };
}

// ─────────────────────────────────────────────────────────────
// 4. TELEGRAM FILE DOWNLOAD & WEBPAGE FETCHER
// ─────────────────────────────────────────────────────────────
async function downloadTelegramFileBase64(token: string, fileId: string): Promise<string> {
  // Get file path
  const getFileUrl = `https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`;
  const fileRes = await fetch(getFileUrl);
  const fileData = (await fileRes.json()) as any;
  if (!fileData.ok || !fileData.result.file_path) {
    throw new Error("Could not obtain file path from Telegram.");
  }

  const downloadUrl = `https://api.telegram.org/file/bot${token}/${fileData.result.file_path}`;
  const res = await fetch(downloadUrl);
  if (!res.ok) {
    throw new Error("Could not download file buffer from Telegram.");
  }

  const buffer = await res.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 8192;
  for (let i = 0; i < bytes.byteLength; i += chunkSize) {
    const chunk = bytes.subarray(i, Math.min(i + chunkSize, bytes.byteLength));
    binary += String.fromCharCode.apply(null, chunk as any);
  }
  return btoa(binary);
}

async function fetchWebpageContent(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch webpage: ${res.statusText}`);
  }

  const html = await res.text();
  // Strip tags for clean text
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ─────────────────────────────────────────────────────────────
// 5. GOOGLE SEARCH CONSOLE INDEXING API
// ─────────────────────────────────────────────────────────────
async function requestGoogleIndexing(serviceAccountJson: string, targetUrl: string): Promise<void> {
  const sa = JSON.parse(serviceAccountJson);
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

  const privateKey = sa.private_key;
  const signature = await signWithRsaKey(privateKey, unsignedToken);
  const signedJwt = `${unsignedToken}.${signature}`;

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

  const tokenData = (await tokenRes.json()) as any;
  const accessToken = tokenData.access_token;

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
// 6. TELEGRAM API HELPERS
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
// 7. CRYPTO & BASE64 HELPERS
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

  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", cryptoKey, new TextEncoder().encode(data));

  let binary = "";
  const bytes = new Uint8Array(signature);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
