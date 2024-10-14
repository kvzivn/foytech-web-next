"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import Spotlights from "@/components/Spotlights"
import HeadingAnimated from "@/components/HeadingAnimated"
import { motion, useInView } from "framer-motion"
import SubHeadingAnimated from "@/components/SubHeadingAnimated"

const BlogPostLinks = () => {
  const { t } = useTranslation()

  const headingRef = useRef(null)
  const isInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  })

  const blogPostLinks = [
    {
      id: 1,
      title: t("news.aramcoGroq.heading"),
      description: t("news.aramcoGroq.description"),
      imageUrl: "/images/aramco-groq-blog-post.webp",
      link: "/blog/aramco-groq",
      featured: true,
    },
    {
      id: 2,
      title: t("news.podcast.heading"),
      description: t("news.podcast.description"),
      imageUrl: "/images/o1-blog-post.webp",
      link: "/blog/o1-podcast",
      featured: false,
    },
    {
      id: 3,
      title: t("news.qura.heading"),
      description: t("news.qura.description"),
      imageUrl: "/images/foytech-qura.webp",
      link: "/blog/foytech-qura",
      featured: false,
    },
  ]

  const featuredPost = blogPostLinks.find((post) => post.featured)
  const regularPosts = blogPostLinks.filter((post) => !post.featured)

  return (
    <section className="pt-36 pb-8">
      <Spotlights noAnimation />
      <div
        ref={headingRef}
        className="container !max-w-3xl pt-10 pb-16 text-center"
      >
        <HeadingAnimated
          heading={t("news.heading")}
          isInView={isInView}
          className="mb-1"
        />

        <SubHeadingAnimated
          subHeading={t("news.subheading")}
          isInView={isInView}
          className="mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85 }}
        >
          {featuredPost && (
            <Link href={featuredPost.link}>
              <div className="mt-12 mb-12 sm:mt-16 sm:mb-16 text-left">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="rounded-xl mb-4 object-cover w-full"
                />
                <h2 className="text-xl sm:max-w-lg sm:text-3xl font-semibold mb-2">
                  {featuredPost.title}
                </h2>
                <p className="text mb-2">{featuredPost.description}</p>
              </div>
            </Link>
          )}

          <div className="grid md:grid-cols-2 gap-12 text-left">
            {regularPosts.map((post) => (
              <Link href={post.link} key={post.id}>
                <div key={post.id}>
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="rounded-xl mb-4 object-cover w-full border border-gray-200"
                  />
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPostLinks
