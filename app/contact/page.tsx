import Section1 from "@/components/sections/contact/Section1";
import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us - Get in Touch with ${SITE_NAME}`,
  description: `Contact ${SITE_NAME} for inquiries, feedback, or collaboration opportunities. Reach out to our team for advertising, events, or general questions. We're here to help!`,
  keywords: ["contact", "get in touch", "inquiries", "feedback", "advertising", "events", "collaboration", SITE_NAME],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us - Get in Touch with ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} for inquiries, feedback, or collaboration opportunities. We're here to help!`,
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Contact Us - Get in Touch with ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} for inquiries, feedback, or collaboration opportunities.`,
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
