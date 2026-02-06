"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type MenuItem = {
  label: string;
  href?: string;
  submenu?: MenuItem[];
};

interface NavbarItem {
  _id: string;
  title: string;
  category: string;
  slug?: string;
  idx: number;
  items: any;
}

interface NavbarResponse {
  success: boolean;
  data: NavbarItem[];
}

const API_ENDPOINT = "/api/navbar?sort=idx";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);
  const [navbarItems, setNavbarItems] = useState<NavbarItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();
  const isArabicPage = pathname?.startsWith("/category/byqwlw-ayh") || pathname?.startsWith("/byqwlw-ayh/");

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => (prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]));
  };

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const response = await fetch(API_ENDPOINT);

        if (!response.ok) {
          const errorStatus = response.status;
          console.error("Failed to fetch navbar data. Status:", errorStatus);
          throw new Error(`Failed to fetch navbar data (Status: ${errorStatus})`);
        }

        const result: NavbarResponse = await response.json();

        if (result.success && result.data.length > 0) {
          setNavbarItems(result.data);
        }
      } catch (error) {
        console.error("Error fetching navbar:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavbar();
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: isArabicPage ? "الرئيسية" : "Home",
      href: "/",
    },
    {
      label: "بيقولوا إيه؟",
      href: "/category/byqwlw-ayh",
    },
    {
      label: isArabicPage ? "الأقسام" : "Sections",
      submenu: navbarItems.map((item) => ({
        label: item.title,
        href: `/category/${item.title.toLowerCase().replace(/\s/g, "-")}`,
      })),
    },
    {
      label: isArabicPage ? "اتصل بنا" : "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <div className="mobile_menu d-lg-none">
      <div className="slicknav_menu">
        <div className={`container ${isOpen ? "slicknav_collapsed" : "slicknav_open"}`}>
          <button onClick={toggleMenu} className="slicknav_btn slicknav_collapsed">
            <span className="slicknav_menutxt">MENU</span>
            <span className="slicknav_icon">
              {isOpen ? (
                <>
                  <i className="ti-close mr-5"></i>
                </>
              ) : (
                <>
                  <i className="ti-view-grid font-small mr-5"></i>
                  <span className="menu-text">Menu</span>
                </>
              )}
            </span>
          </button>
        </div>

        {isOpen && (
          <ul className="slicknav_nav">
            {menuItems.map((item) => (
              <li key={item.label} className={`slicknav_parent ${openSubmenus.includes(item.label) ? "slicknav_open" : "slicknav_collapsed"}`}>
                {item.submenu ? (
                  <>
                    <a 
                      key={`menu-${item.label}`}
                      onClick={() => toggleSubmenu(item.label)} 
                      className="slicknav_item slicknav_row"
                    >
                      {item.label}
                      <span className="slicknav_arrow">{openSubmenus.includes(item.label) ? "−" : "+"}</span>
                    </a>
                    {openSubmenus.includes(item.label) && (
                      <ul className="sub-menu text-muted font-small">
                        {isLoading && item.label === (isArabicPage ? "الأقسام" : "Sections") ? (
                          <li className="py-1">Loading...</li>
                        ) : (
                          item.submenu.map((sub) => (
                            <li key={sub.label} className="py-1">
                              <Link href={sub.href ?? "#"}>{sub.label}</Link>
                            </li>
                          ))
                        )}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href ?? "#"}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
