import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Counseling Call",
  description:
    "Get in touch with Future Optima IT Solutions, Kochi — call, WhatsApp, or send an enquiry to talk to our admissions counselors about courses, fees and batches.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              Talk to Our <span className="text-gradient-amber">Counselors</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Questions about a course, fees, or batch timing? Reach out below — we typically
              respond within a few hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-xl font-bold text-navy-900">Send an Enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll open WhatsApp with your details pre-filled so you can send it instantly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full space-y-5 rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
              <h2 className="font-heading text-xl font-bold">Reach Us Directly</h2>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <p className="text-sm text-white/80">{siteConfig.address.full}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <div className="text-sm text-white/80">
                  {siteConfig.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="block hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/80 hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <p className="text-sm text-white/80">Mon &ndash; Sat, 9:30 AM &ndash; 6:30 PM</p>
              </div>

              <div className="overflow-hidden rounded-xl">
                <iframe
                  title="Future Optima IT Solutions location map"
                  src={`https://www.google.com/maps?q=${siteConfig.address.mapsQuery}&output=embed`}
                  className="h-52 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
