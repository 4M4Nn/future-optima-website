import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { jobOpenings } from "@/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers at Future Optima IT Solutions",
  description:
    "Explore career opportunities at Future Optima IT Solutions, Kochi — full-time faculty roles, part-time tutoring and current open positions in IT & AI training.",
  alternates: { canonical: "/career" },
};

const paths = [
  {
    icon: GraduationCap,
    title: "Become a Faculty",
    description:
      "Join as a full-time trainer and lead a course track end-to-end — curriculum, labs, mentorship and student outcomes.",
    href: "/career/faculty",
  },
  {
    icon: Briefcase,
    title: "Become a Tutor",
    description:
      "Teach on a part-time or freelance basis, sharing your industry expertise with our students on a flexible schedule.",
    href: "/career/become-a-tutor",
  },
  {
    icon: Search,
    title: "Open Positions",
    description: `${jobOpenings.length} current opening${jobOpenings.length === 1 ? "" : "s"} — see the roles we're actively hiring for right now.`,
    href: "/career/open-positions",
  },
];

export default function CareerPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Build Careers, <span className="text-gradient-amber">Including Your Own</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              We&apos;re a Kochi-based AI &amp; IT training institute built by people who believe
              training only matters if it ends in a job — for our students, and for our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {paths.map((path, i) => (
              <Reveal key={path.href} delay={i * 0.08}>
                <Link
                  href={path.href}
                  className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                    <path.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 font-heading text-lg font-bold text-navy-900">
                    {path.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {path.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                    Learn more{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Why Work at Future Optima
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-base">
              Our faculty and tutors work directly with real students on real, placement-ready
              projects — not recycled slide decks. You&apos;ll teach alongside industry
              professionals, shape curriculum that adapts as fast as the technology itself, and
              measure your own success the way we measure the institute&apos;s: by where our
              students end up.
            </p>
            <Button asChild size="lg" className="mt-8 bg-navy-900 hover:bg-navy-800">
              <Link href="/career/open-positions">
                View Open Positions <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
