"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import InteractiveButton from "./animation/interactive-button"

const serviceCards = [
    {
        title: "Truck Parking",
        description: "Day & night access for trucks with or without trailers.",
        image: "/Truck-parking.png",
        link: "/services",
    },
    {
        title: "Security Monitoring",
        description: "24-hour camera coverage and guards on patrol.",
        image: "/Security-monitoring.png",
        link: "/services",
    },
    {
        title: "Magnetic Gate Entry",
        description: "Hassle-free entry with card-access technology.",
        image: "/Magnetic-gate-entry.png",
        link: "/services",
    },
]

function ServiceCard({ title, description, image, link, index = 0 }) {
    return (
        <motion.div
            className="overflow-hidden border-4 border-royalblue relative group bg-[rgba(1,74,127,0.6)] shadow-[0_0_4px_4px_#014A7F] rounded-[20px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.7,
                    delay: 0.3 + index * 0.2,
                    ease: "easeOut",
                },
            }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px 4px #014A7F",
                transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
        >
            <motion.div className="absolute inset-0 z-0">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4 },
                    }}
                />
                <motion.div
                    className="absolute inset-0 bg-royalpurple/10"
                    whileHover={{
                        backgroundColor: "rgba(83, 5, 184, 0.3)",
                        transition: { duration: 0.3 },
                    }}
                />
            </motion.div>
            <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center min-h-[280px]">
                <motion.h3
                    className="text-white text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            delay: 0.5 + index * 0.2,
                        },
                    }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-white/90 md:px-16"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 0.6 + index * 0.2,
                        },
                    }}
                >
                    {description}
                </motion.p>
                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.5,
                            delay: 0.7 + index * 0.2,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        },
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                >
                    <Link
                        href={link}
                        className="inline-block border border-white/40 hover:bg-white/10 text-white text-sm px-4 py-1 rounded transition"
                    >
                        Read More →
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default function TruckParkingSection() {
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

    const buttonContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8,
                duration: 0.5,
            },
        },
    }

    return (
        <motion.section
            ref={sectionRef}
            className="relative w-full py-8 md:py-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Background glow effect */}
            <motion.div
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(83,5,184,0.3)_0%,_rgba(11,4,40,0)_100%)] blur-[100px] z-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 1.5,
                        ease: "easeOut",
                    },
                }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <motion.div className="text-center mb-8" variants={containerVariants}>
                    <motion.h2 className="text-white text-3xl md:text-5xl font-bold mb-4" variants={itemVariants}>
                        Truck Parking Now Available
                    </motion.h2>
                    <motion.p className="text-white/80 font-light md:text-lg max-w-4xl mx-auto" variants={itemVariants}>
                        DTL Transport offers 24/7 guarded truck parking at our Fresno facility — with controlled access, wide lanes,
                        and unbeatable convenience.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {serviceCards.map((card, idx) => (
                        <ServiceCard key={idx} {...card} index={idx} />
                    ))}
                </div>

                <motion.div className="flex flex-col items-center justify-center" variants={buttonContainerVariants}>
                    <motion.div className="flex flex-col md:flex-row items-center gap-4 mb-4" variants={containerVariants}>
                        <motion.div variants={itemVariants}>
                            <InteractiveButton>
                                <Link
                                    href="/driver"
                                    className="inline-block bg-[linear-gradient(90deg,rgba(46,27,82,0.12)_0%,rgba(1,74,127,0.6)_100%)] shadow-[0_0_4px_#014A7F] text-white px-6 py-3 rounded-md transition"
                                >
                                    <span className="py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                        Drive With Us
                                    </span>
                                </Link>
                            </InteractiveButton>
                        </motion.div>

                        <motion.span className="text-white text-lg font-medium hidden md:flex" variants={itemVariants}>
                            Or
                        </motion.span>

                        <motion.div variants={itemVariants}>
                            <InteractiveButton>
                                <Link
                                    href="/"
                                    className="bg-royalblue hidden md:inline-block shadow-[0_0_4px_#014A7F] hover:bg-blue text-white px-6 py-3 rounded-md transition"
                                >
                                    <span className="py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                        Ship with Us
                                    </span>
                                </Link>
                            </InteractiveButton>
                        </motion.div>
                    </motion.div>

                    <motion.div className="flex" variants={itemVariants} transition={{ delay: 0.3 }}>
                        <InteractiveButton>
                            <Link
                                href="/services"
                                className="inline-block relative z-50 bg-[linear-gradient(90deg,rgba(46,27,82,0.12)_0%,rgba(1,74,127,0.6)_100%)] shadow-[0_0_4px_#014A7F] text-white px-6 py-3 rounded-md transition"
                            >
                                <span className="py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                    Explore More
                                </span>
                            </Link>
                        </InteractiveButton>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
