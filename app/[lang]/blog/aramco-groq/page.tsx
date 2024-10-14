import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import AramcoGroqContent from "./content"
import { Metadata } from "next"

const i18nNamespaces = ["home"]

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await initTranslations(params.lang, i18nNamespaces)

  const postImage = "/images/aramco-groq-blog-post.webp"

  return {
    title: t("news.aramcoGroq.heading"),
    description: t("news.aramcoGroq.description"),
    openGraph: {
      title: t("news.aramcoGroq.heading"),
      description: t("news.aramcoGroq.description"),
      images: [postImage],
      type: "article",
      publishedTime: "2024-09-21T00:00:00.000Z",
      authors: ["Foytech"],
      siteName: "Foytech Blog",
    },
    twitter: {
      card: "summary_large_image",
      title: t("news.aramcoGroq.heading"),
      description: t("news.aramcoGroq.description"),
      images: [postImage],
    },
    alternates: {
      canonical: `https://foytech.com/blog/aramco-groq`,
      languages: {
        en: "/blog/aramco-groq",
        sv: "/sv/blog/aramco-groq",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function AramcoGroqPost({
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
      <AramcoGroqContent />
    </TranslationsProvider>
  )
}
