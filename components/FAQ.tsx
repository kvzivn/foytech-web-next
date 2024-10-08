"use client"

import { useTranslation } from "react-i18next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useRef } from "react"
import { motion, MotionConfig, useInView } from "framer-motion"
import HeadingAnimated from "./HeadingAnimated"

const FAQ = () => {
  const { t } = useTranslation()

  const faqRef = useRef(null)
  const isInView = useInView(faqRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  })

  return (
    <section className="section bg-primary-100 dark:bg-transparent">
      <div className="container">
        <div ref={faqRef} className="max-w-2xl mx-auto space-y-12">
          <HeadingAnimated
            heading={t("faq.heading")}
            isInView={isInView}
            className="text-center"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{
              type: "spring",
              duration: 1.25,
              delay: 0.65,
              bounce: 0,
            }}
          >
            <Accordion type="single" collapsible className="w-full space-y-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>{t("faq.q1")}</AccordionTrigger>
                <AccordionContent>
                  {t("faq.a11")}
                  <br />
                  <br />
                  {t("faq.a12")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>{t("faq.q2")}</AccordionTrigger>
                <AccordionContent>{t("faq.a2")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>{t("faq.q3")}</AccordionTrigger>
                <AccordionContent>
                  {t("faq.a31")}
                  <br />
                  <br />
                  {t("faq.a32")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>{t("faq.q4")}</AccordionTrigger>
                <AccordionContent>
                  {t("faq.a41")}
                  <br />
                  <br />
                  {t("faq.a42")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
