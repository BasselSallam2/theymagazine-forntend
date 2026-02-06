import Link from "next/link";
import { Home2HighlightProps } from "@/types";
import Image from "next/image";

export default function Section2({
  title = "Today Highlight",
  articles = [
    {
      id: "1",
      title: "Poland's Presidential Election Was Close but Voters Remain Far Apart",
      content: "Poland's Presidential Election Was Close but Voters Remain Far Apart",
      excerpt: "Poland's Presidential Election Was Close but Voters Remain Far Apart",
      featuredImage: "/assets/imgs/news/news-6.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Politics", slug: "/category" },
      status: "published",
    },
    {
      id: "2",
      title: "After Months of Debate, England Requires Face Masks for Shoppers",
      content: "After Months of Debate, England Requires Face Masks for Shoppers",
      excerpt: "After Months of Debate, England Requires Face Masks for Shoppers",
      featuredImage: "/assets/imgs/news/news-15.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "2", name: "Health", slug: "/category" },
      status: "published",
    },
    {
      id: "3",
      title: "A Racial Awakening in France, Where Race Is a Taboo Topic",
      content: "A Racial Awakening in France, Where Race Is a Taboo Topic",
      excerpt: "A Racial Awakening in France, Where Race Is a Taboo Topic",
      featuredImage: "/assets/imgs/news/news-14.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "3", name: "Society", slug: "/category" },
      status: "published",
    },
    {
      id: "4",
      title: "Strains Show in Russia's Make-Believe Politics",
      content: "Strains Show in Russia's Make-Believe Politics",
      excerpt: "Strains Show in Russia's Make-Believe Politics",
      featuredImage: "/assets/imgs/news/news-3.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "4", name: "Politics", slug: "/category" },
      status: "published",
      hasFormat: true,
      formatIcon: "ti-image",
    },
    {
      id: "5",
      title: "Ireland Has a New Coronavirus Fear: Americans Who Flout Quarantine",
      content: "Ireland Has a New Coronavirus Fear: Americans Who Flout Quarantine",
      excerpt: "Ireland Has a New Coronavirus Fear: Americans Who Flout Quarantine",
      featuredImage: "/assets/imgs/news/news-2.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "5", name: "Health", slug: "/category" },
      status: "published",
    },
    {
      id: "6",
      title: "World Population Could Peak Decades Ahead of U.N. Forecast, Study Asserts",
      content: "World Population Could Peak Decades Ahead of U.N. Forecast, Study Asserts",
      excerpt: "World Population Could Peak Decades Ahead of U.N. Forecast, Study Asserts",
      featuredImage: "/assets/imgs/news/news-7.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "6", name: "Science", slug: "/category" },
      status: "published",
    },
    {
      id: "7",
      title: "Egyptian Dissident Battles Extradition in Spanish Court",
      content: "Egyptian Dissident Battles Extradition in Spanish Court",
      excerpt: "Egyptian Dissident Battles Extradition in Spanish Court",
      featuredImage: "/assets/imgs/news/news-8.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "7", name: "Politics", slug: "/category" },
      status: "published",
      hasFormat: true,
      formatIcon: "ti-headphone",
    },
    {
      id: "8",
      title: "He Changed His Country's Name. Will North Macedonia Punish Him?",
      content: "He Changed His Country's Name. Will North Macedonia Punish Him?",
      excerpt: "He Changed His Country's Name. Will North Macedonia Punish Him?",
      featuredImage: "/assets/imgs/news/news-9.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "8", name: "Politics", slug: "/category" },
      status: "published",
    },
    {
      id: "9",
      title: "'I Felt Defenseless': Seoul Mayor's Secretary Speaks Out About Alleged Abuse",
      content: "'I Felt Defenseless': Seoul Mayor's Secretary Speaks Out About Alleged Abuse",
      excerpt: "'I Felt Defenseless': Seoul Mayor's Secretary Speaks Out About Alleged Abuse",
      featuredImage: "/assets/imgs/news/news-10.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "9", name: "Society", slug: "/category" },
      status: "published",
    },
    {
      id: "10",
      title: "Bahrain to Execute 2 Shiite Protesters After Years of Desperate Appeals",
      content: "Bahrain to Execute 2 Shiite Protesters After Years of Desperate Appeals",
      excerpt: "Bahrain to Execute 2 Shiite Protesters After Years of Desperate Appeals",
      featuredImage: "/assets/imgs/news/news-11.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "10", name: "Politics", slug: "/category" },
      status: "published",
    },
  ],
  className = "",
}: Home2HighlightProps) {
  return (
    <>
      <section className={`hightlight-today mb-30 ${className}`}>
        <h6 className="font-weight-bold widget-header widget-header-style-5 mb-10">
          <span className="d-inline-block block mb-10 widget-title font-family-normal">{title}</span>
        </h6>
        <div className="loop-grid-5 row vertical-divider">
          {articles.slice(0, 5).map((article) => (
            <article key={article.id} className="col-1-5 col-sm-12 ">
              <figure className="mb-15">
                <Link href={article.slug}>
                  <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={224} height={166} />
                </Link>
                {article.hasFormat && (
                  <span className="post-format position-top-right text-uppercase font-small">
                    <i className={article.formatIcon} />
                  </span>
                )}
              </figure>
              <h6 className="font-weight-500 mb-20">
                <Link href={article.slug}>{article.title}</Link>
              </h6>
            </article>
          ))}
          <div className="col-12">
            <div className="horizontal-divider mb-15 mt-15" />
          </div>
        </div>
        <div className="loop-grid-5 row vertical-divider">
          {articles.slice(5, 10).map((article) => (
            <article key={article.id} className="col-1-5 col-sm-12 ">
              <figure className="mb-15">
                <Link href={article.slug}>
                  <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={224} height={166} />
                </Link>
                {article.hasFormat && (
                  <span className="post-format position-top-right text-uppercase font-small">
                    <i className={article.formatIcon} />
                  </span>
                )}
              </figure>
              <h6 className="font-weight-500 mb-20">
                <Link href={article.slug}>{article.title}</Link>
              </h6>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
