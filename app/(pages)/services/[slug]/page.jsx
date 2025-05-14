/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs } from "@/app/lib/services"
import PageHeader from "@/app/components/page-header"
import ServiceContent from "./service-content"

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
    const allServices = getAllServiceSlugs()
        .map((serviceSlug) => getServiceBySlug(serviceSlug))
        .filter(Boolean)

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <PageHeader title={service.title} subtitle="" imageSrc={service.headerImage} imageAlt={service.title} />

            <ServiceContent service={service} allServices={allServices} />
        </div>
    )
}
