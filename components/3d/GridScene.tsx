'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

function FloatingPanel({ position, offset }: { position: [number, number, number]; offset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time + offset) * 0.3;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.5, 1]} />
      <meshStandardMaterial color="#2E5E99" transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function GridScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full hidden md:block">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }} gl={{ alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#7BA4D0" />
        
        <Grid
          args={[30, 30]}
          position={[0, -2, 0]}
          cellColor="#2E5E99"
          sectionColor="#7BA4D0"
          cellSize={1}
          sectionSize={5}
          fadeDistance={25}
          infiniteGrid
        />

        <FloatingPanel position={[-4, 1, -2]} offset={0} />
        <FloatingPanel position={[4, 2, -4]} offset={Math.PI / 2} />
        <FloatingPanel position={[-2, 3, -6]} offset={Math.PI} />
        <FloatingPanel position={[3, 0.5, -3]} offset={Math.PI * 1.5} />
      </Canvas>
    </div>
  );
}
