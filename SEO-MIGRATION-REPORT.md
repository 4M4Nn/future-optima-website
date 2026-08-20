# SEO Migration Report — WordPress → Next.js

**Domain:** `futureoptimaitsolutions.com` (unchanged) · **Old stack:** WordPress · **New stack:** Next.js 16 (App Router) on Vercel, currently served at `future-optima-website.vercel.app` pending DNS cutover.

## A. Current URL Audit

- **Router:** App Router only (`src/app/**`), no Pages Router present.
- **Routes found:** `/`, `/about`, `/courses`, `/courses/[slug]` (15 courses), `/blog`, `/blog/[slug]` (21 posts), `/placements`, `/gallery`, `/faq`, `/contact`, `/virtual-office`, `/hire-from-us`, `/privacy-policy`, `/terms`, plus the routes added in this pass: `/career`, `/career/faculty`, `/career/become-a-tutor`, `/career/open-positions`, `/testimonials`, `/vision-mission`, `/news`, `/news/[slug]` (2 posts).
- **Dynamic routes:** `courses/[slug]`, `blog/[slug]`, `news/[slug]` — all statically generated via `generateStaticParams`.
- **Sitemap:** `src/app/sitemap.ts`, generated from `courses`, `blogPosts`, `newsPosts` data plus a static-routes array.
- **Robots:** `src/app/robots.ts`, allows all, points at `/sitemap.xml`.
- **Metadata:** per-page `export const metadata` (static pages) or `generateMetadata` (dynamic pages) on every route; root `layout.tsx` sets sitewide defaults + a title template.
- **Canonicals:** every page sets `alternates: { canonical: "/path" } ` (relative), resolved against `metadataBase` in the root layout.
- **Structured data:** `EducationalOrganization` (root layout), `FAQPage` (FAQ page + blog posts with FAQs), `Article`/`NewsArticle` + `BreadcrumbList` (blog/news detail pages), `JobPosting` (new open-positions page), `AggregateRating` (new testimonials page).
- **Internal links:** driven centrally by `src/lib/data/nav.ts` (`mainNav`, `footerNav`) plus in-page `Link`s; all point directly at canonical paths, no link goes through a redirect.
- **Redirects:** none existed before this pass. `next.config.ts` now carries the full legacy-URL redirect map (see below).
- **Middleware:** none.
- **Env vars:** none related to site URL/GA/GSC — the production URL is a plain constant (`siteConfig.url` in `src/lib/data/site.ts`), already set to `https://futureoptimaitsolutions.com`.

## B. Exact URL Changes

See `SEO-MIGRATION-MAP.md` for the full per-URL table. Summary:

- **Unchanged paths** (`/`, `/about`, `/courses`, `/placements`, `/gallery`): only WordPress's trailing slash differs, handled automatically.
- **Path changed:** `/contact-us/` → `/contact` (692 impressions — highest-priority path change).
- **Course pages:** moved under a `/courses/` prefix, same slug (`/python-full-stack-with-ai/` → `/courses/python-full-stack-with-ai`, etc.).
- **Long-tail SEO landing pages / blog posts:** mapped to the closest real equivalent article or course page — never to the homepage by default, and never through more than one redirect hop.

## C. URLs That Remain Identical

`/`, `/courses`, `/placements`, `/gallery`, `/about` — same canonical path on both sites. WordPress's trailing-slash form 301/308-redirects to the exact same route automatically (Next.js default behavior when the non-slash route exists — verified locally: requesting `/about/` against a production build returns `308 → /about`).

## D. URLs Requiring 301 Redirects

Implemented in `next.config.ts` via `redirects()`, `permanent: true`, one hop each (no chains). Covers all 19 explicitly-tracked GSC URLs that don't already match 1:1, plus ~35 additional legacy WordPress URLs discovered from the visible site structure (course landing-page variants, blog posts, retired "Software Testing" course pages). See `SEO-MIGRATION-MAP.md` Section B for the grouped list.

**Implementation detail:** `trailingSlash: false` + `skipTrailingSlashRedirect: true` is set explicitly so the legacy-specific redirect rules (which match on the WordPress trailing-slash source) are evaluated before Next's own automatic trailing-slash handling — otherwise Next would strip the slash and 404 before our redirect rule ever got a chance to match. A catch-all `/:path*/ → /:path*` rule runs last to restore normal trailing-slash normalization for every other path.

