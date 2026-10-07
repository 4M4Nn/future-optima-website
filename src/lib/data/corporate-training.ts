import type { FaqItem } from "@/types";

export interface CorporateProgram {
  id: string;
  title: string;
  summary: string;
  topics: string[];
  audience: string;
}

export const corporateTrainingMeta = {
  title: "Corporate Training in Kochi, Kerala — AI, Generative AI, IT & Excel",
  description:
    "Corporate training in Kochi and across Kerala from Future Optima — hands-on AI and Generative AI training for teams, IT upskilling, and Microsoft Excel and data analytics training, delivered on-site or at our Kochi campus.",
  keywords: [
    "corporate training in kochi",
    "corporate training kochi",
    "corporate training companies in kochi",
    "corporate training kerala",
    "it corporate training kochi",
    "ai corporate training kochi",
    "corporate ai training kochi",
    "corporate ai training kerala",
    "generative ai corporate training kerala",
    "microsoft excel corporate training kochi",
  ],
};

export const corporateHero = {
  eyebrow: "For Organizations",
  heading: "Corporate Training in Kochi, Kerala",
  highlight: "AI, Generative AI, IT & Excel",
  intro:
    "Future Optima IT Solutions is a corporate training company in Kochi delivering hands-on AI, Generative AI, IT and Microsoft Excel training for teams across Kerala — on-site at your office or at our Chembumukku campus.",
};

export const corporateAnswer = {
  heading: "What is corporate training at Future Optima?",
  text: "It is practical, project-first training for working teams. Instead of a slide-deck workshop, your employees practise on tasks from their own work — analysing data, drafting reports, automating repetitive steps — so the skills are usable the next day. Every program is scoped around your team's size, current skill level and goals.",
};

export const corporatePrograms: CorporateProgram[] = [
  {
    id: "ai-corporate-training",
    title: "AI Corporate Training in Kochi",
    summary:
      "Practical AI training for non-technical and technical teams — how to use AI tools safely and productively in everyday work.",
    topics: [
      "Using AI assistants for research, drafting and summarising",
      "AI for data analysis and reporting",
      "Automating repetitive workflows with AI",
      "Checking AI output and avoiding common mistakes",
      "Data privacy and responsible use at work",
    ],
    audience: "Operations, administration, finance, HR, sales and management teams",
  },
  {
    id: "generative-ai-corporate-training",
    title: "Generative AI Corporate Training in Kerala",
    summary:
      "A deeper Generative AI program for teams that want to build with large language models, not just use them.",
    topics: [
      "How large language models work, in plain language",
      "Prompting for reliable, repeatable results",
      "Retrieval-augmented generation (RAG) on company documents",
      "AI agents and tool use for multi-step tasks",
      "Evaluating quality, cost and risk before rollout",
    ],
    audience: "IT teams, developers, analysts and product teams",
  },
  {
    id: "it-corporate-training",
    title: "IT Corporate Training in Kochi",
    summary:
      "Upskilling for software and IT teams in the same technologies we teach in our job-oriented courses.",
    topics: [
      "Python and full-stack development",
      "Data science and data analytics",
      "Cybersecurity awareness and SOC fundamentals",
      "AI engineering and automation",
      "AI-assisted development workflows",
    ],
    audience: "Developers, IT support, analysts and fresh hires in onboarding",
  },
  {
    id: "excel-corporate-training",
    title: "Microsoft Excel Corporate Training in Kochi",
    summary:
      "Excel training that moves teams from manual spreadsheets to fast, reliable reporting — from fundamentals to advanced analysis.",
    topics: [
      "Advanced formulas and lookups",
      "Pivot tables and data cleaning",
      "Reporting automation",
      "Dashboards with Excel and Power BI",
      "AI-assisted analysis in spreadsheets",
    ],
    audience: "Finance, accounts, MIS, operations and sales teams",
  },
];

