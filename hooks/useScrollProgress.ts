import { useState, useEffect } from 'react'

export function useScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollProgress = (window.scrollY / docHeight) * 100
            setProgress(scrollProgress)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return progress
} 