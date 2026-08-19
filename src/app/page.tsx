import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import USPBand from "@/components/sections/USPBand";
import CoursesShowcase from "@/components/sections/CoursesShowcase";
import DiplomaSpotlight from "@/components/sections/DiplomaSpotlight";
import PlacementNoticeStrip from "@/components/sections/PlacementNoticeStrip";
import VirtualOfficeCTA from "@/components/sections/VirtualOfficeCTA";
import HiringPartnersMarquee from "@/components/sections/HiringPartnersMarquee";
import PlacementWall from "@/components/sections/PlacementWall";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramCTA from "@/components/sections/InstagramCTA";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Best IT & AI Institute in Kochi, Kerala",
  description: siteConfig.description,
  keywords: [
    "best IT institute Kochi",
    "best AI institute Kerala",
    "AI course Kochi Kerala",
    "python full stack course Kochi",
    "data science with AI course Kochi",
    "MERN stack training Kerala",
    "cybersecurity course Kochi",
    "agentic AI course Kerala",
    "software training institute Ernakulam",
    "job oriented courses Kochi",
  ],
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
      <VirtualOfficeCTA />
      <HiringPartnersMarquee />
      <PlacementWall />
      <TestimonialsSection />
      <BlogPreview />
      <FAQPreview />
      <InstagramCTA />
      <FinalCTA />
    </>
  );
}
