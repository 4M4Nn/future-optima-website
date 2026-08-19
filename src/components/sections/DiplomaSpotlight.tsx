import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { getCourseBySlug } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";

export default function DiplomaSpotlight() {
  const course = getCourseBySlug("advanced-diploma-ai-systems-engineering");
  if (!course) return null;

  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
            <Image
              src={courseImages[course.slug]}
              alt={course.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-400 sm:text-sm">
            <GraduationCap className="h-4 w-4" />
            Flagship 1-Year Program
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
            Advanced Diploma in{" "}
            <span className="text-gradient-amber">AI Systems Engineering</span>, Agentic AI
            &amp; Product Development
          </h2>
          <p className="mt-4 text-white/70">{course.tagline}</p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            {course.highlights.slice(0, 4).map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                {point}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 bg-amber-500 text-navy-950 hover:bg-amber-400">
            <Link href={`/courses/${course.slug}`}>
              Explore the Advanced Diploma <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
