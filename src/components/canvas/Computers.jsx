import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gif')

  return (
    <mesh>
      
    </mesh>
  )
}

export default Computers