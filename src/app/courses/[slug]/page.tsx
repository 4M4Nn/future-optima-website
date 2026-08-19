import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  GraduationCap,
  Layers,
  Phone,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/motion/Reveal";
import WhatsAppQuickLink from "@/components/layout/WhatsAppQuickLink";
import { courses, getCourseBySlug } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";
import { siteConfig } from "@/lib/data/site";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: course.keywords,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      images: [courseImages[course.slug]],
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const related = courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, 3);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode,
      courseWorkload: course.duration,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={courseImages[course.slug]}
            alt={course.name}
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-none bg-amber-500/15 text-amber-400">
                {course.category}
              </Badge>
              {course.badge ? (
                <Badge className="border-none bg-amber-500 text-navy-950">{course.badge}</Badge>
              ) : null}
              <Badge className="border-none bg-white/10 text-white">
                <ShieldCheck className="mr-1 h-3.5 w-3.5 text-amber-400" />
                100% Placement Support
              </Badge>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
              {course.name}
            </h1>
            <p className="mt-4 max-w-2xl text-white/70 sm:text-lg">{course.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" /> {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber-500" /> {course.mode}
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-amber-500" /> {course.level}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                <Link href="/contact">
                  Enroll / Get Fee Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`tel:${siteConfig.primaryPhone}`}>
                  <Phone className="mr-1 h-4 w-4" /> {siteConfig.primaryPhone}
                </a>
              </Button>
              <WhatsAppQuickLink
                message={`Hi Future Optima! I'm interested in the ${course.shortName} course — can you share more details?`}
                className="h-11 gap-2 px-6 text-sm font-semibold"
                iconClassName="h-4 w-4"
                label="Chat on WhatsApp"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Course Overview
          </h2>
          <div className="mt-4 space-y-4 text-navy-800">
            {course.overview.map((para) => (
              <p key={para.slice(0, 30)} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {course.highlights.map((point) => (
              <div key={point} className="flex items-start gap-2 rounded-xl bg-navy-50 p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <span className="text-sm text-navy-800">{point}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="mt-14 flex items-center gap-2 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            <Layers className="h-6 w-6 text-amber-500" /> Curriculum
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {course.modules.map((module, i) => (
              <AccordionItem key={module.title} value={`module-${i}`}>
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy-900">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-navy-900">
                <Wrench className="h-5 w-5 text-amber-500" /> Tools &amp; Technologies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Career Roles</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {course.careerRoles.map((role) => (
                  <Badge key={role} variant="secondary">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 rounded-2xl border border-border-soft bg-navy-50 p-6">
            <h3 className="font-heading text-lg font-bold text-navy-900">Eligibility</h3>
            <p className="mt-2 text-sm text-navy-800">{course.eligibility}</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <h2 className="mt-14 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {course.faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
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
      </section>

      {related.length > 0 ? (
        <section className="bg-navy-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold text-navy-900">
                Related Courses
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/courses/${r.slug}`}
                  className="rounded-xl border border-border-soft bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading text-sm font-bold text-navy-900">{r.shortName}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
