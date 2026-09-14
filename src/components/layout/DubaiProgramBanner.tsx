"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, X } from "lucide-react";
import gsap from "gsap";

const VISIBLE_MS = 5000;

export default function DubaiProgramBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    const timer = setTimeout(close, VISIBLE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  function close() {
    const el = barRef.current;
    if (!el) {
      setVisible(false);
      return;
    }
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.35,
      ease: "power1.in",
      onComplete: () => setVisible(false),
    });
  }

  if (pathname !== "/" || !visible) return null;

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="IT Infrastructure Engineer Program, Dubai announcement"
      className="relative flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-4 py-2 text-center text-white"
    >
      <Plane className="h-4 w-4 shrink-0 text-amber-400" />
      <p className="text-xs font-medium sm:text-sm">
        New: <span className="font-bold text-amber-400">IT Infrastructure Engineer Program</span>{" "}
        in Dubai — 100% Job Assurance.{" "}
        <Link
          href="/courses/it-infrastructure-engineer-program-dubai"
          className="underline underline-offset-2 hover:text-amber-400"
        >
          Learn more
        </Link>
      </p>
      <button
        type="button"
        onClick={close}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
