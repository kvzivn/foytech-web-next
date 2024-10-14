"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeadingAnimatedProps {
  heading: string
  isInView?: boolean
  className?: string
}

const HeadingAnimated: React.FC<HeadingAnimatedProps> = ({
  heading,
  isInView = true,
  className,
}) => {
  const slideUp = {
    hidden: {
      y: "100%",
      opacity: 0,
      filter: "blur(4px)",
    },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      filter: "blur(0)",
      transition: {
        type: "spring",
        duration: 0.95,
        delay: 0.15 + 0.065 * i,
        ease: [0.61, 0.01, 0.09, 1.03],
        bounce: 0,
      },
    }),
  }

  const words = heading.split(" ")

  return (
    <h2 className={cn("h2", className)}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            variants={slideUp}
            custom={index}
            initial="hidden"
            animate={isInView && "visible"}
            className="relative overflow-hidden inline-flex"
          >
            {word}
          </motion.span>
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </h2>
  )
}

export default HeadingAnimated
