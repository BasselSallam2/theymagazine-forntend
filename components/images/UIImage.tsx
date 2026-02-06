'use client';

import OptimizedImage from './OptimizedImage';
import { UIImage as UIImageType, UI_IMAGES, FALLBACK_IMAGES } from '@/lib/assets';


interface UIImageProps {
    assetKey?: string;
    asset?: UIImageType;
    className?: string;
    priority?: boolean;
    sizes?: string;
    quality?: number;
    purpose?: 'icon' | 'logo' | 'background' | 'ad';
}

export default function UIImage({
    assetKey,
    asset,
    className = '',
    priority = false,
    sizes = '100vw',
    quality = 75,
    purpose
}: UIImageProps) {
    let imageAsset: UIImageType;

    if (asset) {
        imageAsset = asset;
    } else if (assetKey) {
        const uiAsset = UI_IMAGES[assetKey as keyof typeof UI_IMAGES];
        if (uiAsset) {
            imageAsset = uiAsset;
        } else {
            // Use logo as fallback
            imageAsset = UI_IMAGES.logo;
        }
    } else {
        imageAsset = UI_IMAGES.logo;
    }

    // Filter by purpose if specified
    if (purpose && imageAsset.purpose !== purpose) {
        const filteredAssets = Object.values(UI_IMAGES).filter(asset => asset.purpose === purpose);
        if (filteredAssets.length > 0) {
            imageAsset = filteredAssets[0];
        }
    }

    return (
        <OptimizedImage
            asset={imageAsset}
            className={`ui-image ui-image-${imageAsset.purpose} ${className}`}
            priority={priority}
            sizes={sizes}
            quality={quality}
        />
    );
} 