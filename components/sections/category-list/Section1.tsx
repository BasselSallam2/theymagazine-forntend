import Link from "next/link";
import { CategoryListHeaderProps } from "@/types";

export default function Section1({
  categoryName = "Science",
  breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Science", href: "#", isCurrent: true }
  ],
  subCategories = [
    { name: "Nature", href: "/category" },
    { name: "Biological", href: "/category" },
    { name: "Scientific", href: "/category" },
    { name: "Earth", href: "/category" },
    { name: "Health", href: "/category" },
    { name: "Physical", href: "/category" },
    { name: "Environmental", href: "/category" },
    { name: "Library", href: "/category" }
  ],
  className
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
