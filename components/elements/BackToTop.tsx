"use client";

import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export default function ScrollToTop() {
  const isVisible = useScrollVisibility(100);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      id="scrollUp"
      href="#top"
      className="scroll-up position-fixed"
      onClick={scrollToTop}
      style={{ display: isVisible ? "" : "none" }}
    >
      <i className="ti-angle-double-up"></i>
      <br />
      <span>Top</span>
    </a>
  );
}
