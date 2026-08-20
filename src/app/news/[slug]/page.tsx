import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import BlogBody from "@/components/blog/BlogBody";
import { newsPosts, getNewsPostBySlug } from "@/lib/data/news";
import { siteConfig } from "@/lib/data/site";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      images: [post.coverImage],
    },
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) notFound();

  const moreNews = newsPosts.filter((p) => p.slug !== post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    image: [`${siteConfig.url}${post.coverImage}`],
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "News", item: `${siteConfig.url}/news` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/news/${post.slug}` },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image src={post.coverImage} alt={post.coverAlt} fill priority className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-1.5 text-sm text-white/60">
              <CalendarDays className="h-4 w-4 text-amber-500" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="relative mb-10 aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={post.coverImage} alt={post.coverAlt} fill className="object-cover" />
          </div>
          <BlogBody blocks={post.body} />
        </Reveal>
      </section>

      {moreNews.length > 0 ? (
        <section className="bg-navy-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold text-navy-900">More News</h2>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {moreNews.map((p) => (
                <Link
                  key={p.slug}
                  href={`/news/${p.slug}`}
                  className="rounded-xl border border-border-soft bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading text-sm font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {new Date(p.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
