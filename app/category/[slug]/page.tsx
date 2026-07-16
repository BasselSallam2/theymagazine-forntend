import Section1 from "@/components/sections/category/Section1";
import Section2 from "@/components/sections/category/Section2";
import { Metadata } from "next";
import { getCategoryPageData } from "@/lib/data";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const CATEGORY_PAGE_LIMIT = 12;

function parsePage(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const page = parseInt(raw || "1", 10);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

// Generate metadata for category pages
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = parsePage(resolvedSearchParams.page);
  const isArabicCategory = slug === "byqwlw-ayh";

  try {
    const { category, articles, meta } = await getCategoryPageData(slug, {
      page,
      limit: CATEGORY_PAGE_LIMIT,
    });

    if (!category) {
      return {
        title: isArabicCategory ? "الفئة غير موجودة" : "Category Not Found",
        description: isArabicCategory
          ? "الفئة المطلوبة غير موجودة."
          : "The requested category could not be found.",
      };
    }

    const articleCount = meta?.total || articles?.length || 0;
    const canonicalPath =
      page > 1
        ? `/category/${category.slug}?page=${page}`
        : `/category/${category.slug}`;

    const title = isArabicCategory
      ? `أخبار ${category.name} - أحدث قصص ${category.name}`
      : `${category.name} News - Latest ${category.name} Stories`;

    const description = isArabicCategory
      ? `تابع أحدث أخبار ${category.name.toLowerCase()} والقصص المثيرة والتحليلات العميقة. اقرأ ${articleCount} مقالة حول ${category.name.toLowerCase()} على ${SITE_NAME}.`
      : `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis. Read ${articleCount} articles about ${category.name.toLowerCase()} on ${SITE_NAME}.`;

    return {
      title,
      description,
      keywords: [
        category.name,
        "news",
        "articles",
        "stories",
        "analysis",
        category.name.toLowerCase(),
        SITE_NAME,
      ],
      alternates: {
        canonical: canonicalPath,
      },
      openGraph: {
        title,
        description: isArabicCategory
          ? `تابع أحدث أخبار ${category.name.toLowerCase()} والقصص المثيرة والتحليلات العميقة.`
          : `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis.`,
        url: `${SITE_URL}${canonicalPath}`,
        siteName: SITE_NAME,
        type: "website",
        images: [
          {
            url: "/assets/imgs/news/news-1.jpg",
            width: 1200,
            height: 630,
            alt: isArabicCategory
              ? `أخبار ${category.name}`
              : `${category.name} News`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: isArabicCategory
          ? `تابع أحدث أخبار ${category.name.toLowerCase()} والقصص المثيرة والتحليلات العميقة.`
          : `Stay updated with the latest ${category.name.toLowerCase()} news, breaking stories, and in-depth analysis.`,
        images: ["/assets/imgs/news/news-1.jpg"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      other:
        meta && meta.totalPages > 1
          ? {
              ...(meta.hasPrev && meta.prevPage
                ? {
                    prev:
                      meta.prevPage === 1
                        ? `${SITE_URL}/category/${category.slug}`
                        : `${SITE_URL}/category/${category.slug}?page=${meta.prevPage}`,
                  }
                : {}),
              ...(meta.hasNext && meta.nextPage
                ? {
                    next: `${SITE_URL}/category/${category.slug}?page=${meta.nextPage}`,
                  }
                : {}),
            }
          : undefined,
    };
  } catch (error) {
    return {
      title: isArabicCategory ? "أخبار الفئة" : "Category News",
      description: isArabicCategory
        ? "تصفح مقالات الأخبار حسب الفئة."
        : "Browse news articles by category.",
    };
  }
}

export default async function Category({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = parsePage(resolvedSearchParams.page);
  const isArabicCategory = slug === "byqwlw-ayh";

  try {
    const { category, articles, meta } = await getCategoryPageData(slug, {
      page,
      limit: CATEGORY_PAGE_LIMIT,
    });

    if (!category) {
      return (
        <div className="container text-center py-5">
          <h1>
            {isArabicCategory ? "الفئة غير موجودة" : "Category Not Found"}
          </h1>
          <p>
            {isArabicCategory
              ? `الفئة "${slug}" غير موجودة.`
              : `The category "${slug}" could not be found.`}
          </p>
        </div>
      );
    }

    return (
      <>
        <Section1
          category={category}
          breadcrumb={{
            home: isArabicCategory ? "الرئيسية" : "Home",
            current:
              category?.name || (isArabicCategory ? "الفئة" : "Category"),
          }}
          showLine={false}
          isArabic={isArabicCategory}
        />
        <Section2
          articles={articles || []}
          category={category}
          showPagination={true}
          pagination={meta}
          title={isArabicCategory ? "أحدث المقالات" : "Latest Articles"}
          isArabic={isArabicCategory}
        />
      </>
    );
  } catch (error) {
    console.error("Error loading category page:", error);
    return (
      <div className="container text-center py-5">
        <h1>
          {isArabicCategory ? "خطأ في تحميل الفئة" : "Error Loading Category"}
        </h1>
        <p>
          {isArabicCategory
            ? "حدث خطأ في تحميل صفحة الفئة. يرجى المحاولة مرة أخرى لاحقاً."
            : "There was an error loading the category page. Please try again later."}
        </p>
      </div>
    );
  }
}
