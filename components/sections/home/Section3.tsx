"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArticleListSectionProps, Article } from "@/types"; 

// =======================================================
// 1. تعريف الأنواع الجديدة والدوائر المساعدة
// =======================================================

interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    type?: string; 
}

interface PostWithCategory extends Omit<ApiPost, 'category'> {
    _id: string;
    title: string;
    content: string;
    image: string[]; 
    createdAt: string;
    slug: string;
    category: {
        _id: string;
        slug: string;
        name: string;
        type?: string; 
    };
}

interface ApiPost {
    _id: string;
    title: string;
    content: string;
    image: string[]; 
    createdAt: string;
    slug: string;
}

interface CategorySectionData {
    category: Category;
    posts: PostWithCategory[];
}

// =======================================================
// 2. مكون الـ Modal للفيديو
// =======================================================

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div className="modal-content" style={{
                position: 'relative',
                width: '90%',
                maxWidth: '800px',
                backgroundColor: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            }}>
                {/* زر الإغلاق */}
                <button 
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        border: 'none',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        fontSize: '20px',
                        cursor: 'pointer',
                        zIndex: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    ×
                </button>
                
                {/* الفيديو */}
                <iframe
                    src={videoUrl}
                    title={title}
                    style={{
                        width: '100%',
                        height: '450px',
                        border: 'none',
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER || 'http://localhost:8080/api';

const formatPostDate = (dateString: string): string => {
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).replace(/,/g, '');
    } catch (e) {
        return "Unknown Date";
    }
};

const getExcerpt = (content: string, title: string): string => {
    if (content) {
        let text = content.replace(/<[^>]*>?/gm, ''); 
        return text.substring(0, 100) + (text.length > 100 ? '...' : '');
    }
    return title.substring(0, 80) + '...';
};

const getYouTubeId = (url: string): string | null => {
    const shortsRegex = /(?:youtube\.com\/shorts\/|youtu\.be\/|v=)([^&?]+)/;
    const match = url.match(shortsRegex);
    return match ? match[1] : null;
};

const getYouTubeThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// =======================================================
// 3. المكون الجديد لـ Reels
// =======================================================

const ReelsCardStyle: React.CSSProperties = {
    height: '500px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)', 
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
};

