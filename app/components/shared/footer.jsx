'use client'

import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'

export default function Footer() {
  const [distance, setDistance] = useState(750)
  const [date, setDate] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    freightType: '',
    loadType: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: '', type: '' })

    // Form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !date ||
      !formData.freightType ||
      !formData.loadType
    ) {
      setMessage({ text: 'Please fill in all required fields', type: 'error' })
      setLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' })
      setLoading(false)
      return
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    try {
      const formDataToSend = new FormData()
      formDataToSend.append(
        'access_key',
        '93119b65-2a92-437e-a3ee-3fa223728d66'
      )

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })
      formDataToSend.append(
        'date',
        date ? date.toISOString().split('T')[0] : ''
      )
      formDataToSend.append('distance', distance.toString())

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.status === 200) {
        setMessage({
          text: 'Quote request submitted successfully!',
          type: 'success',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          freightType: '',
          loadType: '',
        })
        setDate(null)
        setDistance(750)
      } else {
        setMessage({
          text: result.message || 'Something went wrong!',
          type: 'error',
        })
      }
    } catch (error) {
      console.error(error)
      setMessage({
        text: 'Failed to submit the form. Please try again.',
        type: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className='text-white'>
      {/* Main Footer Content */}
      <div className='bg-[#5305B866] mx-auto px-4 py-12 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Column - Contact Info */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-5xl font-bold'>Contact</h2>
              <p className='text-lg max-w-md'>
                Get in touch for quick quotes, service info, or custom freight
                solutions. Letss move your cargo, The right way.
              </p>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <div className='bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center'>
                  <MapPin className='text-purple-800 h-6 w-6' />
                </div>
                <span className='text-xl'>
                  Headquarters: Fresno, California
                </span>
              </div>

              <div className='flex items-center gap-4'>
                <div className='bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center'>
                  <Phone className='text-purple-800 h-6 w-6' />
                </div>
                <span className='text-xl'>(559) 289-4424</span>
              </div>

              <div className='flex items-center gap-4'>
                <div className='bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center'>
                  <Mail className='text-purple-800 h-6 w-6' />
                </div>
                <span className='text-xl'>lucky@dtltrans.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Request Quote Form */}
          <div className='bg-gray-300 rounded-3xl p-8 relative'>
            {message.text && (
              <div
                className={`absolute top-4 left-4 right-4 p-4 rounded-xl ${
                  message.type === 'success'
                    ? 'bg-green-500/90'
                    : 'bg-red-500/90'
                } text-white text-center transition-all duration-300 ease-in-out`}
              >
                {message.text}
              </div>
            )}

            <h2 className='text-purple-800 text-3xl font-bold text-center mb-6'>
              Request a Quote
            </h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Name'
                    className='w-full p-3 border-2 border-purple-800 rounded-xl bg-transparent text-purple-800 placeholder-purple-800'
                    required
                  />
                  <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                    <div className='w-5 h-5 text-purple-800'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <circle cx='12' cy='8' r='5' />
                        <path d='M20 21v-2a7 7 0 0 0-14 0v2' />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='relative'>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Email'
                    className='w-full p-3 border-2 border-purple-800 rounded-xl bg-transparent text-purple-800 placeholder-purple-800'
                    required
                  />
                  <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                    <Mail className='w-5 h-5 text-purple-800' />
                  </div>
                </div>

                <div className='relative'>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='Phone'
                    className='w-full p-3 border-2 border-purple-800 rounded-xl bg-transparent text-purple-800 placeholder-purple-800'
                    required
                  />
                  <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                    <Phone className='w-5 h-5 text-purple-800' />
                  </div>
                </div>

                <div className='relative'>
                  <DatePicker
                    onChange={setDate}
                    value={date}
                    calendarIcon={null}
                    clearIcon={null}
                    format='y-MM-dd'
                    className='w-full p-3 rounded-xl bg-transparent text-purple-800 placeholder-purple-800
                      border-2 border-[#673DB8] focus:border-[#673DB8B8]'
                    required
                  />
                  <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='w-5 h-5 text-[#673DB8]'
                    >
                      <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
                      <line x1='16' y1='2' x2='16' y2='6' />
                      <line x1='8' y1='2' x2='8' y2='6' />
                      <line x1='3' y1='10' x2='21' y2='10' />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-purple-800 font-medium'>
                  Distance (Miles):
                </label>
                <div className='flex items-center gap-4'>
                  <input
                    type='range'
                    min='0'
                    max='2373'
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className='flex-1 h-2 appearance-none bg-gray-400 rounded-lg
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-purple-800'
                  />
                  <div className='border-2 border-purple-800 rounded-xl px-4 py-2 text-purple-800 min-w-24 text-center'>
                    {distance} Miles
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative'>
                  <select
                    name='freightType'
                    value={formData.freightType}
                    onChange={handleInputChange}
                    className='w-full p-3 border-2 border-purple-800 rounded-xl bg-transparent text-purple-800 appearance-none'
                    required
                  >
                    <option value=''>Freight Type</option>
                    <option value='Full Truckload'>Full Truckload</option>
                    <option value='LTL'>LTL</option>
                    <option value='Refrigerated'>Refrigerated</option>
                    <option value='Hazardous'>Hazardous</option>
                  </select>
                  <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='w-5 h-5 text-purple-800'
                    >
                      <polyline points='6 9 12 15 18 9' />
                    </svg>
                  </div>
                </div>

                <div className='relative'>
                  <select
                    name='loadType'
                    value={formData.loadType}
                    onChange={handleInputChange}
                    className='w-full p-3 border-2 border-purple-800 rounded-xl bg-transparent text-purple-800 appearance-none'
                    required
                  >
                    <option value=''>Load</option>
                    <option value='Pallets'>Pallets</option>
                    <option value='Boxes'>Boxes</option>
                    <option value='Containers'>Containers</option>
                    <option value='Bulk'>Bulk</option>
                  </select>
                  <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='w-5 h-5 text-purple-800'
                    >
                      <polyline points='6 9 12 15 18 9' />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <button
                  type='submit'
                  disabled={loading}
                  className={`bg-[#5305B8] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300
                    ${
                      loading
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-[#5305B8]/80'
                    }`}
                >
                  {loading ? 'Submitting...' : 'Contact Us'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className='py-8 px-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <Image
                  src='/logo.png'
                  alt='DTL Transport Logo'
                  width={120}
                  height={60}
                  className=' rounded-lg p-1'
                />
              </div>
              <p className='text-lg max-w-md'>
                DTL is your trusted U.S. trucking partner, delivering reliable
                freight solutions with modern fleets and clear communication.
              </p>
              <div className='flex gap-2'>
                <Link href='#' className='bg-white rounded-full p-2'>
                  <Facebook className='w-5 h-5 text-purple-800' />
                </Link>
                <Link href='#' className='bg-white rounded-full p-2'>
                  <Mail className='w-5 h-5 text-purple-800' />
                </Link>
                <Link href='#' className='bg-white rounded-full p-2'>
                  <Instagram className='w-5 h-5 text-purple-800' />
                </Link>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-3xl font-bold text-[rgba(103,61,184,0.72)]'>
                About Us
              </h3>
              <p className='text-lg'>
                DTL is a professional freight carrier committed to dependable,
                on-time delivery across the U.S. With a modern fleet and
                industry expertise, we provide scalable logistics solutions
                tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className='flex flex-wrap justify-center gap-x-8 gap-y-2 pt-8 pb-4'
            style={{
              borderTop: '2px solid',
              borderImage: 'linear-gradient(90deg, #5305B8 0%, #250252 100%) 1',
            }}
          >
            <Link href='/' className='hover:underline text-lg'>
              Home
            </Link>
            <Link href='/about' className='hover:underline text-lg'>
              About Us
            </Link>
            <Link href='/services' className='hover:underline text-lg'>
              Services
            </Link>
            <Link href='/contact' className='hover:underline text-lg'>
              Contact Us
            </Link>
            <Link href='/staff' className='hover:underline text-lg'>
              Our Staff
            </Link>
            <Link href='/team' className='hover:underline text-lg space-y-2'>
              Terms & Policy
            </Link>
          </div>

          {/* Copyright */}
          <div
            className='
pt-4'
          >
            <p>© 2025 DTL Parking, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
