import type { Metadata } from "next";
import { EB_Garamond, Lora } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import PerformanceMonitor from "@/components/elements/PerformanceMonitor";
import { NoScriptWarning } from "@/components/elements/NoScriptFallback";
import AnalyticsBeacon from "@/components/elements/AnalyticsBeacon";
import { generateStructuredData } from "@/lib/metadata";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TWITTER, SITE_URL } from "@/lib/site";

const ebGaramond = EB_Garamond({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--eb-garamond",
    preload: true,
    fallback: ["serif"],
});

const lora = Lora({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    variable: "--lora",
    preload: true,
    fallback: ["serif"],
});

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
        SITE_NAME,
        "news",
        "breaking news",
        "current events",
        "journalism",
        "analysis",
        "politics",
        "technology",
        "business",
        "sports",
        "entertainment",
    ],
    authors: [{ name: `${SITE_NAME} Team` }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: "/",
        types: {
            "application/rss+xml": `${SITE_URL}/feed.xml`,
        },
    },
    manifest: "/manifest.json",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        siteName: SITE_NAME,
        images: [
            {
                url: "/assets/imgs/theme/favicon.svg",
                width: 1200,
                height: 630,
                alt: `${SITE_NAME} - Latest News and Analysis`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: ["/assets/imgs/theme/favicon.svg"],
        creator: SITE_TWITTER,
        site: SITE_TWITTER,
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
    verification: {
        ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
            ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
            : {}),
    },
    other: {
        "application-name": SITE_NAME,
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": SITE_NAME,
        "format-detection": "telephone=no",
        "mobile-web-app-capable": "yes",
        "msapplication-config": "/browserconfig.xml",
        "msapplication-TileColor": "#df4a2c",
        "msapplication-tap-highlight": "no",
        "theme-color": "#df4a2c",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const websiteStructuredData = generateStructuredData("website", {});
    const organizationStructuredData = generateStructuredData("organization", {});

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteStructuredData),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationStructuredData),
                    }}
                />
            </head>
            <body className={`${ebGaramond.variable} ${lora.variable}`}>
                <NoScriptWarning />
                <ThemeProvider defaultTheme="light">
                    <Layout>{children}</Layout>
                    <AnalyticsBeacon type="pageview" />
                    <PerformanceMonitor />
                </ThemeProvider>
            </body>
        </html>
    );
}
