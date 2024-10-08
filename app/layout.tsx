"use client"

import localFont from "next/font/local"
import { ThemeProvider } from "next-themes"
import ScreenSizeIndicator from "@/components/ScreenSizeIndicator"
import "./globals.css"
import "@/lib/i18n"
import Header from "@/components/Header"
import Lenis from "lenis"
import { useEffect } from "react"
import Footer from "@/components/Footer"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <html lang="en">
      <body
        className={`${fontSans.className} text-black bg-slate-50 dark:bg-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <ScreenSizeIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
