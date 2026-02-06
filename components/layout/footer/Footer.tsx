"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FooterProps } from "@/types";

// =======================================================
// 1. تعريف الأنواع الجديدة
// =======================================================

// تعريف نوع بيانات الفوتر المستلمة من API /footer
interface FooterApiData {
    subtitle1: string;
    title2: string;
    subtitle2: string; // قد يحتوي على سطر جديد
    title3: string;
    subtitle3: string; // قد يحتوي على سطر جديد
    facebook: string;
    instagram: string;
    twitter?: string; // موجود كاختياري
    pinterest?: string; // موجود كاختياري
    // ...
}

// تعريف نوع بيانات الكاتجوري المستلمة من API /category
interface Category {
    _id: string;
    name: string;
    slug: string;
    // ...
}

// استخدام Next.js API routes لتجنب مشاكل CORS
const FOOTER_ENDPOINT = '/api/footer';
const CATEGORY_ENDPOINT = '/api/categories?limit=100';


export default function Footer({
    variant = 'default',
    showSocialLinks = true,
    showNewsletter = true,
    logo,
    copyrightText = "© 2025 NewsBoard. All rights reserved."
}: FooterProps = {}) {
    const [footerContent, setFooterContent] = useState<FooterApiData | null>(null); // حالة لمحتوى الفوتر
    const [categories, setCategories] = useState<Category[]>([]); // حالة للكاتيجوريز
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // جلب بيانات الفوتر والمحتوى الثابت
                const [footerRes, categoryRes] = await Promise.all([
                    fetch(FOOTER_ENDPOINT),
                    fetch(CATEGORY_ENDPOINT)
                ]);

                // معالجة استجابة الفوتر
                if (footerRes.ok) {
                    const footerResult = await footerRes.json();
                    if (footerResult.success && footerResult.data.length > 0) {
                        setFooterContent(footerResult.data[0]);
                    }
                } else {
                    console.error("Failed to fetch footer content:", footerRes.status);
                }

                // معالجة استجابة الكاتجوري
                if (categoryRes.ok) {
                    const categoryResult = await categoryRes.json();
                    if (categoryResult.success) {
                        setCategories(categoryResult.data || []);
                    }
                } else {
                    console.error("Failed to fetch categories:", categoryRes.status);
                }

            } catch (error) {
                console.error("Error fetching footer data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // إذا كانت البيانات لا تزال قيد التحميل، عرض بديل بسيط
    if (isLoading) {
        return (
            <footer className="py-5 text-center text-muted">
                <div className="spinner-border spinner-border-sm" role="status"></div> Loading Footer...
            </footer>
        );
    }
    
    // تقسيم النصوص التي تحتوي على سطر جديد
    const addressLines = footerContent?.subtitle2.split('\n') || [];
    const hoursLines = footerContent?.subtitle3.split('\n') || [];

    // دالة لعرض الأيقونة إذا كان الرابط موجوداً
    const renderSocialIcon = (href: string | undefined, iconClass: string, label: string) => {
        // إخفاء العنصر بالكامل إذا كان الرابط غير موجود أو غير صالح
        if (!href || href === '#' || href.trim() === '') return null;
        return (
            <li className="list-inline-item">
                <a className={`social-icon ${label}-icon text-xs-center`} target="_blank" href={href} rel="noopener noreferrer" aria-label={`Follow us on ${label}`}>
                    <i className={iconClass} />
                </a>
            </li>
        );
    };

    return (
        <>
            {/* Footer Start*/}
            <footer>
                <div className="footer-area">
                    <div className="container">
                        <div className="row pb-30">
                            <div className="col-12">
                                <div className="divider-2 mb-30" />
                            </div>
                            
                            {/* العمود الأول: معلومات التواصل */}
                            <div className="col-lg-3 col-md-6 mb-lg-0 mb-md-4 mb-sm-4">
                                <div className="sidebar-widget widget-latest-posts pr-50">
                                    <h4 className="widget-header text-uppercase font-weight-bold color-black">
                                        {/* change this "they" to logo.png in assets/images/logo.png */}
                                        <span><Image src="/assets/imgs/logo.png" alt="Logo" width={100} height={100} style={{ width: '100%', height: '100%' }} /></span>
                                    </h4>
                                    <div className="textwidget">
                                        {/* ⬅️ subtitle1 */}
                                        <p>{footerContent?.subtitle1}</p> 
                                        
                                        {/* ⬅️ العنوان 2: Address */}
                                        <p>
                                            <strong className="color-black">{footerContent?.title2}</strong>
                                            <br />
                                            {addressLines.map((line, index) => (
                                                <span key={`addr-${index}`}>{line}<br /></span>
                                            ))}
                                        </p>
                                        
                                        {/* ⬅️ العنوان 3: Hours */}
                                        <p>
                                            <strong className="color-black">{footerContent?.title3}</strong>
                                            <br />
                                            {hoursLines.map((line, index) => (
                                                <span key={`hrs-${index}`}>{line}<br /></span>
                                            ))}
                                        </p>

                                        {/* روابط السوشيال ميديا */}
                                        <ul className="header-social-network d-inline-block list-inline font-small">
                                            <li className="list-inline-item">
                                                <span className="text-uppercase">
                                                    <strong className="color-black">Follow us:</strong>
                                                </span>
                                            </li>
                                            
                                            {/* ⬅️ Facebook */}
                                            {renderSocialIcon(footerContent?.facebook, "ti-facebook", "facebook")}
                                            
                                            {/* ⬅️ Instagram */}
                                            {renderSocialIcon(footerContent?.instagram, "ti-instagram", "instagram")}

                                            {/* ⬅️ Twitter - سيختفي إذا لم يكن الرابط موجوداً في API */}
                                            {renderSocialIcon(footerContent?.twitter, "ti-twitter-alt", "twitter")}
                                            
                                            {/* ⬅️ Pinterest - سيختفي إذا لم يكن الرابط موجوداً في API */}
                                            {renderSocialIcon(footerContent?.pinterest, "ti-pinterest", "pinterest")}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* العمود الثاني: Categories */}
                            <div className="col">
                                <h5 className="mb-15">Categories</h5>
                                <ul className="float-start mr-30 font-small">
                                    {/* ⬅️ تكرار الكاتجوريز المجلوبة من الـ API */}
                                    {categories.map((cat, index) => (
                                        <li key={cat._id || index} className={`cat-item cat-item-${index + 1}`}>
                                            <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* الأعمدة الفارغة (Top Authors, Lifestyle, Business) تم حذفها أو تركها فارغة مؤقتاً */}
                            
                        </div>
                    </div>
                </div>
                
                {/* footer-bottom aera */}
                <div className="footer-bottom-area text-center text-muted">
                    <div className="container">
                        <div className="footer-border pt-20 pb-20">
                            <div className="row d-flex mb-15">
                                <div className="col-12">
                                    {/* ⬅️ التعديل هنا: استخدام الكاتجوريز المجلوبة لـ قائمة الروابط السفلية */}
                                    <ul className="list-inline font-small text-uppercase">
                                        {categories.map((cat, index) => (
                                            <li key={`bottom-${cat._id || index}`} className="list-inline-item">
                                                <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-12">
                                    <div className="footer-copy-right">
                                    {/* يمكن وضع حقوق النشر هنا */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End*/}
            </footer>
            {/* End Footer */}
        </>
    );
}