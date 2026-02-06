import MoreArticles from "@/components/elements/MoreArticles";
import Link from "next/link";
import { Article, Author, Tag } from "@/types";
import CommentForm from "@/components/sections/comments/CommentForm";
import Image from "next/image";

interface Comment {
    id: string | number;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    date: string;
}

interface RelatedArticle {
    id: string | number;
    title: string;
    excerpt: string;
    slug: string;
    category: {
        name: string;
        slug: string;
    };
    featuredImage: string;
    formatIcon?: string;
}

interface SingleSection3Props {
    article?: Article;
    author?: Author;
    tags?: Tag[];
    comments?: Comment[];
    relatedArticles?: RelatedArticle[];
    className?: string;
    showNewsletter?: boolean;
    showComments?: boolean;
    showRelated?: boolean;
}

export default function Section3({
    article = {
        id: 1,
        title: "The effect of livestock on the physiological condition of roe deer is modulated by habitat quality",
        content: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.",
        excerpt: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.",
        slug: "/single",
        publishedAt: new Date(),
        status: "published",
        author: {
            id: 1,
            name: "Barbara Cartland",
            email: "barbara@example.com",
            slug: "/author/barbara-cartland",
            avatar: "/assets/imgs/authors/author-3.jpg",
            bio: "You should write because you love the shape of stories and sentences and the creation of different words on a page.",
        },
        category: {
            id: 1,
            name: "Science",
            slug: "/category/science",
        },
    },
    author = {
        id: 1,
        name: "Barbara Cartland",
        email: "barbara@example.com",
        slug: "/author/barbara-cartland",
        avatar: "/assets/imgs/authors/author-3.jpg",
        bio: "You should write because you love the shape of stories and sentences and the creation of different words on a page.",
    },
    tags = [
        { id: 1, name: "deer", slug: "/tag/deer" },
        { id: 2, name: "nature", slug: "/tag/nature" },
        { id: 3, name: "conserve", slug: "/tag/conserve" },
    ],
    comments = [
        {
            id: 1,
            author: { name: "Robert Edition", avatar: "/assets/imgs/authors/author-1.jpg" },
            content: "Vestibulum euismod, leo eget varius gravida, eros enim interdum urna, non rutrum enim ante quis metus. Duis porta ornare nulla ut bibendum",
            date: "6 minutes ago",
        },
        {
            id: 2,
            author: { name: "Agatha Christie", avatar: "/assets/imgs/authors/author-2.jpg" },
            content: "Sed ac lorem felis. Ut in odio lorem. Quisque magna dui, maximus ut commodo sed, vestibulum ac nibh. Aenean a tortor in sem tempus auctor",
            date: "December 4, 2025 at 3:12 pm",
        },
        {
            id: 3,
            author: { name: "Danielle Steel", avatar: "/assets/imgs/authors/author-4.jpg" },
            content: "Donec in ullamcorper quam. Aenean vel nibh eu magna gravida fermentum. Praesent eget nisi pulvinar, sollicitudin eros vitae, tristique odio.",
            date: "December 4, 2025 at 3:12 pm",
        },
    ],
    relatedArticles = [
        {
            id: 1,
            title: "The World Caters to Average People and Mediocre Lifestyles",
            excerpt: "These people envy me for having a lifestyle they don't have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi-million dollar home currently.",
            slug: "/single",
            category: { name: "Fashion", slug: "/category/fashion" },
            featuredImage: "/assets/imgs/news/news-11.jpg",
            formatIcon: "mdi-flash-on",
        },
        {
            id: 2,
            title: "Why Teamwork Really Makes The Dream Work",
            excerpt: "We live in a world where disruption and dynamism reign supreme and businesses must be ready to adapt to the many unpredictable changes that come with this.",
            slug: "/single",
            category: { name: "Technology", slug: "/category/technology" },
            featuredImage: "/assets/imgs/news/news-12.jpg",
            formatIcon: "mdi-favorite",
        },
        {
            id: 3,
            title: "9 Things I Love About Shaving My Head During Quarantine",
            excerpt: "At the Emmys, broadcast scripted shows created by people of color gained ground relative to those pitched by White show creators, while broadcast scripted shows.",
            slug: "/single",
            category: { name: "Sport", slug: "/category/sport" },
            featuredImage: "/assets/imgs/news/news-13.jpg",
            formatIcon: "mdi-audiotrack",
        },
    ],
    className = "",
    showNewsletter = true,
    showComments = true,
    showRelated = true,
}: SingleSection3Props) {
    return (
        <>
            {/*figure*/}
            <article className={`entry-wraper mb-50 ${className}`}>
                {article.excerpt && article.excerpt.trim() !== article.title.trim() && (
                <div className="excerpt mb-30">
                    <p>{article.excerpt}</p>
                </div>
                )}
                <div className="entry-left-col">
                </div>
                <div className="entry-main-content dropcap ">
                    {article.content ? (
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    ) : (
                        <p>No content available.</p>
                    )}
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
                </div>
                <div className="entry-bottom mt-50 mb-30 ">
                    <div className="tags">
                        {tags.map((tag) => (
                            <a key={tag.id} className="tag" style={{cursor: 'default', textDecoration: 'none'}}>
                                {tag.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="bt-1 border-color-1 mt-30 mb-30" />
                {/*related posts*/}
                {showRelated && (
                    <div className="related-posts">
                        <h3 className="mb-30">Related posts</h3>
                        <div className="loop-list">
                            {relatedArticles.map((relatedArticle) => (
                                <article key={relatedArticle.id} className="row mb-30 ">
                                    <div className="col-md-4">
                                        <div className="post-thumb position-relative thumb-overlay mb-md-0 mb-3">
                                            <div className="img-hover-slide border-radius-5 position-relative">
                                                <div className="post-image-container">
                                                    {relatedArticle.featuredImage ? (
                                                    <Image src={relatedArticle.featuredImage} alt={relatedArticle.title} width={256} height={256} className="post-image" />
                                                    ) : (
                                                        <div className="post-image-placeholder" style={{
                                                            width: '256px',
                                                            height: '256px',
                                                            backgroundColor: '#f5f5f5',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#999',
                                                            fontSize: '14px'
                                                        }}>
                                                            No Image
                                                        </div>
                                                    )}
                                                </div>
                                                <Link className="img-link" href={relatedArticle.slug} />
                                                {relatedArticle.formatIcon && (
                                                    <span className="top-right-icon background8">
                                                        <i className={`mdi ${relatedArticle.formatIcon}`} />
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 align-center-vertical">
                                        <div className="post-content">
                                            <div className="entry-meta meta-0 font-small mb-15">
                                                <Link href={relatedArticle.category.slug}>
                                                    <span className="post-cat background2 color-white"># {relatedArticle.category.name}</span>
                                                </Link>
                                            </div>
                                            <h4 className="post-title mb-15">
                                                <Link href={relatedArticle.slug}>{relatedArticle.title}</Link>
                                            </h4>
                                            <p className="font-medium excerpt">{relatedArticle.excerpt}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
                {/*More posts*/}
                <MoreArticles>
                    <h6 className="widget-title mb-30 font-weight-bold text">You might be interested in</h6>
                    <div className="post-block-list post-module-1 post-module-5">
                        <ul className="list-post">
                            {relatedArticles.map((relatedArticle: any, index: number) => (
                                <li key={relatedArticle.id} className={index === 0 ? "mb-15" : ""}>
                                <div className="d-flex">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <Link className="color-white" href={relatedArticle.slug}>
                                                <Image
                                                    className="cover-image"
                                                    src={relatedArticle.featuredImage || "/assets/imgs/news/thumb-1.jpg"}
                                                    alt={relatedArticle.title}
                                                    width={80}
                                                    height={80}
                                                />
                                        </Link>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-10 text-limit-2-row">
                                                <Link href={relatedArticle.slug}>{relatedArticle.title}</Link>
                                        </h6>
                                            <div className={`entry-meta meta-1 font-x-small color-grey ${index > 0 ? 'mt-10' : ''}`}>
                                                <span className="post-on">
                                                    {new Date(relatedArticle.publishedAt).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                                <span className="hit-count has-dot">
                                                    {relatedArticle.views ? `${Math.floor(relatedArticle.views / 1000)}k Views` : '0 Views'}
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </MoreArticles>
                {/*Comments*/}
                {showComments && (
                    <>
                        <div className="comments-area">
                            <h3 className="mb-30">{comments.length.toString().padStart(2, "0")} Comments</h3>
                            {comments.map((comment) => (
                                <div key={comment.id} className="comment-list ">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <Image src={comment.author.avatar} alt={comment.author.name} width={54} height={54} />
                                            </div>
                                            <div className="desc">
                                                <p className="comment">{comment.content}</p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>
                                                            <a href="#">{comment.author.name}</a>
                                                        </h5>
                                                        <p className="date">{comment.date}</p>
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
                            ))}
                        </div>
                        {/*comment form*/}
                        <div className="comment-form ">
                            <h3 className="mb-30">Leave a Reply</h3>
                            <CommentForm articleId={article.id.toString()} placeholder="Write Comment" submitText="Post Comment" />
                        </div>
                    </>
                )}
            </article>
        </>
    );
}
