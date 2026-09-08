import Link from "next/link";
import { ArrowRight, Briefcase, Building2, GraduationCap } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const pillars = [
  {
    icon: GraduationCap,
    title: "IT & AI Training",
    description:
      "Job-oriented courses in Python full-stack, MERN, Data Science with AI, Cybersecurity, Agentic AI and more — built for real placements, not just certificates.",
    href: "/courses",
    cta: "Explore Courses",
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description:
      "Hands-on AI and workplace technology training for organizations — the same project-first approach we use with students, delivered on-site or at our campus.",
    href: "/internship-corporate-training#corporate-training",
    cta: "Corporate Training",
  },
  {
    icon: Briefcase,
    title: "Internship Training",
    description:
      "Real internship experience built into select courses — Business Analytics, Cybersecurity and Data Science with AI — with genuine client and partner project work.",
    href: "/internship-corporate-training#internships",
    cta: "Internship Programs",
  },
];

export default function TrainingPillars() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="accent-script text-2xl sm:text-3xl">What we do</p>
          <h2 className="mt-1 max-w-2xl font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Training for <span className="accent-highlight">students and organizations</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <Link
                href={pillar.href}
                className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                  {pillar.cta}{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
