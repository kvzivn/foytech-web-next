"use client"

import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import Spotlights from "./Spotlights"

const Hero = () => {
  const { t } = useTranslation()
  const headingText = t("home.heading")
  const words = headingText.split(" ")

  const slideUp = {
    initial: {
      y: "100%",
      opacity: 0,
      filter: "blur(4px)",
    },
    animate: (i: number) => ({
      y: "0%",
      opacity: 1,
      filter: "blur(0)",
      transition: {
        duration: 1.35,
        delay: 0.75 + 0.085 * i,
        ease: [0.61, 0.01, 0.09, 1.03],
      },
    }),
  }

  return (
    <section className="section relative xl:h-screen">
      <Spotlights />
      <div className="container relative grid gap-8 xl:grid-cols-2 xl:gap-0 pt-28 xl:py-14">
        <div className="flex flex-col justify-center">
          <div className="space-y-5">
            <div className="space-y-5 sm:space-y-3">
              <div className="relative">
                <h1 className="h1">
                  {words.map((word, index) => {
                    return (
                      <span
                        key={index}
                        className="relative inline-flex overflow-hidden"
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
                        {index < words.length - 1 && <>&nbsp;</>}
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
          initial={{
            opacity: 0,
            filter: "blur(4px)",
            y: 20,
          }}
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
          className="grid items-start justify-end"
        >
          <div className="border-8 border-primary/80 rounded-md">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full xl:max-w-[32rem] "
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
