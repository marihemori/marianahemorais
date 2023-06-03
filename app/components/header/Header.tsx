"use client"

import styled from 'styled-components'
import { Space_Grotesk } from 'next/font/google'
import { MoonStars } from '@phosphor-icons/react'
import Link from 'next/link';

const space = Space_Grotesk({
    weight: ['700'],
    subsets: ['latin'],
})

const headerNavigation = [
    { name: "Home", href: "/"},
    { name: "About", href: "/about"},
    { name: "Portfolio", href: "/portfolio"},
    { name: "Blog", href: "/blog"}
]

const Logo = styled.a`
    font-weight: 400;
    font-size: 1.5rem;
`

export default function Header() {
    return (
        <header className='py-10 mb-8'>
            <nav className='flex flex-row justify-between'>
                <Link href="/">
                    <Logo className={space.className}>Mariana M.</Logo>
                </Link>
                <ul className='flex flex-row gap-10'>
                    {headerNavigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="duration-500 text-white hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
                <MoonStars size={28} />
            </nav>
        </header>
    )
}