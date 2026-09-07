"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { newsPosts } from "@/lib/data/news";

const ROTATE_MS = 5000;

export default function LatestNewsLoop() {
  const latest = [...newsPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);

  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (latest.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = setInterval(() => {
      const el = cardRef.current;
      if (!el || reduced) {
        setIndex((i) => (i + 1) % latest.length);
        return;
      }
      gsap.to(el, {
        opacity: 0,
        y: -10,
        duration: 0.35,
        ease: "power1.in",
        onComplete: () => {
          setIndex((i) => (i + 1) % latest.length);
          gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" });
        },
      });
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, [latest.length]);

  if (latest.length === 0) return null;

  const post = latest[index];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="accent-script text-2xl sm:text-3xl">Stay in the loop</p>
              <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
                Latest <span className="accent-highlight">News</span>
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/news">
                See All News <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={cardRef}
            className="mt-10 overflow-hidden rounded-2xl border border-border-soft bg-navy-50 shadow-sm sm:grid sm:grid-cols-[minmax(0,320px)_1fr]"
          >
            <Link href={`/news/${post.slug}`} className="relative block aspect-[16/10] sm:aspect-auto sm:h-full">
              <Image
                key={post.coverImage}
                src={post.coverImage}
                alt={post.coverAlt}
                fill
                className="object-cover"
              />
            </Link>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span className="flex w-fit items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600">
                <Newspaper className="h-3.5 w-3.5" />
                Latest Update
              </span>
              <span className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <Link href={`/news/${post.slug}`}>
                <h3 className="mt-2 font-heading text-lg font-bold text-navy-900 hover:text-amber-600 sm:text-xl">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground sm:text-base">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-500"
                >
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                {latest.length > 1 ? (
                  <div className="ml-auto flex gap-1.5">
                    {latest.map((p, i) => (
                      <button
                        key={p.slug}
                        type="button"
                        aria-label={`Show news item ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === index ? "w-6 bg-amber-500" : "w-1.5 bg-navy-900/15"
                        }`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
