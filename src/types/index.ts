export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export type CourseCategory =
  | "Full-Stack Development"
  | "Data & AI"
  | "Security & Testing"
  | "Advanced Diploma";

export interface Course {
  slug: string;
  category: CourseCategory;
  name: string;
  shortName: string;
  tagline: string;
  heroImage: string;
  duration: string;
  mode: string;
  level: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string[];
  highlights: string[];
  modules: CourseModule[];
  tools: string[];
  eligibility: string;
  careerRoles: string[];
  faqs: CourseFaq[];
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  keywords: string[];
  coverImage: string;
  body: BlogBlock[];
  faqs?: CourseFaq[];
  relatedCourseSlug?: string;
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface PlacementRecord {
  name: string;
  course: string;
  company: string;
  role: string;
  college?: string;
}

export interface HiringPartner {
  name: string;
  type: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
