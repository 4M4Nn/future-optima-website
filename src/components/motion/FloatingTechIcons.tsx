"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PythonIcon, DjangoIcon, VSCodeIcon, AIToolIcon } from "@/components/icons/TechIcons";

const icons = [
  { Icon: PythonIcon, className: "right-[22%] top-[12%] h-10 w-10" },
  { Icon: DjangoIcon, className: "right-[8%] top-[32%] h-9 w-9" },
  { Icon: VSCodeIcon, className: "right-[28%] top-[52%] h-10 w-10" },
  { Icon: AIToolIcon, className: "right-[10%] top-[68%] h-8 w-8" },
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
          rotation: i % 2 === 0 ? 6 : -6,
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
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      {icons.map(({ Icon, className }, i) => (
        <div
          key={i}
          className={`floating-tech-icon absolute drop-shadow-lg ${className}`}
        >
          <Icon className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
