"use client"

import React, { useRef, useState } from "react"
import { useTranslation, Trans } from "react-i18next"
import { RotateCw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import HeadingAnimated from "./HeadingAnimated"
import SubHeadingAnimated from "./SubHeadingAnimated"

const ContactForm = () => {
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -400px 0px",
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)

    const fields = {
      fields: {
        Name: name,
        Email: email,
        Company: company,
      },
    }

    try {
      await postToAirtable(fields)
      setSubmitted(true)
      setError(false)
      e.target.reset()
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const postToAirtable = async (fields: any) => {
    const AIRTABLE_URL =
      "https://api.airtable.com/v0/app4DlyO5gT1PiI07/requests"
    const AIRTABLE_API_KEY = "key123"

    try {
      const response = await fetch(AIRTABLE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      })

      if (!response.ok) {
        throw new Error(`HTTP error. status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error posting to Airtable:", error)
      throw error
    }
  }

  return (
    <section ref={sectionRef} className="section" id="contact">
      <div className="pb-12 lg:pb-0 bg-primary-100 dark:bg-primary-980/80 transition-opacity duration-700">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-0 xl:gap-24">
          <div className="w-full lg:w-1/2 py-10 lg:py-20 lg:pr-20 xl:pr-0 space-y-3">
            <HeadingAnimated
              heading={t("contact-form.heading")}
              isInView={isInView}
              className="text-center md:text-left"
            />
            <SubHeadingAnimated
              subHeading={t("contact-form.text")}
              isInView={isInView}
              className="text-center md:text-left"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1.25,
              delay: 0.65,
              bounce: 0,
            }}
            className="relative w-full lg:w-1/2 h-full"
          >
            <div
              className={cn(
                "lg:absolute right-4 xl:right-0 lg:w-[33rem] lg:-translate-y-1/2 bg-[#fff] dark:bg-primary-970 border p-8 sm:p-20 lg:py-[4.5rem] lg:px-0 rounded-xl",
                submitted || error ? "lg:pt-20 lg:pb-10" : ""
              )}
            >
              <div className="lg:w-[24rem] lg:mx-auto">
                <h3 className="h3 mb-6 text-center">
                  {t("contact-form.form-heading")}{" "}
                  <Image
                    src="/images/rumpole-logo-black.svg"
                    alt="rumpole logo"
                    className="inline-block dark:hidden w-[9rem] ml-1 mb-1"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/images/rumpole-logo-white.svg"
                    alt="rumpole logo"
                    className="hidden dark:inline-block w-[9rem] ml-1 mb-1"
                    width={1000}
                    height={1000}
                  />
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("contact-form.name")}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contact-form.email")}
                    required
                  />
                  <Input
                    type="text"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t("contact-form.company")}
                    required
                  />
                  <Button
                    size="lg"
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <RotateCw className="h-4 w-4 animate-spin" />
                        {t("contact-form.submitting")}
                      </div>
                    ) : (
                      t("contact-form.submit")
                    )}
                  </Button>
                  {submitted && (
                    <p className="text-center leading-7">
                      <Trans i18nKey="contact-form.success" />
                    </p>
                  )}
                  {error && (
                    <p className="text-center text-red-600">
                      {t("contact-form.error")}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
