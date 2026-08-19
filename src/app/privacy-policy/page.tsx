import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — how we collect, use and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy-800">
        <p>
          {siteConfig.name} (&ldquo;Future Optima&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
          respects your privacy. This policy explains what information we collect through{" "}
          {siteConfig.domain} and how we use it.
        </p>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Information We Collect</h2>
          <p className="mt-2">
            When you submit an enquiry, contact form, or the Virtual Office course-finder tool,
            we may collect your name, phone number, email address, and any message or course
            preferences you share. We do not require account creation to browse the website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">How We Use Your Information</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>To respond to course enquiries and admissions questions</li>
            <li>To share relevant course, batch and placement updates you&apos;ve asked about</li>
            <li>To improve our website and course offerings</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Information Sharing</h2>
          <p className="mt-2">
            We do not sell your personal information. Enquiry details submitted via our contact
            form or WhatsApp are used solely by our admissions and placement teams to respond to
            you, and with hiring partners only when you are actively part of our placement
            process.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Cookies &amp; Analytics</h2>
          <p className="mt-2">
            Our website may use standard analytics tools to understand site usage and improve
            content. These do not collect personally identifiable information beyond what you
            voluntarily submit through our forms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-navy-900">Contact Us</h2>
          <p className="mt-2">
            For any privacy-related questions, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-amber-600 underline">
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.primaryPhone}.
          </p>
        </section>
      </div>
    </div>
  );
}
