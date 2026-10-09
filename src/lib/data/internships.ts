import type { FaqItem } from "@/types";

export interface InternshipDomain {
  id: string;
  title: string;
  description: string;
  work: string[];
  courseSlug: string;
}

export const internshipNotice = {
  label: "Internships Open",
  text: "Internship classes have started — every domain is available. Students can apply now.",
  cta: "Apply Now",
  href: "/internships",
};

export const internshipsMeta = {
  title: "Internships in Kochi, Kerala — IT, AI, Data Science & Cybersecurity",
  description:
    "Internship opportunities in Kochi are open at Future Optima — Python, MERN, Data Science, Data Analytics, Cybersecurity, AI and more. Internship classes have started, every domain is available and students can apply now.",
  keywords: [
    "internship in kochi",
    "internships in kochi",
    "it internship kochi",
    "internship in kerala",
    "internship for btech students kochi",
    "internship for bca students kochi",
    "python internship kochi",
    "data science internship kochi",
    "cyber security internship kochi",
    "ai internship kerala",
    "mern stack internship kochi",
    "data analytics internship kochi",
    "internship with certificate kochi",
  ],
};

export const internshipsHero = {
  eyebrow: "Applications Open — Classes Started",
  heading: "Internships in Kochi, Kerala",
  highlight: "Every IT & AI Domain Available",
  intro:
    "Future Optima's internship classes have started and applications are open. Students can apply for a hands-on internship in any domain — software development, data, AI or cybersecurity — at our Chembumukku, Kochi campus or live online.",
};

export const internshipsAnswer = {
  heading: "What is an internship at Future Optima?",
  text: "It is hands-on training built around real project work, mentored by working industry professionals. Instead of watching from the sidelines, you build, analyse or test something real in your chosen domain — so you finish with work you can show and explain in an interview.",
};

export const internshipDomains: InternshipDomain[] = [
  {
    id: "python-internship",
    title: "Python Full Stack Internship",
    description: "Build web applications with Python, Django and React, with AI features added in.",
    work: ["Django models, views and REST APIs", "React frontend integration", "Database design with PostgreSQL"],
    courseSlug: "python-full-stack-with-ai",
  },
  {
    id: "mern-internship",
    title: "MERN Stack Internship",
    description: "Work across MongoDB, Express, React and Node.js on a full JavaScript application.",
    work: ["React components and state", "Node.js and Express APIs", "MongoDB schema design"],
    courseSlug: "mern-stack-development",
  },
  {
    id: "data-science-internship",
    title: "Data Science with AI Internship",
    description: "Applied machine learning and data project work on real datasets.",
    work: ["Data cleaning and exploratory analysis", "Building and evaluating ML models", "Presenting findings clearly"],
    courseSlug: "data-science-with-ai",
  },
  {
    id: "data-analytics-internship",
    title: "Data & Business Analytics Internship",
    description: "Dashboards, reporting and business-facing analytics with Excel, SQL and Power BI.",
    work: ["SQL queries and data cleaning", "Power BI dashboards", "Business case reporting"],
    courseSlug: "ai-powered-data-analytics",
  },
  {
    id: "cyber-security-internship",
    title: "Cybersecurity Internship",
    description: "Hands-on security lab work covering assessment and defence fundamentals.",
    work: ["Scanning and vulnerability assessment in labs", "Web application security testing", "Log analysis and SOC fundamentals"],
    courseSlug: "cybersecurity-red-team-soc-analyst",
  },
  {
    id: "ai-engineering-internship",
    title: "AI Engineering & Automation Internship",
    description: "Build and automate with large language models and AI tools.",
    work: ["Integrating LLM APIs", "Retrieval-augmented generation (RAG)", "Workflow automation"],
    courseSlug: "ai-engineering-automation",
  },
  {
    id: "agentic-ai-internship",
    title: "Agentic AI Internship",
    description: "Design AI agents that plan, use tools and complete multi-step tasks.",
    work: ["Tool use and function calling", "Agent memory and context", "Evaluation and guardrails"],
    courseSlug: "agentic-ai-development",
  },
  {
    id: "ai-robotics-internship",
    title: "AI Robotics & Edge AI Internship",
    description: "Hardware-focused work combining robotics, sensors and on-device AI.",
    work: ["Working with real hardware in the lab", "Sensors and control basics", "Running AI models on edge devices"],
    courseSlug: "ai-robotics-edge-ai-engineering",
  },
  {
    id: "web-development-internship",
    title: "AI Website Development Internship",
    description: "Design, build and launch real websites quickly using AI-assisted tools.",
    work: ["Building responsive websites", "AI-assisted development workflow", "Deploying a live site"],
    courseSlug: "ai-website-development",
  },
];

export const internshipAudience = {
  heading: "Who can apply for an internship?",
  items: [
    "College students — B.Tech, BCA, MCA, B.Sc, M.Sc and diploma students looking for an internship during or after their course",
    "Fresh graduates who want real project experience before applying for jobs",
    "Plus Two students who want an early start in IT or AI",
    "Students with a year gap who want recent, hands-on work to show employers",
    "CS and non-CS backgrounds alike — beginners are guided from the fundamentals",
  ],
};

export const internshipSteps: { title: string; description: string }[] = [
  {
    title: "1. Apply",
    description: "Send an enquiry, call or WhatsApp us with the domain you are interested in.",
  },
  {
    title: "2. Talk to a counselor",
    description: "We understand your background and goals, and confirm the right domain, batch and schedule.",
  },
  {
    title: "3. Join the batch",
    description: "Start internship classes at our Kochi campus or live online.",
  },
  {
    title: "4. Do real project work",
    description: "Work on hands-on projects with mentor guidance and build something you can present.",
  },
];

export const internshipFaqs: FaqItem[] = [
  {
    question: "Are internships open at Future Optima right now?",
    answer:
      "Yes. Internship classes have started and applications are open. Students can apply now for an internship in any domain.",
  },
  {
    question: "Which internship domains are available in Kochi?",
    answer:
      "Every domain is available: Python Full Stack, MERN Stack, Data Science with AI, Data and Business Analytics, Cybersecurity, AI Engineering and Automation, Agentic AI, AI Robotics and Edge AI, and AI Website Development.",
  },
  {
    question: "Who can apply for an internship?",
    answer:
      "College students (B.Tech, BCA, MCA, B.Sc, M.Sc, diploma), fresh graduates, Plus Two students and students with a year gap can all apply, from CS or non-CS backgrounds.",
  },
  {
    question: "How do I apply for an internship at Future Optima?",
    answer:
      "Send an enquiry from our contact page, or call or WhatsApp us on 8891129333 with the domain you are interested in. A counselor will confirm the batch and schedule.",
  },
  {
    question: "Is the internship online or offline?",
    answer:
      "Both options are available — at our Chembumukku, Kochi campus or through live online sessions with the same mentors.",
  },
  {
    question: "Do I need prior coding experience for an internship?",
    answer:
      "No. Most domains start from the fundamentals, so beginners can join. A few advanced areas, such as Agentic AI, work best if you already know basic Python — our counselors will guide you.",
  },
  {
    question: "Will I work on real projects during the internship?",
    answer:
      "Yes. Internships are built around hands-on project work mentored by working industry professionals, not observation or simulated exercises.",
  },
  {
    question: "How long is the internship and what is the fee?",
    answer:
      "Duration and fee depend on the domain and the schedule you choose. Contact our counselors for the current details for your domain.",
  },
  {
    question: "Can I do an internship while studying in college?",
    answer:
      "Yes. Many students join alongside their degree. Talk to our counselors about a batch timing that fits your college schedule.",
  },
];
