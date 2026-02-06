'use client';

import OptimizedImage from './OptimizedImage';
import { AuthorImage as AuthorImageType, AUTHOR_IMAGES, FALLBACK_IMAGES } from '@/lib/assets';


interface AuthorImageProps {
    assetKey?: string;
    asset?: AuthorImageType;
    className?: string;
    priority?: boolean;
    sizes?: string;
    quality?: number;
    authorName?: string;
}

export default function AuthorImage({
    assetKey,
    asset,
    className = '',
    priority = false,
    sizes = '(max-width: 768px) 50px, 150px',
    quality = 75,
    authorName
}: AuthorImageProps) {
    let imageAsset: AuthorImageType;

    if (asset) {
        imageAsset = asset;
    } else if (assetKey) {
        const authorAsset = AUTHOR_IMAGES[assetKey as keyof typeof AUTHOR_IMAGES];
        if (authorAsset) {
            imageAsset = authorAsset;
        } else {
            imageAsset = FALLBACK_IMAGES.author;
        }
    } else {
        imageAsset = FALLBACK_IMAGES.author;
    }

    // Update alt text if author name is provided
    if (authorName && imageAsset.alt.includes('Unknown Author')) {
        imageAsset = {
            ...imageAsset,
            alt: `${authorName} - Author`
        };
    }

    return (
        <OptimizedImage
            asset={imageAsset}
            className={`author-image ${className}`}
            priority={priority}
            sizes={sizes}
            quality={quality}
        />
    );
} 