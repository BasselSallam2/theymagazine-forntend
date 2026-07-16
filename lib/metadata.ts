import { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

// Utility function to generate structured data (JSON-LD)
export function generateStructuredData(type: 'article' | 'author' | 'organization' | 'website', data: any) {
    const baseUrl = SITE_URL;

    switch (type) {
        case 'article': {
            const title = data.title;
            const excerpt = data.description || data.excerpt || (data.content ? data.content.substring(0, 160) : '');
            const image = data.image || data.featuredImage || `${baseUrl}/assets/imgs/news/news-1.jpg`;
            const author = data.author;
            const publishedAt = data.publishedTime || data.publishedAt;
            const updatedAt = data.modifiedTime || data.updatedAt || publishedAt;
            const articlePath = data.url
                ? String(data.url).replace(baseUrl, '').replace(/^\//, '')
                : data.slug
                  ? String(data.slug).replace(/^\//, '')
                  : '';
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
                    url: `${baseUrl}/author/${author.slug || ''}`,
                },
                publisher: {
                    '@type': 'Organization',
                    name: SITE_NAME,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${baseUrl}/assets/imgs/theme/favicon.svg`,
                    },
                },
                datePublished: publishedAt,
                dateModified: updatedAt,
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `${baseUrl}/${articlePath}`,
                },
                articleSection: category?.name || 'General',
                keywords: Array.isArray(tags) ? tags.map((tag: any) => typeof tag === 'string' ? tag : tag.name).join(', ') : '',
            };
        }

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
                    name: SITE_NAME,
                },
                sameAs: data.socialLinks ? Object.values(data.socialLinks).filter(Boolean) : [],
            };

        case 'organization':
            return {
                '@context': 'https://schema.org',
                '@type': 'NewsMediaOrganization',
                name: SITE_NAME,
                url: baseUrl,
                logo: {
                    '@type': 'ImageObject',
                    url: `${baseUrl}/assets/imgs/theme/favicon.svg`,
                },
                description: SITE_DESCRIPTION,
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
                name: SITE_NAME,
                url: baseUrl,
                description: SITE_DESCRIPTION,
                publisher: {
                    '@type': 'Organization',
                    name: SITE_NAME,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${baseUrl}/assets/imgs/theme/favicon.svg`,
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
    const baseUrl = SITE_URL;
    const publishedDate = new Date(article.publishedAt).toISOString();
    const authorName = article.author.name;
    const categoryName = article.category.name;
    const categorySlug = article.category.slug;
    const articleSlug = String(article.slug || '').replace(/^\//, '').split('/').pop();
    const path = `/${categorySlug}/${articleSlug}`;
    const title = article.seo?.title || article.title;
    const description =
        article.seo?.description ||
        article.excerpt ||
        article.description ||
        (article.content ? String(article.content).substring(0, 160) : '');
    const keywords = article.seo?.keywords?.length
        ? article.seo.keywords
        : [categoryName, authorName, 'news', 'article', SITE_NAME, ...(article.tags?.map((tag: any) => typeof tag === 'string' ? tag : tag.name) || [])];

    return {
        title,
        description,
        keywords,
        authors: [{ name: authorName }],
        category: categoryName,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${baseUrl}${path}`,
            siteName: SITE_NAME,
            publishedTime: publishedDate,
            authors: [authorName],
            section: categoryName,
            images: [
                {
                    url: article.featuredImage || `${baseUrl}/assets/imgs/news/news-1.jpg`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [article.featuredImage || `${baseUrl}/assets/imgs/news/news-1.jpg`],
            creator: `@${authorName.toLowerCase().replace(/\s+/g, '')}`,
        },
        alternates: {
            canonical: path,
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
    const baseUrl = SITE_URL;
    const articleCount = articles.length;

    return {
        title: `${category.name} News - Latest ${category.name} Stories`,
        description: `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis. Read ${articleCount} articles about ${category.name.toLowerCase()} on ${SITE_NAME}.`,
        keywords: [category.name, 'news', 'articles', 'stories', 'analysis', category.name.toLowerCase(), SITE_NAME],
        alternates: {
            canonical: `/category/${category.slug}`,
        },
        openGraph: {
            title: `${category.name} News - Latest ${category.name} Stories`,
            description: `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis.`,
            url: `${baseUrl}/category/${category.slug}`,
            siteName: SITE_NAME,
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
    const baseUrl = SITE_URL;
    const articleCount = articles.length;
    const bio = author.bio || `Read articles by ${author.name}`;

    return {
        title: `${author.name} - Author Profile and Articles`,
        description: `${bio} Discover ${articleCount} articles written by ${author.name} on ${SITE_NAME}. Expert analysis and insightful reporting.`,
        keywords: [author.name, 'author', 'journalist', 'reporter', 'articles', 'news', 'analysis', SITE_NAME],
        authors: [{ name: author.name }],
        alternates: {
            canonical: `/author/${author.slug}`,
        },
        openGraph: {
            title: `${author.name} - Author Profile and Articles`,
            description: `${bio} Discover ${articleCount} articles written by ${author.name}.`,
            url: `${baseUrl}/author/${author.slug}`,
            siteName: SITE_NAME,
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
