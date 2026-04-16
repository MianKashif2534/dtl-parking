"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import InteractiveButton from "./animation/interactive-button"
import OffsetButton from "./ui/OffsetButton"

export default function AboutSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const [hoveredImage, setHoveredImage] = useState(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeInOut",
            },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    const imageHoverVariants = {
        hover: {
            scale: 1.05,
            rotate: 2,
            zIndex: 30,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    }

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.5,
            },
        },
    }

    // Floating animation for third image
    const floatingAnimation = {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    }

    return (
        <motion.section
            ref={sectionRef}
            className="relative w-full py-16 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT */}
                    <div className="text-white">
                        <motion.h2 variants={itemVariants} className="text-3xl mb-4">
                            About Us
                        </motion.h2>

                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
                            Delivering Excellence,
                            <br />
                            Mile After Mile
                        </motion.h3>

                        <motion.p variants={itemVariants} className="mb-6 text-white/80">
                            DTL is a leading name in logistics, offering end-to-end trucking solutions tailored to your needs.
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <InteractiveButton>
                                <OffsetButton href="/about" buttonText="Read More" height="h-10" width="w-36" />
                            </InteractiveButton>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="relative w-full h-[500px]">

                        {/* IMAGE 1 */}
                        <motion.div
                            className="absolute top-0 right-[30%] w-56 h-56 rounded-2xl overflow-hidden border-2 border-white shadow-xl cursor-pointer"
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            onMouseEnter={() => setHoveredImage(1)}
                            onMouseLeave={() => setHoveredImage(null)}
                            custom={imageHoverVariants}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                animate={{ scale: hoveredImage === 1 ? 1.1 : 1 }}
                            >
                                <Image src="/truck-about-1.png" alt="Truck" fill className="object-cover" />
                            </motion.div>
                        </motion.div>

                        {/* IMAGE 2 */}
                        <motion.div
                            className="absolute top-8 right-0 w-56 h-56 rounded-2xl overflow-hidden border-2 border-white shadow-xl cursor-pointer"
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: 0.2 }}
                            onMouseEnter={() => setHoveredImage(2)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                animate={{
                                    scale: hoveredImage === 2 ? 1.1 : 1,
                                    rotate: hoveredImage === 2 ? 5 : 0,
                                }}
                            >
                                <Image src="/truck-about-2.png" alt="Fleet" fill className="object-cover" />
                            </motion.div>
                        </motion.div>

                        {/* IMAGE 3 - FIXED (No duplicate animate prop) */}
                        <motion.div
                            className="absolute top-[200px] right-[15%] w-56 h-56 rounded-2xl overflow-hidden border-2 border-white shadow-xl cursor-pointer"
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: 0.4 }}
                            onMouseEnter={() => setHoveredImage(3)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            {/* Separate animated wrapper for floating effect */}
                            <motion.div
                                className="relative w-full h-full"
                                animate={floatingAnimation}
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    animate={{ scale: hoveredImage === 3 ? 1.1 : 1 }}
                                >
                                    <Image src="/truck-about-3.png" alt="Facility" fill className="object-cover" />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* BADGE */}
                        <motion.div
                            className="absolute bottom-8 right-6 bg-blue text-white px-6 py-4 rounded-2xl"
                            variants={badgeVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-center font-bold">
                                Running DTL <br /> Since 2013
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </motion.section>
    )
}