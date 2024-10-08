"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import HeadingAnimated from "./HeadingAnimated"

const About = () => {
  const { t } = useTranslation()

  const headingText =
    "Vi utvecklar framtidens juridiska hjälpmedel för advokatbyråer i framkant."

  const textRef = useRef(null)
  const isInView = useInView(textRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  })

  const slideUp = {
    initial: {
      y: "100%",
      opacity: 0,
      filter: "blur(4px)",
    },
    animate: (i: number) => ({
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        duration: 1.35,
        delay: 0.085 * i,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    }),
  }

  return (
    <section className="section relative">
      <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div ref={textRef} className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-[2.5rem] leading-[3.15rem] font-medium">
            {headingText.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative overflow-hidden inline-flex mr-[1rem]"
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    initial="initial"
                    animate={isInView && "animate"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              )
            })}
            {/* {t("foytech.heading")} */}
          </h2>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.65 + (index - 1) * 0.25 }}
              className="text-[1.2rem]/relaxed text-muted-foreground"
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
          className="absolute bottom-2 left-0"
        >
          <motion.rect
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            x="0"
            y="0"
            width="24"
            height="24"
            fill="#3886A3"
          />
          <motion.rect
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.45 }}
            x="24"
            y="24"
            width="24"
            height="24"
            fill="#3886A3"
          />
          <motion.rect
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.65 }}
            x="48"
            y="0"
            width="24"
            height="24"
            fill="#3886A3"
          />
          <motion.rect
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
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
