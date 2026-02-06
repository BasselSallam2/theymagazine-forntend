"use client";
import StickyBox from "react-sticky-box";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ display }: { display: string }) {
  return (
    <div className="col-lg-3 col-md-12 position-relative">
      <StickyBox offsetTop={100} offsetBottom={20}>
        <div className="widget-area">
          {/* Author Award */}
          <div className="sidebar-widget widget-latest-posts mb-30 ">
            <h6 className="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-5 pb-5">Author Award</h6>
            <div className="author-content text-center">
              <Link href="/author">
                <Image
                  className="img-circle d-inline-block mb-10"
                  src="/assets/imgs/authors/author-1.jpg"
                  alt="Author"
                  width={80}
                  height={80}
                />
              </Link>
              <p>
                <Image
                  src="/assets/imgs/authors/sign.png"
                  alt="Signature"
                  width={120}
                  height={40}
                />
              </p>
              <p className="mt-4 text-sm text-gray-700">You should write because you love the shape of stories and sentences and the creation of different words on a page...</p>
              <ul className="header-social-network d-inline-block list-inline font-small">
                <li className="list-inline-item">
                  <a target="_blank" href="#">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="#">
                    <i className="ti-pinterest" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="#">
                    <i className="ti-instagram" />
                  </a>
                </li>
              </ul>
              <p className="font-small mt-15 text-muted">
                <a href="#">View more</a>
              </p>
            </div>
          </div>

          {/* Most Comments */}
          <div className="sidesidebar-widget widget-latest-posts mb-30 mt-15 ">
            <h6 className="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-5 pb-5">Most comments</h6>
            <div className="post-block-list post-module-1 post-module-5">
              <ul className="list-post">
                {[
                  {
                    img: "thumb-3.jpg",
                    title: "How I Made $11,000 From Writing in 30 Days",
                    date: "25 April",
                    views: "54k Views",
                  },
                  {
                    img: "thumb-4.jpg",
                    title: "Incognito Mode Won’t Keep Your Browsing Private",
                    date: "25 April",
                    views: "54k Views",
                  },
                  {
                    img: "thumb-5.jpg",
                    title: "So You Want To Know The Cause of Avicii’s Death?",
                    date: "25 April",
                    views: "54k Views",
                  },
                ].map((post, i) => (
                  <li key={i} className="mb-15">
                    <div className="d-flex">
                      <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                        <Link href="/single">
                          <Image
                            src={`/assets/imgs/news/${post.img}`}
                            alt={post.title}
                            className="rounded object-cover"
                            width={80}
                            height={80}
                          />
                        </Link>
                      </div>
                      <div className="post-content media-body">
                        <h6 className="post-title mb-10 text-limit-2-row">
                          <Link href="/single">{post.title}</Link>
                        </h6>
                        <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                          <span className="post-on mr-15">{post.date}</span>
                          <span className="hit-count has-dot">{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`sidebar-widget widget-latest-comments mb-30  ${display === "d-none" ? "d-none" : "d-block"}`}>
            <h6 className="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-5 pb-5">
              <span>Recent comments</span>
            </h6>
            <div className="post-block-list post-module-6 mt-50">
              <div className="post-module-6-item d-flex">
                <span className="item-count vertical-align">
                  <i className="ti-comment" />
                </span>
                <div className="alith_post_title_small">
                  <p className="font-medium mb-10">
                    <Link href="/single">A writer is someone for whom writing is more difficult than it is for other people.</Link>
                  </p>
                  <div className="entry-meta meta-1 font-x-small">
                    <span className="post-on">On 15 April</span>
                    <span className="hit-count has-dot">by Johan</span>
                  </div>
                </div>
              </div>
              <div className="post-module-6-item d-flex">
                <span className="item-count vertical-align">
                  <i className="ti-comment" />
                </span>
                <div className="alith_post_title_small">
                  <p className="font-medium mb-10">
                    <Link href="/single">Anybody who has survived his childhood has enough information about life to last him the rest of his days.</Link>
                  </p>
                  <div className="entry-meta meta-1 font-x-small">
                    <span className="post-on">On 05 May</span>
                    <span className="hit-count has-dot">by Emma</span>
                  </div>
                </div>
              </div>
              <div className="post-module-6-item d-flex">
                <span className="item-count vertical-align">
                  <i className="ti-comment" />
                </span>
                <div className="alith_post_title_small">
                  <p className="font-medium mb-10">
                    <Link href="/single">A writer is someone for whom writing is more difficult than it is for other people.</Link>
                  </p>
                  <div className="entry-meta meta-1 font-x-small">
                    <span className="post-on">On 15 May</span>
                    <span className="hit-count has-dot">by Steven</span>
                  </div>
                </div>
              </div>
              <div className="post-module-6-item d-flex">
                <span className="item-count vertical-align">
                  <i className="ti-comment" />
                </span>
                <div className="alith_post_title_small">
                  <p className="font-medium mb-10">
                    <Link href="/single">Alexe more gulped much garrulous a yikes earthworm wiped because goodness bet mongoose that along accommodatingly tortoise indecisively admirable but shark</Link>
                  </p>
                  <div className="entry-meta meta-1 font-x-small">
                    <span className="post-on">On 17 May</span>
                    <span className="hit-count has-dot">by Mark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="sidebar-widget widget_newsletter ">
            <h6 className="widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-5 pb-5">
              <span>Newsletter</span>
            </h6>
            <div className="newsletter">
              <p className="">Continue reading uninterrupted with a subscription</p>
              <form action="/api/newsletter" method="POST" className="subscribe_form relative mail_part">
                <div className="form-newsletter-cover">
                  <div className="form-newsletter">
                    <input type="email" name="EMAIL" placeholder="Email address" required />
                    <button type="submit">
                      <span className="long-arrow long-arrow-right" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </StickyBox>
    </div>
  );
}
