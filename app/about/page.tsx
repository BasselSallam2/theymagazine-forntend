import Section1 from "@/components/sections/about/Section1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - NewsBoard Team and Mission",
  description: "Learn about NewsBoard's mission to deliver reliable, insightful journalism. Meet our team of dedicated journalists and discover our commitment to truth, accuracy, and comprehensive news coverage.",
  keywords: ["about us", "team", "mission", "journalism", "news coverage", "reliable reporting", "dedicated journalists"],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Us - NewsBoard Team and Mission",
    description: "Learn about NewsBoard's mission to deliver reliable, insightful journalism. Meet our team of dedicated journalists.",
    url: 'https://newsboard.com/about',
    siteName: 'NewsBoard',
    type: 'website',
    images: [
      {
        url: '/assets/imgs/authors/author-1.jpg',
        width: 1200,
        height: 630,
        alt: 'NewsBoard Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - NewsBoard Team and Mission",
    description: "Learn about NewsBoard's mission to deliver reliable, insightful journalism.",
    images: ['/assets/imgs/authors/author-1.jpg'],
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
