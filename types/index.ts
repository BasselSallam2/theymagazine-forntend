// =============================================================================
// CORE DATA MODELS
// =============================================================================

export interface Article {
    id: string | number;
    title: string;
    content: string;
    excerpt?: string;
    slug: string;
    publishedAt: Date | string;
    updatedAt?: Date | string;
    featuredImage?: string;
    thumbnailImage?: string;
    readTime?: number;
    views?: number;
    likes?: number;
    status: 'published' | 'draft' | 'archived';
    author: Author;
    category: Category;
    tags?: Tag[];
    metaTitle?: string;
    metaDescription?: string;
}

export interface Author {
    id: string | number;
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
    slug: string;
    socialLinks?: {
        twitter?: string;
        facebook?: string;
        linkedin?: string;
        instagram?: string;
        pinterest?: string;
        website?: string;
    };
    articlesCount?: number;
    joinedAt?: Date | string;
}

export interface Category {
    id: string | number;
    name: string;
    slug: string;
    description?: string;
    color?: string;
    icon?: string;
    parentId?: string | number;
    articlesCount?: number;
}

export interface Tag {
    id: string | number;
    name: string;
    slug: string;
    color?: string;
    articlesCount?: number;
}

// =============================================================================
// COMPONENT PROPS INTERFACES
// =============================================================================

// Re-export from components.ts for backward compatibility
export interface BaseComponentProps {
    className?: string;
    style?: React.CSSProperties;
}

export interface ArticleCardProps extends BaseComponentProps {
    article: Article;
    variant?: 'default' | 'featured' | 'compact' | 'list' | 'grid';
    showAuthor?: boolean;
    showCategory?: boolean;
    showDate?: boolean;
    showExcerpt?: boolean;
    showReadTime?: boolean;
    imageSize?: 'small' | 'medium' | 'large';
}

export interface AuthorCardProps extends BaseComponentProps {
    author: Author;
    variant?: 'default' | 'compact' | 'detailed';
    showBio?: boolean;
    showSocialLinks?: boolean;
    showArticlesCount?: boolean;
}

export interface CategoryCardProps extends BaseComponentProps {
    category: Category;
    variant?: 'default' | 'compact' | 'featured';
    showDescription?: boolean;
    showArticlesCount?: boolean;
    showIcon?: boolean;
}

// =============================================================================
// SECTION COMPONENT PROPS
// =============================================================================

export interface HeroSectionProps extends BaseComponentProps {
    articles?: Article[];
    title?: string;
    subtitle?: string;
    showSlider?: boolean;
    autoPlay?: boolean;
    slidesToShow?: number;
}

export interface ArticleListSectionProps extends BaseComponentProps {
    articles: Article[];
    title?: string;
    variant?: 'grid' | 'list' | 'masonry';
    columns?: 1 | 2 | 3 | 4;
    showPagination?: boolean;
    showLoadMore?: boolean;
    itemsPerPage?: number;
}

export interface CategorySectionProps extends BaseComponentProps {
    categories: Category[];
    title?: string;
    variant?: 'grid' | 'list' | 'slider';
    showAll?: boolean;
}

export interface CategoryListHeaderProps extends BaseComponentProps {
    categoryName?: string;
    breadcrumbItems?: Array<{
        label: string;
        href: string;
        isCurrent?: boolean;
    }>;
    subCategories?: Array<{
        name: string;
        href: string;
    }>;
    className?: string;
}

