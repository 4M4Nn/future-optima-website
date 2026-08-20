# SEO Migration Map — WordPress → Next.js

`futureoptimaitsolutions.com` migrating from WordPress to this Next.js/Vercel site, on the **same production domain**. This table covers every URL supplied from Google Search Console plus every additional legacy URL discovered and mapped in `next.config.ts`.

Statuses: **SAME** (identical canonical path, only WordPress's trailing slash differs — normalized automatically), **REDIRECT** (301 to a real equivalent), **MISSING** (no direct content equivalent existed — redirected to the closest relevant page, flagged for a real replacement), **NEW** (new page, no legacy counterpart).

## A. Explicitly-tracked GSC URLs (from the supplied performance list)

| Current production URL | GSC clicks | GSC impressions | New Next.js URL | Status | Redirect required? | Priority | Notes |
|---|---:|---:|---|---|---|---|---|
| `/` | 303 | 7,291 | `/` | SAME | No | CRITICAL | Identical route. |
| `/courses/` | 11 | 683 | `/courses` | SAME | No¹ | CRITICAL | Courses hub. |
| `/gallery/` | 7 | 1,614 | `/gallery` | SAME | No¹ | HIGH | |
| `/python-full-stack-with-ai/` | 6 | 511 | `/courses/python-full-stack-with-ai` | REDIRECT | Yes | HIGH | Slug reused, now under `/courses/`. |
| `/master-full-stack-development-with-mern-best-software-training-institute-in-kochi-kerala/` | 4 | 387 | `/courses/mern-stack-development` | REDIRECT | Yes | MEDIUM | Long-tail WP landing page; no 1:1 article exists — routed to the closest topical course page. |
| `/placements/` | 4 | 270 | `/placements` | SAME | No¹ | HIGH | |
| `/about/` | 3 | 810 | `/about` | SAME | No¹ | HIGH | |
| `/why-choose-the-best-software-training-institute-in-kochi-kerala-for-your-career/` | 3 | 597 | `/blog/how-to-choose-best-software-training-institute-kochi` | REDIRECT | Yes | HIGH | Genuine topical match on the new blog. |
| `/cybersecurity-red-team-soc-analyst/` | 2 | 127 | `/courses/cybersecurity-red-team-soc-analyst` | REDIRECT | Yes | HIGH | Slug reused, now under `/courses/`. |
| `/is-a-good-python-full-stack-course-worth-the-cost/` | 2 | **1,207** | `/blog/is-python-full-stack-course-kochi-worth-it` | REDIRECT | Yes | **CRITICAL** | Highest-impression single URL in the whole GSC set. |
| `/job-oriented-it-courses-to-build-your-career-best-software-training-institute-in-kochi-kerala/` | 2 | 342 | `/courses` | REDIRECT | Yes | MEDIUM | No dedicated article; the courses hub is the closest real equivalent. |
| `/master-cybersecurity-skills-best-software-training-institute-in-kochi-kerala/` | 2 | 9 | `/courses/cybersecurity-red-team-soc-analyst` | REDIRECT | Yes | LOW | |
| `/ai-course-cost-kochi-fee-guide-2026/` | 1 | 16 | `/blog/ai-course-fees-kochi-pay-after-placement-2026` | REDIRECT | Yes | MEDIUM | High commercial intent despite low impressions. |
| `/ai-powered-data-analytics/` | 1 | 84 | `/courses/ai-powered-data-analytics` | REDIRECT | Yes | MEDIUM | |
| `/ai-robotics-edge-ai-engineering/` | 1 | 11 | `/courses/ai-robotics-edge-ai-engineering` | REDIRECT | Yes | LOW | |
| `/contact-us/` | 1 | 692 | `/contact` | REDIRECT | Yes | HIGH | Path changed (`contact-us` → `contact`); 692 impressions makes this a must-not-miss redirect. |
| `/keralas-first-ai-lab-for-practical-ai-learning-projects-and-career-focused-training/` | 1 | 97 | `/about` | REDIRECT (weak match) | Yes | MEDIUM | **MISSING** — no dedicated page exists. Redirected to `/about`, which covers the same "AI Lab" USP. Recommend a real standalone article post-launch. |
| `/mern-stack-development/` | 1 | 333 | `/courses/mern-stack-development` | REDIRECT | Yes | HIGH | Slug reused, now under `/courses/`. |
| `/professional-ai-engineering-automation-program-from-top-ai-training-centers-in-kerala/` | 1 | 46 | `/courses/ai-engineering-automation` | REDIRECT | Yes | MEDIUM | |

¹ *No custom redirect rule needed — Next.js automatically issues a 301/308 from the trailing-slash form to the canonical non-slash route whenever that route exists (verified locally, see report Phase 5). A custom rule is only required when the path itself changes.*

## B. Additional legacy URLs found and mapped (beyond the explicit GSC list)

The GSC export named "many additional URLs with impressions" without listing them. `next.config.ts` already carries a broader redirect map built from the visible WordPress URL patterns (course landing-page variants, additional blog posts, retired course topics). Full list: see the `redirects()` array in `next.config.ts`, grouped by section with inline comments. Notable entries:

| Legacy pattern | New Next.js URL | Status | Notes |
|---|---|---|---|
| `/blogs/` | `/blog` | REDIRECT | WP blog index used a different slug. |
| `/cybersecurity/`, `/ai/` | `/courses/cybersecurity-red-team-soc-analyst`, `/courses` | REDIRECT | Generic topic hubs, no direct new equivalent. |
| `/data-science-with-artificial-intelligence/` | `/courses/data-science-with-ai` | REDIRECT | Slug shortened on the new site. |
| `/agentic-ai-course-kerala/`, `/ai-engineering-course-kochi/` | `/courses/agentic-ai-development`, `/courses/ai-engineering-automation` | REDIRECT | |
| Several `...-best-software-training-institute-in-kochi-kerala` long-tail landing pages | Closest matching course/blog/hub page | REDIRECT (MISSING) | These were WordPress SEO landing pages with no direct Next.js equivalent — mapped to the nearest real content rather than left as 404s. Flagged for future dedicated articles if traffic data (once available) justifies it. |
| Retired "Software Testing" course pages | `/courses/web-bug-hunter` | REDIRECT | Course was replaced by the new security-certification family (see git history `0e4dcc4`); testing-related traffic now lands on the closest surviving course. |

## C. New pages (no legacy counterpart — status NEW)

| New Next.js URL | Purpose |
|---|---|
| `/career` | Careers hub |
| `/career/faculty` | Full-time faculty hiring |
| `/career/become-a-tutor` | Part-time/freelance tutor hiring |
| `/career/open-positions` | Current job openings (Cloud Computing & DevOps Tutor) |
| `/testimonials` | Google reviews + student testimonials |
| `/vision-mission` | Vision & Mission |
| `/news`, `/news/[slug]` | News/announcements hub + 2 initial posts |

## D. High-value URLs specifically protected (Phase 3)

- **`/is-a-good-python-full-stack-course-worth-the-cost/` — 1,207 impressions.** Matching article exists at `/blog/is-python-full-stack-course-kochi-worth-it`; 301 redirect in place, no content gap.
- **`/contact-us/` — 692 impressions.** Path changed to `/contact`; 301 redirect in place.
- **`/about/` — 810 impressions**, **`/gallery/` — 1,614 impressions**, **`/courses/` — 683 impressions**, **`/placements/` — 270 impressions.** All SAME path; only trailing-slash normalization applies (automatic, zero content loss).
- **`/why-choose-the-best-software-training-institute-in-kochi-kerala-for-your-career/` — 597 impressions.** Matching article exists; 301 redirect in place.
