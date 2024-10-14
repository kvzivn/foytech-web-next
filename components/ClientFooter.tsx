"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"

const ClientFooter = () => {
  const { t } = useTranslation("home")

  return (
    <footer className="pt-8 pb-16 md:pt-32 md:pb-20">
      <div className="container relative">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="md:text-left">
            <p className="pt-8 sm:pt-0 font-medium">
              &copy; {new Date().getFullYear()} Foytech AB
            </p>
          </div>
          <div className="flex flex-col md:flex-row mb-8 md:mb-0 items-center gap-10">
            <a
              href="https://www.linkedin.com/company/foytech/about/"
              target="_blank"
              rel="noreferrer"
              aria-label="Find us on Github"
              data-tooltip-id="open-linkedin"
              data-tooltip-content="Find us on Linkedin"
              className="border-b-2 border-b-solid border-transparent transition-colors hover:border-primary"
            >
              LinkedIn
            </a>
            <FooterItem href="/gdpr" title={t("footer.Privacy")} />
            <FooterItem
              href="/terms-of-service"
              title={t("footer.terms-of-service")}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterItem = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`border-b-2 border-b-solid transition-colors hover:border-primary ${
        isActive ? "border-primary" : "border-transparent"
      }`}
    >
      <div>{title}</div>
    </Link>
  )
}

export default ClientFooter
