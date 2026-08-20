"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ClaudeIcon, DjangoIcon, PythonIcon, VSCodeIcon } from "@/components/icons/TechIcons";

const badges = [
  {
    Icon: ClaudeIcon,
    label: "Claude AI",
    className: "left-[2%] top-[4%] lg:-left-[6%] lg:top-[6%]",
    hideOnMobile: false,
  },
  {
    Icon: PythonIcon,
    label: "Python",
    className: "right-[0%] top-[0%] lg:-right-[8%] lg:top-[2%]",
    hideOnMobile: false,
  },
  {
    Icon: DjangoIcon,
    label: "Django",
    className: "-right-[2%] top-[42%] lg:-right-[14%] lg:top-[40%]",
    hideOnMobile: true,
  },
  {
    Icon: VSCodeIcon,
    label: "VS Code",
    className: "left-[0%] bottom-[6%] lg:-left-[10%] lg:bottom-[10%]",
    hideOnMobile: true,
  },
];

export default function HeroGirlVisual({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-girl-figure", {
        y: -10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const nodes = wrap.querySelectorAll<HTMLElement>(".hero-girl-badge");
      nodes.forEach((node, i) => {
        gsap.to(node, {
          y: i % 2 === 0 ? -12 : 12,
          duration: 2.6 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.25,
        });
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <div className="relative mx-auto aspect-[1186/1327] w-[240px] sm:w-[280px] lg:w-[400px] xl:w-[440px]">
        <div
          className="absolute inset-x-[6%] bottom-0 top-[12%] -z-10 rounded-full bg-amber-500/20 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(245,166,35,0.28), rgba(245,166,35,0) 72%)" }}
        />

        <div className="hero-girl-figure relative h-full w-full">
          <Image
            src="/images/hero/hero-girl.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 440px, (min-width: 1024px) 400px, (min-width: 640px) 280px, 240px"
            className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
          />
        </div>

        {badges.map(({ Icon, label, className: pos, hideOnMobile }) => (
          <div
            key={label}
            className={`hero-girl-badge absolute flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 py-1 pl-1 pr-3 shadow-lg backdrop-blur-sm ${pos} ${
              hideOnMobile ? "hidden sm:flex" : "flex"
            }`}
          >
            <Icon className="h-6 w-6 shrink-0 drop-shadow lg:h-8 lg:w-8" />
            <span className="whitespace-nowrap text-[10px] font-semibold text-white lg:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
