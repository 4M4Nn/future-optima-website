import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Mail, Phone, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { heroStats, hiringPartners, siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Hire From Us — Recruit Trained IT & AI Talent | Future Optima",
  description:
    "Hire job-ready IT & AI talent trained by Future Optima IT Solutions, Kochi — Python, MERN, Data Science, AI Engineering, Cybersecurity and more. 200+ companies already do.",
  alternates: { canonical: "/hire-from-us" },
};

const studentProfiles = [
  {
    title: "Python & Full-Stack Developers",
    description:
      "Django + React trained, with AI-integrated capstone projects — ready for backend, full-stack or AI-support roles.",
  },
  {
    title: "MERN Stack Developers",
    description:
      "JavaScript full-stack talent comfortable across React, Node.js, Express and MongoDB, trained on team-based sprint projects.",
  },
  {
    title: "Data Analysts & Data Scientists",
    description:
      "Excel/SQL/Power BI analysts and Python/ML-trained data scientists, both trained on real business case studies.",
  },
  {
    title: "AI & Agentic AI Engineers",
    description:
      "Trained in LLM integration, RAG systems and autonomous agent development — increasingly rare, increasingly in demand.",
  },
  {
    title: "Cybersecurity Analysts",
    description:
      "SOC analyst and red-team fundamentals trained on real lab environments, not slide-deck theory.",
  },
  {
    title: "QA / Software Testers",
    description:
      "Manual and automation (Selenium) trained testers, ready to contribute to a test cycle from day one.",
  },
];

export default function HireFromUsPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Hire <span className="text-gradient-amber">Job-Ready Talent</span> From Future
              Optima
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              200+ companies already hire from our placement cell &mdash; from IT services
              firms to product startups to industrial automation employers.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
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

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="flex items-center gap-2 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              <Users className="h-6 w-6 text-amber-500" /> Talent We Train
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {studentProfiles.map((profile, i) => (
              <Reveal key={profile.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <Briefcase className="h-6 w-6 text-amber-500" />
                  <h3 className="mt-3 font-heading text-base font-bold text-navy-900">
                    {profile.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {profile.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Inside Our Training Labs
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Real photos from our Chembumukku, Kochi training floor — where the candidates
              you&apos;d hire are trained.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/images/campus/training-lab-1.jpeg", alt: "Training lab with individual work stations" },
              { src: "/images/campus/classroom-session-1.jpeg", alt: "Placement team briefing students" },
              { src: "/images/campus/classroom-session-2.jpeg", alt: "Trainer leading a live session" },
              { src: "/images/campus/training-lab-2.jpeg", alt: "Future Optima training facility" },
            ].map((img) => (
              <div key={img.src} className="relative h-48 overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Companies Already Hiring From Us
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hiringPartners.map((partner, i) => (
              <Reveal key={partner.name} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-xl border border-border-soft bg-white p-4 shadow-sm">
                  <p className="font-heading text-sm font-bold text-navy-900">{partner.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{partner.type}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <ShieldCheck className="mx-auto h-8 w-8 text-amber-500" />
            <h2 className="mt-4 font-heading text-2xl font-extrabold sm:text-3xl">
              Recruit Directly From Our Placement Cell
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Share your open roles and the skill profile you need — our placement team will
              shortlist matching, trained candidates from current and recent batches.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                <Link href="/contact">
                  Post a Hiring Requirement <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="mr-1 h-4 w-4" /> {siteConfig.email}
                </a>
              </Button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 text-amber-500" /> {siteConfig.primaryPhone}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
