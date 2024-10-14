"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import HeadingAnimated from "./HeadingAnimated"

const About = () => {
  const { t } = useTranslation()

  const headingText =
    "Vi utvecklar framtidens juridiska hjälpmedel för advokatbyråer i framkant."
  const headingContainerRef = useRef(null)
  const isHeadingInView = useInView(headingContainerRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  })

  return (
    <section className="section relative">
      <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div ref={headingContainerRef} className="max-w-lg">
          <HeadingAnimated
            heading={t("foytech.heading")}
            isInView={isHeadingInView}
            className="md:text-[2.5rem] md:leading-[3.15rem] "
          />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.65 + (index - 1) * 0.25 }}
              className="text md:text-[1.2rem]/relaxed"
            >
              {t(`foytech.text${index}`)}
            </motion.p>
          ))}
        </div>
        <svg
          width="96"
          height="48"
          viewBox="0 0 96 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:absolute bottom-2 left-0"
        >
          <motion.rect
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            x="0"
            y="0"
            width="24"
            height="24"
            fill="#3886A3"
          />
          <motion.rect
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.45 }}
            x="24"
            y="24"
            width="24"
            height="24"
            fill="#3886A3"
          />
          <motion.rect
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.65 }}
            x="48"
            y="0"
            width="24"
            height="24"
            fill="#3886A3"
          />
          <motion.rect
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.85 }}
            x="72"
            y="24"
            width="24"
            height="24"
            fill="#3886A3"
          />
        </svg>
      </div>
    </section>
  )
}

export default About
