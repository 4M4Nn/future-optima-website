import type { Metadata } from "next";
import { ExternalLink, Star } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { testimonials } from "@/lib/data/placements";
import { googleRating, googleReviews } from "@/lib/data/reviews";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Testimonials — Student & Google Reviews",
  description: `Read real student testimonials and ${googleRating.count}+ Google reviews (${googleRating.value}-star rated) for Future Optima IT Solutions, Kochi's AI & IT training institute.`,
  alternates: { canonical: "/testimonials" },
};

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.name} ${siteConfig.address.full}`
)}`;

export default function TestimonialsPage() {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleRating.value,
      reviewCount: googleRating.count,
      bestRating: 5,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              What People Say About{" "}
              <span className="text-gradient-amber">Future Optima</span>
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-white/80">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-lg font-bold">{googleRating.value.toFixed(1)}</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 underline decoration-amber-500 hover:text-white"
              >
                {googleRating.count} Google reviews <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="accent-script text-2xl sm:text-3xl">Google reviews</p>
            <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Straight From Our{" "}
              <span className="accent-highlight">Google Business Profile</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {googleReviews.map((review, i) => (
              <Reveal key={review.name} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-800">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-heading text-sm font-bold text-navy-900">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="accent-script text-2xl sm:text-3xl">Student voices</p>
            <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Real students. Real <span className="accent-highlight">placements</span>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy-800">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-5 font-heading text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
