import { NextResponse } from "next/server";

const IG_API = "https://graph.instagram.com";
const FIELDS = [
  "id",
  "caption",
  "media_type",
  "media_url",
  "thumbnail_url",
  "permalink",
  "timestamp",
  "children{media_url,media_type,thumbnail_url}",
].join(",");

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "INSTAGRAM_ACCESS_TOKEN not configured" },
      { status: 503 }
    );
  }

  const url = `${IG_API}/me/media?fields=${FIELDS}&limit=9&access_token=${token}`;

  const res = await fetch(url, {
    // Cache the Instagram response for 1 hour — CDN URLs expire, so don't cache longer
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Instagram API error:", res.status, body);
    return NextResponse.json(
      { error: `Instagram API returned ${res.status}` },
      { status: 502 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
