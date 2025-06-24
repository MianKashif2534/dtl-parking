/* eslint-disable react/no-unescaped-entities */
'use client'

import {
  Calendar,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { motion, useInView } from 'framer-motion'

export default function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })

  return (
    <motion.footer
      ref={footerRef}
      className='text-white overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id='footer-contact'
    >
      {/* Main Footer Content */}
      <div className='bg-royalblue/40'>
        <div className='max-w-7xl mx-auto px-4 py-8 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative'>
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <ContactInfo />
            </motion.div>

            {/* Right Column - Request Quote Form */}
            <motion.div
              className='md:absolute md:right-0'
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className='max-w-7xl mx-auto'>
        <FooterBottom />
      </div>
    </motion.footer>
  )
}

const ContactItem = ({ icon, text, href, delay = 0 }) => (
  <motion.div
    className='flex items-center gap-4'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
  >
    <motion.div
      className='bg-white rounded-full p-2 md:p-3 w-8 md:w-12 h-8 md:h-12 flex items-center justify-center'
      whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(255,255,255,0.5)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {icon}
    </motion.div>
    {href ? (
      <motion.a
        href={href}
        className='text-lg md:text-xl hover:text-purple transition-colors'
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {text}
      </motion.a>
    ) : (
      <span className='text-lg md:text-xl'>{text}</span>
    )}
  </motion.div>
)

function ContactInfo() {
  const infoRef = useRef(null)
  const isInView = useInView(infoRef, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={infoRef}
      className='space-y-8'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
    >
      <motion.div
        className='space-y-4'
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
      >
        <motion.h2
          className='text-5xl font-bold'
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: 'easeOut', type: 'spring' },
            },
          }}
        >
          Contact
        </motion.h2>
        <motion.p
          className='md:text-lg font-light max-w-md'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
        >
          Get in touch for quick quotes, service info, or custom freight
          solutions. Let's move your cargo, the right way.
        </motion.p>
      </motion.div>

      <div className='space-y-4'>
        <ContactItem
          icon={<MapPin className='text-royalblue h-6 w-6' />}
          text='Address: Fresno, California'
          delay={0.3}
        />
        <ContactItem
          icon={<Phone className='text-royalblue h-6 w-6' />}
          text='(559) 289-4424'
          href='tel:+15592894424'
          delay={0.4}
        />
        <ContactItem
          icon={<Mail className='text-royalblue h-6 w-6' />}
          text='lucky@dtltrans.com'
          href='mailto:lucky@dtltrans.com'
          delay={0.5}
        />
      </div>
    </motion.div>
  )
}

const SocialLink = ({ href, icon }) => (
  <Link
    href={href}
    className='bg-white rounded-full p-2 hover:bg-gray-100 transition-colors'
    aria-label={`Visit our ${
      href.replace('https://', '').replace('www.', '').split('.')[0]
    } page`}
  >
    {icon}
  </Link>
)

const FooterLink = ({ href, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -2 }}
  >
    <Link
      href={href}
      className='md:text-lg border-b-2 border-white hover:border-none transition-colors'
    >
      {children}
    </Link>
  </motion.div>
)

