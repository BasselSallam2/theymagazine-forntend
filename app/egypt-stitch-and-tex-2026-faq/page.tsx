import type { Metadata } from "next";
import EgyptStitchTexFaqView from "@/components/sections/egypt-stitch-tex/EgyptStitchTexFaqView";
import { buildEventFaqSchema } from "@/lib/egyptStitchTexFaq";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PATH = "/egypt-stitch-and-tex-2026-faq";
const AR_PATH = "/ar/egypt-stitch-and-tex-2026-faq";

export const metadata: Metadata = {
  title: "Egypt Stitch & Tex 2026 FAQ | Textile Machinery Exhibition Cairo",
  description:
    "Complete FAQ for Egypt Stitch & Tex 2026: dates 24–27 Sep, CICC Cairo, free visitor registration, Hosted Buyer Program, textile and garment machinery sectors.",
  keywords: [
    "Egypt Stitch & Tex",
    "Stitch and Tex 2026",
    "textile machinery exhibition Cairo",
    "CICC",
    "Vision Fairs",
    "garment machinery",
    SITE_NAME,
  ],
  alternates: {
    canonical: PATH,
    languages: {
      en: PATH,
      ar: AR_PATH,
      "x-default": PATH,
    },
  },
  openGraph: {
    title: "Egypt Stitch & Tex 2026 FAQ",
    description:
      "24–27 September 2026 at CICC Cairo. Textile & garment machinery exhibition FAQ.",
    url: `${SITE_URL}${PATH}`,
    siteName: SITE_NAME,
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function EgyptStitchAndTexFaqPage() {
  const schema = buildEventFaqSchema("en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EgyptStitchTexFaqView lang="en" />
    </>
  );
}
