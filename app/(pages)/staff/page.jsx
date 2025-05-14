"use client"

/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/app/components/page-header"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Page() {
  // Refs for scroll animations
  const introRef = useRef(null)
  const teamGridRef = useRef(null)

  // InView states
  const isIntroInView = useInView(introRef, { once: true, amount: 0.3 })
  const isTeamGridInView = useInView(teamGridRef, { once: true, amount: 0.1 })

  const teamMembers = [
    {
      id: 1,
      name: "Lakhvir Singh",
      title: "CEO/Outbound Team",
      email: "lucky@dtltransport.com",
      bio: "Lucky leads DTL Transport with a sharp eye for operations and growth. As CEO, he guides the outbound team and company strategy, ensuring every shipment meets our commitment to reliability and performance. His leadership drives innovation and customer satisfaction across all departments.",
      imageSrc: "/staff/user1.png",
    },
    {
      id: 2,
      name: "Jaspreet Singh",
      title: "Outbound Team",
      email: "jass@dtltransport.com",
      bio: "Jass plays a pivotal role in managing outbound freight logistics, ensuring timely and efficient deliveries. With a keen understanding of routing and scheduling, he supports smooth communication between dispatch, drivers, and clients to maintain top-tier service.",
      imageSrc: "/staff/user2.png",
    },
    {
      id: 3,
      name: "Rupinder Dosanjh",
      title: "Logistics Manager",
      email: "bobby@dtltransport.com",
      bio: "Bobby brings strong logistics expertise to our inbound operations. He manages the arrival of equipment with precision, working closely with drivers and warehouse teams to maintain an efficient and organized workflow.",
      imageSrc: "/staff/user3.png",
    },
    {
      id: 4,
      name: "Inderjit Singh",
      title: "Financial Operations",
      email: "inder@dtltransport.com",
      bio: "Inder oversees all financial operations at DTL from billing to payroll. With a focus on accuracy and efficiency, he ensures financial health and transparency across the company.",
      imageSrc: "/staff/user4.png",
    },
    {
      id: 5,
      name: "Hitender Sidhu",
      title: "Inbound Team",
      email: "hit@dtltransport.com",
      bio: "Hit works alongside the inbound team to ensure freight is received accurately and on time. His proactive coordination and attention to detail keep our supply chain moving without delays.",
      imageSrc: "/staff/user5.png",
    },
    {
      id: 6,
      name: "Bhawna",
      title: "HR Department",
      email: "bhawna@dtltransport.com",
      bio: "Kain is dedicated to finding the best talent for Dtl Transportation. With a keen eye for identifying potential and a strong commitment to each candidate's journey, Kain ensures that new team members are welcomed and well-prepared for success in their roles.",
      imageSrc: "/staff/user6.png",
    },
    {
      id: 7,
      name: "Khou Her",
      title: "HR Department",
      email: "lkhou@dtltransport.com",
      bio: "Khou contributes to DTL's HR functions with a focus on employee well-being and compliance. Her dedication to maintaining a positive work environment ensures smooth HR operations.",
      imageSrc: "/staff/user7.png",
    },
    {
      id: 8,
      name: "Selene Morales",
      title: "HR Department",
      email: "selene@dtltransport.com",
      bio: "Selene assists the HR team in supporting staff and enhancing internal communication. Her commitment to employee engagement helps keep our culture strong and unified.",
      imageSrc: "/staff/user8.png",
    },
    {
      id: 9,
      name: "Robert Deleon",
      title: "Maintenance / Safety",
      email: "robert@dtltransport.com",
      bio: "Robert keeps our fleet in peak condition. As part of the safety team, he ensures that all maintenance protocols are followed and equipment is road-ready, prioritizing safety and compliance.",
      imageSrc: "/staff/user9.png",
    },
    {
      id: 10,
      name: "Eric Wickliffe",
      title: "Maintenance / Safety",
      email: "eric@dtltransport.com",
      bio: "Red works closely with the maintenance team to uphold the highest safety standards. His hands-on approach ensures DTL trucks and trailers are reliable and meet all regulations.",
      imageSrc: "/staff/user10.png",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    }),
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
  }

  return (
    <>
      <PageHeader
        title="Let's Meet"
        subtitle=""
        imageSrc="/staff-hero.png"
        imageAlt="DTL Transport truck parking facility"
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={introRef}
          className="text-white flex flex-col md:flex-row gap-4 my-8 md:my-10 max-w-6xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isIntroInView ? "visible" : "hidden"}
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.h2
              className="text-2xl font-bold md:hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={isIntroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Meet Our Dedicated Operations & Support Team
            </motion.h2>
            <motion.h2
              className="hidden md:block text-2xl md:text-5xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={isIntroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span className="block" variants={textRevealVariants} custom={0}>
                Meet Our
              </motion.span>
              <motion.span className="block" variants={textRevealVariants} custom={1}>
                Dedicated
              </motion.span>
              <motion.span className="block" variants={textRevealVariants} custom={2}>
                Operations &
              </motion.span>
              <motion.span className="block" variants={textRevealVariants} custom={3}>
                Support Team
              </motion.span>
            </motion.h2>
          </motion.div>
          <motion.div
            className="md:w-2/3"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <motion.p className="text-sm md:text-base lg:text-lg font-light leading-relaxed">
              At DTL Transport, our team is the driving force behind everything we do. From dispatch and inbound
              logistics to HR, accounting, and fleet maintenance — each member plays a vital role in delivering
              excellence on the road and behind the scenes. With a shared commitment to safety, service, and innovation,
              our staff works around the clock to support drivers, partners, and our growing network. Get to know the
              passionate individuals who keep DTL Transport moving forward every mile of the way.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="min-h-screen p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-white text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={isTeamGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Our Leadership Team
            </motion.h2>

            <motion.div
              ref={teamGridRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isTeamGridInView ? "visible" : "hidden"}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-royalpurple/40 rounded-lg p-4 md:p-6 flex flex-col"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -10px rgba(83, 5, 184, 0.5)",
                    backgroundColor: "rgba(83, 5, 184, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Top section with image, name, title */}
                  <div className="flex items-center justify-between md:justify-normal mb-4">
                    <motion.div
                      className="w-40 h-40 mr-2 flex-shrink-0 overflow-hidden rounded-lg"
                      variants={imageVariants}
                    >
                      <motion.img
                        src={member.imageSrc || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    <div className="flex flex-col justify-center">
                      <motion.h3
                        className="text-white text-xl md:text-2xl font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-purple text-lg md:font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      >
                        {member.title}
                      </motion.p>
                      <motion.p
                        className="text-white text-md md:font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                      >
                        {member.email}
                      </motion.p>
                    </div>
                  </div>

                  {/* Bio section below */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  >
                    <motion.p
                      className="text-white/80 text-sm md:text-lg leading-relaxed mb-6 md:mb-20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.6 + index * 0.05 }}
                    >
                      {member.bio}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
