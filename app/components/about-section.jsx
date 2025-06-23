"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import InteractiveButton from "./animation/interactive-button"

export default function AboutSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.5,
                ease: "easeInOut",
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
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    const shapeVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 0.4,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        },
    }

    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "100%",
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.3,
            },
        },
    }

    const verticalLineVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: "75%",
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
            },
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
            {/* Shape element at bottom left */}
            <motion.div className="absolute bottom-0 left-0 w-[200px] z-10" variants={shapeVariants}>
                <svg width="135" height="82" viewBox="0 0 135 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <rect width="64" height="44" rx="4" transform="matrix(-1 0 0 1 135 38)" fill="#673DB8" fillOpacity="0.72" />
                        <rect width="66" height="34" rx="4" transform="matrix(-1 0 0 1 71 0)" fill="#673DB8" fillOpacity="0.72" />
                        <path
                            d="M66 42C66 39.7909 64.2091 38 62 38H13.2111C9.25347 38 7.69935 43.1329 10.9923 45.3282L59.7812 77.8541C62.4394 79.6263 66 77.7207 66 74.5259V42Z"
                            fill="#734CCD"
                        />
                    </g>
                </svg>
            </motion.div>

            <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left content */}
                    <div className="text-white">
                        <motion.h2 className="text-3xl text-white font-medium mb-4" variants={itemVariants}>
                            About Us
                        </motion.h2>
                        <motion.h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" variants={itemVariants}>
                            Delivering Excellence,
                            <br />
                            Mile After Mile
                        </motion.h3>
                        <motion.p className="md:text-lg mb-6 md:mb-8 font-light text-white/80" variants={itemVariants}>
                            DTL is a leading name in U.S. logistics, offering end-to-end trucking solutions tailored to your supply
                            chain needs. With years of experience and a customer-first mindset, we ensure your freight arrives safely
                            and on time, every time.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <InteractiveButton className="inline-block">
                                <Link
                                    href="/about"
                                    className="inline-block bg-blue shadow-[0_0_4px_#0B0428] rounded-[8px] text-white px-8 py-3 transition-colors"
                                >
                                    <span className="py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                        Read More
                                    </span>
                                </Link>
                            </InteractiveButton>
                        </motion.div>
                    </div>

                    {/* Right image collage */}
                    <div className="relative w-full h-[500px]">
                        {/* Purple highlight lines */}
                        <motion.div
                            className="absolute top-0 right-[40%] left-0 h-4 bg-royalblue rounded-full"
                            variants={lineVariants}
                        ></motion.div>
                        <motion.div
                            className="absolute bottom-8 right-0 w-4 h-3/4 bg-royalblue rounded-full"
                            variants={verticalLineVariants}
                        ></motion.div>

                        {/* Image collage with <Image /> */}
                        <motion.div
                            className="absolute top-0 right-[30%] z-20 w-56 h-56 rounded-2xl border-2 border-white overflow-hidden"
                            variants={imageVariants}
                            custom={1}
                        >
                            <Image src="/truck-about-1.png" alt="DTL Truck" fill className="object-cover scale-105" />
                        </motion.div>

                        <motion.div
                            className="absolute top-8 right-0 z-0 w-56 h-56 rounded-2xl overflow-hidden"
                            variants={imageVariants}
                            custom={2}
                            transition={{ delay: 0.2 }}
                        >
                            <Image src="/truck-about-2.png" alt="DTL Truck Fleet" fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            className="absolute top-[200px] right-[15%] w-56 h-56 rounded-2xl border-2 border-white overflow-hidden"
                            variants={imageVariants}
                            custom={3}
                            transition={{ delay: 0.4 }}
                        >
                            <Image src="/truck-about-3.png" alt="DTL Facility" fill className="object-cover" />
                        </motion.div>

                        {/* Running since badge */}
                        <motion.div
                            className="absolute bottom-8 right-6 bg-blue border-2 border-white/50 shadow-[inset_0_0_80px_#014A7F99] text-white px-6 py-4 rounded-2xl"
                            variants={badgeVariants}
                        >
                            <p className="text-center">
                                <span className="block text-2xl font-bold">Running DLT</span>
                                <span className="block text-2xl font-bold">Since 2013</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
