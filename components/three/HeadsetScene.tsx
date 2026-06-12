'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, MeshTransmissionMaterial, OrbitControls, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

// A stylized VR headset constructed from primitives — no external GLB needed.
function Headset() {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!group.current) return;
    const t = s.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.4) * 0.6 + s.mouse.x * 0.5;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -s.mouse.y * 0.25, 0.05);
    group.current.position.y = Math.sin(t * 0.8) * 0.08;
  });
  return (
    <group ref={group} scale={1.2}>
      {/* Main shell — front, sculpted */}
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 1.15, 1.0]} />
        <meshPhysicalMaterial color="#0a0a14" metalness={0.9} roughness={0.25} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      {/* Soft chamfered bezel */}
      <mesh position={[0, 0, 0.55]}>
        <boxGeometry args={[2.5, 1.2, 0.05]} />
        <meshPhysicalMaterial color="#15152a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Glossy iridescent visor */}
      <mesh position={[0, 0, 0.58]}>
        <boxGeometry args={[2.2, 0.95, 0.06]} />
        <MeshTransmissionMaterial
          color="#1a1a3a"
          thickness={0.6}
          roughness={0.05}
          transmission={0.9}
          ior={1.4}
          chromaticAberration={0.6}
          anisotropy={0.5}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.1}
        />
      </mesh>
      {/* Glowing eye sensors */}
      <mesh position={[-0.55, 0.05, 0.62]}>
        <circleGeometry args={[0.18, 32]} />
        <meshBasicMaterial color="#6a6aff" toneMapped={false} />
      </mesh>
      <mesh position={[0.55, 0.05, 0.62]}>
        <circleGeometry args={[0.18, 32]} />
        <meshBasicMaterial color="#ff3d8c" toneMapped={false} />
      </mesh>
      {/* Logo strip */}
      <mesh position={[0, -0.45, 0.61]}>
        <planeGeometry args={[0.6, 0.06]} />
        <meshBasicMaterial color="#5eead4" toneMapped={false} />
      </mesh>
      {/* Side cameras */}
      {[-1.0, 1.0].map((x, i) => (
        <mesh key={i} position={[x, 0.35, 0.45]} rotation={[0, x > 0 ? -0.4 : 0.4, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.12, 24]} />
          <meshStandardMaterial color="#0a0a14" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      {/* Strap arms */}
      {[-1, 1].map((x, i) => (
        <mesh key={i} position={[x * 1.25, 0, 0]} rotation={[0, 0, x * 0.05]}>
          <boxGeometry args={[0.12, 0.5, 0.85]} />
          <meshPhysicalMaterial color="#1a1a2e" metalness={0.7} roughness={0.4} />
        </mesh>
      ))}
      {/* Headband */}
      <mesh position={[0, 0.55, -0.3]} rotation={[0.2, 0, 0]}>
        <torusGeometry args={[0.95, 0.05, 16, 64, Math.PI]} />
        <meshStandardMaterial color="#15152a" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Foam pad */}
      <mesh position={[0, -0.05, 0.4]}>
        <boxGeometry args={[2.0, 0.85, 0.12]} />
        <meshStandardMaterial color="#0a0a14" roughness={0.95} metalness={0.05} />
      </mesh>
    </group>
  );
}

export function HeadsetScene({ interactive = false }: { interactive?: boolean }) {
  return (
    <Canvas shadows camera={{ position: [0, 0.4, 5], fov: 35 }} dpr={[1, 2]} gl={{ antialias: true }}>
      <color attach="background" args={['#030308']} />
      <fog attach="fog" args={['#030308', 6, 14]} />
      <ambientLight intensity={0.25} />
      <spotLight position={[6, 6, 6]} angle={0.3} penumbra={1} intensity={3} color="#6a6aff" castShadow />
      <spotLight position={[-6, 4, 3]} angle={0.4} penumbra={1} intensity={2.2} color="#ff3d8c" />
      <pointLight position={[0, -2, 4]} intensity={0.6} color="#5eead4" />
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <Headset />
        </Float>
        <ContactShadows position={[0, -1.2, 0]} opacity={0.5} blur={2.8} far={3} color="#000" />
        <Environment preset="city" />
        <Sparkles count={80} scale={8} size={2} speed={0.4} color="#a8a8ff" opacity={0.6} />
        <EffectComposer>
          <Bloom intensity={1.4} luminanceThreshold={0.4} luminanceSmoothing={0.9} mipmapBlur />
          <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={[0.0008, 0.0008] as any} radialModulation={false} modulationOffset={0} />
        </EffectComposer>
      </Suspense>
      {interactive && <OrbitControls enablePan={false} minDistance={3.5} maxDistance={7} minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/1.8} />}
    </Canvas>
  );
}

export function FloatingLens() {
  return (
    <Canvas camera={{ position: [0,0,3.5], fov:45 }}>
      <ambientLight intensity={0.4}/>
      <pointLight position={[3,3,3]} color="#6a6aff" intensity={3}/>
      <pointLight position={[-3,-2,2]} color="#ff3d8c" intensity={3}/>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh>
          <torusKnotGeometry args={[0.9, 0.28, 200, 32]} />
          <meshPhysicalMaterial color="#15152a" metalness={1} roughness={0.05} clearcoat={1} iridescence={1} iridescenceIOR={1.5} />
        </mesh>
      </Float>
      <Sparkles count={40} scale={5} size={3} speed={0.5} color="#a8a8ff"/>
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.3} mipmapBlur/>
      </EffectComposer>
    </Canvas>
  );
}
