import { i18nRouter } from "next-i18n-router"
import { NextRequest } from "next/server"
import i18nConfig from "@/i18n-config"

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig)
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
}

// this can be beefier
//https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/middleware.ts
