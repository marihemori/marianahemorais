"use client"

import styled from 'styled-components'
import { Space_Grotesk } from 'next/font/google'
import { GithubLogo, LinkedinLogo, BehanceLogo, CodepenLogo, GoodreadsLogo } from '@phosphor-icons/react'
import Link from 'next/link';

const space = Space_Grotesk({
    weight: ['700'],
    subsets: ['latin'],
})


export const icons = {
    GithubLogo,
    LinkedinLogo,
    BehanceLogo,
    CodepenLogo,
    GoodreadsLogo
};

interface MenuItem {
    label: string;
    href: string;
    icon: keyof typeof icons;
}


export default function SocialIcons() {
    const menuItems: MenuItem[] = [
        { label: "GitHub", href: "https://github.com/marihemori", icon: "GithubLogo" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marianahemorais/", icon: "LinkedinLogo" },
        { label: "Behance", href: "https://www.behance.net/marianahemorais", icon: "BehanceLogo" },
        { label: "Codepen", href: "https://codepen.io/marianahemorais", icon: "CodepenLogo" },
        { label: "Goodreads", href: "https://www.goodreads.com/marihemori", icon: "GoodreadsLogo" },
    ];
    return (
        <div className='flex flex-col gap-6 place-content-center h-screen'>
          {menuItems.map(({ label, href, icon }) => {
            const Icon = icons[icon];
            return (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="duration-500 text-white hover:text-zinc-300"
              >
                <Icon size={28} className='float-right' />
              </Link>
            );
          })}
          <br />
        </div>
      );
}