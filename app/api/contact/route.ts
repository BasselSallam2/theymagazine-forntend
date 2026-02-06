import { NextRequest, NextResponse } from 'next/server';
import { submitContactFormServer } from '@/app/actions/forms';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const result = await submitContactFormServer(formData);

        if (result.success) {
            // Redirect to success page or show success message
            return NextResponse.redirect(new URL('/contact?status=success', request.url));
        } else {
            // Redirect back with error
            const searchParams = new URLSearchParams();
            searchParams.set('status', 'error');
            searchParams.set('message', result.message);
            if (result.errors) {
                searchParams.set('errors', JSON.stringify(result.errors));
            }
            return NextResponse.redirect(new URL(`/contact?${searchParams.toString()}`, request.url));
        }
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.redirect(new URL('/contact?status=error&message=Something went wrong', request.url));
    }
} 