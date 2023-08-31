'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const space = Space_Grotesk({
  weight: ['700'],
  subsets: ['latin'],
})

export default function SocialIcons() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-3 flex flex-col place-content-center gap-6">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
        <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        <SocialIcon kind="behance" href={siteMetadata.behance} size={6} />
        {/* <SocialIcon kind="goodreads" href={siteMetadata.github} size={6} /> */}
      </div>
    </div>
  )
}
