"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Newspaper, X } from "lucide-react";
import gsap from "gsap";
import { homepageNewsPopup } from "@/lib/data/news";

const SESSION_KEY = `fo-news-popup-${homepageNewsPopup.slug}`;
const SHOW_AFTER_MS = 2500;
const VISIBLE_MS = 9000;

export default function NewsPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // storage unavailable — still show once for this page view
    }
    const timer = setTimeout(() => {
      setVisible(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
    }, SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!visible || !cardRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      gsap.fromTo(
        cardRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
    const timer = setTimeout(close, VISIBLE_MS);
    return () => clearTimeout(timer);
  }, [visible]);

  function close() {
    const el = cardRef.current;
    if (!el) {
      setVisible(false);
      return;
    }
    gsap.to(el, {
      x: 30,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => setVisible(false),
    });
  }

  if (!visible || pathname !== "/") return null;

  return (
    <div
      ref={cardRef}
      role="dialog"
      aria-label="Latest news"
      className="fixed right-4 top-24 z-50 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-2xl border border-border-soft bg-white shadow-2xl"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close news popup"
        className="absolute right-2 top-2 z-10 rounded-full bg-white/90 p-1 text-muted-foreground hover:text-navy-900"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex gap-3 p-3 pr-8">
        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={homepageNewsPopup.image}
            alt={homepageNewsPopup.imageAlt}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-amber-600">
            <Newspaper className="h-3.5 w-3.5" />
            {homepageNewsPopup.label}
          </p>
          <p className="mt-1 font-heading text-sm font-bold leading-snug text-navy-900">
            {homepageNewsPopup.title}
          </p>
          <Link
            href={`/news/${homepageNewsPopup.slug}`}
            onClick={close}
            className="mt-2 inline-block text-xs font-semibold text-amber-600 underline underline-offset-2"
          >
            Read the news
          </Link>
        </div>
      </div>
      <div className="h-1 w-full bg-amber-100">
        <div className="news-popup-timer h-full bg-amber-500" />
      </div>
    </div>
  );
}
