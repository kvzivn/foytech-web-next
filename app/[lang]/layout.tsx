import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "next-themes"
import ScreenSizeIndicator from "@/components/ScreenSizeIndicator"
import Header from "@/components/Header"
import Lenis from "@/components/Lenis"
import Footer from "@/components/Footer"
import i18nConfig from "@/i18n-config"
import { notFound } from "next/navigation"
import "./globals.css"

const fontSans = localFont({
  src: [
    {
      path: "./fonts/Roobert-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Roobert-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roobert-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roobert-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Roobert-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Roobert-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
})

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  if (!i18nConfig.locales.includes(params.lang)) {
    return <p>locale Not found</p>
  }

  return (
    <html lang={params.lang}>
      <body
        className={`${fontSans.className} text-black bg-slate-50 dark:bg-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Lenis />
          <Header />
          {children}
          <Footer />
          <ScreenSizeIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
