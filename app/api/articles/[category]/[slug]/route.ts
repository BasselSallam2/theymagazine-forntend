import { NextRequest, NextResponse } from "next/server";

// Backend API URL (must include /api so path becomes /api/post/...)
const BACKEND_URL =
    process.env.NEXT_PUBLIC_API_SERVER || "http://localhost:8080/api";

// Fetch single article from backend API
const getArticleData = async (categorySlug: string, articleSlug: string) => {
    try {
        const url = `${BACKEND_URL}/post/${categorySlug}/${articleSlug}`;

        const response = await fetch(url, {
            cache: "no-store", // Disable caching for now
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null; // Article not found
            }
            throw new Error(`Backend API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success) {
            throw new Error(`Backend API returned error: ${data.message}`);
        }

        const article = data.data;

        if (!article) {
            return null;
        }

        // Clean up content by removing title if it appears at the beginning
        let cleanedContent = article.content || "";
        if (cleanedContent) {
            // Remove title if it appears as the first element (common in HTML content)
            const titleRegex = new RegExp(
                `^<b>${article.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</b>`,
                "i",
            );
            cleanedContent = cleanedContent.replace(titleRegex, "").trim();

            // Also check for other common title formats
            const altTitleRegex = new RegExp(
                `^<strong>${article.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</strong>`,
                "i",
            );
            cleanedContent = cleanedContent.replace(altTitleRegex, "").trim();

            // Remove leading/trailing whitespace and empty divs/tags
            cleanedContent = cleanedContent
                .replace(/^(<div>\s*<\/div>\s*)+/, "")
                .trim();
        }

        // Extract featured image from content if not already set
        let featuredImage =
            article.image && article.image.length > 0 ? article.image[0] : null;

        // If no featured image, try to extract from content
        if (!featuredImage && cleanedContent) {
            const imgMatch = cleanedContent.match(/<img[^>]+src="([^"]+)"/i);
            if (imgMatch && imgMatch[1]) {
                featuredImage = imgMatch[1];
            }
        }

        // Transform backend data to frontend format
        return {
            id: article._id,
            title: article.title,
            content: cleanedContent,
            excerpt: article.description || article.excerpt,
            featuredImage,
            slug: `/${article.category?.slug || "uncategorized"}/${article.slug}`,
            publishedAt: article.createdAt,
            updatedAt: article.updatedAt,
            author: {
                id: article.author?._id || article.author,
                name: article.author?.name || "Unknown Author",
                email: article.author?.email || "",
                slug: article.author?.slug || "unknown-author",
            },
            category: {
                id: article.category?._id || article.category,
                name: article.category?.name || "Uncategorized",
                slug: article.category?.slug || "uncategorized",
            },
            status: article.status,
            tags: article.tags || [],
            views: article.views || 0,
            isFeatured: article.isFeatured || false,
            allowComments: article.allowComments || false,
            seo: article.seo || null,
        };
    } catch (error) {
        console.error("Error fetching article from backend:", error);
        return null;
    }
};

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ category: string; slug: string }> },
) {
    try {
        const { category, slug } = await params;

        // Fetch fresh from backend so edits show immediately
        const article = await getArticleData(category, slug);

        if (!article) {
            return NextResponse.json(
                { success: false, error: "Article not found" },
                { status: 404 },
            );
        }

        const response = {
            success: true,
            data: article,
        };

        return NextResponse.json(response, {
            headers: {
                "Cache-Control": "no-store, must-revalidate",
            },
        });
    } catch (error) {
        console.error("Article API Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch article" },
            { status: 500 },
        );
    }
}
