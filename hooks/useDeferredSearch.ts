import { useState, useDeferredValue, useMemo } from 'react';

interface UseDeferredSearchOptions<T> {
    items: T[];
    searchKey: keyof T | ((item: T) => string);
    debounceMs?: number;
}

export function useDeferredSearch<T>({
    items,
    searchKey,
    debounceMs = 300
}: UseDeferredSearchOptions<T>) {
    const [searchTerm, setSearchTerm] = useState('');
    const deferredSearchTerm = useDeferredValue(searchTerm);

    const filteredItems = useMemo(() => {
        if (!deferredSearchTerm.trim()) {
            return items;
        }

        const searchLower = deferredSearchTerm.toLowerCase();

        return items.filter((item) => {
            const searchValue = typeof searchKey === 'function'
                ? searchKey(item)
                : String(item[searchKey]);

            return searchValue.toLowerCase().includes(searchLower);
        });
    }, [items, deferredSearchTerm, searchKey]);

    const isPending = searchTerm !== deferredSearchTerm;

    return {
        searchTerm,
        setSearchTerm,
        filteredItems,
        isPending,
        deferredSearchTerm
    };
} 