import React from 'react';
import { useDeferredSearch } from '@/hooks/useDeferredSearch';

interface DeferredSearchInputProps<T> {
    items: T[];
    searchKey: keyof T | ((item: T) => string);
    onResultsChange?: (results: T[]) => void;
    placeholder?: string;
    className?: string;
    debounceMs?: number;
}

export default function DeferredSearchInput<T>({
    items,
    searchKey,
    onResultsChange,
    placeholder = "Search...",
    className = "",
    debounceMs = 300
}: DeferredSearchInputProps<T>) {
    const {
        searchTerm,
        setSearchTerm,
        filteredItems,
        isPending
    } = useDeferredSearch({
        items,
        searchKey,
        debounceMs
    });

    // Notify parent of results change
    React.useEffect(() => {
        onResultsChange?.(filteredItems);
    }, [filteredItems, onResultsChange]);

    return (
        <div className={`deferred-search ${className}`}>
            <div className="search-input-wrapper">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={placeholder}
                    className="search-input"
                />
                {isPending && (
                    <div className="search-loading">
                        <div className="loading-spinner" />
                    </div>
                )}
            </div>
            <div className="search-results-count">
                {searchTerm && (
                    <span className="results-text">
                        {isPending ? 'Searching...' : `${filteredItems.length} results`}
                    </span>
                )}
            </div>
        </div>
    );
} 