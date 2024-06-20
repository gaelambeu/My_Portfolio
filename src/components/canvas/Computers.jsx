import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { CubicBezierLine, OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gif')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
    >

    </Canvas>
  )
}
export default Computers