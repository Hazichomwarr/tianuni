import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const adminCookie = req.cookies.get("admin");
  const pathname = req.nextUrl.pathname;

  // allow login page
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  if (!adminCookie) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
