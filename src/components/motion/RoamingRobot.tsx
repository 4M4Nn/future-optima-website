"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RoamingRobot({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  const armRef = useRef<SVGGElement>(null);
  const eyeLeftRef = useRef<SVGCircleElement>(null);
  const eyeRightRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Roam back and forth + gentle bob, looping indefinitely.
      gsap
        .timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } })
        .to(wrapRef.current, { x: 36, y: -14, rotation: 3, duration: 3.2 })
        .to(wrapRef.current, { x: -18, y: 10, rotation: -2, duration: 2.6 }, ">-0.2")
        .to(wrapRef.current, { x: 0, y: 0, rotation: 0, duration: 2.4 }, ">-0.2");

      // Idle bob for the body (independent, faster loop).
      gsap.to(bodyRef.current, {
        y: -6,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Waving arm.
      gsap.to(armRef.current, {
        rotation: -25,
        transformOrigin: "top center",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        repeatDelay: 2.2,
        ease: "sine.inOut",
      });

      // Blink.
      gsap.to([eyeLeftRef.current, eyeRightRef.current], {
        scaleY: 0.1,
        transformOrigin: "center",
        duration: 0.08,
        repeat: -1,
        repeatDelay: 3.4,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={className}
      aria-hidden="true"
    >
      <svg
        width="72"
        height="80"
        viewBox="0 0 72 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* antenna */}
        <line x1="36" y1="6" x2="36" y2="16" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="36" cy="5" r="4" fill="#F5A623" />

        <g ref={bodyRef}>
          {/* head */}
          <rect x="14" y="16" width="44" height="34" rx="14" fill="#FFFFFF" stroke="#0B1E3F" strokeWidth="2.5" />
          {/* eyes */}
          <circle ref={eyeLeftRef} cx="28" cy="33" r="4.5" fill="#0B1E3F" />
          <circle ref={eyeRightRef} cx="44" cy="33" r="4.5" fill="#0B1E3F" />
          {/* smile */}
          <path d="M27 41 Q36 47 45 41" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* ear dots */}
          <circle cx="12" cy="33" r="3.5" fill="#0B1E3F" />
          <circle cx="60" cy="33" r="3.5" fill="#0B1E3F" />

          {/* body */}
          <rect x="20" y="52" width="32" height="24" rx="10" fill="#0B1E3F" />
          <rect x="30" y="60" width="12" height="8" rx="3" fill="#F5A623" />

          {/* waving arm */}
          <g ref={armRef}>
            <rect x="50" y="54" width="7" height="18" rx="3.5" fill="#0B1E3F" />
          </g>
          {/* other arm */}
          <rect x="15" y="54" width="7" height="18" rx="3.5" fill="#0B1E3F" />
        </g>
      </svg>
    </div>
  );
}
