'use client'
import React from 'react'
import ModeToggle from './theme-toggle'
import NavLink from './ui/nav-link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface Props {}

function Navbar(props: Props) {
  const {} = props
  useGSAP(() => {
    gsap.to('#nav', {
      opacity: 1,
      y: 0,
      delay: 4,
      duration: 1,
    })
  }, [])  

  return (
    <nav id='nav' className='opacity-0 fixed top-4 left-0 px-2 w-screen z-[100] h-14 -translate-y-5'>
      <div className='max-w-screen-md mx-auto my-0 px-4 h-full flex justify-between items-center rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md'>
        <div className='hidden sm:block w-20'/>
        <div className='flex items-center justify-center gap-2 flex-1 max-w-[300px]'>
          <NavLink href='/'>
            Overview
          </NavLink>
          <NavLink href='/cv'>
            CV
          </NavLink>
          <NavLink href='/socials'>
            Socials
          </NavLink>
        </div>
        <div className='sm:w-20'>
          <ModeToggle/>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
