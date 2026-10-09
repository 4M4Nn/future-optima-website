import Link from "next/link";
import { ArrowRight, Briefcase, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";
import { internshipDomains, internshipNotice, internshipsHero } from "@/lib/data/internships";

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to apply for an internship at Future Optima."
)}`;

export default function InternshipSpotlight() {
  return (
    <section id="internships" className="scroll-mt-20 bg-amber-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-semibold text-amber-700 sm:text-sm">
            <Briefcase className="h-4 w-4" />
            {internshipsHero.eyebrow}
          </div>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            Internship Opportunities in Kochi —{" "}
            <span className="accent-highlight">Every Domain Available</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {internshipNotice.text} Work on hands-on projects with industry mentors at our Kochi
            campus or live online.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {internshipDomains.map((domain, i) => (
            <Reveal key={domain.id} delay={(i % 3) * 0.05}>
              <Link
                href={`/internships#${domain.id}`}
                className="flex h-full items-center justify-between gap-3 rounded-xl border border-border-soft bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-heading text-sm font-bold text-navy-900">{domain.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-amber-500" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-navy-900 hover:bg-navy-800">
              <Link href="/internships">
                Apply for an Internship <ArrowRight className="ml-1 h-4 w-4" />
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
  );
}
