"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Image, Environment, OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function FloatingCard({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 1.5]} />
      <meshStandardMaterial>
        <Image url={imageUrl} transparent scale={[2, 1.5, 1]} />
      </meshStandardMaterial>
    </mesh>
  )
}

function Scene({ imageUrl }: { imageUrl: string }) {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingCard imageUrl={imageUrl} />
      <OrbitControls enableZoom={false} />
    </>
  )
}

function Fallback() {
  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <div className="animate-pulse bg-gray-800 w-full h-full" />
    </div>
  )
}

export function ThreeDCard({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full aspect-video">
      <Suspense fallback={<Fallback />}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ preserveDrawingBuffer: true }}>
          <Scene imageUrl={imageUrl} />
        </Canvas>
      </Suspense>
    </div>
  )
}

