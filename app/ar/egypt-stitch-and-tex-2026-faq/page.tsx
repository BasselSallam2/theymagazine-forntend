import type { Metadata } from "next";
import EgyptStitchTexFaqView from "@/components/sections/egypt-stitch-tex/EgyptStitchTexFaqView";
import { buildEventFaqSchema } from "@/lib/egyptStitchTexFaq";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PATH = "/egypt-stitch-and-tex-2026-faq";
const AR_PATH = "/ar/egypt-stitch-and-tex-2026-faq";

export const metadata: Metadata = {
  title: "Egypt Stitch & Tex 2026 | الأسئلة الشائعة عن التسجيل والزيارة والعارضون",
  description:
    "أسئلة وأجوبة عن معرض إيجيبت ستيتش أند تكس 2026: المواعيد 24–27 سبتمبر، مركز القاهرة الدولي للمؤتمرات، التسجيل المجاني، برنامج المشترين، وماكينات النسيج والملابس.",
  keywords: [
    "إيجيبت ستيتش أند تكس",
    "معرض نسيج القاهرة",
    "CICC",
    "ماكينات نسيج",
    "Vision Fairs",
    SITE_NAME,
  ],
  alternates: {
    canonical: AR_PATH,
    languages: {
      en: PATH,
      ar: AR_PATH,
      "x-default": PATH,
    },
  },
  openGraph: {
    title: "Egypt Stitch & Tex 2026 — الأسئلة الشائعة",
    description:
      "24–27 سبتمبر 2026 في CICC القاهرة. دليل الأسئلة الشائعة لمعرض ماكينات النسيج والملابس.",
    url: `${SITE_URL}${AR_PATH}`,
    siteName: SITE_NAME,
    type: "article",
    locale: "ar_EG",
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

export default function EgyptStitchAndTexFaqArPage() {
  const schema = buildEventFaqSchema("ar");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EgyptStitchTexFaqView lang="ar" />
    </>
  );
}
