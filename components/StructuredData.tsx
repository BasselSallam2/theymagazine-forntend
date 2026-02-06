'use client';

import { generateStructuredData } from '@/lib/metadata';

interface StructuredDataProps {
    type: 'article' | 'author' | 'organization' | 'website';
    data?: any;
    // Alternative props for article type
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: any;
    category?: any;
}

export default function StructuredData(props: StructuredDataProps) {
    const { type, data, ...articleProps } = props;

    // If data is provided directly, use it
    // Otherwise, construct data from individual props (for article type)
    const structuredData = data
        ? generateStructuredData(type, data)
        : generateStructuredData(type, articleProps);

    if (!structuredData) {
        return null;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
} 