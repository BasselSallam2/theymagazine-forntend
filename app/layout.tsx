import type { Metadata } from "next";
import { EB_Garamond, Lora } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import PerformanceMonitor from "@/components/elements/PerformanceMonitor";
import { NoScriptWarning } from "@/components/elements/NoScriptFallback";
import { generateStructuredData } from "@/lib/metadata";

const ebGaramond = EB_Garamond({
    weight: ["400", "500", "600", "700"], // Only bold for headings
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
        default: "They Magazine",
        template: "%s | They Magazine",
    },
    description: "Stay informed with the latest breaking news, in-depth analysis, and comprehensive coverage of current events. Your trusted source for reliable journalism and insightful reporting.",
    keywords: ["news", "breaking news", "current events", "journalism", "analysis", "politics", "technology", "business", "sports", "entertainment"],
    authors: [{ name: "NewsBoard Team" }],
    creator: "NewsBoard",
    publisher: "NewsBoard",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://newsboard.com"),
    alternates: {
        canonical: "/",
    },
    manifest: "/manifest.json",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://newsboard.com",
        title: "They Magazine",
        description: "Stay informed with the latest breaking news, in-depth analysis, and comprehensive coverage of current events.",
        siteName: "NewsBoard",
        images: [
            {
                url: "/assets/imgs/theme/favicon.png",
                width: 1200,
                height: 630,
                alt: "NewsBoard - Latest News and Analysis",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "They Magazine",
        description: "Stay informed with the latest breaking news, in-depth analysis, and comprehensive coverage of current events.",
        images: ["/assets/imgs/theme/favicon.png"],
        creator: "@newsboard",
        site: "@newsboard",
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
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
    },
    other: {
        "application-name": "NewsBoard",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": "NewsBoard",
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
    // Generate structured data for the website
    const websiteStructuredData = generateStructuredData("website", {});
    const organizationStructuredData = generateStructuredData("organization", {});

    return (
        <html lang="en">
            <head>
                {/* Structured Data for Website */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteStructuredData),
                    }}
                />
                {/* Structured Data for Organization */}
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
                    <PerformanceMonitor />
                </ThemeProvider>
            </body>
        </html>
    );
}
