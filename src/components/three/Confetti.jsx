import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { extend, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'



extend({ MeshLineGeometry, MeshLineMaterial })

export default function Confetti() {
/*   const { dash, count, radius } = useControls({
    dash: { value: 0.9, min: 0, max: 0.99, step: 0.01 },
    count: { value: 50, min: 0, max: 200, step: 1 },
    radius: { value: 50, min: 1, max: 100, step: 1 }
  }) */
  const dash = 0.98
  const count = 200
  const radius = 4
  return (
    <Lines dash={dash} count={count} radius={radius} colors={[[10, 0.5, 2], [1, 2, 10], '#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff']} />      
  )
}

function Lines({ dash, count, radius, colors, rand = THREE.MathUtils.randFloatSpread }) {
  const lines = useMemo(() => {
    return Array.from({ length: count }, () => {
      const pos = new THREE.Vector3(0, 9, 0)
      const points = Array.from({ length: 5 }, () => pos.add(new THREE.Vector3(rand(radius), -2, rand(radius))).clone())
      const curve = new THREE.CatmullRomCurve3(points).getPoints(300)
      return {
        color: colors[parseInt(colors.length * Math.random())],
        width: Math.max(radius/1.2 / 100, (radius/1.2 / 50) * Math.random()),
        speed: Math.max(0.2, 0.9 * Math.random()),
        curve: curve.flatMap((point) => point.toArray())
      }
    })
  }, [colors, count, radius])
  return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />)
}

function Fatline({ curve, width, color, speed, dash }) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.material.dashOffset -= (delta * speed) / 10))
  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <meshLineGeometry points={curve} />
      <meshLineMaterial transparent lineWidth={width} color={color} depthWrite={false} dashArray={0.25} dashRatio={dash} toneMapped={false} />
    </mesh>
  )
}
