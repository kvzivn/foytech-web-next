"use client"

import { useTranslation } from "react-i18next"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function O1PodcastContent() {
  const { t } = useTranslation()

  return (
    <article className="article">
      <Link
        href="/blog"
        className="inline-flex items-center text-primary font-semibold hover:underline mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        {t("back")}
      </Link>

      <h1 className="text-4xl font-semibold mb-4">
        {t("news.podcast.heading")}
      </h1>

      <Image
        src="/images/o1-blog-post.webp"
        alt="OpenAI o1 Podcast"
        className="w-full rounded-xl mb-4"
        width={1600}
        height={800}
      />

      <div className="space-y-6 body-text">
        <p className="text">{t("news.podcast.description")}</p>

        <p className="text">{t("news.podcast.listen")}</p>

        <div>
          <audio controls>
            <source src="/audio/OpenAI_o1.wav" type="audio/wav" />
            <track kind="captions" srcLang="en" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">{t("news.moreNews")}</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/blog/aramco-groq">
            <Image
              src="/images/aramco-groq-blog-post.webp"
              alt="Aramco Digital and Groq Partnership"
              width={400}
              height={200}
              className="rounded-xl mb-4 object-cover w-full"
            />
            <h4 className="text-xl font-semibold mb-2">
              {t("news.aramcoGroq.heading")}
            </h4>
            <p className="text-muted-foreground mb-2">
              {t("news.aramcoGroq.description")}
            </p>
          </Link>

          <Link href="/blog/foytech-qura">
            <Image
              src="/images/foytech-qura.webp"
              alt="Foytech and Qura"
              width={400}
              height={200}
              className="rounded-xl mb-4 object-cover w-full"
            />
            <h4 className="text-xl font-semibold mb-2">
              {t("news.qura.heading")}
            </h4>
            <p className="text-muted-foreground mb-2">
              {t("news.qura.description")}
            </p>
          </Link>
        </div>
      </div>
    </article>
  )
}
