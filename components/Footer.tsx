import TranslationsProvider from "./TranslationsProvider"
import initTranslations from "@/app/i18n"
import ClientFooter from "./ClientFooter"

const Footer = async ({ lang }: { lang: string }) => {
  const { resources } = await initTranslations(lang, ["home"])

  return (
    <TranslationsProvider
      namespaces={["home"]}
      locale={lang}
      resources={resources}
    >
      <ClientFooter />
    </TranslationsProvider>
  )
}

export default Footer
