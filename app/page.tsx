import Section1 from "@/components/sections/home/Section1";
import Section2 from "@/components/sections/home/Section2";
import Section3 from "@/components/sections/home/Section3";
import Section4 from "@/components/sections/home/Section4";
import Section5 from "@/components/sections/home/Section5";
import Section6 from "@/components/sections/home/Section6";
import Section7 from "@/components/sections/home/Section7";
import SuspenseWrapper from "@/components/elements/SuspenseWrapper";
import { Metadata } from "next";

// Home page metadata
export const metadata: Metadata = {
  title: "They Magazine",
  description: "Get the latest breaking news, in-depth analysis, and comprehensive coverage of current events. Stay informed with our trusted journalism and insightful reporting on politics, technology, business, sports, and entertainment.",
  keywords: ["breaking news", "latest news", "current events", "politics", "technology", "business", "sports", "entertainment", "analysis", "journalism"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "They Magazine",
    description: "Get the latest breaking news, in-depth analysis, and comprehensive coverage of current events. Stay informed with our trusted journalism.",
    url: "https://newsboard.com",
    siteName: "NewsBoard",
    images: [
      {
        url: "/assets/imgs/news/news-1.jpg",
        width: 1200,
        height: 630,
        alt: "Latest News and Breaking Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "They Magazine",
    description: "Get the latest breaking news, in-depth analysis, and comprehensive coverage of current events.",
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
};

export default async function Home() {
  return (
    <>
      <SuspenseWrapper skeletonType="grid" skeletonCount={4}>
        <Section1 />
      </SuspenseWrapper>
      <Section2 />
      <SuspenseWrapper skeletonType="grid" skeletonCount={3}>
        <Section3 />
      </SuspenseWrapper>
      {/* <SuspenseWrapper skeletonType="grid" skeletonCount={4}>
        <Section4 />
      </SuspenseWrapper> */}
      {/* <Section5 /> */}
      {/* <Section6 /> */}
      {/* <SuspenseWrapper skeletonType="list" skeletonCount={5}>
        <Section7 />
      </SuspenseWrapper> */}
    </>
  );
}
