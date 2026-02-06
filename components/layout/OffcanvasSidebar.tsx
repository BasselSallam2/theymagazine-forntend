"use client";
import { useState } from "react";
import Link from "next/link";
import { ArticleImage, UIImage } from "@/components/images";

interface MenuItem {
    label: string;
    href?: string;
    submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        label: "World News",
        submenu: [
            { label: "Africa", href: "#" },
            { label: "Americas", href: "#" },
            { label: "Asia", href: "#" },
            { label: "Canada", href: "#" },
            { label: "Europe", href: "#" },
            { label: "Middle East", href: "#" },
        ],
    },
    {
        label: "Business",
        submenu: [
            { label: "DealBook", href: "#" },
            { label: "Economy", href: "#" },
            { label: "Energy", href: "#" },
            { label: "Markets", href: "#" },
            { label: "Media", href: "#" },
            { label: "Your Money", href: "#" },
            { label: "Automobiles", href: "#" },
        ],
    },
    {
        label: "Sports News",
        submenu: [
            { label: "Baseball", href: "#" },
            { label: "Football", href: "#" },
            { label: "Golf", href: "#" },
            { label: "Hockey", href: "#" },
            { label: "Soccer", href: "#" },
            { label: "Tennis", href: "#" },
            { label: "Marathon", href: "#" },
        ],
    },
    {
        label: "Video News",
        submenu: [
            { label: "Politics", href: "#" },
            { label: "International", href: "#" },
            { label: "Business", href: "#" },
            { label: "Tech", href: "#" },
            { label: "Culture", href: "#" },
            { label: "Style", href: "#" },
            { label: "Health", href: "#" },
            { label: "Sports", href: "#" },
            { label: "Travel", href: "#" },
            { label: "Science", href: "#" },
        ],
    },
    { label: "Opinion", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Science", href: "#" },
    { label: "Health", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Food", href: "#" },
    { label: "Travel", href: "#" },
    { label: "Magazine", href: "#" },
];

interface OffcanvasSidebarProps {
    handleSidebar: () => void;
    leftSidebar?: boolean;
}

export default function OffcanvasSidebar({ handleSidebar, leftSidebar = false }: OffcanvasSidebarProps) {
    const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

    const toggleSubmenu = (label: string) => {
        setOpenSubmenus((prev) => (prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]));
    };

    const ThumbnailImage = ({ assetKey }: { assetKey: string }) => <ArticleImage assetKey={assetKey} isThumbnail={true} />;

    return (
        <>
            {/*Offcanvas sidebar*/}
            <div onClick={handleSidebar} className="dark-mark"></div>
            <aside id="sidebar-wrapper" className={`custom-scrollbar offcanvas-sidebar ${leftSidebar ? "position-left" : ""}`}>
                <button className="off-canvas-close" onClick={handleSidebar}>
                    <i className="ti-close" />
                </button>
                <div className="sidebar-inner">
                    {/*Latest*/}
                    <div className="sidebar-widget widget-latest-posts mb-30">
                        <div className="widget-header position-relative mb-30">
                            <h5 className="widget-title mt-5 mb-30">Don't Miss</h5>
                        </div>
                        <div className="post-block-list post-module-1 post-module-5">
                            <ul className="list-post">
                                <li className="mb-15">
                                    <div className="d-flex">
                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <Link className="color-white" href="/single">
                                                <ThumbnailImage assetKey="thumb1" />
                                            </Link>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-10 text-limit-2-row">
                                                <Link href="/single">America's Governors Get Tested for a Virus That Is Testing Them</Link>
                                            </h6>
                                            <div className="entry-meta meta-1 font-x-small color-grey">
                                                <span className="post-on">25 Jun</span>
                                                <span className="hit-count has-dot">126k Views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-15">
                                    <div className="d-flex">
                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <Link className="color-white" href="/single">
                                                <ThumbnailImage assetKey="thumb2" />
                                            </Link>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-10 text-limit-2-row">
                                                <Link href="/single">Bartering Child's Dress for Food: Life in Lebanon's Economic Crisis</Link>
                                            </h6>
                                            <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                                <span className="post-on">25 April</span>
                                                <span className="hit-count has-dot">37k Views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-15">
                                    <div className="d-flex">
                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <Link className="color-white" href="/single">
                                                <ThumbnailImage assetKey="thumb3" />
                                            </Link>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-10 text-limit-2-row">
                                                <Link href="/single">Cairo Badly Needed a Detox. Lockdown Supplied One, at a Steep Price.</Link>
                                            </h6>
                                            <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                                <span className="post-on">25 April</span>
                                                <span className="hit-count has-dot">54k Views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-15">
                                    <div className="d-flex">
                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <Link className="color-white" href="/single">
                                                <ThumbnailImage assetKey="thumb4" />
                                            </Link>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-10 text-limit-2-row">
                                                <Link href="/single">Eating Thai Fruit Demands Serious Effort but Delivers Sublime Reward</Link>
                                            </h6>
                                            <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                                <span className="post-on">25 April</span>
                                                <span className="hit-count has-dot">54k Views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-15">
                                    <div className="d-flex">
                                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale">
                                            <Link className="color-white" href="/single">
                                                <ThumbnailImage assetKey="thumb5" />
                                            </Link>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-10 text-limit-2-row">
                                                <Link href="/single">In Iraq, a New Prime Minister Takes Stock of His Bloodied Land</Link>
                                            </h6>
                                            <div className="entry-meta meta-1 font-x-small color-grey mt-10">
                                                <span className="post-on">25 April</span>
                                                <span className="hit-count has-dot">54k Views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*Categories*/}
                    <div className="sidebar-widget widget_categories mb-50">
                        <div className="widget-header position-relative mb-20">
                            <h5 className="widget-title mt-5">All Sections</h5>
                        </div>
                        <div className="widget_nav_menu">
                            <ul className="menu">
                                {menuItems.map((item) =>
                                    item.submenu ? (
                                        <li key={item.label} onClick={() => toggleSubmenu(item.label)} className={`cat-item cat-item-2 menu-item-has-children ${openSubmenus.includes(item.label) ? "open" : ""}`}>
                                            <a>{item.label}</a>
                                            {openSubmenus.includes(item.label) && (
                                                <ul className="sub-menu">
                                                    {item.submenu.map((sub) => (
                                                        <li key={sub.label} className="cat-item">
                                                            <Link href={sub.href ?? "#"}>{sub.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ) : (
                                        <li key={item.label}>
                                            <Link href={item.href ?? "#"}>{item.label}</Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    {/*Ads*/}
                    <div className="sidebar-widget widget-ads mb-30">
                        <a href="#" className="play-video" data-animate="zoomIn" data-duration="1.5s" data-delay="0.1s">
                            <UIImage assetKey="ad1" />
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}
