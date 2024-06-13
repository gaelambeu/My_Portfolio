import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

const (props) {
    const { nodes, materials } = useGLTF("/island.glb");
    return (
        <group {...props} dispose={null}>
            <mesh 
                castShadow
                receiveShadow
                
            />
        </group>
    )
}