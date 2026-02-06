"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ModernSlider, { SwiperSlide } from "@/components/ui/ModernSlider";

export default function Section6() {
    const mainSlider = useRef<any>(null);

    const mainSettings = {
        effect: "fade" as const,
        autoplay: true,
        autoplayDelay: 3000,
        pagination: true,
        navigation: false,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
    };
    return (
        <>
            {/*Loop Grid 5*/}
            <section className="video-news mb-30 p-30 bg-grey">
                <h6 className="font-weight-bold text-uppercase widget-header mb-30 text-center divider-wave-1">
                    <span className="font-family-normal"># Breaking News</span>
                </h6>
                <div className="loop-grid-4 row vertical-divider">
                    <div className="col-lg-5 col-md-12 ">
                        <ModernSlider settings={mainSettings} className="slide-fade mb-lg-0 mb-md-4 mb-sm-4">
                            <SwiperSlide>
                                <article className="slide-fade-item">
                                    <figure className="mb-30">
                                        <Link href="/single">
                                            <Image className="cover-image" src="/assets/imgs/news/news-1.jpg" alt="newsboard" width={468} height={350} />
                                        </Link>
                                        <span className="post-format position-top-right text-uppercase font-small">
                                            <i className="ti-video-camera" />
                                        </span>
                                    </figure>
                                    <div className="post-content text-center plr-5-percent">
                                        <h2 className="post-title mb-30 position-relative divider-wave">
                                            <Link href="/single">Why African Spirituality Became Associated With Satan</Link>
                                        </h2>
                                        <p className="excerpt">These are all common derogatory comments I have received as a third-generation practitioner of Vodu, an ancient West African spiritual and herbal practice, mostly by Christians</p>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="slide-fade-item">
                                    <figure className="mb-30">
                                        <Link href="/single">
                                            <Image className="cover-image" src="/assets/imgs/news/news-2.jpg" alt="newsboard" width={468} height={350} />
                                        </Link>
                                        <span className="post-format position-top-right text-uppercase font-small">
                                            <i className="ti-video-camera" />
                                        </span>
                                    </figure>
                                    <div className="post-content text-center plr-5-percent">
                                        <h2 className="post-title mb-30 position-relative divider-wave">
                                            <Link href="/single">The Truth About Blood Types and the Coronavirus</Link>
                                        </h2>
                                        <p className="excerpt">Among the more than 1,500 Italian and Spanish patients with the coronavirus included in the study, infection appeared to be less common among people with blood type O</p>
                                    </div>
                                </article>
                            </SwiperSlide>
                        </ModernSlider>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <article className="row ">
                            <div className="col-lg-6 col-md-9 mb-sm-3">
                                <h6 className="post-title mb-10 font-weight-bold">
                                    <Link href="/single">Do Americans Understand How Badly They’re Doing?</Link>
                                </h6>
                                <p className="excerpt mb-0">In France, where I live, the virus is under control. I can hardly believe the news coming out of the United States.</p>
                            </div>
                            <div className="col-lg-6 col-md-3">
                                <figure className="mb-0">
                                    <Link href="/single">
                                        <Image className="cover-image" src="/assets/imgs/news/thumb-8.jpg" alt="newsboard" width={174} height={174} />
                                    </Link>
                                </figure>
                            </div>
                        </article>
                        <article className="row ">
                            <div className="col-12">
                                <div className="has-top-border mb-15 mt-15" />
                            </div>
                            <div className="col-lg-6 col-md-9 mb-sm-3">
                                <h6 className="post-title mb-10 font-weight-bold">
                                    <Link href="/single">The Devaluation of Music: It’s Worse Than You Think</Link>
                                </h6>
                                <p className="excerpt mb-0">These are serious issues, and many agree that the industry and lawmakers have a lot of work to do.</p>
                            </div>
                            <div className="col-lg-6 col-md-3">
                                <figure className="mb-0">
                                    <Link href="/single">
                                        <Image className="cover-image" src="/assets/imgs/news/thumb-7.jpg" alt="newsboard" width={174} height={174} />
                                    </Link>
                                    <span className="post-format position-top-right text-uppercase font-small">
                                        <i className="ti-video-camera" />
                                    </span>
                                </figure>
                            </div>
                        </article>
                        <article className="row ">
                            <div className="col-12">
                                <div className="has-top-border mb-15 mt-15" />
                            </div>
                            <div className="col-lg-6 col-md-9 mb-sm-3">
                                <h6 className="post-title mb-10 font-weight-bold">
                                    <Link href="/single">How Music Affects Your Productivity</Link>
                                </h6>
                                <p className="excerpt mb-0">Music is regarded as one of the triumphs of human creativity.</p>
                            </div>
                            <div className="col-lg-6 col-md-3">
                                <figure className="mb-0">
                                    <Link href="/single">
                                        <Image className="cover-image" src="/assets/imgs/news/news-10.jpg" alt="newsboard" width={174} height={174} />
                                    </Link>
                                </figure>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-3 d-none d-lg-block">
                        <ul className="list-post">
                            <li className="mb-15 ">
                                <div className="d-flex">
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-10 font-weight-500">
                                            <Link href="/single">LThis ‘Equity’ picture is actually White Supremacy at work</Link>
                                        </h6>
                                        <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                            <span className="post-on mr-15">23 April</span>
                                            <span className="hit-count has-dot">34k Views</span>
                                        </div>
                                    </div>
                                    <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale">
                                        <Link className="color-white" href="/single">
                                            <Image className="cover-image" src="/assets/imgs/news/thumb-1.jpg" alt="newsboard" width={80} height={80} />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-15 ">
                                <div className="d-flex">
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-10 font-weight-500">
                                            <Link href="/single">Towards a Bra-free Instagram Experience</Link>
                                        </h6>
                                        <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                            <span className="post-on mr-15">17 April</span>
                                            <span className="hit-count has-dot">58k Views</span>
                                        </div>
                                    </div>
                                    <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale">
                                        <Link className="color-white" href="/single">
                                            <Image className="cover-image" src="/assets/imgs/news/thumb-2.jpg" alt="newsboard" width={80} height={80} />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-15 ">
                                <div className="d-flex">
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-10 font-weight-500">
                                            <Link href="/single">Why wireframes are becoming obsolete</Link>
                                        </h6>
                                        <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                            <span className="post-on mr-15">25 April</span>
                                            <span className="hit-count has-dot">54k Views</span>
                                        </div>
                                    </div>
                                    <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale">
                                        <Link className="color-white" href="/single">
                                            <Image className="cover-image" src="/assets/imgs/news/thumb-3.jpg" alt="newsboard" width={80} height={80} />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-15 ">
                                <div className="d-flex">
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-10 font-weight-500">
                                            <Link href="/single">I’m a “highly functional” Autistic. It takes a lot of work.</Link>
                                        </h6>
                                        <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                            <span className="post-on mr-15">25 April</span>
                                            <span className="hit-count has-dot">16k Views</span>
                                        </div>
                                    </div>
                                    <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale">
                                        <Link className="color-white" href="/single">
                                            <Image className="cover-image" src="/assets/imgs/news/thumb-4.jpg" alt="newsboard" width={80} height={80} />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="d-flex">
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-10 font-weight-500">
                                            <Link href="/single">Apple Is Killing A Billion-Dollar Ad Industry With One Popup</Link>
                                        </h6>
                                        <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                            <span className="post-on mr-15">25 April</span>
                                            <span className="hit-count has-dot">67k Views</span>
                                        </div>
                                    </div>
                                    <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale">
                                        <Link className="color-white" href="/single">
                                            <Image className="cover-image" src="/assets/imgs/news/thumb-5.jpg" alt="newsboard" width={80} height={80} />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
