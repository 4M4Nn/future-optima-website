import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";
import { getCourseBySlug } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";

export default function DubaiProgramSpotlight() {
  const course = getCourseBySlug("it-infrastructure-engineer-program-dubai");
  if (!course) return null;

  return (
    <section className="relative overflow-hidden bg-navy-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-700 sm:text-sm">
            <Globe2 className="h-4 w-4" />
            New — Study Abroad Program
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            IT Infrastructure Engineer Program in{" "}
            <span className="text-gradient-amber">Dubai</span>
          </h2>
          <p className="mt-4 text-navy-700">{course.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge className="border-none bg-amber-500 text-navy-950">100% Job Assurance</Badge>
            <Badge variant="secondary">{course.duration}</Badge>
            <Badge variant="secondary">AED 23,500</Badge>
            <Badge variant="secondary">Loan Options Available</Badge>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-navy-700">
            {course.highlights.slice(0, 4).map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                {point}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 bg-amber-500 text-navy-950 hover:bg-amber-400">
            <Link href={`/courses/${course.slug}`}>
              Explore the Dubai Program <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
            <Image
              src={courseImages[course.slug]}
              alt={course.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
