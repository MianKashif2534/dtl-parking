/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ChevronDown, Check, Search, Loader2 } from "lucide-react"
import PageHeader from "@/app/components/page-header"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import OffsetButton from "@/app/components/ui/OffsetButton"

// Feature card data
const features = [
    {
        title: "Truck Parking",
        description:
            "Day & night access for trucks with or without trailers. Our facility accommodates all types of commercial vehicles.",
        image: "/Truck-parking.png",
        link: "/services/truck-parking",
    },
    {
        title: "Security Monitoring",
        description:
            "24-hour camera coverage and guards on patrol. Your equipment and cargo remain safe with our comprehensive security system.",
        image: "/Security-monitoring.png",
        link: "/services/security-monitoring",
        classname: "lg:col-span-2"
    },
    {
        title: "Magnetic Gate Entry",
        description:
            "Hassle-free entry with card-access technology. Authorized drivers can enter and exit smoothly at any time.",
        image: "/Magnetic-gate-entry.png",
        link: "/services/gate-entry",
    },
    {
        title: "Prime Location",
        description:
            "Located at 4376 Golden State Blvd, Fresno, CA with seamless access to major highways. Strategically positioned for your convenience.",
        image: "/Security-monitoring.png",
        link: "/services/location",
    },
    {
        title: "Spacious Layout",
        description:
            "Wide lanes and designated slots for trucks with or without trailers. Stress-free parking, guaranteed. Plenty of room to maneuver.",
        image: "/Magnetic-gate-entry.png",
        link: "/services/layout",
    },
]

// Pricing data
const pricingPlans = [
    {
        title: "Daily Rate",
        price: "$30",
        period: "Per 24-hour period",
        features: ["24/7 secure access", "Security monitoring", "No reservation needed"],
        popular: false,
    },
    {
        title: "Weekly Rate",
        price: "$150",
        period: "Per 7-day period",
        features: ["All daily benefits", "Save over daily rate", "Guaranteed space"],
        popular: true,
    },
    {
        title: "Monthly Rate",
        price: "$500",
        period: "Per 30-day period",
        features: ["All weekly benefits", "Best value option", "Dedicated parking spot"],
        popular: false,
    },
]

// Contact info
const contactInfo = [
    { icon: Phone, title: "Phone", value: "(559) 123-4567" },
    { icon: Mail, title: "Email", value: "parking@dtltransport.com" },
    { icon: MapPin, title: "Address", value: "4376 Golden State Blvd, Fresno, CA 93722" },
]

// Truck types
const truckTypes = ["Semi-Truck", "Box Truck", "Flatbed", "Refrigerated", "Tanker", "Dump Truck", "Other"]

// Parking durations
const parkingDurations = ["Daily (24 hours)", "Weekly (7 days)", "Monthly (30 days)", "3 Months", "6 Months", "Annual"]

