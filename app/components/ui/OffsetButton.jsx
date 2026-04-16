'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function OffsetButton({
  href,
  buttonText = 'Contact Us',
  width = 'w-28',
  height = 'h-9', // Kam kiya (36px)
  classname = "",
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 800)
  }

  const buttonContent = (
    <div className='flex items-center justify-center'>
      <div className='relative group'>
        
        {/* Glow Shadow Layer */}
        <motion.div
          className={`absolute ${width} ${height} rounded-full`}
          animate={{
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          style={{
            boxShadow: '0 0 15px rgba(1, 74, 127, 0.8), 0 0 30px rgba(1, 74, 127, 0.4)',
            filter: 'blur(4px)',
          }}
        />

        {/* Background Shadow Layer (Offset Effect) */}
        <motion.div
          className={`absolute ${width} ${height} rounded-full bg-[#014A7F]`}
          animate={{
            x: isHovered ? -3 : -2,
            y: isHovered ? -3 : -2,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20,
          }}
        />

        {/* Main Button */}
        <motion.button
          className={`relative ${width} ${height} ${classname} bg-[#014A7F] rounded-full text-white text-xs md:text-sm font-medium cursor-pointer overflow-hidden shadow-lg`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          animate={{
            x: isClicked ? 0 : (isHovered ? -1 : 0),
            y: isClicked ? 0 : (isHovered ? -1 : 0),
            scale: isClicked ? 0.97 : (isHovered ? 1.02 : 1),
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 15,
          }}
          style={{
            boxShadow: isHovered 
              ? '0 0 20px rgba(1, 74, 127, 0.8), 0 4px 8px rgba(0, 0, 0, 0.3)' 
              : '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Mouse-following Glow Effect */}
          {isHovered && (
            <motion.div
              className="absolute pointer-events-none"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                x: '-50%',
                y: '-50%',
              }}
            >
              <div className="w-12 h-12 bg-[#014A7F]/30 rounded-full blur-md" />
            </motion.div>
          )}

          {/* Shimmer/Sweep Effect */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
            animate={{
              x: isHovered ? ['-100%', '100%'] : '-100%',
            }}
            transition={{
              duration: 0.8,
              repeat: isHovered ? Infinity : 0,
              ease: 'linear',
            }}
          />

          {/* Button Text - Properly Centered */}
          <span className='relative z-10 flex items-center justify-center gap-1.5 h-full w-full text-center font-sans tracking-wide'>
            {buttonText}
            <motion.span
              animate={{
                x: isHovered ? [0, 3, 0] : 0,
              }}
              transition={{
                duration: 0.4,
                repeat: isHovered ? Infinity : 0,
              }}
              className="inline-block text-xs"
            >
              →
            </motion.span>
          </span>

          {/* Simple Corner Accents */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/40 rounded-tl" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/40 rounded-tr" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/40 rounded-bl" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/40 rounded-br" />

          {/* Simple Particle Effects on Hover */}
          {isHovered && (
            <motion.div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full"
                  initial={{
                    x: '50%',
                    y: '50%',
                    scale: 0,
                  }}
                  animate={{
                    x: `${50 + Math.sin(i * 120) * 25}%`,
                    y: `${50 + Math.cos(i * 120) * 25}%`,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* Success Checkmark on Click */}
          {isClicked && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-[#014A7F] rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-white text-sm"
              >
                ✓
              </motion.div>
            </motion.div>
          )}
        </motion.button>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className='inline-block'>
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}