'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HeroSection({
  backgroundImage,
  welcomeText,
  mainHeading,
  subHeading,
  ctaText,
  ctaLink,
  height = 'h-[700px] md:h-[900px]',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeInOut' },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 8px rgba(1, 74, 127, 0.6)',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <motion.div
      ref={ref}
      className={`relative w-full ${height} overflow-hidden`}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div
        className='absolute inset-0 z-0'
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src={backgroundImage}
          alt='Hero background'
          className='w-full h-full object-cover'
        />
      </motion.div>

      {/* Content Container */}
      <div className='relative z-10 h-full flex flex-col items-center mt-24 md:mt-[15%] text-white text-center px-4'>
        {/* Welcome Text with Lines */}
        <motion.div
          className='flex flex-col md:flex-row items-center justify-center mb-3 md:mb-4 space-x-3'
          variants={itemVariants}
        >
          <motion.div
            className='w-36 md:w-48 h-1 md:h-2 bg-blue rounded-2xl'
            initial={{ width: 0 }}
            animate={{
              width: '9rem',
              transition: { delay: 0.5, duration: 0.8 },
            }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.h2
            className='font-bold text-3xl md:text-4xl leading-[40px] text-center text-white'
            variants={itemVariants}
          >
            {welcomeText}
          </motion.h2>
          <motion.div
            className='w-36 md:w-48 h-1 md:h-2 bg-blue rounded-2xl'
            initial={{ width: 0 }}
            animate={{
              width: '9rem',
              transition: { delay: 0.5, duration: 0.8 },
            }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className='px-8 text-2xl md:text-5xl font-bold max-w-3xl mb-3 md:mb-4 leading-tight'
          variants={itemVariants}
        >
          {mainHeading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className='max-w-xl px-8 text-sm md:text-lg mb-6 md:mb-8 font-light'
          variants={itemVariants}
        >
          {subHeading}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.div
            variants={buttonVariants}
            initial='initial'
            whileHover='hover'
            whileTap='tap'
          >
            <Link
              href={ctaLink}
              className='inline-block text-white px-6 py-4 md:py-5 rounded-md shadow-[0_0_4px_#0B0428] bg-blue'
            >
              <span className='py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full'>
                {ctaText}
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
