'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AssetType, FALLBACK_IMAGES } from '@/lib/assets';
import { ArticleImage, AuthorImage, UIImage } from "@/components/images";


interface OptimizedImageProps {
    asset: AssetType;
    className?: string;
    priority?: boolean;
    sizes?: string;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    onLoad?: () => void;
    onError?: () => void;
}

export default function OptimizedImage({
    asset,
    className = '',
    priority = false,
    sizes = '100vw',
    quality = 75,
    placeholder = 'empty',
    onLoad,
    onError
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        onLoad?.();
    };

    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
        onError?.();
    };

    // Use fallback image if there's an error
    const imageAsset = hasError ? FALLBACK_IMAGES.article : asset;

    return (
        <div className={`image-container ${isLoading ? 'loading' : ''} ${className}`}>
            <Image
                src={imageAsset.src}
                alt={imageAsset.alt}
                width={imageAsset.width}
                height={imageAsset.height}
                priority={priority || (imageAsset as any).priority}
                sizes={sizes}
                quality={quality}
                placeholder={placeholder}
                className={`optimized-image ${isLoading ? 'loading' : 'loaded'}`}
                onLoad={handleLoad}
                onError={handleError}
            />
            {isLoading && (
                <div className="image-skeleton">
                    <div className="skeleton-placeholder" />
                </div>
            )}
        </div>
    );
} 