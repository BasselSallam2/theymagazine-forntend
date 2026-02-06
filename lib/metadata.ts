import { Metadata } from 'next';

// Utility function to generate structured data (JSON-LD)
export function generateStructuredData(type: 'article' | 'author' | 'organization' | 'website', data: any) {
    const baseUrl = 'https://newsboard.com';

    switch (type) {
        case 'article':
            // Handle both complete article object and individual props
            const title = data.title;
            const excerpt = data.description || data.excerpt || (data.content ? data.content.substring(0, 160) : '');
            const image = data.image || data.featuredImage || `${baseUrl}/assets/imgs/news/news-1.jpg`;
            const author = data.author;
            const publishedAt = data.publishedTime || data.publishedAt;
            const updatedAt = data.modifiedTime || data.updatedAt || publishedAt;
            const slug = data.url ? data.url.replace(`${baseUrl}/`, '') : data.slug;
            const category = data.category;
            const tags = data.tags || [];

            if (!title || !author) {
                console.warn('StructuredData: Missing required data for article', { title, author });
                return null;
            }

            return {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: title,
                description: excerpt,
                image: image,
                author: {
                    '@type': 'Person',
                    name: author.name,
                    url: `${baseUrl}/author/${author.slug}`,
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'NewsBoard',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${baseUrl}/assets/imgs/theme/favicon.png`,
                    },
                },
                datePublished: publishedAt,
                dateModified: updatedAt,
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `${baseUrl}/${slug}`,
                },
                articleSection: category?.name || 'General',
                keywords: Array.isArray(tags) ? tags.map((tag: any) => typeof tag === 'string' ? tag : tag.name).join(', ') : '',
            };

        case 'author':
            return {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: data.name,
                description: data.bio,
                image: data.avatar || `${baseUrl}/assets/imgs/authors/author-1.jpg`,
                url: `${baseUrl}/author/${data.slug}`,
                jobTitle: 'Journalist',
                worksFor: {
                    '@type': 'Organization',
                    name: 'NewsBoard',
                },
                sameAs: data.socialLinks ? Object.values(data.socialLinks).filter(Boolean) : [],
            };

        case 'organization':
            return {
                '@context': 'https://schema.org',
                '@type': 'NewsMediaOrganization',
                name: 'NewsBoard',
                url: baseUrl,
                logo: {
                    '@type': 'ImageObject',
                    url: `${baseUrl}/assets/imgs/theme/favicon.png`,
                },
                description: 'Latest news, breaking stories, and in-depth analysis from trusted journalists.',
                foundingDate: '2024',
                areaServed: 'Worldwide',
                hasCredential: true,
                ethicsPolicy: `${baseUrl}/about`,
                diversityPolicy: `${baseUrl}/about`,
                correctionsPolicy: `${baseUrl}/contact`,
            };

        case 'website':
            return {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'NewsBoard',
                url: baseUrl,
                description: 'Latest news, breaking stories, and in-depth analysis from trusted journalists.',
                publisher: {
                    '@type': 'Organization',
                    name: 'NewsBoard',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${baseUrl}/assets/imgs/theme/favicon.png`,
                    },
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                    },
                    'query-input': 'required name=search_term_string',
                },
            };

        default:
            return null;
    }
}

// Utility function to generate article metadata
export function generateArticleMetadata(article: any): Metadata {
    const baseUrl = 'https://newsboard.com';
    const publishedDate = new Date(article.publishedAt).toISOString();
    const authorName = article.author.name;
    const categoryName = article.category.name;

    return {
        title: article.title,
        description: article.excerpt || article.content.substring(0, 160),
        keywords: [categoryName, authorName, 'news', 'article', ...(article.tags?.map((tag: any) => tag.name) || [])],
        authors: [{ name: authorName }],
        category: categoryName,
        openGraph: {
            title: article.title,
            description: article.excerpt || article.content.substring(0, 160),
            type: 'article',
            publishedTime: publishedDate,
            authors: [authorName],
            section: categoryName,
            images: [
                {
                    url: article.featuredImage || `${baseUrl}/assets/imgs/news/news-1.jpg`,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt || article.content.substring(0, 160),
            images: [article.featuredImage || `${baseUrl}/assets/imgs/news/news-1.jpg`],
            creator: `@${authorName.toLowerCase().replace(/\s+/g, '')}`,
        },
        alternates: {
            canonical: `/single/${article.slug}`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        other: {
            'article:published_time': publishedDate,
            'article:author': authorName,
            'article:section': categoryName,
        },
    };
}

// Utility function to generate category metadata
export function generateCategoryMetadata(category: any, articles: any[] = []): Metadata {
    const baseUrl = 'https://newsboard.com';
    const articleCount = articles.length;

    return {
        title: `${category.name} News - Latest ${category.name} Stories`,
        description: `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis. Read ${articleCount} articles about ${category.name.toLowerCase()} on NewsBoard.`,
        keywords: [category.name, 'news', 'articles', 'stories', 'analysis', category.name.toLowerCase()],
        alternates: {
            canonical: `/category/${category.slug}`,
        },
        openGraph: {
            title: `${category.name} News - Latest ${category.name} Stories`,
            description: `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis.`,
            url: `${baseUrl}/category/${category.slug}`,
            siteName: 'NewsBoard',
            type: 'website',
            images: [
                {
                    url: `${baseUrl}/assets/imgs/news/news-1.jpg`,
                    width: 1200,
                    height: 630,
                    alt: `${category.name} News`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${category.name} News - Latest ${category.name} Stories`,
            description: `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis.`,
            images: [`${baseUrl}/assets/imgs/news/news-1.jpg`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// Utility function to generate author metadata
export function generateAuthorMetadata(author: any, articles: any[] = []): Metadata {
    const baseUrl = 'https://newsboard.com';
    const articleCount = articles.length;
    const bio = author.bio || `Read articles by ${author.name}`;

    return {
        title: `${author.name} - Author Profile and Articles`,
        description: `${bio} Discover ${articleCount} articles written by ${author.name} on NewsBoard. Expert analysis and insightful reporting.`,
        keywords: [author.name, 'author', 'journalist', 'reporter', 'articles', 'news', 'analysis'],
        authors: [{ name: author.name }],
        alternates: {
            canonical: `/author/${author.slug}`,
        },
        openGraph: {
            title: `${author.name} - Author Profile and Articles`,
            description: `${bio} Discover ${articleCount} articles written by ${author.name}.`,
            url: `${baseUrl}/author/${author.slug}`,
            siteName: 'NewsBoard',
            type: 'profile',
            images: [
                {
                    url: author.avatar || `${baseUrl}/assets/imgs/authors/author-1.jpg`,
                    width: 400,
                    height: 400,
                    alt: `${author.name} - Author`,
                },
            ],
        },
        twitter: {
            card: 'summary',
            title: `${author.name} - Author Profile and Articles`,
            description: `${bio} Discover ${articleCount} articles written by ${author.name}.`,
            images: [author.avatar || `${baseUrl}/assets/imgs/authors/author-1.jpg`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
} 