"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import { Button } from "../components/ui/button"
import { GlobeIcon } from "lucide-react"
import i18nConfig from "@/i18n-config"
import { usePathname, useRouter } from "next/navigation"

const LanguageSelector = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const handleChange = () => {
    const newLanguage = currentLocale === "en" ? "sv" : "en"

    // const days = 30
    // const date = new Date()
    // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    // document.cookie = `NEXT_LOCALE=${newLanguage};expires=${date.toUTCString()};path=/`

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLanguage + currentPathname)
    } else {
      console.log(newLanguage)
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLanguage}`)
      )
    }

    router.refresh()
  }

  return (
    <Button variant="outline" onClick={handleChange} className={className}>
      <GlobeIcon strokeWidth={1.5} className="h-4 w-4 mr-2" />
      {currentLocale === "en" ? "Svenska" : "English"}
    </Button>
  )
}

export default LanguageSelector
