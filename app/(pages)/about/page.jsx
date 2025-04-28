import Image from 'next/image'
import HeroSection from './_component/herosection'

export default function page() {
  return (
    <>
      <HeroSection />
      <section className=' text-white py-16 px-4 md:px-8 lg:px-16'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12'>
            <div className='md:w-3/5 space-y-4'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Built on Legacy. Driven by Purpose.
              </h2>
              <p className='text-sm md:text-base leading-relaxed'>
                In 1991, Teja Singh arrived in the United States from Punjab,
                India, with a vision to build a better life for his family.
                Though his roots were in farming, his ambition led him into the
                world of logistics.
              </p>
              <p className='text-sm md:text-base leading-relaxed'>
                Settling in Fresno, California for its familiar climate, he
                earned his Commercial Drivers License (CDL) and began hauling
                produce across the country — from the West Coast to the East.
              </p>
              <p className='text-sm md:text-base leading-relaxed'>
                It didnt take long for Mr. Singh to recognize a significant gap
                in communication within the trucking industry, especially for
                immigrant drivers struggling with language and logistics
                coordination. His instinct to help others led to a greater
                calling organizing routes, dispatching trucks, and soon,
                founding Dosanjh Truck Lines, a company built on trust, clarity,
                and connection.
              </p>
            </div>
            <div className='md:w-2/5 flex justify-center md:justify-end'>
              <div className='relative w-64 h-64 md:w-80 md:h-80'>
                <div className='relative overflow-hidden shadow-xl'>
                  <Image
                    src='/Uncle-Image.png'
                    alt='Founder portrait'
                    width={400}
                    height={400}
                    className='object-cover w-full h-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:px-8'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-3xl font-bold text-white text-center mb-8'>
            OUR HISTORY
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Panel 1 - Red Border */}
            <div className='relative h-80 overflow-hidden border-4 rounded-lg border-purple-700'>
              <Image
                src='/about/image-1.png'
                alt='A New Era of Transport'
                fill
                className='object-cover brightness-50'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  A New Era of Transport Begins
                </h3>
                <p className='text-white text-sm'>
                  In 2003, Lally Singh, a veteran in the trucking industry,
                  recognized the need for a reliable carrier in the Central
                  Valley. Using his previous experience in logistics and his
                  strong ties to the community, he founded DTL Transport with a
                  vision to provide exceptional service and set a new standard
                  in the industry.
                </p>
                <p className='text-white text-sm mt-2'>
                  With a growing fleet, Lally built a reputation for strong
                  customer relationships, on-time deliveries, and a commitment
                  to excellence that continues to drive our business model
                  today.
                </p>
              </div>
            </div>

            {/* Panel 2 - Blue Border */}
            <div className='relative h-80 overflow-hidden border-4 rounded-lg border-purple-700'>
              <Image
                src='/about/image-2.png'
                alt='Scaling the Fleet'
                fill
                className='object-cover brightness-50'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Scaling the Fleet — Built on Innovation
                </h3>
                <p className='text-white text-sm'>
                  By 2015, DTL Transport transformed from boutique to mid-sized
                  carrier, acquiring a modern fleet of refrigerated trucks and
                  expanding operations across several states. This growth
                  coincided with the company's commitment to sustainability and
                  industry compliance.
                </p>
              </div>
            </div>

            {/* Panel 3 - Purple Border */}
            <div className='relative h-80 overflow-hidden border-4 rounded-lg border-purple-700'>
              <Image
                src='/about/image-3.png'
                alt='Safety First'
                fill
                className='object-cover brightness-50'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Safety First. Service Always.
                </h3>
                <p className='text-white text-sm'>
                  With growth came the need for a robust safety and compliance
                  program. Under the direction of our Transportation & Safety
                  Manager program, DTL implemented comprehensive training,
                  vehicle maintenance, and driver wellness protocols.
                </p>
              </div>
            </div>

            {/* Panel 4 - Green Border */}
            <div className='relative h-80 overflow-hidden border-4 rounded-lg border-purple-700'>
              <Image
                src='/about/image-4.png'
                alt='Trusted Partner'
                fill
                className='object-cover brightness-50'
              />
              <div className='absolute inset-0 p-6 flex flex-col justify-end'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  A Trusted Partner in Freight
                </h3>
                <p className='text-white text-sm'>
                  Today, DTL Transport is a trusted partner to major shippers
                  across the U.S. providing reliable service, clear
                  communication, and timely deliveries. From agricultural
                  products to consumer goods and industrial supplies, DTL has
                  partnered with shippers of all sizes to find the reliable
                  freight solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Company Tagline */}
          <div className='mt-8 text-[#5305B8] border-l-8 border-l-[#5305B8] '>
            <div className='relative'>
              <img src='/about/banner.png' alt='' className='w-full ' />
              <div className='absolute top-14 left-10'>
                <p className='text-4xl font-bold'>
                  DTL Transport, Inc. — One Call Does It All.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
