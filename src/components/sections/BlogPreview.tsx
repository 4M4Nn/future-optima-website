import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { blogPosts } from "@/lib/data/blog";
import { getBlogImage } from "@/lib/data/images";

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="bg-navy-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="accent-script text-2xl sm:text-3xl">From the blog</p>
              <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
                Guides on <span className="accent-highlight">AI &amp; IT careers</span>
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog">
                Read All Articles <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={getBlogImage(post.slug, post.coverImage)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <Badge variant="secondary" className="w-fit">
                    {post.category}
                  </Badge>
                  <h3 className="mt-3 line-clamp-2 font-heading text-base font-bold text-navy-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-xs text-muted-foreground">{post.readingTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
