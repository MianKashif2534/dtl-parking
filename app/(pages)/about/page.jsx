import AboutPageClient from "./AboutPageClient"

// Page-specific metadata
export const metadata = {
  title: "About Us - Our Story and Mission",
  description:
    "Learn about DTL Transport's journey from a small carrier to a nationwide logistics leader. Discover our commitment to excellence, reliability, and customer satisfaction.",
  openGraph: {
    title: "About DTL Transport - Our Story and Mission",
    description: "Learn about DTL Transport's journey from a small carrier to a nationwide logistics leader.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DTL Transport About Us",
      },
    ],
  },
  alternates: {
    canonical: "https://dtltransport.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
