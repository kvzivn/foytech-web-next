"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRightIcon, MailIcon, MessageSquareIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useTranslation } from "react-i18next"

const ContactCards = () => {
  const { t } = useTranslation("home")
  const contactCardsRef = useRef(null)
  const isInView = useInView(contactCardsRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  })

  return (
    <div
      ref={contactCardsRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", duration: 1.25, delay: 0.75 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MailIcon className="h-5 w-5" />
              <span>{t("contact.generalQuestions")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t("contact.generalQuestionsDescription")}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="mailto:info@foytech.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact.emailUs")}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", duration: 1.25, delay: 0.95 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquareIcon className="h-5 w-5" />
              <span>{t("contact.contactSupport")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t("contact.supportDescription")}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="mailto:support@foytech.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact.emailSupport")}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

export default ContactCards
