"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

/* eslint-disable @next/next/no-img-element */

export default function PartnersSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    const partners = [
        { image: "/partners/partners_1.png" },
        { image: "/partners/partners_2.png" },
        { image: "/partners/partners_3.png" },
        { image: "/partners/partners_4.png" },
        { image: "/partners/partners_5.png" },
        { image: "/partners/partners_6.png" },
        { image: "/partners/partners_7.png" },
        { image: "/partners/partners_8.png" },
        { image: "/partners/partners_8.png" },
    ]

    const affiliations = [
        { image: "/affiliations/affiliations_1.png" },
        { image: "/affiliations/affiliations_2.png" },
        { image: "/affiliations/affiliations_3.png" },
        { image: "/affiliations/affiliations_4.png" },
        { image: "/affiliations/affiliations_5.png" },
        { image: "/affiliations/affiliations_6.png" },
        { image: "/affiliations/affiliations_7.png" },
        { image: "/affiliations/affiliations_8.png" },
        { image: "/affiliations/affiliations_8.png" },
    ]

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                duration: 0.5,
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
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
            },
        },
    }

    const backgroundGlowVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        },
    }

    return (
        <motion.section
            ref={sectionRef}
            className="relative w-full py-8 md:py-16 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Radial gradient blur in the background */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0"
                style={{
                    background:
                        "radial-gradient(41.25% 76.79% at 37.43% 47.02%, rgba(255, 255, 255, 0.1) 0%, rgba(40, 4, 98, 0.1) 100%)",
                    filter: "blur(100px)",
                }}
                variants={backgroundGlowVariants}
            ></motion.div>

            <div className="relative z-20">
                {/* Partners Section */}
                <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
                    <motion.h2
                        className="text-white text-3xl md:text-4xl font-bold text-center mb-8"
                        variants={itemVariants}
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.7, ease: "easeOut", type: "spring", stiffness: 50, damping: 15 }}
                    >
                        Trusted Shipping & Transport Partners
                    </motion.h2>

                    <motion.div
                        className="flex flex-col antialiased items-center justify-center relative overflow-hidden"
                        variants={cardContainerVariants}
                    >
                        <InfiniteMovingCards logos={partners} direction="right" speed="slow" />
                    </motion.div>
                </motion.div>

                {/* Affiliations Section */}
                <motion.div variants={itemVariants}>
                    <motion.h2
                        className="text-white text-3xl md:text-4xl font-bold text-center mb-8"
                        variants={itemVariants}
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut", type: "spring", stiffness: 50, damping: 15 }}
                    >
                        Recognized Affiliations & Compliance
                    </motion.h2>

                    <motion.div
                        className="flex flex-col antialiased items-center justify-center relative overflow-hidden"
                        variants={cardContainerVariants}
                        transition={{ delay: 0.6 }}
                    >
                        <InfiniteMovingCards logos={affiliations} direction="right" speed="slow" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(83,5,184,0.3)_0%,_rgba(11,4,40,0)_100%)] blur-[50px] z-0"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(83,5,184,0.3)_0%,_rgba(11,4,40,0)_100%)] blur-[50px] z-0"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
            />
        </motion.section>
    )
}
