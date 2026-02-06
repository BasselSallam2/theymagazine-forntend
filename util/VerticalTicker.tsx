"use client";

import React, { useEffect, useRef, useState } from "react";

interface TickerProps {
  items: React.ReactNode[];
  speed?: number;
  pause?: number;
  showItems?: number;
  animation?: "slide" | "fade";
  mousePause?: boolean;
  loop?: boolean;
}

export default function VerticalTicker({ items, speed = 500, pause = 3000, showItems = 1, animation = "slide", mousePause = true, loop = true }: TickerProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [itemHeight, setItemHeight] = useState(0);

  const totalItems = items.length;

  useEffect(() => {
    if (itemRef.current) {
      setItemHeight(itemRef.current.offsetHeight);
    }
  }, [itemRef.current]);

  useEffect(() => {
    if (totalItems <= showItems) return;

    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => {
          const next = prev + 1;
          return loop ? next % totalItems : next < totalItems - showItems + 1 ? next : prev;
        });
      }, pause);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, totalItems, pause, showItems, loop]);

  const handleMouseEnter = () => {
    if (mousePause) setPaused(true);
  };

  const handleMouseLeave = () => {
    if (mousePause) setPaused(false);
  };

  return (
    <div className="ticker-wrapper overflow-hidden relative" style={{ height: animation === "slide" ? itemHeight * showItems : undefined }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {animation === "slide" ? (
        <div
          className="ticker-inner transition-transform"
          style={{
            transform: `translateY(-${index * itemHeight}px)`,
            transitionDuration: `${speed}ms`,
          }}
        >
          {items.map((item, i) => (
            <div key={`ticker-${i}`} ref={i === 0 ? itemRef : null} className="ticker-item">
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className="relative">
          {items.map((item, i) => (
            <div
              key={i}
              className="ticker-item absolute left-0 right-0 transition-opacity"
              style={{
                opacity: i === index ? 1 : 0,
                transitionDuration: `${speed}ms`,
                position: i === index ? "relative" : "absolute",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
