import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/motion/Reveal";
import { generalFaqs } from "@/lib/data/faqs";
import { courses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about Future Optima IT Solutions' courses, fees, placement support, NACTET certification and admissions in Kochi, Kerala.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const allFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allFaqSchema) }}
      />
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Frequently Asked <span className="text-gradient-amber">Questions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              General admissions, fees and placement questions below. Course-specific questions
              are answered on each course page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Accordion type="single" collapsible>
              {generalFaqs.map((faq, i) => (
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

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900">
              Course-Specific Questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {courses.map((course) => (
              <a
                key={course.slug}
                href={`/courses/${course.slug}#faq`}
                className="rounded-lg border border-border-soft bg-white px-4 py-3 text-sm font-medium text-navy-800 transition-colors hover:border-amber-400"
              >
                {course.shortName} FAQs
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
