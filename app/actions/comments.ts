'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Comment form validation schema
const CommentFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
    email: z.string().email('Please enter a valid email address'),
    website: z.string().optional(),
    comment: z.string().min(10, 'Comment must be at least 10 characters').max(1000, 'Comment must be less than 1000 characters'),
    parentId: z.string().optional(),
    articleId: z.string().min(1, 'Article ID is required'),
});

export type CommentFormData = z.infer<typeof CommentFormSchema>;

// Comment submission server action
export async function submitComment(formData: FormData) {
    try {
        // Extract form data
        const rawData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            website: formData.get('website') as string,
            comment: formData.get('comment') as string,
            parentId: formData.get('parentId') as string,
            articleId: formData.get('articleId') as string,
        };

        // Validate form data
        const validatedData = CommentFormSchema.parse(rawData);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 800));

        // Here you would typically:
        // 1. Save comment to database
        // 2. Send notification to article author
        // 3. Moderate comment if needed
        console.log('Comment submission:', validatedData);

        // Create comment object
        const newComment = {
            id: Date.now().toString(),
            ...validatedData,
            createdAt: new Date().toISOString(),
            status: 'pending' // or 'approved' based on your moderation system
        };

        // Revalidate the article page
        revalidatePath(`/single/${validatedData.articleId}`);
        revalidatePath('/');

        return {
            success: true,
            message: 'Comment submitted successfully! It will be visible after moderation.',
            data: newComment
        };

    } catch (error) {
        console.error('Comment submission error:', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: 'Please check your input and try again.',
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