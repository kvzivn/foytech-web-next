import { ArrowRightIcon, MailIcon, MessageSquareIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Spotlights from "@/components/Spotlights"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import HeadingAnimated from "@/components/HeadingAnimated"
import SubHeadingAnimated from "@/components/SubHeadingAnimated"
import initTranslations from "@/app/i18n"
import TranslationsProvider from "@/components/TranslationsProvider"
const i18nNamespaces = ["about", "test"]

async function Contact({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  const contactPageRef = useRef(null)
  const isInView = useInView(contactPageRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  })

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <section className="pt-48 pb-12">
        <Spotlights noAnimation />

        <div
          ref={contactPageRef}
          className="container flex flex-col items-center flex-grow mx-auto"
        >
          <HeadingAnimated
            heading={t("contact.heading")}
            isInView={isInView}
            className="mb-1"
          />

          <SubHeadingAnimated
            subHeading={t("contact.text")}
            isInView={isInView}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.25, delay: 0.75 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MailIcon className="h-5 w-5" />
                    <span>Allmäna frågor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vi besvarar gärna frågor om våra tjänster, priser och hur
                    vår AI-plattform kan stärka din advokatbyrå.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" asChild>
                    <a
                      href="mailto:info@foytech.se"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maila oss
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.25, delay: 0.95 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquareIcon className="h-5 w-5" />
                    <span>Kontakta support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Har du tekniska frågor eller behöver hjälp med plattformen?
                    Kontakta vårt support team här.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" asChild>
                    <a
                      href="mailto:support@foytech.se"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maila support
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </TranslationsProvider>
  )
}

export default Contact
