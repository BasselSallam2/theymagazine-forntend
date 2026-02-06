import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://newsboard.com";

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/search`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/category-grid`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/category-list`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/category-masonry`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/category-big`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.6,
        },
    ];

    return staticPages;
}
