"use client"

import Link from 'next/link'
import { BreadcrumbComponentProps } from '@/types/components'

export default function Breadcrumbs({ items, separator = '/', showHome = true, className = '' }: BreadcrumbComponentProps) {
    const breadcrumbItems = showHome
        ? [{ label: 'Home', href: '/' }, ...items]
        : items

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.label,
            'item': item.href ? `https://newsboard.com${item.href}` : undefined,
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <nav aria-label="Breadcrumb" className={`breadcrumb ${className}`}>
                <ol className="breadcrumb-list">
                    {breadcrumbItems.map((item, index) => (
                        <li key={index} className="breadcrumb-item">
                            {item.href && !item.isCurrent ? (
                                <Link href={item.href} className="breadcrumb-link">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="breadcrumb-current" aria-current="page">
                                    {item.label}
                                </span>
                            )}
                            {index < breadcrumbItems.length - 1 && (
                                <span className="breadcrumb-separator">{separator}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    )
} 