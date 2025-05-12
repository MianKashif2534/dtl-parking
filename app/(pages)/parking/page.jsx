/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ChevronDown, Check, Search, Loader2 } from "lucide-react"
import PageHeader from "@/app/components/page-header"
import { useState, useEffect } from "react"

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
function FeatureCard({ title, description, image, link }) {
    return (
        <div className="overflow-hidden border-4 border-royalpurple relative group bg-royalpurple shadow-[0_0_4px_4px_#5305B8] rounded-[20px]">
            <div className="absolute inset-0 z-0">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-royalpurple/20" />
            </div>
            <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center min-h-[280px]">
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white/90 px-6">{description}</p>
                {/* <div className="mt-4">
                    <Link
                        href={link}
                        className="inline-block border border-white/40 hover:bg-white/10 text-white text-sm px-4 py-1 rounded transition"
                    >
                        Read More →
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default function ParkingPage() {

    const [countryCodeOpen, setCountryCodeOpen] = useState(false)
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")

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
                        const code = country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] || "" : "")
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

    return (
        <div className="min-h-screen font-light">
            {/* Header Section */}
            <PageHeader
                title="Truck Parking Services at DTL Transport"
                subtitle="Professional truck parking facility with 24/7 security and easy access"
                imageSrc="/parking-hero.png"
                imageAlt="DTL Transport truck parking facility"
            />

            {/* Introduction Section */}
            <section className="relative w-full py-8 md:py-16 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-white text-2xl font-bold mb-4">Secure, Spacious & Convenient Parking Solutions</h2>
                    <p className="text-white/90 md:text-lg max-w-3xl">
                        At DTL Transport, we provide a safe and professional environment for truckers and fleet operators. Whether
                        you're making a short stopover or need long-term parking, our dedicated truck parking facility is built to
                        meet your needs with security, space, and easy access.
                    </p>
                </div>
            </section>

            {/* Why Park with DTL Section */}
            <section className="relative w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="text-center mb-8">
                        <h2 className="text-purple text-3xl md:text-5xl font-bold mb-4">Why Park with DTL?</h2>
                        <p className="text-white/90 md:text-lg max-w-4xl mx-auto mb-8 md:mb-12">
                            DTL Transport offers 24/7 guarded truck parking at our Fresno facility with controlled access, wide lanes,
                            and unbeatable convenience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Feature Cards */}
                        {features.slice(0, 3).map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                image={feature.image}
                                link={feature.link}
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-12">
                        {/* Additional Feature Cards */}
                        {features.slice(3, 5).map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                image={feature.image}
                                link={feature.link}
                            />
                        ))}
                        <div className="flex flex-col items-center justify-center mt-6 md:mt-0">
                            <div className="flex flex-col items-center gap-6 mb-4">
                                <Link
                                    href="/careers/drivers"
                                    className="bg-[linear-gradient(90deg,rgba(46,27,82,0.12)_0%,rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] text-white px-10 py-5 rounded-md transition w-full md:w-auto text-center text-lg"
                                >
                                    Drive With Us
                                </Link>
                                <span className="text-white text-2xl font-bold">Or</span>
                                <Link
                                    href="/services/shipping"
                                    className="bg-royalpurple shadow-[0_0_4px_#5A2F99] hover:bg-royalpurple/80 text-white px-10 py-5 rounded-md transition w-full md:w-auto text-center text-lg"
                                >
                                    Ship with Us
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Reservation Form Section */}
            <section className="relative w-full py-8 md:py-16 overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="overflow-hidden border-2 border-royalpurple bg-gradient-to-b from-black to-[#250252] shadow-[0px_0px_80px_16px_rgba(147,122,65,0.25)] rounded-[20px] px-4 py-6 md:p-12">
                        <h2 className="text-royalpurple text-4xl font-bold text-center mb-8">How to Reserve Your Space</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Driver Full Name */}
                                <div>
                                    <label htmlFor="name" className="block text-white mb-2">
                                        Driver Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John"
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-royalpurple text-white focus:border-royalpurple/80 focus:outline-none focus:ring-2 focus:ring-royalpurple/50"
                                    />
                                </div>

                                {/* Type Of Truck */}
                                <div>
                                    <label htmlFor="truckType" className="block text-white mb-2">
                                        Type Of Truck
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="truckType"
                                            defaultValue=""
                                            className="w-full px-4 py-3 rounded-md bg-transparent border border-royalpurple text-white appearance-none focus:border-royalpurple/80 focus:outline-none focus:ring-2 focus:ring-royalpurple/50"
                                        >
                                            <option value="" disabled className="bg-[#0B0428]">
                                                Select
                                            </option>
                                            {truckTypes.map((type, index) => (
                                                <option key={index} value={type} className="bg-[#0B0428]">
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-royalpurple w-5 h-5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-white mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@email.com"
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-royalpurple text-white focus:border-royalpurple/80 focus:outline-none focus:ring-2 focus:ring-royalpurple/50"
                                    />
                                </div>

                                {/* Phone Number with Country Code Selector */}
                                <div>
                                    <label htmlFor="phone" className="block text-white mb-2">
                                        Phone Number
                                    </label>
                                    <div className="flex">
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={toggleCountryCodeDropdown}
                                                className="flex items-center justify-center px-3 py-3 border border-royalpurple rounded-l-md bg-transparent text-white hover:bg-royalpurple/20 transition-colors"
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
                                            </button>

                                            {countryCodeOpen && (
                                                <div className="absolute top-full left-0 mt-1 w-72 max-h-60 overflow-y-auto bg-[#0B0428] border border-royalpurple rounded-md shadow-lg z-50">
                                                    <div className="sticky top-0 bg-[#0B0428] p-2 border-b border-royalpurple/50">
                                                        <div className="relative">
                                                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                                                            <input
                                                                type="text"
                                                                placeholder="Search countries..."
                                                                value={searchQuery}
                                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                                className="w-full pl-8 pr-4 py-2 rounded-md bg-transparent border border-royalpurple text-white focus:border-royalpurple/80 focus:outline-none"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="p-1">
                                                        {loading ? (
                                                            <div className="flex items-center justify-center p-4">
                                                                <Loader2 className="w-6 h-6 animate-spin text-royalpurple" />
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
                                                                <button
                                                                    key={index}
                                                                    type="button"
                                                                    onClick={() => selectCountry(country)}
                                                                    className={`flex items-center w-full px-3 py-2 text-left text-white hover:bg-royalpurple/20 rounded ${selectedCountry?.country === country.country ? "bg-royalpurple/30" : ""
                                                                        }`}
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
                                                                        <Check className="w-4 h-4 ml-2 text-royalpurple" />
                                                                    )}
                                                                </button>
                                                            ))
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Phone number"
                                            className="w-full px-4 py-3 rounded-r-md bg-transparent border border-royalpurple border-l-0 text-white focus:border-royalpurple/80 focus:outline-none focus:ring-2 focus:ring-royalpurple/50"
                                        />
                                    </div>
                                </div>

                                {/* Parking Duration */}
                                <div>
                                    <label htmlFor="duration" className="block text-white mb-2">
                                        Parking Duration
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="duration"
                                            defaultValue=""
                                            className="w-full px-4 py-3 rounded-md bg-transparent border border-royalpurple text-white appearance-none focus:border-royalpurple/80 focus:outline-none focus:ring-2 focus:ring-royalpurple/50"
                                        >
                                            <option value="" disabled className="bg-[#0B0428]">
                                                Select
                                            </option>
                                            {parkingDurations.map((duration, index) => (
                                                <option key={index} value={duration} className="bg-[#0B0428]">
                                                    {duration}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-royalpurple w-5 h-5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Company Name */}
                                <div>
                                    <label htmlFor="company" className="block text-white mb-2">
                                        Company Name (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        placeholder="MD"
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-royalpurple text-white focus:border-royalpurple/80 focus:outline-none focus:ring-2 focus:ring-royalpurple/50"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-white mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell us more"
                                    className="w-full px-4 py-3 rounded-md bg-transparent border border-royalpurple text-white focus:border-royalpurple/80 focus:outline-none focus:ring-2 focus:ring-royalpurple/50"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[rgba(46,27,82,0.12)] to-[rgba(103,61,184,0.72)] shadow-[0px_0px_4px_#5A2F99] rounded-lg text-white px-8 py-3 transition w-48 text-center font-medium"
                                >
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Truck Driver Banner */}
            <section className="relative w-full mt-8 mb-16 overflow-hidden hidden md:block">
                <div className="max-w-6xl mx-auto relative">
                    <img
                        src="/TruckDriverBanner.png"
                        alt="DTL Transport truck driver"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex items-center">
                        <h2 className="text-royalpurple text-3xl md:text-4xl font-black px-4">
                            DTL Transport, Inc. — One Call Does It All.
                        </h2>
                    </div>
                </div>
            </section>

        </div >
    )
}
