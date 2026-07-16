"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const VISITOR_KEY = "tm_visitor_id";

function getOrCreateVisitorId(): string {
  try {
    const existing = localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `v_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(VISITOR_KEY, id);
    return id;
  } catch {
    return `v_${Date.now()}`;
  }
}

type AnalyticsBeaconProps = {
  type?: "pageview" | "article_view";
  path?: string;
  postId?: string;
};

export default function AnalyticsBeacon({
  type = "pageview",
  path,
  postId,
}: AnalyticsBeaconProps) {
  const pathname = usePathname();
  const trackedRef = useRef<string | null>(null);

  useEffect(() => {
    const trackPath = path || pathname || "/";
    const key = `${type}:${trackPath}:${postId || ""}`;
    if (trackedRef.current === key) return;
    trackedRef.current = key;

    const payload = {
      type,
      path: trackPath,
      postId,
      visitorId: getOrCreateVisitorId(),
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };

    const body = JSON.stringify(payload);

    // Prefer sendBeacon for reliability on navigation
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/analytics/track", blob);
      return;
    }

    fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // Ignore tracking failures
    });
  }, [type, path, postId, pathname]);

  return null;
}
