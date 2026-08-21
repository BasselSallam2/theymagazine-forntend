import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const BACK_END =
  process.env.NEXT_PUBLIC_API_SERVER || "http://localhost:8080/api";

async function fetchAllPosts(): Promise<any[]> {
  try {
    const params = new URLSearchParams({
      status: "published",
      limit: "500",
      sort: "-updatedAt",
      populate: JSON.stringify(["category"]),
    });
    const response = await fetch(`${BACK_END}/post?${params.toString()}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Sitemap posts fetch error:", error);
    return [];
  }
}

async function fetchAllCategories(): Promise<any[]> {
  try {
    const response = await fetch(`${BACK_END}/category`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Sitemap categories fetch error:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, categories] = await Promise.all([
    fetchAllPosts(),
    fetchAllCategories(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/egypt-stitch-and-tex-2026-faq`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/ar/egypt-stitch-and-tex-2026-faq`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((cat) => cat?.slug && !cat.deleted)
    .map((cat) => ({
      url: `${SITE_URL}/category/${cat.slug}`,
      lastModified: cat.updatedAt ? new Date(cat.updatedAt) : new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));

  const articlePages: MetadataRoute.Sitemap = posts
    .filter(
      (post) =>
        post?.slug &&
        post?.status === "published" &&
        !post.deleted &&
        post.category?.slug,
    )
    .map((post) => ({
      url: `${SITE_URL}/${post.category.slug}/${post.slug}`,
      lastModified: new Date(
        post.updatedAt || post.publishedAt || post.createdAt || Date.now(),
      ),
      changeFrequency: "weekly" as const,
      priority: post.isFeatured ? 0.9 : 0.7,
    }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
