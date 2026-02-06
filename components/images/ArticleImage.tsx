'use client';

import OptimizedImage from './OptimizedImage';
import { ArticleImage as ArticleImageType, NEWS_IMAGES, THUMBNAIL_IMAGES, FALLBACK_IMAGES } from '@/lib/assets';


interface ArticleImageProps {
    assetKey?: string;
    asset?: ArticleImageType;
    className?: string;
    priority?: boolean;
    sizes?: string;
    quality?: number;
    isThumbnail?: boolean;
}

export default function ArticleImage({
    assetKey,
    asset,
    className = '',
    priority = false,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality = 75,
    isThumbnail = false
}: ArticleImageProps) {
    let imageAsset: ArticleImageType;

    if (asset) {
        imageAsset = asset;
    } else if (assetKey) {
        const newsAsset = NEWS_IMAGES[assetKey as keyof typeof NEWS_IMAGES];
        const thumbAsset = THUMBNAIL_IMAGES[assetKey as keyof typeof THUMBNAIL_IMAGES];

        if (isThumbnail && thumbAsset) {
            imageAsset = thumbAsset;
        } else if (newsAsset) {
            imageAsset = newsAsset;
        } else {
            imageAsset = isThumbnail ? FALLBACK_IMAGES.thumbnail : FALLBACK_IMAGES.article;
        }
    } else {
        imageAsset = isThumbnail ? FALLBACK_IMAGES.thumbnail : FALLBACK_IMAGES.article;
    }

    return (
        <OptimizedImage
            asset={imageAsset}
            className={`article-image ${isThumbnail ? 'thumbnail' : 'featured'} ${className}`}
            priority={priority}
            sizes={sizes}
            quality={quality}
        />
    );
} 