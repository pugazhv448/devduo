'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function MouseTracker() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.3, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const coords = new Float32Array(80 * 3);
    for (let i = 0; i < 80; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 20;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 20;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return coords;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={80}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#7BA4D0" transparent opacity={0.6} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full hidden md:block">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} color="#7BA4D0" intensity={1.2} />
        <directionalLight position={[-10, -5, -5]} color="#2E5E99" intensity={0.4} />
        <pointLight position={[0, 0, 3]} color="#E7F0FA" intensity={0.8} />

        {/* Spheres */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[-3.5, 1.5, -1]}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial color="#2E5E99" distort={0.4} metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>
        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
          <mesh position={[3.5, -1, -2]}>
            <sphereGeometry args={[1.2, 64, 64]} />
            <MeshDistortMaterial color="#7BA4D0" distort={0.4} metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>
        <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh position={[0, 2.5, -3]}>
            <sphereGeometry args={[0.8, 64, 64]} />
            <MeshDistortMaterial color="#0D2440" distort={0.4} metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>

        {/* Boxes */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[-2, -1.5, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshStandardMaterial color="#7BA4D0" metalness={0.9} roughness={0.1} />
          </mesh>
        </Float>
        <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.2}>
          <mesh position={[3, 1.5, -1]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#2E5E99" metalness={0.9} roughness={0.1} />
          </mesh>
        </Float>
        <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[-4, 0, -2]}>
            <boxGeometry args={[0.9, 0.9, 0.9]} />
            <meshStandardMaterial color="#E7F0FA" metalness={0.9} roughness={0.1} />
          </mesh>
        </Float>

        {/* Torus */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[1.5, -2, 0]}>
            <torusGeometry args={[0.8, 0.3, 16, 100]} />
            <MeshWobbleMaterial factor={0.3} color="#7BA4D0" metalness={0.6} roughness={0.3} />
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          <mesh position={[-1.5, 1, -1]}>
            <torusGeometry args={[0.6, 0.2, 16, 100]} />
            <MeshWobbleMaterial factor={0.3} color="#2E5E99" metalness={0.6} roughness={0.3} />
          </mesh>
        </Float>

        <ParticleField />
        <MouseTracker />
      </Canvas>
    </div>
  );
}
