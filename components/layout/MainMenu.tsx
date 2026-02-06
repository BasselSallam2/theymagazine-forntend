"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// تعريف أنواع البيانات المستلمة من الـ API
interface NavbarItem {
    _id: string;
    title: string;
    category: string; // ID of the category
    slug?: string; 
    idx: number;
    items: any; 
}

interface NavbarResponse {
    success: boolean;
    data: NavbarItem[];
}

// استخدام Next.js API route لتجنب مشاكل CORS
const API_ENDPOINT = '/api/navbar?sort=idx';


export default function MainMenu() {
    // لم نعد نحتاج isMegaMenuOpen ولكن سنحتفظ بها لربما كانت تتحكم في كلاس menu-item-has-children
    const [isSectionsOpen, setIsSectionsOpen] = useState<number | null>(null);
    const [navbarItems, setNavbarItems] = useState<NavbarItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Detect if we're on Arabic category pages
    const pathname = usePathname();
    const isArabicPage = pathname?.startsWith('/category/byqwlw-ayh') || pathname?.startsWith('/byqwlw-ayh/');

    // جلب بيانات القائمة من الـ API
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

    // دالة للتحكم في ظهور القائمة المنسدلة (يجب أن يعمل بالـ CSS hover في أغلب الأحيان)
    const handleSectionsToggle = (key: number) => {
        setIsSectionsOpen((prevState) => (prevState === key ? null : key));
    };


    // الكود الثابت والمنطقي للقائمة
    return (
        <>
            {/*Desktop menu*/}
            <ul className="main-menu d-none d-lg-inline">
                
                {/* 1. Home/الرئيسية - ثابت */}
                <li>
                    <Link href="/">{isArabicPage ? 'الرئيسية' : 'Home'}</Link>
                </li>

                {/* 2. بيقولوا إيه؟ - الصفحة العربية */}
                <li>
                    <Link href="/category/byqwlw-ayh">بيقولوا إيه؟</Link>
                </li>

                {/* 3. Sections - القائمة المنسدلة البسيطة (Sub-menu) */}
                <li 
                    // نستخدم الكلاس menu-item-has-children لتفعيل الـ dropdown عن طريق الـ CSS
                    className={`menu-item-has-children ${isSectionsOpen === 1 ? "open" : ""}`} 
                    onClick={() => handleSectionsToggle(1)}
                    role="menuitem"
                    aria-expanded={isSectionsOpen === 1}
                >
                    <Link href="#" onClick={(e) => e.preventDefault()} aria-haspopup="true">
                        {isArabicPage ? 'الأقسام' : 'Sections'}
                    </Link>
                    
                    {/* بناء القائمة المنسدلة الديناميكية */}
                    {isLoading ? (
                        // رسالة تحميل
                        <ul className="sub-menu text-muted font-small">
                            <li>Loading...</li>
                        </ul>
                    ) : (
                        // القائمة المنسدلة (sub-menu)
                        <ul className="sub-menu text-muted font-small">
                            
                            {navbarItems.map((item) => (
                                // بناء عناصر القائمة من البيانات المجلوبة
                                <li key={item._id}>
                                    <Link 
                                        // نفترض أن مسار الكاتجوري هو /category/slug-of-category-name
                                        href={`/category/${item.title.toLowerCase().replace(/\s/g, '-')}`} 
                                        aria-label={`Go to ${item.title} category`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                            {/* يمكنك إضافة هنا أي روابط ثابتة أخرى تود ظهورها في القائمة المنسدلة */}
                        </ul>
                    )}
                </li>
                {/* 4. Contact - ثابت */}
                <li>
                    <Link href="/contact">{isArabicPage ? 'اتصل بنا' : 'Contact Us'}</Link>
                </li>
            </ul>
        </>
    );
}