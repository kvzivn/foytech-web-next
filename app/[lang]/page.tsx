import Hero from "@/components/Hero"
import About from "@/components/About"
import Rumpole from "@/components/Rumpole"
import Team from "@/components/Team"
import FAQ from "@/components/FAQ"
import ContactForm from "@/components/ContactForm"
import BlogSection from "@/components/BlogSection"
import initTranslations from "../i18n"
import TranslationsProvider from "@/components/TranslationsProvider"

const i18nNamespaces = ["home"]

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { resources } = await initTranslations(lang, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Rumpole />
        <Team />
        <FAQ />
        <BlogSection />
        <ContactForm />
      </main>
    </TranslationsProvider>
  )
}
