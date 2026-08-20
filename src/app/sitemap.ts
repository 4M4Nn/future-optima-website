import type { MetadataRoute } from "next";
import { courses } from "@/lib/data/courses";
import { blogPosts } from "@/lib/data/blog";
import { newsPosts } from "@/lib/data/news";
import { siteConfig } from "@/lib/data/site";

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/courses`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/placements`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/virtual-office`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hire-from-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/testimonials`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/vision-mission`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/news`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/career`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/career/faculty`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/career/become-a-tutor`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/career/open-positions`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    changeFrequency: "weekly",
    priority: course.featured ? 0.95 : 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${BASE_URL}/news/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...courseRoutes, ...blogRoutes, ...newsRoutes];
}
