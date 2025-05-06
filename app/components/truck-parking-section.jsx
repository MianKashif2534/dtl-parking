/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const serviceCards = [
    {
        title: "Truck Parking",
        description: "Day & night access for trucks with or without trailers.",
        image: "/Truck-parking.png",
        link: "/services/truck-parking",
    },
    {
        title: "Security Monitoring",
        description: "24-hour camera coverage and guards on patrol.",
        image: "/Security-monitoring.png",
        link: "/services/security-monitoring",
    },
    {
        title: "Magnetic Gate Entry",
        description: "Hassle-free entry with card-access technology.",
        image: "/Magnetic-gate-entry.png",
        link: "/services/gate-entry",
    },
]

function ServiceCard({ title, description, image, link }) {
    return (
        <div className="overflow-hidden border-4 border-royalpurple relative group bg-[rgba(83,5,184,0.4)] shadow-[0_0_4px_4px_#5305B8] rounded-[20px]">
            <div className="absolute inset-0 z-0">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-royalpurple/10" />
            </div>
            <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center min-h-[280px]">
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                <p className="text-white/90 px-16">{description}</p>
                <div className="mt-4">
                    <Link
                        href={link}
                        className="inline-block border border-white/40 hover:bg-white/10 text-white text-sm px-4 py-1 rounded transition"
                    >
                        Read More →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function TruckParkingSection() {
    return (
        <section className="relative w-full py-16 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center mb-8">
                    <h2 className="text-royalpurple text-5xl font-bold mb-4">
                        Truck Parking Now Available
                    </h2>
                    <p className="text-white text-lg max-w-4xl mx-auto">
                        DTL Transport offers 24/7 guarded truck parking at our Fresno facility — with controlled access,
                        wide lanes, and unbeatable convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {serviceCards.map((card, idx) => (
                        <ServiceCard key={idx} {...card} />
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <Link
                            href="/careers/drivers"
                            className="bg-[linear-gradient(90deg,rgba(46,27,82,0.12)_0%,rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] text-white px-6 py-3 rounded-md transition"
                        >
                            Drive With Us
                        </Link>
                        <span className="text-white text-lg font-medium">Or</span>
                        <Link
                            href="/services/shipping"
                            className="bg-[#5305B8] shadow-[0_0_4px_#5A2F99] hover:bg-[#4D3A6E] text-white px-6 py-3 rounded-md transition"
                        >
                            Ship with Us
                        </Link>
                    </div>
                    <Link href="/services" className="bg-[linear-gradient(90deg,rgba(46,27,82,0.12)_0%,rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] text-white px-6 py-3 rounded-md transition">
                        Explore More
                    </Link>
                </div>
            </div>
        </section>
    )
}
