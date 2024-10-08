"use client"

import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { Spotlight } from "./ui/spotlight"
import { motion } from "framer-motion"
import Spotlights from "./Spotlights"

const Hero = () => {
  const { t } = useTranslation()

  const headingText = t("home.heading")

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
        duration: 1.25,
        delay: 0.75 + 0.085 * i,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    }),
  }

  return (
    <section className="section relative xl:h-screen">
      <Spotlights />
      <div className="container relative grid gap-8 xl:grid-cols-2 xl:gap-0 py-8 xl:py-14">
        <div className="flex flex-col justify-center">
          <div className="space-y-5">
            <div className="space-y-5 sm:space-y-3">
              <div className="relative">
                <h1 className="h1">
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
                          animate="animate"
                          key={index}
                        >
                          {word}
                        </motion.span>
                      </span>
                    )
                  })}
                </h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    delay: 1.25,
                    duration: 1.25,
                  },
                }}
                className="text max-w-lg md:text-xl/relaxed"
              >
                {t("home.text")}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  delay: 1.35,
                  duration: 2.5,
                },
              }}
              className="flex justify-start"
            >
              <Button size="lg" asChild>
                <a href="#contact">{t("cta")}</a>
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 20 }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
              type: "spring",
              delay: 1.35,
              duration: 2.35,
              bounce: 0,
            },
          }}
          className="grid items-start xl:place-items-end"
        >
          <div className="outline outline-border -outline-offset-1 rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full xl:max-w-[32rem] rounded-lg"
              controls
              poster="/images/rumpole_landing_page.png"
            >
              <source src="/videos/foytech_demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
