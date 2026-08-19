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
  "ai-powered-data-analytics": unsplash("photo-1551288049-bebda4e38f71"),
  "cybersecurity-red-team-soc-analyst": unsplash("photo-1550751827-4bd374c3f58b"),
  "ai-engineering-automation": unsplash("photo-1485827404703-89b55fcc595e"),
  "ai-robotics-edge-ai-engineering": unsplash("photo-1485827404703-89b55fcc595e"),
  "agentic-ai-development": unsplash("photo-1620712943543-bcc4688e7485"),
  "diploma-ai-product-engineering-agentic-ai": unsplash("photo-1620712943543-bcc4688e7485"),
  "advanced-diploma-ai-systems-engineering": unsplash("photo-1523240795612-9a054b0db644"),
  "software-testing-certification": unsplash("photo-1518770660439-4636190af475"),
};
