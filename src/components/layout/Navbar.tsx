"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/lib/data/nav";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/brand/logo.png"
            alt="Future Optima IT Solutions Pvt Ltd"
            width={180}
            height={98}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-50",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 text-navy-600 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-20 w-80 translate-y-2 rounded-xl border border-border-soft bg-white p-3 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="grid gap-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 hover:bg-navy-50"
                        >
                          <span className="block text-sm font-medium text-navy-900">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="block text-xs text-muted-foreground">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-50",
                  pathname === item.href && "bg-navy-50 text-amber-600",
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.primaryPhone}`}
            className="flex items-center gap-2 text-sm font-semibold text-navy-900"
          >
            <Phone className="h-4 w-4 text-amber-500" />
            {siteConfig.primaryPhone}
          </a>
          <Button asChild className="bg-navy-900 hover:bg-navy-800">
            <Link href="/contact">Enroll Now</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="rounded-md p-2 text-navy-900 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/images/brand/logo.png"
                  alt="Future Optima IT Solutions"
                  width={150}
                  height={82}
                  className="h-10 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4 pb-6">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-border-soft py-2">
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-navy-900"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileExpanded === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileExpanded === item.label ? (
                      <ul className="mb-2 flex flex-col gap-1 pl-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-2 py-2 text-sm text-navy-800 hover:bg-navy-50"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? "#"}
                    onClick={() => setOpen(false)}
                    className="border-b border-border-soft py-3 text-base font-semibold text-navy-900"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href={`tel:${siteConfig.primaryPhone}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-navy-50 py-3 text-sm font-semibold text-navy-900"
              >
                <Phone className="h-4 w-4 text-amber-500" />
                Call {siteConfig.primaryPhone}
              </a>
              <Button asChild className="mt-2 bg-navy-900 hover:bg-navy-800">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Enroll Now
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
