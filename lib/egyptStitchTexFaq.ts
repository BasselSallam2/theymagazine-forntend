import faqData from "@/lib/egyptStitchTexFaq.json";

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type EgyptStitchTexFaqData = {
  event: {
    name: string;
    dates: string;
    hours: string;
    venue: string;
    organizers: string;
    hub: string;
    register: string;
    theme: string;
    exhibitors: string;
    space: string;
  };
  en: FaqItem[];
  ar: FaqItem[];
};

export const egyptStitchTexFaq = faqData as EgyptStitchTexFaqData;

export function buildEventFaqSchema(lang: "en" | "ar") {
  const faqs = egyptStitchTexFaq[lang].slice(0, 20);
  const isAr = lang === "ar";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        "@id": "https://egystitchandtex.com/textiles/#event2026",
        name: isAr
          ? "معرض إيجيبت ستيتش أند تكس 2026 — نسخة تكنولوجيا النسيج"
          : "EGYPT STITCH & TEX EXPO 2026 — Textile Technologies Edition",
        alternateName: [
          "Egypt Stitch and Tex 2026",
          "Egy Stitch & Tex",
          "إيجيبت ستيتش أند تكس",
        ],
        description: isAr
          ? "المعرض الدولي الرابع والعشرون لماكينات صناعة الغزل والنسيج والسجاد والأقمشة وتكنولوجيا الطباعة ومستلزماتهم. يُنظم بالتعاون بين Vision Fairs و Business Plus Fairs."
          : "The 24th International Exhibition for Spinning, Weaving, Carpet and Fabric Machinery, Printing Technologies and Accessories. Co-organized by Vision Fairs and Business Plus Fairs.",
        inLanguage: lang,
        startDate: "2026-09-24T11:00:00+03:00",
        endDate: "2026-09-27T20:30:00+03:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Cairo International Convention Centre (CICC)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2 El-Nasr Road, Nasr City",
            addressLocality: "Cairo",
            addressCountry: "EG",
          },
        },
        organizer: [
          {
            "@type": "Organization",
            name: "Vision Fairs",
            email: "info@visionfairs.com",
            url: "https://egystitchandtex.com/textiles/",
          },
          {
            "@type": "Organization",
            name: "Business Plus Fairs",
          },
        ],
        offers: {
          "@type": "Offer",
          url: "https://www.egystitchandtex.com/visitestt",
          availability: "https://schema.org/InStock",
          price: "0",
          priceCurrency: "EGP",
          description: isAr
            ? "تسجيل مسبق مجاني للزوار التجاريين المؤهلين"
            : "Advance visitor registration for qualified trade visitors",
        },
      },
      {
        "@type": "FAQPage",
        inLanguage: lang,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer.replace(/\s+/g, " ").trim().slice(0, 500),
          },
        })),
      },
    ],
  };
}
