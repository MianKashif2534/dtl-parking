
// Define your site URLs
const baseUrl = "https://dtltransport.com"

// Define all static routes
const routes = [
    {
        url: "/",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
    },
    {
        url: "/about",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: "/services",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        url: "/parking",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: "/staff",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: "/team",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
]

// Define service pages
const servicePages = [
    // "truck-parking",
    // "security-monitoring",
    // "gate-entry",
    "ftl",
    "ltl",
    "satellite-tracking",
    "power-only",
]

export default function sitemap() {
    // Create the base sitemap with static routes
    const sitemap = routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))

    // Add service pages to the sitemap
    servicePages.forEach((service) => {
        sitemap.push({
            url: `${baseUrl}/services/${service}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        })
    })

    return sitemap
}
