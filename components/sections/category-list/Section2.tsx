import Sidebar from "@/components/elements/Sidebar";
import Link from "next/link";
import { CategoryListContentProps } from "@/types";
import Image from "next/image";

export default function Section2({
  featuredArticle = {
    id: "1",
    title: "This magical drug mansion in Upstate New York is where the psychedelic '60s took off",
    content: "William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.",
    excerpt: "William Mellon Hitchcock was not your typical acid head. Billy, as he was called, was a tall, charming blonde stockbroker in his twenties who worked at Lehman Brothers, for one. He was heir to one of the largest fortunes in the country, for another.",
    featuredImage: "/assets/imgs/news/news-22.jpg",
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
  categoryArticles = {
    Biological: [
      {
        id: "2",
        title: "There's a 49 Percent Chance the World As We Know It Will End by 2050",
        content: "Jared Diamond's new book, Upheaval, addresses itself to a world very obviously in crisis.",
        excerpt: "Jared Diamond's new book, Upheaval, addresses itself to a world very obviously in crisis.",
        thumbnailImage: "/assets/imgs/news/news-2.jpg",
        slug: "/single",
        publishedAt: "2025-04-15",
        author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
        category: { id: "2", name: "Biological", slug: "/category" },
        readTime: 8,
        status: "published",
      },
      {
        id: "3",
        title: "Why The New York City subway signage is considered iconic? The true story",
        content: "Black and white signs with Helvetica showing just the information subway riders",
        excerpt: "Black and white signs with Helvetica showing just the information subway riders",
        thumbnailImage: "/assets/imgs/news/news-3.jpg",
        slug: "/single",
        publishedAt: "2025-04-15",
        author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
        category: { id: "2", name: "Biological", slug: "/category" },
        readTime: 8,
        status: "published",
        isLive: true,
      },
      {
        id: "4",
        title: "This Freedom Rider was shot at, attacked, and put on death row—all by 20 years old",
        content: "As Trumpauer left Jackson behind, she didn't know if her life was about to get better or worse",
        excerpt: "As Trumpauer left Jackson behind, she didn't know if her life was about to get better or worse",
        thumbnailImage: "/assets/imgs/news/news-4.jpg",
        slug: "/single",
        publishedAt: "2025-04-15",
        author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
        category: { id: "2", name: "Biological", slug: "/category" },
        readTime: 8,
        status: "published",
      },
      {
        id: "5",
        title: "This athlete conquered poverty, racism, and polio in order to became an Olympian",
        content: "Six-year-old Wilma Rudolph was different from the other kids.",
        excerpt: "Six-year-old Wilma Rudolph was different from the other kids.",
        thumbnailImage: "/assets/imgs/news/news-5.jpg",
        slug: "/single",
        publishedAt: "2025-04-15",
        author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
        category: { id: "2", name: "Biological", slug: "/category" },
        readTime: 8,
        status: "published",
      },
    ],
    Scientific: [
      {
        id: "6",
        title: "The Endgame for LinkedIn Is Coming",
        content: "After two years, Microsoft still hasn't delivered on its grand vision for LinkedIn. And it may never do so. Every time this LinkedIn commercial pops up on YouTube I am reminded of how low the company has fallen to.",
        excerpt: "After two years, Microsoft still hasn't delivered on its grand vision for LinkedIn. And it may never do so. Every time this LinkedIn commercial pops up on YouTube I am reminded of how low the company has fallen to.",
        thumbnailImage: "/assets/imgs/news/news-16.jpg",
        slug: "/single",
        publishedAt: "2025-04-15",
        author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
        category: { id: "3", name: "Scientific", slug: "/category" },
        readTime: 8,
        status: "published",
      },
      {
        id: "7",
        title: "Neuroscience Says Listening to This Song Reduces Anxiety by Up to 65 Percent",
        content: "After a calamitous drop in March, the stock market has had a ferocious rally, despite a cascade of awful news. How can investors cope?",
        excerpt: "After a calamitous drop in March, the stock market has had a ferocious rally, despite a cascade of awful news. How can investors cope?",
        thumbnailImage: "/assets/imgs/news/news-18.jpg",
        slug: "/single",
        publishedAt: "2025-05-12",
        author: { id: "2", name: "Sally Rooney", email: "sally@example.com", slug: "/author" },
        category: { id: "3", name: "Scientific", slug: "/category" },
        readTime: 6,
        status: "published",
      },
      {
        id: "8",
        title: "I Have A Theory That Donald Glover And Childish Gambino Are Secretly The Same Person",
        content: "For anyone who doesn't know who these 2 dudes are, Donald Glover is a beloved actor/writer/comedian and Childish Gambino is a popular musician.",
        excerpt: "For anyone who doesn't know who these 2 dudes are, Donald Glover is a beloved actor/writer/comedian and Childish Gambino is a popular musician.",
        thumbnailImage: "/assets/imgs/news/news-15.jpg",
        slug: "/single",
        publishedAt: "2025-05-15",
        author: { id: "3", name: "David Chariandy", email: "david@example.com", slug: "/author" },
        category: { id: "3", name: "Scientific", slug: "/category" },
        readTime: 18,
        status: "published",
      },
      {
        id: "9",
        title: "Soft and Comfortable with the Buckyball Creative Office Chair",
        content: "Buckyball – creative office chair created by designer Svyatoslav Zbroy – can be a part of the scientific research of fullerenes. Six spheres, consisting of twelve pentagons each, form an unusual structure. Like a stable and multifunctional carbon molecule, Buckyball can withstand heavy loads without losing its shape.",
        excerpt: "Buckyball – creative office chair created by designer Svyatoslav Zbroy – can be a part of the scientific research of fullerenes. Six spheres, consisting of twelve pentagons each, form an unusual structure. Like a stable and multifunctional carbon molecule, Buckyball can withstand heavy loads without losing its shape.",
        thumbnailImage: "/assets/imgs/news/news-14.jpg",
        slug: "/single",
        publishedAt: "2025-03-15",
        author: { id: "4", name: "Jessie Greengrass", email: "jessie@example.com", slug: "/author" },
        category: { id: "3", name: "Scientific", slug: "/category" },
        readTime: 11,
        status: "published",
      },
      {
        id: "10",
        title: "World's 12 Most Expensive Luxury Cars",
        content: "These beautiful vessels are built with the latest technology and of course incredibly luxurious. Their owners are very wealthy people – members of royal families, American business magnates, Russian billionaire businessmen and world-class politicians.",
        excerpt: "These beautiful vessels are built with the latest technology and of course incredibly luxurious. Their owners are very wealthy people – members of royal families, American business magnates, Russian billionaire businessmen and world-class politicians.",
        thumbnailImage: "/assets/imgs/news/news-6.jpg",
        slug: "/single",
        publishedAt: "2025-02-25",
        author: { id: "5", name: "Eley Williams", email: "eley@example.com", slug: "/author" },
        category: { id: "3", name: "Scientific", slug: "/category" },
        readTime: 14,
        status: "published",
      },
    ],
  },
  pagination = {
    currentPage: 1,
    totalPages: 3,
    hasNext: true,
    hasPrev: false,
  },
  className = "",
}: CategoryListContentProps) {
  return (
    <>
      {/*Loop Grid 5*/}
      <div className={`row vertical-divider mb-50 overflow-visible ${className}`}>
        <div className="col-lg-9 col-md-12">
          <div className="mb-30">
            <article className="first-post mb-md-4 mb-lg-0 mb-30">
              <figure className="mb-30">
                <Link href={featuredArticle.slug}>
                  <Image className="cover-image" src={featuredArticle.featuredImage || ""} alt="newsboard" width={906} height={417} />
                </Link>
              </figure>
              <div className="post-content">
                <h3 className="mb-20 position-relative font-weight-bold">
                  <Link href={featuredArticle.slug}>{featuredArticle.title}</Link>
                </h3>
                <p className="excerpt">{featuredArticle.excerpt}</p>
                <div className="entry-meta meta-0 mb-15 font-small">
                  {featuredArticle.tags?.map((tag, index) => (
                    <Link key={index} href={tag.slug}>
                      <span className="post-cat position-relative"># {tag.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {Object.entries(categoryArticles).map(([categoryName, articles]) => (
              <div key={categoryName}>
                <h6 className="font-weight-bold widget-header widget-header-style-5 mb-10">
                  <span className="d-inline-block block mb-10 widget-title font-family-normal">{categoryName}</span>
                </h6>
                {categoryName === "Biological" ? (
                  <div className="row vertical-divider mb-30">
                    {articles.map((article, index) => (
                      <article key={article.id} className={`col-md-3 ${index % 2 === 0 ? "mb-sm-3" : ""} `}>
                        <figure className="mb-15">
                          <Link href={article.slug}>
                            <Image className="cover-image" src={article.thumbnailImage || ""} alt="newsboard" width={300} height={155} />
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
                ) : (
                  <div className="loop-grid-3">
                    {articles.map((article, index) => (
                      <article key={article.id} className="row ">
                        <div className="col-md-4">
                          <figure className="mb-md-0 mb-sm-3">
                            <Link href={article.slug}>
                              <Image className="cover-image" src={article.thumbnailImage || ""} alt="newsboard" width={286} height={215} />
                            </Link>
                          </figure>
                        </div>
                        <div className="col-md-8">
                          <h4 className="post-title mb-10 font-weight-bold">
                            <Link href={article.slug}>{article.title}</Link>
                          </h4>
                          <p className="excerpt mb-20">{article.excerpt}</p>
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
                        </div>
                        {index < articles.length - 1 && (
                          <div className="col-md-12">
                            <div className="horizontal-divider mt-15 mb-15" />
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pagination-area pt-15 border-top-2 mt-30 font-heading ">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-wrap d-flex">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className={`page-item ${!pagination.hasPrev ? "disabled" : ""}`}>
                          <a className="page-link" href="#">
                            Prev
                          </a>
                        </li>
                        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                          <li key={page} className={`page-item ${page === pagination.currentPage ? "active" : ""}`}>
                            <a className="page-link" href="#">
                              {page.toString().padStart(2, "0")}
                            </a>
                          </li>
                        ))}
                        <li className={`page-item ${!pagination.hasNext ? "disabled" : ""}`}>
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
        </div>
        <Sidebar display="d-none" />
      </div>
    </>
  );
}
