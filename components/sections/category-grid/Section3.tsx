import Link from "next/link";
import { ArticleListSectionProps, Article, Category } from "@/types";
import Image from "next/image";

interface CategoryGridSidebarProps extends Omit<ArticleListSectionProps, "articles"> {
  articles?: Article[];
  category?: Category;
  title?: string;
  showPagination?: boolean;
  showLoadMore?: boolean;
  itemsPerPage?: number;
  showCategories?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showExcerpt?: boolean;
  showReadTime?: boolean;
  showViews?: boolean;
  showLikes?: boolean;
  showSidebar?: boolean;
  className?: string;
}

export default function Section3({ articles = [], category, title = "Latest Articles", variant = "list", columns = 1, showPagination = true, showLoadMore = false, itemsPerPage = 12, showCategories = true, showAuthor = true, showDate = true, showExcerpt = true, showReadTime = true, showViews = true, showLikes = true, showSidebar = true, className }: CategoryGridSidebarProps = {}) {
  return (
    <>
      {/*Loop Grid 5*/}
      <div className={`row position-relative vertical-divider overflow-visible mb-50 ${className || ""}`}>
        <div className="col-lg-9 col-md-12">
          <div className="mb-30">
            <article className="first-post mb-md-4 mb-lg-0 mb-30">
              <div className="entry-meta meta-0 mb-15 font-small">
                <Link href="/category">
                  <span className="post-cat position-relative"># America's</span>
                </Link>
                <Link href="/category">
                  <span className="post-cat position-relative"># New York</span>
                </Link>
              </div>
              <h3 className="mb-20 position-relative font-weight-bold">
                <Link href="/single">Amy Schumer Misses Stand-Up. ('I Should Have Said My Dad, but That's Not the Truth.')</Link>
              </h3>
              <figure className="mb-30">
                <Link href="/single" className="position-relative">
                  <Image className="cover-image" src="/assets/imgs/news/news-23.jpg" alt="newsboard" width={906} height={412} />
                </Link>
              </figure>
              <div className="post-content">
                <p className="excerpt">William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.</p>
                <div className="entry-meta meta-2 font-x-small color-muted">
                  <p className="mb-5">
                    By
                    <Link href="/author">
                      <span className="author-name">Steven Kenedy</span>
                    </Link>
                  </p>
                  <span className="me-10"> 15 April 2025</span>
                  <span className="has-dot"> 8 mins read</span>
                </div>
              </div>
              <div className="horizontal-divider mt-15 mb-15" />
            </article>
            <article className="first-post mb-md-4 mb-lg-0 mb-30">
              <div className="entry-meta meta-0 mb-15 font-small">
                <Link href="/category">
                  <span className="post-cat position-relative"># Network</span>
                </Link>
                <Link href="/category">
                  <span className="post-cat position-relative"># Learning</span>
                </Link>
              </div>
              <h3 className="mb-20 position-relative font-weight-bold">
                <Link href="/single">What Issues in the 2025 Presidential Race Are Most Important to You?</Link>
              </h3>
              <figure className="mb-30">
                <Link href="/single" className="position-relative">
                  <Image className="cover-image" src="/assets/imgs/news/news-24.jpg" alt="newsboard" width={906} height={412} />
                </Link>
              </figure>
              <div className="post-content">
                <p className="excerpt">William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.</p>
                <div className="entry-meta meta-2 font-x-small color-muted">
                  <p className="mb-5">
                    By
                    <Link href="/author">
                      <span className="author-name">Steven Kenedy</span>
                    </Link>
                  </p>
                  <span className="me-10"> 15 April 2025</span>
                  <span className="has-dot"> 8 mins read</span>
                </div>
              </div>
              <div className="horizontal-divider mt-15 mb-15" />
            </article>
            <article className="first-post mb-md-4 mb-lg-0 mb-30">
              <div className="entry-meta meta-0 mb-15 font-small">
                <Link href="/category">
                  <span className="post-cat position-relative"># America's</span>
                </Link>
                <Link href="/category">
                  <span className="post-cat position-relative"># New York</span>
                </Link>
              </div>
              <h3 className="mb-20 position-relative font-weight-bold">
                <Link href="/single">This magical drug mansion in Upstate New York is where the psychedelic '60s took off</Link>
              </h3>
              <figure className="mb-30">
                <Link href="/single" className="position-relative">
                  <Image className="cover-image" src="/assets/imgs/news/news-25.jpg" alt="newsboard" width={906} height={412} />
                </Link>
              </figure>
              <div className="post-content">
                <p className="excerpt">William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.</p>
                <div className="entry-meta meta-2 font-x-small color-muted">
                  <p className="mb-5">
                    By
                    <Link href="/author">
                      <span className="author-name">Steven Kenedy</span>
                    </Link>
                  </p>
                  <span className="me-10"> 15 April 2025</span>
                  <span className="has-dot"> 8 mins read</span>
                </div>
              </div>
            </article>
            <h6 className="font-weight-bold widget-header widget-header-style-5 mb-10">
              <span className="d-inline-block block mb-10 widget-title font-family-normal">{title}</span>
            </h6>
            <div className="loop-grid-3">
              <article className="row ">
                <div className="col-md-6">
                  <figure className="mb-md-0 mb-sm-3">
                    <Link href="/single">
                      <Image src="/assets/imgs/news/news-16.jpg" alt="newsboard" width={441} height={330} />
                    </Link>
                  </figure>
                </div>
                <div className="col-md-6">
                  <h4 className="post-title mb-10 font-weight-bold">
                    <Link href="/single">The Endgame for LinkedIn Is Coming</Link>
                  </h4>
                  <p className="excerpt mb-20">After two years, Microsoft still hasn't delivered on its grand vision for LinkedIn. And it may never do so. Every time this LinkedIn commercial pops up on YouTube I am reminded of how low the company has fallen to.</p>
                  <div className="entry-meta meta-2 font-x-small color-muted">
                    <p className="mb-5">
                      By
                      <Link href="/author">
                        <span className="author-name">Steven Kenedy</span>
                      </Link>
                    </p>
                    <span className="me-10"> 15 April 2025</span>
                    <span className="has-dot"> 8 mins read</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="horizontal-divider mt-15 mb-15" />
                </div>
              </article>
              <article className="row ">
                <div className="col-md-6">
                  <figure className="mb-md-0 mb-sm-3">
                    <Link href="/single">
                      <Image src="/assets/imgs/news/news-18.jpg" alt="newsboard" width={441} height={330} />
                    </Link>
                  </figure>
                </div>
                <div className="col-md-6">
                  <h4 className="post-title mb-10 font-weight-bold">
                    <Link href="/single">Neuroscience Says Listening to This Song Reduces Anxiety by Up to 65 Percent</Link>
                  </h4>
                  <p className="excerpt mb-20">After a calamitous drop in March, the stock market has had a ferocious rally, despite a cascade of awful news. How can investors cope?</p>
                  <div className="entry-meta meta-2 font-x-small color-muted">
                    <p className="mb-5">
                      By
                      <Link href="/author">
                        <span className="author-name">Sally Rooney</span>
                      </Link>
                    </p>
                    <span className="me-10"> 12 May 2025</span>
                    <span className="has-dot"> 6 mins read</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {showPagination && (
            <div className="pagination-area pt-15 border-top-2 mt-30 font-heading ">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="single-wrap d-flex">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Prev
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              01
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              02
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              03
                            </a>
                          </li>
                          <li className="page-item">
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
        </div>
        {showSidebar && (
          <div className="col-lg-3 col-md-12 primary-sidebar sticky-sidebar">
            <div className="widget-area">
              <div className="sidebar-widget widget-latest-posts mb-30 ">
                <h6 className="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-5 pb-5">
                  <span>Most Popular</span>
                </h6>
                <div className="post-block-list post-module-1 post-module-5">
                  <ul className="list-post">
                    <li className="mb-15">
                      <div className="d-flex">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                          <Link className="color-white" href="/single">
                            <Image src="/assets/imgs/news/thumb-3.jpg" alt="newsboard" width={80} height={80} />
                          </Link>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-10 text-limit-2-row">
                            <Link href="/single">How I Made $11,000 From Writing in 30 Days</Link>
                          </h6>
                          <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                            <span className="post-on mr-15">25 April</span>
                            <span className="hit-count has-dot">54k Views</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-15">
                      <div className="d-flex">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                          <Link className="color-white" href="/single">
                            <Image src="/assets/imgs/news/thumb-4.jpg" alt="newsboard" width={80} height={80} />
                          </Link>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-10 text-limit-2-row">
                            <Link href="/single">Incognito Mode Won't Keep Your Browsing Private</Link>
                          </h6>
                          <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                            <span className="post-on mr-15">25 April</span>
                            <span className="hit-count has-dot">54k Views</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                          <Link className="color-white" href="/single">
                            <Image src="/assets/imgs/news/thumb-5.jpg" alt="newsboard" width={80} height={80} />
                          </Link>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-10 text-limit-2-row">
                            <Link href="/single">So You Want To Know The Cause of Avicii's Death?</Link>
                          </h6>
                          <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                            <span className="post-on mr-15">25 April</span>
                            <span className="hit-count has-dot">54k Views</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
