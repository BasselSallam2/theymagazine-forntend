import Link from "next/link";
import { CategoryListHeaderProps } from "@/types";

export default function Section1({
  categoryName = "Technology",
  breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "#", isCurrent: true }
  ],
  subCategories = [
    { name: "Social Network", href: "/category" },
    { name: "Hardware", href: "/category" },
    { name: "Gear", href: "/category" },
    { name: "Science", href: "/category" },
    { name: "Security", href: "/category" },
    { name: "Product review", href: "/category" },
    { name: "AI & Machine Learning", href: "/category" }
  ],
  className = ""
}: CategoryListHeaderProps) {
  return (
    <>
      {/*archive header*/}
      <div className={`archive-header mt-30 ${className}`}>
        <div className="breadcrumb font-small">
          {breadcrumbItems.map((item, index) => (
            <span key={index}>
              {index > 0 && <span />}
              {item.isCurrent ? (
                item.label
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </span>
          ))}
        </div>
        <h2 className="font-weight-bold">
          <span className="font-family-normal">{categoryName}</span>
        </h2>
        <ul className="sub-category list-inline font-x-small text-uppercase">
          {subCategories.map((subCategory, index) => (
            <li key={index} className="list-inline-item">
              <Link href={subCategory.href}>{subCategory.name}</Link>
            </li>
          ))}
        </ul>
        <span className="line-dots mt-30 mb-30" />
      </div>
    </>
  );
}
