"use client";
import MobileMenu from "@/components/layout/MobileMenu";
import MainMenu from "@/components/layout/MainMenu";
import OffcanvasSidebar from "@/components/layout/OffcanvasSidebar";
import { useEffect, useState } from "react";
import SearchForm from "@/components/layout/SearchForm";
import Link from "next/link";
import Image from "next/image";
import { HeaderProps } from "@/types";
import styles from "@/components/layout/Header.module.css";
import { useBodyClass } from "@/hooks/useBodyClass";

interface HeaderState {
    scroll: boolean;
    isSidebar: boolean;
    isMobileMenu: boolean;
}

// Custom Language Dropdown Component
function LanguageDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { name: "English", code: "en" },
        { name: "Français", code: "fr" },
        { name: "Deutsch", code: "de" },
        { name: "РУССКИЙ", code: "ru" },
        { name: "中文", code: "zh" },
    ];

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
            return () => document.removeEventListener("click", handleClickOutside);
        }
    }, [isOpen]);

    return (
        <li className="list-inline-item dropdown">
            <a className="dropdown-toggle" href="#" onClick={handleToggle} style={{ cursor: "pointer" }}>
                <i className="ti-world font-x-small mr-5" />
                Lang <span className="caret" />
            </a>
            <ul className={`dropdown-menu dropdown-menu-language dropdown-menu-right border-0 font-small text-end ${isOpen ? "show" : ""}`}>
                {languages.map((lang, index) => (
                    <li key={index}>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            {lang.name}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default function Header({ variant = "default", showSearch = true, showSocialLinks = true, logo, menuItems }: HeaderProps = {}) {
    // scroll header
    const [scroll, setScroll] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = (): void => {
            const scrollCheck: boolean = window.scrollY > 100;
            setScroll(scrollCheck);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // Offcanvas sidebar
    const [isSidebar, setIsSidebar] = useState<boolean>(false);
    const handleSidebar = () => {
        setIsSidebar(!isSidebar);
    };
    useBodyClass("canvas-opened", isSidebar);

    // Search form
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const handleSearch = () => {
        setIsSearch(!isSearch);
    };
    useBodyClass("open-search-form", isSearch);

    const logoSrc = "/assets/imgs/logo.png?v=1";

    return (
        <>
            <OffcanvasSidebar handleSidebar={handleSidebar} />
            {/* Start Header */}
            {/* <div className="top-bar pt-15 pb-5 d-none d-lg-block">
                <div className="container">
                    <ul className="list-inline font-small text-end">
                        <LanguageDropdown />
                    </ul>
                </div>
            </div> */}
            <header className={`${styles.header} main-header header-style-1 font-heading header-sticky ${scroll ? "sticky-bar" : ""}`}>
                <MobileMenu />
                <div className={`container ${styles.headerRow}`}>
                    <div className="main-nav d-none d-lg-block float-start">
                        <nav className="text-uppercase">
                            <MainMenu />
                        </nav>
                    </div>
                    <div className={`${styles.navbarBrand} ${styles.logoWrap} logo d-md-inline d-none`} style={{
                        padding: '10px 20px',
                        height: '100%'
                    }}>
                        <Link href="/" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%'
                        }}>
                            <Image
                                src={logoSrc}
                                alt="they say"
                                width={300}
                                height={86}
                                style={{
                                    objectFit: 'contain',
                                    width: '80%',
                                    height: 'auto',
                                    maxWidth: '300px',
                                    maxHeight: '86px'
                                }}
                                priority
                            />
                        </Link>
                    </div>
                    <div className={`${styles.navbarBrand} ${styles.logoWrap} logo logo-mobile d-inline d-md-none`} style={{
                        padding: '8px 16px',
                    }}>
                        <Link href="/" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                src={logoSrc}
                                alt="they say"
                                width={200}
                                height={58}
                                style={{
                                    objectFit: 'contain',
                                    width: '80%',
                                    height: 'auto',
                                    maxWidth: '200px',
                                    maxHeight: '58px'
                                }}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="float-end header-tools">
                        {/* <ul className="header-social-network d-inline-block list-inline mr-10">
                            <li className="list-inline-item">
                                <a className="social-icon facebook-icon text-xs-center color-grey" target="_blank" href="#">
                                    <i className="ti-facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-icon twitter-icon text-xs-center color-grey" target="_blank" href="#">
                                    <i className="ti-twitter" />
                                </a>
                            </li>
                        </ul> */}
                        <button type="submit" className="search search-icon search-btn mr-15" onClick={handleSearch}>
                            <i className="ti-close" />
                            <i className="ti-search" />
                        </button>
                        {/* <div className="off-canvas-toggle-cover d-inline-block">
                            <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" onClick={handleSidebar}>
                                <span />
                                <p className="font-small d-none d-lg-inline font-weight-bold offcanvas-more-text">MORE</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="clearfix" />
                    <div className="divider-2" />
                </div>
            </header>
            <SearchForm />
        </>
    );
}
