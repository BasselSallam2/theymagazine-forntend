"use client"

import { Suspense, lazy } from 'react'
import SkeletonLoader from '@/components/elements/SkeletonLoader'

// Custom video modal component using react-player (React 19 compatible)
export const LazyModalVideo = lazy(() => {
    const VideoModal = ({ isOpen, channel, videoId, onClose }: any) => {
        if (!isOpen) return null
        
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative w-full max-w-4xl mx-4">
                    <button
                        onClick={onClose}
                        className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
                    >
                        ×
                    </button>
                    <div className="relative pt-[56.25%]">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            className="absolute top-0 left-0 w-full h-full"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        )
    }
    
    return Promise.resolve({ default: VideoModal })
})

// For non-React components, we need to create wrapper components
export const LazyIsotope = lazy(() => {
    const IsotopeWrapper = () => null // Empty component since Isotope is used imperatively
    return Promise.resolve({ default: IsotopeWrapper })
})

export const LazyAOS = lazy(() => {
    const AOSWrapper = () => null // Empty component since AOS is used imperatively  
    return Promise.resolve({ default: AOSWrapper })
})

// Lazy load section components
export const LazySection1 = lazy(() => import('@/components/sections/home/Section1'))
export const LazySection6 = lazy(() => import('@/components/sections/home/Section6'))
export const LazyHome2Section1 = lazy(() => import('@/components/sections/home-2/Section1'))

// Lazy load layout components
export const LazyOffcanvasSidebar = lazy(() => import('@/components/layout/OffcanvasSidebar'))
export const LazyMobileMenu = lazy(() => import('@/components/layout/MobileMenu'))

// Generic lazy wrapper
interface LazyWrapperProps {
    children: React.ReactNode
    fallback?: React.ReactNode
    className?: string
}

export function LazyWrapper({ children, fallback, className = '' }: LazyWrapperProps) {
    const defaultFallback = (
        <div className={`lazy-skeleton ${className}`}>
            <SkeletonLoader type="grid" count={2} />
        </div>
    )

    return (
        <Suspense fallback={fallback || defaultFallback}>
            {children}
        </Suspense>
    )
}

// Specific lazy components with proper fallbacks
export function LazySliderSection({ children, ...props }: any) {
    return (
        <LazyWrapper fallback={<SkeletonLoader type="grid" count={3} />}>
            <LazySection1 {...props}>{children}</LazySection1>
        </LazyWrapper>
    )
}

export function LazyTestimonialSection({ children, ...props }: any) {
    return (
        <LazyWrapper fallback={<SkeletonLoader type="list" count={3} />}>
            <LazySection6 {...props}>{children}</LazySection6>
        </LazyWrapper>
    )
} 