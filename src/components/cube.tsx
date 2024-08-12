
import React, { useRef, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import { Mesh, Vector3 } from 'three'

function Cube(props: MeshProps) {
  const meshRef = useRef<Mesh>(null)  
  
  useFrame((state, delta) => {
      if(meshRef.current) {
        meshRef.current.rotation.y += delta * 0.25
        meshRef.current.rotation.x += delta * 0.25
      }
  })
  
  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[3, 3, 3]} />
      <meshNormalMaterial flatShading={true} />
    </mesh>
  )
}

export default Cube;