/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimationControls } from "framer-motion"
import { useRouter } from "next/navigation"

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimationControls()
  const router = useRouter()

  const handleTeamMemberClick = () => {
    router.push(`/staff`)
  }

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Team members data
  const teamMembers = [
    { id: "hr-dept", title: "HR Dept", image: "/team/user9.png" },
    { id: "hr", title: "HR", image: "/team/user8.png" },
    { id: "accounting", title: "Accounting Manager", image: "/team/user7.png" },
    { id: "ceo-1", title: "CEO/Outbound Team", image: "/team/user1.png" },
    { id: "ceo-2", title: "CEO/Outbound Team", image: "/team/user4.png" },
    { id: "outbound", title: "Outbound Team", image: "/team/user3.png" },
    { id: "inbound", title: "Inbound Team", image: "/team/user5.png" },
    { id: "maintenance", title: "Maintenance / Safety", image: "/team/user6.png" },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  }

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: custom * 0.1,
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    }),
  }

  const centerHexagonVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  }

  // Hexagon component for team members
  const TeamHexagon = ({ title, image, index = 0 }) => (
    <motion.div
      className="relative w-[180px] h-[160px] cursor-pointer"
      variants={hexagonVariants}
      custom={index}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      onClick={() => handleTeamMemberClick()}
    >
      <div className="hexagon-wrapper w-full h-[160px] relative">
        {" "}
        {/* Fixed hexagon height */}
        <div className="hexagon-shape relative w-full h-full overflow-hidden">
          {/* Hexagon SVG with proper clipping */}
          <svg viewBox="0 0 180 160" className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Clip path for hexagon shape */}
              <clipPath id={`hexClip-${index}`}>
                <path d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z" />
              </clipPath>

              {/* Border gradient */}
              <linearGradient id={`borderGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#014A7F" />
                <stop offset="50%" stopColor="#0066CC" />
                <stop offset="100%" stopColor="#014A7F" />
              </linearGradient>
            </defs>

            {/* Hexagon border */}
            <path
              d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
              fill="none"
              stroke={`url(#borderGradient-${index})`}
              strokeWidth="3"
              className="drop-shadow-lg"
            />

            {/* Image inside hexagon */}
            {/* <image
              href={image || "/placeholder.svg?height=160&width=180"}
              x="0"
              y="0"
              width="180"
              height="160"
              clipPath={`url(#hexClip-${index})`}
              className="object-cover"
              preserveAspectRatio="xMidYMid slice"
            /> */}

            {/* Overlay for better contrast */}
            <path
              d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
              fill="rgba(1, 74, 127, 0.15)"
              clipPath={`url(#hexClip-${index})`}
            />
          </svg>
        </div>
      </div>

      {/* Fixed Badge - Positioned outside hexagon to avoid clipping */}
      <motion.div
        className="absolute bottom-0 left-7 z-30"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
      >
        <div className="w-[120px] bg-white/95 backdrop-blur-sm text-royalblue px-2 py-1 rounded-full shadow-lg border border-royalblue/20">
          <span className="text-xs font-semibold text-center block leading-tight truncate">{title}</span>
        </div>
      </motion.div>
    </motion.div>
  )

  // Team Members center hexagon
  const TeamMembersHexagon = () => (
    <motion.div
      className="relative"
      variants={centerHexagonVariants}
      whileHover={{
        scale: 1.05,
        rotate: 5,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
    >
      <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          {/* Background Gradient */}
          <linearGradient id="fillGradient5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#014A7F" />
            <stop offset="30%" stopColor="#16052E" />
          </linearGradient>

          {/* Border Stroke Gradient */}
          <linearGradient id="strokeGradient5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#014A7F" />
            <stop offset="100%" stopColor="#014A7F" />
          </linearGradient>
        </defs>

        <motion.path
          d="M45 0L135 0L180 80L135 160L45 160L0 80L45 0Z"
          fill="url(#fillGradient5)"
          stroke="url(#strokeGradient5)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <motion.h3
          className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Team
        </motion.h3>
        <motion.h3
          className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Members
        </motion.h3>
      </div>
    </motion.div>
  )

  return (
   <>
   </>
  )
}
