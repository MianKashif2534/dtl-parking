/* eslint-disable react/no-unescaped-entities */

import PageHeader from "@/app/components/page-header";
import ServicesSection from "@/app/components/services-section";
import { Check } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Our Services"
                subtitle="Comprehensive freight solutions tailored to your business needs"
                imageSrc="/service-hero.png"
                imageAlt="DTL Transport truck on a mountain road"
            />
            <ServicesSection
                showStats={false}
                heading="Our Services"
                subheading="Reliable. Flexible. Always on Time."
                description="Our Single Driver services are ideal for standard delivery schedules and flexible pickup windows. DTL Transport’s experienced solo drivers are trained to handle a wide range of cargo types with professionalism and care."
                ctaText="Drive With Us"
                ctaLink="/services"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Reliable Freight Solutions Section */}
                <div className="mb-16">
                    <h1 className="text-white text-4xl font-bold mb-6 text-center">
                        Reliable Freight Solutions — Coast to Coast
                    </h1>
                    <p className="text-white/80 text-lg max-w-4xl mx-auto text-center">
                        At DTL Transport, we offer a wide range of transportation solutions to meet your delivery requirements. From
                        temperature-sensitive produce to dry goods, and from flexible solo routes to high-speed team driving, our
                        goal is simple — to deliver safely, efficiently, and on time. Backed by cutting-edge technology, expert
                        drivers, and real-time logistics coordination, we make shipping seamless.
                    </p>
                </div>

                {/* Services Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-8">
                    {/* Team Driver Image */}
                    <div className="row-span-2">
                        <div className="rounded-[24px] overflow-hidden border border-royalpurple h-full">
                            <img
                                src="/Team-drivers-working-together.png"
                                alt="Team drivers working together"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Team Driver Content */}
                    <div>
                        <h2 className="text-white text-3xl font-bold mb-4">Team Driver Services</h2>
                        <p className="text-white/80 mb-6">
                            For urgent or high-priority cargo, our Team Drivers work in shifts to reduce transit times and provide
                            around-the-clock service. This is the best option for perishable or time-sensitive freight.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Non-stop driving rotation",
                                "Optimized for produce and frozen items",
                                "Trusted team with years of experience",
                                "High-speed delivery across the country",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="bg-white border-2 border-royalpurple rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3">
                                        <Check className="w-4 h-4 text-royalpurple" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Single Driver Content */}
                    <div className="col-start-1 row-start-3">
                        <h2 className="text-white text-3xl font-bold mb-4">Single Driver Services</h2>
                        <p className="text-white/80 mb-6">
                            Our Single Driver services are perfect for flexible pickup windows and regular delivery appointments.
                            Whether it's local or long haul, we guarantee professionalism and care from pickup to drop-off.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Ideal for firm or flexible schedules",
                                "Available nationwide",
                                "GPS-equipped trucks for live tracking",
                                "Reliable quotes and dedicated dispatch support",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="bg-white border-2 border-royalpurple rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3">
                                        <Check className="w-4 h-4 text-royalpurple" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Single Driver Image */}
                    <div className="row-span-2 col-start-2 row-start-2">
                        <div className="rounded-[24px] overflow-hidden border border-royalpurple h-full">
                            <img
                                src="/Single-driver-in-truck.png"
                                alt="Single driver in truck"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Temperature-Controlled Freight Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div>
                        <div className="rounded-[24px] overflow-hidden border border-royalpurple">
                            <img
                                src="/Thermo-King.png"
                                alt="Thermo King refrigerated trailer unit"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white text-3xl font-bold mb-4">Temperature-Controlled Freight</h2>
                        <p className="text-white/80 mb-6">
                            DTL Transport specializes in climate-controlled shipping to protect your produce, frozen goods, and
                            Protect from freeze (PFF) cargo. We use Thermo King Whisper TRUs, with an average age under 1 year,
                            ensuring top-tier freshness and performance.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Ideal for produce, frozen, and PFF freight",
                                "All trucks equipped with new, eco-compliant TRUs",
                                "Fully registered with California ARB — ARB numbers available on request",
                                "Highest safety and compliance standards for food-grade shipping",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="bg-white border-2 border-royalpurple rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3">
                                        <Check className="w-4 h-4 text-royalpurple" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Dry Freight Services Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="md:order-2">
                        <div className="rounded-[24px] overflow-hidden border border-royalpurple">
                            <img
                                src="/semi-truck.png"
                                alt="DTL Transport semi-truck"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:order-1">
                        <h2 className="text-white text-3xl font-bold mb-4">Dry Freight Services</h2>
                        <p className="text-white/80 mb-6">
                            DTL Transport treats every dry shipment with the same care and urgency as time-sensitive loads. Our modern
                            dry vans and reefers average less than 2 years old, ensuring your freight travels in top condition.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Ideal for packaged, palletized, or general cargo",
                                "Fast and efficient delivery from West to East Coast",
                                "Competitive pricing and tailored service",
                                "Hands-on dispatch support to plan your route",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="bg-white border-2 border-royalpurple rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3">
                                        <Check className="w-4 h-4 text-royalpurple" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Nationwide Logistics Coverage Section */}
            <div className="relative overflow-hidden border-4 border-royalpurple mt-16">
                <img
                    src="/nationwide-logistics-coverage-map.png"
                    alt="Nationwide logistics coverage map"
                    className="w-full h-screen 2xl:h-[800px] scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
                    <h2 className="text-royalpurple text-2xl md:text-3xl font-bold mb-6">Nationwide Logistics Coverage</h2>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">
                        From Coast to Coast — We've Got You Covered
                    </h3>
                    <p className="text-white text-sm md:text-base max-w-3xl text-center">
                        With pickups typically from the West Coast and deliveries spanning the East Coast and all regions in
                        between, DTL Transport is your partner in nationwide logistics. Our experienced team uses modern tech and
                        industry insight to coordinate the safest and most efficient freight movement for your business.
                    </p>
                </div>
            </div>
        </div>
    )
}
