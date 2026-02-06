"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import VerticalTicker from "@/util/VerticalTicker";
import { HeroSectionProps } from "@/types";
import ModernSlider, { SwiperSlide } from "@/components/ui/ModernSlider";


// Type definition for post data - تحديث الـ ID ليصبح string
interface PostData {
    id: string; // تم التعديل
    image: string;
    date: string;
    categories: string[];
    title: string;
    slug: string;
}

// تعريف نوع لبيانات البوست المستلمة من الـ API
interface ApiPost {
    _id: string;
    title: string;
    image: string[]; // array of strings
    createdAt: string;
    slug: string;
    isFeatured: boolean; 
    category: { // تم التأكد من أن الكاتجوري كائن
        name: string;
        slug: string;
        _id: string;
    };
    // ... rest of the fields
}

interface BackendResponse {
    success: boolean;
    status: string;
    message: string;
    data: ApiPost[];
    pagination: any;
}

// دالة لتحويل تنسيق البيانات من الـ API إلى تنسيق PostData
const transformPostData = (apiPost: ApiPost): PostData => {
    // تنسيق التاريخ إلى "DD Mon YYYY"
    const formattedDate = new Date(apiPost.createdAt).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).replace(/,/g, '');

    return {
        id: apiPost._id, // استخدام _id
        image: apiPost.image && apiPost.image.length > 0 ? apiPost.image[0] : "/assets/imgs/news/news-1.jpg", // أخذ أول صورة فقط
        date: formattedDate, // استخدام createdAt بعد التنسيق
        categories: apiPost.category ? [apiPost.category.name] : ["General"], // تحويل Category Object إلى مصفوفة تحتوي على اسم الكاتجوري
        title: apiPost.title,
        slug: apiPost.category ? `/${apiPost.category.slug}/${apiPost.slug}` : `/general/${apiPost.slug}`, // بناء رابط أكثر دقة مع fallback
    };
};

interface SliderSettings {
    slidesPerView: number;
    spaceBetween: number;
    loop: boolean;
    autoplay: boolean;
    autoplayDelay: number;
    effect: "slide" | "fade" | "cube" | "coverflow" | "flip";
    navigation: boolean;
    pagination: boolean;
    breakpoints?: {
        [key: number]: {
            slidesPerView: number;
            spaceBetween: number;
        };
    };
}

// Post thumb component (لم يتغير)
const PostThumb = ({ post, isPriority = false }: { post: PostData; isPriority?: boolean }) => (
    <div className="post-thumb position-relative" role="article" aria-labelledby={`post-title-${post.id}`}>
        <div className="thumb-overlay img-hover-slide transition-04s position-relative">
            <Link className="img-link" href={post.slug} aria-label={`Read more about ${post.title}`} />
            <div className="post-image-container">
                <Image
                    src={post.image}
                    alt={`Featured image for: ${post.title}`}
                    width={410}
                    height={550}
                    className="post-image"
                    priority={isPriority}
                    loading={isPriority ? "eager" : "lazy"}
                    onError={(e) => {
                        // Fallback to a default image if loading fails
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/imgs/news/news-1.jpg";
                    }}
                />
            </div>
            <div className="post-content-overlay transition-04s p-20">
                <div className="entry-meta mb-20 text-uppercase font-small text-white">
                    <span className="create-date mr-15" aria-label="Publication date">
                        {post.date}
                    </span>
                    {post.categories.map((category, index) => (
                        // رابط الكاتجوري
                        <Link key={index} href={`/category/${category.toLowerCase()}`} aria-label={`Browse ${category} category`}>
                            <span className="post-cat text-white position-relative">{category}</span>
                        </Link>
                    ))}
                </div>
                <h4 className="post-title" id={`post-title-${post.id}`}>
                    <Link className="text-white" href={post.slug} aria-label={`Read full article: ${post.title}`}>
                        {post.title}
                    </Link>
                </h4>
            </div>
        </div>
    </div>
);

// عنوان الـ API
// يمكنك تعريفه كمتغير بيئة في Next.js: NEXT_PUBLIC_API_SERVER=http://localhost:3000
const API_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER || 'http://localhost:8080/api';
const API_ENDPOINT = `${API_BASE_URL}/post?sort=-createdAt&isFeatured=true&populate={"path":"category"}`;


export default function Section1({ articles = [], title, subtitle, showSlider = true, autoPlay = true, slidesToShow = 3 }: HeroSectionProps = {}) {
    const mainSlider = useRef<any>(null);
    const [activeTab, setActiveTab] = useState("highlight");
    // حالات لتخزين بيانات البوستات المحولة
    const [highlightPosts, setHighlightPosts] = useState<PostData[]>([]); 
    const [trendingPosts, setTrendingPosts] = useState<PostData[]>([]);

    // جلب البيانات من الـ API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // يفترض استخدام fetch هنا
                const response = await fetch(API_ENDPOINT);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result: BackendResponse = await response.json();
                console.log(result);

                if (result.success && result.data.length > 0) {
                    // تحويل جميع البوستات المستلمة
                    const transformedPosts: PostData[] = result.data.map(transformPostData);

                    // تقسيم البوستات.
                    // نفترض أن أول 3 بوستات هي للـ Highlight والبقية للـ Trending
                    setHighlightPosts(transformedPosts); 
                }

            } catch (error) {
                console.error("Error fetching posts:", error);
                // استخدام بيانات افتراضية في حالة الفشل
            }
        };

        fetchPosts();
    }, []); 

    // إعدادات الـ Slider (تم إرجاعها)
    const mainSettings: SliderSettings = {
        slidesPerView: slidesToShow,
        spaceBetween: 0,
        loop: true,
        autoplay: autoPlay,
        autoplayDelay: 3000,
        effect: "slide",
        navigation: false,
        pagination: false,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    };

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <>
            {/*Featured post Start*/}
            <div className="home-featured mb-20 mt-30">
                {/*Tab Nav   */}
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${activeTab === "highlight" ? "show active" : ""}`} id="nav-highlight" role="tabpanel" aria-labelledby="nav-highlight">
                                {/* تم تمرير mainSettings هنا */}
                                <ModernSlider settings={mainSettings} className="home-featured-1 post-module-1">
                                    {/* استخدام البيانات المحولة هنا */}
                                    {highlightPosts.map((post, index) => (
                                        <SwiperSlide key={post.id}>
                                            <PostThumb post={post} isPriority={index < 2} />
                                        </SwiperSlide>
                                    ))}
                                </ModernSlider>
                                {/*Tab content 1*/}
                            </div>
                            {/*end tab content 1*/}
                            <div className={`tab-pane fade ${activeTab === "trending" ? "show active" : ""}`} id="nav-trending" role="tabpanel" aria-labelledby="nav-trending">
                                {/* تم تمرير mainSettings هنا */}
                                <ModernSlider settings={mainSettings} className="home-featured-1 post-module-1">
                                    {/* استخدام البيانات المحولة هنا */}
                                    {trendingPosts.map((post, index) => (
                                        <SwiperSlide key={post.id}>
                                            <PostThumb post={post} isPriority={index < 2} />
                                        </SwiperSlide>
                                    ))}
                                </ModernSlider>
                                {/*Tab content 2*/}
                            </div>
                            {/*end tab content 2*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}