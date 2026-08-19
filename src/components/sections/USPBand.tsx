import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { usps } from "@/lib/data/site";

export default function USPBand() {
  return (
    <section className="bg-navy-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="accent-script text-2xl sm:text-3xl">Why students choose us</p>
          <h2 className="mt-1 max-w-2xl font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Training built around <span className="accent-highlight">outcomes</span>, not
            attendance
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp, i) => (
            <Reveal key={usp.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <CheckCircle2 className="h-7 w-7 text-amber-500" />
                <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">
                  {usp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {usp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
