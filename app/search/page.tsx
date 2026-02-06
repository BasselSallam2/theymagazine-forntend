import Section1 from "@/components/sections/search/Section1";
import Section2 from "@/components/sections/search/Section2";
import { Metadata } from "next";
import { Article } from "@/types";

export const metadata: Metadata = {
  title: "Search Articles - Find News and Stories",
  description: "Search through our comprehensive collection of news articles, stories, and analysis. Find the latest breaking news, in-depth reports, and insightful commentary on topics that matter to you.",
  keywords: ["search", "articles", "news", "stories", "find", "search news", "breaking news", "analysis"],
  alternates: {
    canonical: "/search",
  },
  openGraph: {
    title: "Search Articles - Find News and Stories",
    description: "Search through our comprehensive collection of news articles, stories, and analysis.",
    url: "https://newsboard.com/search",
    siteName: "NewsBoard",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Search Articles - Find News and Stories",
    description: "Search through our comprehensive collection of news articles, stories, and analysis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER || "http://localhost:8080/api";

interface SearchApiResponse {
  posts?: any[];
  users?: any[];
}

const toArticle = (post: any): Article | null => {
  const categorySlug = post?.category?.slug;
  const categoryName = post?.category?.name;
  const authorName = post?.author?.name || "Unknown Author";
  const authorSlug = post?.author?.slug || "unknown-author";
  const postSlug = post?.slug || "";
  const featuredImage = Array.isArray(post?.image) && post.image.length > 0 ? post.image[0] : post?.featuredImage;

  if (!categorySlug || !postSlug || !categoryName) {
    return null;
  }

  return {
    id: post?._id || post?.id || postSlug,
    title: post?.title || "Untitled",
    content: post?.content || "",
    excerpt: post?.description || post?.excerpt || "",
    slug: `/${categorySlug}/${postSlug}`,
    publishedAt: post?.createdAt || post?.publishedAt || new Date().toISOString(),
    status: post?.status || "published",
    readTime: post?.readTime,
    author: {
      id: post?.author?._id || post?.author || "unknown",
      name: authorName,
      email: post?.author?.email || "",
      slug: authorSlug,
    },
    category: {
      id: post?.category?._id || post?.category || categorySlug,
      name: categoryName,
      slug: categorySlug,
    },
    featuredImage,
  };
};

async function getSearchResults(query: string): Promise<Article[]> {
  if (!query) {
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/search/autocomplete?query=${encodeURIComponent(query)}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Search request failed:", response.status);
      return [];
    }

    const result: SearchApiResponse = await response.json();
    return (result.posts || []).map(toArticle).filter((article): article is Article => Boolean(article));
  } catch (error) {
    console.error("Search request error:", error);
    return [];
  }
}

export default async function Search({ searchParams }: { searchParams: Promise<{ query?: string; type?: string }> }) {
  const params = await searchParams;
  const query = (params.query || "").trim();
  const articles = await getSearchResults(query);

  return (
    <>
      <Section1 searchQuery={query} totalResults={articles.length} />
      <Section2 articles={articles} searchQuery={query} />
    </>
  );
}
