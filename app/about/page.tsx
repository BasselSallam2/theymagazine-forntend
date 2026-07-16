import Section1 from "@/components/sections/about/Section1";
import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us - ${SITE_NAME} Team and Mission`,
  description: `Learn about ${SITE_NAME}'s mission to deliver reliable, insightful journalism. Meet our team of dedicated journalists and discover our commitment to truth, accuracy, and comprehensive news coverage.`,
  keywords: ["about us", "team", "mission", "journalism", "news coverage", "reliable reporting", SITE_NAME],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us - ${SITE_NAME} Team and Mission`,
    description: `Learn about ${SITE_NAME}'s mission to deliver reliable, insightful journalism. Meet our team of dedicated journalists.`,
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/assets/imgs/authors/author-1.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Team`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us - ${SITE_NAME} Team and Mission`,
    description: `Learn about ${SITE_NAME}'s mission to deliver reliable, insightful journalism.`,
    images: ["/assets/imgs/authors/author-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <>
      <Section1 />
    </>
  );
}
