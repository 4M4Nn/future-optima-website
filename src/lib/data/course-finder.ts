export type InterestTag =
  | "coding"
  | "analytics"
  | "ai"
  | "security"
  | "testing"
  | "hardware"
  | "business";

export type CodingComfort = "love" | "neutral" | "avoid";

export type CodingLevel = "none" | "light" | "moderate" | "heavy";

export interface InterestOption {
  id: InterestTag;
  label: string;
  helper: string;
}

export const interestOptions: InterestOption[] = [
  { id: "coding", label: "Writing Code & Building Apps", helper: "Web apps, software, hands-on programming" },
  { id: "analytics", label: "Data & Analytics", helper: "Spreadsheets, dashboards, finding patterns in numbers" },
  { id: "ai", label: "AI, Automation & Agents", helper: "AI tools, machine learning, automating work" },
  { id: "security", label: "Cybersecurity & Defense", helper: "Hacking, protecting systems, investigations" },
  { id: "testing", label: "Quality & Testing", helper: "Breaking things on purpose, structured problem-solving" },
  { id: "hardware", label: "Robotics & Hardware", helper: "Physical devices, sensors, IoT, robots" },
  { id: "business", label: "Business & Strategy", helper: "Decisions, reporting, working with stakeholders" },
];

export const codingComfortOptions: { id: CodingComfort; label: string }[] = [
  { id: "love", label: "I enjoy coding and want more of it" },
  { id: "neutral", label: "I'm okay learning some coding if needed" },
  { id: "avoid", label: "I'd rather avoid heavy coding" },
];

export interface CourseFinderProfile {
  slug: string;
  tags: InterestTag[];
  codingLevel: CodingLevel;
  whyGood: string;
  whyLowCoding?: string;
}

export const courseFinderProfiles: CourseFinderProfile[] = [
  {
    slug: "python-full-stack-with-ai",
    tags: ["coding", "ai"],
    codingLevel: "heavy",
    whyGood: "You'll spend most of your time writing real Python and building AI-integrated web apps end to end.",
  },
  {
    slug: "mern-stack-development",
    tags: ["coding"],
    codingLevel: "heavy",
    whyGood: "A hands-on, code-first path if you want to become a strong JavaScript full-stack developer.",
  },
  {
    slug: "data-science-with-ai",
    tags: ["analytics", "ai", "coding"],
    codingLevel: "moderate",
    whyGood: "Blends analytics and AI model-building — real coding, but framed around data and decisions, not app-building.",
    whyLowCoding: "Python is taught gradually and is always applied to data, not abstract programming exercises.",
  },
  {
    slug: "ai-powered-data-analytics",
    tags: ["analytics", "business"],
    codingLevel: "light",
    whyGood: "Built for analytics and business thinking first — Excel, SQL and Power BI lead, with only light Python.",
    whyLowCoding: "This is our most coding-light analytics track — ideal if you want data and AI insight without heavy programming.",
  },
  {
    slug: "cybersecurity-red-team-soc-analyst",
    tags: ["security"],
    codingLevel: "light",
    whyGood: "Focused on networks, systems and defense skills — scripting is used as a tool, not the main focus.",
  },
  {
    slug: "ai-engineering-automation",
    tags: ["ai", "coding", "business"],
    codingLevel: "moderate",
    whyGood: "Built for AI-driven automation of real business workflows — practical AI engineering with clear business impact.",
  },
  {
    slug: "ai-robotics-edge-ai-engineering",
    tags: ["hardware", "ai"],
    codingLevel: "moderate",
    whyGood: "Ideal if you're drawn to physical devices and robotics as much as software — hands-on hardware lab work.",
  },
  {
    slug: "agentic-ai-development",
    tags: ["ai", "coding"],
    codingLevel: "moderate",
    whyGood: "A focused, cutting-edge path into building autonomous AI agents — great if AI itself is your main interest.",
  },
  {
    slug: "diploma-ai-product-engineering-agentic-ai",
    tags: ["ai", "business", "coding"],
    codingLevel: "moderate",
    whyGood: "Balances AI engineering with product and business thinking — good if you like AI but also enjoy strategy and presentation.",
  },
  {
    slug: "advanced-diploma-ai-systems-engineering",
    tags: ["ai", "coding", "analytics", "business"],
    codingLevel: "moderate",
    whyGood: "Our flagship 1-year program — the right pick if you're serious about a deep, well-rounded AI career and can commit a full year.",
  },
  {
    slug: "software-testing-certification",
    tags: ["testing", "coding"],
    codingLevel: "light",
    whyGood: "A structured, detail-driven path into IT — manual testing needs no coding, with light automation scripting layered in later.",
    whyLowCoding: "One of our fastest, most coding-light entry routes into the IT industry.",
  },
  {
    slug: "ai-website-development",
    tags: ["coding", "business", "ai"],
    codingLevel: "light",
    whyGood: "The fastest path to a real, sellable skill — build and launch websites with AI tools and start freelancing in just 2 weeks.",
    whyLowCoding: "AI tools handle most of the heavy coding — you focus on customizing, launching and finding clients.",
  },
];
