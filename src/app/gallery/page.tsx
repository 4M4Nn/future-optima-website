import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Gallery — Campus, Labs & Training Moments",
  description:
    "A look inside Future Optima IT Solutions' Chembumukku, Kochi campus — training labs, live classroom sessions and placement celebrations.",
  alternates: { canonical: "/gallery" },
};

const galleryImages = [
  { src: "/images/campus/training-lab-1.jpeg", alt: "Training lab with individual work stations", caption: "Individual work-station training lab" },
  { src: "/images/campus/classroom-session-1.jpeg", alt: "Placement team briefing students", caption: "Leadership & placement team briefing" },
  { src: "/images/campus/classroom-session-2.jpeg", alt: "Trainer leading a live session on technology adoption", caption: "Live trainer-led session" },
  { src: "/images/campus/training-lab-2.jpeg", alt: "Future Optima training facility", caption: "Training facility, Chembumukku campus" },
  { src: "/images/campus/training-lab-3.jpeg", alt: "Training lab seating", caption: "Lab seating and workstations" },
  { src: "/images/campus/training-lab-4.jpeg", alt: "Training lab wide view", caption: "Wide view of the training floor" },
  { src: "/images/campus/classroom-session-3.jpeg", alt: "Students in a training session", caption: "Batch training in progress" },
  { src: "/images/placements/notice-recent-placement.jpeg", alt: "Recent placement celebration poster", caption: "Recent placement celebration" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Life at <span className="text-gradient-amber">Future Optima</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Real moments from our Chembumukku, Kochi campus &mdash; training labs, live
              sessions and placement celebrations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div]:mb-4">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.06}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">{img.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
