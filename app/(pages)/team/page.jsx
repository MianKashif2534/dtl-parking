/* eslint-disable react/no-unescaped-entities */
import PageHeader from "@/app/components/page-header"
import { Download, Globe, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Card component for "What We Offer" section
const BenefitCard = ({ icon: Icon, title, subtitle, description, quote, author }) => (
  <div className="relative pt-10 pb-6">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
      <div className="bg-[#0a2a5e] p-3 w-16 h-16 flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>

    <div className="bg-white min-h-[500px] rounded-md rounded-b-none border-b-8 border-royalpurple/90 p-6 h-full flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold text-royalpurple text-center mb-1">{title}</h3>
      <p className="text-lg md:text-xl text-royalpurple font-semibold text-center mb-4">{subtitle}</p>

      <p className="text-sm md:text-base mb-4 font-light text-royalpurple text-center">{description}</p>

      <div className="mt-auto italic text-xs md:text-sm text-royalpurple text-center">
        <p className="font-semibold">
          "{quote}" — {author}
        </p>
      </div>
    </div>
  </div>
)

// Team Member Card component
const TeamMemberCard = ({ name, role, email, image, description }) => (
  <div className="bg-royalpurple/40 px-3 py-4 md:p-6 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(151,71,255,0.3)]">
    <div className="flex flex-col sm:flex-row gap-6 items-center mb-6 md:mb-12">
      <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-royalpurple">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h3 className="text-xl md:text-3xl font-bold text-center sm:text-left">{name}</h3>
        <p className="text-purple md:text-xl font-semibold text-center sm:text-left">{role}</p>
        <a href={`mailto:${email}`} className="text-sm md:text-xl text-center sm:text-left hover:text-purple transition-colors">
          {email}
        </a>
      </div>
    </div>
    <p className="text-sm md:text-lg font-extralight leading-relaxed text-center md:text-left">{description}</p>
  </div>
)

export default function TeamPage() {
  // Benefits data
  const benefits = [
    {
      icon: Download,
      title: "Get Paid for Your Hard Work",
      subtitle: "Rolling Rewards.",
      description:
        "We know why you're here — you want to get paid, and we make sure you're compensated for every mile you drive. But we also appreciate that we prioritize their financial success with competitive pay rates, performance incentives, and bonuses. Whether you're on the open road or completing a dedicated route, we're here to keep your wheels turning and your earnings growing.",
      quote: "DTL understands that money matters. They pay, and they pay on time.",
      author: "Robbie",
    },
    {
      icon: Shield,
      title: "Be Appreciated for What You Do",
      subtitle: "We're Here for You.",
      description:
        "At DTL, we believe respect goes a long way. Our team is dedicated to making sure drivers feel supported every step of the way. If you have questions or need assistance, you can count on us to pick up the phone and respond quickly. You're part of a community that values open communication, reliability, and treating drivers like family.",
      quote: "When I call, they answer. They take the time to help me, and I always feel appreciated.",
      author: "Mike",
    },
    {
      icon: Globe,
      title: "Join a Team That Cares",
      subtitle: "A Culture of Connection.",
      description:
        "DTL is more than just a transportation company; we're a team bound by respect and camaraderie. When you're out on the road, you'll always have a team behind you that values your safety and well-being. From our Driver Managers to our support staff, we all work together to keep you safe, connected, and part of something bigger.",
      quote: "The team at DTL is indescribably welcoming — it's like family.",
      author: "Alex",
    },
  ]

  // Team members data
  const teamMembers = [
    {
      name: "Julianne Bernard",
      role: "Director of Recruiting",
      email: "jbernard@newdtlinc.com",
      image: "/about/user-4.png",
      description:
        "Julianne brings a wealth of experience to DTL Transportation, approaching driver recruitment with a knack for strategic growth and a passion for success. As Director of Recruiting, she ensures that each hire aligns with our values and mission, helping to build a workforce that's not only skilled but also passionate about making a difference on the road.",
    },
    {
      name: "Kain Coronel",
      role: "Recruiting Manager",
      email: "kcoronel@newdtlinc.com",
      image: "/about/user-3.png",
      description:
        "Kain is dedicated to finding the best talent for DTL Transportation. With a keen eye for identifying potential and a strong commitment to each candidate's journey, Kain ensures that new team members are welcomed and well-prepared for success in their roles.",
    },
    {
      name: "Gabe Chaidez",
      role: "Recruiting Specialist",
      email: "gchaidez@newdtlinc.com",
      image: "/about/user-2.png",
      description:
        "Gabe is a vital part of the recruiting team, known for his friendly and approachable style as he builds strong relationships with prospective drivers and support staff, guiding them through each step of the hiring process and ensuring they feel like part of the Legend family from day one.",
    },
    {
      name: "John Worthey",
      role: "Driver Recruiter",
      email: "jworthey@newdtlinc.com",
      image: "/about/user-1.png",
      description:
        "John brings dedication and enthusiasm to his recruiting role, supporting candidates with a commitment to transparency and integrity. He takes pride in matching drivers with opportunities that align with their skills and ambitions while helping careers with us.",
    },
  ]

  return (
    <>
      <PageHeader
        title="Talk to Expert"
        subtitle=""
        imageSrc="/team-hero.png"
        imageAlt="DTL Transport truck parking facility"
      />
      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto overflow-hidden text-white py-8 px-4 md:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-bold">
                <span className="text-white">Keep Rolling and </span>
                <span className="text-purple">Get Paid</span>
              </h1>
              <h2 className="text-xl md:text-3xl font-bold flex items-center gap-2">
                <span className="w-6 h-0.5 bg-white"></span>
                <span>Join the DTL Family</span>
              </h2>
            </div>

            <p className="text-sm md:text-lg leading-relaxed font-extralight max-w-xl">
              At DTL Transportation, we don't just offer a job; we provide a fulfilling career where you're valued and
              supported every mile of the way. Our commitment to treating drivers with the respect they deserve sets us
              apart. With us, you're not just a number; you're part of a family that's dedicated to your success on and
              off the road.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">Step into Becoming Legendary!</h3>

              <div className="border-l-4 border-white p-4 w-full md:w-1/2 transition-transform hover:scale-105 bg-gradient-to-r from-[rgba(90,47,153,0.4)] to-[#0B0428]">
                <p className="text-2xl font-semibold">Talk to a Recruiter:</p>
                <a href="tel:+15592894424" className="text-lg hover:text-purple transition-colors">
                  (559) 289-4424
                </a>
              </div>
            </div>
          </div>

          <div className="h-full overflow-hidden">
            <Image
              src="/about/about-left.png"
              alt="DTL Transportation Driver"
              width={400}
              height={400}
              className="object-cover rounded-md transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative w-full max-w-6xl mx-auto text-white my-8 md:py-12 px-4 md:px-8">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 md:mb-12">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              subtitle={benefit.subtitle}
              description={benefit.description}
              quote={benefit.quote}
              author={benefit.author}
            />
          ))}
        </div>

        <div className="text-center mt-6 md:mt-12">
          <Link
            href="/careers/apply"
            className="inline-block bg-gradient-to-r from-[rgba(46,27,82,0.12)] to-[rgba(103,61,184,0.72)] text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-[0_0_4px_#5A2F99] hover:shadow-[0_0_15px_rgba(151,71,255,0.5)] hover:translate-y-[-2px]"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full max-w-6xl mx-auto text-white py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold">
                Meet Our
                <br />
                Dedicated
                <br />
                Executive Team —
                <br />
                <span className="text-purple">Recruiting</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm md:text-base font-light leading-relaxed">
                Our Recruiting Team is passionate about connecting talented drivers and professionals with rewarding
                careers at DTL Transportation. With a commitment to building a culture of respect, safety, and growth,
                our team works tirelessly to ensure each recruit finds their perfect fit within our company. Meet the
                leaders who are guiding our drivers toward success on the road.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                email={member.email}
                image={member.image}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
