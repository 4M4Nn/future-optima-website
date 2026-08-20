import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Become a Faculty — Full-Time Teaching Careers",
  description:
    "Join Future Optima IT Solutions as a full-time faculty member in Kochi. Lead a course track in Python, MERN, Data Science, AI Engineering, Cybersecurity or Agentic AI.",
  alternates: { canonical: "/career/faculty" },
};

const expectations = [
  {
    icon: BookOpen,
    title: "Own a Course Track",
    description:
      "Lead the delivery of one of our core tracks — Python full-stack, MERN, Data Science with AI, AI Engineering, Cybersecurity or Agentic AI — end to end.",
  },
  {
    icon: Users,
    title: "Mentor, Not Just Lecture",
    description:
      "Guide students through real project work, code reviews and mock interviews alongside structured classroom teaching.",
  },
  {
    icon: Wrench,
    title: "Keep the Curriculum Current",
    description:
      "Work with our industry mentors to keep course content aligned with what companies are actually hiring for.",
  },
];

export default function FacultyPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Become a <span className="text-gradient-amber">Faculty</span> Member
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Full-time teaching roles at our Chembumukku, Kochi campus for trainers who want to
              own a course track and see their students through to placement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              What Faculty at Future Optima Do
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {expectations.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
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
              What We Look For
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-base">
              Strong hands-on experience in your subject area, genuine comfort explaining
              technical concepts to beginners, and a track record of building things — not just
              studying them. Prior teaching experience helps but isn&apos;t mandatory if your
              practical expertise is strong. Check our{" "}
              <Link href="/career/open-positions" className="font-semibold text-amber-600 underline decoration-amber-500">
                current open positions
              </Link>{" "}
              for specific role requirements, or write to us directly if you don&apos;t see a
              track that matches your expertise yet.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-navy-900 hover:bg-navy-800">
                <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Faculty Application — Future Optima")}`}>
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
