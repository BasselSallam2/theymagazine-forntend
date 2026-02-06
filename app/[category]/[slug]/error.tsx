'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ArticleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Article page error:', error);
  }, [error]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center py-5">
            <h1 className="display-1 text-danger">Error</h1>
            <h2 className="mb-4">Something went wrong</h2>
            <p className="lead mb-4">
              We encountered an error while loading this article. Please try again.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button
                onClick={reset}
                className="btn btn-primary"
              >
                Try Again
              </button>
              <Link href="/" className="btn btn-outline-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
