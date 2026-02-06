import { useSyncExternalStore } from 'react';

interface Store<T> {
    getState: () => T;
    subscribe: (listener: () => void) => () => void;
}

export function useExternalStore<T>(store: Store<T>): T {
    return useSyncExternalStore(
        (listener) => store.subscribe(listener),
        () => store.getState(),
        () => store.getState()
    );
}

// Example store implementation for theme
class ThemeStore {
    private listeners: Set<() => void> = new Set();
    private state: { theme: 'light' | 'dark' } = { theme: 'light' };

    getState() {
        return this.state;
    }

    subscribe(listener: () => void) {
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    }

    setTheme(theme: 'light' | 'dark') {
        this.state.theme = theme;
        this.listeners.forEach(listener => listener());
    }
}

// Global theme store instance
export const themeStore = new ThemeStore();

// Hook for theme management
export function useTheme() {
    const state = useExternalStore(themeStore);

    return {
        theme: state.theme,
        setTheme: (theme: 'light' | 'dark') => themeStore.setTheme(theme),
        toggleTheme: () => themeStore.setTheme(state.theme === 'light' ? 'dark' : 'light')
    };
} 