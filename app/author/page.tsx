import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/author/Section1";
import Section2 from "@/components/sections/author/Section2";
import { Metadata } from "next";
import { getAuthorPageData } from "@/lib/data";

// Generate metadata for author pages
export async function generateMetadata({ params }: { params: Promise<{ slug?: string }> }): Promise<Metadata> {
    try {
        const { slug } = await params;
        const authorSlug = slug || "default-author";
        const { author, articles } = await getAuthorPageData(authorSlug);

        if (!author) {
            return {
                title: "Author Not Found",
                description: "The requested author could not be found.",
            };
        }

        const articleCount = articles?.length || 0;
        const bio = author.bio || `Read articles by ${author.name}`;

        return {
            title: `${author.name} - Author Profile and Articles`,
            description: `${bio} Discover ${articleCount} articles written by ${author.name} on NewsBoard. Expert analysis and insightful reporting.`,
            keywords: [author.name, "author", "journalist", "reporter", "articles", "news", "analysis"],
            authors: [{ name: author.name }],
            alternates: {
                canonical: `/author/${author.slug}`,
            },
            openGraph: {
                title: `${author.name} - Author Profile and Articles`,
                description: `${bio} Discover ${articleCount} articles written by ${author.name}.`,
                url: `https://newsboard.com/author/${author.slug}`,
                siteName: "NewsBoard",
                type: "profile",
                images: [
                    {
                        url: author.avatar || "/assets/imgs/authors/author-1.jpg",
                        width: 400,
                        height: 400,
                        alt: `${author.name} - Author`,
                    },
                ],
            },
            twitter: {
                card: "summary",
                title: `${author.name} - Author Profile and Articles`,
                description: `${bio} Discover ${articleCount} articles written by ${author.name}.`,
                images: [author.avatar || "/assets/imgs/authors/author-1.jpg"],
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
        };
    } catch (error) {
        return {
            title: "Author Profile",
            description: "Read articles by our expert journalists and reporters.",
        };
    }
}

export default function Author() {
    return (
        <>
            <Section1 />
            <Section2 />
        </>
    );
}
