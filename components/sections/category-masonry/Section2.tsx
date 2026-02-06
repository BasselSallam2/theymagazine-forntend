"use client";

import Masonry from "react-masonry-css";
import MasonryCard from "@/util/MasonryGrid";
import { CategoryMasonryProps, Article } from "@/types";

export default function Section2({
  articles = [
    {
      id: "1",
      title: "There's a 49 Percent Chance the World As We Know It Will End by 2050",
      content: "Jared Diamond's new book, Upheaval, addresses itself to a world very obviously in crisis.",
      excerpt: "Jared Diamond's new book, Upheaval, addresses itself to a world very obviously in crisis.",
      featuredImage: "/assets/imgs/news/slide-5.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "2",
      title: "Barr Urges U.S. Companies to Resist Serving as 'Pawns' for China",
      content: "The attorney general accused several companies by name of appeasing an authoritarian government to preserve access to a huge consumer market.",
      excerpt: "The attorney general accused several companies by name of appeasing an authoritarian government to preserve access to a huge consumer market.",
      featuredImage: "/assets/imgs/news/news-16.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "3",
      title: "How a Struggling Company Won $1.6 Billion to Make a Coronavirus Vaccine",
      content: "Novavax just received the Trump administration's largest vaccine contract. In the Maryland company's 33-year history, it has never brought a vaccine to market.",
      excerpt: "Novavax just received the Trump administration's largest vaccine contract. In the Maryland company's 33-year history, it has never brought a vaccine to market.",
      featuredImage: "/assets/imgs/news/thumb-8.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "4",
      title: "Boom Time for Death Planning",
      content: "The coronavirus pandemic has drawn new business to start-ups that provide end-of-life services, from estate planning to a final tweet.",
      excerpt: "The coronavirus pandemic has drawn new business to start-ups that provide end-of-life services, from estate planning to a final tweet.",
      featuredImage: "/assets/imgs/news/slide-14.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "5",
      title: "A Brazen Online Attack Targets V.I.P. Twitter Users in a Bitcoin Scam",
      content: "In a major show of force, hackers breached some of the site's most prominent accounts, a Who's Who of Americans in politics, entertainment and tech.",
      excerpt: "In a major show of force, hackers breached some of the site's most prominent accounts, a Who's Who of Americans in politics, entertainment and tech.",
      featuredImage: "/assets/imgs/news/slide-2.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "6",
      title: "FaZe Clan President Departs: 'It's Time for Gaming to Clean Up Its Act'",
      content: "Greg Selkoe is leaving the successful esports conglomerate to start a new venture that's less 'frat house' and more diverse.",
      excerpt: "Greg Selkoe is leaving the successful esports conglomerate to start a new venture that's less 'frat house' and more diverse.",
      featuredImage: "/assets/imgs/news/news-18.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "7",
      title: "Airbnb Says Its I.P.O. Plans Are Back on Track",
      content: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
      excerpt: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
      featuredImage: "/assets/imgs/news/slide-6.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "8",
      title: "Hollywood Stays Away From Facebook Ad Boycott",
      content: "The entertainment business is a big advertiser but has been noticeably silent as other industries protest the social network's handling of hate speech.",
      excerpt: "The entertainment business is a big advertiser but has been noticeably silent as other industries protest the social network's handling of hate speech.",
      featuredImage: "/assets/imgs/news/slide-15.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "9",
      title: "How to Fight Health 'Cures' Online",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      featuredImage: "/assets/imgs/news/slide-13.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "10",
      title: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets",
      content: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It's not Latin, though it looks like it, and it actually says nothing,' Before & After magazine answered a curious reader, 'Its 'words' loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.'",
      excerpt: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It's not Latin, though it looks like it, and it actually says nothing,' Before & After magazine answered a curious reader, 'Its 'words' loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.'",
      featuredImage: "/assets/imgs/news/slide-10.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "11",
      title: "YouTube's Factory Workers Are Angry",
      content: "There's a power imbalance between the internet companies and those who make the posts and videos.",
      excerpt: "There's a power imbalance between the internet companies and those who make the posts and videos.",
      featuredImage: "/assets/imgs/news/thumb-6.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    },
    {
      id: "12",
      title: "How Facebook Handles Climate Disinformation",
      content: "Critics say a company policy that exempts opinion articles from fact-checking amounts to a huge loophole for climate change deniers.",
      excerpt: "Critics say a company policy that exempts opinion articles from fact-checking amounts to a huge loophole for climate change deniers.",
      featuredImage: "/assets/imgs/news/slide-2.jpg",
      slug: "/single",
      publishedAt: "2025-04-15",
      author: { id: "1", name: "Steven Kenedy", email: "steven@example.com", slug: "/author" },
      category: { id: "1", name: "Technology", slug: "/category" },
      readTime: 8,
      status: "published"
    }
  ],
  breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  } as const,
  className = ""
}: CategoryMasonryProps) {
  return (
    <>
      {/*Loop Masonry*/}
      <Masonry breakpointCols={breakpoints} className={`masonry-grid ${className}`} columnClassName="masonry-grid_column">
        {articles.map((article) => (
          <div key={article.id}>
            <MasonryCard
              image={article.featuredImage || ""}
              title={article.title}
              excerpt={article.excerpt || ""}
              author={article.author.name}
              authorUrl={article.author.slug}
              date={new Date(article.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              readTime={`${article.readTime} mins read`}
              href={article.slug}
            />
          </div>
        ))}
      </Masonry>
    </>
  );
}
