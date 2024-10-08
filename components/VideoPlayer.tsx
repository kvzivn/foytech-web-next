"use client"

import Image from "next/image"
import { useState } from "react"

export default function VideoPlayer({
  videoId,
  videoSrc,
  posterSrc,
}: {
  videoId: string
  videoSrc: string
  posterSrc: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    const video = document.getElementById(videoId)

    if (video instanceof HTMLVideoElement) {
      video.play()
      video.controls = true
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative cursor-pointer" onClick={handlePlay}>
      <video
        id={videoId}
        playsInline
        className="w-full rounded-md aspect-video"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <Image
          src="/images/play-btn.svg"
          alt="Play video"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20"
          width={56}
          height={56}
        />
      )}
    </div>
  )
}
