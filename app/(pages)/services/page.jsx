/* eslint-disable react/no-unescaped-entities */
"use client"

import PageHeader from "@/app/components/page-header"
import ServicesSection from "@/app/components/services-section"
import { Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

/* eslint-disable @next/next/no-img-element */
export default function ServicesPage() {
    // Refs for scroll animations
    const introRef = useRef(null)
    const teamDriverRef = useRef(null)
    const singleDriverRef = useRef(null)
    const tempControlledRef = useRef(null)
    const dryFreightRef = useRef(null)
    const nationwideRef = useRef(null)

    // InView states
    const isIntroInView = useInView(introRef, { once: true, amount: 0.3 })
    const isTeamDriverInView = useInView(teamDriverRef, { once: true, amount: 0.2 })
    const isSingleDriverInView = useInView(singleDriverRef, { once: true, amount: 0.2 })
    const isTempControlledInView = useInView(tempControlledRef, { once: true, amount: 0.2 })
    const isDryFreightInView = useInView(dryFreightRef, { once: true, amount: 0.2 })
    const isNationwideInView = useInView(nationwideRef, { once: true, amount: 0.2 })

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
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

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3 + custom * 0.1,
            },
        }),
    }

    const mapOverlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const mapTextVariants = {
        hidden: { opacity: 0, y: 20 },
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

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Our Services"
                subtitle="Comprehensive freight solutions tailored to your business needs"
                imageSrc="/service-hero.png"
                imageAlt="DTL Transport truck on a mountain road"
            />
            <ServicesSection
                showStats={false}
                heading="Our Services"
                subheading="Reliable. Flexible. Always on Time."
                description="Our Single Driver services are ideal for standard delivery schedules and flexible pickup windows. DTL Transport's experienced solo drivers are trained to handle a wide range of cargo types with professionalism and care."
                ctaText="Drive With Us"
                ctaLink="/driver"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Reliable Freight Solutions Section */}
                <motion.div
                    ref={introRef}
                    className="mb-8 md:mb-16"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isIntroInView ? "visible" : "hidden"}
                >
                    <motion.h1 className="text-white text-2xl md:text-4xl font-bold mb-6 text-center" variants={titleVariants}>
                        Reliable Freight Solutions — Coast to Coast
                    </motion.h1>
                    <motion.p
                        className="text-white/80 md:text-lg max-w-4xl mx-auto font-light text-center"
                        variants={textVariants}
                    >
                        At DTL Transport, we offer a wide range of transportation solutions to meet your delivery requirements. From
                        temperature-sensitive produce to dry goods, and from flexible solo routes to high-speed team driving, our
                        goal is simple — to deliver safely, efficiently, and on time. Backed by cutting-edge technology, expert
                        drivers, and real-time logistics coordination, we make shipping seamless.
                    </motion.p>
                </motion.div>

                {/* Services Grid Layout - Mobile Optimized */}
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    {/* Team Driver Section - Mobile: Content then Image */}
                    <motion.div
                        ref={teamDriverRef}
                        className="space-y-6 md:space-y-0 flex flex-col md:row-span-2 font-light"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isTeamDriverInView ? "visible" : "hidden"}
                    >
                        <motion.div className="order-2 mt-6 md:mt-8">
                            <motion.h2 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4" variants={titleVariants}>
                                Team Driver Services
                            </motion.h2>
                            <motion.p className="text-white/80 text-sm md:text-base mb-4 md:mb-6" variants={textVariants}>
                                For urgent or high-priority cargo, our Team Drivers work in shifts to reduce transit times and provide
                                around-the-clock service. This is the best option for perishable or time-sensitive freight.
                            </motion.p>
                            <ul className="space-y-2 md:space-y-3">
                                {[
                                    "Non-stop driving rotation",
                                    "Optimized for produce and frozen items",
                                    "Trusted team with years of experience",
                                    "High-speed delivery across the country",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start"
                                        variants={listItemVariants}
                                        custom={index}
                                        initial="hidden"
                                        animate={isTeamDriverInView ? "visible" : "hidden"}
                                    >
                                        <motion.div
                                            className="bg-white border-2 border-royalpurple rounded-full w-5 h-5 md:w-6 md:h-6 mt-0.5 flex items-center justify-center mr-2 md:mr-3 flex-shrink-0"
                                            whileHover={{ scale: 1.2, backgroundColor: "#5305B8", borderColor: "#ffffff" }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <Check className="w-3 h-3 md:w-4 md:h-4 text-royalpurple" strokeWidth={3} />
                                        </motion.div>
                                        <span className="text-white text-sm md:text-base">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="order-1" variants={imageVariants}>
                            <motion.div
                                className="rounded-[24px] overflow-hidden border border-royalpurple h-full"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(83, 5, 184, 0.5)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <motion.img
                                    src="/Team-drivers-working-together.png"
                                    alt="Team drivers working together"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Single Driver Section - Mobile: Content then Image */}
                    <motion.div
                        ref={singleDriverRef}
                        className="space-y-0 flex flex-col md:row-span-2 md:col-start-2 md:row-start-1 font-light"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isSingleDriverInView ? "visible" : "hidden"}
                    >
                        <motion.div className="order-1 mt-6 md:mb-8">
                            <motion.h2 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4" variants={titleVariants}>
                                Single Driver Services
                            </motion.h2>
                            <motion.p className="text-white/80 text-sm md:text-base mb-4 md:mb-6" variants={textVariants}>
                                Our Single Driver services are perfect for flexible pickup windows and regular delivery appointments.
                                Whether it's local or long haul, we guarantee professionalism and care from pickup to drop-off.
                            </motion.p>
                            <ul className="space-y-2 md:space-y-3">
                                {[
                                    "Ideal for firm or flexible schedules",
                                    "Available nationwide",
                                    "GPS-equipped trucks for live tracking",
                                    "Reliable quotes and dedicated dispatch support",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start"
                                        variants={listItemVariants}
                                        custom={index}
                                        initial="hidden"
                                        animate={isSingleDriverInView ? "visible" : "hidden"}
                                    >
                                        <motion.div
                                            className="bg-white border-2 border-royalpurple rounded-full w-5 h-5 md:w-6 md:h-6 mt-0.5 flex items-center justify-center mr-2 md:mr-3 flex-shrink-0"
                                            whileHover={{ scale: 1.2, backgroundColor: "#5305B8", borderColor: "#ffffff" }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <Check className="w-3 h-3 md:w-4 md:h-4 text-royalpurple" strokeWidth={3} />
                                        </motion.div>
                                        <span className="text-white text-sm md:text-base">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="order-2" variants={imageVariants}>
                            <motion.div
                                className="rounded-[24px] overflow-hidden border border-royalpurple h-full"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(83, 5, 184, 0.5)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <motion.img
                                    src="/Single-driver-in-truck.png"
                                    alt="Single driver in truck"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Temperature-Controlled Freight Section */}
                <motion.div
                    ref={tempControlledRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16 font-light"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isTempControlledInView ? "visible" : "hidden"}
                >
                    <motion.div variants={imageVariants}>
                        <motion.div
                            className="rounded-[24px] overflow-hidden border border-royalpurple"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(83, 5, 184, 0.5)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <motion.img
                                src="/Thermo-King.png"
                                alt="Thermo King refrigerated trailer unit"
                                className="w-full h-auto object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    </motion.div>
                    <div>
                        <motion.h2
                            className="text-white text-2xl md:text-3xl font-bold mb-4"
                            variants={titleVariants}
                            initial="hidden"
                            animate={isTempControlledInView ? "visible" : "hidden"}
                        >
                            Temperature-Controlled Freight
                        </motion.h2>
                        <motion.p
                            className="text-white/80 mb-6 text-sm md:text-base"
                            variants={textVariants}
                            initial="hidden"
                            animate={isTempControlledInView ? "visible" : "hidden"}
                        >
                            DTL Transport specializes in climate-controlled shipping to protect your produce, frozen goods, and
                            Protect from freeze (PFF) cargo. We use Thermo King Whisper TRUs, with an average age under 1 year,
                            ensuring top-tier freshness and performance.
                        </motion.p>
                        <ul className="space-y-3">
                            {[
                                "Ideal for produce, frozen, and PFF freight",
                                "All trucks equipped with new, eco-compliant TRUs",
                                "Fully registered with California ARB — ARB numbers available on request",
                                "Highest safety and compliance standards for food-grade shipping",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    variants={listItemVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isTempControlledInView ? "visible" : "hidden"}
                                >
                                    <motion.div
                                        className="bg-white border-2 border-royalpurple rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3"
                                        whileHover={{ scale: 1.2, backgroundColor: "#5305B8", borderColor: "#ffffff" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Check className="w-4 h-4 text-royalpurple" strokeWidth={3} />
                                    </motion.div>
                                    <span className="text-white text-sm md:text-base">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Dry Freight Services Section */}
                <motion.div
                    ref={dryFreightRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16 font-light"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isDryFreightInView ? "visible" : "hidden"}
                >
                    <motion.div className="md:order-2" variants={imageVariants}>
                        <motion.div
                            className="rounded-[24px] overflow-hidden border border-royalpurple"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(83, 5, 184, 0.5)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <motion.img
                                src="/semi-truck.png"
                                alt="DTL Transport semi-truck"
                                className="w-full h-auto object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    </motion.div>
                    <div className="md:order-1">
                        <motion.h2
                            className="text-white text-2xl md:text-3xl font-bold mb-4"
                            variants={titleVariants}
                            initial="hidden"
                            animate={isDryFreightInView ? "visible" : "hidden"}
                        >
                            Dry Freight Services
                        </motion.h2>
                        <motion.p
                            className="text-white/80 mb-6 text-sm md:text-base"
                            variants={textVariants}
                            initial="hidden"
                            animate={isDryFreightInView ? "visible" : "hidden"}
                        >
                            DTL Transport treats every dry shipment with the same care and urgency as time-sensitive loads. Our modern
                            dry vans and reefers average less than 2 years old, ensuring your freight travels in top condition.
                        </motion.p>
                        <ul className="space-y-3">
                            {[
                                "Ideal for packaged, palletized, or general cargo",
                                "Fast and efficient delivery from West to East Coast",
                                "Competitive pricing and tailored service",
                                "Hands-on dispatch support to plan your route",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    variants={listItemVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isDryFreightInView ? "visible" : "hidden"}
                                >
                                    <motion.div
                                        className="bg-white border-2 border-royalpurple rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3"
                                        whileHover={{ scale: 1.2, backgroundColor: "#5305B8", borderColor: "#ffffff" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Check className="w-4 h-4 text-royalpurple" strokeWidth={3} />
                                    </motion.div>
                                    <span className="text-white">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Nationwide Logistics Coverage Section */}
            <motion.div
                ref={nationwideRef}
                className="relative overflow-hidden border-4 border-royalpurple mt-16 font-light"
                initial={{ opacity: 0 }}
                animate={isNationwideInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src="/nationwide-logistics-coverage-map.png"
                    alt="Nationwide logistics coverage map"
                    className="w-full h-screen 2xl:h-[800px] scale-105"
                    initial={{ scale: 1.1 }}
                    animate={isNationwideInView ? { scale: 1.05 } : { scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8"
                    variants={mapOverlayVariants}
                    initial="hidden"
                    animate={isNationwideInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="text-purple text-2xl md:text-3xl font-bold mb-6" variants={mapTextVariants}>
                        Nationwide Logistics Coverage
                    </motion.h2>
                    <motion.h3 className="text-white text-2xl md:text-4xl font-bold mb-6 text-center" variants={mapTextVariants}>
                        From Coast to Coast — We've Got You Covered
                    </motion.h3>
                    <motion.p className="text-white text-sm md:text-base max-w-3xl text-center" variants={mapTextVariants}>
                        With pickups typically from the West Coast and deliveries spanning the East Coast and all regions in
                        between, DTL Transport is your partner in nationwide logistics. Our experienced team uses modern tech and
                        industry insight to coordinate the safest and most efficient freight movement for your business.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    )
}
