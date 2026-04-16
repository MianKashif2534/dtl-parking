/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CustomBadge({
  text = 'Welcome',
  className = '',
}) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (index < text.length && !isTypingComplete) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timer)
    } else if (index === text.length && !isTypingComplete) {
      setIsTypingComplete(true)
    }
  }, [index, text, isTypingComplete])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-fit mx-auto"
    >
      <motion.div 
        className="relative px-7 py-2 rounded-full bg-gradient-to-r from-[#014A7F] to-[#0268b0] shadow-lg overflow-hidden"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#014A7F] via-[#0268b0] to-[#014A7F]"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: '200% 200%' }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              'inset 0 0 0px rgba(255,255,255,0)',
              'inset 0 0 20px rgba(255,255,255,0.2)',
              'inset 0 0 0px rgba(255,255,255,0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="flex items-center gap-1 relative z-10">
          {/* Wave Animation on Each Letter */}
          {displayText.split('').map((char, i) => (
            <motion.span
              key={i}
              className="text-white text-sm md:text-base font-semibold inline-block"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              {char}
            </motion.span>
          ))}
          
          {/* Blinking Cursor - Hidden after typing complete */}
          {!isTypingComplete && (
            <motion.span
              className="w-0.5 h-5 bg-white rounded-full ml-0.5"
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}