'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

// Contact form schema
const ContactFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Comment form schema
const CommentFormSchema = z.object({
    comment: z.string().min(1, 'Comment is required'),
    articleId: z.string().min(1, 'Article ID is required'),
    parentId: z.string().optional(),
});

// Search form schema
const SearchFormSchema = z.object({
    query: z.string().min(1, 'Search query is required'),
    type: z.string().optional(),
});

// Newsletter subscription schema
const NewsletterSchema = z.object({
    email: z.string().email('Invalid email address'),
});

// Contact form server action
export async function submitContactFormServer(formData: FormData) {
    try {
        const rawData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        const validatedData = ContactFormSchema.parse(rawData);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically save to database and send email
        console.log('Contact form submission (server):', validatedData);

        revalidatePath('/contact');
        revalidatePath('/about');

        return {
            success: true,
            message: 'Thank you for your message! We will get back to you soon.',
            data: validatedData
        };

    } catch (error) {
        console.error('Contact form error (server):', error);

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

// Comment form server action
export async function submitCommentServer(formData: FormData) {
    try {
        const rawData = {
            comment: formData.get('comment') as string,
            articleId: formData.get('articleId') as string,
            parentId: formData.get('parentId') as string,
        };

        const validatedData = CommentFormSchema.parse(rawData);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically save to database
        console.log('Comment submission (server):', validatedData);

        revalidatePath('/single');

        return {
            success: true,
            message: 'Comment submitted successfully!',
            data: validatedData
        };

    } catch (error) {
        console.error('Comment form error (server):', error);

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

// Search form server action
export async function performSearchServer(formData: FormData) {
    try {
        const rawData = {
            query: formData.get('query') as string,
            type: formData.get('type') as string,
        };

        const validatedData = SearchFormSchema.parse(rawData);

        // Simulate search processing
        await new Promise(resolve => setTimeout(resolve, 500));

        // Here you would typically perform actual search
        console.log('Search performed (server):', validatedData);

        return {
            success: true,
            message: 'Search completed successfully',
            data: validatedData,
            results: [] // Add actual search results here
        };

    } catch (error) {
        console.error('Search error (server):', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: 'Please enter a valid search query.',
                errors: error.issues.map((err: z.ZodIssue) => ({
                    field: err.path.join('.'),
                    message: err.message
                }))
            };
        }

        return {
            success: false,
            message: 'Search failed. Please try again later.',
            error: 'Internal server error'
        };
    }
}

// Newsletter subscription server action
export async function subscribeNewsletterServer(formData: FormData) {
    try {
        const rawData = {
            email: formData.get('EMAIL') as string,
        };

        const validatedData = NewsletterSchema.parse(rawData);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically save to database
        console.log('Newsletter subscription (server):', validatedData);

        return {
            success: true,
            message: 'Thank you for subscribing to our newsletter!',
            data: validatedData
        };

    } catch (error) {
        console.error('Newsletter subscription error (server):', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: 'Please enter a valid email address.',
                errors: error.issues.map((err: z.ZodIssue) => ({
                    field: err.path.join('.'),
                    message: err.message
                }))
            };
        }

        return {
            success: false,
            message: 'Subscription failed. Please try again later.',
            error: 'Internal server error'
        };
    }
} 