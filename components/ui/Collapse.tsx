"use client"

import { useState, useRef, useEffect } from 'react'
import { CollapseComponentProps } from '@/types/components'

export default function Collapse({
    children,
    isOpen = false,
    onToggle,
    className = '',
    id
}: CollapseComponentProps) {
    const [isExpanded, setIsExpanded] = useState(isOpen)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsExpanded(isOpen)
    }, [isOpen])

    const handleToggle = () => {
        const newState = !isExpanded
        setIsExpanded(newState)
        onToggle?.(newState)
    }

    useEffect(() => {
        if (contentRef.current) {
            if (isExpanded) {
                contentRef.current.style.height = `${contentRef.current.scrollHeight}px`
                contentRef.current.classList.add('show')
            } else {
                contentRef.current.style.height = '0px'
                contentRef.current.classList.remove('show')
            }
        }
    }, [isExpanded])

    return (
        <div className={`collapse ${isExpanded ? 'show' : ''} ${className}`} id={id}>
            <div
                ref={contentRef}
                className="collapse-content"
                style={{
                    height: isExpanded ? 'auto' : '0px',
                    overflow: 'hidden',
                    transition: 'height 0.35s ease'
                }}
            >
                {children}
            </div>
        </div>
    )
} 