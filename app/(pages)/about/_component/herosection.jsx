/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className='relative w-full h-[600px] md:h-[900px] overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <img
          src='/home-hero2.png'
          alt='Snowy mountain landscape with truck'
          className='w-full h-full object-cover'
        />
      </div>
      {/* <div className="absolute bottom-44 left-0 w-full h-full bg-[radial-gradient(12.12%_21.05%_at_42.39%_67.57%,_#964FFF_48.58%,_#5305B8_100%)] blur-[100px]" /> */}

      {/* Content Container */}
      <div className='relative z-10 h-full flex flex-col items-center mt-32 text-white text-center px-4 pt-16'>
        {/* Welcome Text with Lines */}
        <div className='flex items-center justify-center mb-8 space-x-3'>
          <div className='w-48 h-2 bg-[linear-gradient(90deg,_#964FFF_0%,_#5A2F99_100%)] rounded-2xl'></div>
          <h2 className='font-bold text-4xl leading-[40px] text-center text-[#461094]'>
            Welcome to DTL
          </h2>
          <div className='w-48 h-2 bg-[linear-gradient(90deg,_#964FFF_0%,_#5A2F99_100%)] rounded-2xl'></div>
        </div>

        {/* Main Heading */}
        <h1 className='text-4xl md:text-5xl font-bold max-w-3xl mb-8 leading-tight'>
          Trusted Freight Solutions Across America Powered by Precision
        </h1>

        {/* Subheading */}
        <p className='max-w-2xl text-lg mb-12'>
          From full truckloads to specialized freight, DTL delivers seamless,
          secure, and on-time transportation services across the nation.
        </p>

        {/* CTA Button */}
        <Link
          href='/'
          className='text-white px-6 py-5 rounded-md shadow-[0_0_4px_#5A2F99] bg-[linear-gradient(90deg,_rgba(46,27,82,0.12)_0%,_rgba(103,61,184,0.72)_100%)]'
        >
          Request a Quote
        </Link>
      </div>

      {/* Purple Curved Overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20 bg-[radial-gradient(12.12%_21.05%_at_42.39%_67.57%,_#964FFF_48.58%,_#5305B8_100%)] blur-[100px]">
            </div> */}

      {/* Truck Images */}
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-lg">
                <div className="relative h-32 -bottom-0">
                    <Image src="/home-trucks.png" alt="DTL Truck Fleet" width={500} height={128} className="object-contain" />
                </div>
            </div> */}
    </div>
  )
}
