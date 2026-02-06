"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SkeletonLoader from "@/components/elements/SkeletonLoader";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface ModernSliderProps {
    children: React.ReactNode;
    settings?: {
        slidesPerView?: number;
        spaceBetween?: number;
        loop?: boolean;
        autoplay?: boolean;
        autoplayDelay?: number;
        effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
        navigation?: boolean;
        pagination?: boolean;
        fadeEffect?: {
            crossFade: boolean;
        };
        breakpoints?: {
            [key: number]: {
                slidesPerView: number;
                spaceBetween: number;
            };
        };
    };
    className?: string;
    fallback?: React.ReactNode;
}

export default function ModernSlider({ children, settings = {}, className = "", fallback }: ModernSliderProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        // Simulate loading delay for better UX
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const defaultFallback = (
        <div className={`slider-skeleton ${className}`}>
            <SkeletonLoader type="grid" count={3} />
        </div>
    );

    if (hasError) {
        return <div className="slider-error">Failed to load slider</div>;
    }

    // Default settings
    const defaultSettings = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: settings.autoplay !== false,
        autoplayDelay: settings.autoplayDelay || 3000,
        effect: settings.effect || "slide",
        navigation: settings.navigation !== false,
        pagination: settings.pagination !== false,
        fadeEffect: settings.fadeEffect || { crossFade: true },
        breakpoints: settings.breakpoints || {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        onSwiper: (swiper: SwiperType) => {
            swiperRef.current = swiper;
        },
    };

    // Merge custom settings with defaults
    const mergedSettings = { ...defaultSettings, ...settings };

    // Extract only valid Swiper props
    const swiperProps = {
        slidesPerView: mergedSettings.slidesPerView,
        spaceBetween: mergedSettings.spaceBetween,
        loop: mergedSettings.loop,
        effect: mergedSettings.effect,
        fadeEffect: mergedSettings.fadeEffect,
        breakpoints: mergedSettings.breakpoints,
        modules: mergedSettings.modules,
        onSwiper: mergedSettings.onSwiper,
        className: `modern-slider ${className}`,
        navigation: mergedSettings.navigation,
        pagination: mergedSettings.pagination,
        autoplay: mergedSettings.autoplay
            ? {
                  delay: mergedSettings.autoplayDelay,
                  disableOnInteraction: false,
              }
            : false,
    };

    return <>{isLoaded ? <Swiper {...swiperProps}>{children}</Swiper> : fallback || defaultFallback}</>;
}

// Export SwiperSlide for convenience
export { SwiperSlide };
