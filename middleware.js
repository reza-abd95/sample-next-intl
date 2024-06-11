import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "./config";

export default async function middleware(request) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get("x-your-custom-locale") || "en";

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set("x-your-custom-locale", defaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fa|en)/:path*"],
};
