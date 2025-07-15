
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        metalness={0.7} 
        roughness={0.3} 
        wireframe={false}
      />
    </mesh>
  );
};

const AnimatedCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        metalness={0.5} 
        roughness={0.4}
      />
    </mesh>
  );
};

const FloatingTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.4;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 1.5, -1]}>
      <torusGeometry args={[0.6, 0.2, 16, 100]} />
      <meshStandardMaterial 
        color="#06b6d4" 
        metalness={0.6} 
        roughness={0.2}
      />
    </mesh>
  );
};

export const Hero3DAnimation = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <AnimatedSphere />
        <AnimatedCube />
        <FloatingTorus />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
