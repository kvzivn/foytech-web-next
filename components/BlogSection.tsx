"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { ArrowRightIcon } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type BlogPost = {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  link: string
  date: string
}

const BlogSection = () => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language
  const blogSectionRef = useRef(null)
  const buttonRef = useRef(null)
  const isInView = useInView(blogSectionRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  })

  const isButtonInView = useInView(buttonRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  })

  const blogPostLinks = [
    {
      id: 1,
      title: t("news.aramcoGroq.heading"),
      description: t("news.aramcoGroq.description"),
      category: t("news.aramcoGroq.category"),
      imageUrl: "/images/aramco-groq-blog-post.webp",
      link:
        currentLocale === "sv" ? "/sv/blog/aramco-groq" : "/blog/aramco-groq",
      date: "Sep 21, 2024",
      featured: true,
    },
    {
      id: 2,
      title: t("news.podcast.heading"),
      description: t("news.podcast.description"),
      category: t("news.podcast.category"),
      imageUrl: "/images/o1-blog-post.webp",
      link: currentLocale === "sv" ? "/sv/blog/o1-podcast" : "/blog/o1-podcast",
      date: "Sep 17, 2024",
      featured: false,
    },
    {
      id: 3,
      title: t("news.qura.heading"),
      description: t("news.qura.description"),
      category: t("news.qura.category"),
      imageUrl: "/images/foytech-qura.webp",
      link:
        currentLocale === "sv" ? "/sv/blog/foytech-qura" : "/blog/foytech-qura",
      date: "Sep 1, 2024",
      featured: false,
    },
  ]

  return (
    <section className="section">
      <div ref={blogSectionRef} className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1.25,
            bounce: 0,
          }}
          className="h2"
        >
          {t("news.heading")}
        </motion.h2>
        <div className="space-y-8 md:space-y-16 divide-y divide-primary-200/80 dark:divide-primary-900/60">
          {blogPostLinks.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isButtonInView && { opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1.25,
            delay: 0.35,
            bounce: 0,
          }}
          className="flex justify-center mt-16 md:mt-32"
        >
          <Button size="lg" asChild className="text-lg">
            <Link href="/blog" className="inline-flex items-center text-black">
              {t("news.moreNews")}
              <ArrowRightIcon className="w-6 h-6 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

const BlogPost = ({ post }: { post: BlogPost }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px",
  })

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row gap-8 md:gap-20 pt-8 md:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1.25,
          delay: 0.15,
          bounce: 0,
        }}
        className="md:w-[56rem]"
      >
        <Link href={post.link}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1280}
            height={640}
            className="rounded-lg object-cover w-full h-full border"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1.25,
          delay: 0.35,
          bounce: 0,
        }}
        className="flex flex-col w-full"
      >
        <p className="text-lg text-secondary-foreground mb-2">
          {post.category}
        </p>
        <Link href={post.link}>
          <h3 className="text-2xl md:text-[2.35rem] md:leading-[1.25] mb-2">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-end flex-grow">
          <p className="text-sm text-gray-400">{post.date}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default BlogSection
