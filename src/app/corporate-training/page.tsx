import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Mail, Phone, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";
import {
  corporateAnswer,
  corporateChecklist,
  corporateFaqs,
  corporateHero,
  corporateProcess,
  corporatePrograms,
  corporateProof,
  corporateTrainingMeta,
} from "@/lib/data/corporate-training";

export const metadata: Metadata = {
  title: corporateTrainingMeta.title,
  description: corporateTrainingMeta.description,
  keywords: corporateTrainingMeta.keywords,
  alternates: { canonical: "/corporate-training" },
  openGraph: {
    title: corporateTrainingMeta.title,
    description: corporateTrainingMeta.description,
    url: `${siteConfig.url}/corporate-training`,
    type: "website",
  },
};

export default function CorporateTrainingPage() {
  const pageUrl = `${siteConfig.url}/corporate-training`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: corporateHero.heading,
    serviceType: "Corporate Training",
    description: corporateTrainingMeta.description,
    url: pageUrl,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: [
      { "@type": "City", name: "Kochi" },
      { "@type": "State", name: "Kerala" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate training programs",
      itemListElement: corporatePrograms.map((program) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: program.title,
          description: program.summary,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: corporateFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Corporate Training", item: pageUrl },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-400 sm:text-sm">
              <Building2 className="h-4 w-4" />
              {corporateHero.eyebrow}
            </div>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              {corporateHero.heading}
              <span className="mt-2 block text-2xl text-amber-400 sm:text-3xl">
                {corporateHero.highlight}
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">{corporateHero.intro}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    "Corporate Training Inquiry — Future Optima"
                  )}`}
                >
                  <Mail className="mr-1 h-4 w-4" /> Enquire About Corporate Training
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
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
              {corporateAnswer.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {corporateAnswer.text}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Corporate Training Programs in Kochi &amp; Kerala
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {corporatePrograms.map((program, i) => (
              <Reveal key={program.id} delay={i * 0.06}>
                <article
                  id={program.id}
                  className="h-full scroll-mt-24 rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
                >
                  <Sparkles className="h-6 w-6 text-amber-500" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {program.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {program.topics.map((topic) => (
                      <li key={topic} className="flex gap-2 text-sm text-navy-900">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex gap-2 text-xs text-muted-foreground">
                    <Users className="h-4 w-4 shrink-0" />
                    <span>{program.audience}</span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              How Our Corporate Training Works
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corporateProcess.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-base font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
              {corporateProof.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {corporateProof.text}
            </p>
            <Link
              href={corporateProof.href}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-400 underline underline-offset-4"
            >
              {corporateProof.linkLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              {corporateChecklist.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {corporateChecklist.intro}
            </p>
            <ul className="mt-5 space-y-3">
              {corporateChecklist.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-navy-900 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Corporate Training in Kochi — Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-6">
              {corporateFaqs.map((faq, i) => (
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
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-navy-900 hover:bg-navy-800">
                <Link href="/contact">
                  Talk to Our Team <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/internships">Internship Programs</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
