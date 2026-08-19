import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import WhatsAppQuickLink from "@/components/layout/WhatsAppQuickLink";
import { heroStats, hiringPartners } from "@/lib/data/site";
import { placementRecords } from "@/lib/data/placements";

export const metadata: Metadata = {
  title: "Placements — 1000+ Students Placed | Future Optima IT Solutions",
  description:
    "Future Optima IT Solutions has placed 1000+ students with 200+ hiring partners and a 90%+ placement success rate. See real placement records, roles and companies.",
  alternates: { canonical: "/placements" },
};

export default function PlacementsPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Placements That Speak for{" "}
              <span className="text-gradient-amber">Themselves</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              1000+ successful placements, 200+ hiring partners, and a 90%+ placement success
              rate &mdash; built on real training, not just a promise.
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-amber-200 bg-amber-100 p-6 text-center sm:flex-row sm:text-left">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl ring-2 ring-white">
                <Image
                  src="/images/placements/notice-recent-placement.jpeg"
                  alt="Recent placement notice"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-900 sm:justify-start">
                  <TrendingUp className="h-4 w-4 text-amber-600" />
                  Recent Placement Notice
                </p>
                <p className="mt-1 text-sm text-navy-800">
                  Average starting salary <span className="font-bold">6.5 LPA</span> for
                  strong-performing graduates across our latest placement drives.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="flex items-center gap-2 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              <Briefcase className="h-6 w-6 text-amber-500" /> Recent Placement Records
            </h2>
          </Reveal>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border-soft bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-5 py-3 font-heading font-semibold">Student</th>
                  <th className="px-5 py-3 font-heading font-semibold">Course</th>
                  <th className="px-5 py-3 font-heading font-semibold">Company</th>
                  <th className="px-5 py-3 font-heading font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                {placementRecords.map((record, i) => (
                  <tr
                    key={record.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-navy-50/60"}
                  >
                    <td className="px-5 py-3 font-semibold text-navy-900">{record.name}</td>
                    <td className="px-5 py-3 text-muted-foreground">{record.course}</td>
                    <td className="px-5 py-3 text-navy-800">{record.company}</td>
                    <td className="px-5 py-3 text-muted-foreground">{record.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="flex items-center gap-2 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              <Building2 className="h-6 w-6 text-amber-500" /> 200+ Hiring Partners
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              A selection of the companies actively hiring Future Optima graduates, spanning
              IT services, product engineering, analytics and industrial automation.
            </p>
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

      <section className="bg-navy-950 py-14 text-center text-white sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
              Hiring for your team? See who you could hire from us.
            </h2>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                <Link href="/hire-from-us">
                  Visit Hire From Us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <WhatsAppQuickLink
                message="Hi Future Optima! I'd like to talk about hiring/recruiting your trained students."
                className="h-11 gap-2 px-6 text-sm font-semibold"
                iconClassName="h-4 w-4"
                label="Chat on WhatsApp"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
