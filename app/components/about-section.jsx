/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"

export default function AboutSection() {
    return (
        <section className="relative w-full py-16 overflow-hidden">
            {/* Shape element at bottom left */}
            <div className="absolute bottom-0 left-0 w-[200px] z-10">
                <svg width="135" height="82" viewBox="0 0 135 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <rect width="64" height="44" rx="4" transform="matrix(-1 0 0 1 135 38)" fill="#673DB8" fill-opacity="0.72" />
                        <rect width="66" height="34" rx="4" transform="matrix(-1 0 0 1 71 0)" fill="#673DB8" fill-opacity="0.72" />
                        <path d="M66 42C66 39.7909 64.2091 38 62 38H13.2111C9.25347 38 7.69935 43.1329 10.9923 45.3282L59.7812 77.8541C62.4394 79.6263 66 77.7207 66 74.5259V42Z" fill="#734CCD" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left content */}
                    <div className="text-white">
                        <h2 className="text-3xl text-royalpurple font-medium mb-4">About Us</h2>
                        <h3 className="text-5xl font-bold mb-6 leading-tight">
                            Delivering Excellence,
                            <br />
                            Mile After Mile
                        </h3>
                        <p className="text-lg mb-8">
                            DTL is a leading name in U.S. logistics, offering end-to-end trucking solutions tailored to your supply
                            chain needs. With years of experience and a customer-first mindset, we ensure your freight arrives safely
                            and on time, every time.
                        </p>
                        <Link
                            href="/about"
                            className="inline-block bg-[linear-gradient(90deg,_rgba(46,27,82,0.12)_0%,_rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] rounded-[8px] text-white px-8 py-3 transition-colors"
                        >
                            Read More
                        </Link>
                    </div>

                    {/* Right image collage */}
                    <div className="relative">
                        <div className="relative w-full h-[500px]">
                            {/* Purple highlight line */}
                            <div className="absolute top-0 right-[40%] left-0 h-4 bg-[linear-gradient(90deg,_#964FFF_0%,_#5A2F99_100%)] rounded-full"></div>
                            <div className="absolute bottom-8 right-0 w-4 h-3/4 bg-[linear-gradient(90deg,_#964FFF_0%,_#5A2F99_100%)] rounded-full"></div>

                            {/* Image collage */}
                            <div className="absolute top-0 right-[30%] z-20 w-56 h-56 rounded-2xl border-2 border-white overflow-hidden">
                                <img src="/truck-about-1.png" alt="DTL Truck" fill className="object-cover scale-105" />
                            </div>

                            <div className="absolute top-8 right-0 z-0 w-56 h-56 rounded-2xl overflow-hidden">
                                <img src="/truck-about-2.png" alt="DTL Truck Fleet" fill className="object-cover" />
                            </div>

                            <div className="absolute top-[200px] right-[15%] w-56 h-56 rounded-2xl border-2 border-white overflow-hidden">
                                <img src="/truck-about-3.png" alt="DTL Facility" fill className="object-cover" />
                            </div>

                            {/* Running since badge */}
                            <div className="absolute bottom-8 right-6 bg-[radial-gradient(50%_50%_at_50%_50%,_#5305B8_0%,_#250252_100%)] border-2 border-white/50 shadow-[inset_0_0_80px_#5305B8] text-white px-6 py-4 rounded-2xl">
                                <p className="text-center">
                                    <span className="block text-2xl font-bold">Running DLT</span>
                                    <span className="block text-2xl font-bold">Since 2013</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
