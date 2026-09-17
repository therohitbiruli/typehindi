# 🚀 TypeHindi Telegram Automated Publisher

A lightweight, serverless Cloudflare Worker that enables you to publish complete, SEO-optimized, bilingual typing articles to **TypeHindi.in** straight from your Telegram chat, automatically commit to GitHub, and instantly trigger Google Search Console indexing.

---

## ⚡ Architecture Flow
1. **You** send a topic/prompt via Telegram to your private bot.
2. **Cloudflare Worker** validates your Telegram User ID (blocks unauthorized users).
3. **Gemini 2.0 Flash API** generates a structured, high-quality bilingual `BlogPost` (Hindi + English) with exam details, tables, and internal links (`/practice`, `/test`, `/learn`, etc.).
4. **GitHub REST API** commits the new article directly to `src/data/blogs.ts` on `master`, triggering your website's auto-deployment.
5. **Google Indexing API** receives a publish request to crawl the new URL immediately.
6. **Telegram Bot** sends you a live link and status confirmation.

---

## 🛠️ Step-by-Step Setup Guide

### Step 1: Collect Your 4 Keys
1. **Telegram Bot Token & User ID**:
   - In Telegram, message `@BotFather`, run `/newbot`, name your bot, and copy the `TOKEN`.
   - Message `@userinfobot` to get your numeric `Id` (e.g. `123456789`).
2. **Google Gemini API Key**:
   - Get a free key at [Google AI Studio](https://aistudio.google.com/app/apikey).
3. **GitHub Personal Access Token**:
   - Generate a token at [GitHub Settings](https://github.com/settings/tokens) with `repo` permissions.
4. **Google Cloud Service Account (for Indexing API)**:
   - In [Google Cloud Console](https://console.cloud.google.com/), enable **Web Search Indexing API**.
   - Create a Service Account, generate a JSON Key, and download it.
   - In [Google Search Console](https://search.google.com/search-console), add the service account email as **Owner**.

---

### Step 2: Deploy to Cloudflare Workers

Open your terminal in `d:\TypeHindi.in\automation\telegram-publisher`:

```bash
cd d:\TypeHindi.in\automation\telegram-publisher
npx wrangler deploy
```

*(If this is your first time using Cloudflare Wrangler, it will open a browser window to log in to your free Cloudflare account).*

Once deployed, Cloudflare will output your Worker URL, e.g.:
`https://typehindi-telegram-publisher.<your-subdomain>.workers.dev`

---

### Step 3: Set Worker Secrets

Run the following commands to securely store your keys on Cloudflare:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
# Paste your Bot Token from @BotFather

npx wrangler secret put TELEGRAM_ALLOWED_USER_ID
# Paste your numeric Telegram ID from @userinfobot

npx wrangler secret put GEMINI_API_KEY
# Paste your Gemini API key

npx wrangler secret put GITHUB_TOKEN
# Paste your GitHub Personal Access Token

npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_JSON
# Paste the entire content of your Google Cloud Service Account JSON file as a single line
```

---

### Step 4: Connect Telegram to Your Cloudflare Worker (Set Webhook)

Run this single command in your terminal or browser (replace with your actual token and worker URL):

```bash
curl -F "url=https://typehindi-telegram-publisher.<your-subdomain>.workers.dev" https://api.telegram.org/bot<YOUR_TELEGRAM_BOT_TOKEN>/setWebhook
```

Telegram will respond:
```json
{"ok": true, "result": true, "description": "Webhook was set"}
```

---

### Step 5: Test It!

Open your Telegram bot and send:
> *Write an article about Rajasthan High Court LDC Typing & Efficiency Test 2026: KrutiDev vs InScript, speed criteria, error calculations, and practical preparation strategy.*

Within ~20 seconds, you will receive:
- Live generation update
- GitHub commit confirmation
- Google Search Console indexing ping
- Live URL: `https://typehindi.in/blog/rajasthan-high-court-ldc-typing-test-2026`
