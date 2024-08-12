'use client'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
const PdfViewerComponent = dynamic(() => import("../../components/cv/pdf-viewer"), { ssr: false, });


function CVPage() {
  
  return (
    <section className='px-4 w-full py-28'>
      <PdfViewerComponent/>
    </section>
  )
}

export default CVPage