export interface CategoryListContentProps extends BaseComponentProps {
    featuredArticle?: Article & {
        isLive?: boolean;
    };
    categoryArticles?: Record<string, (Article & {
        isLive?: boolean;
    })[]>;
    pagination?: {
        currentPage: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
    className?: string;
}

export interface CategoryMasonryProps extends BaseComponentProps {
    articles?: Article[];
    breakpoints?: {
        default: number;
        1024: number;
        768: number;
        480: number;
    };
    className?: string;
}

export interface ContactSectionProps extends BaseComponentProps {
    title?: string;
    breadcrumb?: {
        home: string;
        current: string;
    };
    companyInfo?: {
        name: string;
        description: string;
    };
    contactInfo?: {
        address: string;
        phone: string;
        generalEmail: string;
    };
    advertiseInfo?: {
        generalEmail: string;
        salesEmail: string;
        description: string;
    };
    eventInfo?: {
        description: string;
        email: string;
    };
    socialLinks?: Array<{
        name: string;
        href: string;
        icon: string;
        className: string;
    }>;
    advertisement?: {
        image: string;
        href: string;
        alt: string;
    };
    formConfig?: {
        namePlaceholder: string;
        emailPlaceholder: string;
        phonePlaceholder: string;
        messagePlaceholder: string;
        submitText: string;
    };
    className?: string;
}

export interface Home2HeroProps extends BaseComponentProps {
    sliderArticles?: (Article & {
        hasFormat?: boolean;
        formatIcon?: string;
    })[];
    sidebarArticles?: (Article & {
        isLive?: boolean;
    })[];
    sliderSettings?: {
        effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
        autoplay?: boolean;
        autoplayDelay?: number;
        pagination?: boolean;
        navigation?: boolean;
        loop?: boolean;
        slidesPerView?: number;
        spaceBetween?: number;
        breakpoints?: {
            [key: number]: {
                slidesPerView: number;
                spaceBetween: number;
            };
        };
    };
}

export interface Home2HighlightProps extends BaseComponentProps {
    title?: string;
    articles?: (Article & {
        hasFormat?: boolean;
        formatIcon?: string;
    })[];
}

export interface Home2EditorPickedProps extends BaseComponentProps {
    title?: string;
    mainArticles?: (Article & {
        hasVideo?: boolean;
        videoUrl?: string;
    })[];
    sidebarArticles?: Article[];
}

export interface AuthorSectionProps extends BaseComponentProps {
    authors: Author[];
    title?: string;
    variant?: 'grid' | 'list' | 'slider';
    showAll?: boolean;
}

// =============================================================================
// LAYOUT COMPONENT PROPS
// =============================================================================

export interface HeaderProps extends BaseComponentProps {
    variant?: 'default' | 'minimal' | 'transparent';
    showSearch?: boolean;
    showSocialLinks?: boolean;
    logo?: string;
    menuItems?: MenuItem[];
}

export interface FooterProps extends BaseComponentProps {
    variant?: 'default' | 'minimal';
    showSocialLinks?: boolean;
    showNewsletter?: boolean;
    logo?: string;
    copyrightText?: string;
}

export interface SidebarProps extends BaseComponentProps {
    position?: 'left' | 'right';
    sticky?: boolean;
    widgets?: SidebarWidget[];
}

export interface MenuItem {
    id: string;
    label: string;
    href: string;
    icon?: string;
    children?: MenuItem[];
    isActive?: boolean;
    isExternal?: boolean;
}

export interface SidebarWidget {
    id: string;
    type: 'recent-posts' | 'popular-posts' | 'categories' | 'tags' | 'newsletter' | 'social' | 'custom';
    title?: string;
    data?: any;
    settings?: Record<string, any>;
}

// =============================================================================
// FORM INTERFACES
// =============================================================================

export interface ContactFormData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export interface NewsletterFormData {
    email: string;
    name?: string;
}

export interface SearchFormData {
    query: string;
    category?: string;
    author?: string;
    dateFrom?: Date | string;
    dateTo?: Date | string;
}

export interface CommentFormData {
    name: string;
    email: string;
    website?: string;
    comment: string;
    parentId?: string | number;
}

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    meta?: {
        total?: number;
        page?: number;
        perPage?: number;
        totalPages?: number;
    };
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
    meta: {
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type ThemeMode = 'light' | 'dark' | 'auto';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export type SortOrder = 'asc' | 'desc';

export type ArticleSortBy = 'publishedAt' | 'title' | 'views' | 'likes' | 'updatedAt';

// =============================================================================
// EVENT HANDLER TYPES
// =============================================================================

export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type SubmitHandler<T = any> = (data: T) => void | Promise<void>;
export type ChangeHandler = (value: string) => void;
export type SearchHandler = (query: string, filters?: Record<string, any>) => void; 