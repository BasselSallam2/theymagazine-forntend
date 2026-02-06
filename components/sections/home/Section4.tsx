import Link from "next/link";
import { ArticleListSectionProps, Article } from "@/types";
import Image from "next/image";

interface WorldNewsProps extends Omit<ArticleListSectionProps, "articles"> {
  articles?: Article[];
  title?: string;
  subtitle?: string;
  showCategories?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showExcerpt?: boolean;
  showLiveBadge?: boolean;
}

export default function Section4({ articles = [], title = "# The World", subtitle, variant = "grid", columns = 2, showCategories = true, showAuthor = true, showDate = true, showExcerpt = true, showLiveBadge = true, className }: WorldNewsProps = {}) {
  return (
    <>
      {/*Loop Grid 3*/}
      <section className={`the-world mb-30 ${className || ""}`}>
        <h6 className="font-weight-bold widget-header widget-header-style-2 mb-30">
          <span className="d-block mb-10 text-uppercase font-family-normal" style={{ color: '#ed1b24' }}>{title}</span>
          <span className="line-dots" />
        </h6>
        <div className="loop-grid-3 row vertical-divider">
          <div className="col-lg-7 col-md-12">
            <article className="first-post  mb-md-4 mb-lg-0">
              <figure className="mb-30">
                <Link href="/single">
                  <Image className="cover-image" src="/assets/imgs/news/news-1.jpg" alt="newsboard" width={700} height={520} />
                </Link>
              </figure>
              <div className="post-content text-center plr-5-percent">
                <h2 className="post-title mb-30 position-relative">
                  <Link href="/single">This magical drug mansion in Upstate New York is where the psychedelic '60s took off</Link>
                </h2>
                <p className="excerpt">William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.</p>
                <div className="entry-meta meta-0 mb-15 font-small">
                  <Link href="/category">
                    <span className="post-cat position-relative"># America's</span>
                  </Link>
                  <Link href="/category">
                    <span className="post-cat position-relative"># New York</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row vertical-divider">
              <article className="col-md-6 ">
                <figure className="mb-15">
                  <Link href="/single">
                    <Image className="cover-image" src="/assets/imgs/news/news-2.jpg" alt="newsboard" width={234} height={175} />
                  </Link>
                </figure>
                <h6 className="post-title font-weight-bold mb-10">
                  <Link href="/single">There's a 49 Percent Chance the World As We Know It Will End by 2050</Link>
                </h6>
                <p className="excerpt">Jared Diamond's new book, Upheaval, addresses itself to a world very obviously in crisis, and tries to lift some lessons for what do about it from the distant past.</p>
              </article>
              <article className="col-md-6 ">
                <figure className="mb-15">
                  <Link href="/single">
                    <Image className="cover-image" src="/assets/imgs/news/news-3.jpg" alt="newsboard" width={234} height={175} />
                  </Link>
                </figure>
                <h6 className="post-title font-weight-bold mb-10">
                  <Link href="/single">Why The New York City subway signage is considered iconic? The true story</Link>
                </h6>
                <p className="excerpt">Black and white signs with Helvetica showing just the information subway riders need at the points they need it and nothing more. After decades it still does its job remarkably well.</p>
              </article>
              <div className="col-12">
                <div className="horizontal-divider mb-15 mt-15" />
              </div>
            </div>
            <div className="row vertical-divider">
              <article className="col-md-6 ">
                <figure className="mb-15">
                  <Link href="/single">
                    <Image className="cover-image" src="/assets/imgs/news/news-4.jpg" alt="newsboard" width={234} height={175} />
                  </Link>
                </figure>
                <h6 className="post-title font-weight-bold mb-10">
                  <Link href="/single">This Freedom Rider was shot at, attacked, and put on death row—all by 20 years old</Link>
                </h6>
                <p className="excerpt">As Trumpauer left Jackson behind, she didn't know if her life was about to get better or worse. The Riders, many of whom were student</p>
              </article>
              <article className="col-md-6 ">
                <figure className="mb-15">
                  <Link href="/single">
                    <Image className="cover-image" src="/assets/imgs/news/news-5.jpg" alt="newsboard" width={234} height={175} />
                  </Link>
                </figure>
                <h6 className="post-title font-weight-bold mb-10">
                  <Link href="/single">This athlete conquered poverty, racism, and polio in order to became an Olympian</Link>
                </h6>
                <p className="excerpt">
                  <span className="live-now text-danger">Live now</span>Six-year-old Wilma Rudolph was different from the other kids. They could walk, run, and jump
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
