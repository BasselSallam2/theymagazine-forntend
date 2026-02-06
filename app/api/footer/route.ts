import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_SERVER || 'http://localhost:8080/api';

export async function GET(request: NextRequest) {
    try {
        const url = `${BACKEND_URL}/footer`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.error(`Backend API error: ${response.status} ${response.statusText}`);
            return NextResponse.json(
                { success: false, error: 'Failed to fetch footer data from backend' },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Footer API route error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
