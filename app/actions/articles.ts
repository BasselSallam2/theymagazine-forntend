'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

// Types for server actions
interface CreateArticleData {
    title: string;
    content: string;
    excerpt?: string;
    categoryId: string;
    authorId: string;
    featuredImage?: string;
    status?: 'published' | 'draft' | 'archived';
}

interface UpdateArticleData extends Partial<CreateArticleData> {
    id: string;
}

// Create new article
export async function createArticle(data: CreateArticleData) {
    try {
        // Simulate database operation
        await new Promise(resolve => setTimeout(resolve, 500));

        const newArticle = {
            id: Date.now().toString(),
            ...data,
            slug: data.title.toLowerCase().replace(/\s+/g, '-'),
            publishedAt: new Date().toISOString(),
            status: data.status || 'draft'
        };

        // Revalidate cache
        revalidateTag('articles');
        revalidatePath('/');
        revalidatePath('/category');
        revalidatePath('/author');

        return { success: true, data: newArticle };
    } catch (error) {
        console.error('Create article error:', error);
        return { success: false, error: 'Failed to create article' };
    }
}

// Update article
export async function updateArticle(data: UpdateArticleData) {
    try {
        // Simulate database operation
        await new Promise(resolve => setTimeout(resolve, 300));

        // Revalidate cache
        revalidateTag('articles');
        revalidatePath(`/single/${data.id}`);
        revalidatePath('/');
        revalidatePath('/category');
        revalidatePath('/author');

        return { success: true, data };
    } catch (error) {
        console.error('Update article error:', error);
        return { success: false, error: 'Failed to update article' };
    }
}

// Delete article
export async function deleteArticle(id: string) {
    try {
        // Simulate database operation
        await new Promise(resolve => setTimeout(resolve, 200));

        // Revalidate cache
        revalidateTag('articles');
        revalidatePath('/');
        revalidatePath('/category');
        revalidatePath('/author');

        return { success: true };
    } catch (error) {
        console.error('Delete article error:', error);
        return { success: false, error: 'Failed to delete article' };
    }
}

// Search articles
export async function searchArticles(query: string, filters?: Record<string, any>) {
    try {
        // Simulate search operation
        await new Promise(resolve => setTimeout(resolve, 200));

        return { success: true, data: [] };
    } catch (error) {
        console.error('Search articles error:', error);
        return { success: false, error: 'Failed to search articles' };
    }
} 