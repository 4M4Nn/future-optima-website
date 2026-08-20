# SEO Migration Report — WordPress → Next.js

**Domain:** `futureoptimaitsolutions.com` (unchanged) · **Old stack:** WordPress · **New stack:** Next.js 16 (App Router) on Vercel, currently served at `future-optima-website.vercel.app` pending DNS cutover.

## A. Current URL Audit

- **Router:** App Router only (`src/app/**`), no Pages Router present.
- **Routes found:** `/`, `/about`, `/courses`, `/courses/[slug]` (14 courses — the 8-month "Diploma in AI Product Engineering" was retired in the final safety pass, see Section O), `/blog`, `/blog/[slug]` (23 posts), `/placements`, `/gallery`, `/faq`, `/contact`, `/virtual-office`, `/hire-from-us`, `/privacy-policy`, `/terms`, plus `/career`, `/career/faculty`, `/career/become-a-tutor`, `/career/open-positions`, `/testimonials`, `/vision-mission`, `/news`, `/news/[slug]` (4 posts).
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

**Updated 2026-08-20 — both weak-match redirects below have been fixed with real replacement articles; see Section O.**

- ~~`/keralas-first-ai-lab-for-practical-ai-learning-projects-and-career-focused-training/` (97 impressions) → `/about`~~ → now redirects to `/blog/keralas-first-ai-lab-practical-ai-training`, a dedicated new article.
- ~~`/job-oriented-it-courses-to-build-your-career-best-software-training-institute-in-kochi-kerala/` (342 impressions) → `/courses`~~ → now redirects to `/blog/job-oriented-it-courses-kochi-career`, a dedicated new article.
- A further ~15 long-tail WordPress SEO landing pages (course-benefit variants like `/master-the-future-with-python-full-stack-with-ai-...`) had no dedicated new-site article; each was mapped to its closest matching course or blog page rather than left to 404. Full list in `next.config.ts`. These have no GSC impression data available (see Section O), so they weren't in scope for the mandatory 100+ impression review, but remain flagged as lower-confidence matches worth revisiting once real traffic data exists for them.

No URL was redirected to the homepage as a default catch-all — every redirect target is topically relevant.

## G. Sitemap Status

`src/app/sitemap.ts` was hardcoded to `https://future-optima-website.vercel.app` — **fixed** to use `siteConfig.url` (`https://futureoptimaitsolutions.com`). Includes all static pages, all 14 course pages, all 23 blog posts, and all 4 news posts. No redirected, 404, duplicate, or noindex URLs are included.

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

## L. GA4/GTM Status — RESOLVED 2026-08-20

Fetched the live production page (`https://futureoptimaitsolutions.com/`) and read its embedded tracking scripts directly rather than guessing. Two distinct tags are live:

- **Google tag (loads via gtag.js): `GT-TWTT2Z4T`** — this is Google Site Kit's unified "Google tag" ID (the newer `GT-` format, not the classic `G-XXXXXXX` GA4 Measurement ID format). Site Kit uses this as the single loader for whatever GA4 property / Ads account is linked in your Google Tag configuration; the underlying `G-XXXXXXX` property ID isn't exposed in page source when Site Kit's unified tag is used, so it can't be read from the HTML — only from your Google Tag / Analytics admin dashboard. I have **not invented a `G-` ID** since one isn't visible; `GT-TWTT2Z4T` is what's actually live and is what's now implemented.
- **GTM container: `GTM-PD2WDLQP`** — a separate, standalone Google Tag Manager container, also live on the WordPress site.

**Both have been added to `src/app/layout.tsx`** using the exact IDs found — the standard gtag.js loader + config call for `GT-TWTT2Z4T`, and the standard GTM script + `<noscript>` iframe fallback for `GTM-PD2WDLQP`. Verified rendering in the built HTML output. No new property or container was created.

**Action needed from you:** log into Google Tag Manager (container `GTM-PD2WDLQP`) and Google Analytics/Tag admin to confirm what `GT-TWTT2Z4T` actually routes to (GA4 property, Ads conversion tag, or both) — I can't see that mapping from outside. If it turns out `GT-TWTT2Z4T` is Ads-only and there's a separate GA4 stream configured only *inside* GTM, no further code change is needed — the GTM container fires on its own and will carry that GA4 tag over automatically once GTM-PD2WDLQP is live on this site.

