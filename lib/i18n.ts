import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEN from "./locales/en/translation.json"
import translationSV from "./locales/sv/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
}

export const supportedLanguages = Object.keys(resources)

export const languageName = new Intl.DisplayNames(supportedLanguages, {
  type: "language",
})

const getInitialLanguage = () => {
  // if (typeof window !== "undefined") {
  //   return localStorage.getItem("language") || "sv"
  // }
  return "sv"
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "sv",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
