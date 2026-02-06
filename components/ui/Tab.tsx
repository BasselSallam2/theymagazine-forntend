"use client"

import { useState, useEffect } from 'react'
import { TabComponentProps } from '@/types/components'

export default function Tab({
    tabs,
    activeTab = 0,
    onTabChange,
    className = '',
    variant = 'default'
}: TabComponentProps) {
    const [activeIndex, setActiveIndex] = useState(activeTab)

    useEffect(() => {
        setActiveIndex(activeTab)
    }, [activeTab])

    const handleTabClick = (index: number) => {
        setActiveIndex(index)
        onTabChange?.(index)
    }

    return (
        <div className={`tab-container ${className}`}>
            {/* Tab Navigation */}
            <ul className={`nav nav-tabs ${variant === 'pills' ? 'nav-pills' : ''}`} role="tablist">
                {tabs.map((tab, index) => (
                    <li key={index} className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                            type="button"
                            role="tab"
                            aria-selected={activeIndex === index}
                            aria-controls={`tab-${index}`}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-pane fade ${activeIndex === index ? 'show active' : ''}`}
                        id={`tab-${index}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${index}-tab`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
} 