'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    useEffect(() => {
        // Log the critical error to an error reporting service
        console.error('CRITICAL ERROR - Global error boundary triggered:', error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-red-50">
                    <div className="max-w-md w-full bg-white p-8 text-center border-2 border-red-200">
                        <div className="mb-6">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                                <svg
                                    className="h-8 w-8 text-red-600"
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
                            <h1 className="text-3xl font-bold text-red-900 mb-3">
                                Critical Error
                            </h1>
                            <p className="text-red-700 mb-6">
                                A critical error has occurred in the application. We apologize for the inconvenience.
                            </p>
                        </div>

                        <div className="mt-30 mb-30">
                            <button
                                onClick={reset}
                                className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
                            >
                                Try to recover
                            </button>

                            <button
                                onClick={() => window.location.href = '/'}
                                className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
                            >
                                Go to homepage
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
                            >
                                Reload page
                            </button>
                        </div>

                        {process.env.NODE_ENV === 'development' && (
                            <details className="mt-6 text-left">
                                <summary className="cursor-pointer text-sm text-red-600 hover:text-red-800 font-medium">
                                    Critical error details (development only)
                                </summary>
                                <div className="mt-2 p-4 bg-red-50 rounded-md text-xs font-mono text-red-800 overflow-auto border border-red-200">
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
            </body>
        </html>
    );
} 