import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import USPBand from "@/components/sections/USPBand";
import CoursesShowcase from "@/components/sections/CoursesShowcase";
import DiplomaSpotlight from "@/components/sections/DiplomaSpotlight";
import PlacementNoticeStrip from "@/components/sections/PlacementNoticeStrip";
import HiringPartnersMarquee from "@/components/sections/HiringPartnersMarquee";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramCTA from "@/components/sections/InstagramCTA";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Best IT & AI Institute in Kochi, Kerala",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <PlacementNoticeStrip />
      <USPBand />
      <CoursesShowcase />
      <DiplomaSpotlight />
      <HiringPartnersMarquee />
      <TestimonialsSection />
      <BlogPreview />
      <FAQPreview />
      <InstagramCTA />
      <FinalCTA />
    </>
  );
}
