import Link from "next/link";
import { Article, Author } from "@/types";
import Image from "next/image";

interface SingleSection1Props {
  article?: Article;
  author?: Author;
  className?: string;
  showTools?: boolean;
}

export default function Section1({
  article = {
    id: 1,
    title: "The effect of livestock on the physiological condition of roe deer is modulated by habitat quality",
    content: "",
    excerpt: "",
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
  },
  className = "",
  showTools = true,
}: SingleSection1Props) {
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
      <div className={`entry-header entry-header-style-1 mb-30 mt-50 ${className}`}>
        <h1 className="entry-title mb-30 font-weight-500">{article.title}</h1>
      </div>
    </>
  );
}
