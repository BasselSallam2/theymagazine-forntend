"use client"

import React from 'react'

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'white'
    className?: string
}

export default function LoadingSpinner({
    size = 'md',
    color = 'primary',
    className = ''
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    }

    const colorClasses = {
        primary: 'text-primary',
        secondary: 'text-gray-600',
        white: 'text-white'
    }

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-current ${sizeClasses[size]} ${colorClasses[color]}`}></div>
        </div>
    )
} 