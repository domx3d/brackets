import React, {useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { TrophyModel } from './TrophyModel'
import { OrbitControls } from '@react-three/drei'
import Confetti from './Confetti'

export default function Trophy() {


  return (
    
      <Canvas camera={{ fov:45, near: 0.01, far:1000, position: [0, 0.5, 1.75]}}>
        <OrbitControls minDistance={1} maxDistance={5} enablePan={false}/>
        <ambientLight color='white' intensity={1} />
        <pointLight color='white' intensity={1} position={[0,0,10]}/>
        <TrophyModel />
        <Confetti />

      </Canvas>
  )
}
