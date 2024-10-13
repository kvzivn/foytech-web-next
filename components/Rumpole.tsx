"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Rumpole = () => {
  const { t } = useTranslation()
  const imageRef = useRef(null)
  const isInView = useInView(imageRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  })

  return (
    <section className="section ">
      <div className="container flex flex-col items-center gap-6 lg:flex-row md:gap-16 xl:gap-24">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 2.25,
            delay: 0.25,
          }}
          className="w-full md:p-3"
        >
          <Image
            src="/images/foytech-rumpole.png"
            alt="Rumpole"
            width={500}
            height={370}
            className="w-full rounded-lg opacity-85"
          />
        </motion.div>
        <div className="w-full md:w-1/2 xl:w-full space-y-6">
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 1.25,
                delay: 0.35,
              }}
              className="h2"
            >
              {t("rumpole.heading")}{" "}
              <Image
                src="/images/rumpole-logo-black.svg"
                alt="rumpole logo"
                className="inline-block w-[9rem] md:w-[13rem] ml-1.5 md:ml-2 mb-1 dark:hidden"
                width={144}
                height={40}
              />
              <Image
                src="/images/rumpole-logo-white.svg"
                alt="rumpole logo"
                className="hidden w-[9rem] md:w-[13rem] ml-1.5 md:ml-2 mb-1 dark:inline-block"
                width={144}
                height={40}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 1.25,
                delay: 0.45,
              }}
              className="text"
            >
              {t("rumpole.text1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 1.25,
                delay: 0.55,
              }}
              className="text"
            >
              {t("rumpole.text2")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1.25,
              delay: 0.65,
            }}
            className="mt-4"
          >
            <Button size="lg" asChild>
              <a href="#contact">{t("cta")}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Rumpole
