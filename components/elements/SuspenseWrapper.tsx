"use client"

import { Suspense, ReactNode } from 'react'
import SkeletonLoader from './SkeletonLoader'

interface SuspenseWrapperProps {
    children: ReactNode
    fallback?: ReactNode
    skeletonType?: 'article' | 'list' | 'grid' | 'text' | 'image'
    skeletonCount?: number
    className?: string
}

export default function SuspenseWrapper({
    children,
    fallback,
    skeletonType = 'article',
    skeletonCount = 1,
    className = ''
}: SuspenseWrapperProps) {
    const defaultFallback = (
        <SkeletonLoader
            type={skeletonType}
            count={skeletonCount}
            className={className}
        />
    )

    return (
        <Suspense fallback={fallback || defaultFallback}>
            {children}
        </Suspense>
    )
} 