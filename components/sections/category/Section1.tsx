import Link from "next/link";
import { Category, BaseComponentProps } from "@/types";

interface CategoryHeaderProps extends BaseComponentProps {
  category?: Category;
  breadcrumb?: {
    home: string;
    current: string;
  };
  showDescription?: boolean;
  showLine?: boolean;
  isArabic?: boolean;
}

export default function Section1({
  category = {
    id: 1,
    name: "International",
    slug: "international",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure vero qui dolore dolor quo, at, aut iste ad quas, error excepturi nobis, laboriosam sit atque! Laudantium qui porro enim illo."
  },
  breadcrumb = {
    home: "Home",
    current: "International"
  },
  showDescription = true,
  showLine = true,
  isArabic = false,
  className
}: CategoryHeaderProps = {}) {
  return (
    <>
      {/*archive header*/}
      <div className={`archive-header text-center mt-30 ${className || ''}`}>
        <div className={`breadcrumb font-small ${isArabic ? 'text-right' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
          <Link href="/">{breadcrumb.home}</Link>
          <span /> {breadcrumb.current}
        </div>
        <h2 className="font-weight-bold">
          <span className="font-family-normal">{category.name}</span>
        </h2>
        {showDescription && category.description && (
          <p className="width-50">{category.description}</p>
        )}
        {showLine && <span className="line-dots mt-30 mb-30" />}
      </div>
    </>
  );
}
