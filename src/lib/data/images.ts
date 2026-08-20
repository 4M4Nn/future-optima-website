function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
}

// NOTE: verified against images.unsplash.com before use.
export const stockImages = {
  hero: unsplash("photo-1522202176988-66273c2fd55f"),
  about: unsplash("photo-1521737604893-d14cc237f11d"),
  placements: unsplash("photo-1521791136064-7986c2920216"),
  contact: unsplash("photo-1497366216548-37526070297c"),
  campusGeneric: unsplash("photo-1523240795612-9a054b0db644"),
};

export const courseImages: Record<string, string> = {
  "python-full-stack-with-ai": unsplash("photo-1526379095098-d400fd0bf935"),
  "mern-stack-development": unsplash("photo-1517180102446-f3ece451e9d8"),
  "data-science-with-ai": unsplash("photo-1551288049-bebda4e38f71"),
  "ai-powered-data-analytics": unsplash("photo-1573164713988-8665fc963095"),
  "cybersecurity-red-team-soc-analyst": unsplash("photo-1550751827-4bd374c3f58b"),
  "ai-engineering-automation": unsplash("photo-1485827404703-89b55fcc595e"),
  "ai-robotics-edge-ai-engineering": unsplash("photo-1581091226825-a6a2a5aee158"),
  "agentic-ai-development": unsplash("photo-1620712943543-bcc4688e7485"),
  "advanced-diploma-ai-systems-engineering": unsplash("photo-1523240795612-9a054b0db644"),
  "ai-website-development": unsplash("photo-1547658719-da2b51169166"),
  "certified-penetration-testing": unsplash("photo-1526374965328-7f61d4dc18c5"),
  "certified-ethical-hacking": unsplash("photo-1563986768609-322da13575f3"),
  "certified-soc-analyst": unsplash("photo-1544197150-b99a580bb7a8"),
  "web-bug-hunter": unsplash("photo-1614064548237-096f735f344f"),
};

// A distinct pool for blog cover images so blog cards don't visually
// duplicate the course grid — indexed by slug for full control.
export const blogImages: Record<string, string> = {
  "best-ai-courses-kochi-kerala-2026": unsplash("photo-1499750310107-5fef28a66643"),
  "ai-course-fees-kochi-pay-after-placement-2026": unsplash("photo-1454165804606-c3d57bc86b40"),
  "data-science-vs-ai-engineering-career-path-2026": unsplash("photo-1522071820081-009f0129c71c"),
  "can-non-cs-students-learn-ai-kerala": unsplash("photo-1504384308090-c894fdcc538d"),
  "llm-vs-rag-vs-agentic-ai-guide-kerala": unsplash("photo-1461749280684-dccba630e2f6"),
  "how-to-choose-best-software-training-institute-kochi": unsplash("photo-1587440871875-191322ee64b0"),
  "is-python-full-stack-course-kochi-worth-it": unsplash("photo-1571171637578-41bc2dd41cd2"),
  "mern-stack-vs-python-full-stack-kochi": unsplash("photo-1552664730-d307ca884978"),
  "cybersecurity-careers-kochi-red-team-vs-soc-analyst": unsplash("photo-1517245386807-bb43f82c33c4"),
  "why-software-testing-is-fastest-it-career-start-kochi": unsplash("photo-1553877522-43269d4ea984"),
  "ai-powered-data-analytics-vs-data-science-which-course": unsplash("photo-1499750310107-5fef28a66643"),
  "vibe-coding-explained-will-ai-replace-developers-kochi": unsplash("photo-1454165804606-c3d57bc86b40"),
  "agentic-ai-hiring-trend-kerala-it-companies-2026": unsplash("photo-1461749280684-dccba630e2f6"),
  "prompt-engineering-vs-ai-engineering-whats-in-demand-2026": unsplash("photo-1522071820081-009f0129c71c"),
  "nactet-certification-explained-kerala": unsplash("photo-1587440871875-191322ee64b0"),
  "how-future-optima-placement-cell-works": unsplash("photo-1553877522-43269d4ea984"),
  "penetration-testing-vs-ethical-hacking-vs-soc-analyst-vs-bug-hunter": unsplash("photo-1517245386807-bb43f82c33c4"),
  "bug-bounty-hunting-kerala-web-bug-hunter-income-guide": unsplash("photo-1571171637578-41bc2dd41cd2"),
};

export function getBlogImage(slug: string, fallbackCourseSlug?: string) {
  return blogImages[slug] ?? (fallbackCourseSlug ? courseImages[fallbackCourseSlug] : undefined) ?? blogImagePool[0];
}

export const blogImagePool = [
  unsplash("photo-1499750310107-5fef28a66643"),
  unsplash("photo-1522071820081-009f0129c71c"),
  unsplash("photo-1504384308090-c894fdcc538d"),
  unsplash("photo-1454165804606-c3d57bc86b40"),
  unsplash("photo-1461749280684-dccba630e2f6"),
  unsplash("photo-1587440871875-191322ee64b0"),
  unsplash("photo-1571171637578-41bc2dd41cd2"),
  unsplash("photo-1552664730-d307ca884978"),
  unsplash("photo-1517245386807-bb43f82c33c4"),
  unsplash("photo-1553877522-43269d4ea984"),
];
