import { MetadataRoute } from "next";
import { serviceCategories } from "@/lib/services-data";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const today = new Date().toISOString().split("T")[0];

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hygiene-safety`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Add all service categories
  serviceCategories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/services/${category.slug}`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    });

    // Add all services within each category
    category.services.forEach((service) => {
      routes.push({
        url: `${baseUrl}/services/${category.slug}/${service.slug}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  // Add all blog posts
  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}
