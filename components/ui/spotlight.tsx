import { cn } from "@/lib/utils"
import React from "react"

type SpotlightProps = {
  className?: string
  fill?: string
}

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute w-full h-[180%] opacity-0 z-[-1]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 240"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="60"
          cy="80"
          rx="50"
          ry="110"
          fill={fill || "white"}
          fillOpacity="0.26"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="-20"
          y="-20"
          width="200"
          height="280"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="17"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  )
}
