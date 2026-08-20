import type { NewsPost } from "@/types";

export const newsPosts: NewsPost[] = [
  {
    slug: "mou-bharata-mata-college-thrikkakara-data-analyst-genai",
    title:
      "Future Optima Signs MoU with Bharata Mata College, Thrikkakara for a Data Analyst with Gen AI Program",
    metaTitle: "MoU with Bharata Mata College — Data Analyst with Gen AI",
    metaDescription:
      "Future Optima IT Solutions has signed a Memorandum of Understanding with Bharata Mata College (Autonomous), Thrikkakara, Kochi, to deliver an industry-aligned Data Analyst with Generative AI program.",
    excerpt:
      "Future Optima IT Solutions has partnered with Bharata Mata College (Autonomous), Thrikkakara, to bring an industry-driven Data Analyst with Generative AI curriculum directly to students on campus.",
    publishedAt: "2026-08-20",
    coverImage: "/images/news/bmc-mou-signing.jpeg",
    coverAlt: "Future Optima IT Solutions and Bharata Mata College representatives at the MoU signing ceremony",
    body: [
      {
        type: "p",
        text: "Future Optima IT Solutions Pvt Ltd has signed a Memorandum of Understanding (MoU) with Bharata Mata College (Autonomous), Thrikkakara, Kochi, to launch a dedicated Data Analyst with Generative AI program for the college's students.",
      },
      {
        type: "p",
        text: "The partnership brings Future Optima's industry-mentored, project-first training model directly into an academic setting — pairing the college's existing curriculum with hands-on, placement-focused training in data analytics, Python, SQL, Power BI and applied generative AI tools.",
      },
      { type: "h2", text: "What the Partnership Covers" },
      {
        type: "list",
        items: [
          "A structured Data Analyst with Gen AI curriculum delivered to Bharata Mata College students",
          "Access to Future Optima's industry mentors and real-world project briefs",
          "Career guidance and placement support through Future Optima's placement cell",
          "A pathway from classroom learning directly into job-oriented, portfolio-based training",
        ],
      },
      {
        type: "p",
        text: "This MoU reflects Future Optima's ongoing effort to work directly with academic institutions across Kerala, closing the gap between college curricula and the practical, AI-driven skills employers are hiring for today.",
      },
    ],
  },
  {
    slug: "new-ai-batch-orientation",
    title: "New AI Batch Orientation Held at Future Optima's Chembumukku Campus",
    metaTitle: "New AI Batch Orientation — Future Optima IT Solutions",
    metaDescription:
      "Future Optima IT Solutions welcomed its newest batch of AI and data students with an orientation session at its Chembumukku, Kochi campus, covering the curriculum, mentors and placement process.",
    excerpt:
      "Future Optima welcomed its newest batch of AI students with an orientation session covering the curriculum roadmap, mentor introductions and placement process.",
    publishedAt: "2026-08-20",
    coverImage: "/images/news/ai-batch-orientation.jpeg",
    coverAlt: "New AI batch orientation session at Future Optima IT Solutions, Chembumukku campus",
    body: [
      {
        type: "p",
        text: "Future Optima IT Solutions held an orientation session for its newest AI batch at the Chembumukku, Kochi campus, welcoming students starting their journey into AI, data and full-stack training.",
      },
      {
        type: "p",
        text: "The session introduced students to the course roadmap, lab access, mentor-led project structure and the placement cell process that runs alongside every batch from day one.",
      },
      { type: "h2", text: "What New Students Can Expect" },
      {
        type: "list",
        items: [
          "A project-first curriculum structured around real, portfolio-ready outcomes",
          "Direct access to industry-mentored labs for AI, automation and data projects",
          "Soft-skills, resume and mock-interview support from week one",
          "A dedicated placement cell tracking each student from enrollment to offer",
        ],
      },
      {
        type: "p",
        text: "Orientation sessions like this run at the start of every new batch, giving incoming students a clear view of what the course covers and how Future Optima's placement-first model works before their first technical class.",
      },
    ],
  },
];

export function getNewsPostBySlug(slug: string) {
  return newsPosts.find((n) => n.slug === slug);
}
