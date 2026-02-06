import Link from "next/link";
import { Article } from "@/types";
import Image from "next/image";

interface SearchSection2Props {
  articles?: Article[];
  searchQuery?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  className?: string;
}

export default function Section2({
  articles = [],
  searchQuery = "",
  pagination,
  className = "",
}: SearchSection2Props) {
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const hasQuery = searchQuery.trim().length > 0;
  const hasResults = articles.length > 0;

  return (
    <>
      {/*Loop Grid 5*/}
      <div className={`row mb-50 ${className}`}>
        <div className="col-lg-2" />
        <div className="col-lg-8 col-md-12 col-md-pull-3">
          {!hasResults && (
            <div className="mb-30 text-center">
              <h5 className="mb-10">
                {hasQuery ? `No results found for "${searchQuery}".` : "Type a keyword to search."}
              </h5>
              <p className="text-muted">
                {hasQuery ? "Try different keywords or check your spelling." : "Results will appear here."}
              </p>
            </div>
          )}
          {hasResults && (
            <>
              <div className="mb-30">
                <div className="loop-grid-3">
                  {articles.map((article, index) => (
                    <article key={article.id} className="row ">
                      <div className="col-md-2">
                        <div className="entry-meta meta-2 font-x-small color-muted mt-15">
                          <span className="me-10 mb-5">{formatDate(article.publishedAt)}</span>
                          <br />
                          <br />
                          {article.readTime && <span>{article.readTime} mins read</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4 className="post-title mb-10 font-weight-bold">
                          <Link href={article.slug}>{article.title}</Link>
                        </h4>
                        {article.excerpt && <p className="excerpt mb-20">{article.excerpt}</p>}
                        <div className="entry-meta meta-2 font-x-small color-muted">
                          <p className="mb-5">
                            By
                            {article.author?.slug ? (
                              <Link href={`/author/${article.author.slug}`}>
                                <span className="author-name">{article.author.name}</span>
                              </Link>
                            ) : (
                              <span className="author-name">{article.author?.name || "Unknown Author"}</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <figure className="mt-md-0 mt-sm-3">
                          <Link href={article.slug}>
                            <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-16.jpg"} alt={article.title} width={252} height={187} />
                          </Link>
                        </figure>
                      </div>
                      {index < articles.length - 1 && (
                        <div className="col-md-12">
                          <div className="horizontal-divider mt-15 mb-15" />
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
              {pagination && pagination.totalPages > 1 && (
                <div className="pagination-area pt-15 border-top-2 mt-30 font-heading ">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="single-wrap d-flex">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className={`page-item ${!pagination.hasPrev ? "disabled" : ""}`}>
                                <a className="page-link" href="#">
                                  Prev
                                </a>
                              </li>
                              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                                <li key={page} className={`page-item ${page === pagination.currentPage ? "active" : ""}`}>
                                  <a className="page-link" href="#">
                                    {page.toString().padStart(2, "0")}
                                  </a>
                                </li>
                              ))}
                              <li className={`page-item ${!pagination.hasNext ? "disabled" : ""}`}>
                                <a className="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
