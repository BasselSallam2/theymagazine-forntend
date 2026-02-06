// Asset Registry - Centralized management for all images and assets
export interface AssetConfig {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    sizes?: string;
}

export interface ArticleImage extends AssetConfig {
    type: 'article';
    category?: string;
    priority?: boolean;
}

export interface AuthorImage extends AssetConfig {
    type: 'author';
    authorName: string;
}

export interface CategoryImage extends AssetConfig {
    type: 'category';
    categoryName: string;
}

export interface UIImage extends AssetConfig {
    type: 'ui';
    purpose: 'icon' | 'logo' | 'background' | 'ad';
}

export type AssetType = ArticleImage | AuthorImage | CategoryImage | UIImage;

// News Images
export const NEWS_IMAGES = {
    // Featured articles
    news1: {
        src: '/assets/imgs/news/news-1.jpg',
        alt: 'Breaking news headline',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'politics'
    },
    news2: {
        src: '/assets/imgs/news/news-2.jpg',
        alt: 'Technology innovation story',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'technology'
    },
    news3: {
        src: '/assets/imgs/news/news-3.jpg',
        alt: 'Business market update',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'business'
    },
    news4: {
        src: '/assets/imgs/news/news-4.jpg',
        alt: 'Sports championship coverage',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'sports'
    },
    news5: {
        src: '/assets/imgs/news/news-5.jpg',
        alt: 'Entertainment industry news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'entertainment'
    },
    news6: {
        src: '/assets/imgs/news/news-6.jpg',
        alt: 'Health and wellness article',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'health'
    },
    news7: {
        src: '/assets/imgs/news/news-7.jpg',
        alt: 'Science discovery report',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'science'
    },
    news8: {
        src: '/assets/imgs/news/news-8.jpg',
        alt: 'Environmental news coverage',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'environment'
    },
    news9: {
        src: '/assets/imgs/news/news-9.jpg',
        alt: 'Education sector update',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'education'
    },
    news10: {
        src: '/assets/imgs/news/news-10.jpg',
        alt: 'International relations news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'international'
    },
    news11: {
        src: '/assets/imgs/news/news-11.jpg',
        alt: 'Local community news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'local'
    },
    news12: {
        src: '/assets/imgs/news/news-12.jpg',
        alt: 'Weather and climate update',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'weather'
    },
    news13: {
        src: '/assets/imgs/news/news-13.jpg',
        alt: 'Technology startup news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'technology'
    },
    news14: {
        src: '/assets/imgs/news/news-14.jpg',
        alt: 'Financial market analysis',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'finance'
    },
    news15: {
        src: '/assets/imgs/news/news-15.jpg',
        alt: 'Cultural events coverage',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'culture'
    },
    news16: {
        src: '/assets/imgs/news/news-16.jpg',
        alt: 'Political analysis article',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'politics'
    },
    news17: {
        src: '/assets/imgs/news/news-17.jpg',
        alt: 'Social issues report',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'social'
    },
    news18: {
        src: '/assets/imgs/news/news-18.jpg',
        alt: 'Economic policy news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'economy'
    },
    news19: {
        src: '/assets/imgs/news/news-19.jpg',
        alt: 'Healthcare industry update',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'healthcare'
    },
    news20: {
        src: '/assets/imgs/news/news-20.jpg',
        alt: 'Transportation and infrastructure',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'transportation'
    },
    news21: {
        src: '/assets/imgs/news/news-21.jpg',
        alt: 'Energy sector news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'energy'
    },
    news22: {
        src: '/assets/imgs/news/news-22.jpg',
        alt: 'Real estate market update',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'real-estate'
    },
    news23: {
        src: '/assets/imgs/news/news-23.jpg',
        alt: 'Technology trends analysis',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'technology'
    },
    news24: {
        src: '/assets/imgs/news/news-24.jpg',
        alt: 'Global trade news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'trade'
    },
    news25: {
        src: '/assets/imgs/news/news-25.jpg',
        alt: 'Innovation and research news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'innovation'
    },
    news26: {
        src: '/assets/imgs/news/news-26.jpg',
        alt: 'Digital transformation news',
        width: 800,
        height: 600,
        type: 'article' as const,
        category: 'digital'
    }
};

