// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { locales } from "@/i18n/config";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameParts = pathname.split("/");
  const localeSegment = pathnameParts[1];
  const isValidLocale = locales.includes(localeSegment as (typeof locales)[number]);
  const hasSubPath = pathnameParts.length > 2 && pathnameParts[2] !== "";

  // Keep locale support only for home routes (e.g. /zh, /ja, /en).
  // Redirect locale-prefixed subpages (e.g. /zh/community) to English routes.
  if (isValidLocale && hasSubPath) {
    const redirectedUrl = request.nextUrl.clone();
    const englishPath = `/${pathnameParts.slice(2).join("/")}`;
    redirectedUrl.pathname = englishPath === "/" ? "/" : englishPath.replace(/\/+$/, "");
    return NextResponse.redirect(redirectedUrl);
  }

  const requestHeaders = new Headers(request.headers);
  if (isValidLocale) {
    requestHeaders.set("x-next-locale", localeSegment);
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (isValidLocale) {
    response.cookies.set("NEXT_LOCALE", localeSegment, { path: "/" });
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sellers.json|robots.txt|manifest.json).*)",
  ],
};