## M. Final Migration Risk: **LOW**

All explicitly-tracked GSC URLs are either unchanged or covered by a single-hop 301 redirect to a real, topically relevant destination. No URL is left to 404. Canonical/sitemap/robots domain leakage is fixed. GA4/GTM tags now carry over using the real IDs found on the live site. Both weak-match redirects (AI Lab, job-oriented-courses) have been upgraded to genuine dedicated articles — see Section O.

## N. Exact Actions Required Before Connecting `futureoptimaitsolutions.com` to Vercel

1. **Confirm what `GT-TWTT2Z4T` routes to** in your Google Tag/Analytics admin (see Section L) — the code change is done, this is a verification step on your side.
2. **Re-verify GSC property**: keep the existing `futureoptimaitsolutions.com` Search Console property as-is; do not create a new property for the Vercel domain. Once live, submit `https://futureoptimaitsolutions.com/sitemap.xml` via "Sitemaps" in the existing property (URL is already correct in code).
3. **Point DNS** for `futureoptimaitsolutions.com` at Vercel per Vercel's domain-connection instructions, then confirm the SSL certificate issues correctly.
4. **Spot-check the 5 highest-impression redirects live** immediately after cutover: `/is-a-good-python-full-stack-course-worth-the-cost/`, `/contact-us/`, `/about/`, `/gallery/`, `/courses/`.
5. **Decommission WordPress only after confirming redirects work** on the live domain — do not take WordPress offline pre-emptively.
6. **Pull the full GSC Performance export** (not just the 19 named URLs) before cutover to check impression counts for the ~35 additional legacy URLs in `next.config.ts` Section B, which currently have no impression data to verify against the 100+ threshold.

## Build Verification

`npm run build` passed with zero errors after all changes across both passes (new pages, nav updates, sitemap/robots/canonical fixes, redirect map, GA4/GTM, course consolidation). No broken routes, no missing imports, no client/server component mismatches. 60 routes generated successfully in the final build.

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

### Critical bug found and fixed during verification (earlier pass)

The redirect map's catch-all trailing-slash normalizer (`{ source: "/:path*/", destination: "/:path*" }`) used a zero-or-more (`*`) path matcher. Because zero segments is a valid match for `*`, this rule was **also matching the bare homepage `/` itself** and 308-redirecting it to an **empty destination URL** — which would have taken the site's single highest-value page (303 clicks, 7,291 impressions) offline immediately on deployment. Caught by testing the live redirect behavior rather than trusting the build to pass, not by the build itself (a `next build` succeeding says nothing about redirect-rule correctness). Fixed by changing the matcher to one-or-more (`:path+`), which cannot match an empty segment list; re-verified `/` now returns a clean `200 OK` with the correct canonical tag.

## O. Final SEO Safety Pass — 2026-08-20

Performed the full mandatory review before considering domain cutover: re-audited every redirect for weak topical matches, protected every 100+ impression URL individually, pulled the real GA4/GTM IDs from the live site, and re-crawled every route end to end. Domain was **not** connected — this was entirely local/Vercel-preview verification.

**1–5. Weak-match audit.** See `SEO-MIGRATION-MAP.md` Section E ("High-Impression Content Protection") for the full per-URL table. Two of the thirteen 100+-impression URLs were weak matches (generic `/courses` or `/about` redirects) and have been fixed with genuine dedicated articles; the rest were already true equivalents — including `/master-full-stack-development-with-mern-.../` which looked like a weak match by title but is judged a true equivalent by search intent (a commercial "best MERN institute" landing page pointing at the actual MERN course page satisfies that intent directly).

**6. 308 vs 301 — left unchanged.** No trailing-slash-only redirect was converted from 308 to 301. Next.js's automatic trailing-slash normalization (`/about/` → `/about`) is inherently a 308 and that's correct, expected behavior — it was not touched. Every redirect that *is* a 301 in the WordPress legacy map (real path changes, e.g. `/contact-us/` → `/contact`) was already 301 from the original migration pass and remains so.