// Thumbnail Images
export const THUMBNAIL_IMAGES = {
    thumb1: {
        src: '/assets/imgs/news/thumb-1.jpg',
        alt: 'News thumbnail 1',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb2: {
        src: '/assets/imgs/news/thumb-2.jpg',
        alt: 'News thumbnail 2',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb3: {
        src: '/assets/imgs/news/thumb-3.jpg',
        alt: 'News thumbnail 3',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb4: {
        src: '/assets/imgs/news/thumb-4.jpg',
        alt: 'News thumbnail 4',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb5: {
        src: '/assets/imgs/news/thumb-5.jpg',
        alt: 'News thumbnail 5',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb6: {
        src: '/assets/imgs/news/thumb-6.jpg',
        alt: 'News thumbnail 6',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb7: {
        src: '/assets/imgs/news/thumb-7.jpg',
        alt: 'News thumbnail 7',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb8: {
        src: '/assets/imgs/news/thumb-8.jpg',
        alt: 'News thumbnail 8',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb9: {
        src: '/assets/imgs/news/thumb-9.jpg',
        alt: 'News thumbnail 9',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb10: {
        src: '/assets/imgs/news/thumb-10.jpg',
        alt: 'News thumbnail 10',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb11: {
        src: '/assets/imgs/news/thumb-11.jpg',
        alt: 'News thumbnail 11',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb12: {
        src: '/assets/imgs/news/thumb-12.jpg',
        alt: 'News thumbnail 12',
        width: 80,
        height: 80,
        type: 'article' as const
    },
    thumb13: {
        src: '/assets/imgs/news/thumb-13.jpg',
        alt: 'News thumbnail 13',
        width: 80,
        height: 80,
        type: 'article' as const
    }
};

// Author Images
export const AUTHOR_IMAGES = {
    author1: {
        src: '/assets/imgs/authors/author-1.jpg',
        alt: 'John Smith - Senior Political Reporter',
        width: 150,
        height: 150,
        type: 'author' as const,
        authorName: 'John Smith'
    },
    author2: {
        src: '/assets/imgs/authors/author-2.jpg',
        alt: 'Sarah Johnson - Technology Correspondent',
        width: 150,
        height: 150,
        type: 'author' as const,
        authorName: 'Sarah Johnson'
    },
    author3: {
        src: '/assets/imgs/authors/author-3.jpg',
        alt: 'Michael Brown - Business Analyst',
        width: 150,
        height: 150,
        type: 'author' as const,
        authorName: 'Michael Brown'
    },
    author4: {
        src: '/assets/imgs/authors/author-4.jpg',
        alt: 'Emily Davis - Sports Journalist',
        width: 150,
        height: 150,
        type: 'author' as const,
        authorName: 'Emily Davis'
    }
};

// UI Images
export const UI_IMAGES = {
    // Logo and branding
    logo: {
        src: '/assets/imgs/theme/favicon.png',
        alt: 'NewsBoard Logo',
        width: 32,
        height: 32,
        type: 'ui' as const,
        purpose: 'logo' as const
    },
    favicon: {
        src: '/assets/imgs/theme/favicon.svg',
        alt: 'NewsBoard Favicon',
        width: 16,
        height: 16,
        type: 'ui' as const,
        purpose: 'icon' as const
    },
    // Background patterns
    pattern: {
        src: '/assets/imgs/theme/pattern.jpg',
        alt: 'Decorative background pattern',
        width: 1920,
        height: 1080,
        type: 'ui' as const,
        purpose: 'background' as const
    },
    // Advertisement images
    ad1: {
        src: '/assets/imgs/ads/ads-1.jpg',
        alt: 'Advertisement 1',
        width: 300,
        height: 250,
        type: 'ui' as const,
        purpose: 'ad' as const
    },
    ad2: {
        src: '/assets/imgs/ads/ads-2.jpg',
        alt: 'Advertisement 2',
        width: 300,
        height: 250,
        type: 'ui' as const,
        purpose: 'ad' as const
    },
    // Error pages
    error404: {
        src: '/assets/imgs/theme/404.png',
        alt: 'Page not found',
        width: 400,
        height: 300,
        type: 'ui' as const,
        purpose: 'icon' as const
    },
    // Contact page
    contact: {
        src: '/assets/imgs/marginalia-productive-work.png',
        alt: 'Contact us illustration',
        width: 600,
        height: 400,
        type: 'ui' as const,
        purpose: 'icon' as const
    }
};

// Slide Images (for carousels)
export const SLIDE_IMAGES = {
    slide1: {
        src: '/assets/imgs/news/slide-1.jpg',
        alt: 'Breaking news slide 1',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide2: {
        src: '/assets/imgs/news/slide-2.jpg',
        alt: 'Breaking news slide 2',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide3: {
        src: '/assets/imgs/news/slide-3.jpg',
        alt: 'Breaking news slide 3',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide4: {
        src: '/assets/imgs/news/slide-4.jpg',
        alt: 'Breaking news slide 4',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide5: {
        src: '/assets/imgs/news/slide-5.jpg',
        alt: 'Breaking news slide 5',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide6: {
        src: '/assets/imgs/news/slide-6.jpg',
        alt: 'Breaking news slide 6',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide7: {
        src: '/assets/imgs/news/slide-7.jpg',
        alt: 'Breaking news slide 7',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide8: {
        src: '/assets/imgs/news/slide-8.jpg',
        alt: 'Breaking news slide 8',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide9: {
        src: '/assets/imgs/news/slide-9.jpg',
        alt: 'Breaking news slide 9',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide10: {
        src: '/assets/imgs/news/slide-10.jpg',
        alt: 'Breaking news slide 10',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide11: {
        src: '/assets/imgs/news/slide-11.jpg',
        alt: 'Breaking news slide 11',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide12: {
        src: '/assets/imgs/news/slide-12.jpg',
        alt: 'Breaking news slide 12',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide13: {
        src: '/assets/imgs/news/slide-13.jpg',
        alt: 'Breaking news slide 13',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide14: {
        src: '/assets/imgs/news/slide-14.jpg',
        alt: 'Breaking news slide 14',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    },
    slide15: {
        src: '/assets/imgs/news/slide-15.jpg',
        alt: 'Breaking news slide 15',
        width: 1200,
        height: 600,
        type: 'article' as const,
        priority: true
    }
};

// Wave line SVGs
export const WAVE_LINES = {
    wave1: {
        src: '/assets/imgs/theme/wave-line-1.svg',
        alt: 'Decorative wave line 1',
        width: 100,
        height: 20,
        type: 'ui' as const,
        purpose: 'icon' as const
    },
    wave2: {
        src: '/assets/imgs/theme/wave-line-2.svg',
        alt: 'Decorative wave line 2',
        width: 100,
        height: 20,
        type: 'ui' as const,
        purpose: 'icon' as const
    }
};

// Utility functions
export function getAssetByKey(key: string): AssetType | null {
    const allAssets = {
        ...NEWS_IMAGES,
        ...THUMBNAIL_IMAGES,
        ...AUTHOR_IMAGES,
        ...UI_IMAGES,
        ...SLIDE_IMAGES,
        ...WAVE_LINES
    };

    return allAssets[key as keyof typeof allAssets] || null;
}

export function getAssetsByType(type: 'article' | 'author' | 'ui'): AssetType[] {
    const allAssets = {
        ...NEWS_IMAGES,
        ...THUMBNAIL_IMAGES,
        ...AUTHOR_IMAGES,
        ...UI_IMAGES,
        ...SLIDE_IMAGES,
        ...WAVE_LINES
    };

    return Object.values(allAssets).filter(asset => asset.type === type);
}

export function getAssetsByCategory(category: string): ArticleImage[] {
    return Object.values(NEWS_IMAGES).filter(
        asset => asset.type === 'article' && asset.category === category
    ) as ArticleImage[];
}

export function getAuthorAssets(): AuthorImage[] {
    return Object.values(AUTHOR_IMAGES) as AuthorImage[];
}

export function getUIAssets(): UIImage[] {
    return Object.values(UI_IMAGES) as UIImage[];
}

// Default fallback images
export const FALLBACK_IMAGES = {
    article: {
        src: '/assets/imgs/news/news-1.jpg',
        alt: 'Default article image',
        width: 800,
        height: 600,
        type: 'article' as const
    },
    author: {
        src: '/assets/imgs/authors/author-1.jpg',
        alt: 'Default author image',
        width: 150,
        height: 150,
        type: 'author' as const,
        authorName: 'Unknown Author'
    },
    thumbnail: {
        src: '/assets/imgs/news/thumb-1.jpg',
        alt: 'Default thumbnail',
        width: 300,
        height: 200,
        type: 'article' as const
    }
}; 