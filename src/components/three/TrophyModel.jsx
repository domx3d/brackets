/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 public\\models\\trophy.glb
*/

import React, { useRef } from 'react'
import { useEnvironment, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CanvasTexture } from 'three';


export function TrophyModel({winnerTeam}) {
  const { nodes, materials } = useGLTF('models/trophy_compressed.glb')
  const groupRef = useRef()
  
  useFrame((_, delta) => {
   //groupRef.current.rotation.x -= Math.PI/64 * delta 
   groupRef.current.rotation.y += Math.PI/8 * delta
  })

  const textTexture = createTextTexture(winnerTeam, 'white', 'grey', 80);
  const envMap = useEnvironment({files:"environment/orlando_stadium_1k.hdr"})

  Object.keys(materials).forEach((key) => {
    materials[key].envMap = envMap
    if(key === 'gold')
      materials[key].roughness = 0.15
    if(key === 'gold_sign') {
      materials[key].roughness = 0.8
      materials[key].map = textTexture
    }
  });
  
  return (
    <group dispose={null} ref={groupRef}>
      <mesh geometry={nodes.Cube.geometry} material={materials['gold']} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials['cube_marble']} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials['gold']} />
      <mesh geometry={nodes.sign2.geometry} material={materials['gold_sign']} />
    </group>
  )
}

useGLTF.preload('models/trophy.glb')

function createTextTexture(text, fontColor, bgColor, fontSize) {
  const canvas = document.createElement('canvas');
  canvas.width = 500
  canvas.height  = 350
  const context = canvas.getContext('2d');
  context.font = `${fontSize}px Arial`;
  const textWidth = context.measureText(text).width;
  
  //background
  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = fontColor;
  // draw at center  
  context.fillText(text , (canvas.width/2) - (textWidth / 2), (canvas.height+fontSize/2)/2);

  const texture = new CanvasTexture(canvas);
  return texture;
}