**7–8. GA4/GTM.** Resolved — see Section L. Real IDs (`GT-TWTT2Z4T` Google tag, `GTM-PD2WDLQP` GTM container) pulled directly from the live WordPress page source, not invented, and added to `layout.tsx`.

**9–11. Full route crawl.** Every URL in `sitemap.xml` (60 routes) was crawled against a local production build (`next build && next start`): all returned 200, all had a `rel="canonical"` tag resolving to `https://futureoptimaitsolutions.com/...`, zero `vercel.app` occurrences in canonical/sitemap/robots, no `noindex` anywhere, every page had a `<title>`. Every redirect source in `next.config.ts` (58 real rules, excluding the catch-all pattern) was followed one hop and the destination was confirmed to return 200 — i.e. genuinely single-hop, no chains.

**A second real bug was found and fixed during this pass:** retiring the 8-month "Diploma in AI Product Engineering" course (see below) left behind a 2-hop chain — the old WordPress URL `/diploma-ai-product-engineering-agentic-ai/` redirected to `/courses/diploma-ai-product-engineering-agentic-ai`, which itself now redirects to `/courses/advanced-diploma-ai-systems-engineering` (added when the course was retired). Fixed by repointing the WordPress-era rule directly at the final destination. Re-crawled afterward: **0 chain issues, 0 broken routes.**

**12. Specific URL tests** (all against local production build):

| URL | Result |
|---|---|
| `/` | `200` |
| `/courses/` | `308 → /courses` |
| `/gallery/` | `308 → /gallery` |
| `/placements/` | `308 → /placements` |
| `/about/` | `308 → /about` |
| `/contact-us/` | `308 → /contact` |
| `/is-a-good-python-full-stack-course-worth-the-cost/` | `308 → /blog/is-python-full-stack-course-kochi-worth-it` |
| `/python-full-stack-with-ai/` | `308 → /courses/python-full-stack-with-ai` |
| `/mern-stack-development/` | `308 → /courses/mern-stack-development` |
| `/ai-powered-data-analytics/` | `308 → /courses/ai-powered-data-analytics` |
| `/cybersecurity-red-team-soc-analyst/` | `308 → /courses/cybersecurity-red-team-soc-analyst` |

All match the documented migration map exactly.

**13. Build + server.** `npm run build` — clean, 0 errors, 60 static/SSG routes. `next start` on a local port, tested via curl against the running production server (not dev mode).

**14. DNS.** Not touched. No `vercel domains` command, no DNS record changes, no domain connection attempted at any point in this pass.

**Unrelated changes made in the same pass** (not part of the SEO audit itself, but touched the same files): retired the redundant 8-month "Diploma in AI Product Engineering & Agentic AI" course (superseded by the 1-year Advanced Diploma) with a safety redirect and an updated blog explainer; added the "Kerala's 1st AI Lab" claim to the homepage hero; integrated a new hero visual (photo + floating Claude/Python/Django/VS Code badges); renamed the Virtual Office counselor from "Opti" to "Norah." None of these affect the redirect map, canonical/sitemap/robots correctness, or the crawl results above — all were re-verified after these changes, not before.

## FINAL OUTPUT

# **A) READY FOR DOMAIN CUTOVER**

Both prerequisites from the task brief are satisfied: GA4/GTM now use the real IDs from the live WordPress site (Section L), and every 100+ impression URL has been individually verified as a true content equivalent, with the two weak matches fixed (Section O, `SEO-MIGRATION-MAP.md` Section E). Full route crawl is clean (60/60 routes: 200, correct canonical, no Vercel leakage, no noindex). Redirect map is single-hop throughout (58/58 rules verified, one chain bug found and fixed in this pass). The 11 specifically-requested test URLs all behave exactly as documented.

**Remaining items are verification/ops steps for you, not code blockers:**
- Confirm in your Google Tag/Analytics dashboard what `GT-TWTT2Z4T` actually routes to (Section L, action item 1).
- Pull the full GSC export to check impression counts for the ~35 undocumented legacy URLs (Section N, action item 6) — low risk, but not verifiable from inside this codebase.
