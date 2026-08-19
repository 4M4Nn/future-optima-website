import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";
import { courses } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";
import type { CourseCategory } from "@/types";

export const metadata: Metadata = {
  title: "All Courses — Job-Oriented IT & AI Training in Kochi",
  description:
    "Browse all Future Optima IT Solutions courses in Kochi, Kerala — Python full-stack, MERN, Data Science with AI, AI Engineering, Cybersecurity, Agentic AI and our flagship 1-year Advanced Diploma.",
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
              Kochi
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Every course is built around real projects, industry mentorship and placement
              support — with{" "}
              <span className="accent-highlight font-semibold">25% fee payment after placement</span>.
              Not sure which course fits you? Try our{" "}
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
                    <Link
                      href={`/courses/${course.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-shadow hover:shadow-lg"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={courseImages[course.slug]}
                          alt={course.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {course.featured ? (
                          <Badge className="absolute left-3 top-3 border-none bg-amber-500 text-navy-950">
                            Flagship
                          </Badge>
                        ) : null}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-heading text-lg font-bold text-navy-900">
                          {course.shortName}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                          {course.tagline}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-navy-700">
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-amber-500" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5 text-amber-500" />
                            {course.level}
                          </span>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                          View Curriculum
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
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
