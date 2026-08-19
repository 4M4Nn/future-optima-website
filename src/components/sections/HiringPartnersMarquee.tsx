import Reveal from "@/components/motion/Reveal";
import { hiringPartners } from "@/lib/data/site";

export default function HiringPartnersMarquee() {
  const doubled = [...hiringPartners, ...hiringPartners];

  return (
    <section className="border-y border-border-soft bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Trusted by <span className="accent-highlight">200+ hiring partners</span> across
            Kerala &amp; beyond
          </p>
        </Reveal>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-4 px-4">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex min-w-52 flex-col justify-center rounded-xl border border-border-soft bg-navy-50 px-5 py-4"
            >
              <span className="font-heading text-sm font-bold text-navy-900">
                {partner.name}
              </span>
              <span className="text-xs text-muted-foreground">{partner.type}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
