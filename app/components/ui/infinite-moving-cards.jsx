/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from './../../lib/utils'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export const InfiniteMovingCards = ({
  logos,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null)
  const scrollerRef = React.useRef(null)
  const didCloneRef = useRef(false)

  const [start, setStart] = useState(false)

  const applyDirectionAndSpeed = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    if (direction === 'left') {
      el.style.setProperty('--animation-direction', 'forwards')
    } else {
      el.style.setProperty('--animation-direction', 'reverse')
    }

    if (speed === 'fast') {
      el.style.setProperty('--animation-duration', '20s')
    } else if (speed === 'normal') {
      el.style.setProperty('--animation-duration', '40s')
    } else {
      el.style.setProperty('--animation-duration', '80s')
    }
  }, [direction, speed])

  const addAnimation = useCallback(() => {
    const container = containerRef.current
    const scroller = scrollerRef.current
    if (!container || !scroller) return

    if (!didCloneRef.current) {
      const scrollerContent = Array.from(scroller.children)
      scrollerContent.forEach((item) => {
        scroller.appendChild(item.cloneNode(true))
      })
      didCloneRef.current = true
    }

    applyDirectionAndSpeed()
    setStart(true)
  }, [applyDirectionAndSpeed])

  useEffect(() => {
    addAnimation()
  }, [addAnimation])
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-6 md:gap-12 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-24 md:w-56`}
          >
            {/* <span className='text-white text-xl md:text-2xl lg:text-4xl font-medium mr-1'>
              {logo.name}
            </span> */}
            {logo.image && (
              <img
                src={logo.image}
                alt={logo.name}
                className='w-full h-auto object-contain'
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}
