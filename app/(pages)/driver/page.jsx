'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeroSection from '@/app/components/HeroSection/HeroSection'

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
]

const documents = [
  'Driving License',
  'Work Permit',
  'Green Card',
  'Social Security',
  'Other',
]

const hearAboutUs = [
  // 'Ad on Facebook',
  // 'Goulet Facebook Page',
  'Craigslist',
  'Saw our Trucks / Spoke with a driver',
  'Ad on another site',
]

const DriverForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    homePhone: '',
    cellPhone: '',
    street: '',
    zip: '',
    city: '',
    state: '',
    experience: '',
    age21: '',
    military: '',
    violations: '',
    accidents: '',
    dui: '',
    citations: '',
    hearAbout: '',
  })
  const [documents, setDocuments] = useState([])
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })
  const [states, setStates] = useState([])
  const [statesLoading, setStatesLoading] = useState(true)

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://us-states.p.rapidapi.com/basic',
          headers: {
            'x-rapidapi-key':
              '7598a01531msha15b1581980db2cp15ec1ajsn8a55f732d885',
            'x-rapidapi-host': 'us-states.p.rapidapi.com',
          },
        }
        const response = await axios.request(options)
        // Transform the API response to match our needs
        const statesList = response.data.map((state) => ({
          name: state.name,
          abbreviation: state.abbreviation,
        }))
        setStates(statesList)
        setStatesLoading(false)
      } catch (error) {
        console.error('Error fetching states:', error)
        setStatesLoading(false)
      }
    }

    fetchStates()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size / 1024 > 1000) {
      setMessage({ text: 'Please upload file less than 1 MB', type: 'error' })
      e.target.value = ''
      return
    }
    if (e.target.name === 'resume') {
      setResume(file)
    } else {
      setDocuments([...documents, file])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: '', type: '' })

    try {
      const formDataToSend = new FormData()

      // Append your access key
      formDataToSend.append(
        'access_key',
        '93119b65-2a92-437e-a3ee-3fa223728d66'
      )

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      // Append files
      if (resume) {
        formDataToSend.append('resume', resume)
      }
      documents.forEach((doc, index) => {
        formDataToSend.append(`document_${index}`, doc)
      })

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.status === 200) {
        setMessage({ text: result.message, type: 'success' })
        e.target.reset()
        setFormData({})
        setDocuments([])
        setResume(null)
      } else {
        setMessage({
          text: result.message || 'Something went wrong!',
          type: 'error',
        })
      }
    } catch (error) {
      console.error(error)
      setMessage({ text: 'Something went wrong!', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const driverHeroProps = {
    backgroundImage: '/driver-hero.png',
    welcomeText: 'Welcome to DTL',
    mainHeading: 'Are You A Driver?',
    subHeading:
      'Join our growing family! We are always looking for drivers and employees who want to use their talents to their full potential.',
    ctaText: 'Apply Now',
    ctaLink: '#driver-form',
    height: 'h-[600px] md:h-[700px]',
  }

  return (
    <>
      <HeroSection {...driverHeroProps} />
      <div
        id='driver-form'
        className='min-h-screen w-full flex items-center justify-center'
      >
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-3xl bg-blue/40 p-8 rounded-xl shadow-lg backdrop-blur-md text-white my-5'
        >
          {message.text && (
            <div
              className={`mb-4 p-4 rounded ${message.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}
            >
              {message.text}
            </div>
          )}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block mb-1'>First Name</label>
              <input
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
              />
            </div>
            <div>
              <label className='block mb-1'>Last Name</label>
              <input
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
              />
            </div>
          </div>
          <div className='mt-6'>
            <label className='block mb-1'>Email Address</label>
            <input
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
              required
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div>
              <label className='block mb-1'>Home Phone Number</label>
              <input
                name='homePhone'
                value={formData.homePhone}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
              />
            </div>
            <div>
              <label className='block mb-1'>Cell Phone Number</label>
              <input
                name='cellPhone'
                value={formData.cellPhone}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div>
              <label className='block mb-1'>Street</label>
              <input
                name='street'
                value={formData.street}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
              />
            </div>
            <div>
              <label className='block mb-1'>ZIP</label>
              <input
                name='zip'
                value={formData.zip}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div>
              <label className='block mb-1'>City</label>
              <select
                name='city'
                value={formData.city}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
              >
                <option value=''>Select City</option>
                {cities.map((city) => (
                  <option className='text-royalblue' key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className='block mb-1'>State</label>
              <select
                name='state'
                value={formData.state}
                onChange={handleInputChange}
                className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
                required
                disabled={statesLoading}
              >
                <option value=''>Select State</option>
                {statesLoading ? (
                  <option value='' disabled>
                    Loading states...
                  </option>
                ) : (
                  states.map((state) => (
                    <option
                      className='text-royalblue'
                      key={state.name}
                      value={state.name}
                    >
                      {state.name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className='mt-6'>
            <label className='block mb-1'>
              How many years of Truck Driving experience?
            </label>
            <input
              name='experience'
              value={formData.experience}
              onChange={handleInputChange}
              className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
              required
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div>
              <label className='block mb-1'>At least 21 years old</label>
              <div className='flex gap-4 mt-1'>
                <label
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='age21'
                    value='Yes'
                    className='accent-royalblue'
                    checked={formData.age21 === 'Yes'}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>

                <label
                  className={`flex items-center gap-1 cursor-pointer `}
                >
                  <input
                    type='radio'
                    name='age21'
                    value='No'
                    className='accent-royalblue'
                    checked={formData.age21 === 'No'}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className='block mb-1'>
                Currently serving or a military veteran?
              </label>
              <div className='flex gap-4 mt-1'>
                <label
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='military'
                    value='Yes'
                    style={{ accentColor: '#014A7F' }}
                    checked={formData.military === 'Yes'}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>

                <label
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='military'
                    value='No'
                    style={{ accentColor: '#014A7F' }}
                    checked={formData.military === 'No'}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <label className='block mb-1'>
              How many moving violations have you had in the last 5 years?
            </label>
            <input
              name='violations'
              value={formData.violations}
              onChange={handleInputChange}
              className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
              required
            />
          </div>
          <div className='mt-6'>
            <label className='block mb-1'>
              How many accidents in total did you have in the last 3 years?
            </label>
            <input
              name='accidents'
              value={formData.accidents}
              onChange={handleInputChange}
              className='w-full bg-transparent border border-white rounded px-3 py-2 outline-none'
              required
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div>
              <label className='block mb-1'>
                Have you ever been charged/convicted of a DUI/OWI?
              </label>
              <div className='flex gap-4 mt-1'>
                <label
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='dui'
                    value='Yes'
                    style={{ accentColor: '#014A7F' }}
                    checked={formData.dui === 'Yes'}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>

                <label
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='dui'
                    value='No'
                    style={{ accentColor: '#014A7F' }}
                    checked={formData.dui === 'No'}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className='block mb-1'>
                Have you had any CITATIONS in the last 5 years?
              </label>
              <div className='flex gap-4 mt-1'>
                <label
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='citations'
                    value='Yes'
                    style={{ accentColor: '#014A7F' }}
                    checked={formData.citations === 'Yes'}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>

                <label
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='citations'
                    value='No'
                    style={{ accentColor: '#014A7F' }}
                    checked={formData.citations === 'No'}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <label className='block mb-1'>Upload your CV / Resume here</label>
            <input
              type='file'
              name='resume'
              onChange={handleFileChange}
              className='w-full text-white file:bg-royalblue file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:mr-4'
              required
            />
          </div>
          <div className='mt-6'>
            <label className='block mb-1'>
              Select and Upload your Documents
            </label>
            <div className='flex flex-wrap gap-4 mb-2'>
              {documents.map((doc) => (
                <label key={doc.name} className='flex items-center gap-1'>
                  <input type='checkbox' style={{ accentColor: '#014A7F' }} />{' '}
                  {doc.name}
                </label>
              ))}
            </div>
            <input
              type='file'
              className='w-full text-white file:bg-royalblue file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:mr-4'
            />
          </div>
          <div className='mt-6'>
            <label className='block mb-1'>How did you hear about us?</label>
            <div className='flex flex-col gap-2'>
              {hearAboutUs.map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-1 cursor-pointer`}
                >
                  <input
                    type='radio'
                    name='hearAbout'
                    value={opt}
                    style={{ accentColor: '#014A7F' }}
                    checked={formData.hearAbout === opt}
                    onChange={handleInputChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <button
            type='submit'
            disabled={loading}
            className={`mt-8 w-full bg-blue hover:bg-blue/80 text-white font-bold py-3 rounded transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  )
}

export default DriverForm
