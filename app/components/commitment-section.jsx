"use client"

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import InteractiveButton from "./animation/interactive-button"
import OffsetButton from "./ui/OffsetButton"

export const StarPattern = ({ className }) => {
    return (
        <svg
            width="136"
            height="139"
            viewBox="0 0 136 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                opacity="0.6"
                d="M30 41L38.1027 62.8973L60 71L38.1027 79.1027L30 101L21.8973 79.1027L0 71L21.8973 62.8973L30 41Z"
                fill="white"
                fillOpacity="0.16"
            />
            <path
                opacity="0.6"
                d="M106 79L114.103 100.897L136 109L114.103 117.103L106 139L97.8973 117.103L76 109L97.8973 100.897L106 79Z"
                fill="white"
                fillOpacity="0.16"
            />
            <path
                opacity="0.6"
                d="M106 0L114.103 21.8973L136 30L114.103 38.1027L106 60L97.8973 38.1027L76 30L97.8973 21.8973L106 0Z"
                fill="white"
                fillOpacity="0.16"
            />
        </svg>
    )
}

export default function CommitmentSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    // Parallax effect for background image
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.3])

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

    // Floating animation for stars
    const floatingStarVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 0.8,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
            },
        },
        floating: {
            y: [0, -10, 0],
            rotate: [0, 5, 0],
            transition: {
                duration: 6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
            },
        },
    }

    return (
        <motion.section
            ref={sectionRef}
            className="relative w-full py-8 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute h-full inset-0 z-0"
            >
                <img src="/commitment-bg.png" alt="Truck driver view" className="w-full h-full object-cover" />
            </motion.div>

            {/* Purple Overlay Layers with dynamic opacity */}
            <motion.div className="absolute inset-0 bg-blue z-10" style={{ opacity: overlayOpacity }}></motion.div>

            {/* Star SVG decoration with floating animation */}
            <motion.div
                className="absolute left-6 top-2/3 -translate-y-1/2 z-20"
                variants={floatingStarVariants}
                animate={isInView ? ["visible", "floating"] : "hidden"}
            >
                <StarPattern />
            </motion.div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-30">
                <motion.h2 className="text-3xl text-white font-medium mb-2" variants={itemVariants}>
                    Our Commitment
                </motion.h2>
                <motion.h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight" variants={itemVariants}>
                    Where Reliability Meets Responsibility
                </motion.h3>
                <motion.p className="md:text-lg mb-10 max-w-3xl mx-auto font-light text-white/80" variants={itemVariants}>
                    DTL is committed to delivering your cargo with integrity, speed, and safety. Our fleet is modern, our drivers
                    are trained professionals, and our team works with laser focus to meet your delivery needs — whether it's
                    coast-to-coast or just across the state.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-6"
                    variants={itemVariants}
                    transition={{ delay: 0.4 }}
                >
                    <InteractiveButton>
                        {/* <Link
                            href="/driver"
                            className="bg-blue shadow-[0_0_4px_#014A7F] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32"
                        >
                            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full text-center">
                                Driver <br />
                                Apply Now
                            </span>
                        </Link> */}
                        <OffsetButton href="/driver" buttonText={<>Driver <br /> Apply Now</>} height='h-14' width='w-36' />
                    </InteractiveButton>
                    <InteractiveButton>
                        {/* <Link
                            href="tel:18004262895"
                            className="bg-royalblue shadow-[0_0_4px_#014A7F] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32"
                        >
                            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                Talk to a Recruiter <br /> 1 (800) 426-2895
                            </span>
                        </Link> */}
                        <OffsetButton
                            href="tel:18004262895"
                            buttonText={<>Talk to a Recruiter <br /> 1 (800) 426-2895</>}
                            height='h-14'
                            width='w-36'
                            classname="bg-[linear-gradient(90deg,_rgba(0,0,0,0.5)_0%,_#014A7F_100%)]"
                        />
                    </InteractiveButton>
                </motion.div>
            </div>
        </motion.section>
    )
}
