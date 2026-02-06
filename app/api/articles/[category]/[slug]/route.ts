import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';

// Backend API URL
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

// Cache configuration
const CACHE_TAG = 'article';
const CACHE_REVALIDATE = 1800; // 30 minutes

// Fetch single article from backend API
const getArticleData = async (categorySlug: string, articleSlug: string) => {
    try {
        // Use the new backend endpoint that fetches by category slug and post slug
        const url = `${BACKEND_URL}/api/post/${categorySlug}/${articleSlug}`;

        const response = await fetch(url, {
            cache: 'no-store', // Disable caching for now
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
        let cleanedContent = article.content || '';
        if (cleanedContent) {
            // Remove title if it appears as the first element (common in HTML content)
            const titleRegex = new RegExp(`^<b>${article.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</b>`, 'i');
            cleanedContent = cleanedContent.replace(titleRegex, '').trim();

            // Also check for other common title formats
            const altTitleRegex = new RegExp(`^<strong>${article.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</strong>`, 'i');
            cleanedContent = cleanedContent.replace(altTitleRegex, '').trim();

            // Remove leading/trailing whitespace and empty divs/tags
            cleanedContent = cleanedContent.replace(/^(<div>\s*<\/div>\s*)+/, '').trim();
        }

        // Extract featured image from content if not already set
        let featuredImage = article.image && article.image.length > 0 ? article.image[0] : null;

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
            slug: `/${article.category?.slug || 'uncategorized'}/${article.slug}`,
            publishedAt: article.createdAt,
            updatedAt: article.updatedAt,
            author: {
                id: article.author?._id || article.author,
                name: article.author?.name || 'Unknown Author',
                email: article.author?.email || '',
                slug: article.author?.slug || 'unknown-author'
            },
            category: {
                id: article.category?._id || article.category,
                name: article.category?.name || 'Uncategorized',
                slug: article.category?.slug || 'uncategorized'
            },
            status: article.status,
            tags: article.tags || [],
            views: article.views || 0,
            isFeatured: article.isFeatured || false,
            allowComments: article.allowComments || false
        };
    } catch (error) {
        console.error('Error fetching article from backend:', error);
        return null;
    }
};

// Cached data fetching function
const getCachedArticle = unstable_cache(
    async (categorySlug: string, articleSlug: string) => {
        const article = await getArticleData(categorySlug, articleSlug);
        return article;
    },
    [CACHE_TAG],
    {
        revalidate: CACHE_REVALIDATE,
        tags: [CACHE_TAG],
    }
);

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ category: string; slug: string }> }
) {
    try {
        const { category, slug } = await params;

        // Get cached article
        const article = await getCachedArticle(category, slug);

        if (!article) {
            return NextResponse.json(
                { success: false, error: 'Article not found' },
                { status: 404 }
            );
        }

        const response = {
            success: true,
            data: article
        };

        return NextResponse.json(response, {
            headers: {
                'Cache-Control': `public, s-maxage=${CACHE_REVALIDATE}, stale-while-revalidate=${CACHE_REVALIDATE * 2}`,
            },
        });
    } catch (error) {
        console.error('Article API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch article' },
            { status: 500 }
        );
    }
}
