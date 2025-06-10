'use client'

import localFont from 'next/font/local'
import { AnimatePresence } from 'framer-motion'
import './globals.css'
import NavBar from './components/nav-bar'
import Footer from './components/shared/footer'
import { futuraHeavy } from './font'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

export default function ClientLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${futuraHeavy.variable} container mx-auto antialiased`}
      >
        <AnimatePresence mode='wait'>
          {/* <NavBar /> */}
          {children}
          <Footer />
        </AnimatePresence>
      </body>
    </html>
  )
}
