"use client"

import { useEffect, useState, useRef } from "react"
import { animate } from "framer-motion"

export default function CountUp({ from, to, duration = 2, delay = 0, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(from)
  const nodeRef = useRef(null)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const node = nodeRef.current

      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setCount(Math.round(value))
        },
        ease: "easeOut",
      })

      return () => controls.stop()
    }, delay * 1000)

    return () => clearTimeout(delayTimer)
  }, [from, to, duration, delay])

  return (
    <span ref={nodeRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
