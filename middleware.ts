import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("X-Fern-Host", "octo.ai");

  const url = request.nextUrl.clone();
  url.host = "app-slashferndocscom-buildwithfern.vercel.app";

  return NextResponse.rewrite(url, { request: { headers } });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/docs/", "/docs/:path*/"],
};
