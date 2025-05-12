/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

export default function PageHeader({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    button = false,
}) {
    return (
        <div className={`relative w-full h-[500px] md:h-[700px] overflow-hidden mb-6 md:mb-0`}>
            {/* Top shade */}
            {/* <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
                <Image
                    src="/header-shade.svg"
                    alt=""
                    width={1440}
                    height={1172}
                    className="w-full h-auto opacity-70 transform -translate-y-[65%] scale-x-[-1]"
                    priority
                />
            </div> */}

            {/* Bottom shade */}
            {/* <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
                <Image
                    src="/header-shade.svg"
                    alt=""
                    width={1440}
                    height={1172}
                    className="w-full h-auto opacity-70 transform translate-y-[65%]"
                    priority
                />
            </div> */}

            <div className="absolute inset-0 z-10 -top-[300px] md:-right-[50px] md:-left-[50px] -right-[150px] -left-[150px]">
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
                            <path d="M772.389 267.061H837.481L884.829 265.27L950.05 257.172L1030.46 243.481L1110.1 229.028L1162.17 215.336L1219.61 196.32L1282.4 171.978L1326.05 152.201L1381.18 124.817L1444.74 82.2202L1493.75 44.9478L1529.75 13C1529.75 13 1774.39 693.144 1565.8 1008.24C1254.86 1477.95 380.13 1489.85 87.9322 1008.24C-87.4152 719.226 87.9322 142.531 87.9322 142.531V13C115.461 41.3141 163.922 81.5165 163.922 81.5165L230.414 126.027L297.605 159.047L391.031 200.123L457.654 218.379L528.875 236.964L595.494 248.805L678.856 260.304C687.024 260.304 761.975 267.061 772.389 267.061ZM772.389 267.061C756.053 267.061 782.804 267.061 772.389 267.061Z" />
                        </clipPath>
                    </defs>

                    {/* Image with clipping path applied */}
                    <image
                        href={imageSrc || "/placeholder.svg"}
                        width="110%"
                        height="90%"
                        x="-5%"
                        y="20%"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#headerClip)"
                    />

                    {/* Overlay for better text readability */}
                    {/* <rect width="100%" height="100%" fill="rgba(0,0,0,0.3)" clipPath="url(#headerClip)" /> */}

                    {/* Stroke around the shape */}
                    <g filter="url(#filter0_f_49_336)">
                        <path
                            d="M772.389 267.061H837.481L884.829 265.27L950.05 257.172L1030.46 243.481L1110.1 229.028L1162.17 215.336L1219.61 196.32L1282.4 171.978L1326.05 152.201L1381.18 124.817L1444.74 82.2202L1493.75 44.9478L1529.75 13C1529.75 13 1774.39 693.144 1565.8 1008.24C1254.86 1477.95 380.13 1489.85 87.9322 1008.24C-87.4152 719.226 87.9322 142.531 87.9322 142.531V13C115.461 41.3141 163.922 81.5165 163.922 81.5165L230.414 126.027L297.605 159.047L391.031 200.123L457.654 218.379L528.875 236.964L595.494 248.805L678.856 260.304C687.024 260.304 761.975 267.061 772.389 267.061ZM772.389 267.061C756.053 267.061 782.804 267.061 772.389 267.061Z"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
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
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4 space-x-0 md:space-x-3">
                    <div className="w-36 md:w-48 h-1 md:h-2 bg-[linear-gradient(90deg,_#964FFF_0%,_#5A2F99_100%)] rounded-2xl"></div>
                    <h1 className="text-white text-2xl md:text-5xl font-bold md:my-4 drop-shadow-lg">{title}</h1>
                    <div className="w-36 md:w-48 h-1 md:h-2 bg-[linear-gradient(90deg,_#964FFF_0%,_#5A2F99_100%)] rounded-2xl"></div>
                </div>
                {subtitle && <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">{subtitle}</p>}

                {button && (
                    <div className="flex flex-col-reverse items-center gap-4 mt-4 md:mt-8">
                        <Link
                            href="/careers/drivers"
                            className="bg-[linear-gradient(90deg,rgba(46,27,82,0.12)_0%,rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] text-white px-6 py-3 rounded-md transition-all hover:shadow-[0_0_8px_#5A2F99] group"
                        >
                            <span className="relative z-10">Drive With Us</span>
                        </Link>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-3">
                            <div className="w-12 h-1 bg-white rounded-2xl"></div>
                            <span className="text-white text-lg font-medium">Or</span>
                            <div className="w-12 h-1 bg-white rounded-2xl"></div>
                        </div>

                        <Link
                            href="/services/shipping"
                            className="bg-royalpurple shadow-[0_0_4px_#5A2F99] hover:bg-[#4D3A6E] text-white px-6 py-3 rounded-md transition-all hover:shadow-[0_0_8px_#5A2F99] group"
                        >
                            <span className="relative z-10">Ship with Us</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
