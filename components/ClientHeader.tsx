"use client"

import Image from "next/image"
import foytechLogoWhite from "@/public/foytech-logo-white.svg"
import foytechLogoBlack from "@/public/foytech-logo-black.svg"
import LanguageSelector from "./LanguageSelector"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { MailIcon, ScrollText } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { TFunction } from "i18next"
import { useTranslation } from "react-i18next"

const ClientHeader = () => {
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest > 40)
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  return (
    <motion.div
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-50 pointer-events-none"
    >
      <div className="container relative">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1.25,
            },
          }}
          className="flex justify-between items-center w-full py-12"
        >
          <div className="flex items-center">
            <Link
              href="/"
              className="max-w-[8.5rem] sm:max-w-full pointer-events-auto"
            >
              <Image
                src={foytechLogoWhite}
                className="h-8 lg:h-7 w-auto object-contain hidden dark:block"
                alt="foytech logo"
              />
              <Image
                src={foytechLogoBlack}
                className="h-8 lg:h-7 w-auto object-contain dark:hidden"
                alt="foytech logo"
              />
            </Link>
          </div>
          <nav className="flex items-center space-x-4 md:space-x-12">
            <Link
              href="/blog"
              className={`link hidden md:block ${
                pathname.startsWith("/blog") ? "!border-primary" : ""
              }`}
            >
              {t("navBarItems.news")}
            </Link>
            <Link
              href="/contact"
              className={`link hidden md:block ${
                pathname === "/contact" ? "!border-primary" : ""
              }`}
            >
              {t("navBarItems.contact")}
            </Link>
            <LanguageSelector className="pointer-events-auto" />
            <div className="md:hidden">
              <MobileMenu t={t} />
            </div>
          </nav>
        </motion.header>
      </div>
    </motion.div>
  )
}

const MobileMenu = ({
  t,
}: {
  t: TFunction<["translation", ...string[]], undefined>
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="pointer-events-auto">
        <motion.button
          className="p-2 text-primary hover:text-gray-900 focus-visible:outline-primary"
          aria-label="Toggle mobile menu"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 6h16M4 12h16M4 18h16" },
                open: { d: "M6 18L18 6M6 6l12 12" },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </motion.button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 mr-8 mt-2 p-2 space-y-2 bg-white">
        <DropdownMenuItem asChild>
          <Link
            href="/news"
            className="flex items-center text-base hover:bg-transparent"
          >
            <ScrollText className="w-4 h-4 mr-2" />
            {t("navBarItems.news")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/contact"
            className="flex items-center text-base hover:bg-transparent"
          >
            <MailIcon className="w-4 h-4 mr-2" />
            {t("navBarItems.contact")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ClientHeader
