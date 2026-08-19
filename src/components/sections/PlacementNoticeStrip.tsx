import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { placementRecords } from "@/lib/data/placements";

export default function PlacementNoticeStrip() {
  const latest = placementRecords[0];

  return (
    <section className="bg-amber-100 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-400">
                <Image
                  src="/images/placements/notice-recent-placement.jpeg"
                  alt={`${latest.name}, recently placed at ${latest.company}`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-navy-900 sm:text-base">
                <TrendingUp className="mr-1 inline h-4 w-4 text-amber-500" />
                <span className="font-bold">Recent Placement:</span> {latest.name} placed as{" "}
                <span className="font-semibold">{latest.role}</span> at {latest.company} &mdash;
                starting salaries averaging{" "}
                <span className="accent-highlight font-bold">6.5 LPA</span>
              </p>
            </div>
            <Button asChild size="sm" variant="outline" className="shrink-0">
              <Link href="/placements">
                See All Placements <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
