"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import OffsetButton from "./ui/OffsetButton"
import CustomBadge from "./ui/button"

export default function PageHeader({ title, subtitle, imageSrc, imageAlt, button = false }) {
    return (
        <div className={`relative w-full h-[500px] md:h-[700px] overflow-hidden mb-6 md:mb-0`}>
            <motion.div
                className="absolute inset-0 z-10 -top-[300px] md:-right-[50px] md:-left-[50px] -right-[150px] -left-[150px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* SVG with clipping path for the image */}
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1660 1375"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    {/* Define the clipping path using the SVG path */}
                    <defs>
                        <clipPath id="headerClip">
                            <motion.path
                                d="M772.389 267.061H837.481L884.829 265.27L950.05 257.172L1030.46 243.481L1110.1 229.028L1162.17 215.336L1219.61 196.32L1282.4 171.978L1326.05 152.201L1381.18 124.817L1444.74 82.2202L1493.75 44.9478L1529.75 13C1529.75 13 1774.39 693.144 1565.8 1008.24C1254.86 1477.95 380.13 1489.85 87.9322 1008.24C-87.4152 719.226 87.9322 142.531 87.9322 142.531V13C115.461 41.3141 163.922 81.5165 163.922 81.5165L230.414 126.027L297.605 159.047L391.031 200.123L457.654 218.379L528.875 236.964L595.494 248.805L678.856 260.304C687.024 260.304 761.975 267.061 772.389 267.061ZM772.389 267.061C756.053 267.061 782.804 267.061 772.389 267.061Z"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </clipPath>
                    </defs>

                    {/* Image with clipping path applied */}
                    <motion.image
                        href={imageSrc || "/placeholder.svg"}
                        width="110%"
                        height="90%"
                        x="-5%"
                        y="20%"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#headerClip)"
                        initial={{ scale: 1.1, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                    />

                    {/* Stroke around the shape */}
                    <g filter="url(#filter0_f_49_336)">
                        <motion.path
                            d="M772.389 267.061H837.481L884.829 265.27L950.05 257.172L1030.46 243.481L1110.1 229.028L1162.17 215.336L1219.61 196.32L1282.4 171.978L1326.05 152.201L1381.18 124.817L1444.74 82.2202L1493.75 44.9478L1529.75 13C1529.75 13 1774.39 693.144 1565.8 1008.24C1254.86 1477.95 380.13 1489.85 87.9322 1008.24C-87.4152 719.226 87.9322 142.531 87.9322 142.531V13C115.461 41.3141 163.922 81.5165 163.922 81.5165L230.414 126.027L297.605 159.047L391.031 200.123L457.654 218.379L528.875 236.964L595.494 248.805L678.856 260.304C687.024 260.304 761.975 267.061 772.389 267.061ZM772.389 267.061C756.053 267.061 782.804 267.061 772.389 267.061Z"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        />
                    </g>

                    {/* Filter definition */}
                    <defs>
                        <filter
                            id="filter0_f_49_336"
                            x="0"
                            y="0.0738525"
                            width="1660"
                            height="1374.93"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_49_336" />
                        </filter>
                    </defs>
                </svg>
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4 space-x-0 md:space-x-3">
                    {/* <motion.div
                        className="w-36 md:w-48 h-1 md:h-2 bg-blue rounded-2xl"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "9rem", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    ></motion.div>
                    <motion.h1
                        className="text-white text-2xl md:text-5xl font-bold md:my-4 drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
                    >
                        {title}
                    </motion.h1>
                    <motion.div
                        className="w-36 md:w-48 h-1 md:h-2 bg-blue rounded-2xl"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "9rem", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    ></motion.div> */}
                    <CustomBadge text={title} />
                </div>
                {subtitle && (
                    <motion.p
                        className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {button && (
                    <motion.div
                        className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 mt-4 md:mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* <Link
                                href="/driver"
                                className="bg-blue shadow-[0_0_4px_#014A7F] text-white px-6 py-3 rounded-md transition-all hover:shadow-[0_0_8px_#014A7F] group"
                            >
                                <span className="relative z-10">Drive With Us</span>
                            </Link> */}
                            <OffsetButton href="/driver" buttonText="Drive With Us" height='h-12' width='w-36' />
                        </motion.div>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-3 mr-2 mb-2 md:mb-0">
                            <motion.div
                                className="w-12 h-1 bg-white rounded-2xl"
                                initial={{ width: 0 }}
                                animate={{ width: "3rem" }}
                                transition={{ duration: 0.5, delay: 1.6 }}
                            ></motion.div>
                            <motion.span
                                className="text-white text-lg font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.7 }}
                            >
                                Or
                            </motion.span>
                            <motion.div
                                className="w-12 h-1 bg-white rounded-2xl"
                                initial={{ width: 0 }}
                                animate={{ width: "3rem" }}
                                transition={{ duration: 0.5, delay: 1.6 }}
                            ></motion.div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* <Link
                                href="/"
                                className="bg-royalblue shadow-[0_0_4px_#014A7F] hover:bg-blue text-white px-6 py-3 rounded-md transition-all hover:shadow-[0_0_8px_#014A7F] group"
                            >
                                <span className="relative z-10">Ship with Us</span>
                            </Link> */}
                            <OffsetButton href="/" buttonText="Ship with Us" height='h-12' width='w-36' />
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}
