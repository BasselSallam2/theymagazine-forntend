import Link from "next/link";
import { ArticleListSectionProps, Article, Category } from "@/types";
import Image from "next/image";

interface CategoryGridArticlesProps extends Omit<ArticleListSectionProps, "articles"> {
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
  className?: string;
}

export default function Section2({ articles = [], category, title = "Latest Articles", variant = "grid", columns = 3, showPagination = true, showLoadMore = false, itemsPerPage = 12, showCategories = true, showAuthor = true, showDate = true, showExcerpt = true, showReadTime = true, showViews = true, showLikes = true, className }: CategoryGridArticlesProps = {}) {
  return (
    <>
      {/*Loop Grid 1-2*/}
      <section className={`latest-post mt-30 mb-30 ${className || ""}`}>
        <h3 className="widget-header widget-header-style-1 font-weight-bold text-center mb-20">
          <span className="line-dots mb-10" />
          <span className="pl-15 pr-15 bg-white font-family-normal">{title}</span>
        </h3>
        <div className="loop-grid row mb-15 vertical-divider">
          <article className="col-lg-3 col-md-6 col-sm-12">
            <div className="entry-meta meta-0 mb-15 font-small">
              <Link href="/category">
                <span className="post-cat position-relative"># World</span>
              </Link>
              <Link href="/category">
                <span className="post-cat position-relative"># Opinion</span>
              </Link>
            </div>
            <h5 className="post-title font-weight-bold mb-10">
              <Link href="/single">Headed to the Convention? Not I, More Republicans Are Saying</Link>
            </h5>
            <p className="excerpt mb-15">"Everybody just assumes no one is going," said one House member wary of the virus risks. But other delegates dismissed the health threat.</p>
            <figure className="mb-15">
              <Image className="cover-image" src="/assets/imgs/news/news-1.jpg" alt="newsboard" width={286} height={215} />
            </figure>
            <div className="entry-meta meta-2 text-uppercase font-x-small color-muted">
              <Link className="float-start mr-10 author-img" href="/author">
                <Image src="/assets/imgs/authors/author-1.jpg" alt="newsboard" width={41} height={41} />
              </Link>
              By
              <Link href="/author">
                <span className="author-name">Steven Keni</span>
              </Link>
              <span className="create-date ml-30">25 April</span>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-sm-12">
            <div className="entry-meta meta-0 mb-15 font-small">
              <Link href="/category">
                <span className="post-cat position-relative"># Magazine</span>
              </Link>
            </div>
            <h5 className="post-title font-weight-bold mb-10">
              <Link href="/single">New York Judge Clears Publication of Trump Tell-All</Link>
            </h5>
            <span className="live-now text-danger">Live now</span>
            <p className="excerpt mb-15">When I was in high school in the early 1990s, my family lived in Ghana. At that time, there were only a few hundred</p>
            <figure className="mb-15">
              <Image className="cover-image" src="/assets/imgs/news/news-2.jpg" alt="newsboard" width={286} height={215} />
            </figure>
            <div className="entry-meta meta-2 text-uppercase font-x-small color-muted">
              <Link className="float-start mr-10 author-img" href="/author">
                <Image src="/assets/imgs/authors/author-2.jpg" alt="newsboard" width={41} height={41} />
              </Link>
              By
              <Link href="/author">
                <span className="author-name">Steven Keni</span>
              </Link>
              <span className="create-date ml-30">25 April</span>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-sm-12">
            <div className="entry-meta meta-0 mb-15 font-small">
              <Link href="/category">
                <span className="post-cat position-relative"># Food</span>
              </Link>
              <Link href="/category">
                <span className="post-cat position-relative"># Travel</span>
              </Link>
              <Link href="/category">
                <span className="post-cat position-relative"># Style</span>
              </Link>
            </div>
            <h5 className="post-title font-weight-bold mb-10">
              <Link href="/single">The Difference Between Living in New York and San Francisco</Link>
            </h5>
            <p className="excerpt mb-15">After living in New York for 5 years, I recently moved to San Francisco. Neither city is clearly superior, but there are some distinct differences</p>
            <figure className="mb-15">
              <Image className="cover-image" src="/assets/imgs/news/news-3.jpg" alt="newsboard" width={286} height={215} />
            </figure>
            <div className="entry-meta meta-2 text-uppercase font-x-small color-muted">
              <Link className="float-start mr-10 author-img" href="/author">
                <Image src="/assets/imgs/authors/author-3.jpg" alt="newsboard" width={41} height={41} />
              </Link>
              By
              <Link href="/author">
                <span className="author-name">Steven Keni</span>
              </Link>
              <span className="create-date ml-30">25 April</span>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-sm-12">
            <div className="entry-meta meta-0 mb-15 font-small">
              <Link href="/category">
                <span className="post-cat position-relative"># Magazine</span>
              </Link>
              <Link href="/category">
                <span className="post-cat position-relative"># Reading</span>
              </Link>
            </div>
            <h5 className="post-title font-weight-bold mb-10">
              <Link href="/single">What The New York Times Didn't Tell You</Link>
            </h5>
            <p className="excerpt mb-15">If you read the recent New York Times article about Amazon's culture, you remember that quote. Attributed to Bo Olson, the image of countless employees crying at</p>
            <figure className="mb-15">
              <Image className="cover-image" src="/assets/imgs/news/news-4.jpg" alt="newsboard" width={286} height={215} />
            </figure>
            <div className="entry-meta meta-2 text-uppercase font-x-small color-muted">
              <Link className="float-start mr-10 author-img" href="/author">
                <Image src="/assets/imgs/authors/author-4.jpg" alt="newsboard" width={41} height={41} />
              </Link>
              By
              <Link href="/author">
                <span className="author-name">Steven Keni</span>
              </Link>
              <span className="create-date ml-30">25 April</span>
            </div>
          </article>
        </div>
        {showPagination && (
          <div className="pagination-area mb-30">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        {showLoadMore && (
          <div className="text-center">
            <button className="button button-contactForm">Load More Articles</button>
          </div>
        )}
      </section>
    </>
  );
}
