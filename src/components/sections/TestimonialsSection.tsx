import { Star } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { testimonials } from "@/lib/data/placements";

export default function TestimonialsSection() {
  return (
    <section className="bg-navy-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="accent-script text-2xl sm:text-3xl">Student voices</p>
          <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Real students. Real <span className="accent-highlight">placements</span>.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-800">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 font-heading text-sm font-bold text-navy-900">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
