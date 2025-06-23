'use client'

/* eslint-disable react/no-unescaped-entities */
import PageHeader from '@/app/components/page-header'
import { Download, Globe, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const BenefitCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  quote,
  author,
  index,
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      className='relative pt-10 mb-4 md:pb-6'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: 'easeOut',
      }}
    >
      <motion.div
        className='absolute top-0 left-0 right-0 mx-auto flex justify-center items-center z-50'
        initial={{ scale: 0, rotate: -180 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
        }
        transition={{
          duration: 0.6,
          delay: 0.3 + index * 0.2,
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          className='bg-[#0a2a5e] flex items-center justify-center p-3 w-16 h-16 rounded-full'
          whileHover={{ scale: 1.1, backgroundColor: '#0d3b7d' }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Icon className='w-8 h-8 text-white' />
        </motion.div>
      </motion.div>

      <motion.div
        className='bg-white md:min-h-[500px] rounded-md rounded-b-none border-b-8 border-royalblue/90 p-6 h-full flex flex-col'
        whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(90, 47, 153, 0.3)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <motion.h3
          className='text-2xl md:text-3xl font-bold text-royalblue text-center mb-1'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className='text-lg md:text-xl text-royalblue font-semibold text-center mb-4'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.p
          className='text-sm md:text-base mb-4 font-light text-royalblue text-center'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          className='mt-auto italic text-xs md:text-sm text-royalblue text-center'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
        >
          <p className='font-semibold'>
            "{quote}" — {author}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Team Member Card component
const TeamMemberCard = ({ name, role, email, image, description, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      className='bg-royalblue/40 px-3 py-4 md:p-6 rounded-md'
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 20px rgba(151, 71, 255, 0.4)',
        backgroundColor: 'rgba(90, 47, 153, 0.5)',
      }}
    >
      <div className='flex flex-col sm:flex-row gap-6 items-center mb-6 md:mb-12'>
        <motion.div
          className='w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-royalblue'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={image || '/placeholder.svg?height=96&width=96'}
            alt={name}
            width={96}
            height={96}
            className='w-full h-full object-cover'
          />
        </motion.div>
        <div className=''>
          <motion.h3
            className='text-xl md:text-3xl font-bold text-center sm:text-left'
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className='text-blue md:text-xl font-semibold text-center sm:text-left'
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
          >
            {role}
          </motion.p>
          <motion.a
            href={`mailto:${email}`}
            className='text-sm md:text-xl text-center sm:text-left hover:text-blue transition-colors block'
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            {email}
          </motion.a>
        </div>
      </div>
      <motion.p
        className='text-sm md:text-lg font-extralight leading-relaxed text-center md:text-left'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

export default function TeamPage() {
  // Refs for scroll animations
  const heroRef = useRef(null)
  const offerSectionRef = useRef(null)
  const teamSectionRef = useRef(null)
  const ctaButtonRef = useRef(null)

  // InView states
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isOfferSectionInView = useInView(offerSectionRef, {
    once: true,
    amount: 0.1,
  })
  const isTeamSectionInView = useInView(teamSectionRef, {
    once: true,
    amount: 0.1,
  })
  const isCtaButtonInView = useInView(ctaButtonRef, { once: true, amount: 0.8 })

  // Benefits data
  const benefits = [
    {
      icon: Download,
      title: 'Get Paid for Your Hard Work',
      subtitle: 'Rolling Rewards.',
      description:
        "We know why you're here — you want to get paid, and we make sure you're compensated for every mile you drive. But we also appreciate that we prioritize their financial success with competitive pay rates, performance incentives, and bonuses. Whether you're on the open road or completing a dedicated route, we're here to keep your wheels turning and your earnings growing.",
      quote:
        'DTL understands that money matters. They pay, and they pay on time.',
      author: 'Robbie',
    },
    {
      icon: Shield,
      title: 'Be Appreciated for What You Do',
      subtitle: "We're Here for You.",
      description:
        "At DTL, we believe respect goes a long way. Our team is dedicated to making sure drivers feel supported every step of the way. If you have questions or need assistance, you can count on us to pick up the phone and respond quickly. You're part of a community that values open communication, reliability, and treating drivers like family.",
      quote:
        'When I call, they answer. They take the time to help me, and I always feel appreciated.',
      author: 'Mike',
    },
    {
      icon: Globe,
      title: 'Join a Team That Cares',
      subtitle: 'A Culture of Connection.',
      description:
        "DTL is more than just a transportation company; we're a team bound by respect and camaraderie. When you're out on the road, you'll always have a team behind you that values your safety and well-being. From our Driver Managers to our support staff, we all work together to keep you safe, connected, and part of something bigger.",
      quote: "The team at DTL is indescribably welcoming — it's like family.",
      author: 'Alex',
    },
  ]

  // Team members data
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

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '30px',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  const imageScaleVariants = {
    hidden: { scale: 0.9, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: '0 10px 25px rgba(151, 71, 255, 0.5)',
    },
    tap: { scale: 0.98 },
  }

  return (
    <>
      <PageHeader
        title='Talk to Expert'
        subtitle=''
        imageSrc='/team-hero.png'
        imageAlt='DTL Transport truck parking facility'
      />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className='relative max-w-6xl mx-auto overflow-hidden text-white py-8 px-4 md:p-12'
        variants={staggerContainerVariants}
        initial='hidden'
        animate={isHeroInView ? 'visible' : 'hidden'}
      >
        <div className='flex flex-col md:flex-row gap-8'>
          <motion.div
            className='flex-1 space-y-6 md:space-y-8'
            variants={fadeInUpVariants}
          >
            <div className='space-y-2'>
              <motion.h1
                className='text-2xl md:text-4xl font-bold'
                variants={headingVariants}
                initial='hidden'
                animate={isHeroInView ? 'visible' : 'hidden'}
              >
                <span className='text-white'>Keep Rolling and </span>
                <span className='text-blue'>Get Paid</span>
              </motion.h1>
              <motion.h2
                className='text-xl md:text-3xl font-bold flex items-center gap-2'
                variants={headingVariants}
                initial='hidden'
                animate={isHeroInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  className='w-6 h-0.5 bg-white'
                  variants={lineVariants}
                  initial='hidden'
                  animate={isHeroInView ? 'visible' : 'hidden'}
                ></motion.span>
                <span>Join the DTL Family</span>
              </motion.h2>
            </div>

            <motion.p
              className='text-sm md:text-lg leading-relaxed font-extralight max-w-xl'
              variants={fadeInUpVariants}
              initial='hidden'
              animate={isHeroInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
            >
              At DTL Transportation, we don't just offer a job; we provide a
              fulfilling career where you're valued and supported every mile of
              the way. Our commitment to treating drivers with the respect they
              deserve sets us apart. With us, you're not just a number; you're
              part of a family that's dedicated to your success on and off the
              road.
            </motion.p>

            <motion.div
              className='space-y-4 md:space-y-6'
              variants={fadeInUpVariants}
              initial='hidden'
              animate={isHeroInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
            >
              <motion.h3
                className='text-xl md:text-2xl font-bold'
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Step into Becoming Legendary!
              </motion.h3>

              <motion.div
                className='border-l-4 border-white p-4 w-full md:w-1/2 bg-gradient-to-r from-[rgba(90,47,153,0.4)] to-[#0B0428]'
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className='text-2xl font-semibold'>Talk to a Recruiter:</p>
                <motion.a
                  href='tel:+15592894424'
                  className='text-lg hover:text-blue transition-colors'
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  (559) 289-4424
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className='h-full overflow-hidden'
            variants={imageScaleVariants}
            initial='hidden'
            animate={isHeroInView ? 'visible' : 'hidden'}
            whileHover='hover'
          >
            <Image
              src='/about/about-left1.png'
              alt='DTL Transportation Driver'
              width={400}
              height={400}
              className='object-cover rounded-md'
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      {/* What We Offer Section */}
      <section
        ref={offerSectionRef}
        className='relative w-full max-w-6xl mx-auto text-white my-8 md:py-12 px-4 md:px-8'
      >
        <motion.h2
          className='text-2xl md:text-5xl font-bold text-center mb-6 md:mb-12'
          variants={headingVariants}
          initial='hidden'
          animate={isOfferSectionInView ? 'visible' : 'hidden'}
        >
          What We Offer
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6'>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              subtitle={benefit.subtitle}
              description={benefit.description}
              quote={benefit.quote}
              author={benefit.author}
              index={index}
            />
          ))}
        </div>

        <motion.div
          ref={ctaButtonRef}
          className='text-center mt-6 md:mt-12'
          variants={fadeInUpVariants}
          initial='hidden'
          animate={isCtaButtonInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={buttonVariants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
            whileTap='tap'
            className='inline-block'
          >
            <Link
              href='/'
              className='inline-block bg-gradient-to-r from-[rgba(46,27,82,0.12)] to-[rgba(103,61,184,0.72)] text-white font-bold py-4 px-8 rounded-md shadow-[0_0_4px_#5A2F99]'
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <motion.section
        ref={teamSectionRef}
        className='relative w-full max-w-6xl mx-auto text-white py-8 md:py-12 px-4 md:px-8'
        variants={staggerContainerVariants}
        initial='hidden'
        animate={isTeamSectionInView ? 'visible' : 'hidden'}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12'>
            <motion.div
              className='md:w-1/2'
              variants={fadeInUpVariants}
              initial='hidden'
              animate={isTeamSectionInView ? 'visible' : 'hidden'}
            >
              <motion.h2 className='text-2xl md:text-4xl font-bold'>
                <motion.span
                  className='block'
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isTeamSectionInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Meet Our
                </motion.span>
                <motion.span
                  className='block'
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isTeamSectionInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Dedicated
                </motion.span>
                <motion.span
                  className='block'
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isTeamSectionInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Executive Team —
                </motion.span>
                <motion.span
                  className='block text-blue'
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isTeamSectionInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Recruiting
                </motion.span>
              </motion.h2>
            </motion.div>
            <motion.div
              className='md:w-1/2'
              variants={fadeInUpVariants}
              initial='hidden'
              animate={isTeamSectionInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.5 }}
            >
              <motion.p
                className='text-sm md:text-base font-light leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isTeamSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                Our Recruiting Team is passionate about connecting talented
                drivers and professionals with rewarding careers at DTL
                Transportation. With a commitment to building a culture of
                respect, safety, and growth, our team works tirelessly to ensure
                each recruit finds their perfect fit within our company. Meet
                the leaders who are guiding our drivers toward success on the
                road.
              </motion.p>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                email={member.email}
                image={member.image}
                description={member.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
