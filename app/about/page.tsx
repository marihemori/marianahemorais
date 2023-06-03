"use client"

export const metadata = {
    title: 'Mariana M. - About',
    description: 'About me',
}

import styled from 'styled-components'
import Image from 'next/image';

  export default function Home() {
    return (
      <main>
        <div className='text-center mb-10'>
          <h1 className='font-medium text-lg'>About me 📜</h1>
        </div>
        <section className='flex justify-between'>
          <div>
            <p>I work with website development, and I study technologies to build beautiful and well-structured applications.</p>
            <p className='mt-6 mb-2'>Some technologies I’m learning: </p>
            <ul className='list-disc ml-4'>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>JS</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>C-Sharp</li>
            </ul>
            <p className='mt-6 mb-2'>Some interests:</p>
            <ul className='list-disc ml-4'>
              <li>Games</li>
              <li>Art</li>
              <li>Series</li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/image.png"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
        </section>
      </main>
    )
}