'use client'
import Link from 'next/link'
import React from 'react'
import ModeToggle from './theme-toggle'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import NavLink from './ui/nav-link'

interface Props {}

function Navbar(props: Props) {
  const {} = props

  return (
    <nav className='bg-white dark:bg-black px-4 md:px-0 h-12 border-b border-neutral-100'>
      <div className='max-w-screen-md mx-auto my-0 h-full flex justify-between items-center'>
        <div className='flex items-center'>
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
        <ModeToggle/>
      </div>

    </nav>
  )
}

export default Navbar
