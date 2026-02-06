"use client";
import { useState } from "react";
import Sidebar from "@/components/elements/Sidebar";
import Link from "next/link";
import MoreArticles from "@/components/elements/MoreArticles";
import { Article, Author, Category, Tag } from "@/types";
import Image from "next/image";

// Custom video modal component (React 19 compatible)
const VideoModal = ({ isOpen, channel, videoId, onClose }: any) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl mx-4">
                <button onClick={onClose} className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300">
                    ×
                </button>
                <div className="relative pt-[56.25%]">
                    <iframe src={`https://www.youtube.com/embed/${videoId}`} className="absolute top-0 left-0 w-full h-full" allowFullScreen />
                </div>
            </div>
        </div>
    );
};

interface Single3Section1Props {
    article?: Article;
    author?: Author;
    categories?: Category[];
    tags?: Tag[];
    videoId?: string;
    className?: string;
    showTools?: boolean;
    showNewsletter?: boolean;
    showSidebar?: boolean;
}

export default function Section1({
    article = {
        id: 1,
        title: "How to Reopen Schools: What Science and Other Countries Teach Us",
        content: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.",
        excerpt: "As school districts across the United States consider whether and how to restart in-person classes, their challenge is complicated by a pair of fundamental uncertainties: No nation has tried to send children back to school with the virus raging at levels like America's.",
        slug: "/single",
        publishedAt: new Date("2025-04-15"),
        status: "published",
        readTime: 8,
        author: {
            id: 1,
            name: "Barbara Cartland",
            email: "barbara@example.com",
            slug: "/author/barbara-cartland",
            avatar: "/assets/imgs/authors/author-3.jpg",
        },
        category: {
            id: 1,
            name: "World",
            slug: "/category/world",
        },
        featuredImage: "/assets/imgs/news/news-24.jpg",
    },
    author = {
        id: 1,
        name: "Barbara Cartland",
        email: "barbara@example.com",
        slug: "/author/barbara-cartland",
        avatar: "/assets/imgs/authors/author-3.jpg",
    },
    categories = [
        { id: 1, name: "World", slug: "/category/world" },
        { id: 2, name: "Education", slug: "/category/education" },
    ],
    tags = [
        { id: 1, name: "deer", slug: "/tag/deer" },
        { id: 2, name: "nature", slug: "/tag/nature" },
        { id: 3, name: "conserve", slug: "/tag/conserve" },
    ],
    videoId = "ZuI90He-A9Q",
    className = "",
    showTools = true,
    showNewsletter = true,
    showSidebar = true,
}: Single3Section1Props) {
    const [isOpen, setOpen] = useState(false);

    const formatDate = (date: Date | string) => {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <>
            <VideoModal channel="youtube" isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />

            <div className={`row vertical-divider mb-50 mt-30 overflow-visible ${className}`}>
                <div className="col-lg-9 col-md-12">
                    <div className="entry-header mb-30 mt-50">
                        <div className="entry-meta meta-0 mb-15 font-small">
                            {categories.map((category) => (
                                <Link key={category.id} href={category.slug}>
                                    <span className="post-cat position-relative"># {category.name}</span>
                                </Link>
                            ))}
                        </div>
                        <h1 className="entry-title mb-30 font-weight-500">{article.title}</h1>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                    <p className="mb-5">
                                        <a className="author-avatar" href="#">
                                            <Image className="img-circle" src={author.avatar || "/assets/imgs/authors/author-3.jpg"} alt={author.name} width={54} height={54} />
                                        </a>
                                        By
                                        <Link href={`/author/${author.slug}`}>
                                            <span className="author-name font-weight-bold color-black">{author.name}</span>
                                        </Link>
                                    </p>
                                    <span className="me-10">{formatDate(article.publishedAt)}</span>
                                    <span className="has-dot">{article.readTime} mins read</span>
                                </div>
                            </div>
                            {showTools && (
                                <div className="col-lg-6 text-end">
                                    <div className="single-tools">
                                        <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                            <span className="mr-15">
                                                <span className="me-2">Font size</span>
                                                <i className="fonts-size-zoom-in ti-zoom-in mr-5" />
                                                <i className="fonts-size-zoom-out ti-zoom-out" />
                                            </span>
                                            <a className="single-print mr-15">
                                                <span>
                                                    <i className="ti-printer mr-5" />
                                                    Print
                                                </span>
                                            </a>
                                            <div className="vline-space d-inline-block" />
                                            <a href="#">
                                                <span>
                                                    <i className="ti-email mr-5" />
                                                    Email
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <figure className="post-thumb d-flex mb-30 border-radius-2 img-hover-scale animate-conner-box post-thum-video">
                        <a
                            href="#"
                            className="play-video"
                            data-animate="zoomIn"
                            data-duration="1.5s"
                            data-delay="0.1s"
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen(true);
                            }}
                        >
                            <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-24.jpg"} alt={article.title} width={906} height={417} />
                            <span className="btn-play-video">
                                <i className="ti-control-play" />
                            </span>
                        </a>
                    </figure>
                    <article className="entry-wraper mb-50">
                        <p className="excerpt mb-30">{article.excerpt}</p>
                        <div className="entry-main-content dropcap ">
                            <p>
                                Gosh jaguar ostrich quail one excited dear hello and <a href="#">bound</a>
                                <sup>
                                    <a href="#">[1]</a>
                                </sup>
                                and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.
                            </p>
                            <p>
                                Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness <a href="#">nightingale</a> the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the.
                            </p>
                            <figure className="wp-block-gallery columns-3 wp-block-image">
                                <ul className="blocks-gallery-grid">
                                    <li className="blocks-gallery-item">
                                        <a href="#">
                                            <Image className="border-radius-5 cover-image" src="/assets/imgs/news/thumb-1.jpg" alt="newsboard" width={256} height={256} />
                                        </a>
                                    </li>
                                    <li className="blocks-gallery-item">
                                        <a href="#">
                                            <Image className="border-radius-5 cover-image" src="/assets/imgs/news/thumb-2.jpg" alt="newsboard" width={256} height={256} />
                                        </a>
                                    </li>
                                    <li className="blocks-gallery-item">
                                        <a href="#">
                                            <Image className="border-radius-5 cover-image" src="/assets/imgs/news/thumb-5.jpg" alt="newsboard" width={256} height={256} />
                                        </a>
                                    </li>
                                </ul>
                                <figcaption>
                                    <i className="ti-credit-card mr-5" />
                                    Image credit: Behance
                                </figcaption>
                            </figure>
                            <hr className="section-divider" />
                            <p>
                                Yet more some certainly yet alas abandonedly whispered <a href="#">intriguingly</a>
                                <sup>
                                    <a href="#">[2]</a>
                                </sup>
                                well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less <a href="#">however</a> hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when.
                            </p>
                            <h2>The Guitar Legends</h2>
                            <p>
                                Furrowed this in the upset <a href="#">some across</a>
                                <sup>
                                    <a href="#">[3]</a>
                                </sup>
                                tiger oh loaded house gosh whispered <a href="#">faltering alas</a>
                                <sup>
                                    <a href="#">[4]</a>
                                </sup>
                                ouch cuckoo coward in scratched undid together bit fumblingly so besides salamander heron during the jeepers hello fitting jauntily much smoothly globefish darn blessedly far so along bluebird leopard and.
                            </p>
                            <blockquote>
                                <p>
                                    Integer eu faucibus <a href="#">dolor</a>
                                    <sup>
                                        <a href="#">[5]</a>
                                    </sup>
                                    . Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.
                                </p>
                            </blockquote>
                            <p>Fretful human far recklessly while caterpillar well a well blubbered added one a some far whispered rampantly whispered while irksome far clung irrespective wailed more rosily and where saluted while black dear so yikes as considering recast to some crass until cow much less and rakishly overdrew consistent for by responsible oh one hypocritical less bastard hey oversaw zebra browbeat a well.</p>
                            <h3>Getting Crypto Rich</h3>
                            <hr className="wp-block-separator is-style-wide" />
                            <div className="wp-block-image">
                                <figure className="alignleft is-resized">
                                    <Image className="border-radius-5 cover-image" src="/assets/imgs/news/thumb-13.jpg" alt="News article image" width={200} height={300} />
                                    <figcaption>And far contrary smoked some contrary among stealthy</figcaption>
                                </figure>
                            </div>
                            <p>And far contrary smoked some contrary among stealthy engagingly suspiciously a cockatoo far circa sank dully lewd slick cracked llama the much gecko yikes more squirrel sniffed this and the the much within uninhibited this abominable a blubbered overdid foresaw through alas the pessimistic.</p>
                            <p>Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.</p>
                            <hr className="section-divider" />
                            <p>Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness nightingale the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the.</p>
                            {/*Begin Subcrible*/}
                            {showNewsletter && (
                                <div className="border-radius-5 mb-50 border p-30 ">
                                    <div className="row justify-content-between">
                                        <div className="col-md-5 mb-2 mb-md-0">
                                            <h5 className="font-weight-bold secondfont mb-30 mt-0">Become a member</h5>
                                            <p className="font-small">Get the latest news right in your inbox. We never spam!</p>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input type="text" className="form-control" placeholder="Enter your e-mail address" />
                                                </div>
                                                <div className="col-md-12 mt-2">
                                                    <button type="submit" className="btn btn-info btn-block">
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/*End Subcrible*/}
                            <p>Yet more some certainly yet alas abandonedly whispered intriguingly well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less however hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when.</p>
                        </div>
                        <div className="entry-bottom mt-50 mb-30 ">
                            <div className="tags">
                                {tags.map((tag) => (
                                    <Link key={tag.id} href={tag.slug} rel="tag">
                                        {tag.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="single-social-share clearfix ">
                            <div className="entry-meta meta-1 font-small color-grey float-start mt-10">
                                <span className="hit-count mr-15">
                                    <i className="ti-comment mr-5" />
                                    182 comments
                                </span>
                                <span className="hit-count mr-15">
                                    <i className="ti-heart mr-5" />
                                    268 likes
                                </span>
                                <span className="hit-count">
                                    <i className="ti-star mr-5" />
                                    Rate: 9/10
                                </span>
                            </div>
                            <ul className="d-inline-block list-inline float-md-right mt-md-0 mt-4">
                                <li className="list-inline-item">
                                    <a className="social-icon facebook-icon text-xs-center" target="_blank" href="#">
                                        <i className="ti-facebook" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon twitter-icon text-xs-center" target="_blank" href="#">
                                        <i className="ti-twitter-alt" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon pinterest-icon text-xs-center" target="_blank" href="#">
                                        <i className="ti-pinterest" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon instagram-icon text-xs-center" target="_blank" href="#">
                                        <i className="ti-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bt-1 border-color-1 mt-30 mb-30" />
                        {/*author box*/}
                        <div className="author-bio ">
                            <div className="author-image mb-30">
                                <Link href={`/author/${author.slug}`}>
                                    <Image src={author.avatar || "/assets/imgs/authors/author-3.jpg"} alt={author.name} className="avatar" width={100} height={100} />
                                </Link>
                            </div>
                            <div className="author-info">
                                <h3>
                                    <span className="vcard author">
                                        <span className="fn">
                                            <Link href={`/author/${author.slug}`} title={`Posted by ${author.name}`} rel="author">
                                                {author.name}
                                            </Link>
                                        </span>
                                    </span>
                                </h3>
                                <h5>About author</h5>
                                <div className="author-description">You should write because you love the shape of stories and sentences and the creation of different words on a page.</div>
                                <Link href={`/author/${author.slug}`} className="author-bio-link mb-md-0 mb-3">
                                    View all posts
                                </Link>
                                <div className="author-social">
                                    <ul className="author-social-icons">
                                        <li className="author-social-link-facebook">
                                            <a href="#" target="_blank">
                                                <i className="ti-facebook" />
                                            </a>
                                        </li>
                                        <li className="author-social-link-twitter">
                                            <a href="#" target="_blank">
                                                <i className="ti-twitter-alt" />
                                            </a>
                                        </li>
                                        <li className="author-social-link-pinterest">
                                            <a href="#" target="_blank">
                                                <i className="ti-pinterest" />
                                            </a>
                                        </li>
                                        <li className="author-social-link-instagram">
                                            <a href="#" target="_blank">
                                                <i className="ti-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*related posts*/}
                        <div className="related-posts">
                            <h3 className="mb-30">Related posts</h3>
                            <div className="loop-list">
                                <article className="row mb-30 ">
                                    <div className="col-md-4">
                                        <div className="post-thumb position-relative thumb-overlay mb-md-0 mb-3">
                                            <div className="img-hover-slide border-radius-5 position-relative">
                                                <div className="post-image-container">
                                                    <Image src="/assets/imgs/news/news-11.jpg" alt="newsboard" width={256} height={256} className="post-image" />
                                                </div>
                                                <Link className="img-link" href="/single" />
                                                <span className="top-right-icon background8">
                                                    <i className="mdi mdi-flash-on" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 align-center-vertical">
                                        <div className="post-content">
                                            <div className="entry-meta meta-0 font-small mb-15">
                                                <Link href="/category">
                                                    <span className="post-cat background2 color-white"># Fashion</span>
                                                </Link>
                                            </div>
                                            <h4 className="post-title mb-15">
                                                <Link href="/single">The World Caters to Average People and Mediocre Lifestyles</Link>
                                            </h4>
                                            <p className="font-medium excerpt">These people envy me for having a lifestyle they don't have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi-million dollar home currently.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="row mb-30 ">
                                    <div className="col-md-4">
                                        <div className="post-thumb position-relative thumb-overlay mb-md-0 mb-3">
                                            <div className="img-hover-slide border-radius-5 position-relative">
                                                <div className="post-image-container">
                                                    <Image src="/assets/imgs/news/news-12.jpg" alt="newsboard" width={256} height={256} className="post-image" />
                                                </div>
                                                <Link className="img-link" href="/single" />
                                                <span className="top-right-icon background5">
                                                    <i className="mdi mdi-favorite" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 align-center-vertical">
                                        <div className="post-content">
                                            <div className="entry-meta meta-0 font-small mb-15">
                                                <Link href="/category">
                                                    <span className="post-cat background3 color-white"># Technology</span>
                                                </Link>
                                            </div>
                                            <h4 className="post-title mb-15">
                                                <Link href="/single">Why Teamwork Really Makes The Dream Work</Link>
                                            </h4>
                                            <p className="font-medium excerpt">We live in a world where disruption and dynamism reign supreme and businesses must be ready to adapt to the many unpredictable changes that come with this.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="row mb-30 ">
                                    <div className="col-md-4">
                                        <div className="post-thumb position-relative thumb-overlay mb-md-0 mb-3">
                                            <div className="img-hover-slide border-radius-5 position-relative">
                                                <div className="post-image-container">
                                                    <Image src="/assets/imgs/news/news-13.jpg" alt="newsboard" width={256} height={256} className="post-image" />
                                                </div>
                                                <Link className="img-link" href="/single" />
                                                <span className="top-right-icon background2">
                                                    <i className="mdi mdi-audiotrack" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 align-center-vertical">
                                        <div className="post-content">
                                            <div className="entry-meta meta-0 font-small mb-15">
                                                <Link href="/category">
                                                    <span className="post-cat background1 color-white"># Sport</span>
                                                </Link>
                                            </div>
                                            <h4 className="post-title mb-15">
                                                <Link href="/single">9 Things I Love About Shaving My Head During Quarantine</Link>
                                            </h4>
                                            <p className="font-medium excerpt">At the Emmys, broadcast scripted shows created by people of color gained ground relative to those pitched by White show creators, while broadcast scripted shows.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        {/*More posts*/}
                        <MoreArticles>
                            <h6 className="widget-title mb-30 font-weight-bold text">You might be interested in</h6>
                            <div className="post-block-list post-module-1 post-module-5">
                                <ul className="list-post">
                                    <li className="mb-15">
                                        <div className="d-flex">
                                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link className="color-white" href="/single">
                                                    <Image src="/assets/imgs/news/thumb-1.jpg" alt="newsboard" width={100} height={100} />
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">
                                                    <Link href="/single">America's Governors Get Tested for a Virus That Is Testing Them</Link>
                                                </h6>
                                                <div className="entry-meta meta-1 font-x-small color-grey">
                                                    <span className="post-on">25 Jun</span>
                                                    <span className="hit-count has-dot">126k Views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link className="color-white" href="/single">
                                                    <Image src="/assets/imgs/news/thumb-2.jpg" alt="newsboard" width={100} height={100} />
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">
                                                    <Link href="/single">Bartering Child's Dress for Food: Life in Lebanon's Economic Crisis</Link>
                                                </h6>
                                                <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                                    <span className="post-on">25 April</span>
                                                    <span className="hit-count has-dot">37k Views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </MoreArticles>
                        {/*Comments*/}
                        <div className="comments-area">
                            <h3 className="mb-30">03 Comments</h3>
                            <div className="comment-list ">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <Image src="/assets/imgs/authors/author-1.jpg" alt="newsboard" width={54} height={54} />
                                        </div>
                                        <div className="desc">
                                            <p className="comment">Vestibulum euismod, leo eget varius gravida, eros enim interdum urna, non rutrum enim ante quis metus. Duis porta ornare nulla ut bibendum</p>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h5>
                                                        <a href="#">Robert Edition</a>
                                                    </h5>
                                                    <p className="date">6 minutes ago</p>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#" className="btn-reply">
                                                        Reply
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-list ">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <Image src="/assets/imgs/authors/author-2.jpg" alt="newsboard" width={54} height={54} />
                                        </div>
                                        <div className="desc">
                                            <p className="comment">Sed ac lorem felis. Ut in odio lorem. Quisque magna dui, maximus ut commodo sed, vestibulum ac nibh. Aenean a tortor in sem tempus auctor</p>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h5>
                                                        <a href="#">Agatha Christie</a>
                                                    </h5>
                                                    <p className="date">December 4, 2025 at 3:12 pm</p>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#" className="btn-reply">
                                                        Reply
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-list ">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <Image src="/assets/imgs/authors/author-4.jpg" alt="newsboard" width={54} height={54} />
                                        </div>
                                        <div className="desc">
                                            <p className="comment">Donec in ullamcorper quam. Aenean vel nibh eu magna gravida fermentum. Praesent eget nisi pulvinar, sollicitudin eros vitae, tristique odio.</p>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h5>
                                                        <a href="#">Danielle Steel</a>
                                                    </h5>
                                                    <p className="date">December 4, 2025 at 3:12 pm</p>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#" className="btn-reply">
                                                        Reply
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*comment form*/}
                        <div className="comment-form ">
                            <h3 className="mb-30">Leave a Reply</h3>
                            <form className="form-contact comment_form" action="#" id="commentForm">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn button button-contactForm">
                                        Post Comment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </article>
                </div>
                {showSidebar && <Sidebar display="d-block" />}
            </div>
        </>
    );
}
