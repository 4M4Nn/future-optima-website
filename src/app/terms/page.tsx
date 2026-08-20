import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${siteConfig.name} courses and website usage.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy-800">
        <p>
          These terms govern your use of {siteConfig.domain} and enrollment in courses offered
          by {siteConfig.name}, located at {siteConfig.address.full}.
        </p>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Course Enrollment</h2>
          <p className="mt-2">
            Enrollment in any course is confirmed only after admissions counseling and agreed
            fee payment terms, including our pay-after-placement structure (up to ₹15,000 of the
            course fee payable only after placement) where applicable. Specific fee amounts,
            batch schedules, and mode (online/offline) are confirmed directly with our
            admissions team prior to enrollment.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Placement Support</h2>
          <p className="mt-2">
            Future Optima provides placement support including resume building, mock
            interviews, and access to our hiring partner network. While we work actively toward
            placing every eligible graduate, placement outcomes also depend on individual
            performance, interview readiness, and market conditions, and are not a guaranteed
            entitlement independent of course completion and eligibility.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Certification</h2>
          <p className="mt-2">
            Future Optima&apos;s own certificate is issued upon successful completion of the
            required course project. The separate NACTET certification follows its own external
            application process and timeline, managed with support from our team.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Website Use</h2>
          <p className="mt-2">
            Content on this website, including course curricula, images and branding, is the
            property of {siteConfig.name} and may not be reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Contact</h2>
          <p className="mt-2">
            For questions about these terms, contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-amber-600 underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
