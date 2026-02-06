"use client"

import React from 'react'

interface SkeletonLoaderProps {
    type?: 'article' | 'list' | 'grid' | 'text' | 'image'
    count?: number
    className?: string
}

export default function SkeletonLoader({
    type = 'article',
    count = 1,
    className = ''
}: SkeletonLoaderProps) {
    const renderSkeleton = () => {
        switch (type) {
            case 'article':
                return (
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                        <div className="space-y-3">
                            <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                            <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                            <div className="bg-gray-200 h-4 rounded w-5/6"></div>
                        </div>
                    </div>
                )

            case 'list':
                return (
                    <div className="animate-pulse space-y-4">
                        {Array.from({ length: count }).map((_, i) => (
                            <div key={i} className="flex space-x-4">
                                <div className="bg-gray-200 h-16 w-16 rounded"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                                    <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )

            case 'grid':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: count }).map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                                <div className="space-y-2">
                                    <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                                    <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )

            case 'text':
                return (
                    <div className="animate-pulse space-y-3">
                        {Array.from({ length: count }).map((_, i) => (
                            <div key={i} className="bg-gray-200 h-4 rounded w-full"></div>
                        ))}
                    </div>
                )

            case 'image':
                return (
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-64 rounded-lg"></div>
                    </div>
                )

            default:
                return <div className="bg-gray-200 h-32 rounded animate-pulse"></div>
        }
    }

    return (
        <div className={className}>
            {renderSkeleton()}
        </div>
    )
} 