import Sidebar from "@/components/elements/Sidebar";
import Link from "next/link";
import Image from "next/image";

export default function Section7() {
  return (
    <>
      <section className="recent-new mb-30">
        <div className="row vertical-divider overflow-visible">
          <div className="col-lg-9 col-md-12">
            <h5 className="font-weight-bold widget-header widget-header-style-3 mb-20">
              <span className="d-inline-block block mb-10 widget-title font-family-normal"># Recent posts</span>
              <span className="line-dots" />
            </h5>
            <div className="loop-grid-3">
              <article className="row ">
                <div className="col-md-6 mb-md-0 mb-sm-3">
                  <figure className="mb-0">
                    <Link href="/single">
                      <Image className="cover-image" src="/assets/imgs/news/news-15.jpg" alt="newsboard" width={441} height={328} />
                    </Link>
                    <span className="post-format position-top-right text-uppercase font-small">
                      <i className="ti-stats-up" />
                    </span>
                  </figure>
                </div>
                <div className="col-md-6 align-self-center">
                  <div className="post-content text-center plr-5-percent">
                    <div className="entry-meta meta-0 mb-15 font-small">
                      <Link href="/category">
                        <span className="post-cat position-relative"># World</span>
                      </Link>
                      <Link href="/category">
                        <span className="post-cat position-relative"># Education</span>
                      </Link>
                    </div>
                    <h2 className="post-title mb-30 position-relative divider-wave">
                      <Link href="/single">How to Reopen Schools: What Science and Other Countries Teach Us</Link>
                    </h2>
                    <p className="excerpt">The pressure to bring American students back to classrooms is intense, but the calculus is tricky with infections still out of control in many communities.</p>
                    <p>
                      <span className="live-now text-danger">Live now</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="horizontal-divider mt-15 mb-15" />
                </div>
              </article>
              <div className="row vertical-divider">
                <div className="col-md-8">
                  <article className="row ">
                    <div className="col-md-4">
                      <figure className="mb-md-0 mb-sm-3">
                        <Image className="cover-image" src="/assets/imgs/news/thumb-2.jpg" alt="newsboard" width={183} height={183} />
                      </figure>
                    </div>
                    <div className="col-md-8 pl-0">
                      <div className="entry-meta meta-0 mb-15 font-small">
                        <Link href="/category">
                          <span className="post-cat position-relative"># Technology</span>
                        </Link>
                      </div>
                      <h6 className="post-title mb-20 font-weight-bold">
                        <Link href="/single">The Endgame for LinkedIn Is Coming</Link>
                      </h6>
                      <p className="excerpt mb-0">Every time this LinkedIn commercial pops up on YouTube I am reminded of how low the company has fallen to.</p>
                    </div>
                    <div className="col-md-12">
                      <div className="horizontal-divider mt-15 mb-15" />
                    </div>
                  </article>
                  <article className="row ">
                    <div className="col-md-4">
                      <figure className="mb-md-0 mb-sm-3">
                        <Image className="cover-image" src="/assets/imgs/news/thumb-4.jpg" alt="newsboard" width={183} height={183} />
                      </figure>
                    </div>
                    <div className="col-md-8 pl-0">
                      <div className="entry-meta meta-0 mb-15 font-small">
                        <Link href="/category">
                          <span className="post-cat position-relative"># Music</span>
                        </Link>
                      </div>
                      <h6 className="post-title mb-20 font-weight-bold">
                        <Link href="/single">Neuroscience Says Listening to This Song Reduces Anxiety by Up to 65 Percent</Link>
                      </h6>
                      <p className="excerpt mb-0">After a calamitous drop in March, the stock market has had a ferocious rally, despite a cascade of awful news. How can investors cope?</p>
                    </div>
                    <div className="col-md-12">
                      <div className="horizontal-divider mt-15 mb-15" />
                    </div>
                  </article>
                  <article className="row ">
                    <div className="col-md-4">
                      <figure className="mb-md-0 mb-sm-3">
                        <Image className="cover-image" src="/assets/imgs/news/thumb-8.jpg" alt="newsboard" width={183} height={183} />
                      </figure>
                    </div>
                    <div className="col-md-8 pl-0">
                      <div className="entry-meta meta-0 mb-15 font-small">
                        <Link href="/category">
                          <span className="post-cat position-relative"># Entertainment</span>
                        </Link>
                      </div>
                      <h6 className="post-title mb-20 font-weight-bold">
                        <Link href="/single">I Have A Theory That Donald Glover And Childish Gambino Are Secretly The Same Person</Link>
                      </h6>
                      <p className="excerpt mb-0">For anyone who doesn’t know who these 2 dudes are, Donald Glover is a beloved actor/writer/comedian and Childish Gambino is a popular musician.</p>
                    </div>
                    <div className="col-md-12">
                      <div className="horizontal-divider mt-15 mb-15" />
                    </div>
                  </article>
                  <article className="row ">
                    <div className="col-md-4">
                      <figure className="mb-md-0 mb-sm-3">
                        <Image className="cover-image" src="/assets/imgs/news/thumb-9.jpg" alt="newsboard" width={183} height={183} />
                      </figure>
                    </div>
                    <div className="col-md-8 pl-0">
                      <div className="entry-meta meta-0 mb-15 font-small">
                        <Link href="/category">
                          <span className="post-cat position-relative">World</span>
                        </Link>
                      </div>
                      <h6 className="post-title mb-20 font-weight-bold">
                        <Link href="/single">Half a million people have seen me naked</Link>
                      </h6>
                      <p className="excerpt mb-0">Twitch has quickly become a household name after its acquisition by Amazon. You can watch strangers livestream just about anything these days, working out, body painting; you can even tune in and watch someone else eating.</p>
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <article className="">
                    <figure className="mb-15">
                      <Link href="/single">
                        <Image className="cover-image" src="/assets/imgs/news/news-4.jpg" alt="newsboard" width={286} height={214} />
                      </Link>
                    </figure>
                    <h6 className="post-title font-weight-bold mb-10">
                      <Link href="/single">What Is Your True ‘Character’? And Who’s to Judge It?</Link>
                    </h6>
                    <p className="excerpt">Marjorie Garber’s new book prods at confusion surrounding the word — its philosophical roots, literary history, political uses and inadvertent comedy..</p>
                    <div className="horizontal-divider mt-15 mb-15" />
                  </article>
                  <article className="">
                    <h6 className="post-title mb-10 font-weight-bold">
                      <Link href="/single"> How the United Arab Emirates Set Its Sights on Mars</Link>
                    </h6>
                    <p className="excerpt mb-0">he launch of the Hope orbiter was delayed because of weather. The goal is for it to make contributions to research on the red planet.</p>
                    <div className="horizontal-divider mt-15 mb-15" />
                  </article>
                  <article className="">
                    <h6 className="post-title mb-10 font-weight-bold">
                      <Link href="/single">A Big California Quake Just Got ‘a Little Likelier’</Link>
                    </h6>
                    <p className="excerpt mb-0">A new analysis puts the likelihood of an earthquake slightly higher than earlier forecasts.</p>
                    <div className="horizontal-divider mt-15 mb-15" />
                  </article>
                  <article className="">
                    <h6 className="post-title mb-10 font-weight-bold">
                      <Link href="/single">A Record 5.4 Million Americans Have Lost Health Insurance</Link>
                    </h6>
                    <p className="excerpt mb-0">California’s governor announced a sweeping rollback of the state’s reopening and Los Angeles and San Diego school districts will be online-only in the fall.</p>
                  </article>
                </div>
              </div>
              {/*Start pagination */}
              <div className="pagination-area pt-30 border-top-2 mt-30 font-heading ">
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
              {/* End pagination  */}
            </div>
          </div>
          <Sidebar display="d-none" />
        </div>
      </section>
    </>
  );
}
