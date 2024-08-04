import React, { ReactNode } from 'react'
import { Button } from './button'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface Props {
  href: string;
  children: ReactNode;
}

function NavLink(props: Props) {
  const { href, children } = props

  const pathname = usePathname()

  const isActive = pathname == href 

  return (
    <Link className='flex-1' href={href}>
      <Button className='w-full' variant={isActive ? 'default' : 'link'}>
        {children}
      </Button>
    </Link>
  )
}

export default NavLink
