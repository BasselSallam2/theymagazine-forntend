import Link from "next/link";
import { Article, Author, Category } from "@/types";
import Image from "next/image";

interface Single2Section1Props {
  article?: Article;
  authors?: Author[];
  categories?: Category[];
  className?: string;
  showTools?: boolean;
  isLive?: boolean;
}

export default function Section1({
  article = {
    id: 1,
    title: "How to Reopen Schools: What Science and Other Countries Teach Us",
    content: "",
    excerpt: "As school districts across the United States consider whether and how to restart in-person classes, their challenge is complicated by a pair of fundamental uncertainties: No nation has tried to send children back to school with the virus raging at levels like America's.",
    slug: "/single",
    publishedAt: new Date(),
    status: "published",
    readTime: 8,
    author: {
      id: 1,
      name: "K.Cartland",
      email: "k.cartland@example.com",
      slug: "/author/k-cartland",
    },
    category: {
      id: 1,
      name: "World",
      slug: "/category/world",
    },
    featuredImage: "/assets/imgs/news/news-8.jpg",
  },
  authors = [
    {
      id: 1,
      name: "K.Cartland",
      email: "k.cartland@example.com",
      slug: "/author/k-cartland",
      avatar: "/assets/imgs/authors/author-3.jpg",
    },
    {
      id: 2,
      name: "Henry Rosie",
      email: "henry@example.com",
      slug: "/author/henry-rosie",
    },
    {
      id: 3,
      name: "J. Roberto",
      email: "j.roberto@example.com",
      slug: "/author/j-roberto",
    },
  ],
  categories = [
    { id: 1, name: "World", slug: "/category/world" },
    { id: 2, name: "Education", slug: "/category/education" },
  ],
  className = "",
  showTools = true,
  isLive = true,
}: Single2Section1Props) {
  return (
    <>
      <div className={`entry-header mb-30 mt-50 ${className}`}>
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="post-content">
              <div className="entry-meta meta-0 mb-15 font-small">
                {categories.map((category, index) => (
                  <Link key={category.id} href={category.slug}>
                    <span className="post-cat position-relative"># {category.name}</span>
                  </Link>
                ))}
              </div>
              <h1 className="entry-title mb-30 font-weight-500">{article.title}</h1>
              <p className="excerpt mb-30">{article.excerpt}</p>
              <div className="entry-meta align-items-center meta-2 font-small color-muted">
                <p className="mb-5">
                  <a className="author-avatar" href="#">
                    <Image className="img-circle cover-image" src={authors[0]?.avatar || "/assets/imgs/authors/author-3.jpg"} alt={authors[0]?.name} width={40} height={40} />
                  </a>
                  By
                  {authors.map((author, index) => (
                    <span key={author.id}>
                      <Link href={`/author/${author.slug}`}>
                        <span className="author-name font-weight-bold color-black">{author.name}</span>
                      </Link>
                      {index < authors.length - 1 && index === authors.length - 2 && " and "}
                      {index < authors.length - 1 && index < authors.length - 2 && ", "}
                    </span>
                  ))}
                </p>
                {isLive && <span className="live-now text-danger">Live now</span>}
                <span className="has-dot">{article.readTime} mins read</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-md-0 mb-sm-3">
            <figure className="mb-0 mt-lg-0 mt-3">
              <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-8.jpg"} alt={article.title} width={596} height={442} />
            </figure>
            {showTools && (
              <div className="single-tools mt-15">
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
            )}
          </div>
          <hr className="wp-block-separator is-style-dots" />
        </div>
      </div>
    </>
  );
}
