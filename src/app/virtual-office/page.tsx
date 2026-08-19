import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CourseFinderQuiz from "@/components/virtual-office/CourseFinderQuiz";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Virtual Office — Find Your Right Course",
  description:
    "Visit Future Optima's Virtual Office — answer a couple of quick questions about your interests and get 2-3 personalized course recommendations with reasons.",
  alternates: { canonical: "/virtual-office" },
};

export default function VirtualOfficePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/campus/training-lab-2.jpeg"
            alt="Future Optima virtual office and training floor"
            fill
            priority
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/95 to-navy-950" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <p className="accent-script text-2xl text-amber-400 sm:text-3xl">
              Welcome to our
            </p>
            <h1 className="mt-1 font-heading text-4xl font-extrabold sm:text-5xl">
              Virtual Office &amp; <span className="text-gradient-amber">Course Counselor</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Not sure which course fits you? Answer two quick questions and get a personalized
              shortlist &mdash; just like sitting down with one of our real counselors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <CourseFinderQuiz />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-6 rounded-3xl bg-navy-900 p-8 text-white sm:grid-cols-2 sm:p-10">
              <div>
                <h2 className="font-heading text-xl font-bold">Prefer to talk to a person?</h2>
                <p className="mt-2 text-sm text-white/70">
                  Our real counselors at the Chembumukku, Kochi campus are available for calls,
                  WhatsApp, or an in-person visit &mdash; the Virtual Office is a starting point,
                  not a replacement.
                </p>
              </div>
              <div className="space-y-3 text-sm text-white/80">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-500" /> {siteConfig.primaryPhone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amber-500" /> {siteConfig.email}
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  {siteConfig.address.full}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" /> Mon &ndash; Sat, 9:30 AM &ndash;
                  6:30 PM
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
