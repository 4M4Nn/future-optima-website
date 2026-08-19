"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PointingGirl({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<SVGGElement>(null);
  const bodyRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(bodyRef.current, {
        y: -5,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(armRef.current, {
        rotation: 8,
        transformOrigin: "top right",
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <svg width="64" height="84" viewBox="0 0 64 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g ref={bodyRef}>
          {/* ponytail */}
          <path d="M20 20c-6 2-9 9-6 16l6-2c-2-5-1-9 3-11Z" fill="#0B1E3F" />
          {/* head */}
          <circle cx="30" cy="20" r="12" fill="#F8BB52" />
          {/* hair */}
          <path d="M18 18a12 12 0 0 1 22-7c-2 5-8 6-13 5-4-1-7 0-9 2Z" fill="#0B1E3F" />
          {/* face */}
          <circle cx="26" cy="21" r="1.6" fill="#0B1E3F" />
          <circle cx="34" cy="21" r="1.6" fill="#0B1E3F" />
          <path d="M25 26q5 4 10 0" stroke="#0B1E3F" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* body / dress */}
          <path d="M18 36c0-5 5-8 12-8s12 3 12 8l3 26c0 3-3 5-6 5H21c-3 0-6-2-6-5Z" fill="#F5A623" />

          {/* pointing arm */}
          <g ref={armRef}>
            <path d="M40 34c6 2 14 6 20 12" stroke="#F8BB52" strokeWidth="7" strokeLinecap="round" />
            <circle cx="61" cy="47" r="4.5" fill="#F8BB52" />
          </g>

          {/* other arm */}
          <path d="M20 36c-4 3-6 8-5 14" stroke="#F8BB52" strokeWidth="7" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