// Feature Card Component
function FeatureCard({ title, description, image, link, index, classname = "", }) {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, amount: 0.3 })

    return (
        <motion.div
            ref={cardRef}
            className={`overflow-hidden border-4 border-white relative group bg-royalblue shadow-[0_0_4px_4px_#014A7F] rounded-[20px] ${classname}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
                damping: 15,
            }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px 4px #014A7F",
                transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
        >
            <motion.div className="absolute inset-0 z-0">
                <motion.img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4 },
                    }}
                />
                <motion.div
                    className="absolute inset-0 bg-royalblue/20"
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
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-white/90 px-6"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    )
}

export default function ParkingPage() {
    const [countryCodeOpen, setCountryCodeOpen] = useState(false)
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")

    // Refs for scroll animations
    const introRef = useRef(null)
    const featuresRef = useRef(null)
    const formRef = useRef(null)
    const bannerRef = useRef(null)

    // InView states
    const isIntroInView = useInView(introRef, { once: true, amount: 0.3 })
    const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.1 })
    const isFormInView = useInView(formRef, { once: true, amount: 0.2 })
    const isBannerInView = useInView(bannerRef, { once: true, amount: 0.5 })

    // Fetch countries from REST Countries API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true)
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,idd")

                if (!response.ok) {
                    throw new Error("Failed to fetch countries")
                }

                const data = await response.json()

                // Format the data to include country name, flag, and dialing code
                const formattedCountries = data
                    .filter((country) => country.idd && country.idd.root) // Filter out countries without dialing codes
                    .map((country) => {
                        const code = country.idd.root
                        return {
                            code: code,
                            country: country.name.common,
                            flag: country.flags.png,
                            officialName: country.name.official,
                        }
                    })
                    .sort((a, b) => a.country.localeCompare(b.country)) // Sort alphabetically

                setCountries(formattedCountries)

                // Set default selected country to United States if available, otherwise first country
                const us = formattedCountries.find((c) => c.country === "United States")
                setSelectedCountry(us || formattedCountries[0])

                setLoading(false)
            } catch (err) {
                console.error("Error fetching countries:", err)
                setError(err.message)
                setLoading(false)

                // Fallback to a default country if API fails
                setSelectedCountry({
                    code: "+1",
                    country: "United States",
                    flag: "https://flagcdn.com/w40/us.png",
                })
            }
        }

        fetchCountries()
    }, [])

    const toggleCountryCodeDropdown = () => {
        setCountryCodeOpen(!countryCodeOpen)
    }

    const selectCountry = (country) => {
        setSelectedCountry(country)
        setCountryCodeOpen(false)
        setSearchQuery("")
    }

    // Filter countries based on search query
    const filteredCountries = searchQuery
        ? countries.filter(
            (country) =>
                country.country.toLowerCase().includes(searchQuery.toLowerCase()) || country.code.includes(searchQuery),
        )
        : countries

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

    const formVariants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
                damping: 15,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const formItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3,
            },
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 0 15px rgba(1, 74, 127, 0.6)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
        tap: { scale: 0.98 },
    }

    const bannerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    return (
        <div className="min-h-screen font-light">
            {/* Header Section */}
            <PageHeader
                title="Parking Services"
                subtitle="Professional truck parking facility with 24/7 security and easy access"
                imageSrc="/parking-hero.png"
                imageAlt="DTL Transport truck parking facility"
                button={true}
            />

            {/* Introduction Section */}
            <motion.section
                ref={introRef}
                className="relative w-full py-8 md:py-16 overflow-hidden"
                variants={sectionVariants}
                initial="hidden"
                animate={isIntroInView ? "visible" : "hidden"}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 className="text-white text-2xl font-bold mb-4" variants={titleVariants}>
                        Secure, Spacious & Convenient Parking Solutions
                    </motion.h2>
                    <motion.p className="text-white/80 md:text-lg max-w-3xl" variants={formItemVariants}>
                        At DTL Transport, we provide a safe and professional environment for truckers and fleet operators. Whether
                        you're making a short stopover or need long-term parking, our dedicated truck parking facility is built to
                        meet your needs with security, space, and easy access.
                    </motion.p>
                </div>
            </motion.section>

            {/* Why Park with DTL Section */}
            <section ref={featuresRef} className="relative w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <motion.div
                        className="text-center mb-8"
                        variants={sectionVariants}
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                    >
                        <motion.h2 className="text-white text-3xl md:text-5xl font-bold mb-4" variants={titleVariants}>
                            Why Park with DTL?
                        </motion.h2>
                        <motion.p className="text-white/80 md:text-lg max-w-4xl mx-auto mb-8 md:mb-12" variants={formItemVariants}>
                            DTL Transport offers 24/7 guarded truck parking at our Fresno facility with controlled access, wide lanes,
                            and unbeatable convenience.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-12">
                        {/* Feature Cards */}
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                image={feature.image}
                                link={feature.link}
                                index={index}
                                classname={feature.classname}
                            />
                        ))}
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-12">
                        {features.slice(3, 5).map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                image={feature.image}
                                link={feature.link}
                                index={index + 3}
                                classname={feature.classname}
                            />
                        ))}
                    </div> */}
                    <motion.div
                        className="flex flex-col items-center justify-center mt-8 md:mt-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 50,
                            damping: 15,
                        }}
                    >
                        <div className="flex items-center flex-col md:flex-row gap-3 md:gap-6 mb-4">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 15px rgba(83, 5, 184, 0.7)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {/* <Link
                                        href="/driver"
                                        className="inline-block bg-gradient-to-r from-royalblue to-transparent shadow-[0_0_4px_#014A7F] text-white px-10 py-5 rounded-md transition w-full md:w-auto text-center text-lg"
                                    >
                                        Drive With Us
                                    </Link> */}
                                <OffsetButton href="/driver" buttonText="Drive With Us" height='h-12 md:h-16' width='w-36 md:w-44' classname="md:text-[17px]" />
                            </motion.div>
                            <motion.span
                                className="text-white text-2xl font-bold mr-2 mb-2 md:mb-0"
                                initial={{ opacity: 0 }}
                                animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Or
                            </motion.span>
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 15px rgba(83, 5, 184, 0.7)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {/* <Link
                                        href="/services"
                                        className="inline-block bg-[linear-gradient(to_right,_rgba(0,0,0,0)_50%,_#338FC1_0%,_#014A7F99_90%)] shadow-[0_0_4px_#014A7F] hover:bg-royalblue/80 text-white px-10 py-5 rounded-md transition w-full md:w-auto text-center text-lg"
                                    >
                                        Ship with Us
                                    </Link> */}
                                <OffsetButton href="/" buttonText="Ship with Us" height='h-12 md:h-16' width='w-36 md:w-44' classname="md:text-[17px]" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Reservation Form Section */}
            <motion.section
                ref={formRef}
                className="relative w-full py-8 md:py-16 overflow-hidden"
                variants={sectionVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
            >
                <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
                    <motion.div
                        className="overflow-hidden border-4 border-white bg-gradient-to-b from-black to-blue shadow-[0px_0px_40px_8px_rgba(1,74,127,0.6)] rounded-[20px] px-4 py-6 md:p-12"
                        variants={formVariants}
                    >
                        <motion.h2 className="text-white text-4xl font-bold text-center mb-8" variants={titleVariants}>
                            How to Reserve Your Space
                        </motion.h2>

                        <motion.form className="space-y-6" variants={formVariants}>
                            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={formItemVariants}>
                                {/* Driver Full Name */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="name" className="block text-white mb-2">
                                        Driver Full Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        placeholder="John"
                                        className="w-full px-4 py-3 rounded-md bg-transparent border-2 border-white text-white focus:border-royalblue/80 focus:outline-none focus:ring-2 focus:ring-royalblue/50"
                                        whileFocus={{

                                            boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                        }}
                                    />
                                </motion.div>

                                {/* Type Of Truck */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="truckType" className="block text-white mb-2">
                                        Type of Truck
                                    </label>
                                    <div className="relative">
                                        <motion.select
                                            id="truckType"
                                            defaultValue=""
                                            className="w-full px-4 py-3 rounded-md bg-transparent border-2 border-white text-white appearance-none focus:border-royalblue/80 focus:outline-none focus:ring-2 focus:ring-royalblue/50"
                                            whileFocus={{

                                                boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                            }}
                                        >
                                            <option value="" disabled className="bg-white text-royalblue">
                                                Select
                                            </option>
                                            {truckTypes.map((type, index) => (
                                                <option key={index} value={type} className="bg-[#0B0428] text-white">
                                                    {type}
                                                </option>
                                            ))}
                                        </motion.select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-royalblue w-5 h-5 pointer-events-none" />
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="email" className="block text-white mb-2">
                                        Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        placeholder="john@email.com"
                                        className="w-full px-4 py-3 rounded-md bg-transparent border-2 border-white text-white focus:border-royalblue/80 focus:outline-none focus:ring-2 focus:ring-royalblue/80"
                                        whileFocus={{

                                            boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                        }}
                                    />
                                </motion.div>

                                {/* Phone Number with Country Code Selector */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="phone" className="block text-white mb-2">
                                        Phone Number
                                    </label>
                                    <div className="flex">
                                        <div className="relative">
                                            <motion.button
                                                type="button"
                                                onClick={toggleCountryCodeDropdown}
                                                className="flex items-center justify-center px-3 py-3 border-2 border-white rounded-l-md bg-transparent text-white hover:bg-royalblue/20 transition-colors"
                                                whileHover={{ backgroundColor: "rgba(83, 5, 184, 0.2)" }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {loading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                                ) : (
                                                    selectedCountry && (
                                                        <img
                                                            src={selectedCountry.flag || "/placeholder.svg"}
                                                            alt={selectedCountry.country}
                                                            className="w-6 h-4 mr-2"
                                                        />
                                                    )
                                                )}
                                                <span>{selectedCountry?.code || "+1"}</span>
                                                <ChevronDown className="ml-1 w-4 h-4" />
                                            </motion.button>

                                            <AnimatePresence>
                                                {countryCodeOpen && (
                                                    <motion.div
                                                        className="absolute top-full left-0 mt-1 w-72 max-h-60 overflow-y-auto bg-[#0B0428] border-2 border-white rounded-md shadow-lg z-50"
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <div className="sticky top-0 bg-[#0B0428] p-2 border-b border-royalblue/50">
                                                            <div className="relative">
                                                                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                                                                <motion.input
                                                                    type="text"
                                                                    placeholder="Search countries..."
                                                                    value={searchQuery}
                                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                                    className="w-full pl-8 pr-4 py-2 rounded-md bg-transparent border-2 border-white text-white focus:border-royalblue/80 focus:outline-none"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                                    whileFocus={{

                                                                        boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="p-1">
                                                            {loading ? (
                                                                <div className="flex items-center justify-center p-4">
                                                                    <Loader2 className="w-6 h-6 animate-spin text-royalblue" />
                                                                    <span className="ml-2 text-white">Loading countries...</span>
                                                                </div>
                                                            ) : error ? (
                                                                <div className="text-red-400 p-4 text-center">
                                                                    Error loading countries. Please try again.
                                                                </div>
                                                            ) : filteredCountries.length === 0 ? (
                                                                <div className="text-white/70 p-4 text-center">
                                                                    No countries found matching "{searchQuery}"
                                                                </div>
                                                            ) : (
                                                                filteredCountries.map((country, index) => (
                                                                    <motion.button
                                                                        key={index}
                                                                        type="button"
                                                                        onClick={() => selectCountry(country)}
                                                                        className={`flex items-center w-full px-3 py-2 text-left text-white hover:bg-royalblue/20 rounded ${selectedCountry?.country === country.country ? "bg-royalblue/30" : ""
                                                                            }`}
                                                                        initial={{ opacity: 0, y: 5 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ duration: 0.2, delay: index * 0.01 }}
                                                                        whileHover={{ backgroundColor: "rgba(83, 5, 184, 0.3)" }}
                                                                    >
                                                                        <img
                                                                            src={country.flag || "/placeholder.svg"}
                                                                            alt={country.country}
                                                                            className="w-6 h-4 mr-2"
                                                                        />
                                                                        <span className="flex-1 truncate" title={country.officialName || country.country}>
                                                                            {country.country}
                                                                        </span>
                                                                        <span className="text-white/70 ml-1">{country.code}</span>
                                                                        {selectedCountry?.country === country.country && (
                                                                            <Check className="w-4 h-4 ml-2 text-royalblue" />
                                                                        )}
                                                                    </motion.button>
                                                                ))
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <motion.input
                                            type="tel"
                                            id="phone"
                                            placeholder="Phone number"
                                            className="w-full px-4 py-3 rounded-r-md bg-transparent border-2 border-white border-l-0 text-white focus:border-royalblue/80 focus:outline-none focus:ring-2 focus:ring-royalblue/50"
                                            whileFocus={{

                                                boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Parking Duration */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="duration" className="block text-white mb-2">
                                        Parking Duration
                                    </label>
                                    <div className="relative">
                                        <motion.select
                                            id="duration"
                                            defaultValue=""
                                            className="w-full px-4 py-3 rounded-md bg-transparent border-2 border-white text-white appearance-none focus:border-royalblue/80 focus:outline-none focus:ring-2 focus:ring-royalblue/50"
                                            whileFocus={{

                                                boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                            }}
                                        >
                                            <option value="" disabled className="bg-royalblue text-white">
                                                Select
                                            </option>
                                            {parkingDurations.map((duration, index) => (
                                                <option key={index} value={duration} className="bg-[#0B0428] text-white">
                                                    {duration}
                                                </option>
                                            ))}
                                        </motion.select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-royalblue w-5 h-5 pointer-events-none" />
                                    </div>
                                </motion.div>

                                {/* Company Name */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="company" className="block text-white mb-2">
                                        Company Name (Optional)
                                    </label>
                                    <motion.input
                                        type="text"
                                        id="company"
                                        placeholder="MD"
                                        className="w-full px-4 py-3 rounded-md bg-transparent border-2 border-white text-white focus:border-royalblue/80 focus:outline-none focus:ring-2 focus:ring-royalblue/50"
                                        whileFocus={{

                                            boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                        }}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Message */}
                            <motion.div variants={formItemVariants}>
                                <label htmlFor="message" className="block text-white mb-2">
                                    Message (Optional)
                                </label>
                                <motion.textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell us more"
                                    className="w-full px-4 py-3 rounded-md bg-transparent border-2 border-white text-white focus:border-royalblue/80 focus:outline-none focus:ring-2 focus:ring-royalblue/50"
                                    whileFocus={{

                                        boxShadow: "0 0 0 3px rgba(1, 74, 127, 0.6)",
                                    }}
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div className="flex justify-center mt-6" variants={formItemVariants}>
                                {/* <motion.button
                                    type="submit"
                                    className="bg-blue shadow-[0px_0px_4px_#014A7F] rounded-lg text-white px-8 py-3 transition w-48 text-center font-medium"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Book Now
                                </motion.button> */}
                                <OffsetButton buttonText="Book Now" height='h-12' width='w-36' />
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </motion.section>

            {/* Truck Driver Banner */}
            <motion.section
                ref={bannerRef}
                className="relative w-full mt-8 mb-16 overflow-hidden hidden md:block"
                variants={bannerVariants}
                initial="hidden"
                animate={isBannerInView ? "visible" : "hidden"}
            >
                <div className="max-w-6xl mx-auto relative">
                    <motion.img
                        src="/TruckDriverBanner.png"
                        alt="DTL Transport truck driver"
                        className="w-full h-auto object-cover"
                        initial={{ scale: 1.05 }}
                        animate={isBannerInView ? { scale: 1 } : { scale: 1.05 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div
                        className="absolute inset-0 flex items-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isBannerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h2
                            className="text-royalblue text-3xl md:text-4xl font-black px-4"
                            initial={{ opacity: 0 }}
                            animate={isBannerInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            DTL Transport Inc. — One Call Does It All.
                        </motion.h2>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}
