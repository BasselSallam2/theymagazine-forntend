import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';

// Backend API URL
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

// Cache configuration
const CACHE_TAG = 'articles';
const CACHE_REVALIDATE = 3600; // 1 hour

interface Article {
    id: string;
    title: string;
    content?: string;
    excerpt?: string;
    featuredImage?: string | null;
    slug: string;
    publishedAt?: string;
    author?: {
        id?: string;
        name?: string;
        email?: string;
        slug?: string;
    };
    category?: {
        id?: string;
        name?: string;
        slug?: string;
    };
    status?: string;
    tags?: string[];
    views?: number;
    isFeatured?: boolean;
    allowComments?: boolean;
}

// Fetch articles from backend API
const getArticlesData = async (params?: Record<string, string>): Promise<Article[]> => {
    try {
        const queryParams = new URLSearchParams();

        // Set limit
        if (params?.limit) {
            queryParams.set('limit', params.limit);
        }

        // Add populate parameters to get category and author data
        queryParams.set('populate', JSON.stringify(['author', 'category']));

        const url = `${BACKEND_URL}/api/post?${queryParams.toString()}`;

        const response = await fetch(url, {
            cache: 'no-store', // Disable caching for now to see fresh data
        });

        if (!response.ok) {
            throw new Error(`Backend API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success) {
            throw new Error(`Backend API returned error: ${data.message}`);
        }

        // Transform backend data to frontend format
        let articles: Article[] = data.data.map((article: any): Article => {
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

            return {
                id: article._id,
                title: article.title,
                content: cleanedContent,
                excerpt: article.description || article.excerpt,
                featuredImage,
            slug: `/${article.category?.slug || 'uncategorized'}/${article.slug}`,
            publishedAt: article.createdAt,
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
        });

        // For related articles, filter out YouTube content and select random 2
        if (params?.related === 'true') {
            console.log('Total articles before filtering:', articles.length);

            // Filter out articles that contain YouTube links in content
            articles = articles.filter((article: any) =>
                !article.content ||
                !/youtube\.com|youtu\.be/i.test(article.content)
            );

            console.log('Articles after YouTube filtering:', articles.length);

            // Randomly select 2 articles
            if (articles.length >= 2) {
                const shuffled = [...articles].sort(() => 0.5 - Math.random());
                articles = shuffled.slice(0, 2);
            } else if (articles.length === 1) {
                // If only 1 article, return it
                articles = articles.slice(0, 1);
            } else {
                // If no articles without YouTube, return empty array
                console.log('No articles without YouTube content found');
                articles = [];
            }
        }

        return articles;
    } catch (error) {
        console.error('Error fetching from backend:', error);
        // Return empty array on error to prevent breaking the frontend
        return [];
    }
};

// Cached data fetching function
const getCachedArticles = unstable_cache(
    async () => {
        const articles = await getArticlesData();
        return articles;
    },
    [CACHE_TAG],
    {
        revalidate: CACHE_REVALIDATE,
        tags: [CACHE_TAG],
    }
);

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const category = searchParams.get('category');
        const author = searchParams.get('author');
        const related = searchParams.get('related');

        // For related articles, fetch with special parameters
        let articles: Article[];
        if (related === 'true') {
            const params = {
                limit: '10000',
                populate: JSON.stringify(['author', 'category']),
                related: 'true'
            };
            articles = await getArticlesData(params);
        } else {
            // Get cached articles for regular requests
            articles = await getCachedArticles();
        }

        // Apply filters
        let filteredArticles = articles;
        if (category) {
            filteredArticles = filteredArticles.filter(article =>
                article.category?.slug === category
            );
        }
        if (author) {
            filteredArticles = filteredArticles.filter(article =>
                article.author?.slug === author
            );
        }

        // Handle featured articles filter
        const featured = searchParams.get('featured');
        if (featured === 'true') {
            filteredArticles = filteredArticles.filter(article =>
                article.status === 'published'
            ).slice(0, 5); // Return first 5 as featured
        }

        // Handle sorting
        const sort = searchParams.get('sort');
        const order = searchParams.get('order') || 'desc';
        if (sort === 'publishedAt') {
            filteredArticles.sort((a, b) => {
                const dateA = new Date(a.publishedAt ?? 0);
                const dateB = new Date(b.publishedAt ?? 0);
                return order === 'desc' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
            });
        } else if (sort === 'views') {
            // Mock views data
            filteredArticles = filteredArticles.map(article => ({
                ...article,
                views: Math.floor(Math.random() * 1000) + 100
            } as any));
            filteredArticles.sort((a: any, b: any) => {
                return order === 'desc' ? (b.views || 0) - (a.views || 0) : (a.views || 0) - (b.views || 0);
            });
        }

        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

        const response = {
            success: true,
            data: paginatedArticles,
            meta: {
                total: filteredArticles.length,
                page,
                perPage: limit,
                totalPages: Math.ceil(filteredArticles.length / limit),
                hasNext: endIndex < filteredArticles.length,
                hasPrev: page > 1
            }
        };

        return NextResponse.json(response, {
            headers: {
                'Cache-Control': `public, s-maxage=${CACHE_REVALIDATE}, stale-while-revalidate=${CACHE_REVALIDATE * 2}`,
            },
        });
    } catch (error) {
        console.error('Articles API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch articles' },
            { status: 500 }
        );
    }
} 