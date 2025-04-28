export default function Page() {
  const teamMembers = [
    {
      id: 1,
      name: 'Lakhvir Singh',
      title: 'CEO/Outbound Team',
      email: 'lucky@dtltransport.com',
      bio: 'Lucky leads DTL Transport with a sharp eye for operations and growth. As CEO, he guides the outbound team and company strategy, ensuring every shipment meets our commitment to reliability and performance. His leadership drives innovation and customer satisfaction across all departments.',
      imageSrc: '/staff/user1.png',
    },
    {
      id: 2,
      name: 'Jaspreet Singh',
      title: 'Outbound Team',
      email: 'jass@dtltransport.com',
      bio: 'Jass plays a pivotal role in managing outbound freight logistics, ensuring timely and efficient deliveries. With a keen understanding of routing and scheduling, he supports smooth communication between dispatch, drivers, and clients to maintain top-tier service.',
      imageSrc: '/staff/user2.png',
    },
    {
      id: 3,
      name: 'Rupinder Dosanjh',
      title: 'Logistics Manager',
      email: 'bobby@dtltransport.com',
      bio: 'Bobby brings strong logistics expertise to our inbound operations. He manages the arrival of equipment with precision, working closely with drivers and warehouse teams to maintain an efficient and organized workflow.',
      imageSrc: '/staff/user3.png',
    },
    {
      id: 4,
      name: 'Inderjit Singh',
      title: 'Financial Operations',
      email: 'inder@dtltransport.com',
      bio: 'Inder oversees all financial operations at DTL from billing to payroll. With a focus on accuracy and efficiency, he ensures financial health and transparency across the company.',
      imageSrc: '/staff/user4.png',
    },
    {
      id: 1,
      name: 'Hitender Sidhu',
      title: 'Inbound Team',
      email: 'hit@dtltransport.com',
      bio: 'Hit works alongside the inbound team to ensure freight is received accurately and on time. His proactive coordination and attention to detail keep our supply chain moving without delays.',
      imageSrc: '/staff/user5.png',
    },
    {
      id: 6,
      name: 'Bhawna',
      title: 'HR Department',
      email: 'bhawna@dtltransport.com',
      bio: 'Kain is dedicated to finding the best talent for Dtl Transportation. With a keen eye for identifying potential and a strong commitment to each candidate’s journey, Kain ensures that new team members are welcomed and well-prepared for success in their roles.',
      imageSrc: '/staff/user6.png',
    },
    {
      id: 1,
      name: 'Khou Her',
      title: 'HR Department',
      email: 'lkhou@dtltransport.com',
      bio: 'Khou contributes to DTL’s HR functions with a focus on employee well-being and compliance. Her dedication to maintaining a positive work environment ensures smooth HR operations.',
      imageSrc: '/staff/user7.png',
    },
    {
      id: 1,
      name: 'Selene Morales',
      title: 'HR Department',
      email: 'selene@dtltransport.com',
      bio: 'Selene assists the HR team in supporting staff and enhancing internal communication. Her commitment to employee engagement helps keep our culture strong and unified.',
      imageSrc: '/staff/user8.png',
    },
    {
      id: 9,
      name: 'Robert Deleon',
      title: 'Maintenance / Safety',
      email: 'robert@dtltransport.com',
      bio: 'Robert keeps our fleet in peak condition. As part of the safety team, he ensures that all maintenance protocols are followed and equipment is road-ready, prioritizing safety and compliance.',
      imageSrc: '/staff/user9.png',
    },
    {
      id: 10,
      name: 'Eric Wickliffe',
      title: 'Maintenance / Safety',
      email: 'eric@dtltransport.com',
      bio: 'Red works closely with the maintenance team to uphold the highest safety standards. His hands-on approach ensures DTL trucks and trailers are reliable and meet all regulations.',
      imageSrc: '/staff/user10.png',
    },
  ]
  return (
    <div className='max-w-6xl mx-auto '>
      <div className='text-white flex flex-col md:flex-row gap-4 mb-10 mt-[10%] max-w-6xl mx-auto px-4'>
        <div className='md:w-1/2'>
          <h2 className='text-2xl md:text-5xl font-bold'>
            Meet Our
            <br />
            Dedicated
            <br />
            Operations &<br />
            Support Team
          </h2>
        </div>
        <div className='md:w-2/3'>
          <p className='text-sm md:text-base lg:text-lg leading-relaxed'>
            At DTL Transport, our team is the driving force behind everything we
            do. From dispatch and inbound logistics to HR, accounting, and fleet
            maintenance — each member plays a vital role in delivering
            excellence on the road and behind the scenes. With a shared
            commitment to safety, service, and innovation, our staff works
            around the clock to support drivers, partners, and our growing
            network.Get to know the passionate individuals who keep DTL
            Transport moving forward every mile of the way.
          </p>
        </div>
      </div>

      <div className='min-h-screen p-4 md:p-8'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-white text-3xl font-bold mb-8 text-center'>
            Our Leadership Team
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className='bg-[#5305B866] rounded-lg p-6 flex flex-col'
              >
                {/* Top section with image, name, title */}
                <div className='flex items-center mb-4 '>
                  <div className='w-40 h-40 mr-2 flex-shrink-0'>
                    <img
                      src={member.imageSrc || '/placeholder.svg'}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  <div className='flex flex-col justify-center '>
                    <h3 className='text-white text-xl md:text-2xl font-bold'>
                      {member.name}
                    </h3>
                    <p className='text-[#964FFF] text-lg md:font-bold'>
                      {member.title}
                    </p>
                    <p className='text-white text-md md:font-bold'>
                      {member.email}
                    </p>
                  </div>
                </div>

                {/* Bio section below */}
                <div className='mt-8'>
                  <p className='text-[#b5a0a0]  text-sm md:text-lg leading-relaxed mb-20'>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
