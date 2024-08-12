'use client'
import React, { useRef, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function CoreOuter(props: MeshProps) {
  const meshRef = useRef<Mesh>(null)  

  useGSAP(() => {
    if(!meshRef.current) return;

    gsap.to(meshRef.current.scale, {
      x: 1.25,
      y: 1.25,
      z: 1.25,
      ease: 'sine',
      duration: 1,
    })

    gsap.to(meshRef.current.material, {
      opacity: 0.5,
      ease: 'sine',
      duration: 1,
    })

    const reachingAbout = gsap.timeline({ 
      scrollTrigger: {
        start: 'top top',
        end: 'bottom center',
        scrub: true,
      }
    })

    reachingAbout.to(meshRef.current.scale, {
      x: 5,
      y: 5,
      z: 5,
      ease: 'sine',
      duration: 1,
    })

    reachingAbout.to(meshRef.current.material, {
      opacity: 0,
      duration: 1,
    })

  }, [])
  
  useFrame((state, delta) => {
    if(meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
      meshRef.current.rotation.x += delta * 0.15
    }
  })
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} {...props}>
      <icosahedronGeometry args={[2, 1]}/>
      <meshNormalMaterial transparent={true} wireframe={true} />
    </mesh>
  )
}

export default CoreOuter;