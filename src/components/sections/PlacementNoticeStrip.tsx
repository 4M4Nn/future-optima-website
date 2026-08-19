"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { placementPhotos } from "@/lib/data/placement-photos";

const ROTATE_MS = 3800;

export default function PlacementNoticeStrip() {
  const [index, setIndex] = useState(0);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = setInterval(() => {
      const el = photoRef.current;
      if (!el || reduced) {
        setIndex((i) => (i + 1) % placementPhotos.length);
        return;
      }
      gsap.to(el, {
        opacity: 0,
        y: -8,
        duration: 0.35,
        ease: "power1.in",
        onComplete: () => {
          setIndex((i) => (i + 1) % placementPhotos.length);
          gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" });
        },
      });
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  const photo = placementPhotos[index];

  return (
    <section className="bg-amber-100 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <div
              ref={photoRef}
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-400"
            >
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-navy-900 sm:text-base">
              <TrendingUp className="mr-1 inline h-4 w-4 text-amber-500" />
              <span className="font-bold">Recent Placement Update</span> &mdash; new Future
              Optima graduates from Kochi are getting placed every week, with starting salaries
              averaging <span className="accent-highlight font-bold">6.5 LPA</span>.
            </p>
          </div>
          <Button asChild size="sm" variant="outline" className="shrink-0">
            <Link href="/placements">
              See All Placements <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
