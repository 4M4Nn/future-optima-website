import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      {
        label: "AI Website Development (2 Weeks)",
        href: "/courses/ai-website-development",
        description: "Build & launch real websites in hours, then freelance",
      },
      {
        label: "Python Full-Stack with AI",
        href: "/courses/python-full-stack-with-ai",
        description: "Django, REST APIs & AI-integrated web apps",
      },
      {
        label: "MERN Stack Development",
        href: "/courses/mern-stack-development",
        description: "MongoDB, Express, React & Node.js",
      },
      {
        label: "Data Science with AI",
        href: "/courses/data-science-with-ai",
        description: "Python, ML, statistics & real datasets",
      },
      {
        label: "AI-Powered Data Analytics",
        href: "/courses/ai-powered-data-analytics",
        description: "Power BI, Excel & Python analytics",
      },
      {
        label: "Cybersecurity — Red Team & SOC Analyst",
        href: "/courses/cybersecurity-red-team-soc-analyst",
        description: "Ethical hacking, SOC operations & defense",
      },
      {
        label: "AI Engineering & Automation",
        href: "/courses/ai-engineering-automation",
        description: "Professional program for AI-driven automation",
      },
      {
        label: "AI Robotics & Edge AI Engineering",
        href: "/courses/ai-robotics-edge-ai-engineering",
        description: "Robotics, IoT & edge deployment of AI models",
      },
      {
        label: "Agentic AI Development",
        href: "/courses/agentic-ai-development",
        description: "Build autonomous AI agents & workflows",
      },
      {
        label: "Diploma in AI Product Engineering",
        href: "/courses/diploma-ai-product-engineering-agentic-ai",
        description: "Agentic AI & product engineering diploma",
      },
      {
        label: "Advanced Diploma — AI Systems Engineering",
        href: "/courses/advanced-diploma-ai-systems-engineering",
        description: "1-year flagship: Agentic AI & Product Development",
      },
      {
        label: "Software Testing Certification",
        href: "/courses/software-testing-certification",
        description: "Manual + automation testing career program",
      },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "About", href: "/about" },
  {
    label: "More",
    children: [
      { label: "Virtual Office", href: "/virtual-office", description: "Get AI-matched course suggestions" },
      { label: "Hire From Us", href: "/hire-from-us", description: "Recruit our trained talent" },
      { label: "Gallery", href: "/gallery", description: "Campus, labs & training moments" },
      { label: "Blog", href: "/blog", description: "Guides on AI & IT careers" },
      { label: "FAQ", href: "/faq", description: "Common questions answered" },
      { label: "Contact Us", href: "/contact", description: "Talk to our counselors" },
    ],
  },
];

export const footerNav = {
  courses: [
    { label: "AI Website Development (2 Weeks)", href: "/courses/ai-website-development" },
    { label: "Python Full-Stack with AI", href: "/courses/python-full-stack-with-ai" },
    { label: "MERN Stack Development", href: "/courses/mern-stack-development" },
    { label: "Data Science with AI", href: "/courses/data-science-with-ai" },
    { label: "AI-Powered Data Analytics", href: "/courses/ai-powered-data-analytics" },
    { label: "Cybersecurity — Red Team & SOC Analyst", href: "/courses/cybersecurity-red-team-soc-analyst" },
    { label: "Advanced Diploma — AI Systems Engineering", href: "/courses/advanced-diploma-ai-systems-engineering" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Placements", href: "/placements" },
    { label: "Virtual Office", href: "/virtual-office" },
    { label: "Hire From Us", href: "/hire-from-us" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
