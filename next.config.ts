import type { NextConfig } from "next";

// Canonical URL shape for the whole site: no trailing slash (matches every
// `alternates.canonical` value already set per-page). Explicit so behavior
// doesn't silently drift — see SEO-MIGRATION-REPORT.md Phase 5.
const nextConfig: NextConfig = {
  trailingSlash: false,
  // Without this, Next's own automatic trailing-slash normalization runs
  // BEFORE custom redirects and intercepts every legacy "/old-path/" request
  // first (redirecting it to "/old-path" instead of our real destination) —
  // silently defeating the entire legacy-URL redirect map below. This lets
  // our explicit trailing-slash sources match and fire as intended.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // 301 redirects from the legacy WordPress URL set (futureoptimaitsolutions.com)
  // to their equivalents on this Next.js site. Every entry is a single hop —
  // old URL -> final destination, never through an intermediate page.
  // Sources carry the trailing slash because that's the literal indexed/
  // linked WordPress URL shape; destinations use the new canonical (no
  // trailing slash) shape. See SEO-MIGRATION-MAP.md for the full audit
  // this list was derived from.
  async redirects() {
    return [
      // --- Core / static pages: same content, WordPress used trailing slashes ---
      { source: "/about/", destination: "/about", permanent: true },
      { source: "/courses/", destination: "/courses", permanent: true },
      { source: "/placements/", destination: "/placements", permanent: true },
      { source: "/gallery/", destination: "/gallery", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/blogs/", destination: "/blog", permanent: true },
      {
        source: "/best-software-it-training-institute-in-kochi-kerala/",
        destination: "/",
        permanent: true,
      },

      // --- Course pages: exact slug reused, only the /courses/ prefix is new ---
      {
        source: "/python-full-stack-with-ai/",
        destination: "/courses/python-full-stack-with-ai",
        permanent: true,
      },
      {
        source: "/mern-stack-development/",
        destination: "/courses/mern-stack-development",
        permanent: true,
      },
      {
        source: "/data-science-with-artificial-intelligence/",
        destination: "/courses/data-science-with-ai",
        permanent: true,
      },
      {
        source: "/cybersecurity-red-team-soc-analyst/",
        destination: "/courses/cybersecurity-red-team-soc-analyst",
        permanent: true,
      },
      // Generic /cybersecurity/ hub page — closest equivalent is the one
      // cybersecurity course page that survived the catalog restructure.
      { source: "/cybersecurity/", destination: "/courses/cybersecurity-red-team-soc-analyst", permanent: true },
      {
        source: "/ai-powered-data-analytics/",
        destination: "/courses/ai-powered-data-analytics",
        permanent: true,
      },
      // Generic /ai/ hub page — no single new equivalent, courses hub is closest.
      { source: "/ai/", destination: "/courses", permanent: true },
      {
        source: "/agentic-ai-course-kerala/",
        destination: "/courses/agentic-ai-development",
        permanent: true,
      },
      {
        source: "/ai-engineering-course-kochi/",
        destination: "/courses/ai-engineering-automation",
        permanent: true,
      },
      {
        source: "/ai-robotics-edge-ai-engineering/",
        destination: "/courses/ai-robotics-edge-ai-engineering",
        permanent: true,
      },
      {
        source: "/diploma-ai-product-engineering-agentic-ai/",
        destination: "/courses/diploma-ai-product-engineering-agentic-ai",
        permanent: true,
      },
      {
        source: "/advanced-diploma-ai-systems-engineering/",
        destination: "/courses/advanced-diploma-ai-systems-engineering",
        permanent: true,
      },
      {
        source: "/professional-ai-engineering-automation-program-from-top-ai-training-centers-in-kerala/",
        destination: "/courses/ai-engineering-automation",
        permanent: true,
      },

      // --- Blog posts with a genuine topical equivalent on the new site ---
      {
        source: "/data-science-vs-ai-engineering-career-path-2026/",
        destination: "/blog/data-science-vs-ai-engineering-career-path-2026",
        permanent: true,
      },
      {
        source: "/can-non-cs-students-learn-ai-kerala/",
        destination: "/blog/can-non-cs-students-learn-ai-kerala",
        permanent: true,
      },
      {
        source: "/ai-course-cost-kochi-fee-guide-2026/",
        destination: "/blog/ai-course-fees-kochi-pay-after-placement-2026",
        permanent: true,
      },
      {
        source: "/best-ai-courses-kochi-kerala-2026/",
        destination: "/blog/best-ai-courses-kochi-kerala-2026",
        permanent: true,
      },
      {
        source: "/llm-vs-rag-vs-agentic-ai-guide-kerala/",
        destination: "/blog/llm-vs-rag-vs-agentic-ai-guide-kerala",
        permanent: true,
      },
      // 1,207 impressions on GSC — highest-value single redirect in this list.
      {
        source: "/is-a-good-python-full-stack-course-worth-the-cost/",
        destination: "/blog/is-python-full-stack-course-kochi-worth-it",
        permanent: true,
      },
      {
        source: "/why-choose-the-best-software-training-institute-in-kochi-kerala-for-your-career/",
        destination: "/blog/how-to-choose-best-software-training-institute-kochi",
        permanent: true,
      },
      {
        source: "/why-choose-the-best-software-training-institute-in-kochi-kerala-for-your-career-2/",
        destination: "/blog/how-to-choose-best-software-training-institute-kochi",
        permanent: true,
      },

      // --- Blog posts / landing pages with NO content equivalent yet.
      // Redirected to the closest relevant hub/course/article rather than
      // left to 404, per migration policy. Flagged MISSING in
      // SEO-MIGRATION-MAP.md — recommend writing real replacement articles
      // post-launch for the higher-impression ones. ---
      {
        source: "/job-oriented-it-courses-to-build-your-career-best-software-training-institute-in-kochi-kerala/",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/master-full-stack-development-with-mern-best-software-training-institute-in-kochi-kerala/",
        destination: "/courses/mern-stack-development",
        permanent: true,
      },
      {
        source: "/master-cybersecurity-skills-best-software-training-institute-in-kochi-kerala/",
        destination: "/courses/cybersecurity-red-team-soc-analyst",
        permanent: true,
      },
      {
        source: "/keralas-first-ai-lab-for-practical-ai-learning-projects-and-career-focused-training/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/professional-ai-engineering-automation-program-build-the-skills-to-lead-the-ai-revolution/",
        destination: "/courses/ai-engineering-automation",
        permanent: true,
      },
      { source: "/what-is-agentic-ai-kerala-2026/", destination: "/blog/llm-vs-rag-vs-agentic-ai-guide-kerala", permanent: true },
      {
        source: "/ai-powered-data-analytics-course-transform-data-into-business-intelligence/",
        destination: "/courses/ai-powered-data-analytics",
        permanent: true,
      },
      {
        source: "/cybersecurity-course-red-team-soc-analyst-build-a-career-in-the-world-of-cyber-defense/",
        destination: "/courses/cybersecurity-red-team-soc-analyst",
        permanent: true,
      },
      {
        source: "/mern-stack-development-course-launch-your-career-as-a-full-stack-web-developer/",
        destination: "/courses/mern-stack-development",
        permanent: true,
      },
      {
        source: "/python-full-stack-with-ai-course-build-a-future-ready-career-in-software-development/",
        destination: "/courses/python-full-stack-with-ai",
        permanent: true,
      },
      { source: "/how-learning-ai-can-unlock-high-growth-opportunities-in-the-it-industry/", destination: "/blog", permanent: true },
      { source: "/ai-skills-for-job-security-future-proofing-your-it-career/", destination: "/blog", permanent: true },
      { source: "/why-learning-ai-is-essential-for-the-future-of-it-careers/", destination: "/blog", permanent: true },
      {
        source: "/build-the-future-with-professional-ai-engineering-automation/",
        destination: "/courses/ai-engineering-automation",
        permanent: true,
      },
      { source: "/upgrade-your-skills-with-advanced-it-courses-best-software-training-institute-in-kochi-kerala/", destination: "/courses", permanent: true },
      { source: "/start-your-it-journey-best-software-training-institute-in-kochi-kerala-for-beginners/", destination: "/courses", permanent: true },
      {
        source: "/become-a-full-stack-developer-best-software-training-institute-in-kochi-kerala/",
        destination: "/courses/python-full-stack-with-ai",
        permanent: true,
      },
      { source: "/build-your-career-with-100-placement-support-best-software-training-institute-in-kochi-kerala/", destination: "/placements", permanent: true },
      {
        source: "/master-data-driven-decision-making-best-software-training-institute-in-kochi-kerala/",
        destination: "/courses/data-science-with-ai",
        permanent: true,
      },
      {
        source: "/build-a-future-in-data-science-with-ai-best-software-training-institute-in-kochi-kerala/",
        destination: "/courses/data-science-with-ai",
        permanent: true,
      },
      {
        source: "/master-the-future-with-python-full-stack-with-ai-best-software-training-institute-in-kochi-kerala/",
        destination: "/courses/python-full-stack-with-ai",
        permanent: true,
      },
      // Software Testing course was retired and replaced by the security
      // certification family — send testing-topic traffic to the closest
      // surviving course rather than a dead course page.
      { source: "/top-tools-that-make-software-testing-easier/", destination: "/courses/web-bug-hunter", permanent: true },
      { source: "/learning-python-and-ai-a-simple-guide-for-beginners/", destination: "/courses/python-full-stack-with-ai", permanent: true },
      { source: "/how-ai-training-in-kerala-prepares-you-for-the-future-of-tech/", destination: "/blog", permanent: true },
      {
        source: "/launch-your-career-in-it-with-our-industry-oriented-python-course-in-kochi/",
        destination: "/courses/python-full-stack-with-ai",
        permanent: true,
      },
      {
        source: "/why-data-science-with-artificial-intelligence-is-the-best-career-upgrade-in-2026/",
        destination: "/courses/data-science-with-ai",
        permanent: true,
      },
      {
        source: "/the-career-advantages-of-learning-both-frontend-and-backend-together/",
        destination: "/courses/mern-stack-development",
        permanent: true,
      },
      {
        source: "/best-python-course-in-kochi-build-a-strong-it-career-with-future-optima-it-solutions/",
        destination: "/courses/python-full-stack-with-ai",
        permanent: true,
      },
      {
        source: "/future-optima-it-solutions-leading-software-testing-certification-course-in-kochi/",
        destination: "/courses/web-bug-hunter",
        permanent: true,
      },

      // --- Catch-all trailing-slash normalizer ---
      // skipTrailingSlashRedirect (above) disables Next's automatic
      // trailing-slash handling entirely so the legacy-specific rules above
      // can win first. This restores normal "/anything/ -> /anything"
      // behavior for every other path (including this site's own routes),
      // since it's the last rule checked and only runs when nothing more
      // specific already matched.
      // NOTE: must be :path+ (one-or-more), not :path* (zero-or-more) —
      // with * this also matches the bare "/" homepage itself (empty
      // segment list), redirecting it to an empty destination and taking
      // the homepage down. + guarantees at least one path segment.
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
