import type { Metadata } from "next";
import { Compass, HeartHandshake, Sparkles, Target } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "The vision and mission driving Future Optima IT Solutions, Kochi — building job-ready IT & AI talent through outcome-first, industry-mentored training.",
  alternates: { canonical: "/vision-mission" },
};

const coreValues = [
  {
    icon: Target,
    title: "Outcomes Over Certificates",
    description:
      "We measure success in placements, not attendance sheets — every course is designed backward from the job it should get you.",
  },
  {
    icon: HeartHandshake,
    title: "Shared Risk, Shared Success",
    description:
      "Our 25% fee-after-placement model means our own success depends on yours — we stay invested in every student until they're placed.",
  },
  {
    icon: Sparkles,
    title: "Industry-Current, Always",
    description:
      "Working professionals mentor our AI, data and engineering tracks so what students learn matches what companies are hiring for right now.",
  },
  {
    icon: Compass,
    title: "Accessible to Everyone",
    description:
      "A career in tech shouldn't require a computer science degree — our courses are built for career-switchers and first-time learners alike.",
  },
];

export default function VisionMissionPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Our <span className="text-gradient-amber">Vision &amp; Mission</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border-soft bg-white p-8 shadow-sm sm:p-10">
              <p className="accent-script text-2xl">Our Vision</p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                To be Kerala&apos;s most trusted bridge between talent and technology careers.
              </h2>
              <p className="mt-4 leading-relaxed text-navy-800">
                We want every capable graduate and career-switcher in Kerala to have a real,
                practical path into IT and AI careers — regardless of their college, background
                or prior coding experience. Not through certificates, but through skills,
                projects and job offers that prove the training actually worked.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-border-soft bg-white p-8 shadow-sm sm:p-10">
              <p className="accent-script text-2xl">Our Mission</p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                Job-oriented, industry-mentored training with placement built in from day one.
              </h2>
              <p className="mt-4 leading-relaxed text-navy-800">
                {siteConfig.founderNote}
              </p>
              <p className="mt-4 leading-relaxed text-navy-800">
                We deliver on that through project-first course design, working professionals as
                mentors, hands-on lab access for AI, data and automation work, and a dedicated
                placement cell that stays engaged with every student until they have an offer in
                hand — backed by a fee structure where a meaningful share of our own revenue only
                arrives after a student is placed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              What This Looks Like in Practice
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy-900">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
