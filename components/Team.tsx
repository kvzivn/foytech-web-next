"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import HeadingAnimated from "./HeadingAnimated"

const Team = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -400px 0px",
  })

  const members = [
    {
      name: "Richard Sahlberg",
      image: "/images/team-1.png",
      link: "https://www.foyen.se/medarbetare/richard-sahlberg-168101-2/",
    },
    {
      name: "Andreas Lindström",
      image: "/images/team-3.png",
      link: "https://www.foyen.se/medarbetare/andreas-lindstrom-168180/",
    },
    {
      name: "Madeleine Jönsson",
      image: "/images/team-2.png",
      link: "https://www.foyen.se/medarbetare/madeleine-jonsson-168128/",
    },
    {
      name: "Henrik Ståhlberg",
      image: "/images/team-4.png",
      link: "https://www.foyen.se/medarbetare/henrik-stahlberg-167866/",
    },
    {
      name: "Jonas Conradsson",
      image: "/images/team-5.png",
      link: "https://www.foyen.se/medarbetare/jonas-conradsson-168045/",
    },
  ]

  return (
    <section ref={sectionRef} className="section">
      <div className="container flex flex-col md:gap-32">
        <HeadingAnimated
          heading={t("team.heading")}
          isInView={isInView}
          className="max-w-[16rem] md:max-w-sm md:ml-auto md:text-right"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:flex gap-8 md:-mt-28">
          {members.map((member, index) => (
            <Member
              key={index}
              index={index + 1}
              member={member}
              isInView={isInView}
            />
          ))}
        </div>

        <div className="relative pt-32 md:pt-0">
          <div className="flex flex-col gap-4 max-w-prose mt-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.35 }}
              className="text-muted-foreground md:text-[1.15rem] leading-[1.65]"
            >
              {t("team.text1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.35, delay: 0.25 }}
              className="text-muted-foreground md:text-[1.15rem] leading-[1.65]"
            >
              {t("team.text2")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.35, delay: 0.5 }}
              className="text-muted-foreground md:text-[1.15rem] leading-[1.65]"
            >
              {t("team.text3")}
            </motion.p>
          </div>
          <svg
            width="60"
            height="120"
            viewBox="0 0 60 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block absolute bottom-3 right-2"
          >
            <motion.rect
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.65,
              }}
              x="30"
              y="0"
              width="30"
              height="30"
              fill="#3886A3"
            />
            <motion.rect
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.85,
              }}
              x="0"
              y="30"
              width="30"
              height="30"
              fill="#3886A3"
            />
            <motion.rect
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: 1.05,
              }}
              x="30"
              y="60"
              width="30"
              height="30"
              fill="#3886A3"
            />
            <motion.rect
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: 1.35,
              }}
              x="0"
              y="90"
              width="30"
              height="30"
              fill="#3886A3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

const Member = ({
  index,
  member,
  isInView,
}: {
  index: number
  member: { name: string; image: string; link: string }
  isInView: boolean
}) => {
  const variants = {
    hidden: { opacity: 0, y: index * 20 + 40 },
    visible: {
      opacity: 1,
      y: index * 20,
      transition: {
        type: "spring",
        duration: 1.35,
        delay: index * 0.155,
        bounce: 0,
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        type: "spring",
        duration: 0.35,
      },
    },
  }

  return (
    <motion.div
      className="group w-full p-2 rounded-t-xl rounded-b-md bg-primary-100 dark:bg-primary-950 hover:bg-primary-200 dark:hover:bg-primary-900 transition-colors duration-300"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
    >
      <Link href={member.link} target="_blank">
        <Image
          src={member.image}
          alt={member.name}
          width={440}
          height={702}
          className="w-full max-h-[18rem] md:max-h-none object-cover object-top rounded-t-lg rounded-b opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
        <p className="mt-3 mb-1 text-base md:text-sm font-medium text-center text-accent dark:text-slate-200 transition-colors duration-300">
          {member.name}
        </p>
      </Link>
    </motion.div>
  )
}

export default Team
