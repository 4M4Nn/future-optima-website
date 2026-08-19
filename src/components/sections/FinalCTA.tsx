import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";

export default function FinalCTA() {
  return (
    <section className="bg-navy-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Your career shift starts with{" "}
            <span className="text-gradient-amber">one conversation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Talk to our admissions counselors about the right course, batch timing, and how the
            25% fee-after-placement plan works for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-amber-500 text-navy-950 hover:bg-amber-400">
              <Link href="/contact">
                Book a Free Counseling Call <ArrowRight className="ml-1 h-4 w-4" />
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
