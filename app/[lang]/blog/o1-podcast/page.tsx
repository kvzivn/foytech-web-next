import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
import O1PodcastContent from "./content"
import { Metadata } from "next"

const i18nNamespaces = ["home"]

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await initTranslations(params.lang, i18nNamespaces)

  const postImage = "/images/o1-blog-post.webp"

  return {
    title: t("news.podcast.heading"),
    description: t("news.podcast.description"),
    openGraph: {
      title: t("news.podcast.heading"),
      description: t("news.podcast.description"),
      images: [postImage],
      type: "article",
      publishedTime: "2024-11-01T00:00:00.000Z",
      authors: ["Foytech"],
      siteName: "Foytech Blog",
    },
    twitter: {
      card: "summary_large_image",
      title: t("news.podcast.heading"),
      description: t("news.podcast.description"),
      images: [postImage],
    },
    alternates: {
      canonical: `https://foytech.com/blog/o1-podcast`,
      languages: {
        en: "/blog/o1-podcast",
        sv: "/sv/blog/o1-podcast",
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

export default async function O1PodcastPost({
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
      <O1PodcastContent />
    </TranslationsProvider>
  )
}
