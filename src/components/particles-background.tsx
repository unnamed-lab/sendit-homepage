/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";


export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any ) => {
    await loadFull(engine)
  }, [])

  return (
    <>
    <Particles
        id="tsparticles"
        init={particlesInit}
        width="30svh"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 5 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 300, enable: true, opacity: 0.7, width: 1 },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 7 } },
            
          },
          detectRetina: true,
          
        }}
      />
      <div className="absolute inset-0 z-10">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial color="#223D40" attach="material" distort={0.3} speed={1.5} />
          </Sphere>
        </Canvas>
      </div>
    </>
  )
}

