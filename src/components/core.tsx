'use client'
import React, { useRef, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Core(props: MeshProps) {
  const meshRef = useRef<Mesh>(null)  

  useGSAP(() => {
    if(!meshRef.current) return;

    gsap.to(meshRef.current.material, {
      opacity: 1,
      duration: 1
    })

    const reachingEnd = gsap.timeline({ 
      scrollTrigger: {
        trigger: '#story',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      }
    })

    reachingEnd.to(meshRef.current.material, {
      opacity: 0,
    })

    const reachingAbout = gsap.timeline({ 
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        scrub: true,
      }
    })

    reachingAbout.to(meshRef.current.position, {
      z: 3,
      y: -3,
      ease: 'sine',
      duration: 1,
    })

  }, [])
  
  useFrame((state, delta) => {
    if(meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25
    }
  })
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} {...props}>
      <icosahedronGeometry args={[2, 1]}/>
      <meshNormalMaterial transparent={true} opacity={0} flatShading={true} />
    </mesh>
  )
}

export default Core;