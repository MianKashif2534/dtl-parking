"use client"

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import PageHeader from "@/app/components/page-header"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const panelData = [
    {
        // image: "/about/image-11.png",
        alt: "A New Era of Transport",
        title: "A New Era of Transport Begins",
        content: [
            "In 2003, Lakhvir Singh, a veteran in the trucking industry, recognized the need for a reliable carrier in the Central Valley. Using his previous experience in logistics and his strong ties to the community, he founded DTL Transport with a vision to provide exceptional service and set a new standard in the industry.",
            "With a growing fleet, Lakhvir Singh built a reputation for strong customer relationships, on-time deliveries, and a commitment to excellence that continues to drive our business model today.",
        ],
    },
    // {
    //     image: "/about/image-2.png",
    //     alt: "Scaling the Fleet",
    //     title: "Scaling the Fleet — Built on Innovation",
    //     content: [
    //         "By 2015, DTL Transport transformed from boutique to mid-sized carrier, acquiring a modern fleet of refrigerated trucks and expanding operations across several states. This growth coincided with the company's commitment to sustainability and industry compliance.",
    //     ],
    // },
    {
        image: "/about/image-3.png",
        alt: "Safety First",
        title: "Safety First. Service Always.",
        content: [
            "With growth came the need for a robust safety and compliance program. Under the direction of our Transportation & Safety Manager program, DTL implemented comprehensive training, vehicle maintenance, and driver wellness protocols.",
        ],
    },
    // {
    //     image: "/about/image-4.png",
    //     alt: "Trusted Partner",
    //     title: "A Trusted Partner in Freight",
    //     content: [
    //         "Today, DTL Transport is a trusted partner to major shippers across the U.S. providing reliable service, clear communication, and timely deliveries. From agricultural products to consumer goods and industrial supplies, DTL has partnered with shippers of all sizes to find the reliable freight solutions.",
    //     ],
    // },
]

const InfoPanel = ({ image, alt, title, content, index }) => {
    const panelRef = useRef(null)
    const isInView = useInView(panelRef, { once: true, amount: 0.3 })

    return (
        <motion.div
            ref={panelRef}
            className="relative w-full h-auto md:h-[600px] overflow-hidden border-4 rounded-[24px] border-royalblue"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
            <motion.img
                src={image}
                alt={alt}
                className="object-cover brightness-10 scale-105 w-auto md:w-full h-full"
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1.05 } : { scale: 1.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* 👉 Overlay color layer only for index === 0 */}
            {index === 0 && (
                <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />
            )}

            <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-end z-20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
                <motion.h3
                    className="md:text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                    {title}
                </motion.h3>
                {content.map((text, idx) => (
                    <motion.p
                        key={idx}
                        className="text-white text-xs md:text-sm mb-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 + idx * 0.1 }}
                    >
                        {text}
                    </motion.p>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default function AboutPageClient() {
    const founderRef = useRef(null)
    const historyRef = useRef(null)
    const taglineRef = useRef(null)
    const isFounderInView = useInView(founderRef, { once: true, amount: 0.3 })
    const isHistoryInView = useInView(historyRef, { once: true, amount: 0.1 })
    const isTaglineInView = useInView(taglineRef, { once: true, amount: 0.5 })

    return (
        <div className="relative">
            <motion.div
                className="absolute top-[500px] md:top-[700px] right-0 w-full -z-10 pointer-events-none"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                <Image
                    src="/header-shade1.svg"
                    alt=""
                    width={1440}
                    height={1172}
                    className="w-full h-auto opacity-80 transform -translate-y-[65%] scale-x-[-1]"
                    priority
                />
            </motion.div>

            <PageHeader
                title="About Us"
                subtitle=""
                imageSrc="/about-hero.png"
                imageAlt="DTL Transport truck parking facility"
                button={true}
            />

            <motion.section
                ref={founderRef}
                className="text-white py-8 md:py-16 px-4 md:px-8 lg:px-16"
                initial={{ opacity: 0 }}
                animate={isFounderInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                        {/* Left Section */}
                        <motion.div
                            className="md:w-2/5 flex justify-center md:justify-start md:items-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isFounderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="w-full h-full flex justify-center items-center">
                                <motion.div
                                    className="overflow-hidden"
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    <Image
                                        src="/Uncle-Image1.png"
                                        alt="Founder portrait"
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Section */}
                        <motion.div
                            className="md:w-3/5"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isFounderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                animate={isFounderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Built on Legacy. Driven by Purpose.
                            </motion.h2>
                            <motion.p
                                className="text-sm md:text-lg font-extralight leading-relaxed mb-4 text-white/80"
                                initial={{ opacity: 0 }}
                                animate={isFounderInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                In 1991, Teja Singh arrived in the United States from Punjab, India, with a vision to build a better
                                life for his family. Though his roots were in farming, his ambition led him into the world of logistics.
                                Settling in Fresno, California for its familiar climate, he earned his Commercial Drivers License (CDL)
                                and began hauling produce across the country — from the West Coast to the East.
                            </motion.p>
                            <motion.p
                                className="text-sm md:text-lg font-extralight leading-relaxed text-white/80"
                                initial={{ opacity: 0 }}
                                animate={isFounderInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                It didn't take long for Mr. Singh to recognize a significant gap in communication within the trucking
                                industry, especially for immigrant drivers struggling with language and logistics coordination. His
                                instinct to help others led to a greater calling — organizing routes, dispatching trucks, and soon,
                                founding Dosanjh Truck Lines, a company built on trust, clarity, and connection.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <section ref={historyRef} className="px-4 md:px-8 lg:px-16 mb-8 md:mb-0">
                <div className="container mx-auto max-w-6xl">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHistoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 15 }}
                    >
                        OUR HISTORY
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {panelData.map((panel, index) => (
                            <InfoPanel key={index} {...panel} index={index} />
                        ))}
                    </div>

                    {/* Company Tagline */}
                    <motion.div
                        ref={taglineRef}
                        className="my-8 text-royalblue border-l-8 border-l-royalblue hidden md:block"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isTaglineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50, damping: 15 }}
                    >
                        <div className="relative">
                            <motion.img
                                src="/about/banner.png"
                                alt=""
                                className="w-full"
                                initial={{ scale: 1.05 }}
                                animate={isTaglineInView ? { scale: 1 } : { scale: 1.05 }}
                                transition={{ duration: 1 }}
                            />
                            <motion.div
                                className="absolute top-14 left-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isTaglineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <motion.p
                                    className="text-4xl font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={isTaglineInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    DTL Transport Inc. — One Call Does It All.
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
