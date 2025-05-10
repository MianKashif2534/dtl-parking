/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const services = [
    {
        title: "Truckload (FTL)",
        description: "Full-capacity freight shipping with fast, direct delivery.",
        image: "/truck-about-1.png",
        link: "/services/ftl",
    },
    {
        title: "LTL",
        description: "Smart shipping for smaller loads, affordable and efficient.",
        image: "/truck-about-2.png",
        link: "/services/ltl",
    },
    {
        title: "Satellite Tracking",
        description: "Real-time GPS tracking from pickup to delivery.",
        image: "/truck-about-3.png",
        link: "/services/satellite-tracking",
    },
    {
        title: "Power Only",
        description: "We supply the tractor and driver, you supply the trailer.",
        image: "/truck-about-1.png",
        link: "/services/power-only",
    },
];

const stats = [
    {
        icon: "/stat-1.png",
        value: "300+",
        label: "Trucks",
    },
    {
        icon: "/stat-2.png",
        value: "350+",
        label: "Trailers",
    },
    {
        icon: "/stat-3.png",
        value: "90M+",
        label: "Miles Driven",
    },
    {
        icon: "/stat-4.png",
        value: "1,000+",
        label: "Happy Clients",
    },
];

export default function ServicesSection({
    showStats = true,
    heading = "Our Services",
    subheading = "Fast, Flexible, Reliable",
    description = "We offer a wide range of trucking services designed to support your logistics operations with maximum efficiency.",
    ctaText = "Explore More",
    ctaLink = "/services",
}) {
    return (
        <section className="relative z-0 w-full py-16 overflow-hidden">
            {/* Decorative SVG */}
            <div className="absolute top-0 right-0 z-10">
                <svg width="135" height="82" viewBox="0 0 135 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <rect y="38" width="64" height="44" rx="4" fill="#673DB8" fillOpacity="0.72" />
                        <rect x="64" width="66" height="34" rx="4" fill="#673DB8" fillOpacity="0.72" />
                        <path d="M69 42C69 39.7909 70.7909 38 73 38H121.789C125.747 38 127.301 43.1329 124.008 45.3282L75.2188 77.8541C72.5606 79.6263 69 77.7207 69 74.5259V42Z" fill="#734CCD" />
                    </g>
                </svg>
            </div>

            {/* Radial Gradient Blur */}
            <div className="absolute right-1/4 top-[10%] w-40 h-40 z-0 bg-[radial-gradient(41.25%_76.79%_at_37.43%_47.02%,_rgba(255,255,255,0.4)_0%,_rgba(40,4,98,0.4)_100%)] blur-[76px]" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="mb-8">
                    <h2 className="text-royalpurple text-3xl font-medium mb-2">{heading}</h2>
                    <div className="flex justify-between items-start">
                        <h3 className="text-white text-5xl font-bold mb-4">{subheading}</h3>
                        <Link href={ctaLink} className="bg-[linear-gradient(90deg,_rgba(46,27,82,0.12)_0%,_rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] rounded-[8px] text-white px-5 py-3 hover:bg-[#4D3A6E] transition">
                            {ctaText}
                        </Link>
                    </div>
                    <p className="text-white/80 text-lg max-w-2xl">
                        {description}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {services.map(({ title, description, image, link }, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden border-2 border-white relative group">
                            <div className="absolute inset-0 z-0">
                                <img src={image} alt={title} className="object-cover" />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                            <div className="relative z-10 px-5 py-8 h-full flex flex-col items-center justify-center text-center">
                                <h4 className="text-white text-2xl font-bold mb-1">{title}</h4>
                                <p className="text-white/80 text-sm mb-auto">{description}</p>
                                <div className="mt-4">
                                    <Link href={link} className="inline-block border border-white hover:bg-white/30 text-white text-sm px-4 py-1 rounded transition">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showStats && (
                    <>
                        <div className="flex justify-center items-center my-16">
                            <div className="h-2 w-48 bg-gradient-to-r from-[#964FFF] to-[#5A2F99] rounded-[20px]"></div>
                            <h2 className="text-white text-3xl font-bold mx-4">DTL BY NUMBERS</h2>
                            <div className="h-2 w-48 bg-gradient-to-r from-[#964FFF] to-[#5A2F99] rounded-[20px]"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-6 flex flex-col items-center justify-center border-2 border-[#5305B8] shadow-[0_0_16px_rgba(255,255,255,0.4)] rounded-[20px]"
                                >
                                    <div className="mb-4 w-12">
                                        <img
                                            src={stat.icon}
                                            alt={`${stat.label} Icon`}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <h3 className="text-white text-3xl font-bold mb-2">{stat.value}</h3>
                                    <p className="text-[#9747FF] text-lg uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}
