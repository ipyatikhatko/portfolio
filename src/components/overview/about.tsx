'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import Typewriter from '../typewrite'

gsap.registerPlugin(ScrollTrigger) 

interface Props {}

function About(props: Props) {
  const {} = props

  useGSAP(() => {

    const elements = document.querySelectorAll('#about-content > *')

    elements.forEach((el) => {
      gsap.fromTo(el, {
        y: 50,
        transform: 'rotate3d(1, 1, 0.05, 25deg)',
        opacity: 0,
      }, {
        y: 0,
        transform: 'rotate3d(0, 0, 0, 0)',
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
        stagger: 0.3,
        delay: 0.3,
      })
    })
  }, [])

  return (
    <section id='about' className='relative py-20'>
      <div className='h-full max-w-screen-md mx-auto my-0 px-4 sm:px-8'>
        <Typewriter 
          id='about-heading'
          tweenVars={{ 
            scrollTrigger: {
              trigger: '#about-heading',
              start: 'top 80%',
              end: 'bottom 40%',
              scrub: true,
            },
          }} 
          className='!p-0 mb-4 uppercase font-bold text-2xl md:text-4xl -tracking-wide'
          >
            About me
          </Typewriter>
        <div id='about-content' className='tracking-wide p-2'>
          <p className='paragraph'>I am a passionate and dedicated <b>React/Next.js</b> front-end developer with over <b>4 years of experience</b> in creating <b>dynamic</b> and <b>responsive</b> web applications. My expertise lies in crafting seamless user experiences and bringing innovative designs to life using modern JavaScript frameworks.</p>
          <br />
          <p className='paragraph'>Throughout my career, I have honed my skills in front-end development, focusing on building <b>robust and scalable applications</b>. I thrive in collaborative environments and enjoy working closely with designers and back-end developers to deliver <b>high-quality</b> projects.</p>
          <br />
          <p className='paragraph'>With a <b>keen eye for detail</b> and a commitment to staying updated with the <b>latest industry trends</b>, I continuously strive to enhance my <b>knowledge and skills</b>. My goal is to contribute to meaningful projects that make a positive impact on users lives and to grow as a developer in a forward-thinking organization.</p>
        </div>
      </div>
    </section>
  )
}

export default About
