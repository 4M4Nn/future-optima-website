import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Laptop, Mail, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Become a Tutor — Part-Time & Freelance Teaching",
  description:
    "Teach part-time or freelance at Future Optima IT Solutions, Kochi. Share your industry expertise in Python, MERN, Data Science, AI or Cybersecurity on a flexible schedule.",
  alternates: { canonical: "/career/become-a-tutor" },
};

const perks = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Teach a weekend batch, a single module, or a short workshop — sessions are structured around your availability, not the other way around.",
  },
  {
    icon: Laptop,
    title: "Online or On-Campus",
    description:
      "Deliver sessions from our Chembumukku campus or fully online to our remote batches, with the same course material and support.",
  },
  {
    icon: Target,
    title: "Focused Subject Ownership",
    description:
      "Take a specific module or specialization within a course track rather than owning the entire curriculum end to end.",
  },
];

export default function BecomeATutorPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Become a <span className="text-gradient-amber">Tutor</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Share your industry expertise on a part-time or freelance basis — a flexible way to
              teach without leaving your current role.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                    <perk.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Who We&apos;re Looking For
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-base">
              Working professionals and specialists across our course areas — Python &amp;
              full-stack development, MERN, data science, AI engineering, cloud &amp; DevOps, and
              cybersecurity — who want to mentor the next batch of talent without a full-time
              commitment. Tell us your area of expertise and preferred availability and we&apos;ll
              match you against upcoming batches.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-navy-900 hover:bg-navy-800">
                <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Tutor Application — Future Optima")}`}>
                  <Mail className="mr-1 h-4 w-4" /> Email Your CV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/career/open-positions">
                  View Open Positions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
