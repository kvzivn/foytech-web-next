import Spotlights from "@/components/Spotlights"
import HeadingAnimated from "@/components/HeadingAnimated"
import SubHeadingAnimated from "@/components/SubHeadingAnimated"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import ContactCards from "@/components/ContactCards"

const i18nNamespaces = ["home"]

async function Contact({ params: { lang } }: { params: { lang: string } }) {
  const { t, resources } = await initTranslations(lang, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <div className="overflow-hidden">
        <section className="pt-48 pb-12">
          <Spotlights noAnimation />

          <div className="container flex flex-col items-center flex-grow mx-auto">
            <HeadingAnimated heading={t("contact.heading")} className="mb-1" />

            <SubHeadingAnimated subHeading={t("contact.text")} />

            <ContactCards />
          </div>
        </section>
      </div>
    </TranslationsProvider>
  )
}

export default Contact
