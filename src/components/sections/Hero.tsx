import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Building2, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";
import RoamingRobot from "@/components/motion/RoamingRobot";
import HeroGirlVisual from "@/components/motion/HeroGirlVisual";
import { heroAffiliations, heroStats, heroTechStack } from "@/lib/data/site";

const affiliationIcons = [Landmark, Building2, BadgeCheck];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/campus/classroom-session-1.jpeg"
          alt="Students studying AI and software development at Future Optima IT Solutions training institute, Kochi, Kerala"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
          {/* Right column (first in DOM so it reads first on mobile): headline, pitch, girl visual */}
          <div className="relative lg:order-2">
            <RoamingRobot className="pointer-events-none absolute right-2 top-0 scale-75 sm:hidden" />

            <Reveal>
              <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Kerala&apos;s 1st AI Lab &middot; Industry-Mentored AI &amp; IT Training Institute
                <RoamingRobot className="pointer-events-none absolute -top-6 left-[85%] hidden sm:block" />
              </div>
            </Reveal>

            <h1 className="relative z-20 font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              <SplitWords text="Best IT" className="block" />
              <SplitWords
                text="& AI Institute"
                className="block"
                wordClassName="text-gradient-amber"
                delay={0.15}
              />
              <SplitWords text="in Kochi, Kerala" className="block" delay={0.3} />
            </h1>

            <Reveal delay={0.35}>
              <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
                Job-oriented IT and AI courses in Kochi — Python full-stack, MERN, Data Science,
                AI Engineering, Cybersecurity and Agentic AI — built with real projects, industry
                mentors, and{" "}
                <span className="accent-highlight font-semibold">up to ₹15,000 fees pay only after placement</span>
                . Trusted by students across Kochi, Ernakulam and Kerala for genuine, placement-first
                training.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                  <Link href="/courses">
                    Explore Courses <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/virtual-office">Talk to Our Virtual Counselor</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/50 sm:text-sm">
                <ShieldCheck className="h-4 w-4 text-amber-500" />
                NACTET-recognized certification pathway &middot; 200+ hiring partners
              </div>
            </Reveal>

            <HeroGirlVisual className="pointer-events-none relative z-10 mx-auto mt-10 flex w-fit justify-center lg:mx-0 lg:ml-auto lg:mt-16" />
          </div>

          {/* Left column: government/NACTET affiliations + tech stack + trust content */}
          <div className="mt-14 lg:order-1 lg:mt-3">
            <Reveal delay={0.15}>
              <h2 className="font-heading text-2xl font-extrabold leading-tight sm:text-3xl">
                Master{" "}
                <span className="text-gradient-amber">Software &amp; AI Programs</span>
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/70 sm:text-base">
                Government-affiliated, NACTET-certified training in the exact tools and
                technologies companies in Kochi and across Kerala are hiring for right now.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {heroTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 space-y-3">
              {heroAffiliations.map((item, i) => {
                const Icon = affiliationIcons[i % affiliationIcons.length];
                return (
                  <Reveal key={item.title} delay={0.3 + i * 0.08}>
                    <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-white sm:text-base">
                          {item.title}
                        </p>
                        <p className="text-xs text-white/60 sm:text-sm">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.55}>
              <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <h2 className="font-heading text-lg font-extrabold text-white sm:text-xl">
                  Why Students Choose Future Optima in Kochi
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                  Future Optima IT Solutions Pvt Ltd is Chembumukku, Kochi&apos;s leading AI and
                  IT training institute — built for real careers, not just certificates. Every
                  course blends hands-on AI integration, industry-mentored projects and dedicated
                  placement support, backed by a 90%+ placement success rate and 200+ hiring
                  partners across Kerala. Whether you&apos;re starting fresh or upskilling from a
                  non-technical background, our Central Government and State Government
                  affiliated, NACTET-certified programs are built to get you job-ready — fast.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.6}>
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-extrabold text-amber-500 sm:text-4xl">
                  {stat.value}
                  <span>{stat.suffix}</span>
                </p>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
