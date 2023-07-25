import Header from './components/header/Header'
import SocialIcons from './components/social/Social'
import Particles from './components/particles/Particles';
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mariana M.',
  description: "Mariana's portfolio",
}

const space = Space_Grotesk({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${space.className} container mx-auto h-full`}>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <Header />
        <div className='flex flex-row h-screen'>
          <main className='w-5/6'>
              {children}
          </main>
          <div className='w-1/6'>
            <SocialIcons/>
          </div>
        </div>
      </body>
    </html>
  )
}
