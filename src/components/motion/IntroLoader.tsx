"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const SESSION_KEY = "fo-intro-played";

export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Client-only gate: whether the intro has already played this session is
    // unknowable during SSR/first paint, so this genuinely needs an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  useEffect(() => {
    if (!visible) return;
    const container = containerRef.current;
    const bar = barRef.current;
    if (!container || !bar) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setVisible(false);
      },
    });

    tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease: "power2.inOut", transformOrigin: "left" })
      .to(container, { opacity: 0, duration: 0.5, ease: "power1.out" }, "+=0.2");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [visible]);

  const skip = () => {
    document.body.style.overflow = "";
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-navy-950"
    >
      <div className="rounded-3xl bg-white px-8 py-6 shadow-2xl">
        <Image
          src="/images/brand/logo.png"
          alt="Future Optima IT Solutions"
          width={220}
          height={120}
          priority
          className="h-auto w-40 sm:w-48"
        />
      </div>
      <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
        <div ref={barRef} className="h-full w-full bg-amber-500" />
      </div>
      <button
        type="button"
        onClick={skip}
        className="absolute bottom-8 right-8 text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
      >
        Skip intro
      </button>
    </div>
  );
}
