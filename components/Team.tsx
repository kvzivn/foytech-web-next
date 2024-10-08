"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const Team = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const headingText = "Advokaterna bakom Foytech"

  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  })

  const textRef = useRef(null)
  const isTextInView = useInView(textRef, {
    once: true,
    margin: "0px 0px -150px 0px",
  })

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
        duration: 1.85,
        delay: 0.25 + 0.085 * i,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    }),
  }

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
      <div className="container flex flex-col gap-32">
        <div ref={headingRef} className="flex justify-end">
          <h2 className="text-[3.5rem] leading-[1.15] font-medium max-w-md text-right">
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
                    animate={isHeadingInView && "animate"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView && { opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.75, delay: 0.75 }}
          className="flex gap-8 -mt-28"
        >
          {members.map((member, index) => (
            <Member
              key={index}
              index={index + 1}
              member={member}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>

        <div className="relative">
          <div ref={textRef} className="flex flex-col gap-4 max-w-prose mt-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView && { opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.35 }}
              className="text-muted-foreground md:text-[1.15rem] leading-[1.65]"
            >
              {t("team.text1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView && { opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.35, delay: 0.25 }}
              className="text-muted-foreground md:text-[1.15rem] leading-[1.65]"
            >
              {t("team.text2")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView && { opacity: 1, y: 0 }}
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
            className="absolute bottom-3 right-2"
          >
            <motion.rect
              initial={{ opacity: 0 }}
              animate={isTextInView && { opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.65 }}
              x="30"
              y="0"
              width="30"
              height="30"
              fill="#3886A3"
            />
            <motion.rect
              initial={{ opacity: 0 }}
              animate={isTextInView && { opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.85 }}
              x="0"
              y="30"
              width="30"
              height="30"
              fill="#3886A3"
            />
            <motion.rect
              initial={{ opacity: 0 }}
              animate={isTextInView && { opacity: 1 }}
              transition={{ duration: 0.75, delay: 1.05 }}
              x="30"
              y="60"
              width="30"
              height="30"
              fill="#3886A3"
            />
            <motion.rect
              initial={{ opacity: 0 }}
              animate={isTextInView && { opacity: 1 }}
              transition={{ duration: 0.75, delay: 1.35 }}
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
  scrollYProgress,
}: {
  index: number
  member: { name: string; image: string; link: string }
  scrollYProgress: MotionValue
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [(index - 1) * 50, 0])

  return (
    <motion.div
      className="group w-full p-2 rounded-t-xl rounded-b-md bg-primary-100 dark:bg-primary-950 hover:bg-primary-200 dark:hover:bg-primary-900 transition-colors duration-300"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ y }}
    >
      <Link href={member.link} target="_blank">
        <Image
          src={member.image}
          alt={member.name}
          width={440}
          height={702}
          className="rounded-t-lg rounded-b opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
        <p className="mt-3 mb-1 text-sm font-medium text-center text-accent dark:text-slate-200 transition-colors duration-300">
          {member.name}
        </p>
      </Link>
    </motion.div>
  )
}

export default Team
