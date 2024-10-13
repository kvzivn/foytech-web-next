"use client"

import Lenis from "lenis"
import { useEffect } from "react"

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <></>
}

export default LenisScroll
