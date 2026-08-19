import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { courses } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";

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
                  <Badge className="absolute left-3 top-3 border-none bg-navy-950/80 text-white">
                    {course.category}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-bold text-navy-900">
                    {course.shortName}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                    {course.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-navy-700">
                    <Clock className="h-3.5 w-3.5 text-amber-500" />
                    {course.duration}
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
}
