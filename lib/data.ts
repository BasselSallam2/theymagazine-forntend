import { unstable_cache } from 'next/cache';
import { Article, Category, Author } from '@/types';

// Base API URL - ensure it works in both client and server contexts
const API_BASE = 'http://127.0.0.1:8080/api';

interface NavbarItem {
    _id: string;
    title: string;
    category: string;
    slug?: string;
    idx: number;
    items: any;
}

interface FooterApiData {
    subtitle1: string;
    title2: string;
    subtitle2: string;
    title3: string;
    subtitle3: string;
    facebook: string;
    instagram: string;
    twitter?: string;
    pinterest?: string;
}

// Cache configuration
const CACHE_CONFIG = {
    revalidate: 3600, // 1 hour
    tags: ['articles', 'categories', 'authors'],
};

// Generic fetch function with caching
async function fetchWithCache<T>(
    url: string,
    options?: RequestInit,
    cacheKey?: string
): Promise<T> {
    try {
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
            }
    });

    if (!response.ok) {
            console.error(`HTTP error! status: ${response.status} for URL: ${url}`);
            // Don't throw error, return empty data instead
            return { data: [], success: false } as T;
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            console.error(`Expected JSON but got ${contentType} for URL: ${url}`);
            // Don't throw error, return empty data instead
            return { data: [], success: false } as T;
    }

    return response.json();
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        // Return empty data instead of throwing
        return { data: [], success: false } as T;
    }
}

// Cached fetch function
export const cachedFetch = <T>(
    url: string,
    cacheKey: string,
    options?: RequestInit
) => {
    return unstable_cache(
        () => fetchWithCache<T>(url, options),
        [cacheKey],
        CACHE_CONFIG
    );
};

// Articles data fetching
export const getArticles = cachedFetch<{ data: Article[]; meta: any }>(
    `${API_BASE}/articles`,
    'articles'
);

export const getArticleBySlug = (slug: string) => {
    return cachedFetch<{ data: Article }>(
        `${API_BASE}/articles/${slug}`,
        `article-${slug}`
    );
};

export const getArticlesByCategory = async (categorySlug: string) => {
    try {
        const response = await fetch(`${API_BASE}/post/category/${categorySlug}`);
        if (!response.ok) {
            console.error('getArticlesByCategory failed:', response.status);
            return { data: [], meta: {} };
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('getArticlesByCategory error:', error);
        return { data: [], meta: {} };
    }
};

export const getArticlesByAuthor = (authorSlug: string) => {
    return cachedFetch<{ data: Article[]; meta: any }>(
        `${API_BASE}/articles?author=${authorSlug}`,
        `articles-author-${authorSlug}`
    );
};

// Categories data fetching
export const getCategories = async () => {
    const result = await fetchWithCache<{ data: Category[]; success?: boolean }>(
        `${API_BASE}/category`
    );
    return result.success === false ? { data: [] } : result;
};

// Note: getCategoryBySlug is not used anymore - we fetch all categories and filter by slug
// export const getCategoryBySlug = (slug: string) => {
//     return cachedFetch<{ data: Category }>(
//         `${API_BASE}/categories/${slug}`,
//         `category-${slug}`
//     );
// };

// Navbar data fetching (client-side)
export const getNavbar = async (): Promise<{ data: NavbarItem[] }> => {
    const response = await fetch(`${API_BASE}/navbar?sort=idx`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

// Footer data fetching (client-side)
export const getFooterData = async (): Promise<{ data: FooterApiData[] }> => {
    const response = await fetch(`${API_BASE}/footer`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

// Authors data fetching
export const getAuthors = cachedFetch<{ data: Author[] }>(
    `${API_BASE}/authors`,
    'authors'
);

export const getAuthorBySlug = (slug: string) => {
    return cachedFetch<{ data: Author }>(
        `${API_BASE}/authors/${slug}`,
        `author-${slug}`
    );
};

// Search functionality
export const searchArticles = (query: string, filters?: Record<string, any>) => {
    const params = new URLSearchParams({ q: query, ...filters });
    return cachedFetch<{ data: Article[]; meta: any }>(
        `${API_BASE}/articles/search?${params}`,
        `search-${query}-${JSON.stringify(filters)}`
    );
};

// Featured articles
export const getFeaturedArticles = cachedFetch<{ data: Article[] }>(
    `${API_BASE}/articles?featured=true`,
    'featured-articles'
);

// Recent articles
export const getRecentArticles = cachedFetch<{ data: Article[] }>(
    `${API_BASE}/articles?sort=publishedAt&order=desc&limit=10`,
    'recent-articles'
);

// Client-side version for use in Client Components (calls Next.js API route)
export const getRecentArticlesClient = (): Promise<{ data: Article[] }> =>
    fetch('/api/articles?sort=publishedAt&order=desc&limit=10').then(res => res.json());

// Popular articles
export const getPopularArticles = cachedFetch<{ data: Article[] }>(
    `${API_BASE}/articles?sort=views&order=desc&limit=10`,
    'popular-articles'
);

// Parallel data fetching for better performance
export async function getHomePageData() {
    const [featured, recent, popular, categories] = await Promise.all([
        getFeaturedArticles(),
        getRecentArticles(),
        getPopularArticles(),
        getCategories(),
    ]);

    return {
        featured: featured.data,
        recent: recent.data,
        popular: popular.data,
        categories: categories.data,
    };
}

export async function getCategoryPageData(categorySlug: string) {
    try {
        const [articlesResult, categoriesResult] = await Promise.all([
            getArticlesByCategory(categorySlug),
            getCategories(),
        ]);

        // Transform backend articles data to match frontend format
        const transformedArticles = (articlesResult?.data || []).map((article: any) => {
            try {
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
                    excerpt: article.description || '',
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
            } catch (error) {
                console.error('Error transforming article:', article.title, error);
                return null;
            }
        }).filter((article: Article | null): article is Article => article !== null);

        // Find the category with matching slug
        const category = categoriesResult?.data?.find((cat: Category) => cat.slug === categorySlug);

        return {
            articles: transformedArticles,
            category: category,
            meta: articlesResult?.paginationResult || articlesResult?.meta,
        };
    } catch (error) {
        console.error('Error fetching category page data:', error);
    return {
            articles: [],
            category: null,
            meta: null,
    };
    }
}

export async function getAuthorPageData(authorSlug: string) {
    const [articles, author] = await Promise.all([
        getArticlesByAuthor(authorSlug)(),
        getAuthorBySlug(authorSlug)(),
    ]);

    return {
        articles: articles.data,
        author: author.data,
        meta: articles.meta,
    };
} 