'use client'
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import React, { useId, useRef, useState } from 'react'

interface Props {
  id: string;
  children: string;
  className?: string;
  tweenVars?: GSAPTweenVars;
}

function Typewriter(props: Props) {
  const { children, className, id, tweenVars } = props
  const [start, setStart] = useState(false)
    
  useGSAP(() => {
    gsap.to(
      `#${id} > span`,
      { 
        display: 'inline', 
        stagger: 0.1, 
        onStart: () => {
          setStart(true)
        },
        ...tweenVars 
      },
    )
  }, [])

  if(!children.length) {
    return <></>
  }

  const arrayOfSpanChar = children
    .split('')
    .map((char, i) => (
      <span className='hidden' key={i}>{char}</span>
    ))

  return (
    <div 
      id={id} 
      className={clsx(
        'bg-white text-black dark:bg-black dark:text-white w-fit font-mono', 
        start && 'p-2',
        className
      )}
    >
      {arrayOfSpanChar}
    </div>
  )
}

export default Typewriter
