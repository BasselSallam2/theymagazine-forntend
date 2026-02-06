import Link from "next/link";
import { ContactSectionProps } from "@/types";

export default function Section1({
  title = "Contact Us",
  breadcrumb = {
    home: "Home",
    current: "Get in touch"
  },
  companyInfo = {
    name: "They Magazine",
    description: "a digital publication dedicated to publishing curated, accurate news with clarity and credibility. Our editorial approach focuses on context, depth, and delivering information that truly matters.",
  },
  contactInfo = {
    address: "Cairo, Egypt",
    phone: "+20 109 607 2229",
    generalEmail: "info@theymagazine.com",
  },
  advertiseInfo = {
    generalEmail: "info@theymagazine.com",
    salesEmail: "sale@newsboard.com",
    description: "contact us for requests-for-proposal and additional pricing information.",
  },
  eventInfo = {
    description: "We are a professional event management team, starting in 2023.",
    email: "info@theymagazine.com",
  },
  socialLinks = [
    { name: "Facebook", href: "#", icon: "ti-facebook", className: "facebook-icon" },
    { name: "Twitter", href: "#", icon: "ti-twitter-alt", className: "twitter-icon" },
    { name: "Pinterest", href: "#", icon: "ti-pinterest", className: "pinterest-icon" },
    { name: "Instagram", href: "#", icon: "ti-instagram", className: "instagram-icon" },
  ],
  advertisement = {
    image: "/assets/imgs/ads/ads-2.jpg",
    href: "#",
    alt: "newsboard",
  },
  formConfig = {
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Message",
    submitText: "Send message",
  },
  className = "",
}: ContactSectionProps) {
  return (
    <>
      {/*archive header*/}
      <div className={`archive-header text-center mb-50 mt-30 ${className}`}>
        <h2 className="font-weight-bold">
          <span className="font-family-normal">{title}</span>
        </h2>
        <div className="breadcrumb font-small">
          <Link href="/">{breadcrumb.home}</Link>
          <span /> {breadcrumb.current}
        </div>
      </div>
      <div className="entry-wraper">
        <div className="mb-30">
          <p>
            We are <strong>{companyInfo.name}</strong> , {companyInfo.description}
          </p>
          <hr className="wp-block-separator is-style-dots" />
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h3 className="mb-30">Contact</h3>
            <p>
              <strong>Address:</strong> {contactInfo.address} <br />
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p>If you would like to partner with Ultra at our next event, contact us at {contactInfo.generalEmail}.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3 className="mb-30">Advertise</h3>
            <p>Please contact us directly at {advertiseInfo.generalEmail}.</p>
            <p>{advertiseInfo.description}</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3 className="mb-30">Event</h3>
            <p>{eventInfo.description}</p>
            <p>Please send request details to email {eventInfo.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
