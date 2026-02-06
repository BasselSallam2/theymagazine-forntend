export default function ArticleLoading() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* Article Header Skeleton */}
          <div className="mb-4">
            <div className="placeholder-glow">
              <span className="placeholder col-12 bg-secondary" style={{ height: '2.5rem' }}></span>
              <span className="placeholder col-8 bg-secondary mt-2"></span>
              <span className="placeholder col-4 bg-secondary mt-2"></span>
            </div>
          </div>

          {/* Article Meta Skeleton */}
          <div className="mb-4">
            <div className="d-flex align-items-center gap-3">
              <div className="placeholder-glow">
                <span className="placeholder rounded-circle bg-secondary" style={{ width: '40px', height: '40px' }}></span>
              </div>
              <div className="placeholder-glow flex-grow-1">
                <span className="placeholder col-4 bg-secondary"></span>
                <span className="placeholder col-3 bg-secondary mt-1"></span>
              </div>
            </div>
          </div>

          {/* Article Content Skeleton */}
          <div className="mb-4">
            <div className="placeholder-glow">
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-10 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-8 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-11 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-9 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
            </div>
          </div>

          {/* Article Image Skeleton */}
          <div className="mb-4">
            <div className="placeholder-glow">
              <span className="placeholder col-12 bg-secondary" style={{ height: '300px' }}></span>
            </div>
          </div>

          {/* Article Content Continued Skeleton */}
          <div className="mb-4">
            <div className="placeholder-glow">
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-11 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-10 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
              <span className="placeholder col-7 bg-secondary mb-2" style={{ height: '1.2rem' }}></span>
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="col-lg-4">
          <div className="placeholder-glow">
            <span className="placeholder col-12 bg-secondary mb-3" style={{ height: '200px' }}></span>
            <span className="placeholder col-12 bg-secondary mb-3" style={{ height: '150px' }}></span>
            <span className="placeholder col-12 bg-secondary" style={{ height: '100px' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
