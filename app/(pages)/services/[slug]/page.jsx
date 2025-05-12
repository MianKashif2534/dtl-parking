/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Check } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getServiceBySlug, getAllServiceSlugs } from "@/app/lib/services"
import PageHeader from "@/app/components/page-header"

export async function generateStaticParams() {
    const slugs = getAllServiceSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) return { title: "Service Not Found" }

    return {
        title: `${service.title} | DTL Transport Services`,
        description: service.overview,
    }
}

export default async function ServicePage({ params }) {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            {/* <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <img
                    src={service.headerImage || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">{service.title}</h1>
                </div>
            </div> */}

            <PageHeader
                title={service.title}
                subtitle=""
                imageSrc={service.headerImage}
                imageAlt={service.title}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="bg-[#1A0E2E] rounded-[24px] p-6 border-2 border-royalpurple">
                                <h2 className="text-white text-xl font-bold mb-6">DTL Services</h2>
                                <nav className="space-y-2">
                                    {getAllServiceSlugs().map((serviceSlug) => {
                                        const navService = getServiceBySlug(serviceSlug)
                                        if (!navService) return null

                                        return (
                                            <Link
                                                key={serviceSlug}
                                                href={`/services/${serviceSlug}`}
                                                className={`flex items-center justify-between p-3 rounded-lg transition-colors ${service.slug === serviceSlug
                                                    ? "bg-royalpurple text-white"
                                                    : "text-white/80 hover:bg-royalpurple/20"
                                                    }`}
                                            >
                                                <span>{navService.navTitle || navService.title}</span>
                                                <span>›</span>
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>

                            <div className="mt-8 rounded-[24px] overflow-hidden relative h-[400px] border-2 border-royalpurple">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="/contact-us.png"
                                        alt="DTL Transport trucks"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-royalpurple/10"></div>
                                </div>
                                <div className="relative z-10 px-8 flex items-center justify-center flex-col h-full">
                                    <h3 className="text-white text-2xl font-bold mb-2 text-center">
                                        Ask more about the services you need and get best offer
                                    </h3>
                                    <Link
                                        href="/contact"
                                        className="block text-center bg-royalpurple hover:bg-royalpurple/80 text-white px-4 py-2 rounded-lg mt-4 transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 font-light">
                        {/* Overview Section */}
                        <div className="mb-6">
                            <div className="inline-flex items-center mb-4 bg-royalpurple rounded-full w-fit px-4 py-1">
                                <div className="w-6 h-6 flex items-center justify-center mr-3">
                                    <img src="/icon-1.png" alt="icon" />
                                </div>
                                <h2 className="text-white text-xl font-bold">Overview</h2>
                            </div>
                            <p className="text-white/80 md:text-lg">{service.overview}</p>
                        </div>

                        {/* Why Choose Section */}
                        <div className="mb-6">
                            <div className="inline-flex items-center mb-4 bg-royalpurple rounded-full w-fit px-4 py-1">
                                <div className="w-6 h-6 flex items-center justify-center mr-3">
                                    <img src="/icon-1.png" alt="icon" />
                                </div>
                                <h2 className="text-white md:text-xl font-bold">Why Choose DTL's {service.title} Service?</h2>
                            </div>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-royalpurple rounded-full w-6 h-6 mt-1 flex items-center justify-center mr-3 shrink-0">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">{benefit.title}</h3>
                                            <p className="text-white/80 text-sm md:text-base">{benefit.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ideal For Section */}
                        <div className="mb-10">
                            <div className="inline-flex items-center mb-4 bg-royalpurple rounded-full w-fit px-4 py-1">
                                <div className="w-6 h-6 flex items-center justify-center mr-3">
                                    <img src="/icon-1.png" alt="icon" />
                                </div>
                                <h2 className="text-white text-xl font-bold">Ideal for:</h2>
                            </div>
                            <ul className="space-y-3">
                                {service.idealFor.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-white border border-royalpurple rounded-full w-5 h-5 mt-1 flex items-center justify-center mr-3">
                                            <Check className="w-3 h-3 text-royalpurple" />
                                        </div>
                                        <span className="text-white text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-6 md:mt-12 text-center">
                            <Link
                                href="/contact"
                                className="inline-block bg-royalpurple hover:bg-royalpurple/80 text-white px-8 py-3 rounded-full font-medium transition-colors text-sm md:text-base"
                            >
                                Request {service.title} Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
