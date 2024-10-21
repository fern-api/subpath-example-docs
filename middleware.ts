import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("X-Fern-Host", "buildwithfern.com");

  const url = request.nextUrl.clone();
  url.host = "app.ferndocs.com";

  return NextResponse.rewrite(url, { request: { headers } });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/learn/", "/learn/:path*/"],
};
