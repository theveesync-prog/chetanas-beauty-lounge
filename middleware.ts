import { NextRequest, NextResponse } from "next/server";

const APEX_HOST = "chetanasbeautylounge.com";
const CANONICAL_HOST = "www.chetanasbeautylounge.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === APEX_HOST) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
