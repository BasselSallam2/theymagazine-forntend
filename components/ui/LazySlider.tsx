"use client";

import { Suspense, lazy, useRef, useEffect, useState } from "react";
import SkeletonLoader from "@/components/elements/SkeletonLoader";

// Lazy load ModernSlider
const ModernSlider = lazy(() => import("./ModernSlider"));

interface LazySliderProps {
    children: React.ReactNode;
    settings?: any;
    className?: string;
    fallback?: React.ReactNode;
}

export default function LazySlider({ children, settings = {}, className = "", fallback }: LazySliderProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const sliderRef = useRef<any>(null);

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

    return (
        <Suspense fallback={fallback || defaultFallback}>
            {isLoaded ? (
                <ModernSlider settings={settings} className={className}>
                    {children}
                </ModernSlider>
            ) : (
                fallback || defaultFallback
            )}
        </Suspense>
    );
}
