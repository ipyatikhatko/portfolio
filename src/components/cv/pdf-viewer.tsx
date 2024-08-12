'use client'
import React, { useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '../ui/button';
import { Download, Eye, Printer, Share, View } from 'lucide-react';
import Link from 'next/link';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className='w-fit h-fit mx-auto my-0 shadow-lg '>
      <div className='flex justify-end gap-2 py-2'>
        <Link href={'/cv_ilya_pyatikhatko.pdf'} target='_blank'>
          <Button variant='secondary'>
            Open in viewer
            <Share className='ml-2' size={20}/>
          </Button>
        </Link>
      </div>
      <Document className='bg-white dark:bg-black' file="cv_ilya_pyatikhatko.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={1.11} pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default PdfViewer
