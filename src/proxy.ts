import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REMOVED_BLOG_SLUGS = new Set([
  "upessc-pgt-recruitment-2026",
  "dsssb-recruitment-2026-je-electrical-mts",
  "punjab-haryana-high-court-chowkidar-recruitment-2026",
  "odisha-police-constable-recruitment-2026",
  "bel-recruitment-2026-probationary-engineer",
  "mecon-recruitment-2026",
  "ncrtc-recruitment-2026",
  "nit-goa-faculty-recruitment-2026",
  "press-council-of-india-aso-recruitment-2026",
  "rrb-paramedical-recruitment-2026",
  "ntpc-assistant-officer-recruitment-2026",
  "upessc-prt-assistant-teacher-2026",
  "mpesb-mp-police-constable-2026",
  "bpsc-school-teacher-tre-4-0-2026",
  "mpesb-primary-and-secondary-teachers-mspstet-2026",
  "uco-bank-so-2026",
  "india-post-gds-july-2026",
  "bihar-stet-online-form-2026",
  "up-special-tet-2026",
  "hindustan-copper-limited-recruitment-2026-fte",
  "india-post-gds-recruitment-2026-bpm-abpm-dak-sevak",
  "kerala-high-court-office-attendant-recruitment-2026",
  "csir-ncl-mts-recruitment-2026",
  "chaibasa-civil-court-recruitment-2026",
  "nlc-executive-recruitment-2026",
  "bpsc-tre-4-0-recruitment-2026",
  "jepc-school-of-excellence-manager-recruitment-2026",
  "pacific-mall-jaipur-recruitment-2026",
  "dsssb-recruitment-2026-sweeper-chowkidar",
  "ncert-ciet-recruitment-2026",
  "odisha-adarsha-vidyalaya-recruitment-2026",
  "mp-police-constable-driver-recruitment-2026",
  "gmch-chandigarh-recruitment-2026",
  "cwc-recruitment-2026",
  "nagaland-police-constable-recruitment-2026",
  "south-indian-bank-recruitment-2026",
  "isro-sdsc-shar-recruitment-2026",
  "bihar-librarian-vacancy-2026",
  "bhel-artisan-recruitment-2027",
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.slice("/blog/".length).replace(/\/+$/, "");
    if (REMOVED_BLOG_SLUGS.has(slug)) {
      return new NextResponse(
        "410 Gone - This article has been permanently removed as part of TypeHindi's editorial focus on Hindi typing and typing examinations.",
        {
          status: 410,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "X-Robots-Tag": "noindex",
          },
        }
      );
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:path*",
};