const ReelsGrid = ({ section }: { section: CategorySectionData }) => {
    const [selectedVideo, setSelectedVideo] = useState<{url: string; title: string} | null>(null);
    // Filter posts with valid YouTube URLs first, then take the first 4
    const reelsPosts = section.posts
        .filter(post => getYouTubeId(post.content))
        .slice(0, 4);

    const handleVideoClick = (videoUrl: string, title: string) => {
        setSelectedVideo({ url: videoUrl, title });
    };

    const handleCloseModal = () => {
        setSelectedVideo(null);
    };

    return (
        <section className={`the-world mb-60`}>
            <h6 className="font-weight-bold widget-header widget-header-style-2 mb-30">
                <Link href={`/category/${section.category.slug}`}>
                    <span className="d-block mb-10 text-uppercase font-family-normal" style={{ color: '#ed1b24' }}>
                        # {section.category.name}
                    </span>
                </Link>
                <span className="line-dots" />
            </h6>
            
            <div className="row">
                {reelsPosts.map((post) => {
                    const videoId = getYouTubeId(post.content);
                    
                    if (!videoId) return null;

                    // إنشاء رابط الـ embed بدون عناصر اليوتيوب
                    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0`;
                    
                    // الحصول على صورة الثمبنيل
                    const thumbnailUrl = getYouTubeThumbnail(videoId);

                    return (
                        <div key={post._id} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <article 
                                className="post-card-reel border rounded-lg overflow-hidden w-full position-relative bg-dark text-white"
                                style={ReelsCardStyle}
                                onClick={() => handleVideoClick(embedUrl, post.title)}
                            >
                                {/* صورة الثمبنيل */}
                                <div className="thumbnail-container position-relative w-100" style={{ height: 'calc(100% - 70px)' }}>
                                    <Image
                                        src={thumbnailUrl}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/assets/imgs/news/news-1.jpg";
                                        }}
                                    />
                                    
                                    {/* زر التشغيل المركزي */}
                                    <div 
                                        className="position-absolute d-flex justify-content-center align-items-center w-100 h-100"
                                        style={{ 
                                            top: 0, 
                                            left: 0, 
                                            zIndex: 5, 
                                            background: 'rgba(0, 0, 0, 0.3)',
                                            transition: 'background 0.3s ease',
                                        }}
                                    >
                                        <div 
                                            className="play-button d-flex justify-content-center align-items-center rounded-circle"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'rgba(255, 255, 255, 0.9)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            <svg 
                                                className="text-dark" 
                                                width="40" 
                                                height="40" 
                                                viewBox="0 0 24 24" 
                                                fill="currentColor"
                                            >
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* تأثير hover */}
                                    <div 
                                        className="position-absolute w-100 h-100"
                                        style={{ 
                                            top: 0, 
                                            left: 0, 
                                            zIndex: 4,
                                            background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.8) 100%)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity = '0';
                                        }}
                                    />
                                </div>
                                
                                {/* عنوان الفيديو */}
                                <div 
                                    className="post-content p-3 text-center bg-dark text-white" 
                                    style={{ 
                                        height: '70px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        position: 'relative',
                                        zIndex: 6,
                                    }}
                                >
                                    <h6 className="post-title mb-0 font-weight-bold text-lg">
                                        <span className="text-white">
                                            {post.title}
                                        </span>
                                    </h6>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>

            {/* Modal للفيديو */}
            <VideoModal
                isOpen={!!selectedVideo}
                onClose={handleCloseModal}
                videoUrl={selectedVideo?.url || ''}
                title={selectedVideo?.title || ''}
            />
        </section>
    );
};

// ... (مكونات SmallPost و FeaturedPost تبقى كما هي بدون تغيير)
const SmallPost = ({ post }: { post: PostWithCategory }) => {
    const categorySlug = post.category?.slug || 'general';
    const postSlug = `/${categorySlug}/${post.slug}`;
    const firstImage = post.image?.[0] || "/assets/imgs/news/news-1.jpg";

    return (
        <article className="col-md-6 mb-4 mb-md-0">
            <figure className="mb-15">
                <Link href={postSlug}>
                    <Image 
                        className="cover-image" 
                        src={firstImage} 
                        alt={post.title} 
                        width={234} 
                        height={175} 
                        priority={false}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/imgs/news/news-2.jpg";
                        }}
                    />
                </Link>
            </figure>
            <h6 className="post-title font-weight-bold mb-10">
                <Link href={postSlug}>{post.title}</Link>
            </h6>
            <p className="excerpt font-small text-muted">
                 {getExcerpt(post.content, post.title)}
            </p>
            <div className="entry-meta meta-0 mb-15 font-small">
                 <span className="post-cat position-relative text-primary">
                    {post.category?.name || 'General'}
                 </span>
                 <span className="date ml-15 text-muted">{formatPostDate(post.createdAt)}</span>
            </div>
        </article>
    );
};

const FeaturedPost = ({ post, category }: { post: PostWithCategory, category: Category }) => {
    const postSlug = `/${category.slug}/${post.slug}`;
    const firstImage = post.image?.[0] || "/assets/imgs/news/news-1.jpg";

    return (
        <article className="first-post mb-md-4 mb-lg-0">
            <figure className="mb-30" style={{ maxHeight: '450px', overflow: 'hidden' }}> 
                <Link href={postSlug}>
                    <Image 
                        className="cover-image" 
                        src={firstImage} 
                        alt={post.title} 
                        width={550} 
                        height={410} 
                        priority 
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/imgs/news/news-1.jpg";
                        }}
                    />
                </Link>
            </figure>
            <div className="post-content text-center plr-5-percent">
                <div className="entry-meta meta-0 mb-15 font-small">
                    <Link href={`/category/${category.slug}`}>
                        <span className="post-cat position-relative"># {category.name}</span>
                    </Link>
                </div>
                <h2 className="post-title mb-30 position-relative">
                    <Link href={postSlug}>{post.title}</Link>
                </h2>
                <p className="excerpt font-small text-muted mb-15">
                     {getExcerpt(post.content, post.title)}
                </p>
                <div className="entry-meta meta-0 font-small">
                    <span className="date text-muted">{formatPostDate(post.createdAt)}</span>
                </div>
            </div>
        </article>
    );
};

// =======================================================
// 4. المكون الرئيسي (Section4) - يبقى كما هو بدون تغيير
// =======================================================

interface Section4Props {
    className?: string;
}

export default function Section4({ className }: Section4Props = {}) {
    const [sectionsData, setSectionsData] = useState<CategorySectionData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategoriesAndPosts = async () => {
            setIsLoading(true);
            try {
                // 1. جلب جميع الكاتجوريز
                const categoryEndpoint = `${API_BASE_URL}/category?limit=100`;
                const categoryResponse = await fetch(categoryEndpoint);
                
                if (!categoryResponse.ok) throw new Error("Failed to fetch categories");
                
                const categoryResult = await categoryResponse.json();
                const categories: Category[] = categoryResult.data || [];

                if (categories.length === 0) {
                    setSectionsData([]);
                    return;
                }

                // 2. إرسال طلبات متوازية لجلب البوستات لكل كاتجوري (باستثناء كاتجوري معينة)
                const excludedCategoryId = '695184c72eac27b08bd8797d'; // الكاتجوري المستثنى من الشاشة الرئيسية
                const filteredCategories = categories.filter(category => category._id !== excludedCategoryId);
                const postPromises = filteredCategories.map(async (category) => {
                    // ⬅️ طلب 5 بوستات للأقسام العادية، و 8 لـ Reels (للتأكد من توفر 4 على الأقل بعد الفلترة)
                    const limit = category.type === 'reels' ? 8 : 5; 
                    const postEndpoint = `${API_BASE_URL}/post?category=${category._id}&sort=-createdAt&limit=${limit}`;
                    const postResponse = await fetch(postEndpoint);
                    
                    if (!postResponse.ok) {
                        console.error(`Failed to fetch posts for category ${category.name}, Status: ${postResponse.status}`);
                        return { category, posts: [] as PostWithCategory[] };
                    }
                    
                    const postResult = await postResponse.json();
                    
                    // تحويل بيانات البوستات ودمج بيانات الكاتجوري (للاستخدام في Slug)
                    const posts: PostWithCategory[] = (postResult.data || []).map((post: any) => ({
                        ...post,
                        category: { _id: category._id, slug: category.slug, name: category.name, type: category.type }
                    }));

                    return { category, posts };
                });

                // 3. انتظار جميع الطلبات وتصفية الأقسام الفارغة
                const results = await Promise.all(postPromises);
                
                const filteredData = results.filter(item => item.posts.length > 0);
                
                // ⬅️ إعادة ترتيب البيانات: وضع سيكشن Reels في المرتبة الثانية
                let reelsSection: CategorySectionData | undefined;
                const standardSections: CategorySectionData[] = [];

                filteredData.forEach(section => {
                    if (section.category.type === 'reels') {
                        reelsSection = section;
                    } else {
                        standardSections.push(section);
                    }
                });

                let finalSections: CategorySectionData[] = [];
                if (standardSections.length > 0) {
                    finalSections.push(standardSections[0]);
                }
                if (reelsSection) {
                    finalSections.push(reelsSection); // وضع Reels في المرتبة الثانية
                }
                finalSections = finalSections.concat(standardSections.slice(1)); // إضافة باقي الأقسام العادية

                setSectionsData(finalSections);

            } catch (error) {
                console.error("Master Fetch Error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategoriesAndPosts();
    }, []);

    if (isLoading) {
        return (
            <section className="the-world mb-30 text-center text-muted py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-3">Loading world sections...</p>
            </section>
        );
    }
    
    if (sectionsData.length === 0) {
         return (
            <section className="the-world mb-30 text-center text-muted py-5">
                <p>No categories or posts found to display.</p>
            </section>
        );
    }

    // 4. عرض الأقسام المتكررة
    return (
        <>
            {sectionsData.map((section) => {
                // عرض مكون Reels الجديد إذا كان نوع القسم هو "reels"
                if (section.category.type === 'reels') {
                    return <ReelsGrid key={section.category._id} section={section} />;
                }
                
                // الأقسام العادية (1 بوست كبير + 4 بوستات صغيرة)
                const featuredPost = section.posts[0];
                const smallPosts = section.posts.slice(1, 5); 

                if (!featuredPost) return null;

                return (
                    // تكرار كامل الـ Grid لكل كاتجوري
                    <section key={section.category._id} className={`the-world mb-60 ${className || ""}`}>
                        {/* عنوان الكاتجوري */}
                        <h6 className="font-weight-bold widget-header widget-header-style-2 mb-30">
                            <Link href={`/category/${section.category.slug}`}>
                                <span className="d-block mb-10 text-uppercase font-family-normal" style={{ color: '#ed1b24' }}>
                                    # {section.category.name}
                                </span>
                            </Link>
                            <span className="line-dots" />
                        </h6>
                        <div className="loop-grid-3 row vertical-divider">
                            
                            {/* العمود الأول: البوست المميز (Featured) */}
                            <div className="col-lg-7 col-md-12">
                                <FeaturedPost post={featuredPost} category={section.category} />
                            </div>

                            {/* العمود الثاني: الأربعة بوستات الصغيرة (Small Posts) */}
                            <div className="col-lg-5 col-md-12">
                                {smallPosts.length > 0 && (
                                    <div className="row vertical-divider">
                                        {/* البوستات في الصف الأول (2 بوست) */}
                                        {smallPosts.slice(0, 2).map((post) => (
                                            <SmallPost key={post._id} post={post} />
                                        ))}
                                        
                                        {/* الخط الفاصل الأفقي */}
                                        {smallPosts.length > 2 && (
                                            <div className="col-12">
                                                <div className="horizontal-divider mb-15 mt-15" />
                                            </div>
                                        )}
                                        
                                        {/* البوستات في الصف الثاني (2 بوست) */}
                                        {smallPosts.slice(2, 4).map((post) => (
                                            <SmallPost key={post._id} post={post} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
}