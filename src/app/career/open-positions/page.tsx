import type { Metadata } from "next";
import { Briefcase, Clock, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { jobOpenings } from "@/lib/data/careers";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Open Positions — Current Job Openings",
  description:
    "Current job openings at Future Optima IT Solutions, Kochi — including our Cloud Computing & DevOps Tutor role. See requirements and apply directly.",
  alternates: { canonical: "/career/open-positions" },
};

export default function OpenPositionsPage() {
  const jobPostingSchema = jobOpenings.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: [...job.responsibilities, `Required skills: ${job.skills.join(", ")}`].join(" "),
    datePosted: job.postedAt,
    employmentType: "PART_TIME_OR_FULL_TIME",
    experienceRequirements: job.experience,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line1,
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        postalCode: "682021",
        addressCountry: "IN",
      },
    },
  }));

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Open <span className="text-gradient-amber">Positions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Current roles we&apos;re actively hiring for at our Chembumukku, Kochi campus.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {jobOpenings.length === 0 ? (
            <Reveal>
              <p className="rounded-2xl border border-border-soft bg-white p-8 text-center text-sm text-muted-foreground">
                No open positions right now — check back soon, or write to us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-amber-600 underline">
                  {siteConfig.email}
                </a>{" "}
                and we&apos;ll keep your CV on file.
              </p>
            </Reveal>
          ) : (
            <div className="space-y-6">
              {jobOpenings.map((job, i) => (
                <Reveal key={job.slug} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <Badge className="border-none bg-amber-500/15 text-amber-600">{job.type}</Badge>
                        <h2 className="mt-3 font-heading text-xl font-extrabold text-navy-900 sm:text-2xl">
                          {job.title}
                        </h2>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-amber-500" /> {job.experience} experience
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-amber-500" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-amber-500" />
                        Posted{" "}
                        {new Date(job.postedAt).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="font-heading text-sm font-bold text-navy-900">
                          Skills Required
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-navy-800">
                          {job.skills.map((skill) => (
                            <li key={skill} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-navy-900">
                          Responsibilities
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-navy-800">
                          {job.responsibilities.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button asChild size="lg" className="mt-6 bg-navy-900 hover:bg-navy-800">
                      <a
                        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                          `Application: ${job.title} — Future Optima`
                        )}`}
                      >
                        <Mail className="mr-1 h-4 w-4" /> Apply for This Role
                      </a>
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
