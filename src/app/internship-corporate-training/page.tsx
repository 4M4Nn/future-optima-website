import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, Mail, Phone, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Internship & Corporate Training in Kochi",
  description:
    "Internship programs for students and corporate IT/AI training for organizations from Future Optima IT Solutions, Kochi, Kerala — hands-on, project-first and industry-mentored.",
  alternates: { canonical: "/internship-corporate-training" },
};

const internshipAreas = [
  {
    title: "Business Analytics Internship",
    description:
      "Real client and partner project work — dashboards, reporting and business-facing analytics, not simulated exercises.",
  },
  {
    title: "Cybersecurity Internship",
    description:
      "Hands-on security lab work spanning practical, real-world assessment and defense fundamentals.",
  },
  {
    title: "Data Science with AI Internship",
    description:
      "Applied machine learning and data project work mentored by working industry professionals.",
  },
];

const corporateAreas = [
  {
    title: "Practical AI Tools for the Workplace",
    description:
      "Hands-on training in using AI tools for daily tasks like data analysis, reporting, drafting and workflow automation.",
  },
  {
    title: "Team Upskilling, Not Just a Workshop",
    description:
      "The same project-first, hands-on training approach we use with students — applied to a working professional audience.",
  },
  {
    title: "Delivered On-Site or at Our Campus",
    description:
      "Sessions run at your organization's premises or at our Chembumukku, Kochi campus, depending on what works for your team.",
  },
];

const faqs = [
  {
    question: "Do I need to enroll in a full course to get an internship at Future Optima?",
    answer:
      "Internships at Future Optima run as a hands-on component within specific courses — Business Analytics, Cybersecurity and Data Science with AI — giving you real client or partner project experience alongside your training, in addition to your course's standard capstone project.",
  },
  {
    question: "What does Future Optima's corporate training typically cover?",
    answer:
      "Practical, hands-on training in AI tools and workflows for day-to-day workplace use — the same project-first approach we use in our student courses, adapted for working professionals. We delivered this for Kerala State Electricity Board (KSEB) in August 2026, focused on practical AI tools for the workplace.",
  },
  {
    question: "Can corporate training be customized for our organization?",
    answer:
      "Yes — reach out with your team's size, current skill level and goals, and our team will scope a session or program around what your organization actually needs, rather than a fixed, generic curriculum.",
  },
  {
    question: "How is corporate training different from Hire From Us?",
    answer:
      "Hire From Us is for companies looking to recruit our trained student graduates. Corporate training is the opposite direction — we come in and train your existing team's skills, on AI tools and related workplace technology.",
  },
];

export default function InternshipCorporateTrainingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Internship &amp; <span className="text-gradient-amber">Corporate Training</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Two ways Future Optima extends training beyond the classroom — hands-on
              internships for students, and practical AI &amp; IT upskilling for organizations
              across Kochi and Kerala.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="internships" className="scroll-mt-20 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-600 sm:text-sm">
              <Users className="h-4 w-4" />
              For Students
            </div>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Internship Programs
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Real internship experience built directly into select courses — real client and
              partner project work, mentored by working professionals, not simulated exercises.
              Students consistently point to this hands-on internship component as one of the
              most practical parts of their training.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {internshipAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <Briefcase className="h-6 w-6 text-amber-500" />
                  <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Button asChild size="lg" className="mt-8 bg-navy-900 hover:bg-navy-800">
              <Link href="/courses">
                Explore Courses With Internships <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="corporate-training" className="scroll-mt-20 bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-600 sm:text-sm">
              <Building2 className="h-4 w-4" />
              For Organizations
            </div>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Corporate Training
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              We extend our project-first, hands-on training approach beyond student batches and
              into corporate settings — helping teams build practical comfort with AI tools and
              workplace technology. In August 2026, we delivered exactly this for the{" "}
              <Link href="/news/kseb-corporate-training-ai-tools" className="font-semibold text-amber-600 underline decoration-amber-500">
                Kerala State Electricity Board (KSEB)
              </Link>
              .
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {corporateAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <Sparkles className="h-6 w-6 text-amber-500" />
                  <h3 className="mt-4 font-heading text-base font-bold text-navy-900">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    "Corporate Training Inquiry — Future Optima"
                  )}`}
                >
                  <Mail className="mr-1 h-4 w-4" /> Enquire About Corporate Training
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${siteConfig.primaryPhone}`}>
                  <Phone className="mr-1 h-4 w-4" /> {siteConfig.primaryPhone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
