import Link from "next/link";
import { Category, BaseComponentProps } from "@/types";

interface CategoryBigHeaderProps extends BaseComponentProps {
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
    name: "Education",
    slug: "education",
    description: "Education related articles and news"
  },
  breadcrumb = {
    home: "Home",
    current: "Education"
  },
  subCategories = [
    { name: "Admissions", slug: "admissions", href: "/category" },
    { name: "Homeschool", slug: "homeschool", href: "/category" },
    { name: "Learning", slug: "learning", href: "/category" },
    { name: "Postgraduate", slug: "postgraduate", href: "/category" },
    { name: "Online", slug: "online", href: "/category" },
    { name: "Student", slug: "student", href: "/category" }
  ],
  showSubCategories = true,
  showLine = true,
  className
}: CategoryBigHeaderProps = {}) {
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
