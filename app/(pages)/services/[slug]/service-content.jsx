/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import OffsetButton from "@/app/components/ui/OffsetButton"
import CustomBadge from "@/app/components/ui/button"

export default function ServiceContent({ service, allServices }) {
    // Refs for scroll animations
    const sidebarRef = useRef(null)
    const overviewRef = useRef(null)
    const benefitsRef = useRef(null)
    const idealForRef = useRef(null)
    const ctaRef = useRef(null)

    // InView states
    const isSidebarInView = useInView(sidebarRef, { once: true, amount: 0.2 })
    const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.5 })
    const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
    const isIdealForInView = useInView(idealForRef, { once: true, amount: 0.3 })
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 })

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const sidebarVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
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
                delay: 0.1 + custom * 0.1,
            },
        }),
    }

    const benefitItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + custom * 0.15,
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        }),
    }

    const iconContainerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    const ctaVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 0 15px rgba(83, 5, 184, 0.7)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
        tap: { scale: 0.98 },
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar Navigation */}
                <motion.div
                    ref={sidebarRef}
                    className="lg:col-span-1"
                    variants={sidebarVariants}
                    initial="hidden"
                    animate={isSidebarInView ? "visible" : "hidden"}
                >
                    <div className="sticky top-8">
                        <motion.div
                            className="rounded-[24px] p-6 border-[3px] border-royalblue"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isSidebarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <motion.h2
                                className="text-white text-xl font-bold mb-6"
                                initial={{ opacity: 0 }}
                                animate={isSidebarInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                DTL Services
                            </motion.h2>
                            <nav className="space-y-2">
                                {allServices.map((navService, index) => (
                                    <motion.div
                                        key={navService.slug}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isSidebarInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        <Link
                                            href={`/services/${navService.slug}`}
                                            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${service.slug === navService.slug
                                                ? "bg-royalblue text-white"
                                                : "text-white/80 hover:bg-royalblue/20"
                                                }`}
                                        >
                                            <span>{navService.navTitle || navService.title}</span>
                                            <motion.span whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                                ›
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>

                        <motion.div
                            className="mt-8 rounded-[24px] overflow-hidden relative h-[400px] border-2 border-royalblue"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isSidebarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(83, 5, 184, 0.5)" }}
                        >
                            <div className="absolute inset-0 z-0">
                                <motion.img
                                    src="/contact-us.png"
                                    alt="DTL Transport trucks"
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1 }}
                                    animate={isSidebarInView ? { scale: 1 } : { scale: 1.1 }}
                                    transition={{ duration: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                />
                                <div className="absolute inset-0 bg-royalblue/10"></div>
                            </div>
                            <motion.div
                                className="relative z-10 px-8 flex items-center justify-center flex-col h-full"
                                initial={{ opacity: 0 }}
                                animate={isSidebarInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                <motion.h3
                                    className="text-white text-2xl font-bold mb-6 text-center"
                                    initial={{ y: 20 }}
                                    animate={isSidebarInView ? { y: 0 } : { y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                >
                                    Ask more about the services you need and get best offer
                                </motion.h3>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {/* <Link
                                        href="#footer-contact"
                                        className="block text-center bg-royalblue hover:bg-royalblue/80 text-white px-4 py-2 rounded-lg mt-4 transition-colors"
                                    >
                                        Contact Us
                                    </Link> */}
                                    <OffsetButton href="/contact" buttonText="Contact Us" height='h-12' width='w-36' />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="lg:col-span-2 font-light">
                    {/* Overview Section */}
                    <motion.div
                        ref={overviewRef}
                        className="mb-6"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isOverviewInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="inline-flex items-center mb-4 w-fit"
                            variants={iconContainerVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* <div className="w-6 h-6 flex items-center justify-center mr-3">
                                <img src="/icon-1.png" alt="icon" />
                            </div>
                            <h2 className="text-white text-xl font-bold">Overview</h2> */}
                            <CustomBadge text="Overview" />
                        </motion.div>
                        <motion.p
                            className="text-white/80 md:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isOverviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {service.overview}
                        </motion.p>
                    </motion.div>

                    {/* Why Choose Section */}
                    <motion.div
                        ref={benefitsRef}
                        className="mb-6"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isBenefitsInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="inline-flex items-center mb-4 w-fit"
                            variants={iconContainerVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* <div className="w-6 h-6 flex items-center justify-center mr-3">
                                <img src="/icon-1.png" alt="icon" />
                            </div>
                            <h2 className="text-white md:text-xl font-bold">Why Choose DTL's {service.title} Service?</h2> */}
                            <CustomBadge text={<>{service.title} Service?</>} />
                        </motion.div>
                        <ul className="space-y-4">
                            {service.benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    variants={benefitItemVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isBenefitsInView ? "visible" : "hidden"}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    <motion.div
                                        className="bg-royalblue rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3 shrink-0"
                                        whileHover={{ scale: 1.2, backgroundColor: "#014A7F" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <span className="text-white font-bold text-sm">{index + 1}</span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-white font-bold">{benefit.title}</h3>
                                        <p className="text-white/80 text-sm md:text-base">{benefit.description}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Ideal For Section */}
                    <motion.div
                        ref={idealForRef}
                        className="mb-10"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isIdealForInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="inline-flex items-center mb-4 w-fit"
                            variants={iconContainerVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* <div className="w-6 h-6 flex items-center justify-center mr-3">
                                <img src="/icon-1.png" alt="icon" />
                            </div>
                            <h2 className="text-white text-xl font-bold">Ideal for:</h2> */}
                            <CustomBadge text="Ideal for:" />
                        </motion.div>
                        <ul className="space-y-3">
                            {service.idealFor.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    variants={listItemVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={isIdealForInView ? "visible" : "hidden"}
                                >
                                    <motion.div
                                        className="bg-white border border-royalblue rounded-full w-5 h-5 mt-1 flex items-center justify-center mr-3"
                                        whileHover={{ scale: 1.2, backgroundColor: "#014A7F", borderColor: "#ffffff", color: "#ffffff" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Check className="w-3 h-3 text-royalblue hover:text-white" />
                                    </motion.div>
                                    <span className="text-white text-sm md:text-base">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        ref={ctaRef}
                        className="mt-6 md:mt-12 text-center"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isCtaInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={ctaVariants}
                            whileHover="hover"
                            whileTap="tap"
                            initial="hidden"
                            animate={isCtaInView ? "visible" : "hidden"}
                            className="inline-block rounded-full"
                        >
                            {/* <Link
                                href="#footer-contact"
                                className="inline-block bg-royalblue hover:bg-royalblue/80 text-white px-8 py-3 rounded-full font-medium transition-colors text-sm md:text-base"
                            >
                                Request {service.title} Service
                            </Link> */}
                            <OffsetButton href="#footer-contact" buttonText={<>Request {service.title} Service</>} height='h-14' width='w-64' />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
