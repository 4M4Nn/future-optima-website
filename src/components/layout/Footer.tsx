import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";
import { footerNav } from "@/lib/data/nav";
import { siteConfig } from "@/lib/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="mb-4 inline-block rounded-2xl bg-white px-4 py-3">
            <Image
              src="/images/brand/logo.png"
              alt="Future Optima IT Solutions Pvt Ltd"
              width={160}
              height={88}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/60">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-500">
            Courses
          </h3>
          <ul className="space-y-2.5 text-sm">
            {footerNav.courses.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-500">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-500">
            Reach Us
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <span>
                {siteConfig.address.full}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.address.geo.lat},${siteConfig.address.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1 text-xs font-medium text-amber-400 hover:text-amber-300 hover:underline"
                >
                  View on Google Maps <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-amber-500" />
              <a href={`tel:${siteConfig.primaryPhone}`} className="hover:text-white">
                {siteConfig.phones.join(" / ")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-amber-500" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  "Hi Future Optima! I'd like to know more about your IT & AI courses."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
              >
                <WhatsappIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
