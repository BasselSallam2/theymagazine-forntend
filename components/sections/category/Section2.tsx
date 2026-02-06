"use client";

import Link from "next/link";
import { ArticleListSectionProps, Article, Category } from "@/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getRecentArticlesClient } from "@/lib/data";
import React from "react";

interface CategoryArticlesProps extends Omit<ArticleListSectionProps, "articles"> {
  articles?: Article[];
  category?: Category;
  title?: string;
  showPagination?: boolean;
  showLoadMore?: boolean;
  itemsPerPage?: number;
  showCategories?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showExcerpt?: boolean;
  showReadTime?: boolean;
  showViews?: boolean;
  showLikes?: boolean;
  className?: string;
  isArabic?: boolean;
}

// YouTube utility functions
const getYouTubeId = (url: string): string | null => {
  if (!url) return null;
  const shortsRegex = /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/;
  const standardRegex = /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
  const embedRegex = /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/;

  let match = url.match(shortsRegex);
  if (match) return match[1];

  match = url.match(standardRegex);
  if (match) return match[1];

  match = url.match(embedRegex);
  if (match) return match[1];

  return null;
};

const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Video Modal Component
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div style={{
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
      <div style={{
        position: 'relative',
        width: '90%',
        maxWidth: '800px',
        backgroundColor: '#000',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      }}>
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

// Reels Grid Component for category pages
const ReelsGrid = ({ articles, showPagination }: { articles: Article[], showPagination: boolean }) => {
  const [selectedVideo, setSelectedVideo] = useState<{url: string; title: string} | null>(null);

  const handleVideoClick = (videoUrl: string, title: string) => {
    setSelectedVideo({ url: videoUrl, title });
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const reelsCardStyle: React.CSSProperties = {
    height: '300px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden',
  };

  return (
    <>
      <div className="row g-4">
        {articles.map((article) => {
          const videoId = getYouTubeId(article.content);

          if (!videoId) return null;

          const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0`;
          const thumbnailUrl = getYouTubeThumbnail(videoId);

          return (
            <div key={article.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <article
                className="position-relative bg-dark text-white rounded"
                style={reelsCardStyle}
                onClick={() => handleVideoClick(embedUrl, article.title)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
              >
                <div className="thumbnail-container position-relative w-100" style={{ height: 'calc(100% - 60px)' }}>
                  <Image
                    src={thumbnailUrl}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/imgs/news/news-1.jpg";
                    }}
                  />

                  <div
                    className="position-absolute d-flex justify-content-center align-items-center w-100 h-100"
                    style={{
                      top: 0,
                      left: 0,
                      zIndex: 5,
                      background: 'rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <div
                      className="play-button d-flex justify-content-center align-items-center rounded-circle"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255, 255, 255, 0.9)',
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
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-3" style={{ height: '60px' }}>
                  <h6 className="mb-0 text-white" style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.3',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}>
                    {article.title}
                  </h6>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {showPagination && articles.length > 12 && (
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Reels pagination">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={handleCloseModal}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />
    </>
  );
};

export default function Section2({ articles = [], category, title = "Latest Articles", variant = "grid", columns = 3, showPagination = true, showLoadMore = false, itemsPerPage = 12, showCategories = true, showAuthor = true, showDate = true, showExcerpt = true, showReadTime = true, showViews = true, showLikes = true, className, isArabic = false }: CategoryArticlesProps = {}) {
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const isReels = category?.slug === 'reels';

  useEffect(() => {
    if (!category || isReels) {
      return;
    }

    const fetchRecentArticles = async () => {
      try {
        const result = await getRecentArticlesClient();
        // Check if result is valid and has data array
        if (result && result.data && Array.isArray(result.data)) {
          // Filter out articles from current category and reels articles (video URLs)
          const filtered = result.data.filter((article: Article) => {
            // Exclude articles from current category
            if (article.category && article.category.slug === category?.slug) {
              return false;
            }
            // Exclude reels articles (content is video URL instead of HTML)
            if (article.content && (
              article.content.includes('youtube.com') ||
              article.content.includes('youtu.be') ||
              article.content.includes('vimeo.com') ||
              article.content.includes('dailymotion.com') ||
              article.content.match(/\.(mp4|avi|mov|wmv|flv|webm|m4v)(\?.*)?$/i)
            )) {
              return false;
            }
            return true;
          }).slice(0, 3); // Show only 3 recent articles
          setRecentArticles(filtered);
        } else {
          console.error('Invalid response format:', result);
        }
      } catch (error) {
        console.error('Error fetching recent articles:', error);
      }
    };

    fetchRecentArticles();
  }, [category, isReels]);

  // Special handling for reels category
  if (isReels) {
    return (
      <section className={`latest-post mt-30 mb-30 ${className || ""}`} dir={isArabic ? 'rtl' : 'ltr'}>
        <h3 className="widget-header widget-header-style-1 font-weight-bold text-center mb-20">
          <span className="line-dots mb-10" />
          <span className="pl-15 pr-15 bg-white font-family-normal">{title}</span>
        </h3>
        <ReelsGrid articles={articles} showPagination={showPagination} />
      </section>
    );
  }

  return (
    <>
      {/*Loop Grid 1-2*/}
      <section className={`latest-post mt-30 mb-30 ${className || ""}`} dir={isArabic ? 'rtl' : 'ltr'}>
        <h3 className="widget-header widget-header-style-1 font-weight-bold text-center mb-20">
          <span className="line-dots mb-10" />
          <span className="pl-15 pr-15 bg-white font-family-normal">{title}</span>
        </h3>
        {/* Modern Newsletter-Style Article Layout */}
        <div className="newsletter-articles-layout" style={{
          // Add some basic styles
        }}>
          {/* Featured Article - Large horizontal card */}
          {articles.length > 0 && (
            <div className="featured-article mb-5">
              <article className="card border-0 overflow-hidden" style={{
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease'
              }}>
                <div className="row g-0">
                  <div className="col-lg-8 col-md-7">
                    <figure className="position-relative h-100">
                      <Image
                        className="w-100 h-100"
                        src={articles[0].featuredImage || "/assets/imgs/news/news-1.jpg"}
                        alt={articles[0].title}
                        width={800}
                        height={400}
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        {articles[0].tags && articles[0].tags.slice(0, 1).map((tag, index) => (
                          <span key={`${tag.id ?? tag.slug ?? tag.name ?? "tag"}-${index}`} className="badge bg-primary text-white" style={{
                            borderRadius: '20px',
                            padding: '6px 12px',
                            fontWeight: '500',
                            fontSize: '0.8rem'
                          }}>
                            #{tag.name}
                          </span>
                        ))}
            </div>
            </figure>
            </div>
                  <div className="col-lg-4 col-md-5">
                    <div className="card-body d-flex flex-column justify-content-center h-100 p-4">
                      <div className="mb-3">
                        <span className="text-uppercase small fw-bold" style={{
                          color: '#007bff',
                          letterSpacing: '1px',
                          fontSize: '0.75rem'
                        }}>{isArabic ? 'المقالة المميزة' : 'Featured Article'}</span>
            </div>
                      <h3 className="card-title mb-3">
                        <Link
                          href={articles[0].slug}
                          className="text-decoration-none text-dark stretched-link"
                        >
                          {articles[0].title}
              </Link>
                      </h3>
                      {articles[0].excerpt && (
                        <p className="card-text text-muted">
                          {articles[0].excerpt.length > 150 ? `${articles[0].excerpt.substring(0, 150)}...` : articles[0].excerpt}
                        </p>
                      )}
            </div>
            </div>
            </div>
          </article>
            </div>
          )}

          {/* Secondary Articles - Mixed layout */}
          {articles.length > 1 && (
            <div className="secondary-articles mb-5">
              <div className="row g-4">
                {/* Medium vertical cards */}
                {articles.slice(1, 3).map((article, index) => (
                  <div key={`${article.id}-secondary-${index}`} className="col-lg-6 col-md-6">
                    <article className="card h-100 border-0 shadow-sm" style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}>
                      <figure className="position-relative mb-3">
                        <Image
                          className="card-img-top rounded"
                          src={article.featuredImage || "/assets/imgs/news/news-1.jpg"}
                          alt={article.title}
                          width={600}
                          height={300}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="position-absolute top-0 end-0 m-2">
                          {article.tags && article.tags.slice(0, 1).map((tag) => (
                            <span key={tag.id ?? tag.slug} className="badge bg-primary text-white" style={{
                              borderRadius: '16px',
                              padding: '4px 10px',
                              fontWeight: '500',
                              fontSize: '0.75rem'
                            }}>
                              #{tag.name}
                            </span>
                          ))}
                        </div>
            </figure>
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <Link
                            href={article.slug}
                            className="text-decoration-none text-dark"
                          >
                            {article.title}
              </Link>
                        </h5>
                        {article.excerpt && (
                          <p className="card-text text-muted">
                            {article.excerpt.length > 100 ? `${article.excerpt.substring(0, 100)}...` : article.excerpt}
                          </p>
                        )}
            </div>
          </article>
        </div>
                ))}
              </div>
            </div>
          )}

          {/* Remaining Articles - Grid layout */}
          {articles.length > 3 && (
            <div className="remaining-articles">
              <div className="row g-4">
                {articles.slice(3, 7).map((article, index) => (
                  <div key={`${article.id}-grid-${index}`} className="col-lg-3 col-md-4 col-sm-6">
                    <article className="card h-100 border-0 shadow-sm" style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}>
                      <figure className="position-relative mb-2">
                        <Image
                          className="card-img-top rounded"
                          src={article.featuredImage || "/assets/imgs/news/news-1.jpg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="position-absolute top-0 end-0 m-1">
                          {article.tags && article.tags.slice(0, 1).map((tag) => (
                            <span key={tag.id ?? tag.slug} className="badge bg-primary text-white" style={{
                              fontSize: '0.65rem',
                              borderRadius: '12px',
                              padding: '2px 8px',
                              fontWeight: '500'
                            }}>
                              #{tag.name}
                            </span>
                          ))}
                        </div>
                      </figure>
                      <div className="card-body p-2">
                        <h6 className="card-title mb-2" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>
                          <Link
                            href={article.slug}
                            className="text-decoration-none text-dark"
                          >
                            {article.title.length > 60 ? `${article.title.substring(0, 60)}...` : article.title}
                  </Link>
                        </h6>
                </div>
                    </article>
              </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Recent Articles from Other Categories */}
        {recentArticles.length > 0 && (
          <div className="mt-5">
            <h3 className="mb-4 text-center">{isArabic ? 'مقالات حديثة من فئات أخرى' : 'Recent Articles from Other Categories'}</h3>
            <div className="row g-3">
              {recentArticles.map((article, index) => (
                <div key={`${article.id}-recent-${index}`} className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="row g-0 h-100">
                      <div className="col-4">
                        <Image
                          src={article.featuredImage || "/assets/imgs/news/thumb-1.jpg"}
                          alt={article.title}
                          width={100}
                          height={100}
                          className="img-fluid rounded-start h-100 object-cover"
                          style={{ objectFit: 'cover' }}
                        />
              </div>
                      <div className="col-8">
                        <div className="card-body p-3">
                          <Link
                            href={article.slug}
                            className="text-decoration-none"
                          >
                            <h6 className="card-title mb-2 text-dark" style={{ fontSize: '14px', lineHeight: '1.3' }}>
                              {article.title.length > 50 ? `${article.title.substring(0, 50)}...` : article.title}
                            </h6>
                  </Link>
                          <div className="d-flex justify-content-start align-items-center">
                            <small className="text-muted" style={{ fontSize: '12px' }}>
                              {article.category.name}
                            </small>
                </div>
              </div>
              </div>
            </div>
              </div>
                </div>
              ))}
            </div>
        </div>
        )}

        {/* Pagination */}
        {showPagination && articles.length > 6 && (
          <div className="d-flex justify-content-center mt-4">
            <nav aria-label="Category pagination">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </section>
    </>
  );
}
