"use client"

import styled from 'styled-components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mariana M.',
  description: 'Mariana porfolio',
}


const CardResume = styled.div`
    border: 0.5px #dbdbdb solid;
    background-color: #121212;
    border-radius: 6px;
    padding: 20px;
    width: 100%;
    height: 100%;
    margin-bottom: 4rem;
`

export default function Home() {
  return (
    <>
      <main>
        <p>Hi there 👋</p>
        <p>I&apos;m a <span>Front End</span> developer, based in Brazil.</p>
        <hr className='mt-2 mb-6'/>
        <div>
            <p>Here are my current posts:</p>
        </div>
      </main>
    </>
  )
}
