import { Metadata } from "next"
import initTranslations from "@/app/i18n"
import BlogPostLinks from "@/components/BlogPostLinks"
import TranslationsProvider from "@/components/TranslationsProvider"

const i18nNamespaces = ["home"]

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const { t } = await initTranslations(lang, i18nNamespaces)

  return {
    title: t("news.heading"),
    description: t("news.subheading"),
  }
}

export default async function BlogPage({
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
      <div className="overflow-hidden">
        <BlogPostLinks />
      </div>
    </TranslationsProvider>
  )
}
