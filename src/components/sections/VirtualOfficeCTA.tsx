import Link from "next/link";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function VirtualOfficeCTA() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href="/virtual-office"
            className="group flex flex-col items-center justify-between gap-5 overflow-hidden rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-6 py-8 text-center text-white transition-shadow hover:shadow-2xl sm:flex-row sm:px-10 sm:text-left"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-amber-500/15 p-3">
                <Building2 className="h-7 w-7 text-amber-500" />
              </div>
              <div>
                <p className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-400 sm:justify-start">
                  <Sparkles className="h-3.5 w-3.5" /> Not sure which course fits you?
                </p>
                <h2 className="mt-1 font-heading text-xl font-extrabold sm:text-2xl">
                  Explore Our Virtual Office &mdash; Get Matched to the Right Course
                </h2>
                <p className="mt-1 text-sm text-white/70">
                  Answer two quick questions and our Virtual Counselor will recommend the best
                  courses for your interests, in seconds.
                </p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-transform group-hover:translate-x-1">
              Visit Virtual Office <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
