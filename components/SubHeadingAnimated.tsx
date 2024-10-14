"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const SubHeadingAnimated = ({
  subHeading,
  isInView = true,
  className,
}: {
  subHeading: string
  isInView?: boolean
  className?: string
}) => {
  return (
    <motion.p
      className={cn("text-xl text-muted-foreground mb-8", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.5 }}
    >
      {subHeading}
    </motion.p>
  )
}

export default SubHeadingAnimated
