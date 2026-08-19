import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { placementPhotos } from "@/lib/data/placement-photos";

export default function PlacementWall() {
  const shown = placementPhotos.slice(0, 12);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="accent-script text-2xl sm:text-3xl">Proof, not promises</p>
            <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Real <span className="accent-highlight">Placement Wall</span> — Kochi&apos;s
              students, real companies
            </h2>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              Every photo below is an actual Future Optima IT Solutions placement
              announcement — not stock imagery.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {shown.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 6) * 0.05}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border-soft shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/placements">
                View All Placement Records <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
