import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";
import { blogPosts } from "@/lib/data/blog";
import {
  internshipAudience,
  internshipDomains,
  internshipFaqs,
  internshipSteps,
  internshipsAnswer,
  internshipsHero,
  internshipsMeta,
} from "@/lib/data/internships";

export const metadata: Metadata = {
  title: internshipsMeta.title,
  description: internshipsMeta.description,
  keywords: internshipsMeta.keywords,
  alternates: { canonical: "/internships" },
  openGraph: {
    title: internshipsMeta.title,
    description: internshipsMeta.description,
    url: `${siteConfig.url}/internships`,
    type: "website",
  },
};

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to apply for an internship at Future Optima."
)}`;

export default function InternshipsPage() {
  const pageUrl = `${siteConfig.url}/internships`;
  const guides = blogPosts.filter((post) => post.relatedPage?.href === "/internships").slice(0, 6);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Internship domains at Future Optima, Kochi",
    itemListElement: internshipDomains.map((domain, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: domain.title,
      description: domain.description,
      url: `${pageUrl}#${domain.id}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: internshipFaqs.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "Internships", item: pageUrl },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
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
              <Briefcase className="h-4 w-4" />
              {internshipsHero.eyebrow}
            </div>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              {internshipsHero.heading}
              <span className="mt-2 block text-2xl text-amber-400 sm:text-3xl">
                {internshipsHero.highlight}
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">{internshipsHero.intro}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                <Link href="/contact">
                  Apply for an Internship <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Us
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
              {internshipsAnswer.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {internshipsAnswer.text}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Internship Domains Available in Kochi
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every domain is open for applications. Choose the area you want to build your career
              in.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internshipDomains.map((domain, i) => (
              <Reveal key={domain.id} delay={(i % 3) * 0.06}>
                <article
                  id={domain.id}
                  className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
                >
                  <Sparkles className="h-6 w-6 text-amber-500" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">
                    {domain.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {domain.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {domain.work.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-navy-900">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/courses/${domain.courseSlug}`}
                    className="mt-5 inline-flex items-center gap-1 pt-1 text-sm font-semibold text-amber-600 underline underline-offset-4"
                  >
                    Related course <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              {internshipAudience.heading}
            </h2>
            <ul className="mt-5 space-y-3">
              {internshipAudience.items.map((item) => (
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              How to Apply for an Internship
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {internshipSteps.map((step, i) => (
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
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4" /> Apply on WhatsApp
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
              Internships in Kochi — Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-6">
              {internshipFaqs.map((faq, i) => (
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

      {guides.length > 0 ? (
        <section className="bg-navy-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold text-navy-900">
                Internship Guides
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/blog/${guide.slug}`}
                  className="rounded-xl border border-border-soft bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading text-sm font-bold text-navy-900">{guide.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
                    {guide.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
