import { Article } from "@/types";
import Image from "next/image";

interface SingleSection2Props {
  article?: Article;
  className?: string;
}

export default function Section2({
  article = {
    id: 1,
    title: "The effect of livestock on the physiological condition of roe deer is modulated by habitat quality",
    content: "",
    excerpt: "",
    slug: "/single",
    publishedAt: new Date(),
    status: "published",
    author: {
      id: 1,
      name: "Barbara Cartland",
      email: "barbara@example.com",
      slug: "/author/barbara-cartland",
    },
    category: {
      id: 1,
      name: "Science",
      slug: "/category/science",
    },
    featuredImage: "/assets/imgs/news/news-22.jpg",
  },
  className = "",
}: SingleSection2Props) {
  return (
    <>
      {/*end single header*/}
      <figure className={`image mb-30 m-auto text-center border-radius-2 ${className}`} style={{ maxWidth: '600px' }}>
        <Image className="cover-image" src={article.featuredImage || "/assets/imgs/news/news-22.jpg"} alt={article.title} width={480} height={240} />
      </figure>
    </>
  );
}
