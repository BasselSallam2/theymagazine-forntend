"use client";
import { useRef } from "react";
import ModernSlider, { SwiperSlide } from "@/components/ui/ModernSlider";
import Link from "next/link";
import { Home2HeroProps } from "@/types";
import Image from "next/image";

export default function Section1({
    sliderArticles = [
        {
            id: "1",
            title: "This magical drug mansion in Upstate New York is where the psychedelic '60s took off",
            content: "William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.",
            excerpt: "William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.",
            featuredImage: "/assets/imgs/news/news-12.jpg",
            slug: "/single",
            publishedAt: "2025-04-15",
            author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
            category: { id: "1", name: "America's", slug: "/category" },
            tags: [
                { id: "1", name: "America's", slug: "/category" },
                { id: "2", name: "New York", slug: "/category" },
            ],
            status: "published",
        },
        {
            id: "2",
            title: "What I Learned From a Year of Reading Only Books by Women",
            content: "Alice Fishburn set herself a challenge for 2018 to only read female authors. Here's what she discovered. It started, as so many of the best things do, with my attempt to one-up a sibling. At the end of last year, my brother explained to me that when it",
            excerpt: "Alice Fishburn set herself a challenge for 2018 to only read female authors. Here's what she discovered. It started, as so many of the best things do, with my attempt to one-up a sibling. At the end of last year, my brother explained to me that when it",
            featuredImage: "/assets/imgs/news/news-19.jpg",
            slug: "/single",
            publishedAt: "2025-04-15",
            author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
            category: { id: "1", name: "America's", slug: "/category" },
            tags: [
                { id: "1", name: "America's", slug: "/category" },
                { id: "2", name: "New York", slug: "/category" },
            ],
            status: "published",
            hasFormat: true,
            formatIcon: "ti-stats-up",
        },
    ],
    sidebarArticles = [
        {
            id: "3",
            title: "There's a 49 Percent Chance the World As We Know It Will End by 2050",
            content: "Jared Diamond's new book, Upheaval, addresses itself to a world very obviously in crisis.",
            excerpt: "Jared Diamond's new book, Upheaval, addresses itself to a world very obviously in crisis.",
            featuredImage: "/assets/imgs/news/news-2.jpg",
            slug: "/single",
            publishedAt: "2025-04-15",
            author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
            category: { id: "2", name: "Technology", slug: "/category" },
            readTime: 8,
            status: "published",
        },
        {
            id: "4",
            title: "Why The New York City subway signage is considered iconic? The true story",
            content: "Black and white signs with Helvetica showing just the information subway riders",
            excerpt: "Black and white signs with Helvetica showing just the information subway riders",
            featuredImage: "/assets/imgs/news/news-3.jpg",
            slug: "/single",
            publishedAt: "2025-04-15",
            author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
            category: { id: "2", name: "Technology", slug: "/category" },
            readTime: 8,
            status: "published",
            isLive: true,
        },
        {
            id: "5",
            title: "This Freedom Rider was shot at, attacked, and put on death row—all by 20 years old",
            content: "As Trumpauer left Jackson behind, she didn't know if her life was about to get better or worse",
            excerpt: "As Trumpauer left Jackson behind, she didn't know if her life was about to get better or worse",
            featuredImage: "/assets/imgs/news/news-4.jpg",
            slug: "/single",
            publishedAt: "2025-04-15",
            author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
            category: { id: "2", name: "Technology", slug: "/category" },
            readTime: 8,
            status: "published",
        },
        {
            id: "6",
            title: "This athlete conquered poverty, racism, and polio in order to became an Olympian",
            content: "Six-year-old Wilma Rudolph was different from the other kids.",
            excerpt: "Six-year-old Wilma Rudolph was different from the other kids.",
            featuredImage: "/assets/imgs/news/news-5.jpg",
            slug: "/single",
            publishedAt: "2025-04-15",
            author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
            category: { id: "2", name: "Technology", slug: "/category" },
            readTime: 8,
            status: "published",
        },
    ],
    sliderSettings = {
        effect: "fade",
        autoplay: true,
        autoplayDelay: 3000,
        pagination: true,
        navigation: false,
        loop: true,
    },
    className = "",
}: Home2HeroProps) {
    const mainSlider = useRef<any>(null);

    return (
        <>
            {/*Loop Grid 3*/}
            <div className={`the-world mb-30 mt-30 ${className}`}>
                <div className="loop-grid-3 row vertical-divider">
                    <div className="col-lg-7 col-md-12">
                        <ModernSlider settings={sliderSettings} className="slide-fade mb-lg-0 mb-md-4 mb-sm-4">
                            {sliderArticles.map((article) => (
                                <SwiperSlide key={article.id}>
                                    <article className="first-post slide-fade-item mb-md-4 mb-lg-0">
                                        <figure className="mb-30">
                                            <Link href={article.slug}>
                                                <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={700} height={520} />
                                            </Link>
                                            {article.hasFormat && (
                                                <span className="post-format position-top-right text-uppercase font-small">
                                                    <i className={article.formatIcon} />
                                                </span>
                                            )}
                                        </figure>
                                        <div className="post-content">
                                            <h3 className="mb-20 position-relative font-weight-bold">
                                                <Link href={article.slug}>{article.title}</Link>
                                            </h3>
                                            <p className="excerpt">{article.excerpt}</p>
                                            <div className="entry-meta meta-0 mb-15 font-small">
                                                {article.tags?.map((tag, index) => (
                                                    <Link key={index} href={tag.slug}>
                                                        <span className="post-cat position-relative"># {tag.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </ModernSlider>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row vertical-divider">
                            {sidebarArticles.slice(0, 2).map((article, index) => (
                                <article key={article.id} className={`col-md-6 ${index === 0 ? "mb-sm-3" : ""} `}>
                                    <figure className="mb-15">
                                        <Link href={article.slug}>
                                            <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={234} height={174} />
                                        </Link>
                                    </figure>
                                    <h6 className="post-title font-weight-bold mb-10">
                                        <Link href={article.slug}>{article.title}</Link>
                                    </h6>
                                    <p className="excerpt">
                                        {article.isLive && <span className="live-now text-danger">Live</span>}
                                        {article.excerpt}
                                    </p>
                                    <div className="entry-meta meta-2 font-x-small color-muted">
                                        <p className="mb-5">
                                            By
                                            <Link href={article.author.slug}>
                                                <span className="author-name">{article.author.name}</span>
                                            </Link>
                                        </p>
                                        <span className="me-10"> {new Date(article.publishedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                                        <span className="has-dot"> {article.readTime} mins read</span>
                                    </div>
                                </article>
                            ))}
                            <div className="col-12">
                                <div className="horizontal-divider mb-15 mt-15" />
                            </div>
                        </div>
                        <div className="row vertical-divider">
                            {sidebarArticles.slice(2, 4).map((article, index) => (
                                <article key={article.id} className={`col-md-6 ${index === 0 ? "mb-sm-3" : ""} `}>
                                    <figure className="mb-15">
                                        <Link href={article.slug}>
                                            <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={234} height={174} />
                                        </Link>
                                    </figure>
                                    <h6 className="post-title font-weight-bold mb-10">
                                        <Link href={article.slug}>{article.title}</Link>
                                    </h6>
                                    <p className="excerpt">
                                        {article.isLive && <span className="live-now text-danger">Live</span>}
                                        {article.excerpt}
                                    </p>
                                    <div className="entry-meta meta-2 font-x-small color-muted">
                                        <p className="mb-5">
                                            By
                                            <Link href={article.author.slug}>
                                                <span className="author-name">{article.author.name}</span>
                                            </Link>
                                        </p>
                                        <span className="me-10"> {new Date(article.publishedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                                        <span className="has-dot"> {article.readTime} mins read</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
