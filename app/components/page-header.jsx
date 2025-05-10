/* eslint-disable @next/next/no-img-element */


export default function PageHeader({ title, subtitle, imageSrc, imageAlt, height = "h-[700px]" }) {
    return (
        <div className={`relative w-full ${height} overflow-hidden`}>


            <div className="absolute inset-0 z-10 -top-[300px] -right-[50px] -left-[50px]">
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
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">{title}</h1>
                {subtitle && <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">{subtitle}</p>}
            </div>
        </div>
    )
}
