import Link from "next/link";
import { Article } from "@/types";
import Image from "next/image";

interface Home3Section1Props {
  featuredArticle?: Article & {
    isLive?: boolean;
  };
  className?: string;
}

export default function Section1({
  featuredArticle = {
    id: 1,
    title: "How to Reopen Schools: What Science and Other Countries Teach Us",
    content: "",
    excerpt: "As school districts across the United States consider whether and how to restart in-person classes, their challenge is complicated by a pair of fundamental uncertainties: No nation has tried to send children back to school with the virus raging at levels like America's, and the scientific research about transmission in classrooms is limited.",
    slug: "/single",
    publishedAt: new Date(),
    featuredImage: "/assets/imgs/news/news-16.jpg",
    status: "published",
    author: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      slug: "/author/john-doe",
    },
    category: {
      id: 1,
      name: "World",
      slug: "/category/world",
    },
    isLive: true,
  },
  className = "",
}: Home3Section1Props) {
  return (
    <>
      {/*Featured post Start*/}
      <div className={`post-featured-1 mb-30 mt-30 ${className}`}>
        <div className="slide-face">
          <article className="row slide-fade-item" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <div className="col-md-6 mb-md-0 mb-sm-3">
              <figure className="mb-0">
                <Link href={featuredArticle.slug}>
                  <Image className="cover-image" src={featuredArticle.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={596} height={443} />
                </Link>
                <span className="post-format position-top-right text-uppercase font-small">
                  <i className="ti-stats-up" />
                </span>
              </figure>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="post-content text-center plr-5-percent">
                <div className="entry-meta meta-0 mb-15 font-small">
                  <Link href={`/category/${featuredArticle.category.slug}`}>
                    <span className="post-cat position-relative"># {featuredArticle.category.name}</span>
                  </Link>
                </div>
                <h2 className="post-title mb-30 position-relative divider-wave">
                  <Link href={featuredArticle.slug}>{featuredArticle.title}</Link>
                </h2>
                <p className="excerpt">{featuredArticle.excerpt}</p>
                {featuredArticle.isLive && (
                  <p>
                    <span className="live-now text-danger">Live now</span>
                  </p>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
