import { InstagramIcon } from "@/components/icons/SocialIcons";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data/site";

export default function InstagramCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-12 text-center text-white sm:px-12">
            <div className="rounded-full bg-white/10 p-3">
              <InstagramIcon className="h-6 w-6 text-amber-500" />
            </div>
            <h2 className="max-w-xl font-heading text-2xl font-extrabold sm:text-3xl">
              Batch moments, placement updates &amp; announcements &mdash; posted first on
              Instagram
            </h2>
            <p className="max-w-lg text-sm text-white/70">
              Follow along for the latest placement news, live class highlights, scholarship
              announcements and campus updates, published frequently by our team.
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
            >
              <InstagramIcon className="h-4 w-4" />
              Follow @futureoptimaitsolutions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
