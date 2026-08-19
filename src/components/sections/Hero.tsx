import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";
import RoamingRobot from "@/components/motion/RoamingRobot";
import PointingGirl from "@/components/motion/PointingGirl";
import FloatingTechIcons from "@/components/motion/FloatingTechIcons";
import { heroStats } from "@/lib/data/site";

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

      <FloatingTechIcons />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <RoamingRobot className="pointer-events-none absolute right-2 top-0 scale-75 sm:hidden" />

        <Reveal>
          <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 sm:text-sm">
            <PointingGirl className="pointer-events-none absolute -left-14 -top-12 hidden scale-90 sm:block" />
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            Kerala&apos;s Industry-Mentored AI &amp; IT Training Institute
            <RoamingRobot className="pointer-events-none absolute -top-6 left-[85%] hidden sm:block" />
          </div>
        </Reveal>

        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
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
            <span className="accent-highlight font-semibold">25% fee payment after placement</span>
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