function FooterBottom() {
  const currentYear = new Date().getFullYear()
  const bottomRef = useRef(null)
  const isInView = useInView(bottomRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={bottomRef}
      className='py-6 px-4 bg-blue'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Company Info */}
          <motion.div
            className='space-y-4'
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              className='flex items-center'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Image
                src='/logo.png'
                alt='DTL Transport Logo'
                width={120}
                height={60}
                className='rounded-lg p-1'
              />
            </motion.div>
            <motion.p
              className='md:text-lg max-w-md font-light'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              DTL is your trusted U.S. trucking partner, delivering reliable
              freight solutions with modern fleets and clear communication.
            </motion.p>
            <motion.div
              className='flex gap-2'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SocialLink
                href='https://facebook.com/dtltransport'
                icon={<Facebook className='w-5 h-5 text-royalblue' />}
                delay={0.9}
              />
              <SocialLink
                href='mailto:info@dtltrans.com'
                icon={<Mail className='w-5 h-5 text-royalblue' />}
                delay={1.0}
              />
              <SocialLink
                href='https://instagram.com/dtltransport'
                icon={<Instagram className='w-5 h-5 text-royalblue' />}
                delay={1.1}
              />
            </motion.div>
          </motion.div>

          {/* About Us */}
          <motion.div
            className='space-y-4 md:mt-32'
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.h3
              className='text-3xl font-bold text-white'
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              About Us
            </motion.h3>
            <motion.p
              className='md:text-lg font-light text-white/80'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              DTL is a professional freight carrier committed to dependable,
              on-time delivery across the U.S. With a modern fleet and industry
              expertise, we provide scalable logistics solutions tailored to
              your business needs.
            </motion.p>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div
          className='flex flex-wrap justify-center gap-x-2 md:gap-x-8 gap-y-2 py-4'
          style={{
            borderBottom: '4px solid',
            borderImage: 'linear-gradient(90deg, #014A7F 0%, #250252 100%) 1',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <FooterLink href='/' delay={1.1}>
            Home
          </FooterLink>
          <FooterLink href='/about' delay={1.15}>
            About Us
          </FooterLink>
          <FooterLink href='/services' delay={1.2}>
            Services
          </FooterLink>
          <FooterLink href='/team' delay={1.25}>
            Our Team
          </FooterLink>
          <FooterLink href='/staff' delay={1.3}>
            Our Staff
          </FooterLink>
          <FooterLink href='/parking' delay={1.35}>
            Parking
          </FooterLink>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className='pt-6 text-gray-400 font-light'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p>
            © {currentYear} DTL Transport LLC. All Rights Reserved.{" "}
            <Link href='https://www.timexsolutioninc.com/' className='hover:text-white' target='_blank'>
              Designed by Timex Solutions Inc.
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

function QuoteForm() {
  const [distance, setDistance] = useState(750)
  const [date, setDate] = useState(null)
  const datePickerRef = useRef(null)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [focusedInput, setFocusedInput] = useState(null)
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.2 })

  const handleIconClick = () => {
    if (datePickerRef.current) {
      // Find the input element within the date picker
      const input = datePickerRef.current.querySelector('input')
      if (input) {
        input.focus()
      }
      // Toggle calendar open state
      setCalendarOpen(!calendarOpen)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted', { date, distance })
  }

  // Add custom styles for the date picker and form elements
  useEffect(() => {
    // Add a style tag to the document head
    const style = document.createElement('style')
    style.innerHTML = `
      /* Input focus and hover styles */
      .form-input {
        transition: all 0.2s ease-in-out;
        position: relative;
        z-index: 1;
      }
      
      .form-input:hover {
        border-color: #014A7F !important;
        box-shadow: 0 0 0 1px rgba(1, 74, 127, 0.6);
      }
      
      .form-input:focus {
        border-color: #014A7F !important;
        box-shadow: 0 0 0 3px rgba(1, 74, 127, 0.6);
        outline: none;
      }
      
      .input-icon {
        transition: all 0.2s ease-in-out;
      }
      
      .form-input:focus + .input-icon-wrapper .input-icon,
      .form-input-focused .input-icon {
        color: #014A7F !important;
        transform: scale(1.1);
      }
      
      /* Select styling */
      .form-select {
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
      
      .form-select:hover {
        border-color: #014A7F !important;
        box-shadow: 0 0 0 1px rgba(1, 74, 127, 0.6);
      }
      
      .form-select:focus {
        border-color: #014A7F !important;
        box-shadow: 0 0 0 3px rgba(1, 74, 127, 0.6);
        outline: none;
      }
      
      /* Date picker styling */
      .react-date-picker {
        width: 100%;
      }
      
      .react-date-picker__wrapper {
        border: 2px solid #014A7F !important;
        border-radius: 0.75rem;
        padding: 0.5rem 0.75rem;
        background: transparent;
        color: #014A7F;
        transition: all 0.2s ease-in-out;
      }
      
      .react-date-picker__wrapper:hover {
        border-color: #014A7F !important;
        box-shadow: 0 0 0 1px rgba(1, 74, 127, 0.6);
      }
      
      .react-date-picker--focused .react-date-picker__wrapper {
        border-color: #014A7F !important;
        box-shadow: 0 0 0 3px rgba(1, 74, 127, 0.6);
      }
      
      .react-date-picker__inputGroup {
        min-width: 80%;
        flex-grow: 1;
      }
      
      .react-date-picker__inputGroup input {
        color: #014A7F;
        font-weight: 500;
      }
      
      .react-date-picker__inputGroup__divider,
      .react-date-picker__inputGroup__leadingZero {
        color: #014A7F;
      }
      
      .react-date-picker__button {
        display: none;
      }
      
      .react-date-picker__inputGroup__input::placeholder {
        color: #014A7F;
        opacity: 0.7;
      }
      
      .react-calendar {
        border-radius: 0.75rem;
        border: 2px solid #014A7F;
        background-color: #f3f4f6;
        position: absolute;
        z-index: 10;
        max-height: 300px;
        overflow: auto;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      
      .react-calendar__tile--active {
        background-color: #014A7F !important;
      }
      
      .react-calendar__tile--now {
        background-color: rgba(121, 40, 202, 0.2);
      }
      
      .react-calendar__tile:hover {
        background-color: rgba(121, 40, 202, 0.3);
      }
      
      .react-calendar__navigation button:hover,
      .react-calendar__navigation button:focus {
        background-color: rgba(1, 74, 127, 0.6);
      }
      
      /* Fix for the Fit component warning */
      .react-date-picker__calendar {
        width: 350px !important;
        max-width: 100% !important;
        transform: none !important;
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
      }
      
      .react-date-picker__calendar .react-calendar {
        width: 100% !important;
        max-height: 300px !important;
        overflow: auto !important;
      }
      
      /* Hide the warning message */
      .react-date-picker__calendar-warning {
        display: none !important;
      }
      
      /* Range slider styling */
      input[type="range"] {
        transition: all 0.2s ease-in-out;
      }
      
      input[type="range"]:hover {
        opacity: 0.9;
      }
      
      input[type="range"]:focus {
        outline: none;
      }
      
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #014A7F;
        cursor: pointer;
        border: 2px solid white;
        box-shadow: 0 0 5px rgba(1, 74, 127, 0.6);
        transition: all 0.2s ease-in-out;
      }
      
      input[type="range"]::-webkit-slider-thumb:hover {
        transform: scale(1.1);
      }
      
      input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #014A7F;
        cursor: pointer;
        border: 2px solid white;
        box-shadow: 0 0 5px rgba(1, 74, 127, 0.6);
        transition: all 0.2s ease-in-out;
      }
      
      input[type="range"]::-moz-range-thumb:hover {
        transform: scale(1.1);
      }
      
      /* Select options */
      select option {
        background-color: #f3f4f6;
        color: #014A7F;
        padding: 10px;
      }
      
      /* Distance display */
      .distance-display {
        transition: all 0.2s ease-in-out;
        font-weight: 600;
      }
      
      .distance-display:hover {
        border-color: #014A7F !important;
        background-color: rgba(121, 40, 202, 0.05);
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 50,
        damping: 15,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 5px 15px rgba(1, 74, 127, 0.6)',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.div
      ref={formRef}
      className='bg-gray-300 rounded-3xl p-4 md:p-8 shadow-lg'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={formVariants}
    >
      <motion.h2
        className='text-royalblue text-3xl font-bold text-center mb-6'
        variants={inputVariants}
      >
        Request a Quote
      </motion.h2>
      <motion.form
        className='space-y-6'
        onSubmit={handleSubmit}
        variants={formVariants}
      >
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-4'
          variants={inputVariants}
        >
          {/* Name Input */}
          <motion.div className='relative' variants={inputVariants}>
            <input
              type='text'
              placeholder='Name'
              className='form-input w-full p-3 border-2 border-royalblue rounded-xl bg-transparent text-royalblue placeholder-royalblue/70'
              required
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput(null)}
            />
            <div
              className={`absolute right-3 top-1/2 -translate-y-1/2 input-icon-wrapper ${
                focusedInput === 'name' ? 'form-input-focused' : ''
              }`}
            >
              <User className='input-icon w-5 h-5 text-royalblue' />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div className='relative' variants={inputVariants}>
            <input
              type='email'
              placeholder='Email'
              className='form-input w-full p-3 border-2 border-royalblue rounded-xl bg-transparent text-royalblue placeholder-royalblue/70'
              required
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
            />
            <div
              className={`absolute right-3 top-1/2 -translate-y-1/2 input-icon-wrapper ${
                focusedInput === 'email' ? 'form-input-focused' : ''
              }`}
            >
              <Mail className='input-icon w-5 h-5 text-royalblue' />
            </div>
          </motion.div>

          {/* Phone Input */}
          <motion.div className='relative' variants={inputVariants}>
            <input
              type='tel'
              placeholder='Phone'
              className='form-input w-full p-3 border-2 border-royalblue rounded-xl bg-transparent text-royalblue placeholder-royalblue/70'
              required
              onFocus={() => setFocusedInput('phone')}
              onBlur={() => setFocusedInput(null)}
            />
            <div
              className={`absolute right-3 top-1/2 -translate-y-1/2 input-icon-wrapper ${
                focusedInput === 'phone' ? 'form-input-focused' : ''
              }`}
            >
              <Phone className='input-icon w-5 h-5 text-royalblue' />
            </div>
          </motion.div>

          {/* Date Picker */}
          <motion.div
            className='relative'
            ref={datePickerRef}
            variants={inputVariants}
          >
            <DatePicker
              onChange={(value) => {
                setDate(value)
                setCalendarOpen(false)
              }}
              value={date}
              calendarIcon={null}
              clearIcon={null}
              format='y-MM-dd'
              dayPlaceholder='DD'
              monthPlaceholder='MM'
              yearPlaceholder='YYYY'
              className='w-full rounded-xl bg-transparent text-royalblue'
              isOpen={calendarOpen}
              onCalendarClose={() => setCalendarOpen(false)}
              onCalendarOpen={() => setCalendarOpen(true)}
              onFocus={() => setFocusedInput('date')}
              onBlur={() => setFocusedInput(null)}
            />
            <div
              onClick={handleIconClick}
              className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer input-icon-wrapper ${
                focusedInput === 'date' ? 'form-input-focused' : ''
              }`}
            >
              <Calendar className='input-icon w-5 h-5 text-royalblue' />
            </div>
          </motion.div>
        </motion.div>

        {/* Distance Slider */}
        <motion.div className='space-y-2' variants={inputVariants}>
          <label
            htmlFor='distance-slider'
            className='text-royalblue font-medium'
          >
            Distance (Miles):
          </label>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <input
              id='distance-slider'
              type='range'
              min='0'
              max='2373'
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className='flex-1 h-2 appearance-none bg-gray-400 rounded-lg'
              aria-valuemin={0}
              aria-valuemax={2373}
              aria-valuenow={distance}
              onFocus={() => setFocusedInput('distance')}
              onBlur={() => setFocusedInput(null)}
            />
            <motion.div className='distance-display border-2 border-royalblue rounded-xl px-4 py-2 text-royalblue min-w-24 text-center'>
              {distance} Miles
            </motion.div>
          </div>
        </motion.div>

        {/* Freight Type and Load Selects */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-4'
          variants={inputVariants}
        >
          <motion.div className='relative' variants={inputVariants}>
            <select
              className='form-select w-full p-3 border-2 border-royalblue rounded-xl bg-transparent text-royalblue appearance-none'
              aria-label='Freight Type'
              onFocus={() => setFocusedInput('freight')}
              onBlur={() => setFocusedInput(null)}
            >
              <option>Freight Type</option>
              <option>Full Truckload</option>
              <option>LTL</option>
              <option>Refrigerated</option>
              <option>Hazardous</option>
            </select>
            <div
              className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none input-icon-wrapper ${
                focusedInput === 'freight' ? 'form-input-focused' : ''
              }`}
            >
              <ChevronDown className='input-icon w-5 h-5 text-royalblue' />
            </div>
          </motion.div>

          <motion.div className='relative' variants={inputVariants}>
            <select
              className='form-select w-full p-3 border-2 border-royalblue rounded-xl bg-transparent text-royalblue appearance-none'
              aria-label='Load Type'
              onFocus={() => setFocusedInput('load')}
              onBlur={() => setFocusedInput(null)}
            >
              <option>Load</option>
              <option>Pallets</option>
              <option>Boxes</option>
              <option>Containers</option>
              <option>Bulk</option>
            </select>
            <div
              className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none input-icon-wrapper ${
                focusedInput === 'load' ? 'form-input-focused' : ''
              }`}
            >
              <ChevronDown className='input-icon w-5 h-5 text-royalblue' />
            </div>
          </motion.div>
        </motion.div>

        {/* Submit Button */}
        <motion.div className='flex' variants={inputVariants}>
          <motion.button
            type='submit'
            className='bg-royalblue text-white px-8 py-3 rounded-lg font-medium hover:bg-royalblue/80 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
            variants={buttonVariants}
            whileHover='hover'
            whileTap='tap'
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}
