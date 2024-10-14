import initTranslations from "@/app/i18n"
import ClientHeader from "./ClientHeader"
import TranslationsProvider from "@/components/TranslationsProvider"

const Header = async ({ lang }: { lang: string }) => {
  const { resources } = await initTranslations(lang, ["home"])

  return (
    <TranslationsProvider
      namespaces={["home"]}
      locale={lang}
      resources={resources}
    >
      <ClientHeader />
    </TranslationsProvider>
  )
}

export default Header
