import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Code2, ShieldCheck, ShieldQuestion, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import WhatsAppQuickLink from "@/components/layout/WhatsAppQuickLink";
import { courseImages } from "@/lib/data/images";
import { cn } from "@/lib/utils";
import type { Course, CourseCategory } from "@/types";

const categoryIcons: Record<CourseCategory, typeof Code2> = {
  "Full-Stack Development": Code2,
  "Data & AI": Sparkles,
  "Security & Testing": ShieldQuestion,
  "Advanced Diploma": ShieldCheck,
};

export default function CourseCard({ course, delayIndex = 0 }: { course: Course; delayIndex?: number }) {
  const CategoryIcon = categoryIcons[course.category];

  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${delayIndex * 60}ms` }}
    >
      <Link href={`/courses/${course.slug}`} className="relative block h-44 overflow-hidden">
        <Image
          src={courseImages[course.slug]}
          alt={course.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
          <CategoryIcon className="h-3.5 w-3.5 text-amber-600" />
          {course.category}
        </div>

        <p className="absolute bottom-9 left-4 right-3 font-heading text-base font-bold text-white drop-shadow sm:text-lg">
          {course.shortName}
        </p>

        {course.badge ? (
          <Badge className="absolute bottom-3 left-4 border-none bg-amber-500 text-navy-950 shadow-sm">
            {course.badge}
          </Badge>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-2 text-sm text-muted-foreground">{course.tagline}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700">
            <Clock className="h-3.5 w-3.5 text-amber-500" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            100% Placement Support
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/courses/${course.slug}`}
            className={cn(
              "inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
            )}
          >
            View Curriculum
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <WhatsAppQuickLink
            message={`Hi Future Optima! I'm interested in the ${course.shortName} course — can you share more details?`}
            className="h-8 w-8 shrink-0 shadow-sm"
            iconClassName="h-4 w-4"
            label={undefined}
          />
        </div>
      </div>
    </div>
  );
}
