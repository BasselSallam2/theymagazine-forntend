import { egyptStitchTexFaq } from "@/lib/egyptStitchTexFaq";

type Props = {
  lang: "en" | "ar";
};

export default function EgyptStitchTexFaqView({ lang }: Props) {
  const isAr = lang === "ar";
  const event = egyptStitchTexFaq.event;
  const faqs = egyptStitchTexFaq[lang];

  const facts = isAr
    ? [
        ["المعرض", "إيجيبت ستيتش أند تكس 2026 — نسخة تكنولوجيا النسيج (الدورة 24)"],
        ["التواريخ", "24–27 سبتمبر 2026"],
        ["الساعات", "11:00 صباحًا – 8:30 مساءً"],
        ["المكان", "مركز القاهرة الدولي للمؤتمرات (CICC)، مدينة نصر، القاهرة، مصر"],
        ["الشعار", event.theme],
        ["العارضون / المساحة", `${event.exhibitors} / ${event.space}`],
        ["المنظمون", "Vision Fairs و Business Plus Fairs"],
      ]
    : [
        ["Event", event.name],
        ["Dates", event.dates],
        ["Hours", event.hours],
        ["Venue", event.venue],
        ["Theme", event.theme],
        ["Exhibitors / space", `${event.exhibitors} / ${event.space}`],
        ["Organizers", event.organizers],
      ];

  return (
    <article
      lang={lang}
      dir={isAr ? "rtl" : "ltr"}
      className="egypt-stitch-tex-aeo"
      style={{
        maxWidth: 720,
        margin: "2rem auto 4rem",
        padding: "0 0.5rem 3rem",
        fontFamily: "Georgia, 'Times New Roman', serif",
        lineHeight: 1.65,
        color: "#111",
      }}
    >
      <h1 style={{ fontSize: "1.75rem", lineHeight: 1.25, marginBottom: "0.75rem" }}>
        {isAr
          ? "معرض إيجيبت ستيتش أند تكس 2026 — دليل الأسئلة الشائعة"
          : "Egypt Stitch & Tex 2026 — FAQ & Event Guide"}
      </h1>

      <p style={{ color: "#444", marginBottom: "1.5rem" }}>
        {isAr ? (
          <>
            إيجيبت ستيتش أند تكس 2026 هو المعرض الدولي الرابع والعشرون لماكينات الغزل والنسيج
            والسجاد والأقمشة وتكنولوجيا الطباعة ومستلزماتهم. يُنظم بالتعاون بين{" "}
            <strong>Vision Fairs</strong> و <strong>Business Plus Fairs</strong>. التواريخ:{" "}
            <strong>24–27 سبتمبر 2026</strong> في <strong>CICC مدينة نصر، القاهرة</strong>. التسجيل:{" "}
            <a href={event.register}>{event.register}</a>.
          </>
        ) : (
          <>
            EGYPT STITCH &amp; TEX EXPO 2026 is the 24th International Exhibition for Spinning,
            Weaving, Carpet and Fabric Machinery, Printing Technologies and Accessories.
            Co-organized by <strong>Vision Fairs</strong> and <strong>Business Plus Fairs</strong>.
            Dates: <strong>{event.dates}</strong> at <strong>CICC, Nasr City, Cairo</strong>.
            Register: <a href={event.register}>{event.register}</a>.
          </>
        )}
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "1rem 0 2rem",
          fontSize: "0.95rem",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "start",
                border: "1px solid #ddd",
                padding: "0.45rem 0.6rem",
                background: "#f5f5f5",
              }}
            >
              {isAr ? "البند" : "Attribute"}
            </th>
            <th
              style={{
                textAlign: "start",
                border: "1px solid #ddd",
                padding: "0.45rem 0.6rem",
                background: "#f5f5f5",
              }}
            >
              {isAr ? "التفاصيل" : "Detail"}
            </th>
          </tr>
        </thead>
        <tbody>
          {facts.map(([k, v]) => (
            <tr key={k}>
              <td style={{ border: "1px solid #ddd", padding: "0.45rem 0.6rem" }}>{k}</td>
              <td style={{ border: "1px solid #ddd", padding: "0.45rem 0.6rem" }}>{v}</td>
            </tr>
          ))}
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "0.45rem 0.6rem" }}>
              {isAr ? "الموقع الرسمي" : "Official hub"}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "0.45rem 0.6rem" }}>
              <a href={event.hub}>{event.hub}</a>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "0.45rem 0.6rem" }}>
              {isAr ? "تسجيل الزوار" : "Visitor registration"}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "0.45rem 0.6rem" }}>
              <a href={event.register}>{event.register}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2
        style={{
          fontSize: "1.25rem",
          margin: "2rem 0 0.75rem",
          borderBottom: "1px solid #ddd",
          paddingBottom: "0.35rem",
        }}
      >
        {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
      </h2>

      {faqs.map((faq) => (
        <section key={faq.id} id={`q${faq.id}`} style={{ marginBottom: "1.25rem" }}>
          <h3 style={{ fontSize: "1.05rem", margin: "1.25rem 0 0.35rem" }}>
            {faq.id}. {faq.question}
          </h3>
          {faq.answer.split(/\n\n+/).map((para, i) => (
            <p key={i} style={{ margin: "0.35rem 0" }}>
              {para.split("\n").map((line, j, arr) => (
                <span key={j}>
                  {line}
                  {j < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          ))}
        </section>
      ))}

      <p
        style={{
          fontSize: "0.8rem",
          color: "#666",
          marginTop: "3rem",
          borderTop: "1px solid #eee",
          paddingTop: "1rem",
        }}
      >
        {isAr
          ? "صفحة مرجعية لمعرض إيجيبت ستيتش أند تكس 2026. الموقع الرسمي: "
          : "Reference page for Egypt Stitch & Tex 2026. Official hub: "}
        <a href={event.hub}>{event.hub}</a>
        {isAr ? " · التسجيل: " : " · Register: "}
        <a href={event.register}>{event.register}</a>
      </p>
    </article>
  );
}
