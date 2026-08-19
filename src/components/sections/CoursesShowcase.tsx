import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/lib/data/courses";

export default function CoursesShowcase() {
  const shown = courses.filter((c) => c.slug !== "advanced-diploma-ai-systems-engineering");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="accent-script text-2xl sm:text-3xl">Our courses</p>
              <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
                Job-oriented programs across{" "}
                <span className="accent-highlight">IT &amp; AI</span>
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((course, i) => (
            <Reveal key={course.slug} delay={(i % 3) * 0.08}>
              <CourseCard course={course} delayIndex={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
