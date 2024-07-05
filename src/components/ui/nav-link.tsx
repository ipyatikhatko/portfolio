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
    <Button 
      variant='link' 
      className={clsx(
        '',
        {
          'underline decoration-teal-400' : isActive
        }
      )}>
      <Link href={href}>{children}</Link>
    </Button>
  )
}

export default NavLink
