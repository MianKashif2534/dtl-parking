import { Download, Globe, Shield } from 'lucide-react'
import Image from 'next/image'
export default function page() {
  const teamMembers = [
    {
      name: 'Julianne Bernard',
      role: 'Director of Recruiting',
      email: 'jbernard@newdtlinc.com',
      image: '/about/user-4.png',
      description:
        "Julianne brings a wealth of experience to DTL Transportation, approaching driver recruitment with a knack for strategic growth and a passion for success. As Director of Recruiting, she ensures that each hire aligns with our values and mission, helping to build a workforce that's not only skilled but also passionate about making a difference on the road.",
    },
    {
      name: 'Kain Coronel',
      role: 'Recruiting Manager',
      email: 'kcoronel@newdtlinc.com',
      image: '/about/user-3.png',
      description:
        "Kain is dedicated to finding the best talent for DTL Transportation. With a keen eye for identifying potential and a strong commitment to each candidate's journey, Kain ensures that new team members are welcomed and well-prepared for success in their roles.",
    },
    {
      name: 'Gabe Chaidez',
      role: 'Recruiting Specialist',
      email: 'gchaidez@newdtlinc.com',
      image: '/about/user-2.png',
      description:
        'Gabe is a vital part of the recruiting team, known for his friendly and approachable style as he builds strong relationships with prospective drivers and support staff, guiding them through each step of the hiring process and ensuring they feel like part of the Legend family from day one.',
    },
    {
      name: 'John Worthey',
      role: 'Driver Recruiter',
      email: 'jworthey@newdtlinc.com',
      image: '/about/user-1.png',
      description:
        'John brings dedication and enthusiasm to his recruiting role, supporting candidates with a commitment to transparency and integrity. He takes pride in matching drivers with opportunities that align with their skills and ambitions while helping careers with us.',
    },
  ]

  return (
    <>
      <div className='relative  max-w-6xl mx-auto overflow-hidden text-white p-8 md:p-12'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1 space-y-8'>
            <div className='space-y-2'>
              <h1 className='text-3xl md:text-4xl font-bold'>
                <span className='text-white'>Keep Rolling and </span>
                <span className=''>Get Paid</span>
              </h1>
              <h2 className='text-2xl md:text-3xl font-bold flex items-center gap-2'>
                <span className='w-6 h-0.5 bg-white'></span>
                <span>Join the DTL Family</span>
              </h2>
            </div>

            <p className='text-sm md:text-base leading-relaxed max-w-xl'>
              At Dtl Transportation, we don't just offer a job; we provide a
              fulfilling career where you're valued and supported every mile of
              the way. Our commitment to treating drivers with the respect they
              deserve sets us apart. With us, you're not just a number; you're
              part of a family that's dedicated to your success on and off the
              road.
            </p>

            <div className='space-y-6'>
              <h3 className='text-xl md:text-2xl font-bold'>
                Step into Becoming Legendary!
              </h3>

              <div
                className='border-l-4 border-white p-4 w-full md:w-1/2'
                style={{
                  background:
                    'linear-gradient(90deg, rgba(90, 47, 153, 0.4) 0%, #0B0428 100%)',
                }}
              >
                <p className='text-2xl font-semibold'>Talk to a Recruiter:</p>
                <p className='text-lg'>(559) 289-4424</p>
              </div>
            </div>
          </div>

          <div className='h-full overflow-hidden'>
            <Image
              src='/about/about-left.png'
              alt='DTL Transportation Driver'
              width={400}
              height={400}
              className='object-cover rounded-md'
            />
          </div>
        </div>
      </div>

      <div className='relative w-full max-w-6xl mx-auto text-white py-12 px-4 md:px-8'>
        <h2 className='text-2xl md:text-4xl font-bold text-center mb-12'>
          What We Offer
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Card 1 */}
          <div className='relative pt-10 pb-6'>
            <div className='absolute -top-2 left-1/2 transform -translate-x-1/2'>
              <div className='bg-[#0a2a5e] p-3 w-16 h-16 flex items-center justify-center'>
                <Download className='w-8 h-8 text-white' />
              </div>
            </div>

            <div className='bg-white min-h-[500px] rounded-md p-6 h-full flex flex-col'>
              <h3 className='text-2xl md:text-3xl font-bold text-[#5305B8] text-center mb-1'>
                Get Paid for Your Hard Work
              </h3>
              <p className='text-lg md:text-xl text-[#5305B8] font-semibold text-center mb-4'>
                Rolling Rewards.
              </p>

              <p className='text-sm md:text-base mb-4 text-[#5305B8] text-center'>
                We know why you're here — you want to get paid, and we make sure
                you're compensated for every mile you drive. But we also
                appreciate that we prioritize their financial success with
                competitive pay rates, performance incentives, and bonuses.
                Whether you're on the open road or completing a dedicated route,
                we're here to keep your wheels turning and your earnings
                growing.
              </p>

              <div className='mt-auto italic text-xs md:text-sm text-[#5305B8] text-center'>
                <p className='font-semibold'>
                  "DTL understands that money matters. They pay, and they pay on
                  time." — Robbie
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='relative pt-10 pb-6'>
            <div className='absolute -top-2 left-1/2 transform -translate-x-1/2'>
              <div className='bg-[#0a2a5e] p-3 w-16 h-16 flex items-center justify-center'>
                <Shield className='w-8 h-8 text-white' />
              </div>
            </div>

            <div className='bg-white text-[#5305B8] text-center rounded-md p-6 h-full flex flex-col'>
              <h3 className='text-2xl md:text-3xl font-bold mb-1'>
                Be Appreciated for What You Do
              </h3>
              <p className='text-lg md:text-xl font-semibold mb-4'>
                We're Here for You.
              </p>

              <p className='text-sm md:text-base mb-4'>
                At DTL, we believe respect goes a long way. Our team is
                dedicated to making sure drivers feel supported every step of
                the way. If you have questions or need assistance, you can count
                on us to pick up the phone and respond quickly. You're part of a
                community that values open communication, reliability, and
                treating drivers like family.
              </p>

              <div className='mt-auto italic text-xs md:text-sm'>
                <p className='font-semibold'>
                  "When I call, they answer. They take the time to help me, and
                  I always feel appreciated." — Mike
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='relative pt-10 pb-6'>
            <div className='absolute -top-2 left-1/2 transform -translate-x-1/2'>
              <div className='bg-[#0a2a5e] p-3 w-16 h-16 flex items-center justify-center'>
                <Globe className='w-8 h-8 text-white' />
              </div>
            </div>

            <div className='bg-white text-[#5305B8] text-center rounded-md p-6 h-full flex flex-col'>
              <h3 className='text-2xl md:text-3xl font-bold text-center mb-1'>
                Join a Team That Cares
              </h3>
              <p className='text-lg md:text-xl font-semibold text-center mb-4'>
                A Culture of Connection.
              </p>

              <p className='text-sm md:text-base mb-4'>
                DTL is more than just a transportation company; we're a team
                bound by respect and camaraderie. When you're out on the road,
                you'll always have a team behind you that values your safety and
                well-being. From our Driver Managers to our support staff, we
                all work together to keep you safe, connected, and part of
                something bigger.
              </p>

              <div className='mt-auto italic text-xs md:text-sm'>
                <p className='font-semibold'>
                  "The team at DTL is indescribably welcoming — it's like
                  family." — Alex
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <button
            style={{
              background:
                'linear-gradient(90deg, rgba(46, 27, 82, 0.12) 0%, rgba(103, 61, 184, 0.72) 100%)',
            }}
            className='text-white font-bold py-2 px-8 rounded-md transition duration-300'
          >
            Apply Now
          </button>
        </div>
      </div>

      <div className='relative w-full max-w-6xl mx-auto text-white py-12 px-4 md:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-4 mb-10'>
            <div className='md:w-1/2'>
              <h2 className='text-2xl md:text-4xl font-bold'>
                Meet Our
                <br />
                Dedicated
                <br />
                Executive Team —<br />
                Recruiting
              </h2>
            </div>
            <div className='md:w-2/3'>
              <p className='text-sm  leading-relaxed'>
                Our Recruiting Team is passionate about connecting talented
                drivers and professionals with rewarding careers at DTL
                Transportation. With a commitment to building a culture of
                respect, safety, and growth, our team works tirelessly to ensure
                each recruit finds their perfect fit within our company. Meet
                the leaders who are guiding our drivers toward success on the
                road.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {teamMembers.map((member, index) => (
              <div key={index} className='bg-[#5305B866] p-6'>
                <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-4'>
                  <div className='w-24 h-24 rounded-full overflow-hidden flex-shrink-0'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='text-xl md:text-2xl font-bold text-center sm:text-left'>
                      {member.name}
                    </h3>
                    <p className='text-[#964FFF] font-semibold text-center sm:text-left'>
                      {member.role}
                    </p>
                    <p className='text-sm text-center sm:text-left'>
                      {member.email}
                    </p>
                  </div>
                </div>
                <p className='text-sm md:text-base leading-relaxed text-center md:text-left'>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
