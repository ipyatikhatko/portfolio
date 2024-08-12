'use client'
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


function CVPage() {
  
  return (
    <section className='px-4 w-full min-h-screen grid place-content-center'>
      <Link href={'/cv_ilya_pyatikhatko.pdf'} target='_blank'>
        <Button variant='link' className='text-2xl'>
          Open file in browser
          <Share className='ml-2'/>
        </Button>
      </Link>
    </section>
  )
}

export default CVPage
