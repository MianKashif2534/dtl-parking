"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import InteractiveButton from "./animation/interactive-button"
import CountUp from "./animation/count-up"
import OffsetButton from "./ui/OffsetButton"

const services = [
    {
        title: "Truckload (FTL)",
        description: "Full-capacity freight shipping with fast, direct delivery.",
        image: "/truck-about-1.png",
        link: "/services/ftl",
    },
    {
        title: "LTL",
        description: "Smart shipping for smaller loads, affordable and efficient.",
        image: "/truck-about-2.png",
        link: "/services/ltl",
    },
    {
        title: "Satellite Tracking",
        description: "Real-time GPS tracking from pickup to delivery.",
        image: "/truck-about-3.png",
        link: "/services/satellite-tracking",
    },
    {
        title: "Power Only",
        description: "We supply the tractor and driver, you supply the trailer.",
        image: "/truck-about-1.png",
        link: "/services/power-only",
    },
]

const stats = [
    {
        icon: "/stat-1.png",
        value: "300+",
        numericValue: 300,
        label: "Trucks",
    },
    {
        icon: "/stat-2.png",
        value: "350+",
        numericValue: 350,
        label: "Trailers",
    },
    {
        icon: "/stat-3.png",
        value: "90M+",
        numericValue: 90,
        label: "Miles Driven",
        suffix: "M+",
    },
    {
        icon: "/stat-4.png",
        value: "1,000+",
        numericValue: 1000,
        label: "Happy Clients",
    },
]

export default function ServicesSection({
    showStats = true,
    heading = "Our Services",
    subheading = "Fast, Flexible, Reliable",
    description = "We offer a wide range of trucking services designed to support your logistics operations with maximum efficiency.",
    ctaText = "Explore More",
    ctaLink = "/services",
}) {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const statsRef = useRef(null)
    const isStatsInView = useInView(statsRef, { once: true, amount: 0.4 })

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

    const decorationVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 0.4,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
            },
        },
    }

    const blurVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    }

    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.6,
                duration: 0.5,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
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

    const statsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.5,
            },
        },
    }

    const statsItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "192px",
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.section
            ref={sectionRef}
            className="relative z-0 w-full py-12 md:py-16 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Decorative SVG */}
            <motion.div className="absolute top-0 right-0 z-10" variants={decorationVariants}>
                <svg width="135" height="82" viewBox="0 0 135 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <rect y="38" width="64" height="44" rx="4" fill="#673DB8" fillOpacity="0.72" />
                        <rect x="64" width="66" height="34" rx="4" fill="#673DB8" fillOpacity="0.72" />
                        <path
                            d="M69 42C69 39.7909 70.7909 38 73 38H121.789C125.747 38 127.301 43.1329 124.008 45.3282L75.2188 77.8541C72.5606 79.6263 69 77.7207 69 74.5259V42Z"
                            fill="#734CCD"
                        />
                    </g>
                </svg>
            </motion.div>

            {/* Radial Gradient Blur */}
            <motion.div
                className="absolute right-1/4 top-[10%] w-40 h-40 z-0 bg-blue blur-[76px]"
                variants={blurVariants}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="mb-8">
                    <motion.h2 className="text-white text-3xl font-medium mb-2" variants={itemVariants}>
                        {heading}
                    </motion.h2>
                    <div className="flex flex-col sm:flex-row mb-4 sm:mb-0 justify-between items-start">
                        <motion.h3 className="text-white text-3xl md:text-5xl font-bold mb-4" variants={itemVariants}>
                            {subheading}
                        </motion.h3>
                        <motion.div variants={itemVariants}>
                            <InteractiveButton>
                                {/* <Link
                                    href={ctaLink}
                                    className="inline-block bg-blue shadow-[0_0_4px_#014A7F] rounded-[8px] text-white px-5 py-3 transition"
                                >
                                    <span className="py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                        {ctaText}
                                    </span>
                                </Link> */}
                                <OffsetButton
                                    href={ctaLink}
                                    buttonText={ctaText}
                                    height='h-12'
                                    width='w-36'
                                    classname="bg-[linear-gradient(90deg,_rgba(0,0,0,0.5)_0%,_#014A7F_100%)]"
                                />
                            </InteractiveButton>
                        </motion.div>
                    </div>
                    <motion.p className="text-white/80 font-light md:text-lg max-w-2xl" variants={itemVariants}>
                        {description}
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
                    variants={cardContainerVariants}
                >
                    {services.map(({ title, description, image, link }, index) => (
                        <ServiceCard key={index} title={title} description={description} image={image} link={link} index={index} />
                    ))}
                </motion.div>

                {showStats && (
                    <motion.div ref={statsRef} initial="hidden" animate={isStatsInView ? "visible" : "hidden"}>
                        <motion.div
                            className="flex flex-col md:flex-row justify-center items-center my-12 md:my-16"
                            variants={statsContainerVariants}
                        >
                            <motion.div
                                className="h-2 w-48 bg-royalblue rounded-[20px]"
                                variants={lineVariants}
                            ></motion.div>
                            <motion.h2 className="text-white text-2xl md:text-3xl font-bold mx-4 py-2" variants={itemVariants}>
                                DTL BY NUMBERS
                            </motion.h2>
                            <motion.div
                                className="h-2 w-48 bg-royalblue rounded-[20px]"
                                variants={lineVariants}
                            ></motion.div>
                        </motion.div>

                        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" variants={statsContainerVariants}>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 flex flex-col items-center justify-center border-2 border-royalblue shadow-[0_0_16px_rgba(1, 74, 127, 0.6)] rounded-[20px]"
                                    variants={statsItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 0 25px rgba(1, 74, 127, 0.6)",
                                        transition: { type: "spring", stiffness: 400, damping: 10 },
                                    }}
                                >
                                    <motion.div
                                        className="mb-4 w-10 md:w-12"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                    >
                                        <img
                                            src={stat.icon || "/placeholder.svg"}
                                            alt={`${stat.label} Icon`}
                                            className="w-full h-auto object-contain"
                                        />
                                    </motion.div>
                                    <motion.h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                                        {isStatsInView && (
                                            <CountUp
                                                from={0}
                                                to={stat.numericValue}
                                                duration={2}
                                                delay={0.5 + index * 0.2}
                                                suffix={stat.suffix || "+"}
                                            />
                                        )}
                                    </motion.h3>
                                    <motion.p className="text-royalblue text-sm md:text-lg text-center uppercase tracking-wider">
                                        {stat.label}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </motion.section>
    )
}

