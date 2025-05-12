"use client"

import { motion } from "framer-motion"
import AboutSection from "./components/about-section"
import CommitmentSection from "./components/commitment-section"
import HeroSection from "./components/hero-section"
import PartnersSection from "./components/partners-section"
import ServicesSection from "./components/services-section"
import TeamSection from "./components/team-section"
import TestimonialsSection from "./components/testimonials-section"
import TruckParkingSection from "./components/truck-parking-section"

export default function Home() {
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div className="container mx-auto" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <HeroSection />
      <div className="relative -top-40 2xl:-top-0 -mb-40 2xl:-mb-0">
        <AboutSection />
        <CommitmentSection />
        <ServicesSection />
        <TeamSection />
        <TruckParkingSection />
        <TestimonialsSection />
        <PartnersSection />
      </div>
    </motion.div>
  )
}
