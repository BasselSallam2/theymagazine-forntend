import Section1 from "@/components/sections/single/Section1";
import Section2 from "@/components/sections/single/Section2";
import Section3 from "@/components/sections/single/Section3";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

// Generate metadata for article pages
export async function generateMetadata({ params }: { params: Promise<{ slug?: string }> }): Promise<Metadata> {
    try {
        const { slug } = await params;
        const articleSlug = slug || "default-article";

        return {
            title: "Article - NewsBoard",
            description: "Read the latest news and analysis.",
        };
    } catch (error) {
        return {
            title: "Article",
            description: "Read the latest news and analysis.",
        };
    }
}

export default async function Single({ params }: { params: Promise<{ slug?: string }> }) {
    try {
        const { slug } = await params;
        const articleSlug = slug || "default-article";

        return (
            <>
                <Section1 />
                <Section2 />
                <Section3 />
            </>
        );
    } catch (error) {
        return (
            <>
                <Section1 />
                <Section2 />
                <Section3 />
            </>
        );
    }
}
