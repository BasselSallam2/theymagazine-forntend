import Link from "next/link";
import { Home2EditorPickedProps, Article } from "@/types";
import Image from "next/image";

export default function Section3({
  title = "# Editor Picked",
  mainArticles = [
    {
      id: "1",
      title: "Unlucky Charms: The Rise and Fall of Billion-Dollar Jewelry Empire Alex and Ani",
      content: "The headwrap has undergone several iterations throughout American history. As a descendant of the cloths that adorned the heads of women in ancient Egypt and sub-Saharan Africa",
      excerpt: "The headwrap has undergone several iterations throughout American history. As a descendant of the cloths that adorned the heads of women in ancient Egypt and sub-Saharan Africa",
      featuredImage: "/assets/imgs/news/news-21.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Woman", slug: "/category" },
      tags: [
        { id: "1", name: "Woman", slug: "/category" },
        { id: "2", name: "America", slug: "/category" },
      ],
      status: "published",
    },
    {
      id: "2",
      title: "Coronavirus May Be a Blood Vessel Disease, Which Explains Everything",
      content: "April, blood clots emerged as one of the many mysterious symptoms attributed to Covid-19, a disease that had initially been thought to largely affect the lungs in the form of pneumonia.",
      excerpt: "April, blood clots emerged as one of the many mysterious symptoms attributed to Covid-19, a disease that had initially been thought to largely affect the lungs in the form of pneumonia.",
      featuredImage: "/assets/imgs/news/news-22.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "2", name: "Covid19", slug: "/category" },
      tags: [
        { id: "3", name: "Covid19", slug: "/category" },
        { id: "4", name: "Health", slug: "/category" },
        { id: "5", name: "WHO", slug: "/category" },
      ],
      status: "published",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/5DGwOJXSxqg?si=xh4KrjiZSQoW92wB",
    },
  ],
  sidebarArticles = [
    {
      id: "3",
      title: "Gaming During the Pandemic Is Starting to Feel Like Work",
      content: "Recognizing that he was about to spend a lot of time stuck in his apartment, Plenke, a branded content editor",
      excerpt: "Recognizing that he was about to spend a lot of time stuck in his apartment, Plenke, a branded content editor",
      featuredImage: "/assets/imgs/news/news-8.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "3", name: "Stayhome", slug: "/category" },
      tags: [{ id: "6", name: "Stayhome", slug: "/category" }],
      status: "published",
    },
    {
      id: "4",
      title: "Tiny Weed-Killing Robots Could Make Pesticides Obsolete",
      content: "Clint Brauer's farm outside of Cheney, Kansas, could be described as Old MacDonald's Farm plus robots",
      excerpt: "Clint Brauer's farm outside of Cheney, Kansas, could be described as Old MacDonald's Farm plus robots",
      featuredImage: "/assets/imgs/news/news-9.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "4", name: "Agriculture", slug: "/category" },
      tags: [{ id: "7", name: "Agriculture", slug: "/category" }],
      status: "published",
    },
  ],
  className = "",
}: Home2EditorPickedProps) {
  return (
    <>
      {/*Loop Grid 4*/}
      <section className={`editor-picked mb-30 ${className}`}>
        <h6 className="font-weight-bold widget-header widget-header-style-3 mb-20">
          <span className="d-inline-block block mb-10 widget-title font-family-normal">{title}</span>
          <span className="line-dots" />
        </h6>
        <div className="loop-grid-3 row vertical-divider">
          <div className="col-lg-7 col-md-12">
            <div className="row vertical-divider">
              {mainArticles.map((article, index) => (
                <article key={article.id} className="col-md-6 ">
                  {article.hasVideo ? (
                    <iframe className="photo-item__video mw-100" width="560" height="200" src={article.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  ) : (
                    <figure className="mb-15">
                      <Link href={article.slug}>
                        <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={338} height={190} />
                      </Link>
                    </figure>
                  )}
                  <h6 className="post-title font-weight-bold mb-10">
                    <Link href={article.slug}>{article.title}</Link>
                  </h6>
                  <p className="excerpt">{article.excerpt}</p>
                  <div className="entry-meta meta-0 mb-15 font-small">
                    {article.tags?.map((tag, tagIndex) => (
                      <Link key={tagIndex} href={tag.slug}>
                        <span className="post-cat position-relative"># {tag.name}</span>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="col-lg-5 col-md-12 d-none d-lg-block">
            {sidebarArticles.map((article, index) => (
              <article key={article.id} className="row ">
                <div className="col-md-6">
                  <div className="entry-meta meta-0 mb-15 font-small">
                    {article.tags?.map((tag, tagIndex) => (
                      <Link key={tagIndex} href={tag.slug}>
                        <span className="post-cat position-relative"># {tag.name}</span>
                      </Link>
                    ))}
                  </div>
                  <h6 className="post-title mb-20 font-weight-bold">
                    <Link href={article.slug}>{article.title}</Link>
                  </h6>
                  <p className="excerpt mb-0">{article.excerpt}</p>
                </div>
                <div className="col-md-6">
                  <figure className="mb-0">
                    <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-1.jpg"} alt="newsboard" width={224} height={174} />
                  </figure>
                </div>
                {index < sidebarArticles.length - 1 && (
                  <div className="col-12">
                    <div className="has-top-border mb-15 mt-15" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
