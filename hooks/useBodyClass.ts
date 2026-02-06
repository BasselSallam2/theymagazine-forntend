import { useEffect, useCallback } from 'react'

export function useBodyClass(className?: string, condition?: boolean) {
    const addClass = useCallback((classToAdd: string) => {
        document.body.classList.add(classToAdd)
    }, [])

    const removeClass = useCallback((classToRemove: string) => {
        document.body.classList.remove(classToRemove)
    }, [])

    useEffect(() => {
        if (className && condition !== undefined) {
            if (condition) {
                document.body.classList.add(className)
            } else {
                document.body.classList.remove(className)
            }

            return () => {
                document.body.classList.remove(className)
            }
        }
    }, [className, condition])

    return { addClass, removeClass }
} 