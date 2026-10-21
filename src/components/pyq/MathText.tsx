import React from "react";
import katex from "katex";

interface MathTextProps {
  text: string;
  className?: string;
}

function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;|&lsquo;/g, "'")
    .replace(/&rdquo;|&ldquo;/g, '"')
    .replace(/&times;/g, "×")
    .replace(/&divide;/g, "÷")
    .replace(/&deg;/g, "°")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&minus;/g, "−")
    .replace(/&plusmn;/g, "±")
    .replace(/&radic;/g, "√")
    .replace(/&theta;/g, "θ")
    .replace(/&Theta;/g, "Θ")
    .replace(/&pi;/g, "π")
    .replace(/&alpha;/g, "α")
    .replace(/&beta;/g, "β")
    .replace(/&gamma;/g, "γ")
    .replace(/&Delta;/g, "Δ")
    .replace(/&ang;/g, "∠")
    .replace(/&ratio;/g, ":")
    .replace(/&ge;/g, "≥")
    .replace(/&le;/g, "≤")
    .replace(/&ne;/g, "≠")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function cleanMath(raw: string): string {
  let math = raw;
  math = math
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&theta;/g, "\\theta ")
    .replace(/&Theta;/g, "\\Theta ")
    .replace(/&pi;/g, "\\pi ")
    .replace(/&deg;/g, "^\\circ")
    .replace(/&divide;/g, "\\div ")
    .replace(/&times;/g, "\\times ")
    .replace(/&plusmn;/g, "\\pm ")
    .replace(/&radic;/g, "\\sqrt ")
    .replace(/&minus;/g, "-")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/&Delta;/g, "\\Delta ")
    .replace(/&ang;/g, "\\angle ")
    .replace(/&rsquo;|&lsquo;/g, "'")
    .replace(/&rdquo;|&ldquo;/g, '"');

  // Fix array column specifier *{20}{c} -> cccccccccccccccccccc
  math = math.replace(/\{(\*\{(\d+)\}\{(\w+)\})\}/g, (_, __, count, col) => {
    return "{" + col.repeat(parseInt(count, 10)) + "}";
  });
  math = math.replace(/\*\{(\d+)\}\{(\w+)\}/g, (_, count, col) => {
    return col.repeat(parseInt(count, 10));
  });

  return math.trim();
}

type TokenPart =
  | { type: "text"; content: string }
  | { type: "math"; html: string; isDisplay: boolean };

function parseMathAndText(input: string): TokenPart[] {
  if (!input || typeof input !== "string") return [];

  // Check if text is naked math without delimiters (e.g. \frac{1}{4} or \sqrt{3})
  let text = input;
  const trimmed = text.trim();
  if (
    !trimmed.includes("\\(") &&
    !trimmed.includes("\\[") &&
    !trimmed.includes("$") &&
    (trimmed.startsWith("\\frac") ||
      trimmed.startsWith("-\\frac") ||
      trimmed.startsWith("\\sqrt") ||
      /^\d+\\frac/.test(trimmed))
  ) {
    text = `\\(${trimmed}\\)`;
  }

  // Regex to split text by delimiters: \[...\], \$\$...\$\$, \(...\), $...$
  const tokenRegex = /(\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\\\(.*?\\\)|\$(?:[^\$\n]+?)\$)/g;
  const parts: TokenPart[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const plainText = text.substring(lastIndex, match.index);
      parts.push({ type: "text", content: decodeHtmlEntities(plainText) });
    }

    const token = match[0];
    let isDisplay = false;
    let mathInner = "";

    if (token.startsWith("\\[") && token.endsWith("\\]")) {
      isDisplay = true;
      mathInner = token.slice(2, -2);
    } else if (token.startsWith("$$") && token.endsWith("$$")) {
      isDisplay = true;
      mathInner = token.slice(2, -2);
    } else if (token.startsWith("\\(") && token.endsWith("\\)")) {
      isDisplay = false;
      mathInner = token.slice(2, -2);
    } else if (token.startsWith("$") && token.endsWith("$")) {
      const inner = token.slice(1, -1);
      // If it looks like blood relation/reasoning symbols rather than math
      if (/\b(means|father|mother|sister|brother|husband|wife|son|daughter)\b/i.test(inner)) {
        parts.push({ type: "text", content: decodeHtmlEntities(token) });
        lastIndex = tokenRegex.lastIndex;
        continue;
      }
      isDisplay = false;
      mathInner = inner;
    }

    try {
      const cleaned = cleanMath(mathInner);
      const html = katex.renderToString(cleaned, {
        displayMode: isDisplay,
        throwOnError: false,
        strict: false,
      });
      parts.push({ type: "math", html, isDisplay });
    } catch {
      parts.push({ type: "text", content: decodeHtmlEntities(token) });
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", content: decodeHtmlEntities(text.substring(lastIndex)) });
  }

  return parts;
}

export function MathText({ text, className = "" }: MathTextProps) {
  if (!text) return null;

  // Fast path: if no LaTeX delimiters and no HTML entities
  if (!text.includes("&") && !text.includes("\\") && !text.includes("$")) {
    return <span className={className}>{text}</span>;
  }

  const parts = parseMathAndText(text);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.type === "text") {
          return <React.Fragment key={idx}>{part.content}</React.Fragment>;
        }
        return (
          <span
            key={idx}
            className={
              part.isDisplay
                ? "my-2 block overflow-x-auto text-center"
                : "inline-block align-middle mx-0.5"
            }
            dangerouslySetInnerHTML={{ __html: part.html }}
          />
        );
      })}
    </span>
  );
}
