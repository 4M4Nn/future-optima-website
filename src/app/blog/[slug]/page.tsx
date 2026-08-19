import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/motion/Reveal";
import BlogBody from "@/components/blog/BlogBody";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { getCourseBySlug } from "@/lib/data/courses";
import { courseImages } from "@/lib/data/images";
import { siteConfig } from "@/lib/data/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [courseImages[post.coverImage]],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedCourse = post.relatedCourseSlug ? getCourseBySlug(post.relatedCourseSlug) : undefined;
  const moreArticles = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={courseImages[post.coverImage]}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <Badge className="border-none bg-amber-500/15 text-amber-400">{post.category}</Badge>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-amber-500" />
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-500" />
                {post.readingTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <BlogBody blocks={post.body} />
        </Reveal>

        {post.faqs?.length ? (
          <Reveal delay={0.1}>
            <h2 className="mt-14 font-heading text-2xl font-extrabold text-navy-900">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-6">
              {post.faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        ) : null}

        {relatedCourse ? (
          <Reveal delay={0.15}>
            <div className="mt-14 rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
              <p className="text-sm text-white/60">Related Course</p>
              <h3 className="mt-1 font-heading text-xl font-bold">{relatedCourse.name}</h3>
              <p className="mt-2 text-sm text-white/70">{relatedCourse.tagline}</p>
              <Button asChild className="mt-5 bg-amber-500 text-navy-950 hover:bg-amber-400">
                <Link href={`/courses/${relatedCourse.slug}`}>
                  View Course Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ) : null}
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900">More Articles</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {moreArticles.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-xl border border-border-soft bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-sm font-bold text-navy-900 line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">{p.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
