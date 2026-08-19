import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { generalFaqs } from "@/lib/data/faqs";

export default function FAQPreview() {
  const shown = generalFaqs.slice(0, 5);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="accent-script text-2xl sm:text-3xl">Common questions</p>
            <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Frequently Asked <span className="accent-highlight">Questions</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {shown.map((faq, i) => (
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

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/faq">
              View All FAQs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
