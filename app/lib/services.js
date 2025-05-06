const services= [
    {
        slug: "ftl",
        title: "Truckload (FTL)",
        navTitle: "Truckload (FTL)",
        headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o004wOTWIfnKr2scW1aoJef79AQRvj.png",
        overview:
            "DTL Transport's Full Truckload (FTL) service is designed to provide fast, secure, and reliable transportation for shipments that require the exclusive use of an entire trailer. Whether you're moving freight across states or coast-to-coast, our FTL service gives cargo transit directly from pickup to destination without intermediate stops, minimizing handling and transit times.",
        benefits: [
            {
                title: "Dedicated Capacity",
                description:
                    "You get exclusive use of a 53' dry van or reefer, ensuring your freight is never mixed with other shipments.",
            },
            {
                title: "Faster Transit Times",
                description: "Direct routes with no stops or transfers mean quicker delivery and reduced risk of delays.",
            },
            {
                title: "Maximum Security",
                description: "Fewer touchpoints mean lower risk of damage, loss, or theft.",
            },
            {
                title: "Nationwide Coverage",
                description:
                    "We offer robust FTL shipping across the U.S., supported by a vetted network of professional drivers.",
            },
            {
                title: "Flexible Scheduling",
                description:
                    "Whether it's a one-time shipment or ongoing logistics support, we're here to meet your timeline and individual needs.",
            },
        ],
        idealFor: [
            "High-volume shipments",
            "Freight on tight time goals",
            "Time-sensitive deliveries",
            "Palletized cargo and bulk freight",
        ],
    },
    {
        slug: "ltl",
        title: "Less Than Truckload",
        navTitle: "LTL",
        headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rbkC4OMclGBoZpVHtHwR7Wa7esU8y0.png",
        overview:
            "DTL Transport's LTL (Less Than Truckload) service is the perfect solution for businesses that need to ship smaller freight loads without paying for a full trailer. Whether you're sending a few pallets or a partial load, our LTL service combines flexibility, affordability, and reliability to help you move your goods efficiently across the country.",
        benefits: [
            {
                title: "Cost-Effective",
                description:
                    "Pay only for the space you use. Share trailer space with other shippers and reduce overall shipping costs.",
            },
            {
                title: "Efficient Consolidation",
                description:
                    "We combine your shipment with others heading in the same direction to maximize trailer space and efficiency.",
            },
            {
                title: "Nationwide Reach",
                description:
                    "Our LTL network extends throughout the U.S., including regional, interregional, and long-haul routes.",
            },
            {
                title: "Flexible Pickup & Delivery",
                description:
                    "We offer scheduled pickups, liftgate service, residential delivery, and other options to fit your business needs.",
            },
            {
                title: "Real-Time Tracking",
                description: "Stay informed with up-to-date tracking and transparent communication from pickup to delivery.",
            },
        ],
        idealFor: [
            "Small to medium-sized shipments",
            "1 to 6 pallets",
            "Freight that doesn't require a full trailer",
            "Cost-conscious logistics",
        ],
    },
    {
        slug: "satellite-tracking",
        title: "Satellite Tracking",
        navTitle: "Satellite Tracking",
        headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ld3ZcNDmU57dPDoQiMtclK3dsldTvg.png",
        overview:
            "DTL Transport integrates Satellite Tracking technology to bring you real-time visibility and peace of mind. Our advanced tracking systems monitor your shipments from pickup to delivery, providing accurate location data, status updates, and security assurance.",
        benefits: [
            {
                title: "Real-Time GPS Visibility",
                description: "Track your shipment's location and estimated arrival time from any point along the route.",
            },
            {
                title: "Enhanced Security",
                description: "Monitor trailer activity and detect unauthorized movement or door access.",
            },
            {
                title: "Proactive Updates",
                description: "Receive automatic alerts and notifications to keep your supply chain informed and agile.",
            },
            {
                title: "24/7 Monitoring",
                description:
                    "Our dispatch team monitors freight movements continuously, initiating rapid response to any potential disruptions.",
            },
            {
                title: "Customer Portal Access",
                description: "Easily view shipment data and history through a user-friendly tracking dashboard.",
            },
        ],
        idealFor: [
            "Better planning and coordination",
            "Reduced risk of delays or theft",
            "Increased customer satisfaction through accurate ETAs",
        ],
    },
    {
        slug: "power-only",
        title: "Power Only",
        navTitle: "Power Only",
        headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cp18AC1XIikGLcT3JzAxNIFfpbV3Az.png",
        overview:
            "At DTL Transport, our Power Only service provides the power unit (tractor) and a professional driver to haul your trailer or container. This flexible logistics solution is ideal for shippers and carriers who already own trailers but need reliable transport power to move freight efficiently.",
        benefits: [
            {
                title: "Experienced Drivers",
                description:
                    "Our licensed and insured drivers are experienced in pulling all trailer types, including dry vans, flatbeds, and refrigerated units.",
            },
            {
                title: "Flexible Solutions",
                description:
                    "Whether it's a single run, multi-drop route, or long-term contract, we tailor the service to meet your operational needs.",
            },
            {
                title: "Nationwide Availability",
                description:
                    "We offer Power Only services throughout the U.S., including drop-and-hook operations at multiple locations.",
            },
            {
                title: "Fleet Optimization",
                description: "Use our tractors to supplement your fleet when needed to reduce downtime and improve efficiency.",
            },
            {
                title: "24/7 Support",
                description: "Around-the-clock dispatch and communication ensure your freight stays on schedule.",
            },
        ],
        idealFor: [
            "Trailer owners or leased trailer operations",
            "Drop-and-hook programs",
            "Shippers needing scalable power for peak seasons",
        ],
    },
]

export function getAllServiceSlugs(){
    return services.map((service) => service.slug)
}

export function getServiceBySlug(slug){
    return services.find((service) => service.slug === slug)
}

export function getAllServices() {
    return services
}
