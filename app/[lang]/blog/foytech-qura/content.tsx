"use client"

import { useTranslation } from "react-i18next"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FoytechQuraContent() {
  const { t } = useTranslation()
  const newsItems = t("news.qura.items", { returnObjects: true }) as {
    body: string
    quote: string
    citee: string
  }[]

  return (
    <article className="article">
      <Link
        href="/blog"
        className="inline-flex items-center text-primary font-semibold hover:underline mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        {t("back")}
      </Link>

      <h1 className="text-4xl font-semibold mb-4">{t("news.qura.heading")}</h1>

      <Image
        src="/images/foytech-qura.webp"
        alt="Foytech and Qura"
        className="w-full rounded-xl mb-4 border border-primary/20"
        width={1280}
        height={640}
      />

      <div className="space-y-0 sm:space-y-6 body-text">
        {newsItems.map((item, index) => (
          <div className="space-y-3 py-4" key={index}>
            <p className="text">{item.body}</p>
            <blockquote className="quote">
              <p className="text pl-4">{item.quote}</p>
              <footer className="mt-4 pl-4">{item.citee}</footer>
            </blockquote>
          </div>
        ))}

        <p className="text">{t("news.qura.conclusion")}</p>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">{t("news.moreNews")}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/blog/aramco-groq">
            <Image
              src="/images/aramco-groq-blog-post.webp"
              alt={t("news.aramcoGroq.heading")}
              width={400}
              height={200}
              className="rounded-xl mb-4 object-cover w-full"
            />
            <h4 className="text-xl font-semibold mb-2">
              {t("news.aramcoGroq.heading")}
            </h4>
            <p className="text-muted-foreground">
              {t("news.aramcoGroq.description")}
            </p>
          </Link>
          <Link href="/blog/o1-podcast">
            <Image
              src="/images/o1-blog-post.webp"
              alt="OpenAI o1 Podcast"
              width={400}
              height={200}
              className="rounded-xl mb-4 object-cover w-full"
            />
            <h4 className="text-xl font-semibold mb-2">
              {t("news.podcast.heading")}
            </h4>
            <p className="text-muted-foreground">
              {t("news.podcast.description")}
            </p>
          </Link>
        </div>
      </div>
    </article>
  )
}
