import React, {useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './TrophyModel'
import { OrbitControls } from '@react-three/drei'

export default function Trophy() {


  return (
    
      <Canvas camera={{ fov:45, near: 0.01, far:1000, position: [0, 0.5, 1.5]}}>
        <OrbitControls />
        <ambientLight color='white' intensity={50} />
        <pointLight color='white' intensity={150} position={[0,0,10]}/>
        <Model />

      </Canvas>
  )
}
