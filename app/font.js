// app/fonts.ts
import localFont from 'next/font/local'

export const futuraHeavy = localFont({
  src: [
    {
      path: '../public/fonts/futuraef-heavy.otf', // Adjusted path
      weight: '900',
      style: 'normal',
    },
    // {
    //   path: '../../public/fonts/futuraef-medium.otf',
    //   weight: '800',
    //   style: 'normal',
    // },
  ],
  variable: '--font-futura-heavy',
})
