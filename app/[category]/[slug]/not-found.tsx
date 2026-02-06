import Link from 'next/link';

export default function ArticleNotFound() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center py-5">
            <h1 className="display-1 text-muted">404</h1>
            <h2 className="mb-4">Article Not Found</h2>
            <p className="lead mb-4">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link href="/" className="btn btn-primary">
                Go Home
              </Link>
              <Link href="/search" className="btn btn-outline-primary">
                Search Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
