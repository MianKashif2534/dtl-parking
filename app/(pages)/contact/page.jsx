'use client'

/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHeader from '@/app/components/page-header'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        agreeToTerms: false,
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ text: '', type: '' })

    // Refs for scroll animations
    const formRef = useRef(null)
    const mapRef = useRef(null)
    const contactInfoRef = useRef(null)
    const bannerRef = useRef(null)

    // InView states
    const isFormInView = useInView(formRef, { once: true, amount: 0.2 })
    const isMapInView = useInView(mapRef, { once: true, amount: 0.3 })
    const isContactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.3 })
    const isBannerInView = useInView(bannerRef, { once: true, amount: 0.3 })

    const services = [
        'Truckload (FTL)',
        'Less Than Truckload (LTL)',
        'Satellite Tracking',
        'Power Only',
        'Truck Parking',
        'Driver Application',
        'General Inquiry',
    ]

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage({ text: '', type: '' })

        try {
            const formDataToSend = new FormData()
            formDataToSend.append('access_key', '93119b65-2a92-437e-a3ee-3fa223728d66')

            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value)
            })

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend,
            })

            const result = await response.json()

            if (response.status === 200) {
                setMessage({ text: result.message, type: 'success' })
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                    agreeToTerms: false,
                })
            } else {
                setMessage({
                    text: result.message || 'Something went wrong!',
                    type: 'error',
                })
            }
        } catch (error) {
            console.error(error)
            setMessage({ text: 'Something went wrong!', type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 50,
                damping: 15,
            },
        },
    }

    const formVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const inputVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    }

    const mapVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 50,
                damping: 15,
            },
        },
    }

    const contactInfoVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    }

    const contactItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    }

    const bannerVariants = {
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

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Get in Touch with DTL Transport"
                subtitle="Reliable Support, Clear Communication, Always Here to Help"
                imageSrc="/contact-hero.png"
                imageAlt="DTL Transport contact"
                button={true}
            />

            {/* Introduction Section */}
            <motion.section
                className="relative w-full py-8 md:py-16 overflow-hidden"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2" variants={inputVariants}>
                        Get in Touch with DTL Transport
                    </motion.h1>
                    <motion.h2 className="text-white/90 text-xl md:text-2xl font-semibold mb-3" variants={inputVariants}>
                        Reliable Support, Clear Communication, Always Here to Help
                    </motion.h2>
                    <motion.p className="text-white/80 md:text-lg font-light leading-relaxed" variants={inputVariants}>
                        At DTL Transport, we value open communication and dependable support. Whether you're a driver, fleet
                        manager, or a logistics partner, our team is here to answer your questions and assist with your
                        transportation, parking, or service needs. Reach out to us today — we're just a call or message away.
                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Form and Map Section */}
            <section className="relative w-full py-4 md:py-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Contact Form */}
                        <motion.div
                            ref={formRef}
                            className="backdrop-blur-sm rounded-3xl p-6 md:p-8 border-[3px] border-white h-full"
                            variants={formVariants}
                            initial="hidden"
                            animate={isFormInView ? 'visible' : 'hidden'}
                        >
                            <motion.h2
                                className="text-white text-2xl md:text-3xl font-bold mb-6"
                                variants={inputVariants}
                            >
                                Send Us a Message
                            </motion.h2>

                            {message.text && (
                                <motion.div
                                    className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                        }`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {message.text}
                                </motion.div>
                            )}

                            <motion.form onSubmit={handleSubmit} className="space-y-6" variants={formVariants}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <motion.div variants={inputVariants}>
                                        <label htmlFor="name" className="block text-white mb-2 font-medium">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-white/70 focus:border-royalblue focus:outline-none focus:ring-2 focus:ring-royalblue/50 transition-colors"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </motion.div>

                                    {/* Email */}
                                    <motion.div variants={inputVariants}>
                                        <label htmlFor="email" className="block text-white mb-2 font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-white/70 focus:border-royalblue focus:outline-none focus:ring-2 focus:ring-royalblue/50 transition-colors"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone */}
                                    <motion.div variants={inputVariants}>
                                        <label htmlFor="phone" className="block text-white mb-2 font-medium">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-white/70 focus:border-royalblue focus:outline-none focus:ring-2 focus:ring-royalblue/50 transition-colors"
                                            placeholder="(555) 123-4567"
                                            required
                                        />
                                    </motion.div>

                                    {/* Service Selection */}
                                    <motion.div variants={inputVariants}>
                                        <label htmlFor="service" className="block text-white mb-2 font-medium">
                                            Select Service
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white appearance-none focus:border-royalblue focus:outline-none focus:ring-2 focus:ring-royalblue/50 transition-colors"
                                                required
                                            >
                                                <option value="" className="bg-blue text-white">
                                                    Choose your service
                                                </option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service} className="bg-blue text-white">
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Message */}
                                <motion.div variants={inputVariants}>
                                    <label htmlFor="message" className="block text-white mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-white/70 focus:border-royalblue focus:outline-none focus:ring-2 focus:ring-royalblue/50 transition-colors resize-vertical"
                                        placeholder="Tell us how we can help you..."
                                        required
                                    />
                                </motion.div>

                                {/* Terms Agreement */}
                                <motion.div className="flex items-start space-x-3" variants={inputVariants}>
                                    <input
                                        type="checkbox"
                                        id="agreeToTerms"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 text-royalblue bg-transparent border-2 border-white rounded focus:ring-royalblue focus:ring-2"
                                        required
                                    />
                                    <label htmlFor="agreeToTerms" className="text-white/80 text-sm">
                                        I agree to the Terms of Service and Privacy Policy.
                                    </label>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div variants={inputVariants}>
                                    <motion.button
                                        type="submit"
                                        disabled={loading || !formData.agreeToTerms}
                                        className="w-full bg-[#212950] text-white font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {loading ? 'Sending...' : 'Book Appointment'}
                                    </motion.button>
                                </motion.div>
                            </motion.form>
                        </motion.div>

                        {/* Map and Contact Info */}
                        <div className="space-y-8">
                            {/* Map */}
                            <motion.div
                                ref={mapRef}
                                className="backdrop-blur-sm rounded-3xl p-6 border-[3px] border-white overflow-hidden"
                                variants={mapVariants}
                                initial="hidden"
                                animate={isMapInView ? 'visible' : 'hidden'}
                            >
                                <motion.h3
                                    className="text-white text-xl font-bold mb-4"
                                    variants={inputVariants}
                                >
                                    Our Location
                                </motion.h3>
                                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-white">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3194.8156785108604!2d-119.8685557!3d36.7989695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80946611bf14e351%3A0x97b5901315290076!2sDTL%20Transport%2C%20Inc.!5e0!3m2!1sen!2s!4v1750957996521!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="DTL Transport Location"
                                    ></iframe>
                                </div>
                            </motion.div>

                            {/* Contact Information */}
                            <motion.div
                                ref={contactInfoRef}
                                className="backdrop-blur-sm rounded-3xl p-6 border-[3px] border-white"
                                variants={contactInfoVariants}
                                initial="hidden"
                                animate={isContactInfoInView ? 'visible' : 'hidden'}
                            >
                                <motion.h3
                                    className="text-white text-xl font-bold mb-6"
                                    variants={contactItemVariants}
                                >
                                    Contact Information
                                </motion.h3>
                                <div className="space-y-4 grid grid-cols-1 md:grid-cols-2">
                                    <motion.div className="flex items-center space-x-4" variants={contactItemVariants}>
                                        <div className="bg-royalblue rounded-full p-3">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Address</p>
                                            <a
                                                href="https://maps.app.goo.gl/RHuTBK8YXki5nd8n6"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/80 hover:underline"
                                            >
                                                4375 N Golden State Blvd, Fresno, CA 93722, USA
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className="flex items-center space-x-4" variants={contactItemVariants}>
                                        <div className="bg-royalblue rounded-full p-3">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Phone</p>
                                            <a href="tel:+18004262895" className="text-white/80 hover:underline transition-colors">
                                                1 (800) 426-2895
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className="flex items-center space-x-4" variants={contactItemVariants}>
                                        <div className="bg-royalblue rounded-full p-3">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Email</p>
                                            <a href="mailto:lucky@dtltrans.com" className="text-white/80 hover:underline transition-colors">
                                                lucky@dtltrans.com
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className="flex items-center space-x-4" variants={contactItemVariants}>
                                        <div className="bg-royalblue rounded-full p-3">
                                            <Clock className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Business Hours</p>
                                            <p className="text-white/80">24/7 Dispatch Available</p>
                                            <p className="text-white/80 text-sm">Office: Mon-Fri 8AM-6PM PST</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

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
                        className="w-full h-auto object-cover rounded-2xl"
                        initial={{ scale: 1.05 }}
                        animate={isBannerInView ? { scale: 1 } : { scale: 1.05 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isBannerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h2
                            className="text-royalblue text-3xl md:text-4xl lg:text-5xl font-black text-center px-4 drop-shadow-2xl"
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
