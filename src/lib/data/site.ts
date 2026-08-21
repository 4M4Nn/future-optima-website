import type { HiringPartner, StatItem } from "@/types";

export const siteConfig = {
  name: "Future Optima IT Solutions Pvt Ltd",
  shortName: "Future Optima",
  domain: "futureoptimaitsolutions.com",
  url: "https://futureoptimaitsolutions.com",
  tagline: "Best IT & AI Institute in Kochi, Kerala",
  description:
    "Future Optima IT Solutions Pvt Ltd is a premium AI & IT training institute in Chembumukku, Kochi, Kerala, offering job-oriented courses in Python full-stack development, MERN stack, data science with AI, AI engineering, cybersecurity and more — with 90%+ placement success and pay-after-placement fee support.",
  phones: ["8891129333"],
  primaryPhone: "8891129333",
  whatsapp: "918891129333",
  email: "info@futureoptimaitsolutions.com",
  address: {
    line1: "Civil Line Road, Chembumukku",
    line2: "Ernakulam, Kochi, Kerala 682021",
    full: "Civil Line Road, Chembumukku, Ernakulam, Kochi, Kerala 682021",
    mapsQuery: "Future+Optima+IT+Solutions+Chembumukku+Kochi",
    geo: { lat: 10.0432, lng: 76.3308 },
  },
  social: {
    instagram: "https://www.instagram.com/futureoptimaitsolutions",
    facebook: "https://www.facebook.com/futureoptimaitsolutions",
    linkedin: "https://www.linkedin.com/company/future-optima-it-solutions",
  },
  founderNote:
    "Every student who walks in without a tech background walks out with a portfolio, a certificate, and a job offer — that is the only metric we optimize for.",
};

export const heroStats: StatItem[] = [
  { label: "Successful Placements", value: "1000", suffix: "+" },
  { label: "Hiring Partners", value: "200", suffix: "+" },
  { label: "Placement Success Rate", value: "90", suffix: "%+" },
  { label: "Starting Salary (avg.)", value: "6.5", suffix: " LPA" },
];

export const hiringPartners: HiringPartner[] = [
  { name: "Accenture", type: "IT Services & Consulting" },
  { name: "IBM", type: "Technology & Cloud" },
  { name: "Amazon", type: "E-commerce & Cloud (UK)" },
  { name: "Lulu Group International", type: "Retail & Technology" },
  { name: "Malabar Group", type: "Business Analytics" },
  { name: "Nuventure", type: "Software Services" },
  { name: "Vensure HCM", type: "HR Technology, Kinfra Trivandrum" },
  { name: "Vofox Solutions", type: "Software Development" },
  { name: "Zerone Consulting", type: "IT Consulting" },
  { name: "Comstream Technologies", type: "VoIP & Telecom" },
  { name: "Infotac Solutions", type: "Data Services" },
  { name: "Distinct Infotech Solutions", type: "Business Analytics" },
  { name: "Is Going Online", type: "Software Development" },
  { name: "Switchgear Electromechanical", type: "Industrial Automation" },
  { name: "Loopgen Technologies", type: "AI & Product Engineering" },
  { name: "Edtech Chennai", type: "EdTech" },
];

export const usps: { title: string; description: string }[] = [
  {
    title: "Pay After Placement",
    description:
      "Pay the majority of your course fee upfront — up to ₹15,000 is only due after you're placed in a job through us.",
  },
  {
    title: "90%+ Placement Success Rate",
    description:
      "Dedicated placement cell with 200+ hiring partners actively recruiting from every batch.",
  },
  {
    title: "100% Job-Oriented, Practical Training",
    description:
      "Every course is built around real projects and a portfolio, not just theory and slides.",
  },
  {
    title: "Kerala's Industry-Mentored AI Lab",
    description:
      "Hands-on lab access for agentic AI, automation and data projects, guided by working industry professionals.",
  },
  {
    title: "Soft Skills & Interview Preparation",
    description:
      "Every batch includes communication training, mock interviews and resume building alongside the technical curriculum.",
  },
  {
    title: "Flexible Online & Offline Batches",
    description:
      "Learn from our Chembumukku campus in Kochi or join live online batches with the same mentors and placement support.",
  },
];
