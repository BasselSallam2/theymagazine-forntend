import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_SERVER || "http://localhost:8080/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) headers["x-forwarded-for"] = forwardedFor;

    const cfCountry = request.headers.get("cf-ipcountry");
    if (cfCountry) headers["cf-ipcountry"] = cfCountry;

    const vercelCountry = request.headers.get("x-vercel-ip-country");
    if (vercelCountry) headers["x-vercel-ip-country"] = vercelCountry;

    const userAgent = request.headers.get("user-agent");
    if (userAgent) headers["user-agent"] = userAgent;

    const referer = request.headers.get("referer");
    if (referer) headers["referer"] = referer;

    const response = await fetch(`${BACKEND_URL}/analytics/track`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Analytics proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Tracking failed" },
      { status: 500 },
    );
  }
}
