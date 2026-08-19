import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, Target, Users } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { siteConfig, heroStats } from "@/lib/data/site";
import { stockImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "About Us — Future Optima IT Solutions, Kochi",
  description:
    "Future Optima IT Solutions Pvt Ltd is a Kochi-based AI & IT training institute built around real placements, not certificates. Learn our story, mission and approach.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Outcome-First Training",
    description:
      "Every course is designed backward from the job it should get you, not forward from a generic syllabus template.",
  },
  {
    icon: HeartHandshake,
    title: "25% Fee After Placement",
    description:
      "We structured our fees so our own success depends on yours — the placement team stays invested after your classes end.",
  },
  {
    icon: Users,
    title: "Industry-Mentored, Not Just Faculty-Taught",
    description:
      "Working professionals guide our AI, data and engineering tracks so what you learn matches what companies are hiring for right now.",
  },
  {
    icon: Award,
    title: "Real Projects, Real Portfolios",
    description:
      "Certificates matter less than what you can build and explain in an interview — every course ends in a portfolio-ready project.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image src={stockImages.about} alt="Future Optima team and students" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/95 to-navy-950" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              About <span className="text-gradient-amber">Future Optima</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70 sm:text-lg">
              {siteConfig.name} is a Kochi-based AI &amp; IT training institute built on one
              belief: training only matters if it ends in a job.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Our Story
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-navy-800">
            <p>
              Future Optima IT Solutions Pvt Ltd was founded in Chembumukku, Kochi, with a
              straightforward observation: Kerala produces a huge number of capable graduates
              every year, but too many training institutes measure success in certificates
              issued rather than jobs secured. We built Future Optima to close that gap
              directly — courses in Python full-stack, MERN, Data Science with AI, AI
              Engineering, Cybersecurity, Agentic AI and more, every one of them structured
              around a real, placement-ready outcome.
            </p>
            <p>
              That philosophy shows up structurally, not just in marketing copy: our{" "}
              <span className="accent-highlight font-semibold">25% fee-after-placement</span>{" "}
              model means a meaningful part of what we earn from every student is tied to
              whether they actually get hired. It&apos;s a small structural choice with a large
              effect on how our placement cell operates.
            </p>
            <p className="accent-script text-xl text-navy-900">&ldquo;{siteConfig.founderNote}&rdquo;</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              What We Stand For
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <value.icon className="h-7 w-7 text-amber-500" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 rounded-3xl bg-navy-900 p-8 text-white sm:grid-cols-4 sm:p-12">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-extrabold text-amber-500 sm:text-4xl">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
