import Section1 from "@/components/sections/contact/Section1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with NewsBoard",
  description: "Contact NewsBoard for inquiries, feedback, or collaboration opportunities. Reach out to our team for advertising, events, or general questions. We're here to help!",
  keywords: ["contact", "get in touch", "inquiries", "feedback", "advertising", "events", "collaboration"],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Us - Get in Touch with NewsBoard",
    description: "Contact NewsBoard for inquiries, feedback, or collaboration opportunities. We're here to help!",
    url: 'https://newsboard.com/contact',
    siteName: 'NewsBoard',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Contact Us - Get in Touch with NewsBoard",
    description: "Contact NewsBoard for inquiries, feedback, or collaboration opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  return (
    <>
      <Section1 />
    </>
  );
}
