import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeadingAnimatedProps {
  heading: string
  isInView: boolean
  className?: string
}

const HeadingAnimated: React.FC<HeadingAnimatedProps> = ({
  heading,
  isInView,
  className,
}) => {
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

  return (
    <h2 className={cn("h2", className)}>
      {heading.split(" ").map((word, index) => (
        <span
          key={index}
          className="relative overflow-hidden inline-flex mr-[0.65rem]"
        >
          <motion.span
            variants={slideUp}
            custom={index}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  )
}

export default HeadingAnimated
