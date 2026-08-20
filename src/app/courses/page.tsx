import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/lib/data/courses";
import type { CourseCategory } from "@/types";

export const metadata: Metadata = {
  title: "All Courses — Job-Oriented IT & AI Training in Kochi",
  description:
    "Browse all Future Optima IT Solutions courses in Kochi, Kerala — AI Website Development, Python full-stack, MERN, Data Science with AI, AI Engineering, Cybersecurity, Agentic AI and our flagship 1-year Advanced Diploma. 100% placement support on every course.",
  alternates: { canonical: "/courses" },
};

const categories: CourseCategory[] = [
  "Full-Stack Development",
  "Data & AI",
  "Security & Testing",
  "Advanced Diploma",
];

export default function CoursesPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Job-Oriented <span className="text-gradient-amber">IT &amp; AI Courses</span> in
              Kochi, Kerala
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Every course is built around real projects, industry mentorship and{" "}
              <span className="accent-highlight font-semibold">100% placement support</span>,
              with up to ₹15,000 fees payable only after placement. Not sure which course fits
              you? Try our{" "}
              <Link href="/virtual-office" className="underline decoration-amber-500">
                Virtual Office course finder
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {categories.map((category) => {
        const list = courses.filter((c) => c.category === category);
        if (!list.length) return null;
        return (
          <section key={category} className="py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                  {category}
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((course, i) => (
                  <Reveal key={course.slug} delay={(i % 3) * 0.08}>
                    <CourseCard course={course} delayIndex={i} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
