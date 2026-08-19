"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface SplitWordsProps {
  text: string;
  className?: string;
  /** Applied to each leaf glyph span, not the wrapper — required for background-clip:text gradients to render. */
  wordClassName?: string;
  delay?: number;
}

export default function SplitWords({ text, className, wordClassName, delay = 0 }: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inners = el.querySelectorAll<HTMLElement>(".split-word-inner");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(inners, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { opacity: 0, y: "100%" },
        {
          opacity: 1,
          y: "0%",
          duration: 0.7,
          stagger: 0.06,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="split-word">
            <span className={cn("split-word-inner", wordClassName)}>{word}</span>
          </span>
          {i < words.length - 1 ? <span className="split-space"> </span> : null}
        </span>
      ))}
    </span>
  );
}
