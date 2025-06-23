'use client'

import HeroSection from './HeroSection/HeroSection'

export default function HomeHeroSection() {
  const heroProps = {
    backgroundImage: '/home-hero2.png',
    welcomeText: 'Welcome to DTL',
    mainHeading:
      'Trusted Freight Solutions Across America Powered by Precision',
    subHeading:
      'From full truckloads to specialized freight, DTL delivers seamless, secure, and on-time transportation services across the nation.',
    ctaText: 'Request a Quote',
    ctaLink: '/driver',
  }

  return <HeroSection {...heroProps} />
}
