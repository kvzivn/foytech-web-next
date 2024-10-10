"use client"

import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "../components/ui/button"
import { GlobeIcon } from "lucide-react"

const LanguageSelector = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation()

  // useEffect(() => {
  //   const savedLanguage = localStorage.getItem("language") || "sv"
  //   if (i18n.language !== savedLanguage) {
  //     i18n.changeLanguage(savedLanguage)
  //   }
  // }, [i18n])

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "sv" : "en"
    i18n.changeLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return (
    <Button variant="outline" onClick={changeLanguage} className={className}>
      <GlobeIcon strokeWidth={1.5} className="h-4 w-4 mr-2" />
      {i18n.language === "en" ? "Svenska" : "English"}
    </Button>
  )
}

export default LanguageSelector