function ServiceCard({ title, description, image, link, index }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="rounded-2xl overflow-hidden border-2 border-white relative group h-[250px]"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 50,
                        damping: 15,
                    },
                },
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(1, 74, 127, 0.6)",
                transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
        >
            <motion.div className="absolute inset-0 z-0">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                        transition: { duration: 0.4 },
                    }}
                />
                <motion.div
                    className="absolute inset-0 bg-black"
                    animate={{
                        opacity: isHovered ? 0.6 : 0.4,
                        transition: { duration: 0.3 },
                    }}
                />
            </motion.div>
            <div className="relative z-10 px-5 py-8 h-full flex flex-col items-center justify-center text-center">
                <motion.h4
                    className="text-white text-2xl font-bold mb-1"
                    animate={{
                        y: isHovered ? -5 : 0,
                        transition: { duration: 0.3 },
                    }}
                >
                    {title}
                </motion.h4>
                <motion.p
                    className="text-white/80 text-sm mb-auto"
                    animate={{
                        opacity: isHovered ? 1 : 0.8,
                        transition: { duration: 0.3 },
                    }}
                >
                    {description}
                </motion.p>
                <motion.div
                    className="mt-4"
                    animate={{
                        y: isHovered ? 5 : 0,
                        scale: isHovered ? 1.05 : 1,
                        transition: { duration: 0.3 },
                    }}
                >
                    <Link
                        href={link}
                        className="inline-block border border-white hover:bg-white/30 text-white text-sm px-4 py-1 rounded transition"
                    >
                        Read More →
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}
