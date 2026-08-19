"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GraduationCap, X } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "fo-demo-notification-shown";
const SHOW_AFTER_MS = 20000;

export default function DemoClassNotification() {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, SHOW_AFTER_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible || !cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [visible]);

  function close() {
    const el = cardRef.current;
    if (!el) {
      setVisible(false);
      return;
    }
    gsap.to(el, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => setVisible(false),
    });
  }

  if (!visible) return null;

  return (
    <div
      ref={cardRef}
      className="fixed bottom-5 left-5 z-40 w-[calc(100%-2.5rem)] max-w-xs rounded-2xl border border-border-soft bg-white p-4 shadow-2xl sm:max-w-sm"
      role="dialog"
      aria-label="Free demo class notification"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close notification"
        className="absolute right-3 top-3 text-muted-foreground hover:text-navy-900"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-3 pr-4">
        <div className="rounded-full bg-amber-100 p-2">
          <GraduationCap className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <p className="font-heading text-sm font-bold text-navy-900">
            Register for a Free Demo Class
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            See a live session before you enroll — no cost, no obligation. Seats fill up fast.
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <Button asChild size="sm" className="flex-1 bg-amber-500 text-navy-950 hover:bg-amber-400">
          <Link href="/contact" onClick={close}>
            Book Free Demo
          </Link>
        </Button>
        <Button size="sm" variant="ghost" onClick={close}>
          Not Now
        </Button>
      </div>
    </div>
  );
}
