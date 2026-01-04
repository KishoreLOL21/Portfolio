"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Avatar() {
  const rightArmRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Gentle body sway
    if (bodyRef.current) {
      bodyRef.current.rotation.y = Math.sin(t * 0.5) * 0.08;
    }

    // Waving hand
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(t * 3) * 0.5;
    }
  });

  return (
    <group ref={bodyRef} position={[0, -1.6, 0]}>
      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.35, 0.45, 1.2, 32]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.7, 1.1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>

      {/* Right Arm (Waving) */}
      <group ref={rightArmRef} position={[0.7, 1.3, 0]}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
          <meshStandardMaterial color="#9ca3af" />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.25, -0.4, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.1, 16]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>

      <mesh position={[0.25, -0.4, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.1, 16]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
    </group>
  );
}

const MyAvatar3d = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 1.5, 5], fov: 45 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Avatar />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyAvatar3d;
