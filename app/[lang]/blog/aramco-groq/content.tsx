"use client"

import { useTranslation } from "react-i18next"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import VideoPlayer from "@/components/VideoPlayer"
import Image from "next/image"

export default function AramcoGroqContent() {
  const { t } = useTranslation()
  const paragraphs = t("news.aramcoGroq.paragraphs", {
    returnObjects: true,
  }) as string[]

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
        {t("news.aramcoGroq.heading")}
      </h1>

      <VideoPlayer
        videoId="aramco-groq-video"
        videoSrc="/videos/aramco-groq-videocast.mp4"
        posterSrc="/images/aramco-groq-video-thumbnail.webp"
      />

      <p className="mt-2 mb-8 text-sm text-black italic">
        {t("news.aramcoGroq.videoCaption")}
      </p>

      <div className="space-y-6 body-text">
        {paragraphs.map((paragraph: string, index: number) => (
          <p key={index} className="text">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">{t("news.moreNews")}</h3>
        <div className="grid md:grid-cols-2 gap-8">
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
            <p className="text-muted-foreground mb-2">
              {t("news.podcast.description")}
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
