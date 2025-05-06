/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export const StarPattern = ({ className }) => {
    return (
        <svg
            width="136"
            height="139"
            viewBox="0 0 136 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                opacity="0.6"
                d="M30 41L38.1027 62.8973L60 71L38.1027 79.1027L30 101L21.8973 79.1027L0 71L21.8973 62.8973L30 41Z"
                fill="white"
                fillOpacity="0.16"
            />
            <path
                opacity="0.6"
                d="M106 79L114.103 100.897L136 109L114.103 117.103L106 139L97.8973 117.103L76 109L97.8973 100.897L106 79Z"
                fill="white"
                fillOpacity="0.16"
            />
            <path
                opacity="0.6"
                d="M106 0L114.103 21.8973L136 30L114.103 38.1027L106 60L97.8973 38.1027L76 30L97.8973 21.8973L106 0Z"
                fill="white"
                fillOpacity="0.16"
            />
        </svg>
    );
};

export default function CommitmentSection() {
    return (
        <section className="relative w-full py-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src="/commitment-bg.png" alt="Truck driver view" className="w-full h-full object-cover" />
            </div>

            {/* Purple Overlay Layers */}
            <div className="absolute inset-0 bg-[#231544]/10 z-10"></div>

            {/* Star SVG decoration */}
            <div className="absolute left-6 top-2/3 -translate-y-1/2 z-20">
                <StarPattern />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-30">
                <h2 className="text-3xl text-royalpurple font-medium mb-2">Our Commitment</h2>
                <h3 className="text-4xl font-bold mb-3 leading-tight">Where Reliability Meets Responsibility</h3>
                <p className="text-lg mb-10 max-w-3xl mx-auto">
                    DTL is committed to delivering your cargo with integrity, speed, and safety. Our fleet is modern, our drivers
                    are trained professionals, and our team works with laser focus to meet your delivery needs — whether it's
                    coast-to-coast or just across the state.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <div>
                        <Link
                            href="/appointment"
                            className="bg-[linear-gradient(90deg,_rgba(46,27,82,0.12)_0%,_rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32"
                        >
                            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full text-center">
                                Driver <br />
                                Apply Now
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="/appointment"
                            className="bg-royalpurple shadow-[0_0_4px_#5A2F99] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32"
                        >
                            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                Talk to a Recruiter <br />
                                1 (800) 426-2895
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
