import Link from "next/link";
import Image from "next/image";

interface MasonryCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  authorUrl?: string;
  date: string;
  readTime: string;
  href: string;
}

export default function MasonryCard({ image, title, excerpt, author, authorUrl = "#", date, readTime, href }: MasonryCardProps) {
  return (
    <div className="masonry-item col pb-50 wow fadeIn animated">
      <figure className="mb-15">
        <Link href={href}>
          <Image className="cover-image" src={image} alt={title} width={500} height={500} />
        </Link>
      </figure>
      <h6 className="post-title font-weight-bold mb-10">
        <Link href={href}>{title}</Link>
      </h6>
      <p className="excerpt">{excerpt}</p>
      <div className="entry-meta meta-2 font-x-small color-muted">
        <p className="mb-5">
          By
          <Link href={authorUrl}>
            <span className="author-name">{author}</span>
          </Link>
        </p>
        <span className="me-10">{date}</span>
        <span className="has-dot">{readTime}</span>
      </div>
    </div>
  );
}
