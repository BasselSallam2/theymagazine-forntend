"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  label: string;
  href?: string;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    submenu: [
      { label: "Home default", href: "/" },
      { label: "Homepage 2", href: "/home-2" },
      { label: "Homepage 3", href: "/home-3" },
    ],
  },
  {
    label: "Archive Layout",
    submenu: [
      { label: "Category list", href: "/category" },
      { label: "Category grid", href: "/category-grid" },
      { label: "Category big", href: "/category-big" },
      { label: "Category metro", href: "/category-metro" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => (prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]));
  };

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
                        {item.submenu.map((sub) => (
                          <li key={sub.label} className="py-1">
                            <Link href={sub.href ?? "#"}>{sub.label}</Link>
                          </li>
                        ))}
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
