import { useEffect } from 'react';

interface StyleRule {
    selector: string;
    styles: Record<string, string>;
}

export function useDynamicStyles(rules: StyleRule[]) {
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.setAttribute('data-dynamic-styles', 'true');

        const cssText = rules
            .map(rule => {
                const styles = Object.entries(rule.styles)
                    .map(([property, value]) => `${property}: ${value};`)
                    .join(' ');
                return `${rule.selector} { ${styles} }`;
            })
            .join('\n');

        styleElement.textContent = cssText;
        document.head.appendChild(styleElement);

        return () => {
            const existingStyle = document.querySelector('[data-dynamic-styles="true"]');
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, [rules]);
}

// Hook for dynamic theme styles
export function useThemeStyles(theme: 'light' | 'dark') {
    const themeRules: StyleRule[] = [
        {
            selector: '[data-theme="light"]',
            styles: {
                '--bg-primary': '#ffffff',
                '--text-primary': '#1a1a1a',
                '--border-color': '#e5e5e5'
            }
        },
        {
            selector: '[data-theme="dark"]',
            styles: {
                '--bg-primary': '#1a1a1a',
                '--text-primary': '#ffffff',
                '--border-color': '#333333'
            }
        }
    ];

    useDynamicStyles(themeRules);
} 