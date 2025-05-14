
export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/admin/"],
        },
        sitemap: "https://dtltransport.com/sitemap.xml",
        host: "https://dtltransport.com",
    }
}