## E. High-Impression URLs Given Special Protection

| URL | Impressions | Outcome |
|---|---:|---|
| `/is-a-good-python-full-stack-course-worth-the-cost/` | 1,207 | 301 → `/blog/is-python-full-stack-course-kochi-worth-it` (real matching article) |
| `/contact-us/` | 692 | 301 → `/contact` |
| `/about/` | 810 | Same path, automatic slash normalization |
| `/gallery/` | 1,614 | Same path, automatic slash normalization |
| `/why-choose-the-best-software-training-institute-in-kochi-kerala-for-your-career/` | 597 | 301 → `/blog/how-to-choose-best-software-training-institute-kochi` |
| `/courses/` | 683 | Same path, automatic slash normalization |

None of these disappear or 404.

## F. Missing Pages

Two GSC URLs had no direct 1:1 content equivalent on the new site and were redirected to the closest real page rather than left as a content gap:

- `/keralas-first-ai-lab-for-practical-ai-learning-projects-and-career-focused-training/` (97 impressions) → `/about` (covers the same "AI Lab" USP, but it's a weak topical match). **Recommend:** write a short dedicated blog article on the AI Lab post-launch and upgrade this redirect target.
- `/job-oriented-it-courses-to-build-your-career-best-software-training-institute-in-kochi-kerala/` (342 impressions) → `/courses` (the hub genuinely lists job-oriented IT courses, a reasonable match).
- A further ~15 long-tail WordPress SEO landing pages (course-benefit variants like `/master-the-future-with-python-full-stack-with-ai-...`) had no dedicated new-site article; each was mapped to its closest matching course or blog page rather than left to 404. Full list in `next.config.ts`.

No URL was redirected to the homepage as a default catch-all — every redirect target is topically relevant.

## G. Sitemap Status

`src/app/sitemap.ts` was hardcoded to `https://future-optima-website.vercel.app` — **fixed** to use `siteConfig.url` (`https://futureoptimaitsolutions.com`). Includes all static pages, all 15 course pages, all 21 blog posts, and the 2 new news posts. No redirected, 404, duplicate, or noindex URLs are included.

## H. Robots.txt Status

`src/app/robots.ts` was also hardcoded to the Vercel domain — **fixed** to `siteConfig.url`. Allows all crawling, sitemap correctly points at `https://futureoptimaitsolutions.com/sitemap.xml`. No important paths, course pages, or blog pages are blocked; no CSS/JS blocking rules exist.

## I. Canonical Status

Root layout's `metadataBase` was hardcoded to `https://future-optima-website.vercel.app` — **fixed** to `new URL(siteConfig.url)`. Every page sets a relative `alternates.canonical` (e.g. `/about`), resolved against `metadataBase`; fixing the one root value corrects canonicals sitewide in a single change — homepage, courses, course detail pages, about, contact, placements, gallery, FAQ, blog, and all new pages all now resolve to `https://futureoptimaitsolutions.com/...`.

## J. Schema/AEO Status

- `EducationalOrganization` schema on every page (root layout) — name, address, phone, email, social profiles, all matching real `siteConfig` data.
- `FAQPage` schema on the FAQ page and any blog post with FAQs.
- `Article`/`NewsArticle` + `BreadcrumbList` schema on blog and news detail pages.
- **New:** `JobPosting` schema on `/career/open-positions`, built from the real current opening (Cloud Computing & DevOps Tutor).
- **New:** `AggregateRating` on `/testimonials`, sourced from the institute's live Google Business Profile (5.0★, 233 reviews, verified via Google Maps at the time of writing) — not fabricated. Deliberately **not** using per-review `Review` schema markup, since Google's structured-data guidelines restrict Review/rich-snippet markup for third-party reviews reproduced on your own site; `AggregateRating` referencing a real, independently verifiable public rating is the compliant choice.
- No fake reviews, ratings, or unsupported claims were added anywhere.

## K. Internal-Link Status

All internal links are driven by `src/lib/data/nav.ts` and in-page `Link`s, and already point at final canonical paths (e.g. course links go straight to `/courses/[slug]`, never through a legacy path). New nav entries added for Career (dropdown with 4 children) and Testimonials/Vision & Mission/News (added to the "More" dropdown and footer), all pointing directly at final routes — none route through a redirect.

## L. GA4/GTM Status

**No GA4 or GTM implementation currently exists in this Next.js codebase** — no `G-XXXXXXX` or `GTM-XXXXX` tag, no `gtag()` calls, no `.env` analytics variables. If the current WordPress site has GA4 or GTM installed (Phase 13 assumes it does), that tracking will **not** carry over automatically on cutover — it needs to be added explicitly before or immediately after DNS switches over, using the same GA4 property ID used on WordPress so historical data stays continuous. Flagging this as an action item since it wasn't something I could "preserve" — there is nothing here yet to preserve.

## M. Final Migration Risk: **LOW**

All explicitly-tracked GSC URLs are either unchanged or covered by a single-hop 301 redirect to a real, topically relevant destination. No URL is left to 404. Canonical/sitemap/robots domain leakage (the biggest real risk found) is fixed. The two weakest-match redirects (AI Lab article, job-oriented-courses landing page) are flagged for a content follow-up but are not currently broken.

## N. Exact Actions Required Before Connecting `futureoptimaitsolutions.com` to Vercel

1. **Add GA4 tracking** using the same measurement ID as the current WordPress site (see Section L) — do this before or immediately at cutover so there's no analytics gap.
2. **Re-verify GSC property**: keep the existing `futureoptimaitsolutions.com` Search Console property as-is; do not create a new property for the Vercel domain. Once live, submit `https://futureoptimaitsolutions.com/sitemap.xml` via "Sitemaps" in the existing property (URL is already correct in code).
3. **Point DNS** for `futureoptimaitsolutions.com` at Vercel per Vercel's domain-connection instructions, then confirm the SSL certificate issues correctly.
4. **Spot-check the 5 highest-impression redirects live** immediately after cutover: `/is-a-good-python-full-stack-course-worth-the-cost/`, `/contact-us/`, `/about/`, `/gallery/`, `/courses/`.
5. **Decommission WordPress only after confirming redirects work** on the live domain — do not take WordPress offline pre-emptively.
6. **Optional follow-up content:** write a real article for the "Kerala's First AI Lab" topic and re-point that one redirect from `/about` to the new article once it exists.

## Build Verification

`npm run build` passed with zero errors after all changes in this pass (new pages, nav updates, sitemap/robots/canonical fixes, redirect map). No broken routes, no missing imports, no client/server component mismatches. All 62 routes generated successfully.

**Runtime verification against a local production server** (`next build && next start`), not just a successful build:

- `/` → **200 OK** (see critical bug note below)
- `/about/`, `/courses/`, `/placements/`, `/gallery/` → 308 → same path without trailing slash
- `/contact-us/` → 308 → `/contact`
- `/is-a-good-python-full-stack-course-worth-the-cost/` → 308 → `/blog/is-python-full-stack-course-kochi-worth-it`
- `/python-full-stack-with-ai/`, `/mern-stack-development/`, `/ai-powered-data-analytics/`, `/cybersecurity/`, `/ai/`, `/blogs/`, and every other redirect source spot-checked → all resolve to their documented destination in a single hop
- `/robots.txt` → correct production `Sitemap:` URL
- `/sitemap.xml` → zero occurrences of `vercel.app`, all new pages present
- Canonical `<link>` tag verified pointing at `https://futureoptimaitsolutions.com/...` on both a static page (`/career`) and the homepage
- All 8 new pages (`/career` + 3 subpages, `/testimonials`, `/vision-mission`, `/news` + 2 posts) return 200 and the new nav links render on every page

### Critical bug found and fixed during verification

The redirect map's catch-all trailing-slash normalizer (`{ source: "/:path*/", destination: "/:path*" }`) used a zero-or-more (`*`) path matcher. Because zero segments is a valid match for `*`, this rule was **also matching the bare homepage `/` itself** and 308-redirecting it to an **empty destination URL** — which would have taken the site's single highest-value page (303 clicks, 7,291 impressions) offline immediately on deployment. Caught by testing the live redirect behavior rather than trusting the build to pass, not by the build itself (a `next build` succeeding says nothing about redirect-rule correctness). Fixed by changing the matcher to one-or-more (`:path+`), which cannot match an empty segment list; re-verified `/` now returns a clean `200 OK` with the correct canonical tag.
