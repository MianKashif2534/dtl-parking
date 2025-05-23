import localFont from 'next/font/local'
import './globals.css'
import NavBar from './components/nav-bar'
import Footer from './components/shared/footer'
import ClientLayout from './ClientLayout'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})


// Default metadata for the entire site
export const metadata = {
  metadataBase: new URL("https://dtltransport.com"),
  title: {
    default: "DTL Transport - Trusted Freight Solutions Across America",
    template: "%s | DTL Transport",
  },
  description:
    "From full truckloads to specialized freight, DTL delivers seamless, secure, and on-time transportation services across the nation.",
  keywords: ["trucking", "freight", "logistics", "transportation", "shipping", "truck parking"],
  authors: [{ name: "DTL Transport" }],
  creator: "Timex Solution",
  publisher: "DTL Transport, Inc.",
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dtltransport.com",
    siteName: "DTL Transport",
    title: "DTL Transport - Trusted Freight Solutions Across America",
    description:
      "From full truckloads to specialized freight, DTL delivers seamless, secure, and on-time transportation services across the nation.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DTL Transport - Trusted Freight Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTL Transport - Trusted Freight Solutions Across America",
    description:
      "From full truckloads to specialized freight, DTL delivers seamless, secure, and on-time transportation services across the nation.",
    images: ["/opengraph-image.png"],
    site: "@DTLTransport",
    creator: "@TimexSolutionInc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   // Replace with your actual Google Search Console verification code
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
  alternates: {
    canonical: "https://dtltransport.com",
    languages: {
      "en-US": "https://dtltransport.com",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} container mx-auto antialiased`}
      >
        {/* <AnimatePresence mode="wait"> */}
        <NavBar />
        {children}
        <Footer />
        {/* </AnimatePresence> */}
      </body>
    </html>
  )
}
