'use client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { Color, Vector3 } from 'three'
import Core from './core'
import CoreOuter from './core-outer'
import { Particles } from './particles'

function CameraController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  // Capture mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update camera position every frame
  useFrame(() => {
    const offsetX = mouse.current.x * 1.5; // Adjust sensitivity on x-axis
    const offsetY = mouse.current.y * 1.5; // Adjust sensitivity on y-axis

    // Set camera to look at the center and move based on mouse position
    camera.position.set(offsetX, offsetY, camera.position.z);
    camera.lookAt(new Vector3(0, 0, 0));
  });

  return null;
}

interface Props {}

function Scene(props: Props) {
  const {} = props

  return (
    <div className='fixed top-0 left-0 w-full h-screen'>
      <Canvas>
        <ambientLight color={ new Color('')} intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Particles count={500} />
        <CoreOuter/>
        <Core/>
        <CameraController/>
      </Canvas>
    </div>
  )
}

export default Scene
