import { generalFaqs } from "@/lib/data/faqs";
import { courses } from "@/lib/data/courses";
import { siteConfig } from "@/lib/data/site";

export interface ChatKbEntry {
  question: string;
  answer: string;
  keywords: string[];
}

const STOPWORDS = new Set([
  "the", "is", "are", "a", "an", "of", "to", "in", "and", "or", "for", "on",
  "what", "how", "do", "does", "can", "i", "you", "your", "my", "with",
  "it", "this", "that", "will", "be", "at", "as", "if", "me", "we", "our",
]);

function keywordsFrom(text: string): string[] {
  return Array.from(
    new Set(
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length > 2 && !STOPWORDS.has(w))
    )
  );
}

const baseEntries: ChatKbEntry[] = generalFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
  keywords: keywordsFrom(faq.question),
}));

const courseEntries: ChatKbEntry[] = courses.flatMap((course) =>
  course.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
    keywords: Array.from(
      new Set([...keywordsFrom(faq.question), ...keywordsFrom(course.shortName)])
    ),
  }))
);

const courseListAnswer = `We offer: ${courses.map((c) => c.shortName).join(", ")}. Not sure which fits you? Try our Virtual Office course finder or just tell me your interest and I'll point you the right way.`;

const customEntries: ChatKbEntry[] = [
  {
    question: "What courses does Future Optima offer?",
    answer: courseListAnswer,
    keywords: ["courses", "course", "programs", "programmes", "offer", "list"],
  },
  {
    question: "Where is Future Optima located?",
    answer: `Our campus is at ${siteConfig.address.full}. We also run live online batches for students across Kerala.`,
    keywords: ["located", "location", "address", "campus", "where", "kochi", "kerala"],
  },
  {
    question: "How can I contact Future Optima?",
    answer: `Call/WhatsApp us at +91 ${siteConfig.primaryPhone} or email ${siteConfig.email} — or use the contact form on our Contact page and a counselor will reach out.`,
    keywords: ["contact", "phone", "number", "email", "call", "reach", "counselor", "counsellor"],
  },
  {
    question: "What is Future Optima IT Solutions?",
    answer: siteConfig.description,
    keywords: ["about", "future", "optima", "company", "institute", "who"],
  },
  {
    question: "Tell me about the Dubai IT Infrastructure program",
    answer:
      "Our IT Infrastructure Engineer Program (Dubai) trains you on Windows Server, Microsoft Azure, Office 365 and CCNA over 4.5–6 months, with 100% job assurance for candidates who complete the program and engage fully with placement support. Program fee is AED 23,500 with loan options available. Want the full details? Check out the course page or ask me anything specific!",
    keywords: ["dubai", "abroad", "uae", "infrastructure", "azure", "windows", "server", "ccna", "job", "assurance"],
  },
];

export const chatKnowledgeBase: ChatKbEntry[] = [...customEntries, ...baseEntries, ...courseEntries];

export const suggestedQuestions: string[] = [
  "What courses do you offer?",
  "What is the pay-after-placement offer?",
  "Tell me about the Dubai IT Infrastructure program",
  "Do I need a technical degree to join?",
  "How does placement support work?",
  "How can I contact admissions?",
];

export function findBestAnswer(userInput: string): string | null {
  const inputKeywords = keywordsFrom(userInput);
  if (inputKeywords.length === 0) return null;

  let bestScore = 0;
  let bestEntry: ChatKbEntry | null = null;

  for (const entry of chatKnowledgeBase) {
    let score = entry.keywords.filter((k) => inputKeywords.includes(k)).length;
    if (userInput.toLowerCase().includes(entry.question.toLowerCase())) {
      score += 5;
    }
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (bestEntry && bestScore >= 1) {
    return bestEntry.answer;
  }
  return null;
}
