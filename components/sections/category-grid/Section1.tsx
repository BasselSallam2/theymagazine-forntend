import Link from "next/link";
import { Category, BaseComponentProps } from "@/types";

interface CategoryGridHeaderProps extends BaseComponentProps {
  category?: Category;
  breadcrumb?: {
    home: string;
    current: string;
  };
  subCategories?: Array<{
    name: string;
    slug: string;
    href: string;
  }>;
  showSubCategories?: boolean;
  showLine?: boolean;
}

export default function Section1({
  category = {
    id: 1,
    name: "The World",
    slug: "world",
    description: "World news and international coverage"
  },
  breadcrumb = {
    home: "Home",
    current: "World"
  },
  subCategories = [
    { name: "Africa", slug: "africa", href: "/category" },
    { name: "Australia", slug: "australia", href: "/category" },
    { name: "Americas", slug: "americas", href: "/category" },
    { name: "Asia Pacific", slug: "asia-pacific", href: "/category" },
    { name: "Europe", slug: "europe", href: "/category" },
    { name: "Middle East", slug: "middle-east", href: "/category" },
    { name: "Southeast Asia", slug: "southeast-asia", href: "/category" },
    { name: "Eastern Europe", slug: "eastern-europe", href: "/category" },
    { name: "North Korea", slug: "north-korea", href: "/category" }
  ],
  showSubCategories = true,
  showLine = true,
  className
}: CategoryGridHeaderProps = {}) {
  return (
    <>
      {/*archive header*/}
      <div className={`archive-header mt-30 ${className || ''}`}>
        <div className="breadcrumb font-small">
          <Link href="/">{breadcrumb.home}</Link>
          <span /> {breadcrumb.current}
        </div>
        <h2 className="font-weight-bold">
          <span className="font-family-normal">{category.name}</span>
        </h2>
        {showSubCategories && subCategories.length > 0 && (
          <ul className="sub-category list-inline font-x-small text-uppercase">
            {subCategories.map((subCat, index) => (
              <li key={index} className="list-inline-item">
                <Link href={subCat.href}>{subCat.name}</Link>
              </li>
            ))}
          </ul>
        )}
        {showLine && <span className="line-dots mt-30 mb-30" />}
      </div>
    </>
  );
}
