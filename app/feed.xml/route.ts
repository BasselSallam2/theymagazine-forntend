import { NextResponse } from "next/server";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const BACK_END =
  process.env.NEXT_PUBLIC_API_SERVER || "http://localhost:8080/api";

export async function GET() {
  let itemsXml = "";

  try {
    const response = await fetch(
      `${BACK_END}/post?status=published&limit=50&sort=-createdAt&populate=${encodeURIComponent(JSON.stringify(["category", "author"]))}`,
      { next: { revalidate: 3600 } },
    );

    if (response.ok) {
      const result = await response.json();
      const posts = result.data || [];

      itemsXml = posts
        .map((post: any) => {
          const categorySlug = post.category?.slug || "uncategorized";
          const link = `${SITE_URL}/${categorySlug}/${post.slug}`;
          const title = post.title || "Untitled";
          const description = post.description || post.seo?.description || "";
          const pubDate = new Date(
            post.publishedAt || post.createdAt || Date.now(),
          ).toUTCString();
          const creator = post.author?.name || SITE_NAME;
          const category = post.category?.name || "News";

          return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <pubDate>${pubDate}</pubDate>
      <dc:creator><![CDATA[${creator}]]></dc:creator>
      <category><![CDATA[${category}]]></category>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${description}]]></description>
    </item>`;
        })
        .join("");
    }
  } catch (error) {
    console.error("RSS feed fetch error:", error);
  }

  if (!itemsXml) {
    itemsXml = `
    <item>
      <title><![CDATA[Welcome to ${SITE_NAME}]]></title>
      <link>${SITE_URL}</link>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <dc:creator><![CDATA[${SITE_NAME} Team]]></dc:creator>
      <category><![CDATA[News]]></category>
      <guid isPermaLink="true">${SITE_URL}</guid>
      <description><![CDATA[Welcome to ${SITE_NAME} - your source for the latest news and breaking stories.]]></description>
    </item>`;
  }

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title>${SITE_NAME} - Latest News and Breaking Stories</title>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>en-US</language>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
    },
  });
}
