import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';

// Cache configuration
const CACHE_TAG = 'authors';
const CACHE_REVALIDATE = 3600; // 1 hour

// Mock data - replace with actual database query
const getAuthorsData = async () => {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100));

    return [
        {
            id: "1",
            name: "Steven Kenedy",
            email: "steven@example.com",
            slug: "steven-kenedy",
            bio: "Experienced journalist covering politics and current affairs",
            avatar: "/assets/imgs/authors/author-1.jpg",
            articleCount: 25
        },
        {
            id: "2",
            name: "Sarah Johnson",
            email: "sarah@example.com",
            slug: "sarah-johnson",
            bio: "Health and wellness reporter with 10 years of experience",
            avatar: "/assets/imgs/authors/author-2.jpg",
            articleCount: 18
        },
        {
            id: "3",
            name: "Michael Chen",
            email: "michael@example.com",
            slug: "michael-chen",
            bio: "Technology correspondent covering the latest innovations",
            avatar: "/assets/imgs/authors/author-3.jpg",
            articleCount: 22
        },
        {
            id: "4",
            name: "Emma Wilson",
            email: "emma@example.com",
            slug: "emma-wilson",
            bio: "Sports journalist specializing in football and basketball",
            avatar: "/assets/imgs/authors/author-4.jpg",
            articleCount: 30
        }
    ];
};

// Cached data fetching function
const getCachedAuthors = unstable_cache(
    async () => {
        const authors = await getAuthorsData();
        return authors;
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

        // Get cached authors
        const authors = await getCachedAuthors();

        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedAuthors = authors.slice(startIndex, endIndex);

        const response = {
            success: true,
            data: paginatedAuthors,
            meta: {
                total: authors.length,
                page,
                perPage: limit,
                totalPages: Math.ceil(authors.length / limit),
                hasNext: endIndex < authors.length,
                hasPrev: page > 1
            }
        };

        return NextResponse.json(response, {
            headers: {
                'Cache-Control': `public, s-maxage=${CACHE_REVALIDATE}, stale-while-revalidate=${CACHE_REVALIDATE * 2}`,
            },
        });
    } catch (error) {
        console.error('Authors API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch authors' },
            { status: 500 }
        );
    }
} 