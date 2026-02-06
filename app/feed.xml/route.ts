import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl = "https://newsboard.com";

    // Static RSS feed without API calls
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>NewsBoard - Latest News and Breaking Stories</title>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <link>${baseUrl}</link>
    <description>Latest news, breaking stories, and in-depth analysis from trusted journalists.</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>en-US</language>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <item>
      <title><![CDATA[Welcome to NewsBoard]]></title>
      <link>${baseUrl}</link>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <dc:creator><![CDATA[NewsBoard Team]]></dc:creator>
      <category><![CDATA[News]]></category>
      <guid isPermaLink="false">${baseUrl}</guid>
      <description><![CDATA[Welcome to NewsBoard - your source for the latest news and breaking stories.]]></description>
      <content:encoded><![CDATA[Welcome to NewsBoard - your source for the latest news and breaking stories.]]></content:encoded>
    </item>
  </channel>
</rss>`;

    return new NextResponse(rss, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
    });
}
