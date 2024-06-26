import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { CubicBezierLine, OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gif')

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15} 
        groundColor="black" 
      />

      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} />
      <primitive 
        object={computer.scene} 
        sacle={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas