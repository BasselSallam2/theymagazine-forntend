'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Category error caught:', error);
    }, [error]);

    return (
        <div className="flex items-center justify-center pt-50">
            <div className="max-w-md w-full bg-white p-8 text-center">
                <div className="mb-6">
                    <div className="mx-auto flex items-center justify-center mb-4 error-icon">
                        <svg
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Category Error
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We encountered an issue loading the category page. Please try again or browse other categories.
                    </p>
                </div>

                <div className="mt-30 mb-30">
                    <button
                        onClick={reset}
                        className="w-full bg-blue-600 text-dark px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                        Try again
                    </button>

                    <Link
                        href="/"
                        className="block w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200"
                    >
                        Go to homepage
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <details className="mt-6 text-left">
                        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                            Error details (development only)
                        </summary>
                        <div className="mt-2 p-4 bg-gray-100 rounded-md text-xs font-mono text-gray-800 overflow-auto">
                            <p><strong>Error:</strong> {error.message}</p>
                            {error.digest && (
                                <p><strong>Digest:</strong> {error.digest}</p>
                            )}
                            <p><strong>Stack:</strong></p>
                            <pre className="whitespace-pre-wrap">{error.stack}</pre>
                        </div>
                    </details>
                )}
            </div>
        </div>
    );
} 