export const corporateProcess: { title: string; description: string }[] = [
  {
    title: "1. Discovery call",
    description: "We understand your team's size, roles, current skill level and what you want them to be able to do.",
  },
  {
    title: "2. Custom program",
    description: "We scope the topics, duration and examples around your team's real work rather than a fixed syllabus.",
  },
  {
    title: "3. Hands-on delivery",
    description: "Trainers run practical sessions on-site at your premises or at our Kochi campus, with exercises for every participant.",
  },
  {
    title: "4. Follow-up",
    description: "Participants leave with reference material and practice tasks so the skills carry into daily work.",
  },
];

export const corporateChecklist = {
  heading: "How to choose a corporate training company in Kochi",
  intro:
    "If you are comparing corporate training companies in Kochi, these are the questions that separate useful training from an expensive day out of the office:",
  items: [
    "Is the session hands-on, with every participant practising — or mostly slides?",
    "Will the program be customised to your team's work, tools and skill level?",
    "Do the trainers teach these skills regularly and work with them in practice?",
    "Can they deliver on-site at your office as well as at their own campus?",
    "Can they point to real organisations they have trained?",
    "Is there follow-up material so the learning lasts beyond the session?",
  ],
};

export const corporateProof = {
  heading: "Corporate AI training delivered for KSEB",
  text: "In August 2026, Future Optima delivered a corporate training session for the Kerala State Electricity Board (KSEB) on practical AI tools for the workplace — applying the same project-first approach we use with our students to a professional audience.",
  linkLabel: "Read about the KSEB training",
  href: "/news/kseb-corporate-training-ai-tools",
};

export const corporateFaqs: FaqItem[] = [
  {
    question: "Which company provides corporate training in Kochi?",
    answer:
      "Future Optima IT Solutions Pvt Ltd, based in Chembumukku, Kochi, provides corporate training for organisations across Kerala — covering AI and Generative AI, IT skills, and Microsoft Excel and data analytics, delivered on-site or at our Kochi campus.",
  },
  {
    question: "Do you offer AI corporate training in Kochi?",
    answer:
      "Yes. Our AI corporate training teaches teams to use AI tools for research, drafting, data analysis, reporting and workflow automation, with a focus on checking AI output and using it responsibly. We delivered this kind of training for the Kerala State Electricity Board (KSEB) in August 2026.",
  },
  {
    question: "What does Generative AI corporate training cover?",
    answer:
      "It covers how large language models work, prompting for reliable results, retrieval-augmented generation (RAG) on company documents, AI agents and tool use, and how to evaluate quality, cost and risk before rolling AI out to a team.",
  },
  {
    question: "Do you provide Microsoft Excel corporate training in Kochi?",
    answer:
      "Yes. Excel training covers advanced formulas, pivot tables, data cleaning, reporting automation and dashboards with Excel and Power BI, and can include AI-assisted analysis. The level is set to match your team.",
  },
  {
    question: "Is the corporate training conducted at our office or at your campus?",
    answer:
      "Either. Sessions run on-site at your organisation's premises anywhere in Kerala, or at our Chembumukku, Kochi campus — whichever works better for your team.",
  },
  {
    question: "Can corporate training be customised for our organisation?",
    answer:
      "Yes. Every program is scoped around your team's size, current skill level and goals, using examples from your own kind of work rather than a fixed, generic curriculum.",
  },
  {
    question: "How long does a corporate training program take?",
    answer:
      "It depends on the goal — from a single focused session to a multi-day or multi-week program. We recommend a duration after a short discovery call about your team and objectives.",
  },
  {
    question: "Is corporate training only for IT companies?",
    answer:
      "No. AI, Excel and data skills are useful in almost every department, and we train non-technical teams as well as IT teams — in government bodies, businesses and other organisations across Kerala.",
  },
  {
    question: "How do we get a quote for corporate training in Kerala?",
    answer:
      "Call or WhatsApp us, or email info@futureoptimaitsolutions.com with your team size, the topic you need and your preferred location. We will scope a program and share the details.",
  },
];
