import { NextRequest, NextResponse } from 'next/server';
import { subscribeNewsletterServer } from '@/app/actions/forms';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const result = await subscribeNewsletterServer(formData);

        if (result.success) {
            // Redirect to success page or show success message
            return NextResponse.redirect(new URL('/?status=newsletter-success', request.url));
        } else {
            // Redirect back with error
            const searchParams = new URLSearchParams();
            searchParams.set('status', 'newsletter-error');
            searchParams.set('message', result.message);
            if (result.errors) {
                searchParams.set('errors', JSON.stringify(result.errors));
            }
            return NextResponse.redirect(new URL(`/?${searchParams.toString()}`, request.url));
        }
    } catch (error) {
        console.error('Newsletter API error:', error);
        return NextResponse.redirect(new URL('/?status=newsletter-error&message=Something went wrong', request.url));
    }
} 