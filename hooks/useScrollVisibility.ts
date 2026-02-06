import { useState, useEffect } from 'react'

export function useScrollVisibility(threshold = 100) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsVisible(scrollTop > threshold)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [threshold])

    return isVisible
} 