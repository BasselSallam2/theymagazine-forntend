"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MainMenu() {
    const [isMegaMenu, setIsMegaMenu] = useState<number | null>(null);

    const handleMegaMenu = (key: number) => {
        setIsMegaMenu((prevState) => (prevState === key ? null : key));
    };

    return (
        <>
            {/*Desktop menu*/}
            <ul className="main-menu d-none d-lg-inline">
                <li className="menu-item-has-children">
                    <Link href="/">Home</Link>
                    <ul className="sub-menu text-muted font-small">
                        <li>
                            <Link href="/">Home default</Link>
                        </li>
                        <li>
                            <Link href="/home-2">Homepage 2</Link>
                        </li>
                        <li>
                            <Link href="/home-3">Homepage 3</Link>
                        </li>
                    </ul>
                </li>
                <li className={`mega-menu-item ${isMegaMenu === 1 ? "open" : ""}`} onClick={() => handleMegaMenu(1)}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        All Pages
                    </a>
                    <div className="sub-mega-menu sub-menu-list text-muted font-small">
                        <div className="container">
                            <div className="row bg-white">
                                <ul className="col-md-2">
                                    <li>
                                        <strong>Home layouts</strong>
                                    </li>
                                    <li>
                                        <Link href="/">Default</Link>
                                    </li>
                                    <li>
                                        <Link href="/home-2">Home 2</Link>
                                    </li>
                                    <li>
                                        <Link href="/home-3">Home 3</Link>
                                    </li>
                                </ul>
                                <ul className="col-md-2">
                                    <li>
                                        <strong>Archive layout</strong>
                                    </li>
                                    <li>
                                        <Link href="/category">Default</Link>
                                    </li>
                                    <li>
                                        <Link href="/category-big">Category big</Link>
                                    </li>
                                    <li>
                                        <Link href="/category-list">Category list</Link>
                                    </li>
                                    <li>
                                        <Link href="/category-grid">Category grid</Link>
                                    </li>
                                    <li>
                                        <Link href="/category-masonry">Category masonry</Link>
                                    </li>
                                </ul>
                                <ul className="col-md-2">
                                    <li>
                                        <strong>Single post</strong>
                                    </li>
                                    <li>
                                        <Link href="/single">Default</Link>
                                    </li>
                                    <li>
                                        <Link href="/single-2">Single 2</Link>
                                    </li>
                                    <li>
                                        <Link href="/single-3">Single 3</Link>
                                    </li>
                                </ul>
                                <ul className="col-md-2">
                                    <li>
                                        <strong>Pages</strong>
                                    </li>
                                    <li>
                                        <Link href="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link href="/typography">Typography</Link>
                                    </li>
                                    <li>
                                        <Link href="/search">Search results</Link>
                                    </li>
                                </ul>
                                <ul className="col-md-2">
                                    <li>
                                        <strong>Pages</strong>
                                    </li>
                                    <li>
                                        <Link href="/author">Author</Link>
                                    </li>
                                    <li>
                                        <Link href="/404">404 page</Link>
                                    </li>
                                    <li>
                                        <Link href="/login">Login page</Link>
                                    </li>
                                    <li>
                                        <Link href="/signup">Register page</Link>
                                    </li>
                                </ul>
                                <div className="col-md-2 text-center">
                                    <Image src="/assets/imgs/theme/pattern.jpg" width={100} height={99} alt="newsboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <Link href="/category">World</Link>
                </li>
                <li>
                    <Link href="/category">Politics</Link>
                </li>
                <li>
                    <Link href="/category">Business</Link>
                </li>
                <li>
                    <Link href="/category">Opinion</Link>
                </li>
                <li>
                    <Link href="/category">Tech</Link>
                </li>
                <li>
                    <Link href="/category">Science</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}
