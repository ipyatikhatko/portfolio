'use client'
import React from 'react'
import Typewrite from '../typewrite'

interface Props {}

function Hero(props: Props) {
  const {} = props

  return (
    <section className='h-screen flex items-center justify-center flex-col overflow-hidden bg-gradient-to-b from-background-t dark:from-background-dark-t to-transparent'>
      <Typewrite 
        id='greetings-heading'
        tweenVars={{delay: 1}} 
        className='z-50 text-xl md:text-4xl font-bold' 
      >
        Hi! My name is Ilya
      </Typewrite>
      <Typewrite 
        id='role-heading'
        tweenVars={{delay: 3}}  
        className='z-50 text-lg md:text-2xl font-semibold' 
      >
        Front End Developer
      </Typewrite>
    </section>
  )
}

export default Hero
