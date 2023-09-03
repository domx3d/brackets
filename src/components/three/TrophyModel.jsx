/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 public\\models\\trophy.glb
*/

import React, { useRef } from 'react'
import { useEnvironment, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export function TrophyModel(props) {
  const { nodes, materials } = useGLTF('models/trophy.glb')

  //console.log(materials)
  const groupRef = useRef()
  
  useFrame((_, delta) => {
   //groupRef.current.rotation.x -= Math.PI/64 * delta 
   groupRef.current.rotation.y += Math.PI/8 * delta
  })

  const envMap = useEnvironment({files:"environment/orlando_stadium_1k.hdr"})
  Object.keys(materials).forEach((key) => {
    materials[key].envMap = envMap
    if(key === 'gold')
      materials[key].roughness = 0.2
  });
  
  
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials.gold} />
    </group>
  )
}

useGLTF.preload('models/trophy.glb')
