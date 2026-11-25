import type { MetadataRoute } from "next";
import { courses } from "@/lib/data/courses";
import { blogPosts } from "@/lib/data/blog";
import { newsPosts } from "@/lib/data/news";
import { siteConfig } from "@/lib/data/site";

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: today, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/courses`, lastModified: today, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/placements`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/corporate-training`, lastModified: today, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/internships`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/virtual-office`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hire-from-us`, lastModified: today, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/faq`, lastModified: today, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/about`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: today, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/news`, lastModified: today, changeFrequency: "weekly", priority: 0.65 },
    { url: `${BASE_URL}/gallery`, lastModified: today, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/career`, lastModified: today, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/career/open-positions`, lastModified: today, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/career/faculty`, lastModified: today, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/career/become-a-tutor`, lastModified: today, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/vision-mission`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: course.featured ? 0.95 : 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${BASE_URL}/news/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...blogRoutes, ...newsRoutes];
}
