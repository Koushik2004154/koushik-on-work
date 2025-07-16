
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingRing = ({ position, color, rotationSpeed }: { position: [number, number, number], color: string, rotationSpeed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * 0.5;
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.8, 0.05, 8, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const FloatingParticle = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.4) * 0.2;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.6} 
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const OrbitingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.x = Math.cos(time * 0.5) * 1.2;
      meshRef.current.position.z = Math.sin(time * 0.5) * 1.2;
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        metalness={0.7} 
        roughness={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export const Profile3DAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-2, -2, -2]} intensity={0.6} color="#8b5cf6" />
        
        {/* Floating rings around the profile */}
        <FloatingRing position={[0, 0, 0]} color="#3b82f6" rotationSpeed={0.005} />
        <FloatingRing position={[0, 0, -0.5]} color="#8b5cf6" rotationSpeed={-0.008} />
        <FloatingRing position={[0, 0, 0.5]} color="#06b6d4" rotationSpeed={0.012} />
        
        {/* Floating particles */}
        <FloatingParticle position={[1, 0.5, 0]} color="#3b82f6" />
        <FloatingParticle position={[-1, -0.5, 0]} color="#8b5cf6" />
        <FloatingParticle position={[0.5, -1, 0]} color="#06b6d4" />
        <FloatingParticle position={[-0.5, 1, 0]} color="#f59e0b" />
        
        {/* Orbiting cube */}
        <OrbitingCube />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};
