import Section1 from "@/components/sections/single/Section1";
import Section2 from "@/components/sections/single/Section2";
import Section3 from "@/components/sections/single/Section3";
import StructuredData from "@/components/StructuredData";
import AnalyticsBeacon from "@/components/elements/AnalyticsBeacon";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const INTERNAL_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

// Fetch article data from API
async function getArticle(category: string, slug: string) {
  try {
    const response = await fetch(
      `${INTERNAL_SITE_URL}/api/articles/${category}/${slug}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
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

    return {
      ...article,
      readTime: Math.ceil((article.content || "").split(" ").length / 200),
      author: {
        ...article.author,
        avatar: "/assets/imgs/authors/default.jpg",
      },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

// Fetch related articles (optionally exclude current article by its full path slug)
async function getRelatedArticles(excludeSlug?: string) {
  try {
    const url = new URL(`${INTERNAL_SITE_URL}/api/articles`);
    url.searchParams.set("related", "true");
    if (excludeSlug) url.searchParams.set("excludeSlug", excludeSlug);

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch related articles");
      return [];
    }

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
}

// Generate metadata for article pages
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
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

    const path = `/${category}/${slug}`;
    const title = article.seo?.title || article.title;
    const description =
      article.seo?.description ||
      article.excerpt ||
      (article.content ? String(article.content).replace(/<[^>]+>/g, "").substring(0, 160) : "");
    const keywords = article.seo?.keywords?.length
      ? article.seo.keywords
      : Array.isArray(article.tags)
        ? article.tags.map((t: any) => (typeof t === "string" ? t : t.name))
        : [];

    return {
      title,
      description,
      keywords,
      authors: [{ name: article.author.name }],
      alternates: {
        canonical: path,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}${path}`,
        siteName: SITE_NAME,
        images: article.featuredImage
          ? [{ url: article.featuredImage, alt: title }]
          : [],
        type: "article",
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        authors: [article.author.name],
        tags: keywords,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: article.featuredImage ? [article.featuredImage] : [],
      },
      robots: {
        index: true,
        follow: true,
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
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  try {
    const { category, slug } = await params;
    const article = await getArticle(category, slug);

    if (!article) {
      notFound();
    }

    const transformedTags = Array.isArray(article.tags)
      ? article.tags.map((tag: any, index: number) => ({
          id: typeof tag === "string" ? index : tag.id || index,
          name: typeof tag === "string" ? tag : tag.name || tag,
          slug: "",
        }))
      : [];

    const relatedArticles = await getRelatedArticles(article.slug);
    const articlePath = `/${category}/${slug}`;

    return (
      <>
        <AnalyticsBeacon
          type="article_view"
          path={articlePath}
          postId={article.id}
        />
        <StructuredData
          type="article"
          title={article.seo?.title || article.title}
          description={
            article.seo?.description ||
            article.excerpt ||
            (article.content
              ? String(article.content).replace(/<[^>]+>/g, "").substring(0, 160)
              : "")
          }
          image={article.featuredImage}
          url={`${SITE_URL}${articlePath}`}
          publishedTime={article.publishedAt}
          modifiedTime={article.updatedAt}
          author={article.author}
          category={article.category}
          tags={article.tags}
          slug={`${category}/${slug}`}
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
    console.error("Error loading article page:", error);
    notFound();
  }
}
