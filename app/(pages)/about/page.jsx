/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import HeroSection from './_component/herosection'
import PageHeader from '@/app/components/page-header';

const panelData = [
  {
    image: '/about/image-1.png',
    alt: 'A New Era of Transport',
    title: 'A New Era of Transport Begins',
    content: [
      'In 2003, Lally Singh, a veteran in the trucking industry, recognized the need for a reliable carrier in the Central Valley. Using his previous experience in logistics and his strong ties to the community, he founded DTL Transport with a vision to provide exceptional service and set a new standard in the industry.',
      'With a growing fleet, Lally built a reputation for strong customer relationships, on-time deliveries, and a commitment to excellence that continues to drive our business model today.'
    ]
  },
  {
    image: '/about/image-2.png',
    alt: 'Scaling the Fleet',
    title: 'Scaling the Fleet — Built on Innovation',
    content: [
      'By 2015, DTL Transport transformed from boutique to mid-sized carrier, acquiring a modern fleet of refrigerated trucks and expanding operations across several states. This growth coincided with the company’s commitment to sustainability and industry compliance.'
    ]
  },
  {
    image: '/about/image-3.png',
    alt: 'Safety First',
    title: 'Safety First. Service Always.',
    content: [
      'With growth came the need for a robust safety and compliance program. Under the direction of our Transportation & Safety Manager program, DTL implemented comprehensive training, vehicle maintenance, and driver wellness protocols.'
    ]
  },
  {
    image: '/about/image-4.png',
    alt: 'Trusted Partner',
    title: 'A Trusted Partner in Freight',
    content: [
      'Today, DTL Transport is a trusted partner to major shippers across the U.S. providing reliable service, clear communication, and timely deliveries. From agricultural products to consumer goods and industrial supplies, DTL has partnered with shippers of all sizes to find the reliable freight solutions.'
    ]
  }
];

const InfoPanel = ({ image, alt, title, content }) => (
  <div className='relative md:h-[600px] overflow-hidden border-4 rounded-[24px] border-royalpurple'>
    <img src={image} alt={alt} className='object-cover brightness-10 scale-105 w-auto h-full' />
    <div className='absolute inset-0 p-6 flex flex-col justify-end'>
      <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
      {content.map((text, index) => (
        <p key={index} className='text-white text-sm mb-2'>{text}</p>
      ))}
    </div>
  </div>
);

export default function page() {
  return (
    <div className="relative">

      <div className="absolute top-[500px] md:top-[700px] right-0 w-full -z-10 pointer-events-none">
        <Image
          src="/header-shade.svg"
          alt=""
          width={1440}
          height={1172}
          className="w-full h-auto opacity-80 transform -translate-y-[65%] scale-x-[-1]"
          priority
        />
      </div>

      <PageHeader
        title="About Us"
        subtitle=""
        imageSrc="/about-hero.png"
        imageAlt="DTL Transport truck parking facility"
        button={true}
      />
      <section className='text-white py-8 md:py-16 px-4 md:px-8 lg:px-16'>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">

            {/* Left Section */}
            <div className="md:w-2/5 flex justify-center md:justify-start md:items-center">
              <div className="w-4/5 h-4/5 flex justify-center items-center">
                <div className="overflow-hidden shadow-xl">
                  <Image
                    src="/Uncle-Image.png"
                    alt="Founder portrait"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built on Legacy. Driven by Purpose.
              </h2>
              <p className="text-sm md:text-lg font-extralight leading-relaxed mb-4">
                In 1991, Teja Singh arrived in the United States from Punjab, India, with a vision to build a better life for his family.
                Though his roots were in farming, his ambition led him into the world of logistics.
                Settling in Fresno, California for its familiar climate, he earned his Commercial Drivers License (CDL) and began hauling
                produce across the country — from the West Coast to the East.
              </p>
              <p className="text-sm md:text-lg font-extralight leading-relaxed">
                It didn't take long for Mr. Singh to recognize a significant gap in communication within the trucking industry, especially
                for immigrant drivers struggling with language and logistics coordination. His instinct to help others led to a greater
                calling — organizing routes, dispatching trucks, and soon, founding Dosanjh Truck Lines, a company built on trust, clarity,
                and connection.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className='px-4 md:px-8 lg:px-16 mb-8 md:mb-0'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-6 md:mb-8'>
            OUR HISTORY
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
            {panelData.map((panel, index) => (
              <InfoPanel key={index} {...panel} />
            ))}
          </div>

          {/* Company Tagline */}
          <div className='my-8 text-royalpurple border-l-8 border-l-royalpurple hidden md:block'>
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
    </div>
  )
}
