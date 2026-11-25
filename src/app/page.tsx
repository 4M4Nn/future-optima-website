import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import USPBand from "@/components/sections/USPBand";
import CoursesShowcase from "@/components/sections/CoursesShowcase";
import InternshipSpotlight from "@/components/sections/InternshipSpotlight";
import DiplomaSpotlight from "@/components/sections/DiplomaSpotlight";
import PlacementNoticeStrip from "@/components/sections/PlacementNoticeStrip";
import TrainingPillars from "@/components/sections/TrainingPillars";
import VirtualOfficeCTA from "@/components/sections/VirtualOfficeCTA";
import HiringPartnersMarquee from "@/components/sections/HiringPartnersMarquee";
import PlacementWall from "@/components/sections/PlacementWall";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramCTA from "@/components/sections/InstagramCTA";
import BlogPreview from "@/components/sections/BlogPreview";
import LatestNewsLoop from "@/components/sections/LatestNewsLoop";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Best IT & AI Training Institute in Kochi, Kerala | 90%+ Placement",
  description:
    "Future Optima IT Solutions — Best AI, cloud computing, DevOps, full-stack, data science and cybersecurity training institute in Kochi, Kerala. 1000+ placements, 200+ hiring partners, pay after placement. Courses open to Plus Two students and graduates from any background.",
  keywords: [
    "best IT institute Kochi Kerala",
    "best AI institute Kochi 2026",
    "AI course Kochi Kerala 2026",
    "cloud computing course Kochi Kerala",
    "DevOps course Kochi Kerala",
    "python full stack course Kochi",
    "data science with AI course Kochi",
    "MERN stack training Kochi Kerala",
    "cybersecurity course Kochi Kerala",
    "agentic AI course Kerala",
    "AI engineering course Kochi",
    "software training institute Ernakulam Kochi",
    "IT course after 12th Kochi Kerala",
    "job oriented IT courses Kochi",
    "pay after placement IT course Kochi",
    "placement guaranteed IT course Kerala",
    "best IT training institute Thrissur Kerala",
    "IT course for freshers Kochi 2026",
    "AI course for girls women Kerala",
    "corporate training Kochi Kerala",
  ],
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <PlacementNoticeStrip />
      <InternshipSpotlight />
      <TrainingPillars />
      <USPBand />
      <CoursesShowcase />
      <DiplomaSpotlight />
      <VirtualOfficeCTA />
      <HiringPartnersMarquee />
      <PlacementWall />
      <TestimonialsSection />
      <BlogPreview />
      <LatestNewsLoop />
      <FAQPreview />
      <InstagramCTA />
      <FinalCTA />
    </>
  );
}
