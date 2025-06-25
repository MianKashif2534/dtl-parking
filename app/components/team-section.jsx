/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimationControls } from "framer-motion"

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimationControls()

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
    { id: "hr-dept", title: "HR Dept", image: "/user1.png" },
    { id: "hr", title: "HR", image: "/team-1.png" },
    { id: "accounting", title: "Accounting Manager", image: "/team-1.png" },
    { id: "ceo-1", title: "CEO/Outbound Team", image: "/user1.png" },
    { id: "ceo-2", title: "CEO/Outbound Team", image: "/team-1.png" },
    { id: "outbound", title: "Outbound Team", image: "/team-1.png" },
    { id: "inbound", title: "Inbound Team", image: "/team-1.png" },
    { id: "maintenance", title: "Maintenance / Safety", image: "/team-1.png" },
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
      className="relative w-[180px] h-[160px]"
      variants={hexagonVariants}
      custom={index}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
    >
      <div className="hexagon-wrapper w-full h-full">
        <div className="hexagon-shape relative w-full h-full">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>


          {/* Improved Badge */}
          <motion.div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          >
            <div className="bg-white/95 backdrop-blur-sm text-[#014A7F] px-3 py-2 rounded-full shadow-lg border border-[#014A7F]/20">
              <span className="text-xs sm:text-sm font-semibold text-center block whitespace-nowrap">{title}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

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
    <motion.section
      ref={sectionRef}
      className="relative w-full py-8 md:py-16 overflow-hidden bg-[radial-gradient(23.41%_23.41%_at_52.42%_48.07%,_#014A7F_0%,_#0B0428_100%)] border-[4px] border-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16"
          variants={titleVariants}
        >
          Team Members
        </motion.h2>

        {isMobile ? (
          // Mobile layout - Carousel/Grid style
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={member.id} className="flex justify-center">
                <div className="w-full max-w-[150px]">
                  <TeamHexagon title={member.title} image={member.image} index={index} />
                </div>
              </div>
            ))}

            {teamMembers.slice(4).map((member, index) => (
              <div key={member.id} className="flex justify-center">
                <div className="w-full max-w-[150px]">
                  <TeamHexagon title={member.title} image={member.image} index={index + 4} />
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          // Desktop layout - Original organizational chart
          <motion.div className="flex justify-center" variants={containerVariants} initial="hidden" animate="visible">
            <div className="grid grid-cols-5 grid-rows-3 relative">
              {/* HR DEPT - Left side */}
              <div className="col-start-1 row-start-2 flex justify-center">
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="HR Dept" image="/team/user9.png" index={0} />
                </div>
              </div>

              {/* Column 2 - HR and Accounting Manager */}
              <div className="col-start-2 row-start-1 row-span-3 flex flex-col items-center justify-center gap-4">
                {/* HR */}
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="HR" image="/team/user8.png" index={1} />
                </div>

                {/* Accounting Manager */}
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="Accounting Manager" image="/team/user7.png" index={2} />
                </div>
              </div>

              {/* Column 3 - CEO/Outbound Team, Team Members, CEO/Outbound Team */}
              <div className="col-start-3 row-start-1 row-span-3 flex flex-col items-center justify-center gap-4">
                {/* CEO/Outbound Team (Top) */}
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="CEO/Outbound Team" image="/team/user1.png" index={3} />
                </div>

                {/* Team Members (Center) */}
                <div className="w-full max-w-[180px]">
                  <TeamMembersHexagon />
                </div>

                {/* CEO/Outbound Team (Bottom) */}
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="CEO/Outbound Team" image="/team/user4.png" index={4} />
                </div>
              </div>

              {/* Column 4 - Outbound Team and Inbound Team */}
              <div className="col-start-4 row-start-1 row-span-3 flex flex-col items-center justify-center gap-4">
                {/* Outbound Team */}
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="Outbound Team" image="/team/user3.png" index={5} />
                </div>

                {/* Inbound Team */}
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="Inbound Team" image="/team/user5.png" index={6} />
                </div>
              </div>

              {/* Maintenance / Safety - Right side */}
              <div className="col-start-5 row-start-2 flex justify-center">
                <div className="w-full max-w-[180px]">
                  <TeamHexagon title="Maintenance / Safety" image="/team/user6.png" index={7} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  )
}
