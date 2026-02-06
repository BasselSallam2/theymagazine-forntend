'use client';

import React, { createContext, useContext } from 'react';
import { useTheme } from '@/hooks/useSyncExternalStore';
import { useThemeStyles } from '@/hooks/useInsertionEffect';

interface ThemeContextType {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: 'light' | 'dark';
}

export function ThemeProvider({
    children,
    defaultTheme = 'light'
}: ThemeProviderProps) {
    const themeHook = useTheme();

    // Apply theme styles using useInsertionEffect
    useThemeStyles(themeHook.theme);

    // Set initial theme
    React.useEffect(() => {
        if (defaultTheme !== themeHook.theme) {
            themeHook.setTheme(defaultTheme);
        }
    }, [defaultTheme, themeHook]);

    return (
        <ThemeContext.Provider value={themeHook}>
            <div data-theme={themeHook.theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
}
