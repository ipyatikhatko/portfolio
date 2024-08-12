'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import Typewriter from '../typewrite'
import { Button } from '../ui/button'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger) 

interface Props {}

function FullStory(props: Props) {
  const {} = props

  useGSAP(() => {

    const elements = document.querySelectorAll('#story-content > *')

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
        delay: 0.8,
      })
    })
  }, [])

  return (
    <section id='story' className='relative min-h-screen pb-[50vh] bg-gradient-to-t from-background-b dark:from-background-dark-b to-transparent'>
      <div className='h-full max-w-screen-md mx-auto my-0 px-4 sm:px-8'>
        <Typewriter id='story-heading'
          tweenVars={{
            scrollTrigger: {
              trigger: '#story-heading',
              start: 'top 80%',
              end: 'bottom 40%',
              scrub: true,
            },
          }} 
          className='!p-0 mb-4 uppercase font-bold text-2xl md:text-4xl -tracking-wide'
          >
            story
          </Typewriter>
        <div id='story-content' className='tracking-wide space-y-10'>
          <p className='paragraph'>
              My career in IT began in <b>2018</b> after I left college in search of a promising job. I was particularly interested in QA as a good starting point, so I enrolled in a QA course. However, despite my efforts, I initially failed to secure a position through interviews, which was quite disheartening.
          </p>
          <p className='paragraph'>
              Fortunately, a friend suggested an open job for a <b>Tech Support Engineer</b> role in IT, with potential growth into QA or PM roles. This inspired me to apply, and I got the job. In this role, I mainly handled calls and emails, managing tickets in <b>Jira</b>. In my free time, I started learning Java for QA Automation, finding it enjoyable to automate user flows on my favorite websites.
          </p>
          <p className='paragraph'>
              By <b>2019</b>, I had become proficient with <b>Jira Query Language (JQL)</b>, catching the attention of my colleagues and manager. I created several useful dashboards for productivity and management using JQL.
          </p>
          <p className='paragraph'>
              While continuing to improve my Java skills, I ventured into Telegram Bot development using Java and the Telegram API. This experience introduced me to how <b>REST API</b> works. I realized that Jira also had API functionalities, which significantly contributed to my growth.
          </p>
          <p className='paragraph'>
              By the end of my Tech Support journey in <b>late 2019</b>, I had developed three Telegram bots connected with our ticketing system in Jira via API, embodying the automation aspect I was keen to learn for QA. This achievement paved the way for my promotion to another department, marking the start of my <b>Front End</b> journey.
          </p>
          <p className='paragraph'>
              In my new role, I learned the basics of <b>HTML, CSS, JS</b>, and a bit about SQL, setting a strong foundation for my continued growth in IT.
          </p>
          <p className='paragraph'>
            From there, I delved deeper into JavaScript and became interested in expanding my skills further, as my job was restricted by technology choices. I chose to learn <b>React</b> and its ecosystem, including routing with <b>React Router</b>, state management with <b>Redux</b>, UI libraries like <b>MUI</b>, CSS preprocessors like <b>Sass</b>, and <b>TypeScript</b>.
          </p>
          <p className='paragraph'>
              I worked there for two years, learning these technologies in my free time. After taking a short break to prepare and practice my skills, I began searching for a new job utilizing these technologies.
          </p>
          <p className='paragraph'>
              In <b>2022</b>, I received an offer from a family friend to work on a project for her client. Here, I practiced my skills in React, Back End development with <b>express.js</b>, Google APIs, and the Etsy platform API. The project involved creating an internal tool for uploading listings from Google Drive and Spreadsheets, and it lasted for three months.
          </p>
          <p className='paragraph'>
              After completing a couple of interviews, I received an offer from a great and friendly company with a nice tech stack.
          </p>
          <h3 className='w-fit px-2 bg-black text-white dark:bg-white dark:text-black'>24.02.2022 💔</h3>
          <p className='paragraph'>
              That was planned as my first day to start working...
              And the day started earlier for many Ukrainians. We were awakened by the sounds of explosions from missile attacks by Russia. It was like waking up in a nightmare, and it continues.  <br />
            <a className='bg-green-400 rounded-sm underline text-green-700 px-2' href="https://supportukrainenow.org/">Support Ukraine</a>
          </p>
          <p className='paragraph'>
              The company reached out to me and rescheduled my start date until the environment was safer and calmer, which was very supportive. They didn&apos;t withdraw the offer and kept their word. Once the situation stabilized, I started working remotely. Initially, I was on the bench waiting for a project, and the Team Lead mentored me with a pet project to keep me engaged, which was really nice.
          </p>
          <p className='paragraph'>
              I have been working here for about two years, gaining a lot of experience on different projects with various clients from around the world.
          </p>
          <p className='paragraph'>
              From these experiences, I have developed a list of my main technologies that I truly enjoy working with.
              I enjoy creative stuff, and projects that helps people and make world a better place.
          </p>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <Link href={'/cv'}>
            <Button>Check out my CV</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FullStory
