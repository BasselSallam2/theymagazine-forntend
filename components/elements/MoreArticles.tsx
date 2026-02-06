"use client";

import { useEffect, useRef, useState } from "react";

interface MoreArticlesProps {
  children: React.ReactNode;
  visibleClass?: string;
  position?: number;
  onClose?: () => void;
  className?: string;
}

const MoreArticles: React.FC<MoreArticlesProps> = ({ children, visibleClass = "single-more-articles--visible", position = 0.55, onClose, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPosition = document.documentElement.scrollHeight * position;

      if (scrollPosition > triggerPosition) {
        if (!isVisible) {
          setIsVisible(true);
          containerRef.current.classList.add(visibleClass);
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
          containerRef.current.classList.remove(visibleClass);
        }
      }
    };

    // Initial check
    handleScroll();

    // Throttle the scroll event for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = undefined as unknown as NodeJS.Timeout;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isVisible, position, visibleClass]);

  return (
    <div ref={containerRef} className={`single-more-articles d-lg-block d-none ${className}`}>
      {children}
    </div>
  );
};

export default MoreArticles;
