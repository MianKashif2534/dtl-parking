'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useWindowScroll } from 'react-use'
import { usePathname } from 'next/navigation'
import { getAllServices } from '../lib/services'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Book Parking', href: '/parking' },
  { name: 'Contact', href: '#footer-contact' },
]

export default function NavBar() {
  const services = getAllServices();
  const pathname = usePathname()
  const navRef = useRef(null)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServiceSubmenuOpen, setIsServiceSubmenuOpen] = useState(false)
  const { y: scrollY } = useWindowScroll()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isFloating, setIsFloating] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
    if (isMobileMenuOpen) setIsServiceSubmenuOpen(false)
  }

  const toggleServiceSubmenu = (e) => {
    e.preventDefault()
    setIsServiceSubmenuOpen((prev) => !prev)
  }

  useEffect(() => {
    if (scrollY === 0) {
      setIsNavVisible(true)
      setIsFloating(false)
    } else if (scrollY > lastScrollY) {
      setIsNavVisible(false)
      setIsFloating(true)
    } else if (scrollY < lastScrollY) {
      setIsNavVisible(true)
      setIsFloating(true)
    }
    setLastScrollY(scrollY)
  }, [scrollY, lastScrollY])

  const cn = (...classes) => classes.filter(Boolean).join(' ')

  return (
    <div
      ref={navRef}
      className={cn(
        'bg-[linear-gradient(90deg,_rgba(0,0,0,0.5)_0%,_rgba(98,45,192,0.15)_100%)] fixed inset-x-0 top-0 z-50 h-16 md:h-20 lg:h-24 2xl:h-32 w-full transition-all duration-700 px-4 md:px-0',
        isFloating ? 'bg-background/80 shadow-md backdrop-blur-sm' : '',
        isNavVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      )}
    >
      <header className='lg:px-12 relative h-full'>
        <nav className='flex h-full w-full items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              className='h-12 w-auto'
              src='/logo.png'
              alt='DTL Parkings'
              width={500}
              height={500}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-3'>
            {navItems.map((item) => (
              <div key={item.name} className='relative group'>
                <Link
                  href={item.href}
                  className={cn(
                    'bg-gradient-to-b from-[rgba(83,5,184,0.28)] to-[rgba(103,61,184,0.72)] text-white hover:bg-royalpurple/60 shadow-[0px_0px_4px_#5A2F99] rounded-sm px-4 py-1 text-sm 2xl:text-lg font-medium transition-all flex items-center h-10 justify-center'
                  )}
                >
                  <span className='relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full'>
                    {item.name}
                  </span>
                  {item.hasDropdown && <ChevronDown className='h-4 w-4 ml-1' />}
                </Link>

                {item.hasDropdown && (
                  <div className='absolute left-0 mt-2 w-[200px] bg-gradient-to-br from-gray-100 to-gray-200 border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] box-border rounded-lg md:rounded-[20px] backdrop-blur-[17.5px] overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 max-h-[70vh] overflow-y-auto'>
                    <div className='grid grid-cols-1 gap-1 p-2'>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className='px-4 py-2 text-sm text-gray-800 font-bold rounded-md transition-all duration-300 transform hover:translate-x-1 hover:text-royalpurple'
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Appointment Button */}
          <div className='hidden lg:flex items-center space-x-3 text-white'>
            <div>
              <Link
                href='/driver'
                className='bg-[linear-gradient(90deg,_rgba(46,27,82,0.12)_0%,_rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32'
              >
                <span className='relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full text-center'>
                  Driver <br />
                  Apply Now
                </span>
              </Link>
            </div>
            <div>
              <Link
                href="tel:18004262895"
                className='bg-[#5305B8] shadow-[0_0_4px_#5A2F99] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32'
              >
                <span className='relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full'>
                  Talk to a Recruiter <br />1 (800) 426-2895
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={toggleMobileMenu}
            className='lg:hidden text-white hover:text-royalpurple bg-royalpurple hover:bg-white p-2 rounded-xl focus:outline-none transition-colors'
            aria-label='Toggle menu'
          >
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Open menu</span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-gray-950 z-50 min-h-screen overflow-y-auto lg:hidden transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex items-center justify-between p-4'>
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              className='h-8 w-auto'
              src='/logo.png'
              alt='DTL Parkings'
              width={500}
              height={500}
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className='text-white hover:text-royalpurple bg-royalpurple hover:bg-white p-2 rounded-xl focus:outline-none'
            aria-label='Close menu'
          >
            <X className='h-5 w-5' />
          </button>
        </div>

        <div className='flex flex-col mt-5 max-h-[calc(100vh-100px)] overflow-y-auto'>
          {navItems.map((item) => (
            <div key={item.name} className='flex flex-col'>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={toggleServiceSubmenu}
                    className='py-5 text-center text-sm font-medium text-white hover:text-purple flex items-center justify-center gap-1'
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        isServiceSubmenuOpen ? 'rotate-180' : ''
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 bg-gray-950',
                      isServiceSubmenuOpen ? 'max-h-[1000px] p-2' : 'max-h-0'
                    )}
                  >
                    <Link
                      href='/services'
                      className='py-3 px-2 text-center text-sm font-medium text-white hover:text-purple block rounded'
                      onClick={toggleMobileMenu}
                    >
                      All Services
                    </Link>
                    <div className='grid grid-cols-2 gap-1 px-2'>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className='py-3 px-2 text-center text-sm font-medium text-white hover:text-purple rounded'
                          onClick={toggleMobileMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'py-5 text-center text-sm font-medium hover:text-purple',
                    pathname === item.href
                      ? 'bg-royalpurple text-white'
                      : 'text-white'
                  )}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <div className='mx-auto mt-5'>
            <div className='flex items-center space-x-3 text-white'>
              <div>
                <Link
                  href='/appointment'
                  className='bg-[linear-gradient(90deg,_rgba(46,27,82,0.12)_0%,_rgba(103,61,184,0.72)_100%)] shadow-[0_0_4px_#5A2F99] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32'
                >
                  <span className='relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full text-center'>
                    Driver <br />
                    Apply Now
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="tel:18004262895"
                  className='bg-[#5305B8] shadow-[0_0_4px_#5A2F99] rounded-sm px-4 py-1 text-sm font-medium cursor-pointer transition flex items-center min-h-10 justify-center min-w-32'
                >
                  <span className='relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full'>
                    Talk to a Recruiter <br />1 (800) 426-2895
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
