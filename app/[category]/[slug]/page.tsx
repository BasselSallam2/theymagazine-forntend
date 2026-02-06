import Section1 from "@/components/sections/single/Section1";
import Section2 from "@/components/sections/single/Section2";
import Section3 from "@/components/sections/single/Section3";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Backend API URL
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

// Fetch article data from API
async function getArticle(category: string, slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/articles/${category}/${slug}`, {
      cache: 'no-store', // Disable caching for fresh data
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null; // Article not found
      }
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(`API returned error: ${data.message}`);
    }

    const article = data.data;

    if (!article) {
      return null;
    }

    // Data is already transformed by the API route, just add computed fields
    return {
      ...article,
      readTime: Math.ceil((article.content || '').split(' ').length / 200), // Estimate read time
      author: {
        ...article.author,
        avatar: '/assets/imgs/authors/default.jpg', // Default avatar
      },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Fetch related articles
async function getRelatedArticles() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/articles?related=true`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Failed to fetch related articles');
      return [];
    }

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }
}

// Generate metadata for article pages
export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  try {
    const { category, slug } = await params;
    const article = await getArticle(category, slug);

    if (!article) {
      return {
        title: "Article Not Found",
        description: "The requested article could not be found.",
      };
    }

    return {
      title: article.title,
      description: article.excerpt || article.content.substring(0, 160),
      keywords: article.tags?.join(', '),
      authors: [{ name: article.author.name }],
      openGraph: {
        title: article.title,
        description: article.excerpt || article.content.substring(0, 160),
        images: article.featuredImage ? [{ url: article.featuredImage, alt: article.title }] : [],
        type: 'article',
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        authors: [article.author.name],
        tags: article.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.excerpt || article.content.substring(0, 160),
        images: article.featuredImage ? [article.featuredImage] : [],
      },
    };
  } catch (error) {
    return {
      title: "Article",
      description: "Read the latest news and analysis.",
    };
  }
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  try {
    const { category, slug } = await params;
    const article = await getArticle(category, slug);

    if (!article) {
      notFound();
    }

    // Transform tags to match expected format (non-functional)
    const transformedTags = Array.isArray(article.tags)
      ? article.tags.map((tag: any, index: number) => ({
          id: typeof tag === 'string' ? index : tag.id || index,
          name: typeof tag === 'string' ? tag : tag.name || tag,
          slug: '', // Empty slug to make tags non-functional
        }))
      : [];

    // Fetch related articles
    const relatedArticles = await getRelatedArticles();

    return (
      <>
        <StructuredData
          type="article"
          title={article.title}
          description={article.excerpt || article.content.substring(0, 160)}
          image={article.featuredImage}
          url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${article.slug}`}
          publishedTime={article.publishedAt}
          modifiedTime={article.updatedAt}
          author={article.author}
          category={article.category}
        />
        <Section1 article={article} author={article.author} />
        <Section2 article={article} />
        <Section3
            article={article}
            author={article.author}
            tags={transformedTags}
            comments={[]}
            relatedArticles={relatedArticles}
            showNewsletter={false}
            showComments={false}
            showRelated={true}
        />
      </>
    );
  } catch (error) {
    console.error('Error loading article page:', error);
    notFound();
  }
}
