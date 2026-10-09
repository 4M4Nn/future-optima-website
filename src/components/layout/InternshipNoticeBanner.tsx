"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, X } from "lucide-react";
import { internshipNotice } from "@/lib/data/internships";

export default function InternshipNoticeBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  if (!visible || pathname === internshipNotice.href) return null;

  return (
    <div
      role="region"
      aria-label="Internship applications announcement"
      className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-2 pl-4 pr-10 text-center text-white"
    >
      <Briefcase className="hidden h-4 w-4 shrink-0 text-amber-400 sm:block" />
      <p className="text-xs font-medium sm:text-sm">
        <span className="font-bold text-amber-400">{internshipNotice.label}:</span>{" "}
        {internshipNotice.text}{" "}
        <Link
          href={internshipNotice.href}
          className="font-semibold underline underline-offset-2 hover:text-amber-400"
        >
          {internshipNotice.cta}
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
