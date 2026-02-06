import Link from "next/link";
import Image from "next/image";
import { Author, BaseComponentProps } from "@/types";

interface AuthorProfileProps extends BaseComponentProps {
  author?: Author;
  showAvatar?: boolean;
  showBio?: boolean;
  showStats?: boolean;
  showSocialLinks?: boolean;
  showBadge?: boolean;
  badgeText?: string;
  badgeIcon?: string;
}

export default function Section1({
  author = {
    id: 1,
    name: "Barbara Cartland",
    email: "barbara@example.com",
    avatar: "/assets/imgs/authors/author-3.jpg",
    bio: "You should write because you love the shape of stories and sentences and the creation of different words on a page.",
    slug: "barbara-cartland",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      pinterest: "#",
      instagram: "#",
    },
    articlesCount: 26000,
  },
  showAvatar = true,
  showBio = true,
  showStats = true,
  showSocialLinks = true,
  showBadge = true,
  badgeText = "Elite author",
  badgeIcon = "ti-star",
  className,
}: AuthorProfileProps = {}) {
  return (
    <>
      {/*archive header*/}
      <div className={`archive-header text-center ${className || ""}`}>
        {/*author box*/}
        <div className="author-bio mt-50">
          {showAvatar && (
            <div className="author-image mb-30">
              <Link href={`/author/${author.slug}`}>
                <Image className="cover-image avatar" src={author.avatar || "/assets/imgs/authors/author-3.jpg"} alt={author.name} width={90} height={90} />
              </Link>
            </div>
          )}
          <div className="author-info">
            <h3 className="font-weight-bold">
              <Link href={`/author/${author.slug}`} title={`Posted by ${author.name}`} rel="author">
                {author.name}
              </Link>
            </h3>
            {showBadge && (
              <h5>
                <i className={`${badgeIcon} font-x-small mr-5`} />
                {badgeText}
              </h5>
            )}
            {showBio && author.bio && <div className="author-description">{author.bio}</div>}
            {showStats && (
              <>
                <span className="mb-md-0 mb-3 text-muted mr-20">{author.articlesCount?.toLocaleString()} articles </span>
                <span className="me-20 text-muted">15k follow</span>
              </>
            )}
            {showSocialLinks && author.socialLinks && (
              <div className="author-social text-muted font-small15k follow">
                <ul className="author-social-icons">
                  {author.socialLinks.facebook && (
                    <li className="author-social-link-facebook">
                      <a href={author.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                  )}
                  {author.socialLinks.twitter && (
                    <li className="author-social-link-twitter">
                      <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                  )}
                  {author.socialLinks.pinterest && (
                    <li className="author-social-link-pinterest">
                      <a href={author.socialLinks.pinterest} target="_blank" rel="noopener noreferrer">
                        <i className="ti-pinterest" />
                      </a>
                    </li>
                  )}
                  {author.socialLinks.instagram && (
                    <li className="author-social-link-instagram">
                      <a href={author.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="ti-instagram" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
