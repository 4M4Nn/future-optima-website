import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";
import { blogPosts } from "@/lib/data/blog";
import { courseImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Blog — AI & IT Career Guides",
  description:
    "In-depth guides on AI courses, career paths, and IT training in Kochi, Kerala from Future Optima IT Solutions — written to actually help you decide, not just rank on Google.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
              AI &amp; IT Career <span className="text-gradient-amber">Guides</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Honest, detailed guides on choosing courses, comparing career paths, and
              understanding AI &mdash; written for Kochi and Kerala&apos;s students.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={courseImages[post.coverImage]}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Badge variant="secondary" className="w-fit">
                      {post.category}
                    </Badge>
                    <h2 className="mt-3 line-clamp-2 font-heading text-base font-bold text-navy-900">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
