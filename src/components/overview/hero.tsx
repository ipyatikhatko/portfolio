'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Typewrite from '../typewrite'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


interface Props {}

function Hero(props: Props) {
  const {} = props

  useGSAP(() => {
    
    gsap.to('.hero-bg', {
      opacity: 1,
      duration: 3,
    })

  }, [])

  return (
    <section className='h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-slate-400 dark:from-slate-800 to-transparent'>
      <Typewrite 
        id='hero'
        tweenVars={{ delay: 2 }} 
        className='z-50 text-center text-xl md:text-4xl font-semibold mx-auto my-0' 
      >
        Hi! My name is Elijah
      </Typewrite>
      <div className='hero-bg w-[300px] h-[300px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full transition-all'/>
    </section>
  )
}

export default Hero
