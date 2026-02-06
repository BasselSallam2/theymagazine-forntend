import Link from "next/link";
import { ArticleListSectionProps, Article } from "@/types";
import Image from "next/image";

interface CategoryNewsProps extends Omit<ArticleListSectionProps, "articles"> {
  articles?: Article[];
  title?: string;
  category?: string;
  showCategories?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showExcerpt?: boolean;
  showLiveBadge?: boolean;
}

export default function Section5({ articles = [], title = "# Magazine", category = "Magazine", variant = "grid", columns = 3, showCategories = true, showAuthor = true, showDate = true, showExcerpt = true, showLiveBadge = true, className }: CategoryNewsProps = {}) {
  return (
    <>
      {/*Loop Grid 4*/}
      <section className={`magazine mb-30 ${className || ""}`}>
        <h6 className="font-weight-bold widget-header widget-header-style-2 mb-30">
          <span className="d-block mb-10 text-uppercase font-family-normal" style={{ color: '#ed1b24' }}>{title}</span>
          <span className="line-dots" />
        </h6>
        <div className="loop-grid-4 row vertical-divider">
          <article className="col-lg-4 col-md-6 col-sm-12 ">
            <figure className="mb-15">
              <Link href="/single">
                <Image className="cover-image" src="/assets/imgs/news/news-6.jpg" alt="newsboard" width={389} height={289} />
              </Link>
            </figure>
            <div className="entry-meta meta-0 mb-15 font-small">
              <Link href="/category">
                <span className="post-cat position-relative"># {category}</span>
              </Link>
              <Link href="/category">
                <span className="post-cat position-relative"># Reading</span>
              </Link>
            </div>
            <h6 className="post-title font-weight-bold mb-10">
              <Link href="/single">What The New York Times Didn't Tell You</Link>
            </h6>
            <p className="excerpt">If you read the recent New York Times article about Amazon's culture, you remember that quote. Attributed to Bo Olson, the image of countless employees crying at</p>
          </article>
          <article className="col-lg-4 col-md-6 col-sm-12 ">
            <figure className="mb-15">
              <Link href="/single">
                <Image className="cover-image" src="/assets/imgs/news/news-7.jpg" alt="newsboard" width={389} height={289} />
              </Link>
            </figure>
            <div className="entry-meta meta-0 mb-15 font-small">
              <Link href="/category">
                <span className="post-cat position-relative"># {category}</span>
              </Link>
              <Link href="/category">
                <span className="post-cat position-relative"># Travel</span>
              </Link>
            </div>
            <h6 className="post-title font-weight-bold mb-10">
              <Link href="/single">The Difference Between Living in New York and San Francisco</Link>
            </h6>
            <p className="excerpt">After living in New York for 5 years, I recently moved to San Francisco. Neither city is clearly superior, but there are some distinct differences</p>
          </article>
          <article className="col-lg-4 col-md-6 col-sm-12 ">
            <figure className="mb-15">
              <Link href="/single">
                <Image className="cover-image" src="/assets/imgs/news/news-8.jpg" alt="newsboard" width={389} height={289} />
              </Link>
            </figure>
            <div className="entry-meta meta-0 mb-15 font-small">
              <Link href="/category">
                <span className="post-cat position-relative"># {category}</span>
              </Link>
              <Link href="/category">
                <span className="post-cat position-relative"># Style</span>
              </Link>
            </div>
            <h6 className="post-title font-weight-bold mb-10">
              <Link href="/single">How to Make the Perfect Cup of Coffee</Link>
            </h6>
            <p className="excerpt">Coffee is one of the most popular beverages in the world. Here's how to make the perfect cup at home.</p>
          </article>
        </div>
      </section>
    </>
  );
}
