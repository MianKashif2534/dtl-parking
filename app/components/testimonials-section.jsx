/* eslint-disable react/no-unescaped-entities */
"use client"

/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { StarPattern } from "./commitment-section"
import { motion, AnimatePresence, useInView } from "framer-motion"

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [direction, setDirection] = useState(0) // -1 for left, 1 for right
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    const testimonials = [
        {
            id: 1,
            quote:
                "DTL has been a vital part of our logistics success. Their reliable service helped us cut down on delivery delays and streamline our entire supply chain. Highly recommended for any business that values punctuality.",
            name: "Azman Jaka",
            title: "Logistics Manager",
            image: "/testimonial-1.png",
        },
        {
            id: 2,
            quote:
                "Working with DTL has transformed our shipping operations. Their attention to detail and commitment to on-time delivery has made them an invaluable partner for our growing business.",
            name: "Sarah Johnson",
            title: "Operations Director",
            image: "/testimonial-1.png",
        },
        {
            id: 3,
            quote:
                "The team at DTL consistently goes above and beyond. Their drivers are professional, their customer service is responsive, and their rates are competitive. We couldn't ask for a better logistics partner.",
            name: "Michael Chen",
            title: "Supply Chain Manager",
            image: "/testimonial-1.png",
        },
    ]

    const nextTestimonial = () => {
        setDirection(1)
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevTestimonial = () => {
        setDirection(-1)
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const cardVariants = {
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

    const titleVariants = {
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
            },
        },
    }

    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "144px",
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    }

    const starVariants = {
        hidden: { opacity: 0, rotate: -10, scale: 0.8 },
        visible: {
            opacity: 0.6,
            rotate: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
            },
        },
        floating: {
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            transition: {
                duration: 6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
            },
        },
    }

    const quoteVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    const testimonialVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 80,
                damping: 15,
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        }),
    }

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
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

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 },
        },
        tap: { scale: 0.9 },
    }

    // Start floating animation when in view
    useEffect(() => {
        if (isInView) {
            // Any additional animations that need to be triggered when in view
        }
    }, [isInView])

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
                className="hidden md:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-10"
                style={{
                    background:
                        "radial-gradient(41.25% 76.79% at 37.43% 47.02%, rgba(255, 255, 255, 0.1) 0%, rgba(40, 4, 98, 0.1) 100%)",
                    filter: "blur(100px)",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 1.5,
                        ease: "easeOut",
                    },
                }}
            ></motion.div>

            {/* Star SVG decoration */}
            <motion.div
                className="absolute right-6 bottom-0 -translate-y-1/2 z-30"
                variants={starVariants}
                animate={isInView ? ["visible", "floating"] : "hidden"}
            >
                <StarPattern />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
                <motion.div className="relative max-w-5xl mx-auto" variants={cardVariants}>
                    {/* Testimonial card */}
                    <motion.div
                        className="bg-[#0F092F] backdrop-blur-sm border-8 border-[#CCCCCCCC] rounded-lg p-2 md:p-8"
                        variants={cardVariants}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            {/* Image */}
                            <div className="hidden md:flex md:col-span-1">
                                <div className="w-full max-w-[270px] mx-auto relative">
                                    {/* Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-royalpurple w-4/5 h-[120%] left-1/4 transform -translate-x-1/4 -top-[10%] z-0"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.7, delay: 0.3 }}
                                    />

                                    {/* Image */}
                                    <AnimatePresence initial={false} mode="wait" custom={direction}>
                                        <motion.img
                                            key={currentTestimonial}
                                            custom={direction}
                                            variants={imageVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                                            alt={testimonials[currentTestimonial].name}
                                            className="w-full h-auto rounded-lg relative z-10 border-4 border-black"
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="md:col-span-2 flex flex-col items-center text-center">
                                <motion.div
                                    className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-0 mb-6"
                                    variants={titleVariants}
                                >
                                    <motion.div
                                        className="h-2 w-36 bg-gradient-to-r from-[#964FFF] to-[#5A2F99] rounded-[20px]"
                                        variants={lineVariants}
                                    ></motion.div>
                                    <motion.h2 className="text-white text-2xl md:text-4xl font-bold mx-4 py-2" variants={titleVariants}>
                                        Testimonials
                                    </motion.h2>
                                    <motion.div
                                        className="h-2 w-36 bg-gradient-to-r from-[#964FFF] to-[#5A2F99] rounded-[20px]"
                                        variants={lineVariants}
                                    ></motion.div>
                                </motion.div>
                                <motion.div
                                    className="text-royalpurple text-4xl md:text-6xl mb-4 w-full"
                                    variants={quoteVariants}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <svg width="67" height="43" viewBox="0 0 67 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.0771 0C23.603 0 30.3349 6.91262 30.3349 15.4385C30.3349 23.9643 23.3327 30.8769 14.8068 30.8769C14.7215 30.8769 14.5929 30.8654 14.5076 30.8639C17.8786 33.5483 22.1126 35.1659 26.747 35.1659C28.8792 35.1659 30.5951 36.8948 30.5951 39.0255C30.5951 41.1563 29.2233 42.8851 27.0911 42.8851C11.9576 42.8837 2.86102e-05 30.5719 2.86102e-05 15.4385C2.86102e-05 15.4356 2.86102e-05 15.4327 2.86102e-05 15.4284C2.86102e-05 6.90684 6.55415 0 15.0771 0Z"
                                            fill="#5305B8"
                                        />
                                        <path
                                            d="M51.2377 0C59.7635 0 66.507 6.91262 66.507 15.4385C66.507 23.9643 59.5106 30.8769 50.9833 30.8769C50.898 30.8769 50.7722 30.8654 50.6869 30.8639C54.058 33.5483 58.2934 35.1659 62.9278 35.1659C65.06 35.1659 66.7773 36.8948 66.7773 39.0255C66.7773 41.1563 65.3838 42.8851 63.2516 42.8851C48.1182 42.8837 36.1389 30.5719 36.1389 15.4385C36.1389 15.4356 36.1389 15.4327 36.1389 15.4284C36.1389 6.90684 42.7147 0 51.2377 0Z"
                                            fill="#5305B8"
                                        />
                                    </svg>
                                </motion.div>

                                <AnimatePresence initial={false} mode="wait" custom={direction}>
                                    <motion.p
                                        key={currentTestimonial}
                                        custom={direction}
                                        variants={testimonialVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="text-white mb-4 font-light md:text-xl px-4 md:px-8"
                                    >
                                        {testimonials[currentTestimonial].quote}
                                    </motion.p>
                                </AnimatePresence>

                                <motion.div
                                    className="text-royalpurple text-4xl md:text-6xl w-full flex justify-end"
                                    variants={quoteVariants}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <svg width="67" height="43" viewBox="0 0 67 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M51.6996 0C43.1738 0 36.4418 6.91262 36.4418 15.4385C36.4418 23.9643 43.4441 30.8769 51.9699 30.8769C52.0552 30.8769 52.1839 30.8654 52.2692 30.8639C48.8981 33.5483 44.6641 35.1659 40.0297 35.1659C37.8975 35.1659 36.1816 36.8948 36.1816 39.0255C36.1816 41.1563 37.5535 42.8851 39.6857 42.8851C54.8191 42.8837 66.7767 30.5719 66.7767 15.4385C66.7767 15.4356 66.7767 15.4327 66.7767 15.4284C66.7767 6.90684 60.2226 0 51.6996 0Z"
                                            fill="#5305B8"
                                        />
                                        <path
                                            d="M15.5397 0C7.01381 0 0.270318 6.91262 0.270318 15.4385C0.270318 23.9643 7.26678 30.8769 15.7941 30.8769C15.8794 30.8769 16.0051 30.8654 16.0904 30.8639C12.7194 33.5483 8.48393 35.1659 3.8495 35.1659C1.71731 35.1659 0 36.8948 0 39.0255C0 41.1563 1.39351 42.8851 3.5257 42.8851C18.6592 42.8837 30.6384 30.5719 30.6384 15.4385C30.6384 15.4356 30.6384 15.4327 30.6384 15.4284C30.6384 6.90684 24.0626 0 15.5397 0Z"
                                            fill="#5305B8"
                                        />
                                    </svg>
                                </motion.div>

                                <AnimatePresence initial={false} mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentTestimonial}
                                        custom={direction}
                                        variants={testimonialVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="w-full text-left"
                                    >
                                        <h4 className="text-white text-xl font-bold">{testimonials[currentTestimonial].name}</h4>
                                        <p className="text-white/70">{testimonials[currentTestimonial].title}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Button Container */}
                    <div className="relative mt-5 bottom-0 md:absolute md:bottom-12 md:right-60 md:left-auto flex gap-4 justify-center md:justify-start w-full md:w-auto">
                        {/* Previous Button */}
                        <motion.button
                            onClick={prevTestimonial}
                            className="w-12 h-12 bg-royalpurple hover:bg-royalpurple/40 rounded-full border-2 border-white flex items-center justify-center text-white transition-colors"
                            aria-label="Previous testimonial"
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <ChevronLeft className="w-6 h-6" strokeWidth={3} />
                        </motion.button>

                        {/* Next Button */}
                        <motion.button
                            onClick={nextTestimonial}
                            className="w-12 h-12 bg-white border-2 border-royalpurple hover:bg-royalpurple/40 rounded-full flex items-center justify-center text-royalpurple transition-colors"
                            aria-label="Next testimonial"
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <ChevronRight className="w-6 h-6" strokeWidth={3} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
