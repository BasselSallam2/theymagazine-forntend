"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
    loadTime: number
    bundleSize: number
    imageCount: number
    scriptCount: number
}

export default function PerformanceMonitor() {
    const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Only show in development
        if (process.env.NODE_ENV !== 'development') return

        const measurePerformance = () => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            const resources = performance.getEntriesByType('resource')

            const loadTime = navigation.loadEventEnd - navigation.loadEventStart
            const images = resources.filter(r => (r as PerformanceResourceTiming).initiatorType === 'img')
            const scripts = resources.filter(r => (r as PerformanceResourceTiming).initiatorType === 'script')

            const totalSize = resources.reduce((acc, r) => acc + ((r as PerformanceResourceTiming).transferSize || 0), 0)

            setMetrics({
                loadTime,
                bundleSize: totalSize,
                imageCount: images.length,
                scriptCount: scripts.length
            })
        }

        // Measure after page load
        if (document.readyState === 'complete') {
            measurePerformance()
        } else {
            window.addEventListener('load', measurePerformance)
            return () => window.removeEventListener('load', measurePerformance)
        }
    }, [])

    // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'P') {
                setIsVisible(!isVisible)
            }
        }

        document.addEventListener('keydown', handleKeyPress)
        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [isVisible])

    if (!metrics || !isVisible) return null

    return (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg z-50 text-sm">
            <h4 className="font-bold mb-2">Performance Metrics</h4>
            <div className="space-y-1">
                <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
                <div>Bundle Size: {(metrics.bundleSize / 1024).toFixed(2)}KB</div>
                <div>Images: {metrics.imageCount}</div>
                <div>Scripts: {metrics.scriptCount}</div>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="mt-2 text-xs text-gray-400 hover:text-white"
            >
                Close (Ctrl+Shift+P)
            </button>
        </div>
    )
} 