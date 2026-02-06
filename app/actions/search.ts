'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Search form validation schema
const SearchFormSchema = z.object({
    query: z.string().min(1, 'Search query is required').max(100, 'Search query must be less than 100 characters'),
    category: z.string().optional(),
    author: z.string().optional(),
    dateRange: z.string().optional(),
});

export type SearchFormData = z.infer<typeof SearchFormSchema>;

// Search server action
export async function performSearch(formData: FormData) {
    try {
        // Extract form data
        const rawData = {
            query: formData.get('query') as string,
            category: formData.get('category') as string,
            author: formData.get('author') as string,
            dateRange: formData.get('dateRange') as string,
        };

        // Validate form data
        const validatedData = SearchFormSchema.parse(rawData);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 500));

        // Here you would typically:
        // 1. Search database for articles
        // 2. Apply filters (category, author, date)
        // 3. Return paginated results
        console.log('Search request:', validatedData);

        // Simulate search results
        const searchResults = [
            {
                id: "1",
                title: "Search result 1",
                excerpt: "This is a search result based on your query",
                slug: "/single",
                category: { name: "Technology", slug: "/category/technology" },
                author: { name: "John Doe", slug: "/author/john-doe" },
                publishedAt: new Date().toISOString(),
                featuredImage: "/assets/imgs/news/news-1.jpg"
            },
            {
                id: "2",
                title: "Search result 2",
                excerpt: "Another search result matching your criteria",
                slug: "/single",
                category: { name: "Politics", slug: "/category/politics" },
                author: { name: "Jane Smith", slug: "/author/jane-smith" },
                publishedAt: new Date().toISOString(),
                featuredImage: "/assets/imgs/news/news-2.jpg"
            }
        ];

        // Revalidate search page
        revalidatePath('/search');

        return {
            success: true,
            message: `Found ${searchResults.length} results for "${validatedData.query}"`,
            data: {
                results: searchResults,
                total: searchResults.length,
                query: validatedData.query,
                filters: {
                    category: validatedData.category,
                    author: validatedData.author,
                    dateRange: validatedData.dateRange
                }
            }
        };

    } catch (error) {
        console.error('Search error:', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: 'Please check your search query and try again.',
                errors: error.issues.map((err: z.ZodIssue) => ({
                    field: err.path.join('.'),
                    message: err.message
                }))
            };
        }

        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            error: 'Internal server error'
        };
    }
} 