"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PythonIcon, DjangoIcon, VSCodeIcon, ClaudeIcon } from "@/components/icons/TechIcons";

const icons = [
  {
    Icon: PythonIcon,
    label: "Python",
    className: "right-[8%] top-[9%] lg:right-[24%] lg:top-[12%]",
  },
  {
    Icon: DjangoIcon,
    label: "Django",
    className: "left-[6%] top-[36%] lg:left-auto lg:right-[6%] lg:top-[32%]",
  },
  {
    Icon: VSCodeIcon,
    label: "VS Code",
    className: "right-[8%] top-[54%] lg:right-[28%] lg:top-[52%]",
  },
  {
    Icon: ClaudeIcon,
    label: "Claude AI",
    className: "left-[6%] top-[70%] lg:left-auto lg:right-[40%] lg:top-[20%]",
  },
];

export default function FloatingTechIcons() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const nodes = wrap.querySelectorAll<HTMLElement>(".floating-tech-icon");
    const ctx = gsap.context(() => {
      nodes.forEach((node, i) => {
        gsap.to(node, {
          y: i % 2 === 0 ? -14 : 14,
          x: i % 2 === 0 ? 6 : -6,
          rotation: i % 2 === 0 ? 2 : -2,
          duration: 2.6 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {icons.map(({ Icon, label, className }, i) => (
        <div
          key={i}
          className={`floating-tech-icon absolute flex items-center gap-1.5 rounded-full bg-white/10 py-1 pl-1 pr-3 opacity-80 shadow-lg backdrop-blur-sm sm:opacity-100 ${className}`}
        >
          <Icon className="h-7 w-7 shrink-0 drop-shadow lg:h-9 lg:w-9" />
          <span className="whitespace-nowrap text-xs font-semibold text-white">{label}</span>
        </div>
      ))}
    </div>
  );
}
